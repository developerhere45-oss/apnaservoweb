# Current Site Audit

## Architecture

- Next.js 16 App Router, React 19, TypeScript, CSS/CSS Modules, Lucide icons.
- Public routes: `/`, `/services`, `/our-story`, `/contact-us`, `/legal-support`, `/privacy-policy`, `/terms-and-conditions`, `/partner-terms-and-conditions`, `/refund-policy`, `/delete-account`.
- Protected route: `/admin`. APIs: waitlist, admin login and logout.
- The production build passes. All public routes returned HTTP 200 during baseline QA.
- The referenced `references/current-site-walkthrough.mov` is not present; the running site and repository assets are the visual baseline.

## Principal findings

1. `globals.css` contains extensive repeated legacy overrides, making the cascade fragile and expensive.
2. Mobile homepage puts the app showcase before the hero, obscuring the primary value proposition.
3. Navigation differs across homepage, services, story and legal pages; several mobile variants hide important destinations.
4. Tablet hero media becomes too narrow and tall. Mobile/desktop heading duplication also produces an inaccessible mobile H1.
5. Support cards, legal copy, TOC links and multiple CTAs are undersized on mobile.
6. Carousel autoplay lacks pause/manual controls and reduced-motion behavior.
7. Broken/no-op anchors include `#how`, `#commercial`, and services-page `#download`.
8. Heavy raster assets and a 2.6 MB hero video are performance risks; the below-fold app preview is incorrectly prioritized.
9. Analytics is likely blocked by the current CSP allow-list.
10. Legal copy and backend/API behavior are sound preservation boundaries and must remain unchanged.

## Baseline strengths

- Consistent rose brand direction and useful local Guwahati imagery.
- Strong semantic route structure, metadata coverage, security headers and server-side validation.
- Hero video semantics, legal content centralization, contact data and structured data are established and reusable.
- No horizontal overflow or console errors were found in the baseline viewport sweep.

