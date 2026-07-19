'use client';

import Image from 'next/image';
import { BadgeCheck, Check, ChevronRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/service-slides/electrician-clean.png',
    label: 'Electrician',
    alt: 'ApnaServo electrician service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center'
  },
  {
    src: '/service-slides/carpentry-clean.png',
    label: 'Carpentry',
    alt: 'ApnaServo carpentry service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center'
  },
  {
    src: '/service-slides/painting-clean.png',
    label: 'Painting',
    alt: 'ApnaServo painting service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '75% center'
  },
  {
    src: '/service-slides/interior-design-clean.png',
    label: 'Interior Design',
    alt: 'ApnaServo interior design service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '73% center'
  },
  {
    src: '/service-slides/home-cleaning-clean.png',
    label: 'Home Cleaning',
    alt: 'ApnaServo home cleaning service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '73% center'
  },
  {
    src: '/service-slides/pest-control-clean.png',
    label: 'Pest Control',
    alt: 'ApnaServo pest control service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '75% center'
  },
  {
    src: '/service-slides/appliance-repair-clean.png',
    label: 'Appliance Repair',
    alt: 'ApnaServo appliance repair service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '77% center'
  },
  {
    src: '/service-slides/installation-clean.png',
    label: 'Installation',
    alt: 'ApnaServo installation service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '76% center'
  },
  {
    src: '/service-slides/plumbing-clean.png',
    label: 'Plumbing',
    alt: 'ApnaServo plumbing service partner at work',
    desktopPosition: 'right center',
    mobilePosition: '74% center'
  }
];

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

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

        <div className="serviceCarouselContent">
          <div className="serviceCarouselEyebrow">
            <BadgeCheck aria-hidden="true" />
            <span>Verified Home Service Platform</span>
          </div>

          <h2>Our Services</h2>
          <p className="serviceCarouselDescription">
            Trusted professionals for every home need. Book verified electricians, plumbers, AC technicians,
            cleaners and more &mdash; all in one place.
          </p>

          <div className="serviceCarouselActions">
            <a className="serviceCarouselPrimaryCta" href="#contact">
              <span>Book a Service</span>
              <ChevronRight aria-hidden="true" />
            </a>
            <a className="serviceCarouselSecondaryCta" href="#how">
              <span>Explore Services</span>
              <ChevronRight aria-hidden="true" />
            </a>
          </div>

          <div className="serviceCarouselTrust" aria-label="Service guarantees">
            {['Verified Professionals', 'Transparent Pricing', 'No Upfront Payment', 'Fast Response'].map((item) => (
              <span key={item}>
                <i aria-hidden="true"><Check /></i>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
