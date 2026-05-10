# Supabase Schema — AndyAI Visual Studio v0.1

## tables

```sql
create table public.templates (
  id uuid primary key default gen_random_uuid(),
  template_id text unique not null,
  name text not null,
  slug text unique not null,
  category text not null,
  style_family text not null,
  description text,
  best_for text,
  recommended_format text,
  prompt_markdown text not null,
  negative_constraints text,
  preview_image_url text,
  is_free boolean default false,
  plan_required text default 'free',
  status text default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

```sql
create table public.style_families (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  mood text,
  palette jsonb,
  description text,
  created_at timestamptz default now()
);
```

```sql
create table public.template_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  created_at timestamptz default now()
);
```

```sql
create table public.user_saved_templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  template_id uuid references public.templates(id) on delete cascade,
  created_at timestamptz default now()
);
```

```sql
create table public.generated_prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  template_id uuid references public.templates(id) on delete set null,
  input_json jsonb not null,
  final_prompt text not null,
  export_format text default 'markdown',
  created_at timestamptz default now()
);
```

```sql
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  plan text not null,
  status text not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

## Notes

RLS policies should be added before production launch.
