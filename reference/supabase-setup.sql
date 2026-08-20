-- Körs i Supabase Dashboard → SQL Editor (ingen CLI).
-- Tabellen delas med auditmotorn: landningssidans inbound och Lead Engines outbound
-- hamnar i samma flöde, skilda åt via source-kolumnen.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  domain      text not null,
  email       text,
  source      text not null default 'landing',   -- 'landing' | 'lead_engine'
  status      text not null default 'new',       -- 'new' | 'scanned' | 'report_sent' | 'replied' | 'customer' | 'closed'
  notes       text
);

-- Hindra dubbletter från formulärspam: samma domän+källa max en gång per dygn
create unique index if not exists leads_domain_daily
  on public.leads (domain, source, (created_at::date));

-- RLS på, inga publika policies. Pages Function använder service-nyckeln
-- server-side och påverkas inte av RLS. Ingen klient läser tabellen direkt.
alter table public.leads enable row level security;
