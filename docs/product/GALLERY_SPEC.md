# Gallery Specification

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  

---

## 1. Purpose

The Gallery is the public catalog of reusable AndyAI visual templates.

The user should be able to find a template by:

- category
- keyword
- visual style
- output type
- use case
- known template ID

---

## 2. Template ID standard

Template IDs should remain stable.

Recommended pattern:

```text
AVTS-001
AVTS-002
AVTS-003
```

Meaning:

- `AVTS` = AndyAI Visual Template System
- number = stable template number

Public SaaS pages may also use product-friendly slugs:

```text
/visual-studio/templates/avts-001-academic-sci-fi-hero
```

---

## 3. Gallery card fields

Each card should show:

| Field | Description |
|---|---|
| Template ID | Stable identifier |
| Title | Human-readable name |
| Category | Main classification |
| Short description | One-sentence purpose |
| Output type | Prompt, diagram, mockup, poster, slide, etc. |
| Difficulty | Beginner, Intermediate, Advanced |
| Style | Academic, sci-fi, editorial, corporate, etc. |
| CTA | Use Template |

---

## 4. Category draft

Initial categories:

1. Academic Sci-Fi Visuals
2. SaaS Product Screens
3. Knowledge Factory Diagrams
4. Agent System Maps
5. Evidence Cards
6. Presentation Visuals
7. Poster / Magazine Layouts
8. UI Mockup Prompts
9. Workflow Diagrams
10. Brand Identity Blocks

---

## 5. Search behavior

Minimum search fields:

- template ID
- title
- category
- description
- tags
- output type

Example searches:

```text
AVTS-001
agent diagram
academic sci-fi
SaaS hero
knowledge factory
```

---

## 6. Empty states

If no result is found, the UI should suggest:

- try broader keyword
- browse all categories
- request a new template
- save search idea for future template creation

---

## 7. Future paid behavior

Free users:

- browse public templates
- use limited exports
- save limited projects

Paid users:

- access premium templates
- save more projects
- export structured packs
- access advanced workflows
