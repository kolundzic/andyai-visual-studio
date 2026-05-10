# Protected Dashboard Model v0.6.0

## Dashboard States

| State | Behavior |
|---|---|
| Supabase not configured | Shows setup-ready status |
| Signed out | Shows login CTA |
| Signed in | Shows user email and workspace projects |
| Supabase error | Falls back to mock workspace data |

## Why This Matters

The dashboard should never pretend that private SaaS data exists without identity. v0.6.0 makes dashboard visibility depend on auth state.

## Next Layer

The next step is saving projects from the TAP Editor into `avs_projects`.
