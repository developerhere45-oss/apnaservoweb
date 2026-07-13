import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(254, 'Email address is too long.')
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const adminLoginSchema = z.object({
  password: z.string().min(1, 'Password is required.').max(256, 'Password is too long.')
});
