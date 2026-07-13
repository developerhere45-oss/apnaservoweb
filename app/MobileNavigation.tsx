'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const mobileLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Track Booking', href: '#track' },
  { label: 'Support', href: '#contact' },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className="mobileMenuBtn"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav
        id="mobile-navigation"
        className={`mobileNavigation${isOpen ? ' isOpen' : ''}`}
        aria-label="Mobile navigation"
      >
        {mobileLinks.map((link) =>
          link.href.startsWith('/') ? (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ),
        )}
      </nav>
    </>
  );
}
