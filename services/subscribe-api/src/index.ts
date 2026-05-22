import { sign, verify } from './lib/jwt';
import { Resend } from 'resend';

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONFIRM_TTL = 30 * 24 * 60 * 60;
const UNSUB_TTL = 365 * 24 * 60 * 60;

const SUPPORTED_LANGS = new Set([
  'en', 'zh', 'zh-TW', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar',
  'hi', 'it', 'nl', 'pl', 'tr', 'vi', 'th', 'id', 'ms', 'sv',
  'da', 'no', 'fi', 'el', 'cs', 'ro', 'hu', 'uk', 'bg', 'hr',
  'sk', 'sl', 'sr', 'lt', 'lv', 'et', 'he', 'fa', 'bn', 'fil',
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

function json(status: number, body: unknown, origin: string | null): Response {
  const h = corsHeaders(origin);
  h.set('Content-Type', 'application/json; charset=utf-8');
  h.set('Cache-Control', 'no-store');
  return new Response(JSON.stringify(body), { status, headers: h });
}

function localePath(siteUrl: string, lang: string, query: string): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${siteUrl}${prefix}/newsletter?${query}`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderConfirmEmail(confirmUrl: string, unsubscribeUrl: string): { subject: string; html: string; text: string } {
  const subject = 'Confirm your subscription to philoli.com';
  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f6f6f4;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;">
  <div style="max-width:480px;margin:0 auto;background:#fff;padding:32px;">
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">Thanks for subscribing to philoli.com.</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 24px;">Click below to confirm your email.</p>
    <p style="margin:0 0 24px;"><a href="${escapeHtml(confirmUrl)}" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 24px;text-decoration:none;">Confirm subscription</a></p>
    <p style="font-size:12px;color:#999;margin:24px 0 0;border-top:1px solid #eee;padding-top:16px;"><a href="${escapeHtml(unsubscribeUrl)}" style="color:#999;">Unsubscribe</a></p>
  </div>
</body></html>`;
  const text = `Thanks for subscribing to philoli.com.\nClick below to confirm your email.\n\nConfirm: ${confirmUrl}\n\nUnsubscribe: ${unsubscribeUrl}\n`;
  return { subject, html, text };
}

async function sendConfirmEmail(env: Env, to: string, confirmUrl: string, unsubscribeUrl: string): Promise<void> {
  const { subject, html, text } = renderConfirmEmail(confirmUrl, unsubscribeUrl);
  const resend = new Resend(env.RESEND_API_KEY);
  const result = await resend.emails.send({ from: env.FROM_EMAIL, to, subject, html, text });
  if (result.error) throw new Error(`Resend failed: ${result.error.message}`);
}

interface SubscriberRow {
  email: string;
  lang: string;
  status: 'pending' | 'active' | 'unsubscribed';
}

async function findByEmail(db: D1Database, email: string): Promise<SubscriberRow | null> {
  const row = await db
    .prepare('SELECT email, lang, status FROM subscribers WHERE email = ?1')
    .bind(email)
    .first<SubscriberRow>();
  return row ?? null;
}

async function mintAndSend(env: Env, email: string): Promise<void> {
  const confirmToken = await sign({ email, type: 'confirm' }, env.JWT_SECRET, CONFIRM_TTL);
  const unsubToken = await sign({ email, type: 'unsubscribe' }, env.JWT_SECRET, UNSUB_TTL);
  const confirmUrl = `${env.WORKER_URL}/confirm?token=${confirmToken}`;
  const unsubscribeUrl = `${env.WORKER_URL}/unsubscribe?token=${unsubToken}`;
  await sendConfirmEmail(env, email, confirmUrl, unsubscribeUrl);
}

async function handleSubscribe(env: Env, body: { email?: string; lang?: string; hp?: string }, origin: string | null): Promise<Response> {
  if (body.hp && body.hp.length > 0) return json(200, { ok: true, code: 'honeypot' }, origin);

  const email = (body.email ?? '').trim().toLowerCase();
  const lang = (body.lang ?? '').trim();

  if (!EMAIL_RE.test(email)) return json(400, { ok: false, code: 'invalid_email' }, origin);
  if (!SUPPORTED_LANGS.has(lang)) return json(400, { ok: false, code: 'invalid_lang' }, origin);

  const existing = await findByEmail(env.DB, email);

  if (!existing) {
    await env.DB
      .prepare("INSERT INTO subscribers (email, lang, status) VALUES (?1, ?2, 'pending')")
      .bind(email, lang)
      .run();
    await mintAndSend(env, email);
    return json(200, { ok: true, code: 'sent' }, origin);
  }

  if (existing.status === 'active') {
    return json(200, { ok: true, code: 'already_subscribed' }, origin);
  }

  // pending or unsubscribed → reset to pending with new lang, resend mail
  await env.DB
    .prepare("UPDATE subscribers SET lang = ?1, status = 'pending' WHERE email = ?2")
    .bind(lang, email)
    .run();
  await mintAndSend(env, email);
  return json(200, { ok: true, code: existing.status === 'unsubscribed' ? 'reactivated' : 'resent' }, origin);
}

async function handleConfirm(env: Env, token: string): Promise<Response> {
  const payload = await verify(token, env.JWT_SECRET);
  if (!payload || payload.type !== 'confirm') {
    return Response.redirect(localePath(env.SITE_URL, 'en', 'error=invalid_token'), 302);
  }
  const existing = await findByEmail(env.DB, payload.email);
  await env.DB
    .prepare("UPDATE subscribers SET status = 'active', confirmed_at = unixepoch() WHERE email = ?1 AND status = 'pending'")
    .bind(payload.email)
    .run();
  const lang = existing?.lang ?? 'en';
  return Response.redirect(localePath(env.SITE_URL, lang, 'confirmed=1'), 302);
}

async function handleUnsubscribe(env: Env, token: string): Promise<Response> {
  const payload = await verify(token, env.JWT_SECRET);
  if (!payload || payload.type !== 'unsubscribe') {
    return Response.redirect(localePath(env.SITE_URL, 'en', 'error=invalid_token'), 302);
  }
  const existing = await findByEmail(env.DB, payload.email);
  await env.DB
    .prepare("UPDATE subscribers SET status = 'unsubscribed' WHERE email = ?1")
    .bind(payload.email)
    .run();
  const lang = existing?.lang ?? 'en';
  return Response.redirect(localePath(env.SITE_URL, lang, 'unsubscribed=1'), 302);
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
          return json(400, { ok: false, code: 'invalid_body' }, origin);
        }
        return await handleSubscribe(env, (body ?? {}) as { email?: string; lang?: string; hp?: string }, origin);
      }

      if (url.pathname === '/confirm' && request.method === 'GET') {
        return await handleConfirm(env, url.searchParams.get('token') ?? '');
      }

      if (url.pathname === '/unsubscribe' && request.method === 'GET') {
        return await handleUnsubscribe(env, url.searchParams.get('token') ?? '');
      }

      if (url.pathname === '/' || url.pathname === '/health') {
        return new Response('subscribe-api OK', { status: 200, headers: corsHeaders(origin) });
      }

      return new Response('Not found', { status: 404, headers: corsHeaders(origin) });
    } catch (err) {
      console.error('subscribe-api error:', err);
      return json(500, { ok: false, code: 'server_error' }, origin);
    }
  },
};
