import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import './mobile-density.css';
import './premium-system.css';
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
  applicationName: 'ApnaServo',
  title: { default: 'Home Services in Guwahati, Assam | ApnaServo', template: '%s | ApnaServo' },
  description: 'ApnaServo is a Guwahati-based home services platform for AC repair, plumbing, electrical work, cleaning, painting, carpentry and more.',
  keywords: ['home services Guwahati', 'home services Assam', 'AC repair Guwahati', 'plumber Guwahati', 'electrician Guwahati', 'ApnaServo'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', url: siteUrl, siteName: 'ApnaServo', title: 'Home Services in Guwahati, Assam | ApnaServo', description: 'Find home-service support in Guwahati for AC repair, plumbing, electrical work, cleaning and more.' },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HX8P7QQ064" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HX8P7QQ064');
          `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
