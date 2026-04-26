// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const LOCALES = [
  'en', 'zh', 'zh-TW', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar',
  'hi', 'it', 'nl', 'pl', 'tr', 'vi', 'th', 'id', 'ms', 'sv',
  'da', 'no', 'fi', 'el', 'cs', 'ro', 'hu', 'uk', 'bg', 'hr',
  'sk', 'sl', 'sr', 'lt', 'lv', 'et', 'he', 'fa', 'bn', 'fil',
];

export default defineConfig({
  site: 'https://philoli.com',
  integrations: [react(), sitemap({ i18n: { defaultLocale: 'en', locales: Object.fromEntries(LOCALES.map(l => [l, l])) } })],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
