import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';
import type { RSSFeedItem } from '@astrojs/rss';
import { DEFAULT_LOCALE, localizedPath } from '../i18n';

const md = new MarkdownIt({ html: true, linkify: true, typographer: false });

/**
 * Convert post markdown to HTML suitable for <content:encoded>.
 * Root-relative URLs are rewritten to absolute (so RSS readers can load images).
 */
export function renderMarkdownForRss(body: string, siteUrl: string): string {
  const cleaned = body.replace(/<!--\s*more\s*-->/g, '');
  const rendered = md.render(cleaned);
  const absolutized = absolutizeUrls(rendered, siteUrl);
  return sanitizeHtml(absolutized, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img', 'figure', 'figcaption', 'h1', 'h2',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'width', 'height'],
      a: ['href', 'name', 'target', 'rel', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}

function absolutizeUrls(html: string, siteUrl: string): string {
  const origin = siteUrl.replace(/\/$/, '');
  return html.replace(/\s(src|href)="\/(?!\/)/g, ` $1="${origin}/`);
}

/**
 * Pick a short plain-text summary for <description>.
 * Order: frontmatter `description` → text before <!--more--> → first ~200 chars.
 */
export function extractPlainDescription(
  body: string,
  frontmatterDescription: string | undefined,
): string {
  if (frontmatterDescription && frontmatterDescription.trim().length > 0) {
    return frontmatterDescription.trim();
  }
  const moreIdx = body.search(/<!--\s*more\s*-->/);
  const slice = moreIdx >= 0 ? body.slice(0, moreIdx) : body;
  const plain = stripMarkdown(slice).trim();
  if (moreIdx >= 0) return plain;
  if (plain.length <= 200) return plain;
  return plain.slice(0, 200).trimEnd() + '…';
}

function stripMarkdown(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+.*$/gm, '')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\r?\n+/g, ' ')
    .replace(/\s+/g, ' ');
}

export type FeedLocale = 'en' | 'zh' | 'zh-TW';

export const FEED_META: Record<FeedLocale, {
  title: string;
  description: string;
  language: string;
}> = {
  en: {
    title: 'Philo Li — Blog',
    description: 'Articles on art, philosophy, and building things.',
    language: 'en',
  },
  zh: {
    title: 'Philo Li — 博客',
    description: '关于艺术、生活、投资和创造的思考。',
    language: 'zh-CN',
  },
  'zh-TW': {
    title: 'Philo Li — 部落格',
    description: '關於藝術、生活、投資和創造的思考。',
    language: 'zh-TW',
  },
};

export function feedLocaleFor(locale: string | undefined): FeedLocale {
  if (locale === 'zh') return 'zh';
  if (locale === 'zh-TW') return 'zh-TW';
  return 'en';
}

export function feedUrlFor(locale: string | undefined): string {
  const fl = feedLocaleFor(locale);
  return fl === 'en' ? '/rss.xml' : `/${fl}/rss.xml`;
}

const POST_LOCALE_FOR_FEED: Record<FeedLocale, string> = {
  en: DEFAULT_LOCALE,
  zh: 'zh',
  'zh-TW': 'zh-TW',
};

// Maps feed locale to the content folder prefix where posts are stored.
// zh-TW has no separate folder; it reuses the zh/ collection (same as the route layer).
const CONTENT_PREFIX_FOR_FEED: Record<FeedLocale, string> = {
  en: DEFAULT_LOCALE,
  zh: 'zh',
  'zh-TW': 'zh',
};

export async function buildFeedItems(
  feedLocale: FeedLocale,
  site: URL | string,
): Promise<RSSFeedItem[]> {
  const siteUrl = typeof site === 'string' ? site : site.toString();
  const origin = siteUrl.replace(/\/$/, '');
  const contentLocale = CONTENT_PREFIX_FOR_FEED[feedLocale];
  const prefix = `${contentLocale}/`;
  const routeLocale = POST_LOCALE_FOR_FEED[feedLocale];

  const all = await getCollection('blog');
  const posts = all
    .filter(p => p.id.startsWith(prefix))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts.map(post => {
    const slug = post.id.slice(prefix.length);
    const link = localizedPath(`/blog/${slug}`, routeLocale);
    const tags = Array.isArray(post.data.tags)
      ? post.data.tags
      : post.data.tags ? [post.data.tags] : [];
    return {
      title: post.data.title,
      pubDate: post.data.date,
      link,
      description: extractPlainDescription((post as { body?: string }).body ?? '', post.data.description),
      content: renderMarkdownForRss((post as { body?: string }).body ?? '', origin),
      categories: tags,
    };
  });
}
