import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Send
} from 'lucide-react';
import { LegalFooter, LegalNav, contactDetails } from '../legal-pages';

export const metadata: Metadata = {
  title: 'Support Center | ApnaServo',
  description: 'Contact ApnaServo support for account, policy, service, and partner questions.'
};

const supportOptions = [
  ['Email Support', contactDetails.email, 'We usually reply within 24 hours.', `mailto:${contactDetails.email}`, 'Send Email', Mail],
  ['Phone Support', contactDetails.phone, 'Mon - Sat | 9 AM - 8 PM', `tel:${contactDetails.phone.replace(/\s/g, '')}`, 'Call Now', Phone],
  ['Chat Support', 'Chat with our team', 'Available during support hours.', `mailto:${contactDetails.email}?subject=Chat%20Support`, 'Start Chat', MessageCircle],
  ['WhatsApp Support', 'Quick support on WhatsApp', 'Share only relevant support details.', 'https://wa.me/916001794902', 'Chat on WhatsApp', Send]
] as const;

const faqs = [
  'How can I book a service?',
  'How can I check service availability?',
  'How do I delete my account?',
  'How can a professional join ApnaServo?'
];

export default function ContactUsPage() {
  return (
    <main className="legalCleanPage supportCenterPage">
      <LegalNav />

      <section className="supportCenterHero">
        <div>
          <div className="legalBreadcrumb"><Link href="/legal-support">Legal &amp; Support</Link><span>›</span><b>Support Center</b></div>
          <h1>Support Center</h1>
          <p>We&apos;re here to help you. Choose the best way to reach us or find answers to common questions.</p>
        </div>
        <div className="supportHeadsetArt" aria-hidden="true">
          <Headphones size={110} />
          <Mail size={34} />
          <span>?</span>
        </div>
      </section>

      <section className="supportOptionGrid">
        {supportOptions.map(([title, value, text, href, action, Icon]) => (
          <article key={title}>
            <Icon size={30} />
            <h2>{title}</h2>
            <strong>{value}</strong>
            <p>{text}</p>
            <Link href={href}>{action}</Link>
          </article>
        ))}
      </section>

      <section className="supportFaqSection">
        <div><h2>Frequently Asked Questions</h2><Link href="/legal-support">View all FAQs →</Link></div>
        {faqs.map((faq) => (
          <details key={faq}>
            <summary><span>{faq}</span><Search size={17} /></summary>
            <p>Contact our support team with your registered phone number or email, and we&apos;ll guide you through the correct steps.</p>
          </details>
        ))}
      </section>

      <LegalFooter />
    </main>
  );
}
