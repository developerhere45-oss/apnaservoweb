'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/service-slides/electrician.png', label: 'Electrician service', alt: 'ApnaServo electrician service partner at work' },
  { src: '/service-slides/plumbing.png', label: 'Plumbing service', alt: 'ApnaServo plumbing service partner at work' },
  { src: '/service-slides/ac-repair.png', label: 'AC repair service', alt: 'ApnaServo AC repair service partner at work' },
  { src: '/service-slides/carpentry.png', label: 'Carpentry service', alt: 'ApnaServo carpentry service partner at work' },
  { src: '/service-slides/painting.png', label: 'Painting service', alt: 'ApnaServo painting service partner at work' },
  { src: '/service-slides/interior-design.png', label: 'Interior design service', alt: 'ApnaServo interior design service partner at work' },
  { src: '/service-slides/home-cleaning.png', label: 'Home cleaning service', alt: 'ApnaServo home cleaning service partner at work' },
  { src: '/service-slides/pest-control.png', label: 'Pest control service', alt: 'ApnaServo pest control service partner at work' },
  { src: '/service-slides/appliance-repair.png', label: 'Appliance repair service', alt: 'ApnaServo appliance repair service partner at work' },
  { src: '/service-slides/installation.png', label: 'Installation service', alt: 'ApnaServo installation service partner at work' }
];

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

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
        {slides.map((slide, index) => (
          <figure className={`serviceCarouselSlide${index === activeSlide ? ' isActive' : ''}`} key={slide.src} aria-hidden={index !== activeSlide}>
            <Image
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ''}
              fill
              priority={index === 0}
              sizes="(max-width: 767px) calc(100vw - 32px), min(100vw - 96px, 1560px)"
            />
          </figure>
        ))}

        <div className="serviceCarouselContent">
          <p>Services</p>
          <h2>Everything your home needs, in one place.</h2>
        </div>
        <p className="serviceCarouselLabel" aria-live="polite">{slides[activeSlide].label}</p>
        <div className="serviceCarouselDots" role="tablist" aria-label="Choose a service slide">
          {slides.map((slide, index) => (
            <button
              className={index === activeSlide ? 'isActive' : ''}
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Show ${slide.label}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
