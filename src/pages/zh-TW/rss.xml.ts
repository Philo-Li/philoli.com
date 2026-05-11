import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { FEED_META, buildFeedItems } from '../../lib/rss';

export async function GET(context: APIContext) {
  const site = context.site;
  if (!site) throw new Error('astro.config site is required for RSS');
  return rss({
    title: FEED_META['zh-TW'].title,
    description: FEED_META['zh-TW'].description,
    site,
    items: await buildFeedItems('zh-TW', site),
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
    customData: `<language>${FEED_META['zh-TW'].language}</language>`,
  });
}
