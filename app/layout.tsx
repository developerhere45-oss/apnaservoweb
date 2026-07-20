import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Script from 'next/script';
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
  applicationName: 'ApnaServo',
  title: 'ApnaServo | Guwahati Home Services Platform',
  description: 'Join the waitlist for ApnaServo, a Guwahati-based home services platform launching across selected areas.',
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
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HX8P7QQ064"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HX8P7QQ064');
          `}
        </Script>
      </body>
    </html>
  );
}
