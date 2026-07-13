import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { createAdminSessionValue, setAdminCookie } from '@/lib/admin-auth';
import { getClientIp } from '@/lib/http';
import { RequestBodyTooLargeError, checkRateLimit, hashForRateLimit, readJsonBody, rejectCrossOrigin } from '@/lib/security';
import { adminLoginSchema } from '@/lib/validation';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const originError = rejectCrossOrigin(request);
    if (originError) return originError;

    const rateLimitKey = hashForRateLimit(`admin-login:${getClientIp(request)}`);
    if (!checkRateLimit(rateLimitKey, 8, 15 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 });
    }

    const parsed = adminLoginSchema.safeParse(await readJsonBody(request));
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid request.' }, { status: 400 });
    }

    if (!process.env.ADMIN_PASSWORD) {
      console.error('admin_login_missing_password');
      return NextResponse.json({ error: 'Admin login is not available.' }, { status: 500 });
    }

    const input = Buffer.from(parsed.data.password);
    const expected = Buffer.from(process.env.ADMIN_PASSWORD);
    const passwordMatches = input.length === expected.length && crypto.timingSafeEqual(input, expected);

    if (!passwordMatches) {
      return NextResponse.json({ error: 'Invalid admin password.' }, { status: 401 });
    }

    await setAdminCookie(createAdminSessionValue());
    return NextResponse.json({ message: 'Logged in.' });
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) {
      return NextResponse.json({ error: 'Request body is too large.' }, { status: 413 });
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    console.error('admin_login_error', error);
    return NextResponse.json({ error: 'Admin login is not available.' }, { status: 500 });
  }
}
