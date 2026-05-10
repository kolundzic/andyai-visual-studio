-- AndyAI Visual Studio v5.2.0
-- Team Project Sharing

create table if not exists public.avs_0015_team_project_sharing (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0015_team_project_sharing enable row level security;
