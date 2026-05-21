# Direct Subscription Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let readers subscribe to philoli.com directly from a one-row inline form (language select + email + submit), backed by a new `subscribe.philoli.com` Cloudflare Worker sharing Reflections' D1 database, with double opt-in and localized confirmation emails in 41 languages.

**Architecture:** philoli.com stays purely static. A new Cloudflare Worker (`services/subscribe-api/`) owns `POST /subscribe`, `GET /confirm`, `GET /unsubscribe`, writes to the existing Reflections D1 (`newsletter-db`), and sends one confirmation email via Resend. Frontend is a small Astro component with a client-side fetch.

**Tech Stack:** TypeScript Cloudflare Workers (no framework), Vitest (worker unit tests), Resend (transactional email), JWT HS256 (stateless tokens via Web Crypto), Astro components + native form, existing `npm run i18n:translate` pipeline for 41-language fan-out.

**Design reference:** `docs/superpowers/specs/2026-05-21-direct-subscription-design.md`

**Important conventions:**
- All paths below are relative to repo root `C:\Work\philoli.com\`.
- Worker code lives in `services/subscribe-api/` — siblings with the existing `services/custom-llm-proxy/`.
- The shared D1 is owned by the Reflections project at `C:\Work\CS\newsletter\`. Schema migrations live there.
- Vitest is the test runner (root `vitest.config.ts` is the source of truth — extend, don't duplicate).
- Commit after every passing test or completed micro-step. The plan calls out commit points explicitly.

---

## Chunk 1: Worker scaffold + D1 schema migration + JWT lib

Sets up the worker project, applies the schema change to the shared D1, and lands a tested JWT helper. End state: an empty worker that builds + a tested `jwt.ts` module.

### Task 1.1: Create worker package scaffold

**Files:**
- Create: `services/subscribe-api/package.json`
- Create: `services/subscribe-api/tsconfig.json`
- Create: `services/subscribe-api/README.md`
- Create: `services/subscribe-api/wrangler.toml`
- Create: `services/subscribe-api/src/index.ts`

- [ ] **Step 1: Create `services/subscribe-api/package.json`**

```json
{
  "name": "philoli-subscribe-api",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "resend": "^4.0.0"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20240605.0",
    "typescript": "^5.7.0",
    "vitest": "^4.1.5",
    "wrangler": "^4.84.1"
  }
}
```

- [ ] **Step 2: Create `services/subscribe-api/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "Bundler",
    "lib": ["ES2022"],
    "types": ["@cloudflare/workers-types"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts"]
}
```

- [ ] **Step 3: Create `services/subscribe-api/wrangler.toml`**

```toml
name = "philoli-subscribe-api"
main = "src/index.ts"
compatibility_date = "2026-05-21"
workers_dev = true

[[d1_databases]]
binding = "DB"
database_name = "newsletter-db"
database_id = "2492d993-35b1-418c-87cb-cca686e334cd"

[vars]
SITE_URL = "https://philoli.com"
WORKER_URL = "https://subscribe.philoli.com"
FROM_EMAIL = "Philo Li <hi@philoli.com>"

# Custom domain route is enabled in Task 6.1 once the smoke test passes.
# [[routes]]
# pattern = "subscribe.philoli.com/*"
# zone_name = "philoli.com"
```

- [ ] **Step 4: Create `services/subscribe-api/src/index.ts` (placeholder)**

```ts
export default {
  async fetch(_request: Request, _env: unknown): Promise<Response> {
    return new Response('subscribe-api OK', { status: 200 });
  },
};
```

- [ ] **Step 5: Create `services/subscribe-api/README.md`**

```markdown
# subscribe-api

Cloudflare Worker that handles direct newsletter subscriptions for philoli.com.

Endpoints:
- `POST /subscribe` — `{ email, lang, hp }` → writes pending row, sends confirm email
- `GET /confirm?token=...` → activates subscription, redirects to philoli.com
- `GET /unsubscribe?token=...` → marks unsubscribed, redirects to philoli.com

D1 binding: `DB` → shared `newsletter-db` (also used by `C:\Work\CS\newsletter\`).
Secrets: `RESEND_API_KEY`, `JWT_SECRET`.

See `docs/superpowers/specs/2026-05-21-direct-subscription-design.md`.
```

- [ ] **Step 6: Add scripts to root `package.json`**

Modify `C:\Work\philoli.com\package.json` — add to the `"scripts"` object (alphabetical order ok, keep existing scripts untouched):

```json
"subscribe:dev":       "wrangler dev -c services/subscribe-api/wrangler.toml",
"subscribe:deploy":    "wrangler deploy -c services/subscribe-api/wrangler.toml",
"subscribe:sync-i18n": "node services/subscribe-api/scripts/sync-email-i18n.mjs",
"subscribe:test":      "npm --prefix services/subscribe-api run test"
```

- [ ] **Step 7: Install worker dependencies**

Run from repo root:
```bash
npm --prefix services/subscribe-api install
```
Expected: creates `services/subscribe-api/node_modules/` and `package-lock.json`. No errors.

- [ ] **Step 8: Verify worker builds (dry-run)**

Run from repo root:
```bash
npx wrangler -c services/subscribe-api/wrangler.toml deploy --dry-run --outdir /tmp/subscribe-dryrun
```
Expected: prints "Total Upload: <small N> KiB". No errors. (`/tmp` on Windows: `%TEMP%` — feel free to swap.)

- [ ] **Step 9: Add `services/subscribe-api/.gitignore`**

```
node_modules/
.wrangler/
dist/
```

- [ ] **Step 10: Commit**

```bash
git add services/subscribe-api package.json
git commit -m "feat(subscribe-api): scaffold worker package"
```

---

### Task 1.2: Apply D1 schema migration (add `lang` column)

The shared D1 lives at database_id `2492d993-35b1-418c-87cb-cca686e334cd`. The Reflections project owns schema migrations.

**Files:**
- Create: `C:\Work\CS\newsletter\drizzle\0006_add_lang.sql`

- [ ] **Step 1: Create the migration file in the Reflections repo**

Path: `C:\Work\CS\newsletter\drizzle\0006_add_lang.sql`

```sql
-- Add per-subscriber language preference for philoli.com newsletter signups.
-- Existing rows default to 'en' (Reflections content is English-only).
ALTER TABLE subscribers ADD COLUMN lang TEXT NOT NULL DEFAULT 'en';

CREATE INDEX IF NOT EXISTS idx_subscribers_status_lang ON subscribers (status, lang);
```

- [ ] **Step 2: Apply to local D1**

From `C:\Work\CS\newsletter\`:
```bash
npx wrangler d1 execute newsletter-db --local --file=drizzle/0006_add_lang.sql
```
Expected: "🚣 Executed N commands". No errors.

- [ ] **Step 3: Apply to remote D1**

⚠️ This touches production data. Verify before running.

From `C:\Work\CS\newsletter\`:
```bash
npx wrangler d1 execute newsletter-db --remote --file=drizzle/0006_add_lang.sql
```
Expected: same success output, against the remote D1.

- [ ] **Step 4: Verify the column exists**

```bash
npx wrangler d1 execute newsletter-db --remote --command="PRAGMA table_info(subscribers);"
```
Expected output includes a row: `name: lang | type: TEXT | notnull: 1 | dflt_value: 'en'`.

- [ ] **Step 5: Commit (in the Reflections repo)**

```bash
cd C:\Work\CS\newsletter
git add drizzle/0006_add_lang.sql
git commit -m "feat(db): add lang column to subscribers"
```

(No commit needed in the philoli.com repo for this task — the migration is owned by Reflections.)

---

### Task 1.3: JWT helper (TDD)

A small HS256 JWT module — used for confirm and unsubscribe tokens. Pure functions, no I/O — perfect for TDD.

**Files:**
- Create: `services/subscribe-api/src/lib/jwt.ts`
- Create: `services/subscribe-api/test/jwt.test.ts`
- Create: `services/subscribe-api/vitest.config.ts`

- [ ] **Step 1: Add vitest config**

`services/subscribe-api/vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
  },
});
```

- [ ] **Step 2: Write the failing test**

`services/subscribe-api/test/jwt.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { sign, verify } from '../src/lib/jwt';

const SECRET = 'test-secret-do-not-use-in-prod';

describe('jwt', () => {
  it('round-trips a payload', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    const payload = await verify(token, SECRET);
    expect(payload).toMatchObject({ email: 'a@b.com', type: 'confirm' });
  });

  it('rejects a tampered signature', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    const [h, p] = token.split('.');
    const tampered = `${h}.${p}.AAAA`;
    expect(await verify(tampered, SECRET)).toBeNull();
  });

  it('rejects a wrong secret', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    expect(await verify(token, 'other-secret')).toBeNull();
  });

  it('rejects an expired token', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, -1);
    expect(await verify(token, SECRET)).toBeNull();
  });

  it('rejects a malformed token', async () => {
    expect(await verify('not-a-jwt', SECRET)).toBeNull();
    expect(await verify('', SECRET)).toBeNull();
  });
});
```

- [ ] **Step 3: Run the test — should fail**

From repo root:
```bash
npm run subscribe:test
```
Expected: vitest reports "Cannot find module '../src/lib/jwt'" (or similar) — failure.

- [ ] **Step 4: Implement `src/lib/jwt.ts`**

`services/subscribe-api/src/lib/jwt.ts`:
```ts
function b64urlEncode(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(s: string): Uint8Array {
  const pad = '='.repeat((4 - (s.length % 4)) % 4);
  const b64 = (s + pad).replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

const enc = new TextEncoder();

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export interface JwtPayload {
  email: string;
  type: 'confirm' | 'unsubscribe';
  iat?: number;
  exp?: number;
}

export async function sign(payload: JwtPayload, secret: string, ttlSeconds: number): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const body = { ...payload, iat: now, exp: now + ttlSeconds };
  const h = b64urlEncode(enc.encode(JSON.stringify(header)));
  const p = b64urlEncode(enc.encode(JSON.stringify(body)));
  const data = `${h}.${p}`;
  const key = await hmacKey(secret);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
  return `${data}.${b64urlEncode(sig)}`;
}

export async function verify(token: string, secret: string): Promise<JwtPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [h, p, s] = parts;
    const key = await hmacKey(secret);
    const ok = await crypto.subtle.verify('HMAC', key, b64urlDecode(s), enc.encode(`${h}.${p}`));
    if (!ok) return null;
    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(p))) as JwtPayload;
    if (typeof payload.exp === 'number' && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
```

- [ ] **Step 5: Run the test — should pass**

```bash
npm run subscribe:test
```
Expected: "5 passed".

- [ ] **Step 6: Commit**

```bash
git add services/subscribe-api/src/lib/jwt.ts services/subscribe-api/test/jwt.test.ts services/subscribe-api/vitest.config.ts
git commit -m "feat(subscribe-api): jwt sign/verify with vitest coverage"
```

---

## Chunk 2: Email templates + i18n sync + Resend client

Builds the email side end-to-end: 41 locale JSON templates seeded from a sync script, a Resend wrapper, and a unit-tested template renderer.

### Task 2.1: Add new i18n keys to philoli.com

**Files:**
- Modify: `src/i18n/en.json`

- [ ] **Step 1: Add `subscribeForm.*` and `subscribeEmail.*` blocks to `src/i18n/en.json`**

Insert these two top-level blocks (place after `newsletterCta`, alphabetical-ish ordering is not enforced in this file — colocation by feature is preferred):

```json
"subscribeForm": {
  "languageLabel": "Language",
  "placeholder": "your@email.com",
  "button": "Subscribe",
  "submitting": "Subscribing…",
  "successInbox": "📬 Check your inbox to confirm.",
  "alreadySubscribed": "You're already subscribed.",
  "invalidEmail": "Please enter a valid email address.",
  "networkError": "Network error. Please try again.",
  "successBanner": "🎉 You're subscribed.",
  "unsubscribedBanner": "You're unsubscribed.",
  "invalidTokenBanner": "This link is invalid or has expired."
},
"subscribeEmail": {
  "confirmSubject": "Confirm your subscription to philoli.com",
  "confirmHeading": "One more step",
  "confirmBody": "Click the button below to confirm your subscription. If you didn't subscribe, you can ignore this email.",
  "confirmCta": "Confirm subscription",
  "footerUnsubscribe": "Unsubscribe"
}
```

- [ ] **Step 2: Run i18n translation for all 40 other locales**

```bash
npm run i18n:translate -- --missing-only
```
Expected: prints "Translating X keys for <locale>…" lines. No errors. Each `src/i18n/<lang>.json` now contains `subscribeForm.*` and `subscribeEmail.*`.

- [ ] **Step 3: Spot-check a few locales**

```bash
grep -A2 '"subscribeForm"' src/i18n/zh.json
grep -A2 '"subscribeEmail"' src/i18n/fr.json
```
Expected: localized strings (not English).

- [ ] **Step 4: Commit**

```bash
git add src/i18n/
git commit -m "i18n(subscribe): add subscribeForm and subscribeEmail keys for 41 locales"
```

---

### Task 2.2: Email template sync script + initial sync

A small one-shot node script that reads `src/i18n/*.json`, extracts the `subscribeEmail.*` subtree, and writes one JSON file per locale into `services/subscribe-api/src/email-templates/`.

**Files:**
- Create: `services/subscribe-api/scripts/sync-email-i18n.mjs`
- Create: `services/subscribe-api/src/email-templates/<lang>.json` (41 files, generated)

- [ ] **Step 1: Write the sync script**

`services/subscribe-api/scripts/sync-email-i18n.mjs`:
```js
#!/usr/bin/env node
/**
 * Sync subscribeEmail.* keys from philoli.com's i18n into the worker's
 * email-templates directory. Run after `npm run i18n:translate` in the
 * main project.
 *
 * Usage: node services/subscribe-api/scripts/sync-email-i18n.mjs
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..');
const I18N_DIR = join(ROOT, 'src', 'i18n');
const OUT_DIR = resolve(__dirname, '..', 'src', 'email-templates');

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(I18N_DIR).filter((f) => f.endsWith('.json'));
let count = 0;

for (const file of files) {
  const lang = file.replace(/\.json$/, '');
  const data = JSON.parse(readFileSync(join(I18N_DIR, file), 'utf8'));
  const sub = data.subscribeEmail;
  if (!sub) {
    console.warn(`[skip] ${lang}: no subscribeEmail.* keys`);
    continue;
  }
  writeFileSync(join(OUT_DIR, `${lang}.json`), JSON.stringify(sub, null, 2) + '\n');
  count++;
}

console.log(`Synced ${count} locale(s) → ${OUT_DIR}`);
```

- [ ] **Step 2: Run the sync**

From repo root:
```bash
npm run subscribe:sync-i18n
```
Expected: "Synced 41 locale(s) → ..." (or however many locales `src/i18n/` has).

- [ ] **Step 3: Verify outputs**

```bash
ls services/subscribe-api/src/email-templates/
cat services/subscribe-api/src/email-templates/zh.json
```
Expected: 41 files. `zh.json` contains the Chinese subscribeEmail keys.

- [ ] **Step 4: Commit**

```bash
git add services/subscribe-api/scripts/sync-email-i18n.mjs services/subscribe-api/src/email-templates/
git commit -m "feat(subscribe-api): email template sync script + 41 locale seeds"
```

---

### Task 2.3: i18n loader (TDD)

A pure function that loads a template by lang, falling back to `en` if missing.

**Files:**
- Create: `services/subscribe-api/src/lib/i18n.ts`
- Create: `services/subscribe-api/test/i18n.test.ts`

- [ ] **Step 1: Write the failing test**

`services/subscribe-api/test/i18n.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { loadEmailTemplate } from '../src/lib/i18n';

describe('loadEmailTemplate', () => {
  it('returns the requested locale', () => {
    const t = loadEmailTemplate('en');
    expect(t.confirmSubject).toMatch(/Confirm/);
  });

  it('falls back to en for an unknown locale', () => {
    const t = loadEmailTemplate('xx-NOT-REAL');
    expect(t.confirmSubject).toMatch(/Confirm/);
  });

  it('returns a localized string for a non-en locale', () => {
    const t = loadEmailTemplate('zh');
    // Chinese will not contain the English word "Confirm"
    expect(t.confirmSubject).not.toMatch(/Confirm/);
  });
});
```

- [ ] **Step 2: Run — expect fail**
```bash
npm run subscribe:test
```
Expected: 3 failures (`loadEmailTemplate` undefined).

- [ ] **Step 3: Implement `src/lib/i18n.ts`**

```ts
// Static imports so Wrangler bundles all 41 templates into the worker.
import en from '../email-templates/en.json';
import zh from '../email-templates/zh.json';
import zhTW from '../email-templates/zh-TW.json';
import es from '../email-templates/es.json';
import fr from '../email-templates/fr.json';
import de from '../email-templates/de.json';
import ja from '../email-templates/ja.json';
import ko from '../email-templates/ko.json';
import pt from '../email-templates/pt.json';
import ru from '../email-templates/ru.json';
import ar from '../email-templates/ar.json';
import hi from '../email-templates/hi.json';
import it from '../email-templates/it.json';
import nl from '../email-templates/nl.json';
import pl from '../email-templates/pl.json';
import tr from '../email-templates/tr.json';
import vi from '../email-templates/vi.json';
import th from '../email-templates/th.json';
import id from '../email-templates/id.json';
import ms from '../email-templates/ms.json';
import sv from '../email-templates/sv.json';
import da from '../email-templates/da.json';
import no from '../email-templates/no.json';
import fi from '../email-templates/fi.json';
import el from '../email-templates/el.json';
import cs from '../email-templates/cs.json';
import ro from '../email-templates/ro.json';
import hu from '../email-templates/hu.json';
import uk from '../email-templates/uk.json';
import bg from '../email-templates/bg.json';
import hr from '../email-templates/hr.json';
import sk from '../email-templates/sk.json';
import sl from '../email-templates/sl.json';
import sr from '../email-templates/sr.json';
import lt from '../email-templates/lt.json';
import lv from '../email-templates/lv.json';
import et from '../email-templates/et.json';
import he from '../email-templates/he.json';
import fa from '../email-templates/fa.json';
import bn from '../email-templates/bn.json';
import fil from '../email-templates/fil.json';

export interface EmailTemplate {
  confirmSubject: string;
  confirmHeading: string;
  confirmBody: string;
  confirmCta: string;
  footerUnsubscribe: string;
}

const TEMPLATES: Record<string, EmailTemplate> = {
  en, zh, 'zh-TW': zhTW, es, fr, de, ja, ko, pt, ru, ar, hi, it, nl, pl, tr,
  vi, th, id, ms, sv, da, no, fi, el, cs, ro, hu, uk, bg, hr, sk, sl, sr, lt,
  lv, et, he, fa, bn, fil,
};

export const SUPPORTED_LANGS = Object.keys(TEMPLATES);

export function loadEmailTemplate(lang: string): EmailTemplate {
  return TEMPLATES[lang] ?? TEMPLATES.en;
}
```

- [ ] **Step 4: Add `resolveJsonModule` to `tsconfig.json`**

Update `services/subscribe-api/tsconfig.json` `compilerOptions`:
```json
"resolveJsonModule": true,
```

- [ ] **Step 5: Run tests — should pass**
```bash
npm run subscribe:test
```
Expected: 8 passed (5 from jwt + 3 from i18n).

- [ ] **Step 6: Commit**

```bash
git add services/subscribe-api/src/lib/i18n.ts services/subscribe-api/test/i18n.test.ts services/subscribe-api/tsconfig.json
git commit -m "feat(subscribe-api): i18n loader with en fallback"
```

---

### Task 2.4: Email renderer + Resend client

The HTML for the confirmation email + a thin wrapper around Resend's API.

**Files:**
- Create: `services/subscribe-api/src/lib/email.ts`
- Create: `services/subscribe-api/test/email.test.ts`

- [ ] **Step 1: Write the failing test**

`services/subscribe-api/test/email.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { renderConfirmEmail } from '../src/lib/email';

describe('renderConfirmEmail', () => {
  it('embeds the confirm URL in an <a> tag', () => {
    const { html, subject } = renderConfirmEmail({
      lang: 'en',
      confirmUrl: 'https://subscribe.philoli.com/confirm?token=abc',
      unsubscribeUrl: 'https://subscribe.philoli.com/unsubscribe?token=xyz',
    });
    expect(html).toContain('https://subscribe.philoli.com/confirm?token=abc');
    expect(html).toContain('https://subscribe.philoli.com/unsubscribe?token=xyz');
    expect(subject).toMatch(/Confirm/);
  });

  it('uses the localized subject for non-en locales', () => {
    const { subject } = renderConfirmEmail({
      lang: 'zh',
      confirmUrl: 'https://x/c',
      unsubscribeUrl: 'https://x/u',
    });
    expect(subject).not.toMatch(/Confirm/);
  });

  it('falls back to en for an unknown locale', () => {
    const { subject } = renderConfirmEmail({
      lang: 'xx',
      confirmUrl: 'https://x/c',
      unsubscribeUrl: 'https://x/u',
    });
    expect(subject).toMatch(/Confirm/);
  });
});
```

- [ ] **Step 2: Run — expect fail**

- [ ] **Step 3: Implement `src/lib/email.ts`**

```ts
import { Resend } from 'resend';
import { loadEmailTemplate } from './i18n';

interface RenderArgs {
  lang: string;
  confirmUrl: string;
  unsubscribeUrl: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderConfirmEmail({ lang, confirmUrl, unsubscribeUrl }: RenderArgs): { html: string; subject: string; text: string } {
  const t = loadEmailTemplate(lang);
  const subject = t.confirmSubject;

  // Plain, deliverable HTML. Inline styles only. No external assets.
  const html = `<!doctype html>
<html lang="${escapeHtml(lang)}">
<head><meta charset="utf-8"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f6f6f4;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f4;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;">
        <tr><td style="padding:32px 32px 16px;">
          <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#888;">philoli.com</div>
        </td></tr>
        <tr><td style="padding:8px 32px 16px;">
          <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;font-weight:700;color:#1a1a1a;">${escapeHtml(t.confirmHeading)}</h1>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#333;">${escapeHtml(t.confirmBody)}</p>
          <p style="margin:0 0 24px;">
            <a href="${escapeHtml(confirmUrl)}" style="display:inline-block;background:#1a1a1a;color:#ffffff;padding:12px 24px;text-decoration:none;font-size:14px;font-weight:500;">${escapeHtml(t.confirmCta)}</a>
          </p>
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid #eee;font-size:12px;color:#999;line-height:1.6;">
          <a href="${escapeHtml(unsubscribeUrl)}" style="color:#999;">${escapeHtml(t.footerUnsubscribe)}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `${t.confirmHeading}\n\n${t.confirmBody}\n\n${t.confirmCta}: ${confirmUrl}\n\n${t.footerUnsubscribe}: ${unsubscribeUrl}\n`;

  return { html, subject, text };
}

interface SendArgs extends RenderArgs {
  to: string;
  from: string;
  apiKey: string;
}

export async function sendConfirmEmail(args: SendArgs): Promise<{ ok: boolean; error?: string }> {
  const { html, subject, text } = renderConfirmEmail(args);
  const resend = new Resend(args.apiKey);
  const result = await resend.emails.send({
    from: args.from,
    to: args.to,
    subject,
    html,
    text,
  });
  if (result.error) return { ok: false, error: result.error.message };
  return { ok: true };
}
```

- [ ] **Step 4: Run tests — should pass**

Expected: 11 passed total.

- [ ] **Step 5: Commit**

```bash
git add services/subscribe-api/src/lib/email.ts services/subscribe-api/test/email.test.ts
git commit -m "feat(subscribe-api): email renderer and Resend wrapper"
```

---

## Chunk 3: Worker endpoints (subscribe, confirm, unsubscribe)

The 3 handlers. Each has a tested unit-level handler function (DB injected) plus wiring in `index.ts`.

### Task 3.1: DB helpers + types

**Files:**
- Create: `services/subscribe-api/src/lib/db.ts`

- [ ] **Step 1: Implement `src/lib/db.ts`**

```ts
export interface SubscriberRow {
  id: number;
  email: string;
  lang: string;
  status: 'pending' | 'active' | 'unsubscribed';
  created_at: number;
  confirmed_at: number | null;
}

export async function findByEmail(db: D1Database, email: string): Promise<SubscriberRow | null> {
  const row = await db
    .prepare('SELECT id, email, lang, status, created_at, confirmed_at FROM subscribers WHERE email = ?1')
    .bind(email)
    .first<SubscriberRow>();
  return row ?? null;
}

export async function insertPending(db: D1Database, email: string, lang: string): Promise<void> {
  await db
    .prepare("INSERT INTO subscribers (email, lang, status) VALUES (?1, ?2, 'pending')")
    .bind(email, lang)
    .run();
}

export async function updateLangAndStatus(db: D1Database, email: string, lang: string, status: 'pending'): Promise<void> {
  await db
    .prepare('UPDATE subscribers SET lang = ?1, status = ?2 WHERE email = ?3')
    .bind(lang, status, email)
    .run();
}

export async function markActive(db: D1Database, email: string): Promise<void> {
  await db
    .prepare("UPDATE subscribers SET status = 'active', confirmed_at = unixepoch() WHERE email = ?1 AND status = 'pending'")
    .bind(email)
    .run();
}

export async function markUnsubscribed(db: D1Database, email: string): Promise<void> {
  await db
    .prepare("UPDATE subscribers SET status = 'unsubscribed' WHERE email = ?1")
    .bind(email)
    .run();
}
```

No dedicated test file — these are 1-line wrappers over D1's API. They're exercised by handler tests.

- [ ] **Step 2: Commit**

```bash
git add services/subscribe-api/src/lib/db.ts
git commit -m "feat(subscribe-api): typed D1 helpers"
```

---

### Task 3.2: `POST /subscribe` handler (TDD)

The core business logic with 4 branches: new / pending / active / unsubscribed. Test against an in-memory D1 mock.

**Files:**
- Create: `services/subscribe-api/src/handlers/subscribe.ts`
- Create: `services/subscribe-api/test/handlers/subscribe.test.ts`
- Create: `services/subscribe-api/test/_helpers/fakeDb.ts`

- [ ] **Step 1: Implement a minimal D1 fake for tests**

`services/subscribe-api/test/_helpers/fakeDb.ts`:
```ts
import type { SubscriberRow } from '../../src/lib/db';

/**
 * Hand-rolled in-memory fake matching the surface our handlers use.
 * Only supports the exact queries in `src/lib/db.ts` (string-matched).
 */
export function createFakeDb(seed: Partial<SubscriberRow>[] = []): D1Database {
  const rows: SubscriberRow[] = seed.map((s, i) => ({
    id: i + 1,
    email: s.email!,
    lang: s.lang ?? 'en',
    status: s.status ?? 'pending',
    created_at: s.created_at ?? Math.floor(Date.now() / 1000),
    confirmed_at: s.confirmed_at ?? null,
  }));

  const prepare = (sql: string) => {
    const binds: unknown[] = [];
    const stmt = {
      bind(...args: unknown[]) {
        binds.push(...args);
        return stmt;
      },
      async first<T>() {
        if (sql.startsWith('SELECT')) {
          const email = binds[0] as string;
          return (rows.find((r) => r.email === email) as T) ?? null;
        }
        return null;
      },
      async run() {
        if (sql.startsWith('INSERT')) {
          const [email, lang] = binds as [string, string];
          rows.push({
            id: rows.length + 1,
            email,
            lang,
            status: 'pending',
            created_at: Math.floor(Date.now() / 1000),
            confirmed_at: null,
          });
        } else if (sql.startsWith('UPDATE subscribers SET lang')) {
          const [lang, status, email] = binds as [string, 'pending', string];
          const r = rows.find((r) => r.email === email);
          if (r) {
            r.lang = lang;
            r.status = status;
          }
        } else if (sql.includes("status = 'active'")) {
          const [email] = binds as [string];
          const r = rows.find((r) => r.email === email);
          if (r && r.status === 'pending') {
            r.status = 'active';
            r.confirmed_at = Math.floor(Date.now() / 1000);
          }
        } else if (sql.includes("status = 'unsubscribed'")) {
          const [email] = binds as [string];
          const r = rows.find((r) => r.email === email);
          if (r) r.status = 'unsubscribed';
        }
        return { success: true } as D1Result;
      },
    };
    return stmt;
  };

  return { prepare, _rows: rows } as unknown as D1Database & { _rows: SubscriberRow[] };
}
```

(The `_rows` escape hatch lets tests assert table state.)

- [ ] **Step 2: Write the failing handler test**

`services/subscribe-api/test/handlers/subscribe.test.ts`:
```ts
import { describe, it, expect, vi } from 'vitest';
import { handleSubscribe } from '../../src/handlers/subscribe';
import { createFakeDb } from '../_helpers/fakeDb';

const baseEnv = {
  RESEND_API_KEY: 'test-key',
  JWT_SECRET: 'test-secret',
  SITE_URL: 'https://philoli.com',
  WORKER_URL: 'https://subscribe.philoli.com',
  FROM_EMAIL: 'Philo Li <hi@philoli.com>',
};

// Stub `sendConfirmEmail` so tests don't hit Resend.
vi.mock('../../src/lib/email', async () => {
  const actual = await vi.importActual<typeof import('../../src/lib/email')>('../../src/lib/email');
  return {
    ...actual,
    sendConfirmEmail: vi.fn(async () => ({ ok: true })),
  };
});

describe('handleSubscribe', () => {
  it('inserts a new pending row + sends email', async () => {
    const db = createFakeDb();
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'zh', hp: '' });
    expect(res.status).toBe(200);
    expect((db as any)._rows).toHaveLength(1);
    expect((db as any)._rows[0]).toMatchObject({ email: 'a@b.com', lang: 'zh', status: 'pending' });
  });

  it('rejects invalid email', async () => {
    const db = createFakeDb();
    const res = await handleSubscribe(db as any, baseEnv, { email: 'not-an-email', lang: 'en', hp: '' });
    expect(res.status).toBe(400);
    expect((db as any)._rows).toHaveLength(0);
  });

  it('rejects invalid lang', async () => {
    const db = createFakeDb();
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'xx-NOT-REAL', hp: '' });
    expect(res.status).toBe(400);
  });

  it('silently accepts honeypot (no insert)', async () => {
    const db = createFakeDb();
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'en', hp: 'bot-filled-this' });
    expect(res.status).toBe(200);
    expect((db as any)._rows).toHaveLength(0);
  });

  it('returns "already subscribed" for active rows, no resend', async () => {
    const db = createFakeDb([{ email: 'a@b.com', status: 'active', lang: 'en' }]);
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'fr', hp: '' });
    expect(res.status).toBe(200);
    const body = JSON.parse(res.body);
    expect(body.code).toBe('already_subscribed');
    // lang not changed because it's active
    expect((db as any)._rows[0].lang).toBe('en');
  });

  it('resends email for pending row, updates lang', async () => {
    const db = createFakeDb([{ email: 'a@b.com', status: 'pending', lang: 'en' }]);
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'fr', hp: '' });
    expect(res.status).toBe(200);
    expect((db as any)._rows[0].lang).toBe('fr');
  });

  it('reactivates unsubscribed row, sets lang, sends email', async () => {
    const db = createFakeDb([{ email: 'a@b.com', status: 'unsubscribed', lang: 'en' }]);
    const res = await handleSubscribe(db as any, baseEnv, { email: 'a@b.com', lang: 'fr', hp: '' });
    expect(res.status).toBe(200);
    expect((db as any)._rows[0].status).toBe('pending');
    expect((db as any)._rows[0].lang).toBe('fr');
  });
});
```

- [ ] **Step 3: Run — expect fail**

- [ ] **Step 4: Implement `src/handlers/subscribe.ts`**

```ts
import { findByEmail, insertPending, updateLangAndStatus, type SubscriberRow } from '../lib/db';
import { sign } from '../lib/jwt';
import { sendConfirmEmail } from '../lib/email';
import { SUPPORTED_LANGS, loadEmailTemplate } from '../lib/i18n';

export interface Env {
  RESEND_API_KEY: string;
  JWT_SECRET: string;
  SITE_URL: string;
  WORKER_URL: string;
  FROM_EMAIL: string;
}

interface SubscribeBody {
  email: string;
  lang: string;
  hp: string;
}

interface HandlerResult {
  status: number;
  body: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONFIRM_TTL = 30 * 24 * 60 * 60;      // 30 days
const UNSUB_TTL = 365 * 24 * 60 * 60;       // 1 year

function ok(code: string): HandlerResult {
  return { status: 200, body: JSON.stringify({ ok: true, code }) };
}

function bad(code: string): HandlerResult {
  return { status: 400, body: JSON.stringify({ ok: false, code }) };
}

async function mintAndSend(env: Env, email: string, lang: string): Promise<void> {
  const confirmToken = await sign({ email, type: 'confirm' }, env.JWT_SECRET, CONFIRM_TTL);
  const unsubToken = await sign({ email, type: 'unsubscribe' }, env.JWT_SECRET, UNSUB_TTL);
  const confirmUrl = `${env.WORKER_URL}/confirm?token=${confirmToken}`;
  const unsubscribeUrl = `${env.WORKER_URL}/unsubscribe?token=${unsubToken}`;
  const result = await sendConfirmEmail({
    apiKey: env.RESEND_API_KEY,
    from: env.FROM_EMAIL,
    to: email,
    lang,
    confirmUrl,
    unsubscribeUrl,
  });
  if (!result.ok) throw new Error(`Resend failed: ${result.error}`);
}

export async function handleSubscribe(
  db: D1Database,
  env: Env,
  body: SubscribeBody,
): Promise<HandlerResult> {
  // Honeypot: silently accept, do nothing.
  if (body.hp && body.hp.length > 0) return ok('honeypot');

  const email = (body.email ?? '').trim().toLowerCase();
  const lang = (body.lang ?? '').trim();

  if (!EMAIL_RE.test(email)) return bad('invalid_email');
  if (!SUPPORTED_LANGS.includes(lang)) return bad('invalid_lang');

  const existing: SubscriberRow | null = await findByEmail(db, email);

  if (!existing) {
    await insertPending(db, email, lang);
    await mintAndSend(env, email, lang);
    return ok('sent');
  }

  if (existing.status === 'active') {
    return ok('already_subscribed');
  }

  if (existing.status === 'pending') {
    await updateLangAndStatus(db, email, lang, 'pending');
    await mintAndSend(env, email, lang);
    return ok('resent');
  }

  // status === 'unsubscribed' — reactivate
  await updateLangAndStatus(db, email, lang, 'pending');
  await mintAndSend(env, email, lang);
  return ok('reactivated');
}
```

- [ ] **Step 5: Run — should pass**

Expected: all subscribe tests pass.

- [ ] **Step 6: Commit**

```bash
git add services/subscribe-api/src/handlers/subscribe.ts services/subscribe-api/test/
git commit -m "feat(subscribe-api): POST /subscribe handler with 4-branch state machine"
```

---

### Task 3.3: `GET /confirm` handler (TDD)

**Files:**
- Create: `services/subscribe-api/src/handlers/confirm.ts`
- Create: `services/subscribe-api/test/handlers/confirm.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from 'vitest';
import { handleConfirm } from '../../src/handlers/confirm';
import { createFakeDb } from '../_helpers/fakeDb';
import { sign } from '../../src/lib/jwt';

const env = {
  JWT_SECRET: 'test-secret',
  SITE_URL: 'https://philoli.com',
};

describe('handleConfirm', () => {
  it('activates a pending subscriber and redirects', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'zh', status: 'pending' }]);
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, env.JWT_SECRET, 60);
    const res = await handleConfirm(db as any, env, token);
    expect(res.status).toBe(302);
    expect(res.headers.Location).toBe('https://philoli.com/zh/newsletter?confirmed=1');
    expect((db as any)._rows[0].status).toBe('active');
  });

  it('redirects to en path when subscriber lang is en (no locale prefix)', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'en', status: 'pending' }]);
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, env.JWT_SECRET, 60);
    const res = await handleConfirm(db as any, env, token);
    expect(res.headers.Location).toBe('https://philoli.com/newsletter?confirmed=1');
  });

  it('redirects to error page on invalid token', async () => {
    const db = createFakeDb();
    const res = await handleConfirm(db as any, env, 'not-a-token');
    expect(res.status).toBe(302);
    expect(res.headers.Location).toContain('error=invalid_token');
  });

  it('redirects to error page when token type is wrong', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'en', status: 'pending' }]);
    const token = await sign({ email: 'a@b.com', type: 'unsubscribe' }, env.JWT_SECRET, 60);
    const res = await handleConfirm(db as any, env, token);
    expect(res.headers.Location).toContain('error=invalid_token');
  });
});
```

- [ ] **Step 2: Run — expect fail**

- [ ] **Step 3: Implement `src/handlers/confirm.ts`**

```ts
import { verify } from '../lib/jwt';
import { findByEmail, markActive } from '../lib/db';

interface Env {
  JWT_SECRET: string;
  SITE_URL: string;
}

function localePath(siteUrl: string, lang: string, query: string): string {
  // en has no locale prefix; everything else gets /<lang>/.
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${siteUrl}${prefix}/newsletter?${query}`;
}

export interface RedirectResult {
  status: 302;
  headers: { Location: string };
}

export async function handleConfirm(db: D1Database, env: Env, token: string): Promise<RedirectResult> {
  const payload = await verify(token, env.JWT_SECRET);
  if (!payload || payload.type !== 'confirm') {
    return { status: 302, headers: { Location: localePath(env.SITE_URL, 'en', 'error=invalid_token') } };
  }
  const sub = await findByEmail(db, payload.email);
  await markActive(db, payload.email);
  const lang = sub?.lang ?? 'en';
  return { status: 302, headers: { Location: localePath(env.SITE_URL, lang, 'confirmed=1') } };
}
```

- [ ] **Step 4: Run — should pass**

- [ ] **Step 5: Commit**

```bash
git add services/subscribe-api/src/handlers/confirm.ts services/subscribe-api/test/handlers/confirm.test.ts
git commit -m "feat(subscribe-api): GET /confirm handler with locale-aware redirect"
```

---

### Task 3.4: `GET /unsubscribe` handler (TDD)

**Files:**
- Create: `services/subscribe-api/src/handlers/unsubscribe.ts`
- Create: `services/subscribe-api/test/handlers/unsubscribe.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from 'vitest';
import { handleUnsubscribe } from '../../src/handlers/unsubscribe';
import { createFakeDb } from '../_helpers/fakeDb';
import { sign } from '../../src/lib/jwt';

const env = { JWT_SECRET: 'test-secret', SITE_URL: 'https://philoli.com' };

describe('handleUnsubscribe', () => {
  it('marks unsubscribed and redirects', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'fr', status: 'active' }]);
    const token = await sign({ email: 'a@b.com', type: 'unsubscribe' }, env.JWT_SECRET, 60);
    const res = await handleUnsubscribe(db as any, env, token);
    expect(res.status).toBe(302);
    expect(res.headers.Location).toBe('https://philoli.com/fr/newsletter?unsubscribed=1');
    expect((db as any)._rows[0].status).toBe('unsubscribed');
  });

  it('rejects wrong-type token', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'en', status: 'active' }]);
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, env.JWT_SECRET, 60);
    const res = await handleUnsubscribe(db as any, env, token);
    expect(res.headers.Location).toContain('error=invalid_token');
    expect((db as any)._rows[0].status).toBe('active');
  });

  it('rejects expired token', async () => {
    const db = createFakeDb([{ email: 'a@b.com', lang: 'en', status: 'active' }]);
    const token = await sign({ email: 'a@b.com', type: 'unsubscribe' }, env.JWT_SECRET, -1);
    const res = await handleUnsubscribe(db as any, env, token);
    expect(res.headers.Location).toContain('error=invalid_token');
  });
});
```

- [ ] **Step 2: Run — expect fail**

- [ ] **Step 3: Implement `src/handlers/unsubscribe.ts`**

```ts
import { verify } from '../lib/jwt';
import { findByEmail, markUnsubscribed } from '../lib/db';

interface Env { JWT_SECRET: string; SITE_URL: string; }

function localePath(siteUrl: string, lang: string, query: string): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${siteUrl}${prefix}/newsletter?${query}`;
}

export interface RedirectResult { status: 302; headers: { Location: string }; }

export async function handleUnsubscribe(db: D1Database, env: Env, token: string): Promise<RedirectResult> {
  const payload = await verify(token, env.JWT_SECRET);
  if (!payload || payload.type !== 'unsubscribe') {
    return { status: 302, headers: { Location: localePath(env.SITE_URL, 'en', 'error=invalid_token') } };
  }
  const sub = await findByEmail(db, payload.email);
  await markUnsubscribed(db, payload.email);
  const lang = sub?.lang ?? 'en';
  return { status: 302, headers: { Location: localePath(env.SITE_URL, lang, 'unsubscribed=1') } };
}
```

- [ ] **Step 4: Run — should pass**

- [ ] **Step 5: Commit**

```bash
git add services/subscribe-api/src/handlers/unsubscribe.ts services/subscribe-api/test/handlers/unsubscribe.test.ts
git commit -m "feat(subscribe-api): GET /unsubscribe handler"
```

---

### Task 3.5: Wire `index.ts` (router + CORS + body parsing)

Pattern follows `services/custom-llm-proxy/src/index.ts`.

**Files:**
- Modify: `services/subscribe-api/src/index.ts`

- [ ] **Step 1: Replace the placeholder `index.ts`**

```ts
import { handleSubscribe } from './handlers/subscribe';
import { handleConfirm } from './handlers/confirm';
import { handleUnsubscribe } from './handlers/unsubscribe';

interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  JWT_SECRET: string;
  SITE_URL: string;
  WORKER_URL: string;
  FROM_EMAIL: string;
}

const ALLOWED_ORIGINS = new Set([
  'https://philoli.com',
  'https://www.philoli.com',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
]);

function corsHeaders(origin: string | null): Headers {
  const h = new Headers();
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    h.set('Access-Control-Allow-Origin', origin);
    h.set('Vary', 'Origin');
  }
  h.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  h.set('Access-Control-Allow-Headers', 'Content-Type');
  h.set('Access-Control-Max-Age', '86400');
  return h;
}

function json(status: number, body: string, origin: string | null): Response {
  const h = corsHeaders(origin);
  h.set('Content-Type', 'application/json; charset=utf-8');
  h.set('Cache-Control', 'no-store');
  return new Response(body, { status, headers: h });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      if (url.pathname === '/subscribe' && request.method === 'POST') {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json(400, JSON.stringify({ ok: false, code: 'invalid_body' }), origin);
        }
        const { email, lang, hp } = (body ?? {}) as Record<string, string>;
        const result = await handleSubscribe(env.DB, env, { email: email ?? '', lang: lang ?? '', hp: hp ?? '' });
        return json(result.status, result.body, origin);
      }

      if (url.pathname === '/confirm' && request.method === 'GET') {
        const token = url.searchParams.get('token') ?? '';
        const res = await handleConfirm(env.DB, env, token);
        return new Response(null, { status: res.status, headers: res.headers });
      }

      if (url.pathname === '/unsubscribe' && request.method === 'GET') {
        const token = url.searchParams.get('token') ?? '';
        const res = await handleUnsubscribe(env.DB, env, token);
        return new Response(null, { status: res.status, headers: res.headers });
      }

      if (url.pathname === '/' || url.pathname === '/health') {
        return new Response('subscribe-api OK', { status: 200, headers: corsHeaders(origin) });
      }

      return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
    } catch (err) {
      console.error('subscribe-api error:', err);
      return json(500, JSON.stringify({ ok: false, code: 'server_error' }), origin);
    }
  },
};
```

- [ ] **Step 2: Verify worker still builds (dry-run)**

```bash
npx wrangler -c services/subscribe-api/wrangler.toml deploy --dry-run --outdir /tmp/subscribe-dryrun
```
Expected: success, "Total Upload: <N> KiB".

- [ ] **Step 3: Run full worker test suite — all pass**

```bash
npm run subscribe:test
```
Expected: 18+ tests passing across all files.

- [ ] **Step 4: Commit**

```bash
git add services/subscribe-api/src/index.ts
git commit -m "feat(subscribe-api): wire router + CORS + body parsing"
```

---

## Chunk 4: Deploy to workers.dev + smoke test

End state: the worker is live at a `*.workers.dev` URL, and a real subscribe → confirm → unsubscribe cycle works end-to-end with a real email address.

### Task 4.1: Configure secrets

- [ ] **Step 1: Generate a JWT_SECRET**

```bash
node -e "console.log(crypto.randomBytes(48).toString('base64'))"
```
Copy the output — you'll paste it in Step 3.

- [ ] **Step 2: Set Resend secret**

```bash
npx wrangler secret put RESEND_API_KEY -c services/subscribe-api/wrangler.toml
```
Paste the Resend API key (same one used in `.env`'s `RESEND_API_KEY`, or generate a new one in Resend dashboard).

- [ ] **Step 3: Set JWT secret**

```bash
npx wrangler secret put JWT_SECRET -c services/subscribe-api/wrangler.toml
```
Paste the value from Step 1.

- [ ] **Step 4: Verify secrets**

```bash
npx wrangler secret list -c services/subscribe-api/wrangler.toml
```
Expected: lists `RESEND_API_KEY` and `JWT_SECRET`.

### Task 4.2: First deploy to workers.dev

- [ ] **Step 1: Deploy**

```bash
npm run subscribe:deploy
```
Expected: prints a URL like `https://philoli-subscribe-api.<your-account>.workers.dev`. Save this URL — call it `$WORKER_URL` below.

- [ ] **Step 2: Health check**

```bash
curl https://philoli-subscribe-api.<account>.workers.dev/health
```
Expected: `subscribe-api OK`.

### Task 4.3: Smoke test the full flow

Use a real email you control (e.g. a Gmail address with `+test` aliasing: `you+philoli-test1@gmail.com`).

- [ ] **Step 1: Subscribe**

```bash
curl -X POST https://philoli-subscribe-api.<account>.workers.dev/subscribe \
  -H "Origin: https://philoli.com" \
  -H "Content-Type: application/json" \
  -d '{"email":"you+philoli-test1@gmail.com","lang":"zh","hp":""}'
```
Expected: `{"ok":true,"code":"sent"}`.

- [ ] **Step 2: Verify the row landed in D1**

```bash
npx wrangler d1 execute newsletter-db --remote --command="SELECT email, lang, status FROM subscribers WHERE email='you+philoli-test1@gmail.com';"
```
Expected: one row, status `pending`, lang `zh`.

- [ ] **Step 3: Check inbox**

Expected: an email from `Philo Li <hi@philoli.com>` with Chinese subject and body, containing a confirm button.

- [ ] **Step 4: Click the confirm link**

Expected: browser lands on `https://philoli.com/zh/newsletter?confirmed=1`. (The page itself won't yet show a special banner until Chunk 5 — but the redirect should succeed.)

- [ ] **Step 5: Verify status flipped**

```bash
npx wrangler d1 execute newsletter-db --remote --command="SELECT status, confirmed_at FROM subscribers WHERE email='you+philoli-test1@gmail.com';"
```
Expected: status `active`, `confirmed_at` populated.

- [ ] **Step 6: Test duplicate subscribe (active)**

```bash
curl -X POST https://philoli-subscribe-api.<account>.workers.dev/subscribe \
  -H "Origin: https://philoli.com" \
  -H "Content-Type: application/json" \
  -d '{"email":"you+philoli-test1@gmail.com","lang":"en","hp":""}'
```
Expected: `{"ok":true,"code":"already_subscribed"}`. No new email.

- [ ] **Step 7: Test honeypot**

```bash
curl -X POST https://philoli-subscribe-api.<account>.workers.dev/subscribe \
  -H "Origin: https://philoli.com" \
  -H "Content-Type: application/json" \
  -d '{"email":"bot@spam.test","lang":"en","hp":"i-am-a-bot"}'
```
Expected: `{"ok":true,"code":"honeypot"}`. No DB row.

```bash
npx wrangler d1 execute newsletter-db --remote --command="SELECT count(*) FROM subscribers WHERE email='bot@spam.test';"
```
Expected: 0.

- [ ] **Step 8: Test unsubscribe**

Find the unsubscribe link in the email footer, click it.

Expected: browser lands on `https://philoli.com/zh/newsletter?unsubscribed=1`. Row's status becomes `unsubscribed`.

- [ ] **Step 9: Clean up smoke test data**

```bash
npx wrangler d1 execute newsletter-db --remote --command="DELETE FROM subscribers WHERE email LIKE '%+philoli-test%' OR email = 'bot@spam.test';"
```

If anything failed, fix it before moving to Chunk 5. Common gotchas:
- `Resend failed: ...` in worker logs → check `RESEND_API_KEY` secret. Tail logs with `npx wrangler tail -c services/subscribe-api/wrangler.toml`.
- 502 from the worker → likely a thrown error. `wrangler tail` shows the stack.
- CORS mismatch → confirm the `Origin` header in your curl matches one of the allowed list.

---

## Chunk 5: Frontend SubscribeForm component + 3 placements

Now the worker works. Build the on-site form and wire it into the 3 surfaces. End state: visitors can subscribe directly from philoli.com, and the post-confirm landing page on `/newsletter` shows a banner.

### Task 5.1: SubscribeForm component

**Files:**
- Create: `src/components/forms/SubscribeForm.astro`

- [ ] **Step 1: Write the component**

```astro
---
import { DEFAULT_LOCALE, isLocale, useTranslations } from '../../i18n';

const LOCALES = [
  'en', 'zh', 'zh-TW', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar',
  'hi', 'it', 'nl', 'pl', 'tr', 'vi', 'th', 'id', 'ms', 'sv',
  'da', 'no', 'fi', 'el', 'cs', 'ro', 'hu', 'uk', 'bg', 'hr',
  'sk', 'sl', 'sr', 'lt', 'lv', 'et', 'he', 'fa', 'bn', 'fil',
] as const;

// Human-readable native names. Keep in step with the array above.
const LANG_NAMES: Record<string, string> = {
  en: 'English', zh: '中文', 'zh-TW': '繁體中文', es: 'Español', fr: 'Français',
  de: 'Deutsch', ja: '日本語', ko: '한국어', pt: 'Português', ru: 'Русский',
  ar: 'العربية', hi: 'हिन्दी', it: 'Italiano', nl: 'Nederlands', pl: 'Polski',
  tr: 'Türkçe', vi: 'Tiếng Việt', th: 'ไทย', id: 'Bahasa Indonesia', ms: 'Bahasa Melayu',
  sv: 'Svenska', da: 'Dansk', no: 'Norsk', fi: 'Suomi', el: 'Ελληνικά',
  cs: 'Čeština', ro: 'Română', hu: 'Magyar', uk: 'Українська', bg: 'Български',
  hr: 'Hrvatski', sk: 'Slovenčina', sl: 'Slovenščina', sr: 'Српски',
  lt: 'Lietuvių', lv: 'Latviešu', et: 'Eesti', he: 'עברית', fa: 'فارسی',
  bn: 'বাংলা', fil: 'Filipino',
};

const locale = isLocale(Astro.currentLocale) ? Astro.currentLocale : DEFAULT_LOCALE;
const t = useTranslations(locale);
const WORKER_URL = 'https://subscribe.philoli.com';
---

<form class="subscribe-form" data-subscribe data-worker-url={WORKER_URL}>
  <label class="visually-hidden" for="subscribe-lang">{t('subscribeForm.languageLabel')}</label>
  <select id="subscribe-lang" name="lang" class="subscribe-form__lang">
    {LOCALES.map((l) => (
      <option value={l} selected={l === locale}>{LANG_NAMES[l] ?? l}</option>
    ))}
  </select>

  <label class="visually-hidden" for="subscribe-email">{t('subscribeForm.placeholder')}</label>
  <input
    id="subscribe-email"
    name="email"
    type="email"
    required
    autocomplete="email"
    placeholder={t('subscribeForm.placeholder')}
    class="subscribe-form__email"
  />

  <input
    name="hp"
    type="text"
    tabindex="-1"
    autocomplete="off"
    aria-hidden="true"
    class="subscribe-form__hp"
  />

  <button type="submit" class="subscribe-form__button">
    <span data-label-idle>{t('subscribeForm.button')}</span>
    <span data-label-submitting hidden>{t('subscribeForm.submitting')}</span>
  </button>

  <p class="subscribe-form__status" data-status hidden></p>
</form>

<script is:inline define:vars={{
  msg: {
    successInbox:      t('subscribeForm.successInbox'),
    alreadySubscribed: t('subscribeForm.alreadySubscribed'),
    invalidEmail:      t('subscribeForm.invalidEmail'),
    networkError:      t('subscribeForm.networkError'),
  },
}}>
  document.querySelectorAll('[data-subscribe]').forEach((form) => {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const f = ev.currentTarget;
      const url = f.dataset.workerUrl + '/subscribe';
      const status = f.querySelector('[data-status]');
      const button = f.querySelector('button[type="submit"]');
      const idle = button.querySelector('[data-label-idle]');
      const submitting = button.querySelector('[data-label-submitting]');

      const body = {
        email: f.elements.email.value.trim(),
        lang:  f.elements.lang.value,
        hp:    f.elements.hp.value,
      };

      button.disabled = true;
      idle.hidden = true;
      submitting.hidden = false;
      status.hidden = true;
      status.className = 'subscribe-form__status';

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await res.json().catch(() => ({}));
        if (data.ok && (data.code === 'sent' || data.code === 'resent' || data.code === 'reactivated' || data.code === 'honeypot')) {
          status.textContent = msg.successInbox;
          status.classList.add('subscribe-form__status--ok');
        } else if (data.code === 'already_subscribed') {
          status.textContent = msg.alreadySubscribed;
          status.classList.add('subscribe-form__status--ok');
        } else if (data.code === 'invalid_email') {
          status.textContent = msg.invalidEmail;
          status.classList.add('subscribe-form__status--err');
        } else {
          status.textContent = msg.networkError;
          status.classList.add('subscribe-form__status--err');
        }
      } catch {
        status.textContent = msg.networkError;
        status.classList.add('subscribe-form__status--err');
      } finally {
        status.hidden = false;
        button.disabled = false;
        idle.hidden = false;
        submitting.hidden = true;
      }
    });
  });
</script>

<style>
  .subscribe-form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    align-items: stretch;
  }
  .subscribe-form__lang,
  .subscribe-form__email,
  .subscribe-form__button {
    height: 2.5rem;
    font: inherit;
    box-sizing: border-box;
  }
  .subscribe-form__lang {
    padding: 0 0.5rem;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text);
    min-width: 8rem;
  }
  .subscribe-form__email {
    flex: 1 1 14rem;
    min-width: 0;
    padding: 0 0.75rem;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text);
  }
  .subscribe-form__button {
    padding: 0 1.25rem;
    background: var(--color-accent);
    color: var(--color-white);
    border: 0;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .subscribe-form__button:hover { background: var(--color-accent-hover); }
  .subscribe-form__button:disabled { opacity: 0.6; cursor: progress; }
  .subscribe-form__hp {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  .subscribe-form__status {
    flex-basis: 100%;
    margin: var(--space-xs) 0 0;
    font-size: 0.85rem;
  }
  .subscribe-form__status--ok  { color: var(--color-accent); }
  .subscribe-form__status--err { color: #c0392b; }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/forms/SubscribeForm.astro
git commit -m "feat(site): SubscribeForm component (lang + email + submit)"
```

---

### Task 5.2: Replace newsletter page button with the form

**Files:**
- Modify: `src/components/pages/NewsletterPage.astro`

- [ ] **Step 1: Open the file**

Read `src/components/pages/NewsletterPage.astro` end-to-end. The Reflections card currently has an `<a>` button to `https://shuo.philoli.com` — keep that card (Reflections is still its own product). Add a new card above it for the new philoli.com newsletter.

- [ ] **Step 2: Add an import at the top of the frontmatter**

```ts
import SubscribeForm from '../forms/SubscribeForm.astro';
```

- [ ] **Step 3: Insert a new card before the existing one in the grid**

Inside `<div class="newsletter-page__grid">`, **before** the existing `<div class="newsletter-card">` for `shuo`:

```astro
<div class="newsletter-card">
  <h2 class="newsletter-card__name">{t('newsletterCta.headline')}</h2>
  <p class="newsletter-card__lang">{locale}</p>
  <p class="newsletter-card__desc">{t('newsletterCta.desc')}</p>
  <SubscribeForm />
</div>
```

- [ ] **Step 4: Add the post-confirm banner above the grid**

In the frontmatter, after `const t = ...`, add:
```ts
const confirmed   = Astro.url.searchParams.get('confirmed') === '1';
const unsubscribed = Astro.url.searchParams.get('unsubscribed') === '1';
const tokenError  = Astro.url.searchParams.get('error') === 'invalid_token';
```

In the template, inside `<main class="newsletter-page">` and **above** `<h1>`:
```astro
{confirmed && (
  <div class="newsletter-page__banner newsletter-page__banner--ok">
    {t('subscribeForm.successBanner')}
  </div>
)}
{unsubscribed && (
  <div class="newsletter-page__banner newsletter-page__banner--ok">
    {t('subscribeForm.unsubscribedBanner')}
  </div>
)}
{tokenError && (
  <div class="newsletter-page__banner newsletter-page__banner--err">
    {t('subscribeForm.invalidTokenBanner')}
  </div>
)}
```

In the `<style>` block, append:
```css
.newsletter-page__banner {
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-md);
  font-size: 0.9rem;
}
.newsletter-page__banner--ok {
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  border-left: 3px solid var(--color-accent);
}
.newsletter-page__banner--err {
  background: color-mix(in srgb, #c0392b 10%, transparent);
  border-left: 3px solid #c0392b;
}
```

- [ ] **Step 5: Build + visual check**

```bash
npm run dev
```
Open `http://localhost:4321/newsletter`. Expected: form renders, language pre-selected to `en`.

Then `http://localhost:4321/zh/newsletter`. Expected: form's lang pre-selected to `zh`.

Then `http://localhost:4321/newsletter?confirmed=1`. Expected: success banner appears above the title.

- [ ] **Step 6: Commit**

```bash
git add src/components/pages/NewsletterPage.astro
git commit -m "feat(newsletter): embed SubscribeForm and post-action banners"
```

---

### Task 5.3: Embed form at the end of every blog post

**Files:**
- Modify: the blog post layout — locate via grep.

- [ ] **Step 1: Find the blog post layout file**

```bash
grep -rl "blog" src/layouts/ src/pages/ 2>/dev/null
```

Identify the file that wraps individual blog post bodies. Typical Astro 6 conventions:
- `src/layouts/BlogPostLayout.astro`
- `src/pages/[locale]/blog/[slug].astro`
- or a content-collection-driven layout under `src/components/`

Read the candidate file. Pick the one that wraps `<article>` or renders `<Content />` from a collection entry.

- [ ] **Step 2: Add the form at the end of the article body**

Add the import:
```ts
import SubscribeForm from '../components/forms/SubscribeForm.astro';
```

After the `<Content />` (or equivalent) but inside the `<article>`, add:
```astro
<aside class="post-subscribe">
  <h3 class="post-subscribe__title">{t('newsletterCta.headline')}</h3>
  <p class="post-subscribe__desc">{t('newsletterCta.desc')}</p>
  <SubscribeForm />
</aside>
```

If the layout doesn't have `t` available, replicate the i18n bootstrap from `NewsletterPage.astro` (`isLocale`, `useTranslations`).

Append to its `<style>`:
```css
.post-subscribe {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}
.post-subscribe__title {
  font-size: 1.2rem;
  margin: 0 0 var(--space-xs);
  color: var(--color-heading);
}
.post-subscribe__desc {
  font-size: 0.9rem;
  color: var(--color-text-subtle);
  margin: 0 0 var(--space-sm);
}
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```
Open any blog post (e.g. `http://localhost:4321/blog/ebook-translator` and `http://localhost:4321/zh/blog/ebook-translator`). Expected: form at the bottom of the article, lang pre-selected per page locale.

- [ ] **Step 4: Commit**

```bash
git add src/ # (the actual layout file changed)
git commit -m "feat(blog): embed SubscribeForm at end of each post"
```

---

### Task 5.4: Embed form at the end of the homepage

**Files:**
- Modify: `src/components/pages/HomePage.astro`

- [ ] **Step 1: Read the file end-to-end** to find the natural insertion point (after the last existing section, before the footer).

- [ ] **Step 2: Add import**
```ts
import SubscribeForm from '../forms/SubscribeForm.astro';
```

- [ ] **Step 3: Add a section at the bottom of the main content**

```astro
<section class="home-subscribe">
  <div class="home-subscribe__inner">
    <h2 class="home-subscribe__title">{t('newsletterCta.headline')}</h2>
    <p class="home-subscribe__desc">{t('newsletterCta.desc')}</p>
    <SubscribeForm />
  </div>
</section>
```

Append to its `<style>`:
```css
.home-subscribe {
  padding: var(--space-xl) var(--space-md);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}
.home-subscribe__inner {
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
}
.home-subscribe__title {
  font-size: 1.6rem;
  margin: 0 0 var(--space-xs);
  color: var(--color-heading);
}
.home-subscribe__desc {
  margin: 0 0 var(--space-md);
  color: var(--color-text-subtle);
}
.home-subscribe .subscribe-form { justify-content: center; }
```

- [ ] **Step 4: Visual check**

```bash
npm run dev
```
Open `http://localhost:4321/` and `http://localhost:4321/zh/`. Expected: the subscribe section appears near the bottom; lang preselected.

- [ ] **Step 5: Commit**

```bash
git add src/components/pages/HomePage.astro
git commit -m "feat(home): embed SubscribeForm at page end"
```

---

### Task 5.5: Full-build smoke test

- [ ] **Step 1: Production build**

```bash
npm run build
```
Expected: no errors. (`npm run i18n:translate` was already run in Task 2.1 — verify by `grep subscribeForm src/i18n/ja.json`.)

- [ ] **Step 2: Preview**

```bash
npm run preview
```
Open the preview URL, visit `/`, `/newsletter`, `/zh/newsletter`, any blog post. Spot-check the form renders, language is preselected by URL, and submitting hits `subscribe.philoli.com`. (Until Task 6.1 the worker is at `*.workers.dev`, not `subscribe.philoli.com` — temporarily edit `WORKER_URL` in `SubscribeForm.astro` to point to the workers.dev URL for this local test, then revert before commit. Or wait until Chunk 6.)

- [ ] **Step 3: Run the worker test suite + main site tests one more time**

```bash
npm run subscribe:test
npm test
```
Expected: all green.

---

## Chunk 6: Custom domain + CI

End state: the worker is reachable at `https://subscribe.philoli.com`, deploys happen on push automatically.

### Task 6.1: Bind `subscribe.philoli.com` custom domain

- [ ] **Step 1: Uncomment the `[[routes]]` block in `wrangler.toml`**

`services/subscribe-api/wrangler.toml`:
```toml
[[routes]]
pattern = "subscribe.philoli.com/*"
zone_name = "philoli.com"
```

- [ ] **Step 2: Deploy with the route**

```bash
npm run subscribe:deploy
```

If wrangler complains the domain isn't routed, open Cloudflare dashboard → philoli.com zone → DNS → add a CNAME record:
- Name: `subscribe`
- Target: `philoli-subscribe-api.<account>.workers.dev`
- Proxied: ✅
Then re-run the deploy.

- [ ] **Step 3: Smoke test the custom domain**

```bash
curl https://subscribe.philoli.com/health
```
Expected: `subscribe-api OK`.

Repeat one end-to-end subscribe → confirm cycle from Task 4.3 against `https://subscribe.philoli.com`.

- [ ] **Step 4: Commit**

```bash
git add services/subscribe-api/wrangler.toml
git commit -m "feat(subscribe-api): bind subscribe.philoli.com custom domain"
```

---

### Task 6.2: CI workflow for the worker

**Files:**
- Create: `.github/workflows/deploy-subscribe-api.yml`

- [ ] **Step 1: Write the workflow**

```yaml
name: Deploy subscribe-api Worker

on:
  push:
    branches: [main]
    paths:
      - 'services/subscribe-api/**'
      - 'src/i18n/**'
      - '.github/workflows/deploy-subscribe-api.yml'
  workflow_dispatch:

concurrency:
  group: subscribe-api-production
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    env:
      CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
      CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22.12.0
          cache: npm

      - name: Install root deps
        run: npm ci

      - name: Install worker deps
        run: npm --prefix services/subscribe-api ci

      - name: Test worker
        run: npm run subscribe:test

      - name: Sync email templates from main i18n
        run: npm run subscribe:sync-i18n

      - name: Deploy worker
        run: npx wrangler@4.84.1 deploy -c services/subscribe-api/wrangler.toml
```

- [ ] **Step 2: Verify Cloudflare API token has Workers Edit permission**

The existing `deploy-pages.yml` already uses `CLOUDFLARE_API_TOKEN`. Confirm this token's scopes include "Edit Cloudflare Workers" in addition to "Edit Cloudflare Pages":

Cloudflare dashboard → My Profile → API Tokens → find the token → Permissions should include both. If only Pages: edit it to add Workers Scripts Edit.

- [ ] **Step 3: Commit + push to trigger the workflow**

```bash
git add .github/workflows/deploy-subscribe-api.yml
git commit -m "ci: deploy subscribe-api worker on push to main"
git push origin main
```

- [ ] **Step 4: Watch the workflow**

```bash
gh run watch
```
Expected: workflow passes; worker re-deploys with the latest code from main.

- [ ] **Step 5: Final end-to-end verification**

After CI is green, run one more full subscribe → confirm → unsubscribe cycle against `https://subscribe.philoli.com` from a real email. Verify the philoli.com page shows the correct banner.

---

## Done

At this point:
- ✅ philoli.com has an inline subscribe form on `/newsletter`, every blog post, and the homepage
- ✅ Submissions go to `subscribe.philoli.com`, persist in the shared D1, send a localized confirm email
- ✅ Confirm and unsubscribe redirects land users back on philoli.com with a localized banner
- ✅ All 41 locales work end-to-end
- ✅ CI redeploys the worker on push

**Explicit follow-ups (out of this plan, future PRs):**
- Migrate Ghost CSV subscribers into D1 (separate plan).
- Update `scripts/send-blog-to-subscribers.mjs` to read D1, filter by `status='active' AND lang=?`, and send the right locale's article body (separate plan).
- Admin endpoint or page to view/export subscribers (separate plan).
- Consider Turnstile if honeypot proves insufficient (defer until evidence).
