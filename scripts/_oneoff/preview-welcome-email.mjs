#!/usr/bin/env node
// Render welcome (confirm) email previews to ./email-preview/{lang}.html
// Pulls the same template + i18n the worker uses, with dummy URLs.
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..', '..');
const i18nSrc = readFileSync(join(repoRoot, 'services/subscribe-api/src/i18n.ts'), 'utf8');

// Extract EMAIL_I18N object literal from the generated file.
const i18nJsonMatch = i18nSrc.match(/EMAIL_I18N[^=]*=\s*(\{[\s\S]*\});/);
if (!i18nJsonMatch) throw new Error('Could not find EMAIL_I18N in i18n.ts');
const EMAIL_I18N = JSON.parse(i18nJsonMatch[1]);

const BRAND_BY_LANG = { zh: 'Philo 说会儿', 'zh-TW': 'Philo 說會兒' };
const DEFAULT_BRAND = "Philo's Reflections";

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function render(lang, confirmUrl, unsubscribeUrl) {
  const t = EMAIL_I18N[lang] ?? EMAIL_I18N.en;
  const brand = BRAND_BY_LANG[lang] ?? DEFAULT_BRAND;
  const subject = t.confirmSubject;
  const safe = {
    confirm: escapeHtml(confirmUrl), unsub: escapeHtml(unsubscribeUrl),
    brand: escapeHtml(brand), heading: escapeHtml(t.confirmHeading),
    body: escapeHtml(t.confirmBody), cta: escapeHtml(t.confirmCta),
    fallback: escapeHtml(t.confirmFallback),
    unsubLabel: escapeHtml(t.footerUnsubscribe),
  };
  return `<!doctype html>
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
          <div style="font-size:24px;font-weight:600;letter-spacing:0.5px;color:#16110d;line-height:1.3;">${safe.brand}</div>
          <div style="width:36px;height:2px;background:#cf4f2d;margin:20px auto 0;line-height:2px;font-size:0;">&nbsp;</div>
        </td></tr>
        <tr><td style="padding:32px 44px 0;">
          <h1 style="font-size:20px;font-weight:600;color:#16110d;margin:0 0 16px;line-height:1.4;">${safe.heading}</h1>
          <p style="font-size:16px;line-height:1.75;margin:0 0 28px;color:#3a2e22;">${safe.body}</p>
        </td></tr>
        <tr><td style="padding:0 44px 32px;text-align:center;">
          <a href="${safe.confirm}" style="display:inline-block;background:#cf4f2d;color:#fbf4e8;padding:16px 36px;text-decoration:none;font-size:17px;font-weight:500;">${safe.cta}</a>
        </td></tr>
        <tr><td style="padding:0 44px 36px;">
          <p style="font-size:13px;line-height:1.6;color:#7a6b5b;margin:0 0 8px;">${safe.fallback}</p>
          <p style="font-size:13px;line-height:1.5;margin:0;word-break:break-all;"><a href="${safe.confirm}" style="color:#cf4f2d;text-decoration:underline;">${safe.confirm}</a></p>
        </td></tr>
        <tr><td style="padding:24px 44px 28px;border-top:1px solid rgba(86,62,31,0.1);text-align:center;">
          <a href="${safe.unsub}" style="font-size:13px;color:#7a6b5b;text-decoration:underline;letter-spacing:0.3px;">${safe.unsubLabel}</a>
        </td></tr>
      </table>
      <div style="font-size:12px;color:#7a6b5b;margin-top:16px;letter-spacing:0.5px;">philoli.com</div>
    </td></tr>
  </table>
</body></html>`;
}

const outDir = join(repoRoot, 'email-preview');
mkdirSync(outDir, { recursive: true });
const langs = ['en', 'zh', 'zh-TW', 'ja', 'es'];
const FAKE_CONFIRM = 'https://subscribe.philoli.com/confirm?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InlvdUBleGFtcGxlLmNvbSIsInR5cGUiOiJjb25maXJtIiwiZXhwIjoxNzY1NzAwMDAwfQ.SIGNATURE';
const FAKE_UNSUB = 'https://subscribe.philoli.com/unsubscribe?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InlvdUBleGFtcGxlLmNvbSIsInR5cGUiOiJ1bnN1YnNjcmliZSIsImV4cCI6MTc5NzIwMDAwMH0.SIGNATURE';
for (const lang of langs) {
  const html = render(lang, FAKE_CONFIRM, FAKE_UNSUB);
  writeFileSync(join(outDir, `${lang}.html`), html, 'utf8');
  console.log(`Wrote ${lang}.html`);
}
console.log(`\nOpen: file:///${outDir.replace(/\\/g, '/')}/zh.html`);
