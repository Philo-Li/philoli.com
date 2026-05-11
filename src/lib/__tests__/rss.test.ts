import { describe, it, expect } from 'vitest';
import { renderMarkdownForRss, extractPlainDescription, feedUrlFor } from '../rss';

const SITE = 'https://philoli.com';

describe('renderMarkdownForRss', () => {
  it('renders headings and paragraphs to HTML', () => {
    const html = renderMarkdownForRss('# Hello\n\nWorld.', SITE);
    expect(html).toContain('<h1>Hello</h1>');
    expect(html).toContain('<p>World.</p>');
  });

  it('absolutizes root-relative image URLs', () => {
    const html = renderMarkdownForRss('![x](/uploads/a.jpg)', SITE);
    expect(html).toContain('src="https://philoli.com/uploads/a.jpg"');
    expect(html).not.toContain('src="/uploads/a.jpg"');
  });

  it('absolutizes root-relative links', () => {
    const html = renderMarkdownForRss('[home](/about)', SITE);
    expect(html).toContain('href="https://philoli.com/about"');
  });

  it('leaves protocol-absolute URLs untouched', () => {
    const html = renderMarkdownForRss('[gh](https://github.com/foo)', SITE);
    expect(html).toContain('href="https://github.com/foo"');
  });

  it('strips script tags', () => {
    const html = renderMarkdownForRss('<script>alert(1)</script>\n\nok', SITE);
    expect(html).not.toContain('<script');
    expect(html).toContain('ok');
  });

  it('keeps the <!--more--> marker out of output', () => {
    const html = renderMarkdownForRss('Intro\n\n<!--more-->\n\nRest', SITE);
    expect(html).not.toContain('<!--more-->');
    expect(html).toContain('Intro');
    expect(html).toContain('Rest');
  });

  it('absolutizes every root-relative URL in the body, not just the first', () => {
    const md = '![a](/uploads/a.jpg)\n\n[home](/about)\n\n![b](/uploads/b.jpg)';
    const html = renderMarkdownForRss(md, SITE);
    expect(html).toContain('src="https://philoli.com/uploads/a.jpg"');
    expect(html).toContain('href="https://philoli.com/about"');
    expect(html).toContain('src="https://philoli.com/uploads/b.jpg"');
    expect(html).not.toContain('"/uploads/');
    expect(html).not.toContain('"/about"');
  });
});

describe('extractPlainDescription', () => {
  it('returns frontmatter description verbatim when present', () => {
    expect(extractPlainDescription('hello body', 'My summary')).toBe('My summary');
  });

  it('falls back to the first ~200 chars of stripped body', () => {
    const body = '# Title\n\nFirst paragraph with **bold** text.\n\nSecond paragraph.';
    const desc = extractPlainDescription(body, undefined);
    expect(desc.startsWith('First paragraph with bold text.')).toBe(true);
    expect(desc).not.toContain('**');
    expect(desc).not.toContain('#');
  });

  it('truncates with an ellipsis when body exceeds the limit', () => {
    const body = 'a'.repeat(500);
    const desc = extractPlainDescription(body, undefined);
    expect(desc.length).toBeLessThanOrEqual(220);
    expect(desc.endsWith('…')).toBe(true);
  });

  it('cuts at the <!--more--> marker when present', () => {
    const body = 'Intro paragraph.\n\n<!--more-->\n\nRest of post body.';
    const desc = extractPlainDescription(body, undefined);
    expect(desc).toBe('Intro paragraph.');
  });
});

describe('feedUrlFor', () => {
  it('returns /rss.xml for the default locale (en)', () => {
    expect(feedUrlFor('en')).toBe('/rss.xml');
  });

  it('returns the locale-prefixed path for non-default locales', () => {
    expect(feedUrlFor('zh')).toBe('/zh/rss.xml');
    expect(feedUrlFor('zh-TW')).toBe('/zh-TW/rss.xml');
    expect(feedUrlFor('ja')).toBe('/ja/rss.xml');
    expect(feedUrlFor('de')).toBe('/de/rss.xml');
  });

  it('returns /rss.xml when locale is undefined or unknown', () => {
    expect(feedUrlFor(undefined)).toBe('/rss.xml');
    expect(feedUrlFor('not-a-locale')).toBe('/rss.xml');
  });
});
