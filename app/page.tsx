import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import type { CSSProperties } from 'react';
import {
  AirVent,
  BadgeCheck,
  BellRing,
  Bolt,
  Brush,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  ChartPie,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Droplets,
  Eye,
  FileCheck2,
  Gift,
  Hammer,
  Headset,
  HeartHandshake,
  Home,
  IndianRupee,
  LayoutGrid,
  LifeBuoy,
  LockKeyhole,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  Navigation,
  PaintRoller,
  Phone,
  ReceiptIndianRupee,
  ReceiptText,
  Rocket,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Snowflake,
  Smartphone,
  Sparkles,
  Star,
  Send,
  UserCheck,
  WalletCards,
  Wrench,
  X,
  Zap,
  type LucideIcon
} from 'lucide-react';
import WaitlistSignupForm from './WaitlistSignupForm';
import ServiceCarousel from './ServiceCarousel';
import { absoluteUrl, siteUrl } from './site';

const features: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: 'Verified Professionals', text: 'Identity-checked experts with transparent profiles and service-ready onboarding.', icon: ShieldCheck },
  { title: 'Live Visit Tracking', text: 'Know when your pro accepts, starts moving, arrives, and completes the task.', icon: Clock3 },
  { title: 'Three-Tap Booking', text: 'Choose a service, pick a slot, and confirm without back-and-forth calls.', icon: BellRing },
  { title: 'In-App Chat & Calls', text: 'Coordinate details without exposing unnecessary personal information.', icon: MessageCircle },
  { title: 'Clear Estimates', text: 'Upfront ranges and job summaries keep every booking easy to understand.', icon: CircleDollarSign },
  { title: 'Service Assurance', text: 'Post-service support and quality checks for a smoother home care experience.', icon: ShieldCheck }
];

const launchTrustFeatures: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: '100+',
    text: 'Verified Professionals',
    icon: Star
  },
  {
    title: 'Guwahati',
    text: 'Local Service Coverage',
    icon: MapPin
  },
  {
    title: '< 30 mins',
    text: 'Average Response Time',
    icon: Clock3
  },
  {
    title: '100%',
    text: 'Background-Verified Experts',
    icon: ShieldCheck
  }
];

const mobileFeatures: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: 'Verified Professionals', text: 'Identity-checked experts with transparent profiles and service-ready onboarding.', icon: ShieldCheck },
  { title: 'Live Visit Tracking', text: 'Know when your pro accepts, starts moving, arrives, and completes the task.', icon: Clock3 },
  { title: 'Three-Tap Booking', text: 'Choose a service, pick a slot, and confirm without back-and-forth calls.', icon: BellRing },
  { title: 'In-App Chat & Calls', text: 'Coordinate details without exposing unnecessary personal information.', icon: MessageCircle },
  { title: 'Clear Estimates', text: 'Upfront ranges and job summaries keep every booking easy to understand.', icon: CircleDollarSign },
  { title: 'Service Assurance', text: 'Post-service support and quality checks for a smoother home care experience.', icon: ShieldCheck }
];

const howSteps = [
  ['1', 'Select a Service', 'Choose the home service you need from ApnaServo categories.', LayoutGrid],
  ['2', 'Check Service Availability', 'We validate serviceability after you select your location.', MapPin],
  ['3', 'Discuss Requirements via Chat or Call', 'Share photos, explain the issue, and confirm job details directly.', MessageCircle],
  ['4', 'Receive Quotation', 'Get a clear estimate before confirming the booking.', ReceiptIndianRupee],
  ['5', 'Confirm Booking', 'Approve the quotation and lock the service schedule.', CalendarCheck2],
  ['6', 'Service Completed', 'The professional completes the job with ApnaServo support behind it.', ShieldCheck]
] as const;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'ApnaServo',
  url: siteUrl,
  logo: absoluteUrl('/apnaservo-wordmark.png'),
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

const trustPoints: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: 'Verified Professionals', text: 'Only skilled and verified experts for every home service.', icon: BadgeCheck },
  { title: 'Face Verification', text: 'Professionals go through guided identity verification.', icon: UserCheck },
  { title: 'Background Checks', text: 'Strict checks for safer visits and peace of mind.', icon: ShieldCheck },
  { title: 'Direct Communication', text: 'Talk directly with experts, anytime and anywhere.', icon: MessageCircle },
  { title: 'Affordable Pricing', text: 'Transparent and fair pricing with no hidden surprises.', icon: CircleDollarSign },
  { title: 'Service Support', text: 'Dedicated support that stays with you from request to completion.', icon: HeartHandshake }
];

function App() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Header />
      <main>
        <Hero />
        <LaunchTrustGrid />
        <AppDownloadShowcase />
        <ServiceCarousel />
        <VerificationProcess />
        <AssamSection />
      </main>
      <Footer />
    </div>
  );
}

function AppDownloadShowcase() {
  return (
    <section className="appDownloadShowcase" aria-labelledby="app-download-title">
      <div className="appDownloadCopy">
        <span className="appDownloadEyebrow">The ApnaServo app</span>
        <h2 id="app-download-title">Home services, one tap away.</h2>
        <p>Book trusted professionals, manage every visit, and get dependable support—all from one simple app.</p>
        <div className="appDownloadBenefits" aria-label="App benefits">
          <span><Zap size={20} />Instant booking</span>
          <span><MapPin size={20} />Service updates</span>
          <span><ShieldCheck size={20} />Secure experience</span>
        </div>
        <div className="appDownloadStores">
          <a href="#contact" aria-label="Get ApnaServo on Google Play">
            <Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={192} unoptimized />
          </a>
          <a href="#contact" aria-label="Download ApnaServo on the App Store">
            <Image src="/app-store-badge.svg" alt="Download on the App Store" width={250} height={84} unoptimized />
          </a>
        </div>
        <div className="appDownloadProof"><span>★★★★★</span> Made for homes across Guwahati</div>
      </div>
      <div className="appDownloadVisual">
        <span className="appDownloadGlow" aria-hidden="true" />
        <Image
          src="/home-app-preview-cutout.png"
          alt="Real ApnaServo app home screen and booking confirmation preview"
          width={1448}
          height={1086}
          sizes="(max-width: 767px) 92vw, 52vw"
          priority
        />
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#home" aria-label="ApnaServo home">
        <Image className="brandLogo" src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} priority sizes="154px" />
      </a>
      <nav className="navLinks" aria-label="Main navigation">
        <a href="#home">Home</a>
        <Link href="/services">Services</Link>
        <a href="#contact">Support</a>
      </nav>
      <MobileNavigation />
    </header>
  );
}

function Hero() {
  return (
    <section className="hero heroWithVideo" id="home">
      <span className="anchorTarget" id="track" />
      <div className="heroVideoLayer" aria-hidden="true">
        <video className="heroVideoSharp" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture disableRemotePlayback controlsList="nodownload nofullscreen noremoteplayback" tabIndex={-1}>
          <source src="/home-services-hero.mp4" type="video/mp4" />
        </video>
        <span className="heroVideoOverlay" />
      </div>
      <div className="heroCopy">
        <span className="eyebrow"><MapPin size={14} /> Guwahati-based home services</span>
        <h1>
          <span>Guwahati&apos;s</span>
          <span className="heroAccent">Home Service</span>
          <span>Platform</span>
        </h1>
        <h1 className="mobileHeroTitle" aria-hidden="true">
          <span>Guwahati&apos;s</span>
          <span><b>Home</b> Service</span>
          <span>Platform</span>
        </h1>
        <p>
          Reliable home care from trusted local professionals, with simple booking, transparent service, and support you can count on.
        </p>
        <div className="heroActions">
          <a className="secondaryBtn rippleBtn" href="#services">Explore Services <ChevronRight size={17} /></a>
        </div>
        <div className="heroTrustStrip">
          <span><LockKeyhole size={17} /> Secure Platform</span>
          <span><BadgeCheck size={17} /> Verified Professionals</span>
          <span><Headset size={17} /> Dedicated Support</span>
          <span><MapPin size={17} /> Local Guwahati Team</span>
        </div>
        <p className="mobileHeroSupport">Be the first to experience hassle-free home services in Guwahati.</p>
      </div>
    </section>
  );
}

function LaunchTrustGrid() {
  return (
    <section className="launchTrustGrid" aria-label="ApnaServo launch trust features">
      {launchTrustFeatures.map(({ title, text, icon: Icon }) => (
        <article className="launchTrustCard" key={title}>
          <span><Icon size={24} /></span>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="howHeader">
        <span><Sparkles size={15} /> How it works <Sparkles size={15} /></span>
        <h2>How ApnaServo Works</h2>
        <p>Simple, transparent and hassle-free. Get your home service in just 6 easy steps.</p>
      </div>
      <div className="stepsGrid">
        {howSteps.map(([number, title, text, Icon]) => (
          <article className="stepCard" key={title} style={{ '--step-index': Number(number) - 1 } as CSSProperties}>
            <span className="stepIcon"><Icon size={37} strokeWidth={1.8} /></span>
            <div className="stepContent">
              <div className="stepTitleRow"><span className="stepNumber">{number}</span><h3>{title}</h3></div>
              <span className="stepRule" aria-hidden="true" />
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="availabilityNote">
        Service availability may vary by location. If your selected location is not supported, ApnaServo will show: “ApnaServo is not available in your area yet. We are expanding across Guwahati and will be there soon.”
      </p>
    </section>
  );
}

function MobileFeatures() {
  return (
    <section className="section mobileFeaturesOnly" id="mobile-features">
      <SectionTitle eyebrow="Features" title="Everything feels simple, transparent, and local." />
      <div className="mobileFeatureGrid">
        {mobileFeatures.map(({ title, text, icon: Icon }) => (
          <article className="feature" key={title}>
            <span><Icon size={25} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section premiumWhy" id="why">
      <div className="whyUnifiedShell">
        <div className="whyGlow whyGlowA" />
        <div className="whyGlow whyGlowB" />
        <div className="whyPanel">
          <span className="pillEyebrow"><Star size={14} /> Why Choose ApnaServo</span>
          <h2>Why Homeowners Trust ApnaServo</h2>
          <p className="whyLead">
            A premium local service experience built around verified professionals, transparent communication, clear estimates, and dependable support for everyday homes.
          </p>
          <div className="compareShell">
            <div className="compareCard muted">
              <h3>Traditional Booking</h3>
              {['Unverified contacts', 'No live status', 'Unclear pricing', 'Limited support'].map((item) => (
                <p key={item}><X size={16} /> {item}</p>
              ))}
            </div>
            <div className="versus">VS</div>
            <div className="compareCard">
              <h3>ApnaServo</h3>
              {['Verified experts', 'Real-time tracking', 'Clear estimates', 'Chat & support'].map((item) => (
                <p key={item}><Check size={16} /> {item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="featurePanel" id="features">
          <span className="pillEyebrow"><ShieldCheck size={14} /> Built for trust</span>
          <h2>Professional service, without the uncertainty.</h2>
          <div className="verificationList">
            {[
              ['Background Verification', ShieldCheck],
              ['Face Verification', UserCheck],
              ['Police Verification (where available)', FileCheck2],
              ['Real-time Tracking', Navigation],
              ['Direct Support', Headset],
              ['Service Warranty', BadgeCheck]
            ].map(([title, icon]) => {
              const Icon = icon as LucideIcon;
              return (
                <article key={title as string}>
                  <span><Icon size={22} /></span>
                  <div>
                    <h3>{title as string}</h3>
                    <p>Clear checks and support designed for safer home visits.</p>
                  </div>
                  <Check size={18} />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssamSection() {
  return (
    <section className="assam assamBackdrop section" id="launch" aria-label="Assam skyline with Rang Ghar, Saraighat Bridge, river, hills, birds and a rhino">
      <div className="assamCopy">
        <span className="eyebrow"><Rocket size={14} /> Launching soon</span>
        <h2>Launching Soon<br />In <span>Guwahati.</span></h2>
        <p>Starting with selected areas and expanding with a verified local partner network.</p>
      </div>
    </section>
  );
}

function PartnerSection() {
  const partnerFeatures: Array<{ title: string; text: string; icon: LucideIcon }> = [
    { title: 'Earn up to ₹50,000+/month', text: 'Grow your income with more verified local jobs.', icon: IndianRupee },
    { title: 'Verified Jobs', text: 'Receive genuine requests from serviceable areas.', icon: BadgeCheck },
    { title: 'Partner App Access', text: 'Manage jobs, earnings and availability in one place.', icon: Smartphone },
    { title: 'Fast Approval', text: 'Simple onboarding with guided document verification.', icon: Bolt },
    { title: 'Local Leads', text: 'Connect with customers around your active service zone.', icon: MapPin }
  ];

  const partnerMetrics = [
    'No joining fee',
    'Flexible schedule',
    'Direct support',
    'Weekly earnings view'
  ];

  return (
    <section className="partner section" id="partner">
      <div className="partnerBlob partnerBlobOne" />
      <div className="partnerBlob partnerBlobTwo" />
      <span className="partnerSpark sparkOne" />
      <span className="partnerSpark sparkTwo" />
      <span className="partnerSpark sparkThree" />
      <div className="partnerCopy">
        <span className="eyebrow partnerBadge"><Wrench size={15} /> Become a service partner</span>
        <h2 className="desktopPartnerTitle">Build your business with <span>local, verified jobs.</span></h2>
        <h2 className="mobilePartnerTitle" aria-hidden="true"><span>Build your business</span><span>with <em>local, verified jobs.</em></span></h2>
        <p>Join ApnaServo, manage requests from the partner app and grow with customers across Guwahati.</p>
        <a className="primaryBtn rippleBtn" href="#contact">Become A Partner <ChevronRight size={18} /></a>
        <div className="partnerMetrics" aria-label="Partner benefits">
          {partnerMetrics.map((metric) => (
            <span key={metric}><Check size={17} /> {metric}</span>
          ))}
        </div>
      </div>
      <div className="partnerPanel">
        <div className="partnerAppMockup" aria-label="ApnaServo partner app preview">
          <PartnerEarningsScreen />
        </div>
        <div className="partnerList">
          {partnerFeatures.map(({ title, text, icon: Icon }) => (
            <article className="partnerFeature" key={title}>
              <span><Icon size={26} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerEarningsScreen() {
  return (
    <div className="partnerEarningsScreen" aria-label="Partner earnings dashboard">
          <div className="earningsPhoneHead">
            <Menu size={20} />
            <div><strong>Earnings</strong><small>Track your income</small></div>
            <BellRing size={20} />
          </div>
          <div className="earningsTabs"><span>Today</span><b>Week</b><span>Month</span></div>
          <div className="weeklyEarningsCard">
            <div className="weeklyEarningsTop">
              <div><small>Wallet · Weekly Earnings</small><strong>₹8,540</strong></div>
              <span><WalletCards size={22} /></span>
            </div>
            <p>18 completed jobs this week</p>
            <em>↑ 12.5% higher than last week</em>
            <div className="earningsChart" aria-label="Weekly earnings graph">
              <svg viewBox="0 0 320 92" role="img" aria-label="Earnings rising from Monday to Sunday">
                <path d="M10 70 L60 58 L110 52 L160 59 L210 42 L260 32 L310 20" />
                {[['10','70'],['60','58'],['110','52'],['160','59'],['210','42'],['260','32'],['310','20']].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />)}
              </svg>
              <div><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            </div>
          </div>
          <div className="earningsBreakdown">
            <h3><ChartPie size={17} /> Earnings Breakdown</h3>
            <div><span><BriefcaseBusiness size={15} /><b>Completed Orders<small>18 Jobs</small></b></span><strong>₹6,840</strong></div>
            <div><span><Star size={15} /><b>Incentives<small>Performance &amp; offers</small></b></span><strong>₹1,200</strong></div>
            <div><span><CircleDollarSign size={15} /><b>Tips<small>From happy customers</small></b></span><strong>₹500</strong></div>
            <footer><b>Total Earnings</b><strong>₹8,540</strong></footer>
          </div>
          <div className="earningsTransactions">
            <h3><ReceiptText size={17} /> Transactions <span>View All</span></h3>
            <div><BriefcaseBusiness size={15} /><p><b>Electrical Wiring - Rajesh Kumar</b><small>Completed · 25 May, 10:30 AM</small></p><strong>+ ₹850</strong></div>
            <div><BriefcaseBusiness size={15} /><p><b>Fan Installation - Suresh Patel</b><small>Completed · 25 May, 09:45 AM</small></p><strong>+ ₹450</strong></div>
            <div><Star size={15} /><p><b>Weekend Incentive</b><small>24 May, 2025</small></p><strong>+ ₹300</strong></div>
          </div>
          <div className="earningsBottomNav">
            <span><Home size={17} />Home</span><span><CalendarCheck2 size={17} />Bookings</span><b><WalletCards size={17} />Earnings</b><span><UserCheck size={17} />Profile</span>
          </div>
    </div>
  );
}

function VerificationProcess() {
  const steps = [
    {
      title: 'Apply',
      image: '/verification-steps/apply.png',
      alt: 'Illustration of applying to become an ApnaServo service partner'
    },
    {
      title: 'Document Verification',
      image: '/verification-steps/document-verification.png',
      alt: 'Illustration of document verification for an ApnaServo service partner'
    },
    {
      title: 'Manual Approval',
      image: '/verification-steps/manual-approval.png',
      alt: 'Illustration of manual partner approval'
    },
    {
      title: 'Live On Platform',
      image: '/verification-steps/live-on-platform.png',
      alt: 'Illustration of a service partner going live on the ApnaServo platform'
    }
  ] as const;

  return (
    <section className="section verificationProcess" id="verification">
      <SectionTitle eyebrow="Partner verification" title="Every professional earns their place." />
      <div className="processTrack">
        {steps.map(({ title, image, alt }, index) => (
          <article key={title}>
            <span className="verificationStepImage"><Image src={image} alt={alt} width={1536} height={1024} sizes="(max-width: 767px) 68px, 260px" /></span>
            <small>Step {index + 1}</small>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section className="waitlist" id="waitlist">
      <div className="launchGlow one" />
      <div className="launchGlow two" />
      <div className="launchGlow three" />
      <div className="launchCopy">
        <span className="launchPill"><BellRing size={18} /> Join the launch</span>
        <h2 className="desktopLaunchTitle">Be first when ApnaServo goes live.</h2>
        <h2 className="mobileLaunchTitle" aria-hidden="true"><span>Be first when</span><span>ApnaServo</span><span>goes <b>live.</b></span></h2>
        <p>Get launch updates, early access and priority service availability in your area.</p>
        <div className="storeRow">
          <span><b>▶</b><i>Coming soon to</i>Google Play</span>
          <span><b></b><i>Coming soon to</i>App Store</span>
        </div>
      </div>
      <WaitlistSignupForm />
      <div className="waitMobileDivider" aria-hidden="true"><span>✦</span></div>
      <div className="waitMobileProof">
        <div className="miniFaces" aria-hidden="true">
          <span>A</span><span>P</span><span>S</span><span>G</span><b>AS</b>
        </div>
        <p><strong>Launching in Guwahati</strong><span>selected areas first</span></p>
      </div>
      <div className="rewardScene" aria-label="Waitlist benefits">
        <div className="rewardOrb">
          <Image src="/waitlist-gift.png" alt="" width={900} height={900} sizes="(max-width: 767px) 132px, 190px" unoptimized />
        </div>
        <div className="rewardList">
          <span><Gift size={18} /> Early Access</span>
          <span><Star size={18} /> Exclusive Offers</span>
          <span><Zap size={18} /> Priority Launch Access</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerBrand">
        <a className="brand" href="#home"><Image className="brandLogo" src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} sizes="154px" /></a>
        <p>Guwahati-based home services platform connecting households with trusted local professionals in selected serviceable areas.</p>
        <div className="footerStores footerStoresDesktop">
          <a href="#contact" aria-label="Get ApnaServo on Google Play"><Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={192} unoptimized /></a>
          <a href="#contact" aria-label="Download ApnaServo on the App Store"><Image src="/app-store-badge.svg" alt="Download on the App Store" width={250} height={84} unoptimized /></a>
        </div>
        <div className="footerStoresMobile">
          <a href="#contact" aria-label="Contact ApnaServo"><Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={192} unoptimized /></a>
          <a href="#contact" aria-label="Contact ApnaServo"><Image src="/app-store-badge.svg" alt="Download on the App Store" width={250} height={84} unoptimized /></a>
        </div>
        <div className="socials"><Send size={18} /><Mail size={18} /><Phone size={18} /></div>
        <div className="mobileSocials">
          <a href="mailto:support@apnaservo.com?subject=ApnaServo%20Enquiry" aria-label="Send a message"><Send size={23} /></a>
          <a href="mailto:support@apnaservo.com" aria-label="Email ApnaServo"><Mail size={23} /></a>
          <a href="tel:+916001794902" aria-label="Call ApnaServo"><Phone size={23} /></a>
        </div>
      </div>
      <div className="footerColumn footerExplore">
        <h4><Navigation className="footerHeadingIcon" size={23} /> Explore</h4>
        <a className="exploreHome" href="#home">Home</a>
        <Link className="desktopStoryLink exploreStory" href="/our-story">Our Story</Link>
        <a className="exploreServices" href="#services">Services</a>
        <a className="exploreAreas" href="#launch">Service Areas</a>
        <a className="exploreBusiness" href="#commercial">Business Services</a>
      </div>
      <div className="footerColumn footerSupport">
        <h4><Headset className="footerHeadingIcon" size={23} /> Support</h4>
        <Link href="/contact-us">Emergency Support</Link>
        <Link href="/legal-support">Legal & Support</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms & Conditions</Link>
      </div>
      <div className="footerContact">
        <span className="mobileContactIcon" aria-hidden="true"><UserCheck size={34} /></span>
        <div className="footerContactCopy">
          <h4>Contact</h4>
          <a href="mailto:support@apnaservo.com"><Mail size={17} /> support@apnaservo.com</a>
          <a href="tel:+916001794902"><Phone size={17} /> +91 6001794902</a>
          <span><MapPin size={17} /> Guwahati, Assam</span>
          <Link className="desktopBusinessLink" href="/contact-us">Business enquiries</Link>
        </div>
      </div>
      <div className="footerBottomDivider" aria-hidden="true"><span>✦</span></div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, align = 'center' }: { eyebrow: string; title: string; align?: 'center' | 'left' }) {
  return (
    <div className={`sectionTitle ${align}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
