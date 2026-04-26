#!/usr/bin/env node
/**
 * One-off: refine the marketing/poetic strings (about page bio,
 * artworks contact, newsletter CTA description, project descriptions)
 * across all locales except en/zh/zh-TW (those are the source/manual
 * gold standards). Uses the same EN + ZH reference pattern as
 * refine-hero.mjs.
 *
 * Output: dist/marketing-refined.json for review BEFORE writing back.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const I18N_DIR = join(ROOT, 'src', 'i18n');
const OUT_DIR = join(ROOT, 'dist');
const OUT_FILE = join(OUT_DIR, 'marketing-refined.json');

const MODEL = 'gemini-3-flash-preview';
const TEMPERATURE = 0.7;
const LOCALE_CONCURRENCY = 6;

const KEYS = [
  'aboutPage.bioP1',
  'aboutPage.bioP3',
  'aboutPage.artworksText',
  'aboutPage.artworksContactText',
  'aboutPage.projectDopamindDesc',
  'newsletterCta.desc',
  'projectsPage.items.dopamind.description',
  'projectsPage.items.ebookTranslator.description',
];

const TARGETS = [
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

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

const en = JSON.parse(readFileSync(join(I18N_DIR, 'en.json'), 'utf8'));
const zh = JSON.parse(readFileSync(join(I18N_DIR, 'zh.json'), 'utf8'));

function buildPrompt(targetLang) {
  const refLines = KEYS.map((k, i) => {
    return `[${i + 1}] EN: ${getByPath(en, k)}\n    ZH: ${getByPath(zh, k)}`;
  }).join('\n\n');

  return `You are refining the marketing/personal copy for a personal website (philoli.com — Philo Li, an artist+writer+developer). The site previously had machine-translated copy that read stiff and translation-y. The Chinese (Simplified) version below has been HAND-EDITED by the site owner to feel native, casual, and warm — not formal, not marketing-y, not a literal English translation.

Your job: produce ${targetLang} versions that match THE SAME quality bar as the polished Chinese.

Key principles the Chinese rewrite established:
- Use INFORMAL register / casual second person ("你" / "tu" / "du" / "ты" — whichever is natural for personal-website tone in ${targetLang}). NOT the formal "您" / "vous" / "Sie" / "Вы".
- Avoid corporate/marketing clichés: not "AI-powered" but "AI-加持" (more casual). Not "delivered to your inbox" but "sent to your inbox" (less product-launch).
- Drop literal "this is X / that is what happens when Y / here is Z" constructions where they sound translated. Find the native idiom.
- Replace passive/business phrasings with direct ones: "如需购买...请..." → "想购买...？...直接..." (a question-mark question is more native and warm).
- Keep proper nouns VERBATIM: "Dopamind", "PhiloArt", "Philo Li", "EPUB", "ADHD", "AI", "LLM", "API key", "X" (the social network), "philoart.io/philo", "philo.li.official@gmail.com".
- Punctuation: keep arrows ("→", "—", "——") and em-dashes in roughly the same positions where they make sense. Em-dash usage may differ by language — adapt naturally.
- Tone: warm, personal, slightly conversational. Like a thoughtful indie maker introducing themselves, NOT a startup landing page.

REFERENCES (English source + Chinese gold standard):

${refLines}

Now produce the ${targetLang} version of all 8 strings. Output ONLY a numbered list, one entry per line, no commentary, no explanations:

[1] (your ${targetLang} translation of #1)
[2] (your ${targetLang} translation of #2)
[3] (your ${targetLang} translation of #3)
[4] (your ${targetLang} translation of #4)
[5] (your ${targetLang} translation of #5)
[6] (your ${targetLang} translation of #6)
[7] (your ${targetLang} translation of #7)
[8] (your ${targetLang} translation of #8)`;
}

function parseNumbered(text, expected) {
  const out = new Array(expected).fill('');
  let t = String(text).trim().replace(/^```[a-zA-Z]*\n?|\n?```$/g, '').trim();
  const re = /\[(\d+)\][\s\.\:\-]*([\s\S]*?)(?=\n\s*\[\d+\]|$)/g;
  let m;
  while ((m = re.exec(t)) !== null) {
    const idx = parseInt(m[1], 10) - 1;
    if (idx >= 0 && idx < expected) out[idx] = m[2].trim();
  }
  return out;
}

async function callGemini(targetLang) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(API_KEY)}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: buildPrompt(targetLang) }] }],
    generationConfig: { temperature: TEMPERATURE, maxOutputTokens: 4096 },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const arr = parseNumbered(text, KEYS.length);
  const result = {};
  KEYS.forEach((k, i) => { result[k] = arr[i]; });
  const empties = Object.values(result).filter(v => !v).length;
  if (empties > 0) throw new Error(`${empties} empty fields. Raw: ${text.slice(0, 300)}`);
  return result;
}

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const result = {};
  // Include en + zh references for the review table
  for (const k of KEYS) {
    result.en = result.en || {}; result.en[k] = getByPath(en, k);
    result.zh = result.zh || {}; result.zh[k] = getByPath(zh, k);
  }

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
