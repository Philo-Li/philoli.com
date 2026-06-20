import sharp from 'sharp';
import { join } from 'path';

const PUBLIC = join(process.cwd(), 'public', 'images');
const files = [
  { in: 'hero1.webp', width: 900 },
  { in: 'hero2.webp', width: 900 },
  { in: 'hero.jpg', width: 1200 },
];

for (const f of files) {
  const src = join(PUBLIC, f.in);
  const bak = join(PUBLIC, f.in.replace(/\.(\w+)$/, '.orig.$1'));
  const ext = f.in.split('.').pop();

  // Back up original
  await sharp(src).toFile(bak);

  const pipeline = sharp(src).resize(f.width, null, { withoutEnlargement: true });
  if (ext === 'webp') pipeline.webp({ quality: 82 });
  else if (ext === 'jpg' || ext === 'jpeg') pipeline.jpeg({ quality: 82, mozjpeg: true });

  await pipeline.toFile(src);
  console.log(`Resized ${f.in} → ${f.width}px wide`);
}
console.log('Done.');
