import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Handshake,
  Home,
  Lightbulb,
  MapPin,
  Target,
  Users
} from 'lucide-react';
import styles from './our-story.module.css';
import { absoluteUrl, siteUrl } from '../site';

export const metadata: Metadata = {
  title: 'Our Story | ApnaServo',
  description:
    'Learn how ApnaServo started from a simple late-night idea and grew into a mission to create trusted home services and meaningful opportunities for skilled professionals across India.',
  openGraph: {
    title: 'Our Story | ApnaServo',
    description:
      'How one late-night conversation became a mission to create opportunities.',
    type: 'website'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'ApnaServo',
  url: siteUrl,
  logo: absoluteUrl('/apnaservo-wordmark.png'),
  description:
    'A home services platform connecting customers with trusted professionals while creating sustainable work opportunities for skilled people.',
  founder: {
    '@type': 'Person',
    name: 'Dijendra Mallah',
    jobTitle: 'Founder'
  },
  member: {
    '@type': 'OrganizationRole',
    roleName: 'Co-Founder',
    member: {
      '@type': 'Person',
      name: 'Pinku Chetry',
      jobTitle: 'Co-Founder'
    }
  }
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story | ApnaServo',
  description:
    'How one late-night conversation became a mission to create opportunities.',
  mainEntity: organizationSchema
};

const partnerPrinciples = [
  ['Choose their own working hours', Clock3],
  ['Decide when to accept bookings', BriefcaseBusiness],
  ['Grow their business through technology', Target],
  ['Succeed together with ApnaServo', Handshake]
] as const;

export default function OurStoryPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className={styles.nav}>
        <Link className={styles.brand} href="/" aria-label="ApnaServo home">
          <Image
            src="/apnaservo-wordmark.png"
            alt="ApnaServo"
            width={969}
            height={257}
            priority
            sizes="170px"
          />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/contact-us">Support</Link>
        </nav>
        <Link className={styles.navCta} href="/contact-us">
          Contact <ArrowRight size={16} />
        </Link>
        <Link className={styles.menuButton} href="/" aria-label="Go to home" title="Home">
          <Home size={21} />
        </Link>
      </header>

      <section className={styles.hero}>
        <span className={styles.eyebrow}>The journey behind ApnaServo</span>
        <h1>Our Story</h1>
        <p>How one late-night conversation became a mission to create opportunities.</p>
        <div className={styles.heroLine} aria-hidden="true"><span /></div>
        <div className={styles.heroFacts} aria-label="The beginning of ApnaServo">
          <span><Clock3 size={18} /><b>2 AM</b> A late-night conversation</span>
          <span><MapPin size={18} /><b>Guwahati</b> A real, everyday problem</span>
          <span><Lightbulb size={18} /><b>One question</b> A much bigger idea</span>
        </div>
      </section>

      <section className={`${styles.storySection} ${styles.reveal}`}>
        <div className={styles.sectionIndex}>
          <span>01</span>
          <p>Where It All Started</p>
        </div>
        <div className={styles.storyCopy}>
          <h2>A small problem that refused to stay small.</h2>
          <p>
            ApnaServo was created by two friends: <strong>Dijendra Mallah, Founder</strong>, and{' '}
            <strong>Pinku Chetry, Co-Founder</strong>. At the time, we were PG mates, sharing the ordinary routines,
            uncertainties and ambitions that come with
            trying to build a future.
          </p>
          <p>
            One night, at around 2 AM, we were simply talking about life, work and what the future might hold.
            During that conversation, Pinku mentioned that the AC in our room had stopped working. We tried to find
            someone reliable who could repair it, but quickly discovered how difficult it was to find a trusted local
            professional at the moment we actually needed one.
          </p>
          <p>
            It was a small, everyday inconvenience. But instead of leaving it there, we began to look at the larger
            problem behind it: people need dependable help, skilled professionals need dependable work, and yet the
            two often struggle to find each other.
          </p>
          <blockquote>
            <span>“</span>
            What if finding trusted professionals could be as simple as ordering food online?
          </blockquote>
          <p>
            That single question became the foundation of ApnaServo.
          </p>
        </div>
      </section>

      <section className={`${styles.missionBand} ${styles.reveal}`}>
        <div className={styles.bandInner}>
          <div className={styles.bandHeading}>
            <span>02 / Our Mission</span>
            <h2>More Than Just a Home Service Platform</h2>
          </div>
          <div className={styles.bandCopy}>
            <p>
              ApnaServo is not only about booking an electrician, plumber or AC technician. Its real mission is
              creating opportunities. Instead of waiting for opportunities to come, we decided to build a platform
              that creates them for others.
            </p>
            <p>
              Across India, thousands of skilled professionals complete ITI courses, vocational training and technical
              education. Many have real talent and years of practical experience, but still struggle to find consistent,
              dignified work. ApnaServo exists to bridge that gap.
            </p>
          </div>
          <div className={styles.sharedGrowth}>
            <div><Users size={22} /><span>Customers get</span><strong>Verified professionals</strong></div>
            <div className={styles.growthMark}><ArrowRight size={24} /></div>
            <div><BriefcaseBusiness size={22} /><span>Professionals get</span><strong>Genuine work opportunities</strong></div>
          </div>
          <p className={styles.together}>Everyone grows together.</p>
        </div>
      </section>

      <section className={`${styles.beliefSection} ${styles.reveal}`} id="belief">
        <div className={styles.beliefLabel}><span>03</span> Our Belief</div>
        <div>
          <h2>Real change begins when we stop waiting for someone else to solve the problem.</h2>
          <p>
            As PG mates, Dijendra Mallah and Pinku Chetry saw these gaps closely in everyday life: finding reliable
            services was difficult, while capable professionals often lacked consistent opportunities. Instead of only
            talking about what was missing, we decided to take responsibility and build a practical solution ourselves.
          </p>
          <p>
            To us, entrepreneurship means solving real problems with patience and accountability. Our goal is not
            simply to build another startup, but to create trust, open meaningful opportunities for skilled people and
            make everyday life easier for the communities we serve.
          </p>
        </div>
      </section>

      <section className={`${styles.visionSection} ${styles.reveal}`}>
        <span>04 / Our Vision</span>
        <Target size={34} aria-hidden="true" />
        <h2>
          To become India&apos;s most trusted home service platform while creating sustainable income opportunities for
          millions of skilled professionals.
        </h2>
      </section>

      <section className={`${styles.cultureSection} ${styles.reveal}`}>
        <div className={styles.cultureIntro}>
          <span>05 / Our Culture</span>
          <h2>No Bosses.<br />Only Partners.</h2>
          <p>
            Every service professional on ApnaServo is an independent business owner. They are not employees working
            under a boss. Our technology is here to give them more choice, greater reach and a stronger path to growth.
          </p>
        </div>
        <div className={styles.principles}>
          {partnerPrinciples.map(([label, Icon], index) => (
            <div key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Icon size={23} />
              <p>{label}</p>
            </div>
          ))}
          <strong>ApnaServo succeeds only when our partners succeed.</strong>
        </div>
      </section>

      <section className={`${styles.founderMessage} ${styles.reveal}`}>
        <span>06 / A Message From The Founders</span>
        <blockquote>
          “We started ApnaServo with one simple belief — technology should make everyday life easier while creating
          opportunities for skilled people.
          <br /><br />
          This journey began with two friends sharing one conversation, but today it is becoming a community built on
          trust, quality and shared growth.
          <br /><br />
          We are only getting started.”
        </blockquote>
        <div className={styles.founderNames}>
          <p><strong>Dijendra Mallah</strong><span>, Founder</span></p>
          <p><strong>Pinku Chetry</strong><span>, Co-Founder</span></p>
        </div>
      </section>

      <section className={styles.closing}>
        <div>
          <span>The story continues</span>
          <h2>Built in Guwahati. Created for opportunity.</h2>
        </div>
        <Link href="/contact-us">Get in touch <ArrowRight size={18} /></Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/" aria-label="ApnaServo home">
          <Image src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} sizes="150px" />
        </Link>
        <p>Trusted home services. Meaningful opportunities. Shared growth.</p>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>
      </footer>
    </main>
  );
}
