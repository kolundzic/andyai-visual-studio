-- AndyAI Visual Studio v3.7.0
-- Template Rating and Favorite Model

create table if not exists public.avs_template_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  template_id text not null,
  created_at timestamptz not null default now(),
  unique(user_id, template_id)
);

create table if not exists public.avs_template_ratings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  template_id text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  note text,
  created_at timestamptz not null default now(),
  unique(user_id, template_id)
);

alter table public.avs_template_favorites enable row level security;
alter table public.avs_template_ratings enable row level security;

drop policy if exists "Users manage their own favorites" on public.avs_template_favorites;
create policy "Users manage their own favorites"
on public.avs_template_favorites
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users manage their own ratings" on public.avs_template_ratings;
create policy "Users manage their own ratings"
on public.avs_template_ratings
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
