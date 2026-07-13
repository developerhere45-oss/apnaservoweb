import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitBucket>();
export class RequestBodyTooLargeError extends Error {}

export function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required.`);
  return value;
}

export function hashForRateLimit(value: string) {
  const secret = getRequiredEnv('RATE_LIMIT_SECRET');
  return crypto.createHmac('sha256', secret).update(value).digest('hex');
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) return false;

  current.count += 1;
  return true;
}

export function isSameOriginRequest(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  const host = request.headers.get('host');
  if (!host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function rejectCrossOrigin(request: NextRequest) {
  if (isSameOriginRequest(request)) return null;
  return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
}

export async function readJsonBody(request: NextRequest, maxBytes = 2048) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > maxBytes) {
    throw new RequestBodyTooLargeError('Request body is too large.');
  }

  return request.json();
}
