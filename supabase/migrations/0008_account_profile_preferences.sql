-- AndyAI Visual Studio v2.8.0
-- Account Settings + User Profile

create table if not exists public.avs_user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  brand_name text,
  default_export_format text default 'markdown',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.avs_user_profiles enable row level security;

create policy if not exists "Users can read own AVS profile"
  on public.avs_user_profiles
  for select
  using (auth.uid() = id);

create policy if not exists "Users can update own AVS profile"
  on public.avs_user_profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);
