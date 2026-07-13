'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/service-slides/electrician.png',
    label: 'Electrician',
    alt: 'ApnaServo electrician service partner at work',
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
    title: 'Perfect fit.',
    highlight: 'Professional installation.',
    description: 'Arrange reliable installation support for home fixtures, fittings, and essentials.',
    cta: 'Explore installation services',
    benefits: ['Safe installation', 'Precise work', 'Quality tools', 'On-time service']
  }
];

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="serviceCarousel" id="services" aria-roledescription="carousel" aria-label="ApnaServo home services">
      <span className="anchorTarget" id="commercial" />
      <div
        className="serviceCarouselViewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {slides.map((item, index) => (
          <figure className={`serviceCarouselSlide${index === activeSlide ? ' isActive' : ''}`} key={item.src} aria-hidden={index !== activeSlide}>
            <Image
              src={item.src}
              alt={index === activeSlide ? item.alt : ''}
              fill
              priority={index === 0}
              sizes="(max-width: 767px) calc(100vw - 24px), 100vw"
            />
          </figure>
        ))}

        <div className="serviceCarouselContent" key={slide.src}>
          <p className="serviceCarouselEyebrow">ApnaServo service partner</p>
          <h2>{slide.title} <span>{slide.highlight}</span></h2>
          <p className="serviceCarouselDescription">{slide.description}</p>
          <a className="serviceCarouselCta" href="#contact">{slide.cta}<ArrowRight size={20} /></a>
        </div>

        <div className="serviceCarouselBenefits" aria-label={`${slide.label} service benefits`}>
          {slide.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
        </div>

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
