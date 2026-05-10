import JSZip from 'jszip';
import { parseEpub, type ParsedEpub } from './epub';

/**
 * Thrown by `parsePdf` when the PDF has no text layer at all (a true scanned image).
 * Callers can catch this and route to OCR instead of bubbling the error up.
 */
export class ScannedPdfError extends Error {
  readonly code = 'scanned-pdf';
  constructor(public readonly diag: string, public readonly pageCount: number) {
    super(`Scanned PDF — no text layer detected (${diag}). OCR required.`);
    this.name = 'ScannedPdfError';
  }
}

// pdfjs is heavy (~700KB), keep it dynamically imported so EPUB-only users don't pay for it.
let pdfjsPromise: Promise<typeof import('pdfjs-dist')> | null = null;

async function loadPdfjs(): Promise<typeof import('pdfjs-dist')> {
  if (pdfjsPromise) return pdfjsPromise;
  pdfjsPromise = (async () => {
    const pdfjs = await import('pdfjs-dist');
    const workerUrl = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
    return pdfjs;
  })();
  return pdfjsPromise;
}

/**
 * Cache the loaded PDFDocumentProxy keyed by File/Blob, so the preview panel and the
 * parse/OCR pipeline share one parse pass per upload. WeakMap lets the document
 * get GC'd once the user drops a different file.
 */
const pdfDocCache = new WeakMap<Blob, Promise<any>>();

/**
 * pdfjs ships JBIG2/OpenJPEG/QCMS WASM decoders, CMap encodings, and standard-font fallbacks
 * as separate runtime assets. Without these URLs scanned PDFs (which usually use JBIG2-encoded
 * page images) render as blank white canvases. The asset directories are copied into
 * public/pdfjs/ by `scripts/copy-pdfjs-assets.mjs` (wired into pre{dev,build} npm scripts).
 */
const PDFJS_ASSET_BASE = '/pdfjs/';

async function loadPdfDocument(file: File | Blob): Promise<any> {
  let cached = pdfDocCache.get(file);
  if (cached) return cached;
  cached = (async () => {
    const pdfjs = await loadPdfjs();
    const data = new Uint8Array(await file.arrayBuffer());
    return pdfjs.getDocument({
      data,
      cMapUrl: `${PDFJS_ASSET_BASE}cmaps/`,
      cMapPacked: true,
      standardFontDataUrl: `${PDFJS_ASSET_BASE}standard_fonts/`,
      wasmUrl: `${PDFJS_ASSET_BASE}wasm/`,
    }).promise;
  })();
  pdfDocCache.set(file, cached);
  return cached;
}

/**
 * Quick classification of a freshly-uploaded PDF: how many pages, and does any text layer
 * exist (sample the first few pages — full inspection happens in `parsePdf`).
 */
export async function detectPdfScannedStatus(file: File | Blob): Promise<{
  pageCount: number;
  isScanned: boolean;
  diag: string;
}> {
  const pdf = await loadPdfDocument(file);
  const sampleN = Math.min(3, pdf.numPages);
  let totalItems = 0;
  let totalChars = 0;
  for (let i = 1; i <= sampleN; i++) {
    const page = await pdf.getPage(i);
    const tc = await page.getTextContent();
    for (const it of tc.items as any[]) {
      if (typeof it?.str === 'string' && it.str.length > 0) {
        totalItems++;
        totalChars += it.str.length;
      }
    }
  }
  return {
    pageCount: pdf.numPages,
    isScanned: totalItems === 0 || totalChars === 0,
    diag: `pages=${pdf.numPages}, sampled=${sampleN}, items=${totalItems}, chars=${totalChars}`,
  };
}

/** Render one page as a JPEG (base64) — used for the "translate this page" test flow. */
export async function renderSinglePageAsJpeg(
  file: File | Blob,
  pageNumber: number,
  maxDim = 1600,
  jpegQuality = 0.85,
): Promise<{ base64: string; mimeType: string }> {
  const pdf = await loadPdfDocument(file);
  return renderPageAsJpeg(pdf, pageNumber, maxDim, jpegQuality);
}

/**
 * Extract structured paragraphs from a single text-layer page — mirrors the per-page work
 * inside `parsePdf`, exposed for the "translate this page" test flow so users can preview a
 * single page's translation before committing to the whole book.
 */
export async function extractSinglePageParagraphs(
  file: File | Blob,
  pageNumber: number,
): Promise<Paragraph[]> {
  const pdf = await loadPdfDocument(file);
  const bodyFontSize = await detectBodyFontSize(pdf);
  const page = await pdf.getPage(pageNumber);
  const lines = await extractPageLines(page);
  return linesToParagraphs(lines, bodyFontSize);
}

/** Render a specific page into a caller-provided canvas. Used by the preview panel. */
export async function renderPdfPageToCanvas(
  file: File | Blob,
  pageNumber: number,
  canvas: HTMLCanvasElement,
  maxDim: number,
): Promise<void> {
  const pdf = await loadPdfDocument(file);
  const page = await pdf.getPage(pageNumber);
  const baseViewport = page.getViewport({ scale: 1 });
  const scale = Math.max(0.1, maxDim / Math.max(baseViewport.width, baseViewport.height));
  const viewport = page.getViewport({ scale });
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  await page.render({ canvas, viewport }).promise;
}

interface Line {
  text: string;
  x: number;
  /** Top-origin Y (larger = lower on page). */
  y: number;
  fontSize: number;
}

export type ParaTag = 'p' | 'h1' | 'h2' | 'h3';

export interface Paragraph {
  type: ParaTag;
  text: string;
}

interface PdfChapter {
  title: string;
  paragraphs: Paragraph[];
}

interface OutlineEntry {
  title: string;
  /** 0-based page index. */
  pageIndex: number;
}

interface PageStats {
  itemCount: number;
  emptyStrCount: number;
  nonEmptyStrCount: number;
  totalChars: number;
}

/**
 * Extract logical lines from a single page by clustering text items by Y coordinate.
 * pdfjs gives positioned glyph runs; we group runs with similar Y into one line, then
 * sort the runs in each line by X.
 */
async function extractPageLines(page: any, stats?: PageStats): Promise<Line[]> {
  const tc = await page.getTextContent();
  type Run = { str: string; x: number; y: number; fontSize: number };
  const runs: Run[] = [];
  for (const it of tc.items as any[]) {
    if (typeof it.str !== 'string') continue;
    if (stats) {
      stats.itemCount++;
      if (it.str.length === 0) stats.emptyStrCount++;
      else { stats.nonEmptyStrCount++; stats.totalChars += it.str.length; }
    }
    if (it.str.length === 0) continue;
    const t = it.transform as number[] | undefined;
    if (!t) continue;
    const fontSize = Math.hypot(t[2], t[3]) || (typeof it.height === 'number' ? it.height : 12);
    runs.push({ str: it.str, x: t[4], y: -t[5], fontSize });
  }
  if (runs.length === 0) return [];

  runs.sort((a, b) => a.y - b.y || a.x - b.x);

  const lines: Line[] = [];
  let buf: Run[] = [];
  let bufY = 0;
  let bufFontSize = 12;

  const flush = () => {
    if (buf.length === 0) return;
    buf.sort((a, b) => a.x - b.x);
    const text = buf.map(r => r.str).join('').replace(/\s+/g, ' ').trim();
    if (text) {
      const meanFontSize = buf.reduce((s, r) => s + r.fontSize, 0) / buf.length;
      lines.push({ text, x: buf[0].x, y: bufY, fontSize: meanFontSize });
    }
    buf = [];
  };

  for (const r of runs) {
    if (buf.length === 0) {
      buf.push(r);
      bufY = r.y;
      bufFontSize = r.fontSize;
      continue;
    }
    const tol = Math.max(bufFontSize * 0.5, 3);
    if (Math.abs(r.y - bufY) <= tol) {
      buf.push(r);
      bufFontSize = Math.max(bufFontSize, r.fontSize);
    } else {
      flush();
      buf.push(r);
      bufY = r.y;
      bufFontSize = r.fontSize;
    }
  }
  flush();
  return lines;
}

function isPageNumberOnly(text: string): boolean {
  const t = text.trim();
  if (/^\d{1,4}$/.test(t)) return true;
  if (/^[ivxlcdm]{1,8}$/i.test(t)) return true;
  return false;
}

/** Join two consecutive lines, dehyphenating "wo-\nrd" → "word". */
function joinLines(prev: string, next: string): string {
  if (prev.endsWith('-') && /^[a-z]/.test(next)) return prev.slice(0, -1) + next;
  return prev + ' ' + next;
}

/**
 * Group lines into paragraphs using vertical gap and indentation as boundaries.
 * Heading-sized lines become their own h1/h2/h3 paragraph.
 */
function linesToParagraphs(lines: Line[], bodyFontSize: number): Paragraph[] {
  const filtered = lines.filter(l => !isPageNumberOnly(l.text));
  if (filtered.length === 0) return [];

  const headingTag = (size: number): ParaTag => {
    if (size >= bodyFontSize * 1.6) return 'h1';
    if (size >= bodyFontSize * 1.3) return 'h2';
    if (size >= bodyFontSize * 1.12) return 'h3';
    return 'p';
  };

  const paragraphs: Paragraph[] = [];
  let buf: Line[] = [];
  let bufTag: ParaTag = 'p';

  const flush = () => {
    if (buf.length === 0) return;
    let text = buf[0].text;
    for (let i = 1; i < buf.length; i++) text = joinLines(text, buf[i].text);
    text = text.replace(/\s+/g, ' ').trim();
    if (text) paragraphs.push({ type: bufTag, text });
    buf = [];
  };

  for (let i = 0; i < filtered.length; i++) {
    const ln = filtered[i];
    const tag = headingTag(ln.fontSize);
    if (buf.length === 0) {
      buf.push(ln);
      bufTag = tag;
      continue;
    }
    const prev = filtered[i - 1];
    const gap = ln.y - prev.y;
    const lineHeight = Math.max(ln.fontSize, prev.fontSize) * 1.2;
    const tagChanged = tag !== bufTag;
    const bigGap = gap > lineHeight * 1.7;
    const newIndent = ln.x - prev.x > prev.fontSize * 1.3;
    if (tagChanged || bigGap || newIndent) {
      flush();
      buf.push(ln);
      bufTag = tag;
    } else {
      buf.push(ln);
    }
  }
  flush();
  return paragraphs;
}

/** Sample a few middle pages to guess the body text font size (mode of all glyph sizes). */
async function detectBodyFontSize(pdf: any): Promise<number> {
  const total = pdf.numPages;
  const sampleCount = Math.min(5, total);
  const start = Math.max(1, Math.floor(total / 2) - Math.floor(sampleCount / 2));
  const counts = new Map<number, number>();
  for (let i = 0; i < sampleCount; i++) {
    const p = await pdf.getPage(start + i);
    const tc = await p.getTextContent();
    for (const it of tc.items as any[]) {
      const t = it.transform as number[] | undefined;
      if (!t) continue;
      const sz = Math.round(Math.hypot(t[2], t[3]) * 10) / 10;
      if (sz > 0) counts.set(sz, (counts.get(sz) ?? 0) + 1);
    }
  }
  let bestSize = 12;
  let bestCount = 0;
  for (const [sz, c] of counts) {
    if (c > bestCount) { bestCount = c; bestSize = sz; }
  }
  return bestSize;
}

/** Resolve PDF outline (TOC) entries to page indices. */
async function getChapterOutline(pdf: any): Promise<OutlineEntry[]> {
  const outline = await pdf.getOutline().catch(() => null);
  if (!outline || outline.length === 0) return [];

  const flat: { title: string; dest: any }[] = [];
  const walk = (nodes: any[]) => {
    for (const n of nodes) {
      flat.push({ title: typeof n.title === 'string' ? n.title : '', dest: n.dest });
      if (Array.isArray(n.items) && n.items.length > 0) walk(n.items);
    }
  };
  walk(outline);

  const resolved: OutlineEntry[] = [];
  for (const { title, dest } of flat) {
    const cleanTitle = title.trim();
    if (!cleanTitle) continue;
    try {
      let arr = dest;
      if (typeof arr === 'string') arr = await pdf.getDestination(arr);
      if (!Array.isArray(arr) || arr.length === 0) continue;
      const idx = await pdf.getPageIndex(arr[0]);
      if (typeof idx === 'number' && idx >= 0) {
        resolved.push({ title: cleanTitle, pageIndex: idx });
      }
    } catch {
      // Some destinations can't be resolved (broken links etc.) — skip.
    }
  }
  resolved.sort((a, b) => a.pageIndex - b.pageIndex);
  // Drop duplicates that point at the same page (keep the first).
  const out: OutlineEntry[] = [];
  for (const e of resolved) {
    if (out.length > 0 && out[out.length - 1].pageIndex === e.pageIndex) continue;
    out.push(e);
  }
  return out;
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/\s+/g, ' ').trim();
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function chapterXhtml(title: string, paragraphs: Paragraph[]): string {
  const body = paragraphs
    .map(p => `<${p.type}>${escapeXml(p.text)}</${p.type}>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(title)}</title></head>
<body>
<h1>${escapeXml(title)}</h1>
${body}
</body>
</html>`;
}

async function buildSyntheticEpub(
  meta: { title: string; author: string; language: string },
  chapters: PdfChapter[],
): Promise<Blob> {
  const zip = new JSZip();
  // EPUB requires "mimetype" first, stored uncompressed.
  zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });
  zip.file('META-INF/container.xml', `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

  const items = chapters.map((c, i) => ({
    id: `ch${i}`,
    href: `chapter-${i + 1}.xhtml`,
    title: c.title,
    paras: c.paragraphs,
  }));

  for (const it of items) {
    zip.file(`OEBPS/${it.href}`, chapterXhtml(it.title, it.paras));
  }

  const manifest = items
    .map(it => `    <item id="${it.id}" href="${it.href}" media-type="application/xhtml+xml"/>`)
    .join('\n');
  const spine = items.map(it => `    <itemref idref="${it.id}"/>`).join('\n');

  const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(meta.title)}</dc:title>
    <dc:creator>${escapeXml(meta.author)}</dc:creator>
    <dc:language>${escapeXml(meta.language)}</dc:language>
    <dc:identifier id="bookid">pdf-${Date.now()}</dc:identifier>
  </metadata>
  <manifest>
${manifest}
  </manifest>
  <spine>
${spine}
  </spine>
</package>`;
  zip.file('OEBPS/content.opf', opf);

  return zip.generateAsync({ type: 'blob', mimeType: 'application/epub+zip' });
}

/**
 * Parse a PDF, reconstruct paragraphs heuristically, and synthesize an EPUB so the
 * downstream translation pipeline can treat it identically to a real EPUB.
 *
 * Limitations:
 *   - Scanned PDFs without a text layer return no text and throw.
 *   - Math, footnotes, multi-column layouts may not reflow cleanly.
 *   - Headings inferred from font size; if the PDF uses uniform sizing, all paragraphs
 *     are tagged as <p>.
 */
export async function parsePdf(file: File | Blob): Promise<ParsedEpub> {
  const pdf = await loadPdfDocument(file);

  const metaResult = await pdf.getMetadata().catch(() => null);
  const info = (metaResult?.info ?? {}) as { Title?: string; Author?: string; Language?: string };
  let title = (info.Title ?? '').trim();
  if (!title) title = file instanceof File ? file.name.replace(/\.pdf$/i, '') : 'Untitled';
  const author = (info.Author ?? '').trim() || 'Unknown';
  const language = (info.Language ?? '').trim() || 'en';

  const bodyFontSize = await detectBodyFontSize(pdf);
  const outline = await getChapterOutline(pdf);

  const pageParas: Paragraph[][] = [];
  const stats: PageStats = { itemCount: 0, emptyStrCount: 0, nonEmptyStrCount: 0, totalChars: 0 };
  let totalLines = 0;
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const lines = await extractPageLines(page, stats);
    totalLines += lines.length;
    pageParas.push(linesToParagraphs(lines, bodyFontSize));
  }

  let chapters: PdfChapter[];
  if (outline.length >= 2) {
    chapters = [];
    if (outline[0].pageIndex > 0) {
      const front: Paragraph[] = [];
      for (let p = 0; p < outline[0].pageIndex; p++) front.push(...pageParas[p]);
      if (front.length > 0) chapters.push({ title: 'Front matter', paragraphs: front });
    }
    for (let i = 0; i < outline.length; i++) {
      const entry = outline[i];
      const endPage = i + 1 < outline.length ? outline[i + 1].pageIndex : pdf.numPages;
      const paras: Paragraph[] = [];
      for (let p = entry.pageIndex; p < endPage; p++) paras.push(...pageParas[p]);
      // If the chapter's first paragraph repeats the outline title, drop it — the
      // synthesized XHTML will use the outline title as the <h1>.
      if (paras.length > 0 && normalize(paras[0].text) === normalize(entry.title)) {
        paras.shift();
      }
      chapters.push({ title: entry.title, paragraphs: paras });
    }
  } else {
    // No outline — try to split on inferred h1 headings, else one big chapter.
    const all: Paragraph[] = [];
    for (const ps of pageParas) all.push(...ps);
    const hasH1 = all.some(p => p.type === 'h1');
    if (hasH1) {
      chapters = [];
      let cur: PdfChapter | null = null;
      for (const p of all) {
        if (p.type === 'h1') {
          if (cur && cur.paragraphs.length > 0) chapters.push(cur);
          cur = { title: p.text, paragraphs: [] };
        } else {
          if (!cur) cur = { title, paragraphs: [] };
          cur.paragraphs.push(p);
        }
      }
      if (cur && cur.paragraphs.length > 0) chapters.push(cur);
    } else {
      chapters = [{ title, paragraphs: all }];
    }
  }

  chapters = chapters.filter(c => c.paragraphs.length > 0);
  if (chapters.length === 0) {
    // Diagnose the failure: distinguish a true scanned PDF, an undecodable text layer,
    // and a paragraph-reconstruction miss.
    const diag = `pages=${pdf.numPages}, items=${stats.itemCount}, decoded=${stats.nonEmptyStrCount}, chars=${stats.totalChars}, lines=${totalLines}`;
    // eslint-disable-next-line no-console
    console.warn('[pdf] empty extraction:', diag);
    if (stats.itemCount === 0) {
      throw new ScannedPdfError(diag, pdf.numPages);
    }
    if (stats.nonEmptyStrCount === 0 || stats.totalChars === 0) {
      throw new Error(
        `PDF has a text layer but PDF.js couldn't decode any characters — likely uses non-standard font encoding (${diag}). Try re-exporting the PDF with embedded ToUnicode tables, or open it in another reader to copy text.`,
      );
    }
    if (totalLines === 0) {
      throw new Error(`Extracted text but couldn't form any lines (${diag}). Please report this PDF.`);
    }
    throw new Error(
      `Extracted ${totalLines} lines but all were filtered out as page numbers or empty paragraphs (${diag}). Please report this PDF.`,
    );
  }

  const epubBlob = await buildSyntheticEpub({ title, author, language }, chapters);
  return parseEpub(epubBlob);
}

// =============================================================================
// OCR mode — for scanned PDFs (no text layer). Renders each page to a JPEG and
// hands it to a caller-supplied LLM-vision OCR function. The output is glued
// together into the same synthetic-EPUB structure as the text-layer path.
// =============================================================================

function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = '';
  const chunk = 0x8000; // stay under stack-spread limits for older engines
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

/** Render a PDF page to a JPEG, scaled so the larger dimension is `maxDim` px. */
async function renderPageAsJpeg(
  pdf: any,
  pageNumber: number,
  maxDim: number,
  quality: number,
): Promise<{ base64: string; mimeType: string }> {
  const page = await pdf.getPage(pageNumber);
  const baseViewport = page.getViewport({ scale: 1 });
  const scale = Math.max(0.1, Math.min(maxDim / baseViewport.width, maxDim / baseViewport.height));
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  await page.render({ canvas, viewport }).promise;
  const blob: Blob = await new Promise((resolve, reject) =>
    canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob returned null'))), 'image/jpeg', quality),
  );
  // Free the canvas-backed buffer eagerly — books can have hundreds of pages.
  canvas.width = 0;
  canvas.height = 0;
  const buf = await blob.arrayBuffer();
  return { base64: arrayBufferToBase64(buf), mimeType: 'image/jpeg' };
}

/** Parse the LLM's lightweight Markdown OCR output into typed paragraphs. */
export function parseOcrMarkdown(text: string): Paragraph[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const blocks = trimmed.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const out: Paragraph[] = [];
  for (const block of blocks) {
    let kind: ParaTag = 'p';
    let content = block;
    if (block.startsWith('### ')) { kind = 'h3'; content = block.slice(4); }
    else if (block.startsWith('## ')) { kind = 'h2'; content = block.slice(3); }
    else if (block.startsWith('# ')) { kind = 'h1'; content = block.slice(2); }
    content = content.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
    if (content) out.push({ type: kind, text: content });
  }
  return out;
}

function splitOcrParagraphsIntoChapters(paragraphs: Paragraph[], fallbackTitle: string): PdfChapter[] {
  const hasH1 = paragraphs.some(p => p.type === 'h1');
  if (!hasH1) return [{ title: fallbackTitle, paragraphs }];
  const chapters: PdfChapter[] = [];
  let cur: PdfChapter | null = null;
  for (const p of paragraphs) {
    if (p.type === 'h1') {
      if (cur && cur.paragraphs.length > 0) chapters.push(cur);
      cur = { title: p.text, paragraphs: [] };
    } else {
      if (!cur) cur = { title: fallbackTitle, paragraphs: [] };
      cur.paragraphs.push(p);
    }
  }
  if (cur && cur.paragraphs.length > 0) chapters.push(cur);
  return chapters.filter(c => c.paragraphs.length > 0);
}

export interface OcrPageProgress {
  total: number;
  done: number;
  failed: number;
  /** 0-based index of a page that just started rendering (for "now on page X" UI). */
  current?: number;
}

export type OcrPageFn = (
  jpegBase64: string,
  mimeType: string,
  pageIndex: number,
  signal: AbortSignal,
) => Promise<string>;

export interface PdfOcrOptions {
  /** Longest-edge target in pixels for each rendered page image. ~1600 ≈ Gemini 3 "high". */
  maxDim?: number;
  /** JPEG quality, 0..1. */
  jpegQuality?: number;
  /** Pages to OCR in parallel. Higher = faster but more rate-limit pressure. */
  concurrency?: number;
  onProgress?: (p: OcrPageProgress) => void;
  signal?: AbortSignal;
}

/**
 * Render each page of a scanned PDF and route it through the caller-supplied OCR
 * function (typically an LLM vision endpoint). The page text is then parsed as
 * lightweight Markdown and stitched into the same synthetic EPUB structure as
 * `parsePdf`, so downstream translation/output code is unchanged.
 *
 * Failed pages are skipped (left empty), surfaced via the `failed` counter on
 * progress events. If every page fails the function throws.
 */
export async function parsePdfWithOcr(
  file: File | Blob,
  ocrPage: OcrPageFn,
  options: PdfOcrOptions = {},
): Promise<ParsedEpub> {
  const maxDim = options.maxDim ?? 1600;
  const jpegQuality = options.jpegQuality ?? 0.85;
  const concurrency = Math.max(1, options.concurrency ?? 3);
  const signal = options.signal;

  const pdf = await loadPdfDocument(file);

  const metaResult = await pdf.getMetadata().catch(() => null);
  const info = (metaResult?.info ?? {}) as { Title?: string; Author?: string; Language?: string };
  let title = (info.Title ?? '').trim();
  if (!title) title = file instanceof File ? file.name.replace(/\.pdf$/i, '') : 'Untitled';
  const author = (info.Author ?? '').trim() || 'Unknown';
  const language = (info.Language ?? '').trim() || 'en';

  const N = pdf.numPages;
  const pageTexts: string[] = new Array(N).fill('');
  let done = 0;
  let failed = 0;
  const fireProgress = (current?: number) =>
    options.onProgress?.({ total: N, done, failed, current });
  fireProgress();

  let nextIdx = 0;
  const work = async () => {
    while (true) {
      if (signal?.aborted) return;
      const i = nextIdx++;
      if (i >= N) return;
      fireProgress(i);
      try {
        const { base64, mimeType } = await renderPageAsJpeg(pdf, i + 1, maxDim, jpegQuality);
        if (signal?.aborted) return;
        pageTexts[i] = await ocrPage(base64, mimeType, i, signal ?? new AbortController().signal);
        done++;
      } catch (e) {
        if ((e as Error)?.name === 'AbortError' || signal?.aborted) return;
        failed++;
        // eslint-disable-next-line no-console
        console.warn(`[pdf-ocr] page ${i + 1} failed:`, e);
      }
      fireProgress();
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, N) }, work));

  if (signal?.aborted) {
    const err = new Error('OCR cancelled');
    err.name = 'AbortError';
    throw err;
  }

  const allParas: Paragraph[] = [];
  for (let i = 0; i < N; i++) {
    if (!pageTexts[i]) continue;
    allParas.push(...parseOcrMarkdown(pageTexts[i]));
  }

  if (allParas.length === 0) {
    throw new Error(
      `OCR completed but produced no usable text (${failed}/${N} pages failed). Try a different vision model — the current one may not OCR this script.`,
    );
  }

  const chapters = splitOcrParagraphsIntoChapters(allParas, title);
  const epubBlob = await buildSyntheticEpub({ title, author, language }, chapters);
  return parseEpub(epubBlob);
}
