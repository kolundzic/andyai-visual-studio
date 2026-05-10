# 🅰️💥 AndyAI Visual Studio — Product Specification

**Version:** `v0.2.0`  
**Status:** Canonical Product Foundation  
**Product Type:** Public SaaS / Commercial AI Visual Template Studio  

---

## 1. Product thesis

AndyAI Visual Studio helps users produce high-quality AI visuals by using reusable, editable visual templates instead of chaotic one-off prompting.

The key idea is simple:

> A good visual output should come from a governed template, not from random prompting.

---

## 2. Target users

| User type | Need |
|---|---|
| Solo creator | Make strong visuals faster |
| Educator | Produce diagrams, slides, and explanation visuals |
| AI consultant | Prepare client-ready visual assets |
| Startup founder | Build pitch visuals and product mockups |
| Agency | Reuse prompt systems across clients |
| Internal AndyAI operator | Convert project concepts into visual assets |

---

## 3. Main user journey

```text
1. User lands on homepage
2. User understands the promise
3. User opens gallery
4. User searches or filters templates
5. User opens template detail page
6. User clicks Use Template
7. TAP Editor opens
8. User edits goal, audience, tone, visual style, constraints
9. System produces structured prompt/workflow
10. User exports or saves project
```

---

## 4. Product modules

### 4.1 Hero module

Purpose: explain the product in one screen.

Required elements:

- strong headline
- short promise
- primary CTA: Browse Templates
- secondary CTA: See How It Works
- proof strip: templates, exports, projects, categories

### 4.2 Gallery module

Purpose: help users find the right template.

Required filters:

- category
- use case
- output type
- difficulty
- style family
- known template ID

### 4.3 Template Detail module

Purpose: explain one template before use.

Required fields:

- template ID
- title
- category
- preview description
- best use cases
- input fields
- output formats
- license/usage note
- TAP Editor launch button

### 4.4 TAP Editor module

Purpose: convert a visual template into an editable production workflow.

TAP means:

- **Template** — reusable structure
- **Adaptation** — user-specific changes
- **Production** — prompt/export/workflow output

### 4.5 Export module

Initial export formats:

- Prompt text
- Markdown block
- JSON recipe
- Notion-ready documentation block

Future export formats:

- SVG
- HTML
- PDF-ready guide
- PowerPoint-ready section
- image model prompt pack

---

## 5. Non-negotiable principles

1. The product must be useful to beginners.
2. The product must not feel like a blank prompt box.
3. Every template needs an ID.
4. Every output needs enough structure to be reused.
5. Paid value must come from workflow depth, not artificial confusion.
6. The user should always understand what happens next.

---

## 6. v0.2.0 success definition

This version is successful when the repo clearly defines:

- what the SaaS is
- who it serves
- how the gallery works
- how the TAP Editor works
- what the database stores
- how pricing can work
- what the next build steps are
