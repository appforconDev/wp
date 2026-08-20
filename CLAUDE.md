# CLAUDE.md — Prissida (Astro)

Landningssida för Winbergh Medias WP-förvaltningstjänst. Detta repo byggs och
itereras med Claude Code. Referensmaterial ligger i `reference/` — porteras, inte
omdesignas.

## Icke förhandlingsbart

- **Timebox: deployad på Cloudflare Pages inom en dag från repo-init.** Allt som
  hotar det stryks eller läggs i backlog.
- **Astro, statisk output** (`output: 'static'`). INGEN SSR-adapter, ingen CMS,
  inga content collections, inga React/Vue-islands.
- **Noll klient-JS** förutom formulärskriptet i CtaForm.
- `functions/api/lead.js` kopieras från referensen **orörd** — Pages Functions
  samexisterar med statisk Astro-build, inget mer behövs.
- Designen porteras 1:1 från `reference/index.html`: tokens, typografi
  (Bricolage Grotesque + IBM Plex Sans/Mono), driftlogg-signaturen i hero,
  rostfärgen endast på stopp-raderna, `prefers-reduced-motion` respekteras.

## Struktur

```
/
├── functions/api/lead.js        # kopieras orörd från reference/
├── reference/                   # index.html + supabase-setup.sql + HANDOFF.md (läses, deployas ej)
├── src/
│   ├── styles/global.css        # tokens + bas, porterat från reference
│   ├── layouts/Base.astro       # <head>, fonts (preconnect!), header, footer
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Driftlogg.astro      # signaturen — egen komponent, rör varsamt
│   │   ├── Problem.astro
│   │   ├── Rutin.astro
│   │   ├── Priser.astro
│   │   ├── Arlighet.astro
│   │   ├── Faq.astro            # native <details>, inget JS
│   │   └── CtaForm.astro        # enda stället med <script>
│   └── pages/
│       ├── index.astro
│       ├── villkor.astro        # från forvaltningsavtal-utkast (kundvänlig version)
│       └── integritet.astro     # skriv: vilka uppgifter (domän, e-post), ändamål,
│                                #   lagring i Supabase EU, ingen tracking/cookies,
│                                #   kontakt för radering
└── astro.config.mjs
```

## Stil

- Vanilla CSS med custom properties (tokens finns) — ingen Tailwind i detta repo,
  referensens CSS är redan skriven och liten. Portera, dela upp per komponent
  med `<style>` scoped där det är naturligt, globala tokens i global.css.
- Svenska i allt användarvänt. Sentence case. Copy ändras inte utan beslut.

## Definition of done

- [ ] `npm run build` grönt, deployad via CF Pages (framework preset: Astro)
- [ ] Env vars satta (SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY, NOTIFY_EMAIL)
- [ ] Formulär → rad i `leads` (source='landing'); honeypot ger 200 utan rad
- [ ] /villkor och /integritet finns och är länkade — inga 404:or i footern
- [ ] PSI mobil ≥95, Lighthouse a11y ≥95
- [ ] 375px-vy: Standard-kortet först, driftloggen läsbar
- [ ] `prefers-reduced-motion`: statisk logg

## Backlog (EFTER första betalande kund)

- Artikelsektion för SEO (då: content collections)
- Kundcase
- Riktig logga
