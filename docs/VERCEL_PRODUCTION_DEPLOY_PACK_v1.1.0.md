# AndyAI Visual Studio v1.1.0 — Vercel Production Deploy Pack

## Status

Canonical production deploy preparation layer.

## Purpose

This release prepares AndyAI Visual Studio for a serious Vercel production deployment pass after the v1.0.0 MVP lock.

## Added

- `vercel.json` with Next.js framework preset and explicit build, install, and dev commands.
- `/production-smoke` route for deployment proof.
- Environment checklist for Supabase-ready public deployment.
- Deploy proof guide for collecting evidence after deployment.
- Production smoke script.
- v1.1.0 verification script.
- README launch deployment section.
- CHANGELOG entry.

## Production Proof Formula

```text
Repo clean → Vercel config present → env checked → deploy triggered → smoke route opens → proof recorded
```

## Deployment Target

The app remains safe before live Supabase configuration because the data adapter can fall back to local mock data.
