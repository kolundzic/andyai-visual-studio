# Vercel Deploy Runbook — v1.1.0

## Local preflight

```bash
cd ~/Documents/Projects/andyai-visual-studio
npm install
npm run verify:v1.1.0
npm run build
```

## GitHub proof

```bash
git status --short
git log --oneline -5
git tag --list "v1.1.0"
git ls-remote --tags origin "v1.1.0"
```

## Vercel project settings

- Framework Preset: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`
- Development Command: `npm run dev`
- Root Directory: repository root

## First deployment mode

Use mock mode first if live Supabase environment is not ready.

```text
AVS_DATA_SOURCE=mock
```

## Production deployment mode

Use Supabase mode after the Supabase project URL and anon key are configured.

```text
AVS_DATA_SOURCE=supabase
```
