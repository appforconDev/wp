# Profile: linear-dark

Dark, dense, engineered. For dev tools and technical SaaS. Premium here = precision: hairline borders, subtle depth, perfect alignment, product screenshots treated like artifacts. NOT the generic "black + neon accent" look — the palette is layered grays with a desaturated accent.

## Fonts
- UI + display: **Inter** (Linear uses their own Inter-derived face). `font-feature-settings: "cv05","cv11","ss01"`.
- Mono (code, keyboard shortcuts, data): **JetBrains Mono** or **Geist Mono**, 13–14px.
- Weights: 400, 500, 600.

## Type scale
| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero display | 56–64px → 36px | 600 | 1.06 | −0.022em |
| Section headline | 40px → 28px | 600 | 1.1 | −0.02em |
| Feature title | 21px | 590 | 1.25 | −0.012em |
| Body | 16px | 400 | 1.55 | −0.011em |
| Small / meta | 13–14px | 400–500 | 1.45 | 0 |

Hero headline is often two lines with the second line in `--text-tertiary` — hierarchy via color, not size.

## Colors
```css
--bg: #08090a;
--bg-raised: #0f1011;     /* cards, nav */
--bg-input: #141516;
--text: #f7f8f8;
--text-secondary: #b4bcd0; /* slightly blue-tinted */
--text-tertiary: #62666d;
--border: rgba(255,255,255,0.08);
--border-strong: rgba(255,255,255,0.14);
--accent: #7c86ff;         /* desaturated periwinkle — swap for brand color at similar saturation */
--glow: radial-gradient(ellipse at top, rgba(124,134,255,0.12), transparent 60%);
```
Rule: the accent appears in ≤ 3 places above the fold. Depth comes from `--bg` vs `--bg-raised` vs borders, never from heavy shadows.

## Spacing & layout
- Base 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120.
- Content max-width: 1024–1200px. Body copy max 640px.
- Section padding: 96–120px desktop, 64px mobile.
- Hero: **left-aligned or centered-narrow**, headline → one subline → single primary button + quiet text link → full-width product screenshot below.

## Components
- **Primary button:** height 36–40px, radius 8px, padding 0 14–16px, 14px/500, `--accent` bg (or white bg + dark text for max contrast), subtle inner highlight `inset 0 1px 0 rgba(255,255,255,0.12)`.
- **Secondary button:** transparent, `--border-strong` border, `--text-secondary` text, hover bg `rgba(255,255,255,0.04)`.
- **Nav:** height 56–64px, `--bg` with `backdrop-filter: blur(12px)` and bottom `--border`, 14px/500 links in `--text-secondary`, hover → `--text`.
- **Cards:** `--bg-raised`, 1px `--border`, radius 12px, padding 24–32px. Hover: `--border-strong`, no lift/scale.
- **Product screenshots:** radius 12px, 1px `--border`, `box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 16px 48px rgba(0,0,0,0.5)`, optionally cropped by section edge.
- **Keyboard hints:** mono 12px in bordered 4px-radius keycaps — small details like this sell the profile.

## Atmosphere
One `--glow` gradient behind the hero, extremely subtle. No particle fields, no grids of dots, no animated meshes.

## Motion
Hover transitions 150ms ease. One hero entrance (fade + 8px rise, 500ms). Product screenshot may have a single slow parallax or none.
