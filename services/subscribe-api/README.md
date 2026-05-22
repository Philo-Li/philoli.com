# subscribe-api

Cloudflare Worker that handles direct newsletter subscriptions for philoli.com.

Endpoints:
- `POST /subscribe` — `{ email, lang, hp }` → writes pending row, sends confirm email
- `GET /confirm?token=...` → activates subscription, redirects to philoli.com
- `GET /unsubscribe?token=...` → marks unsubscribed, redirects to philoli.com

D1 binding: `DB` → shared `newsletter-db` (also used by `C:\Work\CS\newsletter\`).
Secrets: `RESEND_API_KEY`, `JWT_SECRET`.

See `docs/superpowers/specs/2026-05-21-direct-subscription-design.md`.
