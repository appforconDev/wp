# Profile: tesla-industrial

Full-bleed imagery, terse uppercase labels, minimal chrome. The photography/render IS the design; UI floats on top. Only choose this profile if strong imagery exists or can be generated — without it the profile collapses.

## Fonts (free equivalents of Gotham/Universal Sans)
- Display + UI: **Montserrat** (geometric, closest free Gotham analog) or **Archivo**.
- Body: same family, 400. Weights loaded: 400, 500, 600.

## Type scale
| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero title | 40px → 28px | 500 | 1.1 | 0 |
| Hero sub | 14px → 13px | 400 | 1.4 | +0.01em |
| Section title | 32px → 24px | 500 | 1.15 | 0 |
| Body | 15px | 400 | 1.5 | 0 |
| Micro-label / spec | 12px | 500 | 1.3 | +0.08em, UPPERCASE |
| Big stat number | 40–56px | 500 | 1 | −0.01em |

Tesla's tell: titles are *modest* in size but the imagery is enormous. Restraint in type, drama in image.

## Colors
```css
--bg: #ffffff;
--bg-dark: #171a20;      /* near-black, slightly blue */
--text: #171a20;
--text-inverse: #ffffff;
--text-secondary: #5c5e62;
--overlay-btn-dark: rgba(23,26,32,0.8);
--overlay-btn-light: rgba(244,244,244,0.65);
--border: #d0d1d2;
```
No accent color at all — buttons are translucent monochrome overlays. If a brand color must exist, use it only for focus states and small functional details.

## Spacing & layout
- Base unit 8px. Scale: 8, 16, 24, 32, 48, 64, 96, 128.
- Sections are **full-viewport panels** (`min-height: 100vh` or 85vh) with a full-bleed background image and content pinned: title block top-center (padding-top 96–128px), CTA block bottom-center (padding-bottom 64–96px).
- Scroll-snap between panels (`scroll-snap-type: y proximity`) is on-profile; disable under `prefers-reduced-motion`.
- Text-led sections (specs, FAQ) use max-width 640–760px.

## Components
- **Button:** width 256px (fixed, both buttons equal), height 40px, radius 4px, 14px/500 text, translucent bg (`--overlay-btn-dark` with white text, or `--overlay-btn-light` with dark text + `backdrop-filter: blur(6px)`), hover raises opacity to ~0.9. Buttons come in centered pairs on hero panels.
- **Nav:** transparent over imagery, height 56px, 14px/500 links, dark text on light imagery / white on dark. Solid `--bg` background only on scroll or subpages.
- **Spec grid:** stat number (40–56px/500) over UPPERCASE micro-label, 3–4 columns, hairline top border per cell. This replaces feature cards entirely.
- **Footer:** 12px uppercase micro-labels, single row, centered.

## Imagery
Full-bleed, high contrast, one subject per panel. Apply a subtle darkening gradient (`linear-gradient(rgba(0,0,0,0.25), transparent 40%)`) behind light text when needed. No borders or radius on hero imagery.

## Motion
Panel content (title, then CTA) fades in once per panel on first reveal, 400ms stagger 100ms. Nothing loops.
