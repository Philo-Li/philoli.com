# Direct Subscription — Design

**Date:** 2026-05-21
**Status:** Approved
**Author:** Philo Li (with Claude)

## Goal

Let readers subscribe to philoli.com directly from the site (no redirect to Ghost or any external service), with a per-subscriber language preference so future sends can deliver the right locale.

## Scope

In:
- Inline subscribe form on philoli.com (lang selector + email + submit), embedded on `/newsletter`, the homepage end, and the end of each blog post.
- A dedicated Cloudflare Worker at `subscribe.philoli.com` that owns the subscribe / confirm / unsubscribe endpoints.
- Double opt-in via a single confirmation email, content localized to the subscriber's chosen language across all 41 locales.
- Shared D1 database (`newsletter-db`) with the existing Reflections project — one `subscribers` table, one new `lang` column.

Out:
- Ghost CSV → D1 migration.
- Changes to `scripts/send-blog-to-subscribers.mjs` (still reads the Ghost CSV).
- Admin UI for managing subscribers (use `wrangler d1 execute` for now).
- Captcha / Turnstile (honeypot field only).
- Reflections' own `/api/subscribe` endpoint — left as-is.
- A `name` field on the form or in writes.

## Architecture

```
philoli.com (Astro static, 41 locales)
        │  fetch
        ▼
https://subscribe.philoli.com           ← new Worker (services/subscribe-api/)
        │
        ├─→ Resend (transactional email)
        └─→ D1 newsletter-db (shared with Reflections)
                    ↑
                    └── Reflections (Astro SSR) also reads this DB
```

philoli.com stays purely static — no Astro adapter change, no Pages Functions, no `wrangler.toml` at the philoli.com root. The form is a small client-side `<script>` that POSTs cross-origin to the Worker.

The Worker owns all subscription logic. Reflections' existing `/api/subscribe` continues to exist (it bundles Stripe checkout and is unrelated to the simple newsletter signup); a future cleanup may consolidate, but is out of scope here.

## D1 schema

The Reflections D1 already has the `subscribers` table:

```sql
subscribers (
  id, email UNIQUE, name, status, tier,
  stripe_customer_id, created_at, confirmed_at
)
```

We add one column:

```sql
ALTER TABLE subscribers ADD COLUMN lang TEXT NOT NULL DEFAULT 'en';
```

Existing Reflections subscribers default to `lang='en'` (Reflections content is English, so this is correct).

Migration lives in the Reflections project as `drizzle/0006_add_lang.sql` (Reflections owns schema, philoli only reads/writes). Applied once via `wrangler d1 execute newsletter-db --remote --file=drizzle/0006_add_lang.sql`.

Future schema convention: any further `ALTER TABLE` lives in the Reflections project. philoli's worker only writes columns it knows about.

## Worker endpoints

All paths relative to `https://subscribe.philoli.com`.

### `POST /subscribe`

Request body: `{ "email": string, "lang": string, "hp": string }` — `hp` is a honeypot field, must be empty.

Validation:
- `email` is non-empty and contains `@`
- `lang` is one of the 41 locales declared in `astro.config.mjs`
- `hp` is empty (else: silent 200, do nothing)

Behavior (atomic per email):
- If no row exists → INSERT `(email, lang, status='pending')` and send confirm email.
- If row exists with `status='active'` → return 200 with i18n message `alreadySubscribed`. Don't resend mail.
- If row exists with `status='pending'` → UPDATE `lang`, resend confirm email.
- If row exists with `status='unsubscribed'` → UPDATE `lang`, set `status='pending'`, send confirm email.

Response: `{ "ok": true, "message": <localized> }` on success, `{ "ok": false, "error": <localized> }` on validation failure.

### `GET /confirm?token=<JWT>`

Token payload: `{ email, type: 'confirm', exp: now + 30d }` signed with `JWT_SECRET`.

Behavior:
- Verify JWT signature and `type='confirm'` and not expired.
- UPDATE `status='active'`, `confirmed_at=now` for the email in the token (only if currently `pending`).
- 302 redirect to `https://philoli.com/<lang>/newsletter?confirmed=1` (default locale path for `en` has no prefix).
- On token failure → 302 redirect to `https://philoli.com/<lang>/newsletter?error=invalid_token` (lang inferred from `Accept-Language` or defaults to `en`).

### `GET /unsubscribe?token=<JWT>`

Token payload: `{ email, type: 'unsubscribe', exp: now + 1y }`. Unsubscribe tokens are minted at email-send time and embedded in the email footer (so users can unsubscribe even from the confirm email itself).

Behavior:
- Verify JWT and `type='unsubscribe'`.
- UPDATE `status='unsubscribed'`, `unsubscribed_at=now`.
- 302 redirect to `https://philoli.com/<lang>/newsletter?unsubscribed=1`.

## Tokens

Stateless JWT (HS256), `JWT_SECRET` is a Worker secret. No tokens table; the JWT itself carries everything. Same approach Reflections uses.

## CORS

Allow-list:
- `https://philoli.com`
- `https://www.philoli.com`
- `http://localhost:4321` (dev)

All endpoints respond to `OPTIONS` with the appropriate CORS preflight headers.

## Email

One transactional email per subscribe attempt: the confirmation. No separate welcome email — the post-confirm landing page on philoli.com is the welcome experience.

### Content

- **From:** `Philo Li <hi@philoli.com>` (matches `send-blog-to-subscribers.mjs`)
- **Subject:** localized, e.g. `"确认订阅 philoli.com"` / `"Confirm your subscription to philoli.com"`
- **Body:** short HTML (1–2 paragraphs) with a single CTA button → `https://subscribe.philoli.com/confirm?token=<JWT>`
- **Footer:** plain-text unsubscribe link → `https://subscribe.philoli.com/unsubscribe?token=<JWT>` (GDPR / CAN-SPAM)

### Localization

Templates live in `services/subscribe-api/src/email-templates/<lang>.json`, one file per locale (41 files), shape:

```json
{
  "confirmSubject": "...",
  "confirmHeading": "...",
  "confirmBody": "...",
  "confirmCta": "...",
  "footerUnsubscribe": "..."
}
```

A small sync script (`scripts/sync-email-i18n.mjs` in the worker dir) reads `philoli.com/src/i18n/*.json`'s `subscribeEmail.*` namespace and writes the 41 template files. Run manually after `npm run i18n:translate` in the main project. Keeps email copy and on-site copy in sync without coupling deploy pipelines.

## Frontend

### Component

`src/components/forms/SubscribeForm.astro` — one file, ~150 lines including scoped styles and the client script.

Markup (conceptually):

```html
<form class="subscribe-form" data-subscribe>
  <select name="lang" aria-label={t('subscribeForm.languageLabel')}>
    <!-- 41 options, currentLocale pre-selected -->
  </select>
  <input type="email" name="email" required placeholder={t('subscribeForm.placeholder')} />
  <input type="text" name="hp" tabindex="-1" autocomplete="off" aria-hidden="true" /> <!-- honeypot, CSS-hidden -->
  <button type="submit">{t('subscribeForm.button')}</button>
  <p class="subscribe-form__status" hidden></p>
</form>
```

Client script:
- Hijacks submit, `fetch('https://subscribe.philoli.com/subscribe', { method: 'POST', body: JSON.stringify(...) })`
- On 200 with `ok: true` → swap form for a success state ("📬 Check your inbox to confirm")
- On 200 with `ok: false` (e.g. already subscribed) → show inline message
- On network/5xx error → show retry message
- Disables submit during in-flight request

### Placements

| Surface | How |
|---|---|
| `/newsletter` page | Replace the existing card's `<a>` button with `<SubscribeForm />`. Keep surrounding copy. |
| Homepage (`/index.astro`) end | New section at the bottom titled "Stay in touch", embeds the form. |
| Blog post end | Add `<SubscribeForm />` inside the blog post layout, after the article body. |

### Success / error states on philoli.com

The `/newsletter` page reads query params and shows a banner:
- `?confirmed=1` → "🎉 You're subscribed."
- `?unsubscribed=1` → "You're unsubscribed."
- `?error=invalid_token` → "This link is invalid or expired."

### i18n keys

New keys added to `src/i18n/en.json` under `subscribeForm.*` and `subscribeEmail.*`:

```
subscribeForm.placeholder
subscribeForm.button
subscribeForm.languageLabel
subscribeForm.success
subscribeForm.alreadySubscribed
subscribeForm.invalidEmail
subscribeForm.networkError
subscribeForm.successBanner          (for /newsletter?confirmed=1)
subscribeForm.unsubscribedBanner     (for /newsletter?unsubscribed=1)
subscribeForm.invalidTokenBanner     (for /newsletter?error=invalid_token)

subscribeEmail.confirmSubject
subscribeEmail.confirmHeading
subscribeEmail.confirmBody
subscribeEmail.confirmCta
subscribeEmail.footerUnsubscribe
```

Run `npm run i18n:translate` to populate the other 40 locale JSONs.

## Infrastructure

### Worker files

```
services/subscribe-api/
├── wrangler.toml
├── package.json
├── README.md
├── src/
│   ├── index.ts             // entrypoint, route dispatch, CORS
│   ├── handlers/
│   │   ├── subscribe.ts
│   │   ├── confirm.ts
│   │   └── unsubscribe.ts
│   ├── lib/
│   │   ├── jwt.ts           // sign / verify
│   │   ├── db.ts            // typed D1 helpers (no ORM)
│   │   ├── email.ts         // Resend client
│   │   └── i18n.ts          // load template for a lang
│   └── email-templates/
│       ├── en.json
│       ├── zh.json
│       └── ... (41 total)
└── scripts/
    └── sync-email-i18n.mjs  // reads ../../src/i18n/*.json
```

Implementation is plain TypeScript on the standard Workers runtime — no framework (Hono / itty-router) needed for 3 routes.

### `wrangler.toml`

```toml
name = "philoli-subscribe-api"
main = "src/index.ts"
compatibility_date = "2026-05-21"

[[d1_databases]]
binding = "DB"
database_name = "newsletter-db"
database_id = "2492d993-35b1-418c-87cb-cca686e334cd"

[[routes]]
pattern = "subscribe.philoli.com/*"
zone_name = "philoli.com"
```

### Secrets

`wrangler secret put` (run once per environment):
- `RESEND_API_KEY`
- `JWT_SECRET` (32+ random bytes)

### Custom domain

`subscribe.philoli.com` is added as a route on the Workers project (configured via `[[routes]]` above + a CNAME on `philoli.com` zone pointing to the worker).

### Top-level `package.json` scripts

```
"subscribe:dev":          "wrangler dev -c services/subscribe-api/wrangler.toml",
"subscribe:deploy":       "wrangler deploy -c services/subscribe-api/wrangler.toml",
"subscribe:sync-i18n":    "node services/subscribe-api/scripts/sync-email-i18n.mjs"
```

### CI

New workflow `.github/workflows/deploy-subscribe-api.yml`:

```yaml
on:
  push:
    branches: [main]
    paths: ['services/subscribe-api/**', 'src/i18n/**']
```

Runs `npm run subscribe:sync-i18n` then `npm run subscribe:deploy`. Independent of the existing `deploy-pages.yml`.

## Testing

- **Unit (vitest, in worker dir)**
  - `jwt.ts`: sign/verify round-trip, expiration, tampered signature
  - `subscribe` handler: each of the four state branches (new / pending / active / unsubscribed)
  - Honeypot: non-empty `hp` returns 200 with no side-effect
  - Invalid email / invalid lang: 400 with localized error

- **Integration**
  - `wrangler dev` with `--local` D1 (seeded via `migrations/0006_add_lang.sql`)
  - Curl scripts in `services/subscribe-api/test/curl/` for subscribe → confirm → unsubscribe flow

- **Manual smoke test**
  - First deploy to default `*.workers.dev` URL, subscribe with a real Gmail address, confirm the email lands, click confirm → land on philoli.com `/newsletter?confirmed=1`.
  - Then add the custom domain and rerun the same flow.

## Risks / open considerations

- **Cross-project schema coupling.** Both philoli's worker and Reflections write to `subscribers`. Future ALTERs need coordination; we documented "all migrations live in Reflections."
- **D1 free-tier write limits.** The free tier is 100k writes/day. Subscribe events are tiny; we're nowhere near.
- **Resend rate limits.** A confirmation per subscribe attempt could be abused. Mitigations: honeypot, Cloudflare's default bot protection, and (if needed later) Turnstile.
- **Reflections subscribers default to `lang='en'`.** Acceptable today (Reflections is English-only). If Reflections ever offers multi-lang content, we'd want a UI for existing subscribers to set lang.
- **Confirmation email may land in spam.** Mitigation: keep SPF/DKIM/DMARC on `philoli.com` aligned with Resend domain auth (already in place per existing send-blog script). Plain text + clear CTA, no link soup.
