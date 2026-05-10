import type { AvsProject, AvsTemplate } from "./types";

export const avsTemplates: AvsTemplate[] = [
  {
    id: "avs-template-hero-001",
    slug: "premium-saas-hero",
    title: "Premium SaaS Hero",
    description: "A clean hero section template for serious AI SaaS product landing pages.",
    category: "Landing",
    tags: ["saas", "hero", "landing", "premium"],
    status: "published",
    previewKind: "html",
    tapPrompt: "Create a premium SaaS hero section for an AI visual product. Use a clear headline, trust strip, primary call to action, secondary call to action, and concise value proof.",
    workflow: ["Define product promise", "Select visual tone", "Generate hero copy", "Export prompt"],
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  },
  {
    id: "avs-template-gallery-001",
    slug: "visual-template-gallery",
    title: "Visual Template Gallery",
    description: "A searchable gallery block for AI visual templates, prompt packs, and product cards.",
    category: "Gallery",
    tags: ["gallery", "cards", "search", "templates"],
    status: "published",
    previewKind: "react",
    tapPrompt: "Create a searchable visual template gallery with category filters, keyword search, template cards, preview states, and a clear path into the TAP Editor.",
    workflow: ["Load template catalog", "Apply category filter", "Open template detail", "Save edited project"],
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  },
  {
    id: "avs-template-tap-001",
    slug: "tap-editor-workflow",
    title: "TAP Editor Workflow",
    description: "A guided editor flow for turning reusable visual prompts into saved user projects.",
    category: "Editor",
    tags: ["tap", "editor", "workflow", "prompt"],
    status: "published",
    previewKind: "workflow",
    tapPrompt: "Create a guided TAP editor workspace. The user should open a template, edit the prompt, save a project, preview the project detail, and return to the workspace list.",
    workflow: ["Open template", "Edit TAP prompt", "Save project", "Preview project"],
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  }
];

export const avsProjects: AvsProject[] = [
  {
    id: "local-project-demo-001",
    ownerId: "local-user",
    templateId: "avs-template-hero-001",
    title: "Demo Premium SaaS Hero",
    description: "A local mock project created from the premium SaaS hero template.",
    tapPrompt: "Create a premium SaaS hero section for AndyAI Visual Studio with a strong value proposition and clean visual structure.",
    status: "draft",
    source: "local-mock",
    inputSnapshot: {
      templateId: "avs-template-hero-001",
      mode: "demo"
    },
    outputSnapshot: {
      preview: "Ready for prompt export"
    },
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  }
];
