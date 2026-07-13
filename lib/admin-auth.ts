import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { getRequiredEnv } from './security';

const COOKIE_NAME = 'apnaservo_admin';
const MAX_AGE_SECONDS = 60 * 60 * 8;

function secret() {
  return getRequiredEnv('ADMIN_SESSION_SECRET');
}

function sign(value: string) {
  return crypto.createHmac('sha256', secret()).update(value).digest('hex');
}

export function createAdminSessionValue() {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `admin.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminSession(value?: string) {
  if (!value) return false;
  const parts = value.split('.');
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = sign(payload);
  if (expected.length !== parts[2].length) return false;
  const validSignature = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(parts[2]));
  const validExpiry = Number(parts[1]) > Date.now();
  return validSignature && validExpiry;
}

export async function requireAdmin() {
  const store = await cookies();
  return isValidAdminSession(store.get(COOKIE_NAME)?.value);
}

export async function setAdminCookie(value: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE_SECONDS
  });
}

export async function clearAdminCookie() {
  const store = await cookies();
  store.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0
  });
}
