-- AndyAI Visual Studio v5.3.0
-- Public Share Links

create table if not exists public.avs_0016_public_share_links (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0016_public_share_links enable row level security;
