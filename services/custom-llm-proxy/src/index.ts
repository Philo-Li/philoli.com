const ALLOWED_ORIGINS = new Set([
  'https://philoli.com',
  'https://www.philoli.com',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
]);

function corsHeaders(origin: string | null): Headers {
  const headers = new Headers();
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Vary', 'Origin');
  }
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Upstream-URL');
  headers.set('Access-Control-Max-Age', '86400');
  return headers;
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  const headers = corsHeaders(origin);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'no-store');
  return new Response(JSON.stringify(body), { status, headers });
}

// Best-effort SSRF block. Workers expose no DNS API, so hostnames that *resolve* to private
// IPs slip through — only IP literals and reserved hostnames are caught here.
function isPrivateHostname(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal') || h.endsWith('.localhost')) return true;

  const ipv4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const a = parseInt(ipv4[1], 10);
    const b = parseInt(ipv4[2], 10);
    if (a === 0) return true;
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    return false;
  }

  if (h === '::1' || h === '::') return true;
  // fc00::/7 unique-local + fe80::/10 link-local (rough prefix match — false positives here are fine).
  if (/^f[cd][0-9a-f]{2}:/.test(h)) return true;
  if (/^fe[89ab][0-9a-f]?:/.test(h)) return true;

  return false;
}

function validateUpstreamUrl(raw: string): { ok: true; url: URL } | { ok: false; error: string } {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { ok: false, error: 'X-Upstream-URL must be a valid URL' };
  }
  if (url.protocol !== 'https:') return { ok: false, error: 'X-Upstream-URL must use https://' };
  if (isPrivateHostname(url.hostname)) return { ok: false, error: 'X-Upstream-URL host is not a public address' };
  if (!url.pathname.endsWith('/chat/completions')) {
    return { ok: false, error: 'X-Upstream-URL path must end with /chat/completions' };
  }
  return { ok: true, url };
}

export default {
  async fetch(request: Request): Promise<Response> {
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return jsonResponse({ ok: true }, 200, origin);
    }

    if (url.pathname !== '/v1/chat/completions') {
      return jsonResponse({ error: 'Not found' }, 404, origin);
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return jsonResponse({ error: 'Origin not allowed' }, 403, origin);
    }

    const authorization = request.headers.get('Authorization');
    if (!authorization?.startsWith('Bearer ')) {
      return jsonResponse({ error: 'Missing Bearer token' }, 401, origin);
    }

    const rawUpstream = request.headers.get('X-Upstream-URL');
    if (!rawUpstream) {
      return jsonResponse({ error: 'Missing X-Upstream-URL header' }, 400, origin);
    }
    const check = validateUpstreamUrl(rawUpstream);
    if (!check.ok) return jsonResponse({ error: check.error }, 400, origin);

    const rawBody = await request.text();
    try {
      const parsed = JSON.parse(rawBody) as Record<string, unknown>;
      if (typeof parsed.model !== 'string' || !Array.isArray(parsed.messages)) {
        return jsonResponse({ error: 'Invalid request body' }, 400, origin);
      }
    } catch {
      return jsonResponse({ error: 'Request body must be valid JSON' }, 400, origin);
    }

    let upstream: Response;
    try {
      upstream = await fetch(check.url.toString(), {
        method: 'POST',
        headers: {
          Authorization: authorization,
          'Content-Type': 'application/json',
        },
        body: rawBody,
      });
    } catch (error) {
      return jsonResponse(
        { error: error instanceof Error ? error.message : 'Upstream request failed' },
        502,
        origin,
      );
    }

    const headers = corsHeaders(origin);
    headers.set('Cache-Control', 'no-store');
    const contentType = upstream.headers.get('Content-Type');
    if (contentType) headers.set('Content-Type', contentType);
    return new Response(upstream.body, {
      status: upstream.status,
      headers,
    });
  },
};
