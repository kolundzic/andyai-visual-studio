# Pricing Model

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  
**Status:** Draft for future Stripe integration

---

## 1. Pricing philosophy

The product should monetize real workflow value, not confusion.

Free users should understand the product and experience value quickly.

Paid users should pay for:

- more templates
- saved projects
- advanced exports
- team workflows
- premium prompt systems
- commercial production support

---

## 2. Draft plans

| Plan | Target user | Monthly idea | Core value |
|---|---:|---:|---|
| Free | Curious beginner | $0 | Browse and test public templates |
| Creator | Solo creator | $9-$19 | Save projects and export more prompts |
| Pro | Consultant / founder | $29-$49 | Advanced workflows, premium templates, structured exports |
| Studio | Agency / team | $99+ | Team workspace, brand kits, client-ready production packs |

---

## 3. Feature matrix draft

| Feature | Free | Creator | Pro | Studio |
|---|---:|---:|---:|---:|
| Browse public gallery | Yes | Yes | Yes | Yes |
| Use free templates | Limited | Yes | Yes | Yes |
| Premium templates | No | Limited | Yes | Yes |
| Saved projects | 3 | 50 | 500 | Team quota |
| Prompt export | Limited | Yes | Yes | Yes |
| JSON workflow export | No | Limited | Yes | Yes |
| Notion-ready export | No | Yes | Yes | Yes |
| Brand kits | No | No | Limited | Yes |
| Team workspace | No | No | No | Yes |
| Client-ready packs | No | No | Yes | Yes |

---

## 4. Early monetization note

Do not integrate Stripe too early.

Recommended order:

```text
Product clarity → Gallery MVP → TAP Editor MVP → Save/export → Pricing page → Stripe
```

---

## 5. Future paid signals

Good signals for paid conversion:

- user saves more than 3 projects
- user exports JSON workflows
- user uses premium categories
- user wants brand-specific templates
- user wants commercial usage packs
