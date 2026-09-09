// Password hashing and session signing for the internal /admin panel.
//
// Deliberately hand-rolled with node:crypto rather than a new dependency or
// Supabase Auth: this protects a handful of internal admin accounts, not a
// public user base, so PBKDF2 (an OWASP-recommended, dependency-free choice)
// and a signed cookie are proportionate. Nothing here is exposed to the
// browser; both the login route and the page guard run server-side only.
import { randomBytes, pbkdf2Sync, timingSafeEqual, createHmac } from 'node:crypto';

const PBKDF2_ITERATIONS = 210_000; // OWASP 2023 minimum for PBKDF2-SHA256
const KEY_LENGTH = 32;
const SESSION_TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days — a solo business owner checking leads, not a public app

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, 'sha256');
  return `pbkdf2$${PBKDF2_ITERATIONS}$${salt.toString('hex')}$${hash.toString('hex')}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split('$');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2') return false;
  const iterations = Number(parts[1]);
  if (!Number.isInteger(iterations) || iterations <= 0) return false;
  const salt = Buffer.from(parts[2], 'hex');
  const expected = Buffer.from(parts[3], 'hex');
  const actual = pbkdf2Sync(password, salt, iterations, expected.length, 'sha256');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

type SessionPayload = { id: string; email: string; iat: number; exp: number };

const b64url = (buf: Buffer) => buf.toString('base64url');

function sign(payloadB64: string, secret: string): string {
  return b64url(createHmac('sha256', secret).update(payloadB64).digest());
}

export function createSession(admin: { id: string; email: string }, secret: string): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = { id: admin.id, email: admin.email, iat: now, exp: now + SESSION_TTL_SECONDS };
  const payloadB64 = b64url(Buffer.from(JSON.stringify(payload)));
  return `${payloadB64}.${sign(payloadB64, secret)}`;
}

export function verifySession(token: string | undefined, secret: string): SessionPayload | null {
  if (!token) return null;
  const dot = token.indexOf('.');
  if (dot < 0) return null;
  const payloadB64 = token.slice(0, dot);
  const sigB64 = token.slice(dot + 1);

  const expectedSig = Buffer.from(sign(payloadB64, secret));
  const actualSig = Buffer.from(sigB64);
  if (expectedSig.length !== actualSig.length || !timingSafeEqual(expectedSig, actualSig)) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8')) as SessionPayload;
    if (typeof payload.exp !== 'number' || payload.exp < Math.floor(Date.now() / 1000)) return null;
    if (typeof payload.id !== 'string' || typeof payload.email !== 'string') return null;
    return payload;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = 'admin_session';
export { SESSION_TTL_SECONDS };
