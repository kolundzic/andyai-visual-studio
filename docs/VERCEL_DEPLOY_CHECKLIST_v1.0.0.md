# Vercel Deploy Checklist — v1.0.0

## 1. Local preparation

```bash
cd ~/Documents/Projects/andyai-visual-studio
npm install
npm run verify:v1.0.0
npm run route:qa
npm run build
```

## 2. Environment variables

Create `.env.local` locally and configure matching Vercel environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_AVS_DATA_SOURCE=mock
```

For early public demo, `NEXT_PUBLIC_AVS_DATA_SOURCE=mock` is acceptable.

For live Supabase demo, switch to:

```bash
NEXT_PUBLIC_AVS_DATA_SOURCE=supabase
```

## 3. Vercel deployment

```bash
vercel
vercel --prod
```

## 4. Post-deploy smoke test

Open these routes:

```text
/
/demo
/status
/gallery
/tap-editor
/data-preview
/exports
```

Then test one project route if demo data exists.

## 5. Public proof

After deployment, record:

- Production URL
- GitHub commit
- GitHub tag
- Build status
- Known limitations
- Next version target
