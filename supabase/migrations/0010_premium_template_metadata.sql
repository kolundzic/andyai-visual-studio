-- AndyAI Visual Studio v3.3.0
-- Premium Template Metadata

create table if not exists public.avs_template_premium_metadata (
  template_id text primary key,
  tier text not null default 'free',
  commercial_use boolean not null default true,
  includes_source_prompt boolean not null default true,
  includes_export_package boolean not null default false,
  proof_level text not null default 'basic',
  created_at timestamptz not null default now()
);

alter table public.avs_template_premium_metadata enable row level security;

drop policy if exists "Public can read premium template metadata" on public.avs_template_premium_metadata;
create policy "Public can read premium template metadata"
on public.avs_template_premium_metadata
for select
using (true);
