'use client';

import Image from 'next/image';
import { BadgeCheck, CalendarClock, ChevronLeft, ChevronRight, ShieldCheck, Timer } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/service-slides/electrician.png',
    label: 'Electrician',
    alt: 'ApnaServo electrician service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '78% center',
    title: 'Reliable repairs.',
    highlight: 'Safe electrical care.',
    description: 'Verified electricians for quick, careful repairs and installations at your doorstep.',
    cta: 'Explore electrician services',
    benefits: ['Verified experts', 'Safe diagnostics', 'Clear estimates', 'On-time service']
  },
  {
    src: '/service-slides/plumbing.png',
    label: 'Plumbing',
    alt: 'ApnaServo plumbing service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '74% center',
    title: 'Trusted skills.',
    highlight: 'Reliable plumbing.',
    description: 'Get clean, dependable plumbing support for repairs, fittings, and everyday home needs.',
    cta: 'Explore plumbing services',
    benefits: ['Local plumbers', 'Quality tools', 'Transparent pricing', 'Quick support']
  },
  {
    src: '/service-slides/ac-repair.png',
    label: 'AC Repair',
    alt: 'ApnaServo AC repair service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center',
    title: 'Trusted cooling.',
    highlight: 'Reliable AC repair.',
    description: 'Keep your home comfortable with professional AC service, repair, and maintenance.',
    cta: 'Explore AC repair services',
    benefits: ['Trained technicians', 'Careful servicing', 'Clear quotes', 'Fast visits']
  },
  {
    src: '/service-slides/carpentry.png',
    label: 'Carpentry',
    alt: 'ApnaServo carpentry service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center',
    title: 'Skilled hands.',
    highlight: 'Reliable carpentry.',
    description: 'From repairs to custom work, find practical carpentry help for the details that matter.',
    cta: 'Explore carpentry services',
    benefits: ['Skilled partners', 'Quality materials', 'Precise work', 'Timely delivery']
  },
  {
    src: '/service-slides/painting.png',
    label: 'Painting',
    alt: 'ApnaServo painting service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '75% center',
    title: 'Smooth finish.',
    highlight: 'Professional painting.',
    description: 'Refresh your space with careful painting service and a finish you can feel good about.',
    cta: 'Explore painting services',
    benefits: ['Clean preparation', 'Trusted painters', 'Quality finish', 'On-time service']
  },
  {
    src: '/service-slides/interior-design.png',
    label: 'Interior Design',
    alt: 'ApnaServo interior design service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '73% center',
    title: 'Smart spaces.',
    highlight: 'Professional interior design.',
    description: 'Make every room feel more personal with thoughtful interior support for your home.',
    cta: 'Explore interior services',
    benefits: ['Personalized design', 'Space planning', 'Premium quality', 'End-to-end support']
  },
  {
    src: '/service-slides/home-cleaning.png',
    label: 'Home Cleaning',
    alt: 'ApnaServo home cleaning service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '73% center',
    title: 'Trusted care.',
    highlight: 'Reliable cleaning.',
    description: 'Bring a cleaner, more comfortable home within reach with dependable cleaning partners.',
    cta: 'Explore cleaning services',
    benefits: ['Professional cleaning', 'Trusted partners', 'Safe care', 'On-time visits']
  },
  {
    src: '/service-slides/pest-control.png',
    label: 'Pest Control',
    alt: 'ApnaServo pest control service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '75% center',
    title: 'Safe treatment.',
    highlight: 'Effective pest control.',
    description: 'Get careful pest management support designed for cleaner, safer everyday living.',
    cta: 'Explore pest control services',
    benefits: ['Careful treatment', 'Hygienic service', 'Verified experts', 'Home support']
  },
  {
    src: '/service-slides/appliance-repair.png',
    label: 'Appliance Repair',
    alt: 'ApnaServo appliance repair service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '77% center',
    title: 'Trusted repairs.',
    highlight: 'Reliable appliance care.',
    description: 'Professional help for the appliances that keep your daily home routine moving.',
    cta: 'Explore appliance services',
    benefits: ['Expert repair', 'Trusted partners', 'Quick service', 'Home support']
  },
  {
    src: '/service-slides/installation.png',
    label: 'Installation',
    alt: 'ApnaServo installation service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center',
    title: 'Perfect fit.',
    highlight: 'Professional installation.',
    description: 'Arrange reliable installation support for home fixtures, fittings, and essentials.',
    cta: 'Explore installation services',
    benefits: ['Safe installation', 'Precise work', 'Quality tools', 'On-time service']
  }
];

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="serviceCarousel" id="services" aria-roledescription="carousel" aria-label="ApnaServo home services">
      <span className="anchorTarget" id="commercial" />
      <div className="serviceCarouselViewport">
        <div className="serviceCarouselMedia" aria-live="polite">
          <span className="serviceCarouselMediaFallback" aria-hidden="true">{slide.label}</span>
          {slides.map((item, index) => (
            <figure
              className={`serviceCarouselSlide${index === activeSlide ? ' isActive' : ''}`}
              key={item.src}
              aria-hidden={index !== activeSlide}
              style={{ '--desktop-image-position': item.desktopPosition, '--mobile-image-position': item.mobilePosition } as CSSProperties}
            >
              <Image
                src={item.src}
                alt={index === activeSlide ? item.alt : ''}
                fill
                priority={index === 0}
                sizes="(max-width: 767px) calc(100vw - 24px), 100vw"
                onError={(event) => { event.currentTarget.style.opacity = '0'; }}
              />
            </figure>
          ))}
        </div>

        <div className="serviceCarouselContent" key={slide.src}>
          <Image className="serviceCarouselWordmark" src="/apnaservo-wordmark.png" alt="ApnaServo" width={248} height={62} />
          <p className="serviceCarouselEyebrow">Our services</p>
          <h2><span>Everything</span><span>your home</span><em>needs.</em></h2>
          <p className="serviceCarouselDescription">Trusted {slide.label.toLowerCase()} help for every task.</p>
        </div>

        <div className="serviceCarouselBenefits" aria-label="ApnaServo service benefits">
          <span><ShieldCheck aria-hidden="true" />Trusted pros</span>
          <span><CalendarClock aria-hidden="true" />Quick booking</span>
          <span><BadgeCheck aria-hidden="true" />Verified partners</span>
          <span><Timer aria-hidden="true" />On-time service</span>
        </div>

        <button className="serviceCarouselArrow serviceCarouselArrowPrevious" type="button" aria-label="Show previous service" onClick={showPreviousSlide}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button className="serviceCarouselArrow serviceCarouselArrowNext" type="button" aria-label="Show next service" onClick={showNextSlide}>
          <ChevronRight aria-hidden="true" />
        </button>

        <div className="serviceCarouselDots" role="tablist" aria-label="Choose a service slide">
          {slides.map((item, index) => (
            <button
              className={index === activeSlide ? 'isActive' : ''}
              key={item.src}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Show ${item.label} service`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
