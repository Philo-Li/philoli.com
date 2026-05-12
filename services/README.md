# Services

Standalone Cloudflare Workers that the static site calls from the browser.

| Worker | Purpose |
|---|---|
| [`custom-llm-proxy/`](./custom-llm-proxy/README.md) | CORS-bypass proxy for any OpenAI-compatible `/chat/completions` endpoint. Used by the ebook translator's OpenCode and "Custom" provider options. |

## Conventions

- One TypeScript file (`src/index.ts`) + `wrangler.jsonc`. Keep it that way unless logic grows beyond a few hundred lines.
- `Origin` allowlist covers `philoli.com`, `www.philoli.com`, and localhost dev (`:4321`). Note: `Origin` is browser-set, so this is NOT a security boundary against scripted clients — see each worker's README for actual threat model.
- All workers expose `GET /health` returning `{ ok: true }`.
- No logging of request bodies, Authorization headers, or any user-supplied URLs.

## Deploy

```bash
npm run proxy:dev     # local dev (http://127.0.0.1:8787)
npm run proxy:deploy  # → Cloudflare
```

Deploys go to the `philo-2e9.workers.dev` subdomain. The browser-side URL constant lives in `src/lib/llm.ts` (`LLM_PROXY_ENDPOINT`) — if the subdomain ever changes, update it there.

## History

- 2026-05-12: merged `opencode-go-proxy` into `custom-llm-proxy`. The OpenCode provider in `llm.ts` now routes through the same worker by passing `X-Upstream-URL: https://opencode.ai/zen/go/v1/chat/completions`.
- 2026-05-01: original `opencode-go-proxy` added as a fixed-upstream CORS shim (commit `860b155`).
