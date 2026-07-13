import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import './mobile-density.css';
import { siteUrl } from './site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ApnaServo | Guwahati Home Services Platform',
  description: 'Join the waitlist for ApnaServo, a Guwahati-based home services platform launching across selected areas.',
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
