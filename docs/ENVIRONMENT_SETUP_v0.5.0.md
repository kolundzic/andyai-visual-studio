# Environment Setup — v0.5.0

## Local mock mode

Default mode:

```bash
AVS_DATA_MODE=mock
NEXT_PUBLIC_AVS_DATA_MODE=mock
```

This requires no Supabase credentials.

## Live Supabase mode

Create `.env.local` from `.env.example` and set:

```bash
AVS_DATA_MODE=supabase
NEXT_PUBLIC_AVS_DATA_MODE=supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app reads public templates through the `avs_templates` table.

## Service role key

`SUPABASE_SERVICE_ROLE_KEY` is reserved for future server-side administration tasks. It must never be exposed in browser code.
