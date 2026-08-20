# HANDOFF — Prissida (WP-förvaltning)

> Läggs i `.claude/handoff/` i förvaltningsrepot. Sidan är avsiktligt ramverksfri:
> en HTML-fil + en Pages Function. Inga byggsteg, inga dependencies, inget npm.

## Struktur

```
prissida/
├── index.html              # Hela sidan: markup + CSS + formulär-JS
├── functions/api/lead.js   # Cloudflare Pages Function (POST /api/lead)
├── supabase-setup.sql      # Körs i Supabase Dashboard → SQL Editor
└── HANDOFF.md
```

## Deploy (Cloudflare Pages, dashboard-väg)

1. Skapa Git-repo av mappen, pusha
2. CF Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. Build settings: **inga** (framework: None, build command tom, output dir: `/`)
4. Env vars (Settings → Environment variables, typ **Secret**):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`  ← service_role; finns ENDAST här, aldrig i frontend
   - `RESEND_API_KEY` (valfri)
   - `NOTIFY_EMAIL`
5. Custom domain: peka valfri domän ur portföljen (CNAME i CF DNS)
6. Kör `supabase-setup.sql` i Dashboard → SQL Editor

## Testchecklista före lansering

- [ ] Formulär: giltig domän + e-post → rad i `leads` med source='landing'
- [ ] Honeypot: fyll `company_website` via devtools → 200 OK men INGEN rad i leads
- [ ] Ogiltig domän ("asdf") → felmeddelande visas, ingen rad
- [ ] Samma domän två gånger samma dag → andra insättningen nekas (unikt index), sidan visar ändå fel-fallback snyggt
- [ ] PSI-score: mål 95+ mobil (sidan ska själv klara pitchen den gör)
- [ ] Mobil 375px: hero, priskort (Standard först), formulär
- [ ] `prefers-reduced-motion`: loggen visas statiskt

## Medvetna designval (rör ej utan skäl)

- **Driftloggen i hero** är sidans signatur: den visar rutinen inkl. ett stopp
  ("driftsättning stoppad. din sajt: orörd ✓") — kärnlöftet dramatiserat.
  Rost-färgen (--signal) används ENDAST där; grönt är reserverat för status.
- Typografi: Bricolage Grotesque (rubriker) + IBM Plex Sans/Mono (brödtext/logg)
- Inga externa beroenden utom Google Fonts. Ingen cookie-banner behövs:
  sidan sätter inga cookies och har ingen tracking (medvetet — matchar löftet
  i formulärets fine print)

## Backlog (EFTER första kund, inte före)

- /villkor och /integritet (länkade i footern, 404 just nu — skriv innan lansering!)
- Riktig logga
- Referenscase när de finns
