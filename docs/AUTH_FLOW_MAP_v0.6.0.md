# Auth Flow Map v0.6.0

## Flow

```text
/login
  → user enters email
  → Supabase sends magic link
  → /auth/callback receives code
  → server exchanges code for session
  → user lands on /dashboard
  → dashboard loads owner-scoped projects
```

## Environment Requirements

| Key | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | App base URL for auth redirects |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key |
| `AVS_DATA_MODE` | `mock` or `supabase` |
| `NEXT_PUBLIC_AVS_DATA_MODE` | Browser-visible data mode |

## Current Design

The app remains safe in mock mode. When Supabase is not configured, the login screen explains that auth is not connected yet.
