# custom-llm-proxy

Cloudflare Worker that forwards `POST /v1/chat/completions` to an arbitrary
OpenAI-compatible upstream, and stamps CORS headers on the response so
`philoli.com` JS can call it. The upstream URL is supplied per request via
the `X-Upstream-URL` header.

Deployed at `https://philoli-custom-llm-proxy.philo-2e9.workers.dev`.
Browser-side constant: `LLM_PROXY_ENDPOINT` in `src/lib/llm.ts`.

## Why this exists

Two ebook-translator provider options need this:

1. **OpenCode** (`opencode.ai/zen/go/...`) — upstream doesn't return `Access-Control-Allow-Origin`, so direct browser `fetch()` is blocked.
2. **Custom (OpenAI-compatible)** — users point at their own gateway (OneAPI, NewAPI, FastGPT, self-hosted Ollama tunneled through ngrok, etc.). Almost none of those open CORS to `philoli.com` by default.

The user's API key (`Bearer ...`) flows through verbatim. The worker is
stateless: no logging of headers, body, or the user-supplied upstream URL.

Everything else in `llm.ts` (OpenAI, Anthropic, Gemini, DeepSeek, Qwen,
GLM, Kimi, OpenRouter) talks to its upstream directly — those providers
all open CORS to public origins.

## Routes

| Method | Path | Behavior |
|---|---|---|
| `POST` | `/v1/chat/completions` | Validate, then forward to `X-Upstream-URL` |
| `GET`  | `/health` | `{ ok: true }` |
| any    | other | 404 |

## Request format

```http
POST /v1/chat/completions HTTP/1.1
Origin: https://philoli.com
Authorization: Bearer <user's upstream API key>
Content-Type: application/json
X-Upstream-URL: https://api.example.com/v1/chat/completions

{ "model": "...", "messages": [...] }
```

The body is forwarded verbatim. Response status, `Content-Type`, and body
are passed back to the browser unchanged.

## Validation (rejects on first failure)

1. `Origin` (if present) must be in the allowlist: `philoli.com`, `www.philoli.com`, `http://localhost:4321`, `http://127.0.0.1:4321`. Missing `Origin` is allowed (non-browser clients).
2. `Authorization: Bearer <token>` must be present.
3. `X-Upstream-URL` must parse as a URL, use `https:`, point at a non-private hostname, and have a path ending in `/chat/completions`.
4. Body must be JSON with `model: string` and `messages: array`.

The private-hostname check rejects IPv4 literals in `0/8`, `10/8`, `127/8`, `169.254/16`, `172.16/12`, `192.168/16`; IPv6 unique-local (`fc00::/7`) and link-local (`fe80::/10`); and the hostnames `localhost`, `*.local`, `*.internal`, `*.localhost`. It is **best-effort** — Workers have no DNS API, so a hostname that *resolves* to a private IP slips through.

## Threat model

| Risk | Mitigation | Residual |
|---|---|---|
| Generic open proxy | Path must end `/chat/completions` | Limits abuse to OpenAI-compat traffic only |
| SSRF to internal services | Private-hostname blocklist | DNS-rebinding / public→private redirects possible (no DNS resolution at edge) |
| Origin bypass (curl, server) | None — `Origin` allowlist is browser-only | Treat worker as publicly invocable |
| API key theft | Worker is stateless, no logging | User must trust the build of this worker (source in this repo) |
| Cost amplification | None yet | Workers Free = 100k req/day; monitor CF analytics |

If abuse becomes real, add (in order of effort): Cloudflare Rate Limiting binding, a static hint header, Turnstile.

## Local dev / deploy

```bash
npm run proxy:dev     # http://127.0.0.1:8787
npm run proxy:deploy  # → philoli-custom-llm-proxy.philo-2e9.workers.dev
```

## History

- 2026-05-12: created as `custom-llm-proxy`; absorbed `opencode-go-proxy`'s role (which was deleted).
