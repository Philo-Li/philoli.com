#!/usr/bin/env node
/**
 * Bulk-send a blog post (full content) to all active Ghost subscribers.
 *
 * Usage:
 *   node scripts/send-blog-to-subscribers.mjs <slug> [members.csv] [lang]
 *
 * Filters out rows where subscribed_to_emails != "true".
 * Sends sequentially with a small delay to stay under Resend rate limits.
 */
import { readFileSync } from 'node:fs';
import { buildEmail, loadEnv } from './lib/build-newsletter-html.mjs';

const FROM = 'Philo Li <hi@philoli.com>';
const REPLY_TO = 'hi@philoli.com';
const DELAY_MS = 600;
const DEFAULT_CSV = 'C:/Work/Obsidian/Work/Projects/Newsletter/Backups/2026-05-10/members.csv';

const [, , slug, csvPath = DEFAULT_CSV, lang = 'zh'] = process.argv;
if (!slug) {
  console.error('Usage: node scripts/send-blog-to-subscribers.mjs <slug> [csv] [lang]');
  process.exit(1);
}

const env = loadEnv();
const apiKey = env.RESEND_API_KEY;
if (!apiKey) { console.error('RESEND_API_KEY missing in .env'); process.exit(1); }

const { title, html, articleUrl } = buildEmail(slug, lang);

// CSV columns: id,email,name,note,subscribed_to_emails,...
const csvLines = readFileSync(csvPath, 'utf8').trim().split('\n');
const recipients = csvLines.slice(1).map((line) => {
  const cols = line.split(',');
  return { email: cols[1], name: cols[2], subscribed: cols[4] === 'true' };
}).filter((r) => r.subscribed && r.email && r.email.includes('@'));

console.log(`Loaded ${csvLines.length - 1} rows, ${recipients.length} active subscribers will receive.`);
console.log(`Article: ${title}`);
console.log(`URL: ${articleUrl}`);
console.log('---');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ok = 0, fail = 0;
const failures = [];
for (let i = 0; i < recipients.length; i++) {
  const r = recipients[i];
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: r.email, reply_to: REPLY_TO, subject: title, html }),
    });
    if (res.ok) {
      ok++;
      console.log(`[${i + 1}/${recipients.length}] ✓ ${r.email}`);
    } else {
      fail++;
      const data = await res.json().catch(() => ({}));
      failures.push({ email: r.email, status: res.status, error: data.message || JSON.stringify(data) });
      console.log(`[${i + 1}/${recipients.length}] ✗ ${r.email} (${res.status}: ${data.message || 'unknown'})`);
    }
  } catch (err) {
    fail++;
    failures.push({ email: r.email, error: err.message });
    console.log(`[${i + 1}/${recipients.length}] ✗ ${r.email} (${err.message})`);
  }
  if (i < recipients.length - 1) await sleep(DELAY_MS);
}

console.log('---');
console.log(`Done. Sent: ${ok}, Failed: ${fail}`);
if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) console.log(`  ${f.email}: ${f.error || f.status}`);
}
process.exit(fail > 0 ? 1 : 0);
