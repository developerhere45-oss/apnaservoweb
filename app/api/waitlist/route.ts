import { NextRequest, NextResponse } from 'next/server';
import { getClientIp } from '@/lib/http';
import { RequestBodyTooLargeError, checkRateLimit, hashForRateLimit, readJsonBody, rejectCrossOrigin } from '@/lib/security';
import { sendWaitlistSignupToTelegram } from '@/lib/telegram';
import { waitlistSchema } from '@/lib/validation';

export const runtime = 'nodejs';

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export async function POST(request: NextRequest) {
  try {
    const originError = rejectCrossOrigin(request);
    if (originError) return originError;

    const body = await readJsonBody(request);
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid email.' }, { status: 400 });
    }

    const ipKey = hashForRateLimit(`waitlist:ip:${getClientIp(request)}`);
    const emailKey = hashForRateLimit(`waitlist:email:${parsed.data.email}`);
    if (!checkRateLimit(ipKey, MAX_ATTEMPTS, WINDOW_MS) || !checkRateLimit(emailKey, 3, WINDOW_MS)) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 });
    }

    await sendWaitlistSignupToTelegram(parsed.data.email);

    return NextResponse.json({
      message: 'You are on the waitlist. We will notify you as ApnaServo expands across Guwahati.',
      email: parsed.data.email
    });
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) {
      return NextResponse.json({ error: 'Request body is too large.' }, { status: 413 });
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    console.error('waitlist_signup_error', error);
    return NextResponse.json({ error: 'Unable to join the waitlist right now.' }, { status: 500 });
  }
}
