import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import MarkdownIt from 'markdown-it';

const SITE_URL = 'https://philoli.com';

const style = {
  h2: 'font-size:22px;font-weight:700;margin:32px 0 12px;color:#1a1a1a;line-height:1.4;',
  h3: 'font-size:18px;font-weight:600;margin:24px 0 8px;color:#1a1a1a;line-height:1.4;',
  h4: 'font-size:16px;font-weight:600;margin:20px 0 8px;color:#1a1a1a;line-height:1.4;',
  p: 'font-size:15px;line-height:1.8;color:#333;margin:0 0 16px;',
  ul: 'padding-left:24px;margin:0 0 16px;',
  ol: 'padding-left:24px;margin:0 0 16px;',
  li: 'font-size:15px;line-height:1.8;color:#333;margin:0 0 8px;',
  blockquote: 'border-left:3px solid #ddd;padding:4px 0 4px 16px;color:#666;margin:16px 0;',
  a: 'color:#1a73e8;text-decoration:underline;',
  hr: 'border:0;border-top:1px solid #eee;margin:32px 0;',
  img: 'display:block;max-width:100%;height:auto;margin:16px auto;',
  strong: 'font-weight:700;color:#1a1a1a;',
  code: 'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:#f4f4f2;padding:2px 6px;border-radius:3px;font-size:14px;',
};

function styleToken(md, tokenType, css) {
  const original = md.renderer.rules[tokenType] ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  md.renderer.rules[tokenType] = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const resolved = typeof css === 'function' ? css(token) : css;
    if (resolved) token.attrSet('style', resolved);
    return original(tokens, idx, options, env, self);
  };
}

function renderMarkdown(body) {
  const md = new MarkdownIt({ html: true, linkify: true, breaks: false });

  styleToken(md, 'heading_open', (t) => style[t.tag] || '');
  styleToken(md, 'paragraph_open', style.p);
  styleToken(md, 'bullet_list_open', style.ul);
  styleToken(md, 'ordered_list_open', style.ol);
  styleToken(md, 'list_item_open', style.li);
  styleToken(md, 'blockquote_open', style.blockquote);
  styleToken(md, 'link_open', style.a);
  styleToken(md, 'hr', style.hr);
  styleToken(md, 'image', style.img);
  styleToken(md, 'strong_open', style.strong);
  styleToken(md, 'code_inline', style.code);

  let html = md.render(body);

  // Rewrite root-relative URLs to absolute (for images and links inside HTML blocks)
  html = html.replace(/(src|href)="\/([^"]*)"/g, `$1="${SITE_URL}/$2"`);

  // Inline-style raw <img> tags that came through as HTML blocks (figures)
  html = html.replace(/<img(?![^>]*\sstyle=)([^>]*?)\/?>/g, `<img$1 style="${style.img}" />`);

  // Strip <figure> wrappers — they don't add anything in email and many clients
  // don't honor the class. Keep the inner content (img, captions become plain).
  html = html.replace(/<figure[^>]*>/g, '<div style="margin:24px 0;text-align:center;">');
  html = html.replace(/<\/figure>/g, '</div>');

  return html;
}

export function buildEmail(slug, lang = 'zh') {
  const md = readFileSync(resolve('src/content/blog', lang, `${slug}.md`), 'utf8');
  const fmEnd = md.indexOf('\n---', 4);
  const fm = md.slice(4, fmEnd);
  const body = md.slice(fmEnd + 4).trim().replace(/<!--more-->\s*/g, '');

  const get = (key) => {
    const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
    return m ? m[1].trim() : '';
  };
  const title = get('title');
  const date = get('date').slice(0, 10);
  const articleUrl = `${SITE_URL}/${lang}/blog/${slug}`;

  const bodyHtml = renderMarkdown(body);

  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f6f6f4;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f4;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;">
        <tr><td style="padding:24px 32px 8px;">
          <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#888;">PHILO 说会儿</div>
        </td></tr>
        <tr><td style="padding:16px 32px 8px;">
          <h1 style="margin:0 0 8px;font-size:28px;line-height:1.3;font-weight:700;color:#1a1a1a;">${title}</h1>
          <div style="font-size:12px;color:#999;margin-bottom:24px;">${date}</div>
        </td></tr>
        <tr><td style="padding:0 32px 16px;">
          ${bodyHtml}
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid #eee;font-size:12px;color:#999;line-height:1.6;">
          你订阅了 Philo 说会儿。<br/>
          <a href="${articleUrl}" style="color:#999;">在网页查看本文</a> · <a href="${SITE_URL}" style="color:#999;">philoli.com</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return { title, html, articleUrl, date };
}

export function loadEnv(path = '.env') {
  return Object.fromEntries(
    readFileSync(path, 'utf8')
      .split('\n')
      .filter((l) => l && !l.startsWith('#') && l.includes('='))
      .map((l) => {
        const i = l.indexOf('=');
        return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
      })
  );
}
