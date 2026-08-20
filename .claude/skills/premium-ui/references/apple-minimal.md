# Profile: apple-minimal

Light, airy, product-first. Enormous type, very few words, generous whitespace, one pill-shaped accent button. Works when the product itself (screenshot, render, device) is the hero.

## Fonts (free equivalents of SF Pro)
- Display + body: **Inter** (or system stack `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for zero-load speed). Inter with `font-feature-settings: "cv05","cv11"` gets closest to SF.
- Weights loaded: 400, 500, 600, 700 only.

## Type scale (desktop → mobile)
| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero display | 80px → 48px | 700 | 1.05 | −0.025em |
| Section headline | 56px → 36px | 700 | 1.08 | −0.02em |
| Sub-headline | 28px → 22px | 600 | 1.15 | −0.01em |
| Body large (hero subline) | 21px → 19px | 400 | 1.4 | 0 |
| Body | 17px | 400 | 1.47 | 0 |
| Caption / legal | 12px | 400 | 1.35 | 0 |
| Eyebrow | 14px | 600 | 1.2 | +0.06em, uppercase optional |

Headlines are short: 2–6 words. Sublines: one sentence.

## Colors
```css
--bg: #ffffff;
--bg-alt: #f5f5f7;      /* alternating section background */
--bg-dark: #000000;      /* optional dark feature section */
--text: #1d1d1f;
--text-secondary: #6e6e73;
--accent: #0071e3;       /* or the project's brand color, used identically */
--accent-hover: #0077ed;
--border: #d2d2d7;
```
Sections alternate `--bg` / `--bg-alt`. At most one full-dark section per page.

## Spacing & layout
- Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Content max-width: **980px** for text-led sections; imagery may bleed to 1440px or full width.
- Section vertical padding: 120–160px desktop, 64–80px mobile.
- Hero: centered, headline → subline → one link/button → large product visual below. This centered hero is allowed *here* because the visual carries it — the product image is mandatory.

## Components
- **Primary button:** pill (`border-radius: 980px`), height 44–48px, padding 0 22px, 17px/500 text, `--accent` bg, white text, hover darkens ~4%. No shadow, no border, no icon.
- **Text link:** `--accent` colored, 17px, trailing chevron `›` (a plain character, not an icon lib), underline on hover only.
- **Nav:** 44–48px tall, `rgba(255,255,255,0.8)` + `backdrop-filter: blur(20px) saturate(180%)`, hairline bottom border `--border`, 12px/400 links in `--text`, generous gaps (32px+). Logo left, links center or right, no CTA button in nav unless the page has none elsewhere.
- **Cards:** `--bg-alt` or white on `--bg-alt`, radius **18px**, padding 32–40px, **no border, no shadow** at rest. Shadow only if interactive: `0 2px 12px rgba(0,0,0,0.08)` on hover.
- **Footer:** 12px text, `--text-secondary`, `--bg-alt` background, hairline dividers.

## Imagery
Product renders/screenshots on clean backgrounds, huge (60–80% of viewport). No stock photos of smiling people. If no product visual exists yet, use a precise CSS/SVG mock of the UI rather than an abstract illustration.

## Motion
One moment: hero product visual fades/scales in on load (600ms, `cubic-bezier(0.25,0.1,0.25,1)`), or a single scroll-linked reveal on the flagship feature. Nothing else animates.
