-- AndyAI Visual Studio v5.7.0
-- Brand Kit Profiles

create table if not exists public.avs_0019_brand_kit_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0019_brand_kit_profiles enable row level security;
