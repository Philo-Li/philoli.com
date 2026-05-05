#!/usr/bin/env node
/**
 * Fix blog post tags/categories for ALL locales using Gemini to translate tag names.
 * Reads existing tag map from fix-blog-tags.mjs for known locales, generates for the rest.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');

// Load .env
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
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadDotEnv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error('Missing GEMINI_API_KEY'); process.exit(1); }

const ZH_TAGS = ['随笔', '读书', '阅读', '书单', '博客搭建', '睡眠', '自我提升', '艺术', '交易', '心理学', '创造力', 'Python'];
const ZH_CATS = ['日常闲聊', '读书笔记', '日常折腾', '数据科学', '日常阅读'];

const LANG_NAMES = {
  'ar': 'Arabic', 'hi': 'Hindi', 'nl': 'Dutch', 'pl': 'Polish',
  'tr': 'Turkish', 'th': 'Thai', 'id': 'Indonesian', 'ms': 'Malay',
  'sv': 'Swedish', 'da': 'Danish', 'no': 'Norwegian', 'fi': 'Finnish',
  'el': 'Greek', 'cs': 'Czech', 'ro': 'Romanian', 'hu': 'Hungarian',
  'uk': 'Ukrainian', 'bg': 'Bulgarian', 'hr': 'Croatian', 'sk': 'Slovak',
  'sl': 'Slovenian', 'sr': 'Serbian', 'lt': 'Lithuanian', 'lv': 'Latvian',
  'et': 'Estonian', 'he': 'Hebrew', 'fa': 'Persian', 'bn': 'Bengali',
  'fil': 'Filipino',
};

async function getTranslations(langCode, langName) {
  const allTerms = [...ZH_TAGS, ...ZH_CATS];
  const prompt = `Translate these Chinese blog tag/category names to ${langName}. Output ONLY a JSON object mapping each Chinese term to its ${langName} translation. Keep "Python" as "Python".

Terms: ${JSON.stringify(allTerms)}

Output format (exact JSON, no markdown):
{"随笔": "...", "读书": "...", ...}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 4096, responseMimeType: 'application/json' },
    }),
  });

  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  // Gemini 2.5 Flash may return thinking + text in separate parts
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  let text = parts.map(p => p.text || '').join('\n');
  // Extract JSON object from response
  text = text.replace(/```json\n?/g, '').replace(/```/g, '').trim();
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in: ' + text.slice(0, 200));
  return JSON.parse(jsonMatch[0]);
}

function fixFile(filePath, translations) {
  let content = readFileSync(filePath, 'utf8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  if (fmEnd === -1) return false;

  let frontmatter = content.slice(0, fmEnd + 3);
  const body = content.slice(fmEnd + 3);
  let changed = false;

  for (const [zh, local] of Object.entries(translations)) {
    if (zh === local) continue;
    if (frontmatter.includes(zh)) {
      frontmatter = frontmatter.replaceAll(zh, local);
      changed = true;
    }
  }

  if (changed) writeFileSync(filePath, frontmatter + body, 'utf8');
  return changed;
}

async function main() {
  const requestedLocales = process.argv.slice(2);
  const locales = requestedLocales.length > 0
    ? requestedLocales.filter(l => LANG_NAMES[l])
    : Object.keys(LANG_NAMES);

  for (const locale of locales) {
    const dir = join(BLOG_DIR, locale);
    if (!existsSync(dir)) { console.log(`[SKIP] ${locale}/`); continue; }

    console.log(`[${locale}] Getting translations for ${LANG_NAMES[locale]}...`);
    try {
      const translations = await getTranslations(locale, LANG_NAMES[locale]);
      const files = readdirSync(dir).filter(f => f.endsWith('.md'));
      let count = 0;
      for (const f of files) {
        if (fixFile(join(dir, f), translations)) count++;
      }
      console.log(`[${locale}] Fixed ${count}/${files.length} files`);
    } catch (err) {
      console.error(`[${locale}] ERROR: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('\nDone.');
}

main();
