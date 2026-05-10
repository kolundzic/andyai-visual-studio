# v0.6.0 Release — Supabase Auth & User Project Workspace

## Added

- `.env.example` auth keys
- `@supabase/ssr` dependency
- auth-aware Supabase server client
- `/login`
- `/auth/callback`
- `/auth/sign-out`
- protected dashboard model
- `/projects`
- `/projects/[projectId]`
- user project workspace adapter
- starter RLS migration for owner-scoped projects and exports
- auth/workspace documentation
- v0.6.0 verifier

## Result

AndyAI Visual Studio is now login-ready and workspace-ready. It still keeps the safe mock fallback, but the architecture is prepared for real user-owned SaaS projects.
