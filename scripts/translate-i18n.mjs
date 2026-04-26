#!/usr/bin/env node
/**
 * Generate locale JSON files from src/i18n/en.json by translating with
 * Gemini 3 Flash (preview). Reads GEMINI_API_KEY from .env at the project root.
 *
 * Usage:
 *   node scripts/translate-i18n.mjs                # all locales
 *   node scripts/translate-i18n.mjs zh ja ko       # specific locales only
 *   node scripts/translate-i18n.mjs --force        # overwrite even if file exists
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const I18N_DIR = join(ROOT, 'src', 'i18n');

// ---- Config ----
const MODEL = 'gemini-3-flash-preview';
const TEMPERATURE = 0.3; // tighter than the default 0.8 — UI strings need to stay close to the source
const MAX_CHARS_PER_BATCH = 4000;
const MAX_ITEMS_PER_BATCH = 30;
const BATCH_CONCURRENCY = 4; // batches per locale, in flight
const LOCALE_CONCURRENCY = 6; // locales translated in parallel

const TARGETS = [
  { code: 'zh', name: 'Chinese (Simplified)' },
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

// ---- Args ----
const args = process.argv.slice(2);
const force = args.includes('--force');
const requestedLocales = args.filter(a => !a.startsWith('--'));
const localesToProcess = requestedLocales.length > 0
  ? TARGETS.filter(t => requestedLocales.includes(t.code))
  : TARGETS;

// ---- Load .env (minimal parser, no dependency) ----
function loadDotEnv() {
  const envPath = join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  const text = readFileSync(envPath, 'utf8');
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadDotEnv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY (checked .env and process.env).');
  process.exit(1);
}

// ---- Walk en.json, collect leaf strings, honor _preserve ----
const en = JSON.parse(readFileSync(join(I18N_DIR, 'en.json'), 'utf8'));
const preservePrefixes = Array.isArray(en._preserve) ? en._preserve : [];

function isPreserved(path) {
  return preservePrefixes.some(p => path === p || path.startsWith(p + '.'));
}

/** Collect every leaf string with its dotted path. Skips `_preserve` itself. */
function collectLeaves(obj, prefix, out) {
  for (const [k, v] of Object.entries(obj)) {
    if (prefix === '' && k === '_preserve') continue;
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') {
      out.push({ path, text: v });
    } else if (v && typeof v === 'object' && !Array.isArray(v)) {
      collectLeaves(v, path, out);
    }
  }
}

const allLeaves = [];
collectLeaves(en, '', allLeaves);
const translatable = allLeaves.filter(l => !isPreserved(l.path));
const preserved = allLeaves.filter(l => isPreserved(l.path));

console.log(`en.json: ${allLeaves.length} leaf strings (${translatable.length} translatable, ${preserved.length} preserved verbatim)`);

// ---- Chunk into batches ----
function chunk(items, maxChars, maxItems) {
  const out = [];
  let cur = [];
  let size = 0;
  for (const it of items) {
    const len = it.text.length;
    if (cur.length > 0 && (size + len > maxChars || cur.length >= maxItems)) {
      out.push(cur);
      cur = [];
      size = 0;
    }
    cur.push(it);
    size += len;
  }
  if (cur.length > 0) out.push(cur);
  return out;
}

// ---- Build prompts + parse responses ----
function buildSystemPrompt(targetLang) {
  return `You are translating UI strings for a personal website (philoli.com — Philo Li, an artist, writer, and developer). Translate from English into ${targetLang}.

CRITICAL: Translate EVERY passage into ${targetLang}. Do NOT leave any passage in English. This includes short button labels like "Show", "Hide", "Cancel", "Back", "Continue", "Resume" — translate them into the conventional ${targetLang} equivalent for that UI verb. Even if the English word looks like a "common loanword", you must translate it to ${targetLang} unless it is a proper noun explicitly listed below.

Style:
- Match the original's tone (some strings are casual, some are minimalist labels, some are short marketing copy). Don't make it more formal than the source.
- Use the conventional native equivalent users expect on a website navbar / button. For example: "Resume" (= continue an action) → ${targetLang} word for "continue" / "resume action", NOT "résumé / CV". "Back" → "go back" verb, not the body part. Pick the meaning that fits a UI button.
- Keep it concise. UI strings often have layout constraints — don't pad with extra words.

Hard rules:
- Output ONLY the translation. No explanations, no notes, no extra quotes.
- Keep proper nouns VERBATIM: "Philo Li", "Dopamind", "PhiloArt", "Medium", "Reflections", "ADHD", "EPUB", "AI", "LLM", "API key", "OpenAI", "Anthropic", "Claude", "Gemini", "GPT", "DeepSeek", "Qwen", "GLM", "Kimi", "Moonshot", "Zhipu".
- Keep arrows ("←", "→", "⬇") and bullet/middot ("·", "—") in the same position as in the input. The arrow stays even though the word next to it is translated. Example: "← Back" → "← {target-language word for Back}".
- Keep emails, URLs, and domains as-is (e.g., "philoart.io/philo", "philo.li.official@gmail.com").
- Keep placeholder tokens like "{provider}", "{link}", "{count}", "{nodes}", "{translated}" EXACTLY as written, including the curly braces. Do not translate them.
- Preserve trailing punctuation (period, exclamation, ellipsis "…", etc.) when present.
- The user will provide numbered passages. Reply with the SAME numbering, one translation per line, in the same order. Every numbered passage MUST appear in your output, fully translated.

Input format:
[1] First passage.
[2] Second passage.

Output format (exact):
[1] Translation of the first passage.
[2] Translation of the second passage.`;
}

function buildBatchPrompt(passages) {
  return passages.map((p, i) => `[${i + 1}] ${p.text}`).join('\n\n');
}

function parseBatchResponse(response, expectedCount) {
  const out = new Array(expectedCount).fill('');
  const re = /\[(\d+)\]\s*([\s\S]*?)(?=\n\s*\[\d+\]|$)/g;
  let m;
  while ((m = re.exec(response)) !== null) {
    const idx = parseInt(m[1], 10) - 1;
    if (idx >= 0 && idx < expectedCount) {
      out[idx] = m[2].trim();
    }
  }
  return out;
}

// ---- Gemini call ----
async function callGemini(passages, targetLang) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(API_KEY)}`;
  const body = {
    systemInstruction: { parts: [{ text: buildSystemPrompt(targetLang) }] },
    contents: [{ role: 'user', parts: [{ text: buildBatchPrompt(passages) }] }],
    generationConfig: {
      temperature: TEMPERATURE,
      maxOutputTokens: 16384,
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return parseBatchResponse(text, passages.length);
}

// ---- Run a worker pool of batches per locale ----
const MAX_BATCH_RETRIES = 2;

/** Try translating a batch up to MAX_BATCH_RETRIES + 1 times.
 *  Considers a result "bad" if more than half of items came back identical to the
 *  source (likely the model echoed the prompt). Returns the best result seen. */
async function translateBatchRetry(batch, target) {
  let bestOut = null;
  let bestEcho = Infinity;
  for (let attempt = 0; attempt <= MAX_BATCH_RETRIES; attempt++) {
    const out = await callGemini(batch, target.name);
    let echoes = 0;
    for (let j = 0; j < batch.length; j++) {
      const t = (out[j] || '').trim();
      if (!t || t === batch[j].text) echoes++;
    }
    if (echoes < bestEcho) {
      bestEcho = echoes;
      bestOut = out;
    }
    // If at most one item came back unchanged, accept immediately.
    if (echoes <= Math.max(1, Math.floor(batch.length * 0.1))) return bestOut;
  }
  return bestOut;
}

async function translateLocale(target) {
  const batches = chunk(translatable, MAX_CHARS_PER_BATCH, MAX_ITEMS_PER_BATCH);
  const translations = new Map(); // path -> translated string

  let nextIdx = 0;
  let completed = 0;
  const total = batches.length;
  const errors = [];

  async function worker() {
    while (true) {
      const i = nextIdx++;
      if (i >= batches.length) return;
      const batch = batches[i];
      try {
        const out = await translateBatchRetry(batch, target);
        batch.forEach((leaf, j) => {
          const t = (out[j] || '').trim();
          translations.set(leaf.path, t || leaf.text); // fallback to source on empty
        });
      } catch (err) {
        errors.push({ batch: i, error: err.message });
        // On failure, fall back to source so the file is still complete.
        batch.forEach(leaf => translations.set(leaf.path, leaf.text));
      } finally {
        completed++;
      }
    }
  }

  const workers = Array.from({ length: Math.min(BATCH_CONCURRENCY, batches.length) }, worker);
  await Promise.all(workers);

  if (errors.length > 0) {
    console.warn(`  [${target.code}] ${errors.length} batches failed (fell back to source):`);
    for (const e of errors) console.warn(`    batch ${e.batch}: ${e.error}`);
  }

  return translations;
}

// ---- Reassemble translated tree ----
function setByPath(obj, path, value) {
  const keys = path.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!(k in cur) || typeof cur[k] !== 'object' || cur[k] === null) cur[k] = {};
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

function buildLocaleJson(target, translations) {
  const out = {};
  // Preserved values: copy verbatim from en.json
  for (const leaf of preserved) {
    setByPath(out, leaf.path, getByPath(en, leaf.path));
  }
  // Translated values
  for (const leaf of translatable) {
    setByPath(out, leaf.path, translations.get(leaf.path) ?? leaf.text);
  }
  return out;
}

// ---- Main ----
async function processLocale(target) {
  const outPath = join(I18N_DIR, `${target.code}.json`);
  if (existsSync(outPath) && !force) {
    console.log(`[${target.code}] exists, skipping (use --force)`);
    return;
  }
  const t0 = Date.now();
  const translations = await translateLocale(target);
  const localeJson = buildLocaleJson(target, translations);
  writeFileSync(outPath, JSON.stringify(localeJson, null, 2) + '\n', 'utf8');
  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[${target.code}] ${target.name.padEnd(22)} ${dt}s`);
}

async function main() {
  if (!existsSync(I18N_DIR)) mkdirSync(I18N_DIR, { recursive: true });
  console.log(`Translating ${localesToProcess.length} locale(s) with ${LOCALE_CONCURRENCY}-way concurrency...\n`);

  let nextIdx = 0;
  async function localeWorker() {
    while (true) {
      const i = nextIdx++;
      if (i >= localesToProcess.length) return;
      await processLocale(localesToProcess[i]);
    }
  }
  const workers = Array.from({ length: Math.min(LOCALE_CONCURRENCY, localesToProcess.length) }, localeWorker);
  await Promise.all(workers);

  console.log('\nDone.');
}

main().catch(err => {
  console.error('\nFailed:', err);
  process.exit(1);
});
