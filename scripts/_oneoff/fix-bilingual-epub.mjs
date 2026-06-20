// One-off: re-render the OCR markdown that the old PDF EPUB writer escaped as literal text.
// Walks every chapter XHTML, runs each <p>/<h1-3> body through markdown-it + KaTeX MathML
// (matching the in-app preview pipeline), and writes a "(fixed)" copy alongside the original.
//
// Usage: node scripts/_oneoff/fix-bilingual-epub.mjs "<path-to-broken.epub>"

import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';
import katex from 'katex';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: false, breaks: false, linkify: false, xhtmlOut: true });

function unescapeXml(s) {
  return s
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function renderMathToMathML(html) {
  let out = html.replace(/\$\$([\s\S]+?)\$\$/g, (m, tex) => {
    try { return katex.renderToString(tex, { displayMode: true, throwOnError: false, output: 'mathml' }); }
    catch { return m; }
  });
  out = out.replace(/\$([^\n$]+?)\$/g, (m, tex) => {
    try { return katex.renderToString(tex, { displayMode: false, throwOnError: false, output: 'mathml' }); }
    catch { return m; }
  });
  return out;
}

function paragraphToXhtml(type, text) {
  const t = text.trim();
  if (!t) return '';
  if (type === 'h1' || type === 'h2' || type === 'h3') {
    return `<${type}>${renderMathToMathML(md.renderInline(t))}</${type}>`;
  }
  return renderMathToMathML(md.render(t));
}

function fixChapterXhtml(xhtml) {
  // The old writer only emitted flat <(p|h1|h2|h3)>${escapeXml(text)}</\1>, so the body cannot
  // contain literal '<' — only entities. Non-greedy match against the matching close tag is safe.
  return xhtml.replace(/<(p|h1|h2|h3)>([\s\S]*?)<\/\1>/g, (m, tag, body) => {
    const text = unescapeXml(body);
    const rendered = paragraphToXhtml(tag, text);
    return rendered || m;
  });
}

const inPath = process.argv[2];
if (!inPath) {
  console.error('Usage: node fix-bilingual-epub.mjs <path-to-broken.epub>');
  process.exit(1);
}
const parsed = path.parse(inPath);
const outPath = path.join(parsed.dir, `${parsed.name} (fixed)${parsed.ext}`);

const buf = fs.readFileSync(inPath);
const zip = await JSZip.loadAsync(buf);

const newZip = new JSZip();
// EPUB requires the mimetype to be the first file, stored uncompressed.
newZip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });

let fixedChapters = 0;
for (const [name, entry] of Object.entries(zip.files)) {
  if (name === 'mimetype' || entry.dir) continue;
  if (name.endsWith('.xhtml')) {
    const content = await entry.async('string');
    newZip.file(name, fixChapterXhtml(content));
    fixedChapters++;
  } else {
    const data = await entry.async('nodebuffer');
    newZip.file(name, data);
  }
}

const out = await newZip.generateAsync({
  type: 'nodebuffer',
  mimeType: 'application/epub+zip',
  compression: 'DEFLATE',
});
fs.writeFileSync(outPath, out);
console.log(`Fixed ${fixedChapters} chapter file(s).`);
console.log(`Wrote ${outPath} (${out.length} bytes)`);
