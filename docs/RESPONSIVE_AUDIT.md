# Responsive Audit

## Required viewport findings

- **1440×900 / 1280×800:** desktop hero blend is a good base, but vertical rhythm is loose and sections use inconsistent radii/shadows.
- **1024×768:** hero needs reduced type and a controlled landscape media height.
- **768×1024:** current split creates a narrow portrait-like media pillar; use a stacked 16:10 composition.
- **430×932 / 390×844 / 360×800:** hero must render first; support/legal cards need one column, 15–16px body type and 44px controls.

## Component rules

- Large desktop: max-width 1440px, 52/48 hero, 88–120px section rhythm.
- Laptop: 50/50 hero, 56–64px display type, media height capped near 600px.
- Tablet: stacked text/media; 2×2 trust metrics; no fixed-height content containers.
- Mobile: 16–20px gutters, text-first hero, 16:9 media, single-column support cards, full-width primary CTA.
- All breakpoints: no horizontal overflow, clear focal-point cropping, stable navigation, visible focus and safe touch targets.

