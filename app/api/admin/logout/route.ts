import { NextRequest, NextResponse } from 'next/server';
import { clearAdminCookie } from '@/lib/admin-auth';
import { rejectCrossOrigin } from '@/lib/security';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const originError = rejectCrossOrigin(request);
  if (originError) return originError;

  await clearAdminCookie();
  return NextResponse.json({ message: 'Logged out.' });
}
