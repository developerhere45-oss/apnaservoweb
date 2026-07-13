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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-192.png'
  },
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
