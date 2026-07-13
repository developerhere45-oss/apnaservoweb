import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  FileCheck2,
  FileText,
  Headphones,
  Mail,
  Phone,
  ReceiptText,
  ShieldCheck,
  Trash2,
  Users
} from 'lucide-react';
import { LegalFooter, LegalNav, contactDetails } from '../legal-pages';

export const metadata: Metadata = {
  title: 'Legal & Support | ApnaServo',
  description: 'ApnaServo policies, account help, and customer support in one place.'
};

const documents = [
  ['Privacy Policy', 'Learn how we collect, use, and protect your information.', '/privacy-policy', ShieldCheck],
  ['Terms & Conditions', 'Read the terms and conditions for using ApnaServo.', '/terms-and-conditions', FileText],
  ['Partner Terms', 'Terms and rules for our service partners.', '/partner-terms-and-conditions', Users],
  ['Refund Policy', 'Know about refunds, eligibility, and cancellation rules.', '/refund-policy', ReceiptText],
  ['Delete Account Policy', 'Learn how you can request to delete your account and data.', '/delete-account', Trash2],
  ['Support Center', 'Get help, contact support, or raise your queries.', '/contact-us', Headphones]
] as const;

export default function LegalSupportPage() {
  return (
    <main className="legalCleanPage legalOverviewPage">
      <LegalNav />

      <section className="legalOverviewHero">
        <div>
          <span><ShieldCheck size={15} /> Legal &amp; Support</span>
          <h1>Your trust, our priority.</h1>
          <p>Transparent policies and reliable support for a safe and trusted experience.</p>
        </div>
        <div className="legalShieldArt" aria-hidden="true">
          <i />
          <span><ShieldCheck size={82} /></span>
          <b><FileCheck2 size={44} /></b>
        </div>
      </section>

      <section className="legalDocuments">
        <div className="legalDocumentsHeading">
          <h2>Explore Legal Documents</h2>
          <p>All important policies and terms in one place.</p>
        </div>
        <div className="legalDocumentGrid">
          {documents.map(([title, description, href, Icon]) => (
            <Link href={href} className="legalDocumentCard" key={title}>
              <span><Icon size={25} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="legalHelpStrip">
        <div>
          <strong>Need Help?</strong>
          <p>Our support team is here for you.</p>
        </div>
        <Link href={`mailto:${contactDetails.email}`}>
          <Mail size={24} />
          <span><strong>Email Support</strong><small>{contactDetails.email}</small></span>
        </Link>
        <Link href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
          <Phone size={24} />
          <span><strong>Phone Support</strong><small>{contactDetails.phone}</small></span>
        </Link>
        <Link href="/contact-us">
          <Headphones size={24} />
          <span><strong>Support Center</strong><small>Open support options</small></span>
        </Link>
      </section>

      <LegalFooter />
    </main>
  );
}
