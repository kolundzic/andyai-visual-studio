-- AndyAI Visual Studio v2.9.0
-- Beta User Feedback Layer

create table if not exists public.avs_beta_feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  route text,
  rating integer,
  message text,
  created_at timestamptz default now()
);

alter table public.avs_beta_feedback enable row level security;

create policy if not exists "Users can insert own beta feedback"
  on public.avs_beta_feedback
  for insert
  with check (auth.uid() = user_id or user_id is null);

create policy if not exists "Users can read own beta feedback"
  on public.avs_beta_feedback
  for select
  using (auth.uid() = user_id);
