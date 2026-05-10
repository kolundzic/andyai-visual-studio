# Vercel Deploy Proof Guide — v1.1.0

## Goal

After deployment, collect proof that the public demo can load and that the core public routes are reachable.

## Proof checklist

| Proof item | Expected result |
|---|---|
| Vercel build completed | Deployment shows ready/success |
| Home route | `/` opens |
| Demo route | `/demo` opens |
| Status route | `/status` opens |
| Production smoke route | `/production-smoke` opens |
| Gallery route | `/gallery` opens |
| Data preview route | `/data-preview` opens |

## Evidence to save

- Deployment URL
- Build status screenshot
- `/production-smoke` screenshot
- `/status` screenshot
- Commit SHA deployed
- Tag deployed

## Canonical proof sentence

```text
AndyAI Visual Studio v1.1.0 deployed successfully to Vercel and passed the production smoke route check.
```
