// Generates responsive WebP variants of hero images for build-time optimization.
// Run: node scripts/optimize-hero-images.mjs
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_DIR = join(ROOT, 'public', 'images');
const OUT_DIR = join(ROOT, 'public', 'images', 'optimized');

const VARIANTS = [
  { suffix: 'sm', width: 450 },
  { suffix: 'md', width: 900 },
  { suffix: 'lg', width: 1800 },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const files = await readdir(SRC_DIR);
  const heroFiles = files.filter(f => /^hero\d?\.(jpg|png|webp)$/i.test(f));

  for (const file of heroFiles) {
    const base = file.replace(/\.(jpg|png|webp)$/i, '');
    const srcPath = join(SRC_DIR, file);

    for (const { suffix, width } of VARIANTS) {
      const outPath = join(OUT_DIR, `${base}-${suffix}.webp`);
      console.log(`  ${file} → optimized/${base}-${suffix}.webp (${width}w)`);
      await sharp(srcPath)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(outPath);
    }

    // Also create a default optimized copy at original name for the OG image path
    const ogOutPath = join(OUT_DIR, `${base}.webp`);
    console.log(`  ${file} → optimized/${base}.webp (1200w)`);
    await sharp(srcPath)
      .resize(1200)
      .webp({ quality: 82 })
      .toFile(ogOutPath);
  }

  console.log(`\nDone. Optimized ${heroFiles.length} hero image(s).`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
