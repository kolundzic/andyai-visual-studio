# Architecture

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  

---

## 1. Product architecture

```text
Landing Page
  ↓
Gallery
  ↓
Template Detail
  ↓
TAP Editor
  ↓
Prompt / Workflow Export
  ↓
Dashboard / Saved Projects
  ↓
Supabase Persistence
  ↓
Pricing / Stripe later
```

---

## 2. Conceptual layers

| Layer | Role |
|---|---|
| Public UX | Hero, gallery, template detail, pricing |
| Editing UX | TAP Editor and live output preview |
| Template Registry | IDs, metadata, recipes, categories |
| Export Engine | Prompt, Markdown, JSON, Notion-ready output |
| Persistence | Supabase profiles, projects, exports |
| Monetization | Plan gates and Stripe later |
| Evidence | version history, template source, export metadata |

---

## 3. Initial build strategy

Start without heavy backend complexity.

Recommended sequence:

1. local seed data
2. static gallery
3. local TAP Editor
4. export buttons
5. Supabase read/write
6. auth
7. pricing
8. paid gates

This keeps the product visible and testable from the beginning.
