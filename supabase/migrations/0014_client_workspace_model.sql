-- AndyAI Visual Studio v5.1.0
-- Client Workspace Model

create table if not exists public.avs_0014_client_workspace_model (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0014_client_workspace_model enable row level security;
