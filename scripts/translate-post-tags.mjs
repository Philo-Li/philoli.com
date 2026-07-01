#!/usr/bin/env node
/**
 * Translate the `tags` field of a single blog post across all locale versions.
 * Leaves the article body and other frontmatter fields untouched.
 *
 * Usage:
 *   node scripts/translate-post-tags.mjs solve-rubiks-cube-without-formulas.md
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');
const ZH_DIR = join(BLOG_DIR, 'zh');

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

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node scripts/translate-post-tags.mjs <filename.md>');
  process.exit(1);
}

const zhPath = join(ZH_DIR, filename);
if (!existsSync(zhPath)) {
  console.error(`Source not found: ${zhPath}`);
  process.exit(1);
}

// Pull tag list out of the YAML frontmatter as an array of strings.
function parseTags(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  const tagsMatch = fm.match(/^tags:\s*\r?\n((?:[ \t]+-[^\n]*\r?\n?)+)/m);
  if (!tagsMatch) return null;
  return tagsMatch[1]
    .split(/\r?\n/)
    .map(line => line.replace(/^[ \t]+-\s*/, '').trim())
    .filter(Boolean);
}

function replaceTagsBlock(content, newTags) {
  const block = 'tags:\n' + newTags.map(t => `  - ${t}`).join('\n');
  return content.replace(/^tags:\s*\r?\n(?:[ \t]+-[^\n]*\r?\n?)+/m, block + '\n');
}

const sourceTags = parseTags(readFileSync(zhPath, 'utf8'));
if (!sourceTags || sourceTags.length === 0) {
  console.error(`No tags found in ${zhPath}`);
  process.exit(1);
}
console.log(`Source tags (zh): ${JSON.stringify(sourceTags)}\n`);

async function translateTags(tags, targetName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const prompt = `Translate the following blog post tags from Chinese to ${targetName}. Each tag is a short keyword or phrase used for categorization. Use natural, idiomatic ${targetName} terms a native speaker would search for. Keep technical or proper names as-is when standard in ${targetName} (e.g., "Roux" stays "Roux"). Preserve order and count.

Input tags (JSON array): ${JSON.stringify(tags)}

Respond ONLY with a JSON array of translated strings. No prose, no code fences.`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1024,
      responseMimeType: 'application/json',
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
  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed) || parsed.length !== tags.length) {
    throw new Error(`Bad response shape: ${text}`);
  }
  return parsed.map(s => String(s));
}

async function processLocale(lang, langName) {
  const filePath = join(BLOG_DIR, lang, filename);
  if (!existsSync(filePath)) {
    console.log(`  [SKIP] ${lang}/${filename} (file not present)`);
    return;
  }
  try {
    const translated = await translateTags(sourceTags, langName);
    const content = readFileSync(filePath, 'utf8');
    const updated = replaceTagsBlock(content, translated);
    if (updated === content) {
      console.log(`  [WARN] ${lang}/${filename}: tags block not found, skipping`);
      return;
    }
    writeFileSync(filePath, updated, 'utf8');
    console.log(`  [DONE] ${lang}/${filename} -> ${JSON.stringify(translated)}`);
  } catch (err) {
    console.error(`  [ERROR] ${lang}/${filename}: ${err.message}`);
  }
}

const targets = Object.entries(LANGUAGES);
const CONCURRENCY = 4;

async function main() {
  let next = 0;
  async function worker() {
    while (true) {
      const i = next++;
      if (i >= targets.length) return;
      const [lang, name] = targets[i];
      await processLocale(lang, name);
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, targets.length) }, worker));
  console.log('\nAll done.');
}

main().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
