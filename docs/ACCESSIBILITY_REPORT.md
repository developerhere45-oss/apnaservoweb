# Accessibility Report

## Improvements

- Removed the duplicate `aria-hidden` mobile H1; one semantic H1 now adapts responsively.
- Added visible global `:focus-visible` treatment for links, buttons and summaries.
- Increased key navigation, contact, menu, carousel, support and legal targets toward the 44px practical minimum.
- Added accessible labels to carousel controls and stopped `aria-live` announcements during autoplay.
- Added reduced-motion behavior for carousel, transitions and decorative hero video.
- Increased legal mobile body copy to 15px/1.7 and converted the narrow TOC to one column.
- Added print rules that remove navigation chrome and expose legal content containers.

## Remaining considerations

- Full screen-reader and keyboard traversal requires manual device/browser validation.
- Existing factual trust claims require business verification; they were preserved rather than rewritten.
- Page-family navigation is visually improved but still implemented by separate components.

