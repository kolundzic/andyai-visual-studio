# Vercel Environment Checklist — v1.1.0

## Required for live Supabase mode

| Variable | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public Supabase project URL | `https://example.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key used by browser/client code | `eyJ...` |
| `AVS_DATA_SOURCE` | Data adapter mode | `supabase` or `mock` |

## Safe initial launch mode

For first Vercel preview deployment, this is acceptable:

```text
AVS_DATA_SOURCE=mock
```

For live Supabase deployment, set:

```text
AVS_DATA_SOURCE=supabase
NEXT_PUBLIC_SUPABASE_URL=<project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
```

## Deployment rule

Never commit real secrets to the repository. Environment values belong in Vercel Project Settings.
