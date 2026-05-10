-- AndyAI Visual Studio v3.8.0
-- Admin Template Publishing Flow

create table if not exists public.avs_template_publish_log (
  id uuid primary key default gen_random_uuid(),
  template_id text not null,
  action text not null,
  actor_id uuid,
  approval_gate text,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.avs_template_publish_log enable row level security;

drop policy if exists "Authenticated users can read publish log starter" on public.avs_template_publish_log;
create policy "Authenticated users can read publish log starter"
on public.avs_template_publish_log
for select
using (auth.role() = 'authenticated');
