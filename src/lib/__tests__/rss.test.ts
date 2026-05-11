import { describe, it, expect } from 'vitest';
import { renderMarkdownForRss, extractPlainDescription, FEED_META, feedLocaleFor, feedUrlFor } from '../rss';

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

describe('FEED_META', () => {
  it('has entries for en, zh, and zh-TW', () => {
    expect(FEED_META.en.language).toBe('en');
    expect(FEED_META.zh.language).toBe('zh-CN');
    expect(FEED_META['zh-TW'].language).toBe('zh-TW');
    for (const key of ['en', 'zh', 'zh-TW'] as const) {
      expect(FEED_META[key].title.length).toBeGreaterThan(0);
      expect(FEED_META[key].description.length).toBeGreaterThan(0);
    }
  });
});

describe('feedLocaleFor', () => {
  it('maps en, zh, and zh-TW to themselves', () => {
    expect(feedLocaleFor('en')).toBe('en');
    expect(feedLocaleFor('zh')).toBe('zh');
    expect(feedLocaleFor('zh-TW')).toBe('zh-TW');
  });

  it('falls back to en for other locales', () => {
    expect(feedLocaleFor('ja')).toBe('en');
    expect(feedLocaleFor('fr')).toBe('en');
    expect(feedLocaleFor('not-a-locale')).toBe('en');
  });
});

describe('feedUrlFor', () => {
  it('returns the path for each feed locale', () => {
    expect(feedUrlFor('en')).toBe('/rss.xml');
    expect(feedUrlFor('zh')).toBe('/zh/rss.xml');
    expect(feedUrlFor('zh-TW')).toBe('/zh-TW/rss.xml');
    expect(feedUrlFor('de')).toBe('/rss.xml');
  });
});
