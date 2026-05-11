#!/usr/bin/env node
/**
 * Translate blog posts to a target language using Gemini API (idiomatic style).
 *
 * Usage:
 *   node scripts/translate-blog.mjs zh-TW                              # translate all zh posts to Traditional Chinese
 *   node scripts/translate-blog.mjs ja                                 # translate to Japanese
 *   node scripts/translate-blog.mjs fr --force                         # overwrite existing translations
 *   node scripts/translate-blog.mjs ja --only my-post.md               # translate only one file
 *   node scripts/translate-blog.mjs all --only my-post.md              # translate one file to ALL supported languages
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');
const ZH_DIR = join(BLOG_DIR, 'zh');

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

// ---- Language map ----
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

// ---- Args ----
const rawArgs = process.argv.slice(2);
const positional = [];
let force = false;
let onlyFile = null;
for (let i = 0; i < rawArgs.length; i++) {
  const a = rawArgs[i];
  if (a === '--force') {
    force = true;
  } else if (a === '--only') {
    onlyFile = rawArgs[++i];
  } else if (a.startsWith('--only=')) {
    onlyFile = a.slice('--only='.length);
  } else if (a.startsWith('--')) {
    console.error(`Unknown flag: ${a}`);
    process.exit(1);
  } else {
    positional.push(a);
  }
}

if (positional.length === 0) {
  console.error('Usage: node scripts/translate-blog.mjs <lang-code|all> [--only <filename>] [--force]');
  console.error('Available languages:', Object.keys(LANGUAGES).join(', '));
  process.exit(1);
}

if (onlyFile && !onlyFile.endsWith('.md')) onlyFile += '.md';

const langArg = positional[0];
const targetLangs = langArg === 'all' ? Object.keys(LANGUAGES) : [langArg];
for (const l of targetLangs) {
  if (!LANGUAGES[l]) {
    console.error(`Unknown language: ${l}`);
    console.error('Available:', Object.keys(LANGUAGES).join(', '), 'or "all"');
    process.exit(1);
  }
}

const zhFiles = readdirSync(ZH_DIR).filter(f => f.endsWith('.md'));

if (onlyFile && !zhFiles.includes(onlyFile)) {
  console.error(`File not found in zh/: ${onlyFile}`);
  process.exit(1);
}

// ---- System prompt ----
function buildSystemPrompt(targetName) {
  return `You are a professional translator. Translate the user's Chinese blog post into ${targetName} for philoli.com (Philo Li — artist, writer, developer).

Style: Translate freely and idiomatically. Your goal is prose that reads as if a native ${targetName} speaker wrote it from scratch — NOT a translation that preserves the source sentence structure.

Specifically:
- Re-craft each sentence in ${targetName}. Reorder, split, or merge sentences when it sounds more natural.
- Translate the MEANING and FEELING, not the words. If a literal translation would feel awkward or foreign, choose an idiomatic native expression that carries the same emotional weight.
- Replace source-language idioms, metaphors, and cultural references with ${targetName} equivalents the reader will instinctively understand.
- Prefer vivid, specific, native vocabulary over neutral dictionary words.
- Match the original's emotional register precisely (warm stays warm, dry stays dry, urgent stays urgent), but express it in ${targetName}'s natural way of conveying that register.

Avoid: stiff word-for-word renderings, awkward calques, "translation-ese", overly formal phrasing where the original is casual.

RULES:
- Translate ALL content faithfully. Do not summarize or skip sections.
- Keep the YAML frontmatter structure but translate the title to ${targetName}. Keep date, tags, and categories as-is.
- Keep <!--more--> markers in the same relative position.
- Keep markdown formatting (headers, bold, italic, links, code blocks) intact.
- Keep URLs, code snippets, and technical terms as-is.
- Keep proper nouns as-is: "Philo Li", "Dopamind", "PhiloArt".
- Output ONLY the translated markdown. No explanations or notes.`;
}

// ---- Gemini API call ----
async function callGemini(content, targetName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    systemInstruction: { parts: [{ text: buildSystemPrompt(targetName) }] },
    contents: [{ role: 'user', parts: [{ text: `Translate this blog post to ${targetName}:\n\n${content}` }] }],
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
async function translatePost(filename, targetLang, targetName, targetDir) {
  const srcPath = join(ZH_DIR, filename);
  const outPath = join(targetDir, filename);

  const content = readFileSync(srcPath, 'utf8');

  console.log(`  [TRANSLATING] ${targetLang}/${filename}...`);
  const t0 = Date.now();

  try {
    const translated = await callGemini(content, targetName);
    writeFileSync(outPath, translated + '\n', 'utf8');
    const dt = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`  [DONE] ${targetLang}/${filename} (${dt}s)`);
  } catch (err) {
    console.error(`  [ERROR] ${targetLang}/${filename}: ${err.message}`);
  }
}

const CONCURRENCY = 4;

// Build the global job queue: { filename, targetLang, targetName, targetDir }
const jobs = [];
for (const targetLang of targetLangs) {
  const targetName = LANGUAGES[targetLang];
  const targetDir = join(BLOG_DIR, targetLang);
  if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });

  const existingFiles = new Set(readdirSync(targetDir).filter(f => f.endsWith('.md')));
  let candidates = onlyFile ? [onlyFile] : zhFiles;
  if (!force) candidates = candidates.filter(f => !existingFiles.has(f));

  for (const filename of candidates) {
    jobs.push({ filename, targetLang, targetName, targetDir });
  }
}

console.log(`Translating ${jobs.length} job(s) across ${targetLangs.length} language(s)${onlyFile ? ` (only: ${onlyFile})` : ''}:\n`);
for (const j of jobs) console.log(`  - ${j.targetLang}/${j.filename}`);
console.log('');

async function main() {
  if (jobs.length === 0) {
    console.log('Nothing to translate.');
    return;
  }

  let nextIdx = 0;
  let completed = 0;

  async function worker() {
    while (true) {
      const i = nextIdx++;
      if (i >= jobs.length) return;
      const j = jobs[i];
      await translatePost(j.filename, j.targetLang, j.targetName, j.targetDir);
      completed++;
      console.log(`  [PROGRESS] ${completed}/${jobs.length}`);
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, jobs.length) }, worker);
  await Promise.all(workers);
  console.log('\nAll done.');
}

main().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
