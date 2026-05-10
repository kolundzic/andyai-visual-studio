# 🅰️💥 AndyAI Visual Studio v0.3.0
## Frontend Product Shell

**Status:** LOCKED  
**Version:** `v0.3.0`  
**Purpose:** Establish the first functional frontend product shell for the public SaaS version of AndyAI Visual Studio.

━━━━━━━━━━━━━━━━━━━━

## 1. What v0.3.0 Adds

v0.3.0 moves the repo from documentation-only product planning into a visible frontend product shell.

It introduces:

- Landing page
- Gallery page
- Template detail page
- TAP Editor skeleton
- Pricing page
- Dashboard skeleton
- Seed template catalog
- Search/filter gallery component
- Prompt export preview component
- Shared visual styling

━━━━━━━━━━━━━━━━━━━━

## 2. Product Logic

The frontend follows the locked commercial flow:

**Hero → Gallery → Template Detail → TAP Editor → Prompt/Export → Pricing → Dashboard**

The user should immediately understand three things:

1. This is a template marketplace and production studio.
2. Templates are not static prompts; they become editable TAP workflows.
3. The system is designed for future paid accounts, saved projects, exports, and team workflows.

━━━━━━━━━━━━━━━━━━━━

## 3. Beginner Glossary

| Term | Serbian Translation | Plain Explanation |
|---|---|---|
| Frontend | Korisnički deo aplikacije | Deo aplikacije koji korisnik vidi i koristi u browseru. |
| Product Shell | Kostur proizvoda | Prva vidljiva struktura proizvoda: stranice, navigacija, osnovni tok i dizajn. |
| Route | Putanja stranice | Adresa unutar web aplikacije, kao `/gallery` ili `/pricing`. |
| Component | Komponenta | Mali deo interfejsa koji se može ponovo koristiti, na primer kartica ili navigacija. |
| TAP Editor | Uređivač vođene akcije | Mesto gde korisnik uzima template i pretvara ga u strukturisan prompt/workflow. |

━━━━━━━━━━━━━━━━━━━━

## 4. Next Step

The next logical version is:

**v0.4.0 → Supabase Catalog Wiring**

That version should replace the static seed catalog with database-ready template storage and retrieval.
