import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BadgeCheck,
  Clock3,
  Grid2X2,
  Hammer,
  PaintRoller,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wrench,
  Zap
} from 'lucide-react';
import styles from './services.module.css';
import { LegalFooter } from '../legal-pages';

export const metadata: Metadata = {
  title: 'Home Services in Guwahati | ApnaServo',
  description: 'Explore verified electrical, plumbing, AC, cleaning, painting, carpentry, and pest-control services in Guwahati.'
};

const services = [
  ['Electrical Services', 'From wiring to repair, get safe and reliable electrical solutions for your home.', Zap],
  ['Plumbing Services', 'Fix leaks, clogs, and installations with our expert plumbing professionals.', Wrench],
  ['AC Services', 'AC installation, repair, and maintenance by certified technicians.', Snowflake],
  ['Cleaning Services', 'Deep cleaning, bathroom cleaning, kitchen cleaning, and more.', Sparkles],
  ['Painting Services', 'Give your home a fresh look with our professional painting services.', PaintRoller],
  ['Carpentry Services', 'Custom furniture, repairs, and woodwork by skilled carpenters.', Hammer],
  ['Pest Control', 'Safe and effective pest control solutions for a healthy home.', ShieldCheck],
  ['More Services', 'Explore more services tailored to your home needs.', Grid2X2]
] as const;

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" aria-label="ApnaServo home">
          <Image src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} priority />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link className={styles.active} href="/services">Services</Link>
          <Link href="/#contact">Support</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/service-slides/appliance-repair-clean.png"
          alt="ApnaServo professional servicing a home appliance"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <span>Guwahati Based Home Services</span>
          <h1>Our Services</h1>
          <p>Professional home services at your doorstep. From electrical repairs to deep cleaning, we&apos;ve got you covered.</p>
          <div className={styles.trust}>
            <span><BadgeCheck />Verified Professionals</span>
            <span><ShieldCheck />Transparent Pricing</span>
            <span><ShieldCheck />Secure &amp; Reliable</span>
            <span><Clock3 />On-time Service</span>
          </div>
        </div>
      </section>

      <section className={styles.grid} aria-label="Available services">
        {services.map(([title, text, Icon]) => (
          <article key={title}>
            <span><Icon aria-hidden="true" /></span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className={styles.appBanner}>
        <div className={styles.appCopy}>
          <span>Download the ApnaServo app</span>
          <h2>Home Services,<br />Just a Tap Away</h2>
          <p>Book, track and manage all your home services easily with the ApnaServo app.</p>
          <div className={styles.stores}>
            <a href="#download" aria-label="Get ApnaServo on Google Play">
              <Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} unoptimized />
            </a>
            <a href="#download" aria-label="Download ApnaServo on the App Store">
              <Image src="/app-store-badge.svg" alt="Download on the App Store" width={250} height={84} unoptimized />
            </a>
          </div>
        </div>
        <Image className={styles.phones} src="/home-app-preview-cutout.png" alt="ApnaServo mobile app screens" width={1448} height={1086} />
      </section>
      <LegalFooter />
    </main>
  );
}
