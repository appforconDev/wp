---
name: premium-ui
description: Premium UI token library that gives scaffolds, landing pages, and redesigns a high-end look (Apple/Tesla/Linear/Stripe caliber) instead of generic AI defaults. ALWAYS use this skill when building or restyling any web UI — landing pages, marketing sites, SaaS dashboards, scaffolds in Astro/TanStack/React/Next, hero sections, pricing pages, navbars — or when the user says "snyggare UI", "premium känsla", "ser AI-genererat ut", "slopigt", "gör det mer som Apple/Tesla/Linear/Stripe", "polish", or asks why a design looks cheap. Provides exact type scales, spacing systems, colors, radii, shadows, component specs, and motion values per design profile, plus a banned-patterns list.
---

# Premium UI

This skill exists because AI-generated UI clusters around recognizable defaults ("slop"). It provides four named **design profiles** distilled from the best-executed commercial design on the web, each with exact token values. Your job: pick ONE profile, apply its tokens strictly, and pass the anti-slop checklist before delivering.

## Workflow

1. **Read `references/anti-slop.md` first.** Always. It lists banned patterns that override everything else.
2. **Pick exactly one profile** based on the product (see table below). If the user names a brand ("like Apple"), use that profile. Never blend profiles in one project — blending is how slop happens.
3. **Read only that profile's reference file.** Apply its tokens as the single source of truth: type scale, spacing, colors, radii, shadows, component specs, motion.
4. **Define tokens as CSS custom properties (or Tailwind theme config)** at the top of the project — never inline magic numbers. Every size on the page must be traceable to a token.
5. **Self-critique against the checklist** at the end of anti-slop.md before showing the user.

## Profile selection

| Profile | File | Use for |
|---|---|---|
| **apple-minimal** | `references/apple-minimal.md` | Consumer products, hardware, apps, anything selling a *thing*. Light, airy, huge type, few words. |
| **tesla-industrial** | `references/tesla-industrial.md` | Products with strong photography/renders, automotive, energy, physical services. Full-bleed imagery, dark, terse. |
| **linear-dark** | `references/linear-dark.md` | Dev tools, B2B SaaS, technical products, dashboards. Dark, dense, precise, subtle borders. |
| **stripe-editorial** | `references/stripe-editorial.md` | Fintech, platforms, API products, trust-heavy B2B. Light, editorial, restrained color, strong information hierarchy. |

Default when unsure: **stripe-editorial** for B2B/SaaS, **apple-minimal** for consumer.

## Non-negotiable principles (all profiles)

- **One accent color.** Every profile has exactly one accent. Everything else is neutral.
- **Type scale is modular, not improvised.** Use the profile's scale verbatim. The gap between display size and body size should be dramatic (4–6×), not timid (2×).
- **Spacing comes from the profile's scale** (typically 4px or 8px base). Section vertical padding is large: 96–160px desktop. Cramped sections are the #1 cheap-look tell.
- **Line length 60–75ch for body text.** Never full-width paragraphs.
- **Real font loading:** use the profile's specified free fonts via `@font-face`/Fontsource with `font-display: swap`, and set letter-spacing per the profile (large display type always needs negative tracking, roughly −0.01em to −0.03em).
- **Fewer words.** Premium sites say less. Cut copy by half, then cut again. No exclamation marks, no emoji, no "Unlock/Unleash/Elevate/Empower/Supercharge".
- **Motion is one orchestrated moment,** not scattered fade-ins on every element. Respect `prefers-reduced-motion`.
- **Buttons, inputs, and nav must match the profile's component specs exactly** — heights, padding, radius, hover states. These small measurements are where "premium" actually lives.

## Scope notes

- These profiles are distillations of design *principles and measurements*, not brand imitations. Never copy logos, product imagery, proprietary fonts (SF Pro, Gotham, Söhne), or recognizable trade dress. The reference files specify legal free-font equivalents.
- For an existing site: extract its current brand color, map it into the chosen profile's neutral system as the single accent, and replace ad-hoc sizes with the profile's tokens.
- If the project already has a brand document (brand.md / soul.json), the brand's colors and fonts win; use this skill only for scale, spacing, and component measurements.
