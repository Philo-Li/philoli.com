import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { DEFAULT_LOCALE, useTranslations } from '../i18n';
import { buildFeedItems } from '../lib/rss';

export async function GET(context: APIContext) {
  const site = context.site;
  if (!site) throw new Error('astro.config site is required for RSS');
  const t = useTranslations(DEFAULT_LOCALE);
  return rss({
    title: t('metadata.blogTitle'),
    description: t('metadata.blogDescription'),
    site,
    items: await buildFeedItems(DEFAULT_LOCALE, site),
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
    customData: `<language>${DEFAULT_LOCALE}</language>`,
  });
}
