-- AndyAI Visual Studio v5.4.0
-- Client Review Mode

create table if not exists public.avs_0017_client_review_mode (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0017_client_review_mode enable row level security;
