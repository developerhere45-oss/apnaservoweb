import Image from 'next/image';
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

const services = [
  {
    title: 'Electrical Services',
    text: 'From wiring to repair, get safe and reliable electrical solutions for your home.',
    icon: Zap
  },
  {
    title: 'Plumbing Services',
    text: 'Fix leaks, clogs, and installations with our expert plumbing professionals.',
    icon: Wrench
  },
  {
    title: 'AC Services',
    text: 'AC installation, repair, and maintenance by certified technicians.',
    icon: Snowflake
  },
  {
    title: 'Cleaning Services',
    text: 'Deep cleaning, bathroom cleaning, kitchen cleaning, and more.',
    icon: Sparkles
  },
  {
    title: 'Painting Services',
    text: 'Give your home a fresh look with our professional painting services.',
    icon: PaintRoller
  },
  {
    title: 'Carpentry Services',
    text: 'Custom furniture, repairs, and woodwork by skilled carpenters.',
    icon: Hammer
  },
  {
    title: 'Pest Control',
    text: 'Safe and effective pest control solutions for a healthy home.',
    icon: ShieldCheck
  },
  {
    title: 'More Services',
    text: 'Explore more services tailored to your home needs.',
    icon: Grid2X2
  }
] as const;

export default function ServiceCarousel() {
  return (
    <section className="serviceReference" id="services" aria-labelledby="services-title">
      <span className="anchorTarget" id="commercial" />

      <div className="serviceReferenceHero">
        <Image
          className="serviceReferenceHeroImage"
          src="/service-slides/appliance-repair-clean.png"
          alt="ApnaServo professional servicing a home appliance"
          fill
          sizes="100vw"
        />
        <div className="serviceReferenceHeroShade" />
        <div className="serviceReferenceHeroCopy">
          <span className="serviceReferenceEyebrow">Guwahati Based Home Services</span>
          <h2 id="services-title">Our Services</h2>
          <p>
            Professional home services at your doorstep. From electrical repairs to deep cleaning,
            we&apos;ve got you covered.
          </p>
          <div className="serviceReferenceTrust" aria-label="Service guarantees">
            <span><BadgeCheck />Verified Professionals</span>
            <span><ShieldCheck />Transparent Pricing</span>
            <span><ShieldCheck />Secure &amp; Reliable</span>
            <span><Clock3 />On-time Service</span>
          </div>
        </div>
      </div>

      <div className="serviceReferenceGrid">
        {services.map(({ title, text, icon: Icon }) => (
          <article key={title}>
            <span><Icon aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="serviceReferenceApp">
        <div className="serviceReferenceAppCopy">
          <span>Download the ApnaServo app</span>
          <h2>Home Services,<br />Just a Tap Away</h2>
          <p>Book, track and manage all your home services easily with the ApnaServo app.</p>
          <div className="serviceReferenceStores">
            <a href="#contact" aria-label="Get ApnaServo on Google Play">
              <Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} unoptimized />
            </a>
            <a href="#contact" aria-label="Download ApnaServo on the App Store">
              <Image src="/app-store-badge.svg" alt="Download on the App Store" width={250} height={84} unoptimized />
            </a>
          </div>
        </div>
        <Image
          className="serviceReferencePhones"
          src="/home-app-preview-cutout.png"
          alt="ApnaServo mobile app screens"
          width={1448}
          height={1086}
          sizes="(max-width: 767px) 58vw, 430px"
        />
      </div>
    </section>
  );
}
