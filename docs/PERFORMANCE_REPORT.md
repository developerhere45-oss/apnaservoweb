# Performance Report

## Improvements

- Removed `priority` from the below-fold app preview image.
- Carousel autoplay interval was relaxed from 3.5s to 5s and stops for reduced-motion users.
- No animation library or new runtime dependency was added.
- The premium system is a compact final CSS layer, avoiding a risky framework/component rewrite.

## Remaining risks

- Legacy `globals.css` remains very large and duplicated; full deduplication requires a separately staged visual-regression project.
- Hero video and several source images remain heavy. Re-encoding would change binary assets and should be performed with an approved asset-quality target.
- The carousel still renders all service images; rendering only current/adjacent slides is a future performance pass.
- Existing CSP likely blocks Google Analytics endpoints and still includes `unsafe-eval`; security/analytics policy needs production-owner confirmation.

