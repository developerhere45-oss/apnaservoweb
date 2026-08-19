import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, MapPin } from 'lucide-react';
import { LegalFooter } from '../../legal-pages';
import { absoluteUrl, siteUrl } from '../../site';
import { findServicePage, servicePages } from '../../service-data';
import styles from '../services.module.css';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findServicePage((await params).slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { title: `${service.name} | ApnaServo`, description: service.description, url, type: 'website', images: [{ url: '/service-slides/appliance-repair-clean.png', width: 1200, height: 800, alt: service.name }] }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = findServicePage((await params).slug);
  if (!service) notFound();
  const url = absoluteUrl(`/services/${service.slug}`);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description,
    url, provider: { '@type': 'Organization', name: 'ApnaServo', url: siteUrl },
    areaServed: { '@type': 'City', name: 'Guwahati', containedInPlace: { '@type': 'State', name: 'Assam' } },
    serviceType: service.shortName
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };

  return <main className={styles.detailPage}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <header className={styles.nav}><Link href="/" aria-label="ApnaServo home">ApnaServo</Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link className={styles.active} href="/services">Services</Link><Link href="/contact-us">Support</Link></nav></header>
    <section className={styles.detailHero}>
      <p className={styles.breadcrumb}><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {service.shortName}</p>
      <span><MapPin size={16} /> Guwahati, Assam</span>
      <h1>{service.name}</h1>
      <p>{service.details}</p>
      <Link className={styles.detailCta} href="/#waitlist">Get launch updates</Link>
    </section>
    <section className={styles.detailContent}>
      <div><h2>{service.shortName} for homes in Guwahati</h2><p>ApnaServo is building a simple way to find and manage reliable home services. Launch availability may vary by locality.</p><ul>{service.services.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div>
      <aside><h2>Looking for another service?</h2>{servicePages.filter((item) => item.slug !== service.slug).slice(0, 4).map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.shortName} in Guwahati →</Link>)}</aside>
    </section>
    <section className={styles.faq}><h2>Frequently asked questions</h2>{service.faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</section>
    <LegalFooter />
  </main>;
}
