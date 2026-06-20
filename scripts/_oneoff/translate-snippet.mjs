#!/usr/bin/env node
/**
 * One-off: translate a single Chinese snippet to all target languages,
 * print results so they can be hand-inserted into the right paragraph.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');

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
  console.error('Missing GEMINI_API_KEY');
  process.exit(1);
}

const MODEL = 'gemini-2.5-flash';

const LANGUAGES = {
  'en': 'English',
  'zh-TW': 'Traditional Chinese (Taiwan)',
  'ja': 'Japanese',
  'ko': 'Korean',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ar': 'Arabic',
  'hi': 'Hindi',
  'it': 'Italian',
  'nl': 'Dutch',
  'pl': 'Polish',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'th': 'Thai',
  'id': 'Indonesian',
  'ms': 'Malay',
  'sv': 'Swedish',
  'da': 'Danish',
  'no': 'Norwegian',
  'fi': 'Finnish',
  'el': 'Greek',
  'cs': 'Czech',
  'ro': 'Romanian',
  'hu': 'Hungarian',
  'uk': 'Ukrainian',
  'bg': 'Bulgarian',
  'hr': 'Croatian',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'sr': 'Serbian',
  'lt': 'Lithuanian',
  'lv': 'Latvian',
  'et': 'Estonian',
  'he': 'Hebrew',
  'fa': 'Persian',
  'bn': 'Bengali',
  'fil': 'Filipino',
};

const SNIPPET = `（补充：有读者指出，以上说法不算很严谨，所以做一点补充。整数在加法下可构成阿贝尔群，自然数 N 在加法下不是阿贝尔群，比如 3 不存在逆元 -3，-3 不是自然数。非零实数、非零有理数、非零复数在乘法下构成阿贝尔群。原文的类比主要是为了让初学者抓住"可交换 vs 不可交换"这个核心直觉）`;

function buildSystemPrompt(targetName) {
  return `You are a professional translator. Translate the user's Chinese text snippet into ${targetName} for philoli.com.

This snippet is an editorial addendum to a blog post about Rubik's cubes and group theory. It clarifies the rigor of a previous claim about Abelian groups, mentioning addition on integers, addition on natural numbers (where 3 has no inverse -3), and multiplication on nonzero reals/rationals/complex numbers.

Style: Translate freely and idiomatically. Read as if a native ${targetName} speaker wrote it. Keep mathematical terms accurate (Abelian group, inverse, integer, natural number, real/rational/complex number). Keep the parenthesis wrapper and the "addendum / 补充" framing. Keep the quoted phrase "commutative vs non-commutative" intact in meaning. Keep markdown/punctuation flow natural for ${targetName}.

Output ONLY the translated snippet (one paragraph, wrapped in parentheses just like the source). No explanations, no quotes around it, no markdown code fences.`;
}

async function callGemini(content, targetName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    systemInstruction: { parts: [{ text: buildSystemPrompt(targetName) }] },
    contents: [{ role: 'user', parts: [{ text: `Translate this snippet to ${targetName}:\n\n${content}` }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return text.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/, '').trim();
}

const targets = Object.keys(LANGUAGES);
const results = {};
const CONCURRENCY = 6;

let nextIdx = 0;
async function worker() {
  while (true) {
    const i = nextIdx++;
    if (i >= targets.length) return;
    const lang = targets[i];
    const name = LANGUAGES[lang];
    try {
      const t0 = Date.now();
      const out = await callGemini(SNIPPET, name);
      results[lang] = out;
      const dt = ((Date.now() - t0) / 1000).toFixed(1);
      console.error(`  [DONE ${dt}s] ${lang}`);
    } catch (e) {
      console.error(`  [ERR] ${lang}: ${e.message}`);
      results[lang] = `<<ERROR: ${e.message}>>`;
    }
  }
}

console.error(`Translating snippet to ${targets.length} languages...\n`);
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log('\n===== RESULTS =====\n');
for (const lang of targets) {
  console.log(`----- ${lang} -----`);
  console.log(results[lang]);
  console.log('');
}
