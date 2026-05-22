import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      // astro:content is a virtual module provided by Astro's dev/build pipeline.
      // In Vitest (no Astro runtime), alias it to a no-op stub so unit tests can
      // import rss.ts without crashing. buildFeedItems itself is tested via build.
      'astro:content': resolve(__dirname, 'src/__mocks__/astro-content.ts'),
    },
  },
  test: {
    // Sub-packages under services/ have their own vitest config and runtime.
    // `npm run subscribe:test` runs them; the root `npm test` skips them.
    exclude: ['**/node_modules/**', '**/dist/**', 'services/**'],
  },
});
