import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { FEED_META, buildFeedItems } from '../lib/rss';

export async function GET(context: APIContext) {
  const site = context.site;
  if (!site) throw new Error('astro.config site is required for RSS');
  return rss({
    title: FEED_META.en.title,
    description: FEED_META.en.description,
    site,
    items: await buildFeedItems('en', site),
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
    customData: `<language>${FEED_META.en.language}</language>`,
  });
}
