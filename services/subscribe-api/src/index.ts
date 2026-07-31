import { sign, verify } from './lib/jwt';
import { EMAIL_I18N, type SubscribeEmailStrings } from './i18n';
import { Resend } from 'resend';

interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  JWT_SECRET: string;
  SITE_URL: string;
  WORKER_URL: string;
  FROM_EMAIL: string;
  REPORT_EMAIL: string;
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

const BRAND_BY_LANG: Record<string, string> = {
  zh: 'Philo 说会儿',
  'zh-TW': 'Philo 說會兒',
};
const DEFAULT_BRAND = "Philo's Reflections";

function brandFor(lang: string): string {
  return BRAND_BY_LANG[lang] ?? DEFAULT_BRAND;
}

function stringsFor(lang: string): SubscribeEmailStrings {
  return EMAIL_I18N[lang] ?? EMAIL_I18N.en;
}

function renderConfirmEmail(lang: string, confirmUrl: string, unsubscribeUrl: string): { subject: string; html: string; text: string } {
  const t = stringsFor(lang);
  const brand = brandFor(lang);
  const subject = t.confirmSubject;
  const safeConfirm = escapeHtml(confirmUrl);
  const safeUnsub = escapeHtml(unsubscribeUrl);
  const safeBrand = escapeHtml(brand);
  const safeHeading = escapeHtml(t.confirmHeading);
  const safeBody = escapeHtml(t.confirmBody);
  const safeCta = escapeHtml(t.confirmCta);
  const safeUnsubLabel = escapeHtml(t.footerUnsubscribe);
  const safeFallback = escapeHtml(t.confirmFallback);

  const html = `<!doctype html>
<html lang="${escapeHtml(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3eadb;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','PingFang SC','Microsoft YaHei',Arial,sans-serif;color:#221a12;-webkit-font-smoothing:antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3eadb;padding:48px 16px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:520px;background:#fbf4e8;border:1px solid rgba(86,62,31,0.14);">
        <tr><td style="padding:48px 44px 0;text-align:center;">
          <div style="font-size:24px;font-weight:600;letter-spacing:0.5px;color:#16110d;line-height:1.3;">${safeBrand}</div>
          <div style="width:36px;height:2px;background:#cf4f2d;margin:20px auto 0;line-height:2px;font-size:0;">&nbsp;</div>
        </td></tr>
        <tr><td style="padding:32px 44px 0;">
          <h1 style="font-size:20px;font-weight:600;color:#16110d;margin:0 0 16px;line-height:1.4;">${safeHeading}</h1>
          <p style="font-size:16px;line-height:1.75;margin:0 0 28px;color:#3a2e22;">${safeBody}</p>
        </td></tr>
        <tr><td style="padding:0 44px 32px;text-align:center;">
          <a href="${safeConfirm}" style="display:inline-block;background:#cf4f2d;color:#fbf4e8;padding:16px 36px;text-decoration:none;font-size:17px;font-weight:500;">${safeCta}</a>
        </td></tr>
        <tr><td style="padding:0 44px 36px;">
          <p style="font-size:13px;line-height:1.6;color:#7a6b5b;margin:0 0 8px;">${safeFallback}</p>
          <p style="font-size:13px;line-height:1.5;margin:0;word-break:break-all;"><a href="${safeConfirm}" style="color:#cf4f2d;text-decoration:underline;">${safeConfirm}</a></p>
        </td></tr>
        <tr><td style="padding:24px 44px 28px;border-top:1px solid rgba(86,62,31,0.1);text-align:center;">
          <a href="${safeUnsub}" style="font-size:13px;color:#7a6b5b;text-decoration:underline;letter-spacing:0.3px;">${safeUnsubLabel}</a>
        </td></tr>
      </table>
      <div style="font-size:12px;color:#7a6b5b;margin-top:16px;letter-spacing:0.5px;">philoli.com</div>
    </td></tr>
  </table>
</body></html>`;

  const text = `${brand}\n${'-'.repeat(brand.length)}\n\n${t.confirmHeading}\n\n${t.confirmBody}\n\n${t.confirmCta}: ${confirmUrl}\n\n${t.confirmFallback}\n${confirmUrl}\n\n${t.footerUnsubscribe}: ${unsubscribeUrl}\n`;
  return { subject, html, text };
}

async function sendConfirmEmail(env: Env, to: string, lang: string, confirmUrl: string, unsubscribeUrl: string): Promise<void> {
  const { subject, html, text } = renderConfirmEmail(lang, confirmUrl, unsubscribeUrl);
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

async function mintAndSend(env: Env, email: string, lang: string): Promise<void> {
  const confirmToken = await sign({ email, type: 'confirm' }, env.JWT_SECRET, CONFIRM_TTL);
  const unsubToken = await sign({ email, type: 'unsubscribe' }, env.JWT_SECRET, UNSUB_TTL);
  const confirmUrl = `${env.WORKER_URL}/confirm?token=${confirmToken}`;
  const unsubscribeUrl = `${env.WORKER_URL}/unsubscribe?token=${unsubToken}`;
  await sendConfirmEmail(env, email, lang, confirmUrl, unsubscribeUrl);
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
    await mintAndSend(env, email, lang);
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
  await mintAndSend(env, email, lang);
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

const WEEK_SECONDS = 7 * 24 * 60 * 60;
const MONTH_SECONDS = 30 * 24 * 60 * 60;

function beijingDate(ts: number): string {
  const d = new Date((ts + 8 * 3600) * 1000);
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${d.getUTCFullYear()}-${mm}-${dd}`;
}

interface StatusCount {
  status: string;
  c: number;
}

interface RecentSubscriber {
  email: string;
  lang: string;
  status: string;
  created_at: number;
}

async function sendWeeklyReport(env: Env, now: number): Promise<void> {
  const since = now - WEEK_SECONDS;

  const signups = await env.DB
    .prepare('SELECT COUNT(*) AS c FROM subscribers WHERE created_at >= ?1')
    .bind(since)
    .first<{ c: number }>();
  const confirmed = await env.DB
    .prepare('SELECT COUNT(*) AS c FROM subscribers WHERE confirmed_at >= ?1')
    .bind(since)
    .first<{ c: number }>();
  const sinceMonth = now - MONTH_SECONDS;
  const monthSignups = await env.DB
    .prepare('SELECT COUNT(*) AS c FROM subscribers WHERE created_at >= ?1')
    .bind(sinceMonth)
    .first<{ c: number }>();
  const monthConfirmed = await env.DB
    .prepare('SELECT COUNT(*) AS c FROM subscribers WHERE confirmed_at >= ?1')
    .bind(sinceMonth)
    .first<{ c: number }>();
  const totals = await env.DB
    .prepare('SELECT status, COUNT(*) AS c FROM subscribers GROUP BY status')
    .all<StatusCount>();
  const recent = await env.DB
    .prepare('SELECT email, lang, status, created_at FROM subscribers WHERE created_at >= ?1 ORDER BY created_at DESC LIMIT 100')
    .bind(sinceMonth)
    .all<RecentSubscriber>();

  const byStatus: Record<string, number> = {};
  for (const row of totals.results) byStatus[row.status] = row.c;
  const active = byStatus.active ?? 0;
  const pending = byStatus.pending ?? 0;
  const unsubscribed = byStatus.unsubscribed ?? 0;
  const newSignups = signups?.c ?? 0;
  const newConfirmed = confirmed?.c ?? 0;
  const monthNewSignups = monthSignups?.c ?? 0;
  const monthNewConfirmed = monthConfirmed?.c ?? 0;

  const range = `${beijingDate(since)} 至 ${beijingDate(now)}`;
  const subject = `每周订阅汇总：新增 ${newSignups} 个订阅申请，${newConfirmed} 个确认（${range}）`;

  const rowsHtml = recent.results.length
    ? recent.results
        .map((s) => {
          const weekBadge =
            s.created_at >= since
              ? ' <span style="display:inline-block;background:#cf4f2d;color:#fbf4e8;font-size:11px;padding:1px 6px;border-radius:2px;vertical-align:middle;">本周</span>'
              : '';
          return `<tr><td style="padding:8px 12px;border-bottom:1px solid rgba(86,62,31,0.1);font-size:14px;">${escapeHtml(s.email)}${weekBadge}</td><td style="padding:8px 12px;border-bottom:1px solid rgba(86,62,31,0.1);font-size:14px;">${escapeHtml(s.lang)}</td><td style="padding:8px 12px;border-bottom:1px solid rgba(86,62,31,0.1);font-size:14px;">${escapeHtml(s.status)}</td><td style="padding:8px 12px;border-bottom:1px solid rgba(86,62,31,0.1);font-size:14px;white-space:nowrap;">${beijingDate(s.created_at)}</td></tr>`;
        })
        .join('')
    : `<tr><td colspan="4" style="padding:12px;font-size:14px;color:#7a6b5b;">近 30 天没有新增订阅申请</td></tr>`;

  const html = `<!doctype html>
<html lang="zh">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f3eadb;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','PingFang SC','Microsoft YaHei',Arial,sans-serif;color:#221a12;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3eadb;padding:48px 16px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;background:#fbf4e8;border:1px solid rgba(86,62,31,0.14);">
        <tr><td style="padding:40px 40px 0;text-align:center;">
          <div style="font-size:22px;font-weight:600;color:#16110d;">Newsletter 每周订阅汇总</div>
          <div style="font-size:14px;color:#7a6b5b;margin-top:8px;">${escapeHtml(range)}（北京时间）</div>
          <div style="width:36px;height:2px;background:#cf4f2d;margin:20px auto 0;font-size:0;">&nbsp;</div>
        </td></tr>
        <tr><td style="padding:28px 40px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="text-align:center;padding:12px;"><div style="font-size:28px;font-weight:600;color:#cf4f2d;">${newSignups}</div><div style="font-size:13px;color:#7a6b5b;margin-top:4px;">本周新增申请</div></td>
              <td style="text-align:center;padding:12px;"><div style="font-size:28px;font-weight:600;color:#cf4f2d;">${newConfirmed}</div><div style="font-size:13px;color:#7a6b5b;margin-top:4px;">本周确认订阅</div></td>
              <td style="text-align:center;padding:12px;"><div style="font-size:28px;font-weight:600;color:#16110d;">${active}</div><div style="font-size:13px;color:#7a6b5b;margin-top:4px;">当前有效订阅</div></td>
            </tr>
          </table>
          <p style="font-size:14px;color:#3a2e22;text-align:center;margin:12px 0 0;">过去 30 天：新增申请 <strong style="color:#cf4f2d;">${monthNewSignups}</strong> · 确认订阅 <strong style="color:#cf4f2d;">${monthNewConfirmed}</strong></p>
          <p style="font-size:13px;color:#7a6b5b;text-align:center;margin:8px 0 0;">待确认 ${pending} · 已退订 ${unsubscribed}</p>
        </td></tr>
        <tr><td style="padding:28px 40px 36px;">
          <div style="font-size:15px;font-weight:600;color:#16110d;margin-bottom:12px;">近 30 天新增明细（邮箱 · 语言 · 状态 · 日期）</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid rgba(86,62,31,0.14);">${rowsHtml}</table>
        </td></tr>
      </table>
      <div style="font-size:12px;color:#7a6b5b;margin-top:16px;">subscribe.philoli.com 每周一自动发送</div>
    </td></tr>
  </table>
</body></html>`;

  const textRows = recent.results.length
    ? recent.results
        .map((s) => `- ${s.email} (${s.lang}, ${s.status}, ${beijingDate(s.created_at)}${s.created_at >= since ? ', 本周' : ''})`)
        .join('\n')
    : '近 30 天没有新增订阅申请';
  const text = `Newsletter 每周订阅汇总（${range}，北京时间）\n\n本周新增申请: ${newSignups}\n本周确认订阅: ${newConfirmed}\n过去 30 天新增申请: ${monthNewSignups}\n过去 30 天确认订阅: ${monthNewConfirmed}\n当前有效订阅: ${active}\n待确认: ${pending}\n已退订: ${unsubscribed}\n\n近 30 天新增明细:\n${textRows}\n`;

  const resend = new Resend(env.RESEND_API_KEY);
  const result = await resend.emails.send({ from: env.FROM_EMAIL, to: env.REPORT_EMAIL, subject, html, text });
  if (result.error) throw new Error(`Resend failed: ${result.error.message}`);
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

  async scheduled(controller: ScheduledController, env: Env): Promise<void> {
    try {
      await sendWeeklyReport(env, Math.floor(controller.scheduledTime / 1000));
      console.log('weekly report sent');
    } catch (err) {
      console.error('weekly report error:', err);
      throw err;
    }
  },
};
