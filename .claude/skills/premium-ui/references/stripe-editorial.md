# Profile: stripe-editorial

Light, editorial, trust-first. For fintech, platforms, and B2B where credibility is the product. Premium here = typographic hierarchy, restrained color on white, and diagrams/product-UI as illustration. Distinct from apple-minimal: denser, more informational, left-aligned, comfortable with real paragraphs.

## Fonts (free equivalents of Söhne)
- Display + UI: **Instrument Sans** or **Inter**.
- Body: same family. Weights: 400, 500, 600, 700.

## Type scale
| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero display | 64–76px → 40px | 700 | 1.04 | −0.03em |
| Section headline | 40px → 30px | 700 | 1.12 | −0.02em |
| Feature title | 18px | 600 | 1.3 | −0.01em |
| Body | 18px hero-adjacent, 16px elsewhere | 400 | 1.55 | 0 |
| Eyebrow | 15px | 600 | 1.2 | 0, in --accent, sentence case |
| Footnote | 14px | 400 | 1.5 | 0 |

Signature move: the eyebrow line in accent color above each section headline ("Payments", "Why it works"). Cheap to implement, instantly editorial.

## Colors
```css
--bg: #ffffff;
--bg-tint: #f6f9fc;       /* alternating sections */
--bg-deep: #0a2540;        /* navy — dark sections + footer */
--text: #0a2540;           /* headlines are navy, not black */
--text-body: #425466;
--accent: #635bff;         /* swap for brand color; keep saturation high, usage low */
--accent-dark: #0048e5;    /* links on white */
--border: #e6ebf1;
```
Dark sections use `--bg-deep`, not black. One angled or gradient hero background is on-profile **only if** built from tints of the accent at low saturation — never a purple→blue stock gradient.

## Spacing & layout
- Base 8px. Scale: 8, 16, 24, 32, 48, 64, 80, 112.
- Content max-width: 1080px. Body copy 60–70ch.
- Section padding: 96–112px desktop, 56px mobile.
- Hero: **two-column** — left: eyebrow, headline, subline, button pair; right: product UI mock or diagram. On mobile, visual drops below text.
- Sections alternate white / `--bg-tint`; one `--bg-deep` section mid-page for a flagship feature or stats.

## Components
- **Primary button:** pill (radius 999px), height 40px, padding 0 18px, 15px/500, `--accent` bg, white text, arrow `→` that shifts 2px right on hover, hover darkens 6%.
- **Secondary:** same geometry, transparent bg, `--text` color, 1px `--border`.
- **Nav:** height 60px, white or transparent-over-hero, 15px/500 links, dropdown panels with radius 8px + `0 15px 35px rgba(60,66,87,0.08), 0 5px 15px rgba(0,0,0,0.06)`.
- **Cards:** white on `--bg-tint`, radius 8px, `--border` 1px, padding 32px, shadow `0 2px 5px rgba(60,66,87,0.06)` at rest.
- **Diagrams over icons:** feature sections illustrated with small product-UI fragments or simple SVG flow diagrams (nodes + connecting lines in `--border` with accent highlights), not icon grids.
- **Logo strip:** grayscale customer logos at ~60% opacity, single static row.
- **Footer:** `--bg-deep`, white 14px links, 4 columns max, generous 80px top padding.

## Motion
Hover states only (150–200ms), plus at most one scroll-triggered diagram animation if it explains something real. Nothing decorative.
