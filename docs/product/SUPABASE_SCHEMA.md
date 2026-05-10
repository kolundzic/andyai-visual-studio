# Supabase Schema Draft

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  
**Status:** Draft / Not yet applied to production

---

## 1. Tables

Initial tables:

1. `profiles`
2. `templates`
3. `template_categories`
4. `projects`
5. `exports`
6. `subscriptions`
7. `usage_events`

---

## 2. profiles

```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text default 'user',
  plan text default 'free',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 3. template_categories

```sql
create table template_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  created_at timestamptz default now()
);
```

---

## 4. templates

```sql
create table templates (
  id uuid primary key default gen_random_uuid(),
  template_code text unique not null,
  slug text unique not null,
  title text not null,
  category_slug text references template_categories(slug),
  description text,
  difficulty text default 'beginner',
  output_type text not null,
  style_family text,
  tags text[] default '{}',
  is_premium boolean default false,
  template_recipe jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 5. projects

```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  template_id uuid references templates(id),
  title text not null,
  input_state jsonb not null default '{}',
  output_state jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 6. exports

```sql
create table exports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade,
  export_type text not null,
  export_payload jsonb not null default '{}',
  created_at timestamptz default now()
);
```

---

## 7. subscriptions

```sql
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text not null default 'free',
  status text not null default 'inactive',
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 8. usage_events

```sql
create table usage_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  event_payload jsonb not null default '{}',
  created_at timestamptz default now()
);
```

---

## 9. RLS direction

Future RLS policies should enforce:

- users can read public templates
- users can read their own projects
- users can update only their own projects
- users can read their own exports
- premium templates require plan checks at application layer first

Do not apply this SQL blindly before a proper Supabase migration pass.
