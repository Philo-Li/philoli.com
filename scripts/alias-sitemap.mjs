import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const source = path.join(distDir, 'sitemap-index.xml');
const target = path.join(distDir, 'sitemap.xml');

try {
  await access(source, constants.F_OK);
  await copyFile(source, target);
  console.log('[alias-sitemap] copied sitemap-index.xml -> sitemap.xml');
} catch (error) {
  console.error('[alias-sitemap] failed to create sitemap alias');
  console.error(error);
  process.exitCode = 1;
}
