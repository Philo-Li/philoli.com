import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';
import type { RSSFeedItem } from '@astrojs/rss';
import type { Locale } from '../i18n';
import { localizedPath } from '../i18n';

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

export function feedUrlFor(locale: string | undefined): string {
  return localizedPath('/rss.xml', locale ?? '');
}

export async function buildFeedItems(
  locale: Locale,
  site: URL | string,
): Promise<RSSFeedItem[]> {
  const siteUrl = typeof site === 'string' ? site : site.toString();
  const origin = siteUrl.replace(/\/$/, '');
  const prefix = `${locale.toLowerCase()}/`;

  const all = await getCollection('blog');
  const posts = all
    .filter(p => p.id.startsWith(prefix))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts.map(post => {
    const slug = post.id.slice(prefix.length);
    const link = localizedPath(`/blog/${slug}`, locale);
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
