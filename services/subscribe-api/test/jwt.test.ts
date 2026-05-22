import { describe, it, expect } from 'vitest';
import { sign, verify } from '../src/lib/jwt';

const SECRET = 'test-secret-do-not-use-in-prod';

describe('jwt', () => {
  it('round-trips a payload', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    const payload = await verify(token, SECRET);
    expect(payload).toMatchObject({ email: 'a@b.com', type: 'confirm' });
  });

  it('rejects a tampered signature', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    const [h, p] = token.split('.');
    const tampered = `${h}.${p}.AAAA`;
    expect(await verify(tampered, SECRET)).toBeNull();
  });

  it('rejects a wrong secret', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, 60);
    expect(await verify(token, 'other-secret')).toBeNull();
  });

  it('rejects an expired token', async () => {
    const token = await sign({ email: 'a@b.com', type: 'confirm' }, SECRET, -1);
    expect(await verify(token, SECRET)).toBeNull();
  });

  it('rejects a malformed token', async () => {
    expect(await verify('not-a-jwt', SECRET)).toBeNull();
    expect(await verify('', SECRET)).toBeNull();
  });

  it('rejects a correctly-signed token with junk payload', async () => {
    // Hand-craft a token signed with SECRET but with non-claims JSON inside.
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    const payload = btoa(JSON.stringify({ foo: 'bar' })).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    const data = `${header}.${payload}`;
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sigBytes = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data)));
    let s = '';
    for (const b of sigBytes) s += String.fromCharCode(b);
    const sig = btoa(s).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    const token = `${data}.${sig}`;
    expect(await verify(token, SECRET)).toBeNull();
  });
});
