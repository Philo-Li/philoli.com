const UPSTREAM_URL = 'https://opencode.ai/zen/go/v1/chat/completions';
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
  headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  headers.set('Access-Control-Max-Age', '86400');
  return headers;
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  const headers = corsHeaders(origin);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'no-store');
  return new Response(JSON.stringify(body), { status, headers });
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
      upstream = await fetch(UPSTREAM_URL, {
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
