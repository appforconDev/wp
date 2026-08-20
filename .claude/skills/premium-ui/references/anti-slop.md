# Anti-slop: banned patterns and final checklist

These rules override profile defaults and user-less improvisation. They exist because AI-generated UI converges on the same tells.

## Banned outright

**Color & backgrounds**
- Purple/violet→blue gradients (`#8B5CF6`→`#3B82F6` family) anywhere, especially hero backgrounds and buttons.
- Warm cream `#F4F1EA`-style background + terracotta `#D97757` accent + high-contrast serif combo (the current AI default look).
- Near-black background + acid green or vermilion single accent (the other AI default look) — unless the profile explicitly calls for its own dark palette.
- Gradient text fills on headlines.
- More than one accent color. "Primary + secondary + success + warning" rainbows on marketing pages.
- Glassmorphism cards (blurred translucent panels) unless the profile specifies it.

**Layout**
- Hero = centered headline + subline + two buttons + three feature cards below. This exact composition is the single strongest slop tell. At minimum change the axis (left-align), the card count, or replace cards with a product visual.
- Icon + title + two lines of text repeated in a 3-column grid of identical cards.
- Rounded-2xl on everything. Radius must come from the profile's radius scale and vary by component role.
- Equal-width 3-column footers with 20 links nobody clicks.
- Emoji as icons or bullet decorations.
- Numbered markers (01/02/03) on content that isn't actually sequential.

**Copy**
- "Unlock", "Unleash", "Elevate", "Empower", "Supercharge", "Revolutionize", "Seamless", "Effortless" as headline verbs.
- Exclamation marks in UI copy.
- Feature names that describe the tech ("AI-Powered X") instead of the outcome.
- Placeholder-sounding testimonials ("This changed everything! — Sarah J., CEO").

**Type & spacing**
- Default Tailwind `text-4xl` heroes. Display type should be 56–96px+ desktop per profile scale.
- Zero or positive letter-spacing on large display type.
- Section padding under 80px vertical on desktop.
- Body text at 14px on marketing pages. 16–19px per profile.

**Motion**
- Fade-up-on-scroll applied to every section (AOS-style carpet bombing).
- Bouncy spring animations on marketing content.
- Infinite marquee logo strips *with* every other animation also present. One ambient element max.

## Required quality floor

- Responsive to 375px without horizontal scroll.
- Visible `:focus-visible` states matching the accent.
- `prefers-reduced-motion` disables non-essential animation.
- Real content hierarchy: eyebrow (optional) → headline → one short subline. Never headline + three sublines.
- Contrast: body text ≥ 4.5:1, large display ≥ 3:1.
- Images have intentional aspect ratios (16:9, 4:3, 1:1) — no arbitrary crops.

## Final checklist (run before delivering)

1. Can every font-size, spacing, radius, and shadow on the page be traced to a token? If any value is improvised, fix it.
2. Cover the logo: does the page look like it belongs to the chosen profile's caliber — or like a template? Name the one element that proves it's not a template.
3. Count accent-colored elements above the fold. More than ~3? Reduce.
4. Read all copy aloud. Cut 30%.
5. Screenshot at 375px and 1440px if the environment allows. Check section rhythm — consistent large vertical spacing, no cramped seams.
6. Is there exactly one motion moment? Is it earned?
