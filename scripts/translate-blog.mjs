#!/usr/bin/env node
/**
 * Translate Chinese blog posts to English using Gemini API.
 * Uses the literary style: short sentences, simple words, poetic rhythm.
 *
 * Usage:
 *   node scripts/translate-blog.mjs              # translate all missing
 *   node scripts/translate-blog.mjs --force      # overwrite existing -en files
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');

// ---- Load .env ----
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
const force = process.argv.includes('--force');

// ---- Find posts needing translation ----
import { readdirSync } from 'node:fs';

const allFiles = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const enFiles = new Set(allFiles.filter(f => f.endsWith('-en.md')));
const zhFiles = allFiles.filter(f => {
  if (f.endsWith('-en.md')) return false;
  const stem = f.replace(/\.md$/, '');
  const enVersion = `${stem}-en.md`;
  if (!force && enFiles.has(enVersion)) return false;
  return true;
});

console.log(`Found ${zhFiles.length} posts to translate:\n`);
zhFiles.forEach(f => console.log(`  - ${f}`));
console.log('');

// ---- System prompt using "idiomatic" translation style ----
const SYSTEM_PROMPT = `You are a professional translator. Translate the user's Chinese blog post into English for philoli.com (Philo Li — artist, writer, developer).

Style: Translate freely and idiomatically. Your goal is prose that reads as if a native English speaker wrote it from scratch — NOT a translation that preserves the source sentence structure.

Specifically:
- Re-craft each sentence in English. Reorder, split, or merge sentences when it sounds more natural.
- Translate the MEANING and FEELING, not the words. If a literal translation would feel awkward or foreign, choose an idiomatic native expression that carries the same emotional weight.
- Replace source-language idioms, metaphors, and cultural references with English equivalents the reader will instinctively understand.
- Prefer vivid, specific, native vocabulary over neutral dictionary words.
- Match the original's emotional register precisely (warm stays warm, dry stays dry, urgent stays urgent), but express it in English's natural way of conveying that register.

Avoid: stiff word-for-word renderings, awkward calques, "translation-ese", overly formal phrasing where the original is casual.

RULES:
- Translate ALL content faithfully. Do not summarize or skip sections.
- Keep the YAML frontmatter structure but translate the title to English. Keep date, tags, and categories as-is.
- Keep <!--more--> markers in the same relative position.
- Keep markdown formatting (headers, bold, italic, links, code blocks) intact.
- Keep URLs, code snippets, and technical terms as-is.
- Keep proper nouns as-is: "Philo Li", "Dopamind", "PhiloArt".
- Output ONLY the translated markdown. No explanations or notes.`;

// ---- Gemini API call ----
async function callGemini(content) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{ role: 'user', parts: [{ text: `Translate this Chinese blog post to English:\n\n${content}` }] }],
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 65536,
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
  return text.replace(/^```markdown\n?/, '').replace(/\n?```$/, '').trim();
}

// ---- Process each post ----
async function translatePost(filename) {
  const srcPath = join(BLOG_DIR, filename);
  const stem = filename.replace(/\.md$/, '');
  const outPath = join(BLOG_DIR, `${stem}-en.md`);

  const content = readFileSync(srcPath, 'utf8');

  // Skip if content appears to already be in English
  const bodyStart = content.indexOf('---', content.indexOf('---') + 3);
  const body = content.slice(bodyStart + 3).trim();
  const chineseChars = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  if (chineseChars < 20) {
    console.log(`  [SKIP] ${filename} — appears to be English already`);
    return;
  }

  console.log(`  [TRANSLATING] ${filename}...`);
  const t0 = Date.now();

  try {
    const translated = await callGemini(content);
    writeFileSync(outPath, translated + '\n', 'utf8');
    const dt = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`  [DONE] ${stem}-en.md (${dt}s)`);
  } catch (err) {
    console.error(`  [ERROR] ${filename}: ${err.message}`);
  }
}

async function main() {
  for (const file of zhFiles) {
    await translatePost(file);
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('\nAll done.');
}

main().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
