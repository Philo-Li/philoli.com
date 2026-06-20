#!/usr/bin/env node
/**
 * Send a single blog post (full content) as a newsletter email via Resend.
 *
 * Usage:
 *   node scripts/send-test-email.mjs <slug> <recipient-email> [lang]
 *
 * Reads RESEND_API_KEY from .env. Looks up the post in src/content/blog/<lang>/<slug>.md
 * (defaults to zh) and emails the full rendered article to the recipient.
 */
import { buildEmail, loadEnv } from './lib/build-newsletter-html.mjs';

const FROM = 'Philo Li <hi@philoli.com>';
const REPLY_TO = 'hi@philoli.com';

const [, , slug, to, lang = 'zh'] = process.argv;
if (!slug || !to) {
  console.error('Usage: node scripts/send-test-email.mjs <slug> <email> [lang]');
  process.exit(1);
}

const env = loadEnv();
const apiKey = env.RESEND_API_KEY;
if (!apiKey) { console.error('RESEND_API_KEY missing in .env'); process.exit(1); }

const { title, html } = buildEmail(slug, lang);

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ from: FROM, to, reply_to: REPLY_TO, subject: title, html }),
});
const data = await res.json();
console.log('Status:', res.status);
console.log('Response:', JSON.stringify(data, null, 2));
process.exit(res.ok ? 0 : 1);
