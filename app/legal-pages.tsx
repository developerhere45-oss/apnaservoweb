import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  ShieldCheck
} from 'lucide-react';

type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
  cta?: {
    title: string;
    text: string;
    href: string;
    label: string;
  };
};

const legalLinks = [
  ['Legal & Support', '/legal-support'],
  ['Privacy Policy', '/privacy-policy'],
  ['Terms & Conditions', '/terms-and-conditions'],
  ['Partner Terms', '/partner-terms-and-conditions'],
  ['Refund Policy', '/refund-policy'],
  ['Delete Account', '/delete-account'],
  ['Contact Us', '/contact-us']
] as const;

export const contactDetails = {
  email: 'apnaservo@gmail.com',
  phone: '+91 9365821434',
  location: 'Guwahati, Assam, India'
};

export function LegalPage({ eyebrow, title, intro, updated = 'June 8, 2026', sections, cta }: LegalPageProps) {
  return (
    <main className="legalCleanPage">
      <LegalNav />

      <section className="legalCleanHero">
        <div className="legalBreadcrumb">
          <Link href="/legal-support">Legal &amp; Support</Link>
          <span>›</span>
          <b>{eyebrow}</b>
        </div>
        <h1>{title}</h1>
        <small>Last updated: {updated}</small>
        <p>{intro}</p>
      </section>

      <section className="legalCleanLayout">
        <aside className="legalCleanToc" aria-label="On this page">
          <strong>On this page</strong>
          <nav>
            {sections.map((section, index) => (
              <a className={index === 0 ? 'active' : ''} href={`#legal-section-${index + 1}`} key={section.title}>
                {index + 1}. {section.title}
              </a>
            ))}
            {cta ? <a href="#legal-action">{sections.length + 1}. Support</a> : null}
          </nav>
        </aside>

        <div className="legalCleanContent">
          {sections.map((section, index) => (
            <details className="legalCleanSection" id={`legal-section-${index + 1}`} open={index === 0} key={section.title}>
              <summary>
                <span>{index + 1}. {section.title}</span>
                <ChevronDown size={19} />
              </summary>
              <div>
                {section.body ? <p>{section.body}</p> : null}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}

          {cta ? (
            <article className="legalCleanCta" id="legal-action">
              <div>
                <h2>{cta.title}</h2>
                <p>{cta.text}</p>
              </div>
              <Link href={cta.href}>{cta.label}</Link>
            </article>
          ) : null}
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}

export function LegalNav() {
  return (
    <header className="legalCleanNav">
      <Link className="brand" href="/">
        <Image className="brandLogo" src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} sizes="170px" />
      </Link>
      <nav aria-label="Legal navigation">
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/our-story">Our Story</Link>
        <Link href="/#launch">Launch</Link>
        <Link href="/contact-us">Contact</Link>
      </nav>
      <Link className="legalCleanNavCta" href="/contact-us">Contact</Link>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="legalCleanFooter">
      <div>
        <Link className="brand" href="/">
          <Image className="brandLogo" src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} sizes="170px" />
        </Link>
        <p>Guwahati-based home services with transparent policies and dependable human support.</p>
      </div>
      <div>
        <h4>Legal</h4>
        {legalLinks.slice(0, 6).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </div>
      <div>
        <h4>Contact</h4>
        <Link href={`mailto:${contactDetails.email}`}><Mail size={14} /> {contactDetails.email}</Link>
        <Link href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}><Phone size={14} /> {contactDetails.phone}</Link>
        <span><MapPin size={14} /> {contactDetails.location}</span>
      </div>
      <ShieldCheck className="legalFooterMark" size={42} />
    </footer>
  );
}
