#!/usr/bin/env node
/**
 * One-off: ask Gemini to re-translate the hero strings with a poetic tone,
 * using the English original AND the hand-crafted Chinese version as reference
 * so each locale matches the same level of polish.
 *
 * Output: dist/hero-refined.json (a Record<localeCode, {line1,line2,line3,tagline}>)
 * for human review BEFORE writing back to the locale JSONs.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const I18N_DIR = join(ROOT, 'src', 'i18n');
const OUT_DIR = join(ROOT, 'dist');
const OUT_FILE = join(OUT_DIR, 'hero-refined.json');

const MODEL = 'gemini-3-flash-preview';
const TEMPERATURE = 0.85; // higher than UI default — we want creative, native-feeling writing
const LOCALE_CONCURRENCY = 6;

// Source-of-truth references (English original + hand-crafted Chinese)
const REFERENCE = {
  en: {
    line1: 'Create.',
    line2: 'Capture.',
    line3: 'Build.',
    tagline: 'I paint, photograph, write, and build things. This is what happens when curiosity meets craft and code.',
  },
  zh: {
    line1: '创作。',
    line2: '捕捉。',
    line3: '建造。',
    tagline: '我绘画、摄影、写作，也亲手造物。当好奇心遇上艺术与代码，便有了这一切',
  },
};

const TARGETS = [
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'it', name: 'Italian' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'sv', name: 'Swedish' },
  { code: 'da', name: 'Danish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'fi', name: 'Finnish' },
  { code: 'el', name: 'Greek' },
  { code: 'cs', name: 'Czech' },
  { code: 'ro', name: 'Romanian' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'hr', name: 'Croatian' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lv', name: 'Latvian' },
  { code: 'et', name: 'Estonian' },
  { code: 'he', name: 'Hebrew' },
  { code: 'fa', name: 'Persian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'fil', name: 'Filipino' },
];

function loadDotEnv() {
  const envPath = join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  for (const raw of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadDotEnv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error('Missing GEMINI_API_KEY'); process.exit(1); }

function buildPrompt(targetLang) {
  return `You are translating the homepage hero for philoli.com — a personal website by Philo Li, an artist, photographer, writer, and developer. The hero has two pieces:

1. A 3-line manifesto headline (each line: ONE strong declarative verb + period). The English uses "Create. / Capture. / Build." — three single-word imperatives that map to: artist (create), photographer (capture), maker/developer (build).

2. A short tagline that humanizes that manifesto.

You will be shown the English original AND a hand-crafted Chinese (Simplified) translation. The Chinese version is the GOLD-STANDARD example of the polish I want — it is NOT literal; it has been deliberately reworked for native rhythm and mild poetry. Match that level of care in ${targetLang}.

ENGLISH ORIGINAL:
  line1: "${REFERENCE.en.line1}"
  line2: "${REFERENCE.en.line2}"
  line3: "${REFERENCE.en.line3}"
  tagline: "${REFERENCE.en.tagline}"

CHINESE (SIMPLIFIED) GOLD STANDARD:
  line1: "${REFERENCE.zh.line1}"
  line2: "${REFERENCE.zh.line2}"
  line3: "${REFERENCE.zh.line3}"
  tagline: "${REFERENCE.zh.tagline}"

Notes on the Chinese version (so you understand the bar):
- "创作。/ 捕捉。/ 建造。" preserves the three-line punchy rhythm and uses verbs that land naturally as a slogan, not dictionary translations of "create/capture/build".
- The tagline is RESTRUCTURED — not a literal sentence-by-sentence translation. It flows: "I paint, photograph, write, also build with my own hands. When curiosity meets art and code, all this came to be." The phrase "what happens when X meets Y" is replaced with a more native-feeling construction.

YOUR TASK — produce the ${targetLang} version that:

★ TOP PRIORITY: PRESERVE THE POETIC FEEL. This is hero copy on an artist's website, not a UI string. It must read like something a poet or careful writer in ${targetLang} would write — with rhythm, restraint, and a faint literary quality. NOT like a translation. NOT like a dictionary lookup. NOT like marketing copy.

Specifically:
- For line1/2/3: pick the most evocative single-verb (or very short verb phrase) ${targetLang} would use as a slogan-style imperative for "create / capture / build". Match the cadence — three short lines with parallel structure. Pick verbs that have weight and resonance in ${targetLang}, not the most common dictionary translation. Use the language's natural sentence-end punctuation (period in most Latin scripts; "。" in Japanese; nothing in some scripts where appropriate).
- For tagline: re-craft the meaning into idiomatic, mildly poetic ${targetLang}. Do NOT literally translate "this is what happens when X meets Y" — find the ${targetLang} equivalent of "便有了这一切" (= "and from that, all this came to be"). The Chinese reformulation rearranges words and even changes "craft" → "art" because that landed better in Chinese; you have the SAME freedom to deviate from the English structure if it produces better ${targetLang} prose. Keep it concise, warm, declarative, with a soft poetic cadence.
- Avoid AT ALL COSTS: translation-ese, dictionary-feel words, mechanical sentence structure that mirrors the English, overly formal/business register, generic marketing tone.
- The result should sound like a sentence a thoughtful native ${targetLang} writer would PEN, not one a translator would PRODUCE. If you have to choose between literal accuracy and native poetic flow, pick poetic flow.
- Keep proper nouns verbatim where present (none in these strings, but no inventing them).

OUTPUT FORMAT — strictly four numbered lines, no commentary, no markdown, no JSON, no quotes:
[1] line1 translation
[2] line2 translation
[3] line3 translation
[4] tagline translation`;
}

function parseNumbered(text) {
  const out = { line1: '', line2: '', line3: '', tagline: '' };
  const keys = ['line1', 'line2', 'line3', 'tagline'];
  // Strip code fences and surrounding quotes if any.
  let t = String(text).trim();
  t = t.replace(/^```[a-zA-Z]*\n?|\n?```$/g, '').trim();
  if (t.startsWith('"') && t.endsWith('"')) {
    try { t = JSON.parse(t); } catch {}
  }
  // Take first 4 non-empty lines, strip optional [N] / N. / N) / N: prefixes.
  const lines = t.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const stripPrefix = s => s.replace(/^[\[\(]?\s*\d+\s*[\]\)\.\:\-]?\s*/, '').trim();
  for (let i = 0; i < Math.min(lines.length, 4); i++) {
    out[keys[i]] = stripPrefix(lines[i]);
  }
  return out;
}

async function callGemini(targetLang) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(API_KEY)}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: buildPrompt(targetLang) }] }],
    generationConfig: { temperature: TEMPERATURE, maxOutputTokens: 2048 },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const parsed = parseNumbered(text);
  if (!parsed.line1 || !parsed.line2 || !parsed.line3 || !parsed.tagline) {
    throw new Error('Incomplete response: ' + JSON.stringify(text).slice(0, 200));
  }
  return parsed;
}

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  // Include the references in the output so the review table can show side-by-side.
  const result = { en: REFERENCE.en, zh: REFERENCE.zh };

  let nextIdx = 0;
  async function worker() {
    while (true) {
      const i = nextIdx++;
      if (i >= TARGETS.length) return;
      const t = TARGETS[i];
      const t0 = Date.now();
      try {
        result[t.code] = await callGemini(t.name);
        console.log(`[${t.code}] ${t.name.padEnd(22)} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
      } catch (err) {
        console.warn(`[${t.code}] FAILED: ${err.message}`);
        result[t.code] = { error: err.message };
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(LOCALE_CONCURRENCY, TARGETS.length) }, worker));

  writeFileSync(OUT_FILE, JSON.stringify(result, null, 2) + '\n', 'utf8');
  console.log(`\nWrote ${OUT_FILE}`);
}

main().catch(err => { console.error(err); process.exit(1); });
