# RSS Feed Support — Design

**Date:** 2026-05-11
**Status:** Approved
**Author:** Philo Li (with Claude)

## Goal

Add RSS subscription support to the blog so readers can follow new posts in their feed reader.

## Scope

Three feeds, one per language that has a meaningful body of original content:

| Feed URL | Source posts |
|----------|--------------|
| `/rss.xml` | `src/content/blog/en/**` |
| `/zh/rss.xml` | `src/content/blog/zh/**` |
| `/zh-TW/rss.xml` | `src/content/blog/zh-TW/**` |

No feed is generated for the other 37 locales — most have only 1–2 translated posts, so a feed would be near-empty and add noise to the build.

## Content shape

Each feed contains the locale's posts (full text), sorted newest-first. RSS 2.0 with the `content` namespace.

Per item:

- `<title>` — `post.data.title`
- `<link>` — absolute URL to the post on the corresponding locale path
- `<pubDate>` — `post.data.date`
- `<description>` — `post.data.description` if present, else first ~200 characters of the post body (plain text)
- `<content:encoded>` — full rendered HTML of the post body (CDATA)
- `<category>` — one tag per entry from `post.data.tags`
- `<guid>` — same as `<link>`, `isPermaLink="true"`

Channel-level `<language>` is set per feed (`en`, `zh-CN`, `zh-TW`).

## Markdown rendering

Astro's `render()` returns a component, not a string, so it can't be used inside an endpoint. Per Astro's official RSS guidance, we render markdown to HTML with `markdown-it`, then sanitize with `sanitize-html`.

Known trade-off: this pipeline doesn't run the site's full remark/rehype chain, so syntax highlighting on code blocks will be absent or different in the feed. That's acceptable for an RSS feed — the canonical reading experience is still on the site.

**Relative image paths:** posts use paths like `./image.png` for inline images. These won't resolve in a reader. A small transform after `markdown-it` rewrites relative `src`/`href` to absolute URLs (`https://philoli.com/...`) before sanitizing.

## Architecture

### New files

```
src/lib/rss.ts                  -- buildFeedItems(locale) helper, markdown→HTML pipeline
src/pages/rss.xml.ts            -- English feed endpoint
src/pages/zh/rss.xml.ts         -- Simplified Chinese feed endpoint
src/pages/zh-TW/rss.xml.ts      -- Traditional Chinese feed endpoint
```

Each `.xml.ts` endpoint is a thin wrapper:

```ts
import rss from '@astrojs/rss';
import { buildFeedItems, FEED_META } from '../lib/rss';

export const GET = async (context) => rss({
  ...FEED_META.en,
  site: context.site,
  items: await buildFeedItems('en'),
  xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
});
```

`FEED_META[locale]` carries title, description, and `<language>` per feed (pulled from `src/i18n/<locale>.json` where practical).

### Modified files

- **`package.json`** — add `@astrojs/rss`, `markdown-it`, `sanitize-html` (+ `@types/markdown-it`, `@types/sanitize-html`)
- **`src/components/SEOHead.astro`** — output one `<link rel="alternate" type="application/rss+xml" href={feedUrl} title={feedTitle}>` for the current locale. Mapping:
  - `en` → `/rss.xml`
  - `zh` → `/zh/rss.xml`
  - `zh-TW` → `/zh-TW/rss.xml`
  - any other locale → `/rss.xml` (English fallback)
- **`src/components/Footer.astro`** — add a small RSS icon link to the right of (or alongside) `SocialLinks`, pointing to the same locale-specific feed URL as the head link. Independent of `SocialLinks` to avoid widening that component's API.
- **`src/components/pages/BlogIndexPage.astro`** — add an "RSS" button near the page title, linked to the current locale's feed.
- **`src/i18n/en.json`, `src/i18n/zh.json`, `src/i18n/zh-TW.json`** — add `metadata.rssTitle`, `metadata.rssDescription`. `blogPage.rssLabel` defaults to literal "RSS" (universal); no translation needed for other locales.

## Auto-discovery — one feed per page

A page's `<head>` advertises **only the feed matching that page's locale**, not all three. This prevents feed readers from prompting the user to pick among multiple feeds when they hit "subscribe."

- English pages → `<link rel="alternate" ... href="/rss.xml">`
- `/zh/...` → `/zh/rss.xml`
- `/zh-TW/...` → `/zh-TW/rss.xml`
- Other locales → fall back to `/rss.xml`

## Subscription behavior

A reader subscribes to one feed URL and receives only that language's posts. The same conceptual post translated into multiple languages lives in different feeds as different entries with different GUIDs/URLs — they aren't duplicates within any one feed. A user would only see "triplicate" entries if they explicitly subscribed to all three feeds, which is their own choice.

## Verification

Manual checks before shipping:

1. `pnpm build` (or `npm run build`) produces `dist/rss.xml`, `dist/zh/rss.xml`, `dist/zh-TW/rss.xml`.
2. Feed validates at `https://validator.w3.org/feed/`.
3. Open one feed in a reader (Feedly or NetNewsWire) — confirm posts render with full content, images load via absolute URLs, code blocks at least appear as `<pre><code>` even without highlighting.
4. `<link rel="alternate">` auto-discovery: load `/blog/`, view source, confirm one feed link with English URL. Load `/zh/blog/`, confirm Chinese feed URL.
5. Click the RSS icon in the footer from `/`, `/zh/`, `/zh-TW/`, and a non-default locale (e.g., `/ja/`) — confirm correct feed URL each time.

## Out of scope

- Per-locale feeds for the other 37 languages.
- JSON Feed format.
- Atom feed format.
- Per-tag/category feeds.
- Webhooks / push-style notifications to subscribers.
