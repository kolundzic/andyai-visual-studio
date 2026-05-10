# TAP Editor Specification

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  

---

## 1. What TAP Editor means

TAP Editor converts a reusable visual template into a practical output the user can copy, export, save, or later generate from.

TAP stands for:

| Letter | Meaning | Plain explanation |
|---|---|---|
| T | Template | The reusable visual structure |
| A | Adaptation | The user's custom goal and details |
| P | Production | The final prompt/workflow/export |

---

## 2. Core flow

```text
Template selected
→ TAP Editor opens
→ User edits fields
→ System builds structured prompt/workflow
→ User previews output text
→ User exports or saves project
```

---

## 3. Required editor fields

| Field | Purpose |
|---|---|
| Project title | Name of the user's visual task |
| Audience | Who the visual is for |
| Goal | What the visual must explain or sell |
| Visual style | Look and feel |
| Output type | Diagram, poster, card, mockup, prompt pack |
| Key objects | Main visual elements |
| Text language | EN, SR, JP, etc. |
| Constraints | What to avoid |
| Export format | Prompt, Markdown, JSON, Notion-ready |

---

## 4. Editor panels

Recommended UI layout:

```text
Left panel: Template info
Center panel: Editable fields
Right panel: Generated prompt/workflow preview
Bottom bar: Save / Export / Copy / Upgrade
```

---

## 5. Output structure

Every generated output should include:

1. Template ID
2. Template title
3. User goal
4. Audience
5. Visual style
6. Scene or diagram structure
7. Text instructions
8. Constraints
9. Export metadata

---

## 6. First MVP behavior

For v0.3-v0.4, TAP Editor can start as a local client-side editor using seed JSON.

No AI generation is required in the first MVP.

The first serious goal is:

> User chooses template → edits fields → gets a clean structured prompt.

---

## 7. Future behavior

Later versions can add:

- saved projects
- Supabase persistence
- prompt version history
- paid exports
- generated previews
- team workspaces
- template cloning
- custom private templates
