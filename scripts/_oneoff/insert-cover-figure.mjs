#!/usr/bin/env node
// For each (slug, cover) pair, insert <figure class="post-cover">…</figure>
// right after the frontmatter block in every locale variant of that article.
// Idempotent: skips files that already contain a post-cover figure.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.cwd();
const blogDir = join(repoRoot, 'src/content/blog');

const ARTICLES = [
  { slug: 'being-mortal', cover: '/uploads/images/featured/being-mortal.png' },
  { slug: 'how-to-be-creative', cover: '/uploads/images/featured/how-to-be-creative.png' },
  { slug: 'the-world-as-I-see-it', cover: '/uploads/images/featured/the-world-as-i-see-it.jpg' },
  { slug: 'hacking-my-sleep-day1', cover: '/uploads/images/featured/hacking-my-sleep.webp' },
  { slug: 'Monet-Water-Lilies-Exhibition-in-Tokyo', cover: '/uploads/images/featured/monet-water-lilies.png' },
  { slug: 'ungifted', cover: '/uploads/images/featured/ungifted.png' },
];

const locales = readdirSync(blogDir).filter(d => !d.startsWith('.'));

let touched = 0;
let skipped = 0;

for (const { slug, cover } of ARTICLES) {
  for (const locale of locales) {
    const path = join(blogDir, locale, `${slug}.md`);
    let src;
    try {
      src = readFileSync(path, 'utf8');
    } catch {
      continue;
    }

    if (src.includes('class="post-cover"')) {
      skipped++;
      continue;
    }

    // Split frontmatter from body. Frontmatter is bracketed by --- lines.
    const m = src.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
    if (!m) {
      console.warn(`No frontmatter found in ${path}, skipping`);
      continue;
    }
    const frontmatter = m[0];
    const body = src.slice(frontmatter.length);

    // Use the post title (from frontmatter) as alt text. Fallback: slug.
    const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    const altRaw = titleMatch ? titleMatch[1] : slug;
    const alt = altRaw.replace(/"/g, '&quot;');

    const figure = `\n<figure class="post-cover">\n  <img src="${cover}" alt="${alt}" />\n</figure>\n`;
    // Insert figure after frontmatter, then continue with original body
    // (preserves any leading blank line in the body).
    const out = frontmatter + figure + body;
    writeFileSync(path, out, 'utf8');
    touched++;
  }
}

console.log(`Inserted figure into ${touched} files; skipped ${skipped} (already had figure).`);
