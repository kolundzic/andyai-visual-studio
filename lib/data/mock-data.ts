import type { AvsExport, AvsProject, AvsTemplate } from "./types";

const now = "2026-05-10T00:00:00.000Z";

export const mockTemplates: AvsTemplate[] = [
  {
    id: "template-avs-001",
    templateCode: "AVS-001",
    slug: "academic-sci-fi-system-map",
    title: "Academic Sci-Fi System Map",
    category: "Architecture Diagram",
    difficulty: "starter",
    status: "published",
    visibility: "public",
    summary:
      "A clean academic/business diagram template for explaining complex AI systems as readable blocks.",
    promptTemplate:
      "Create a clean academic sci-fi system map for {{project_name}}. Use serious business style, clear layers, evidence cards, and human approval gates.",
    workflow: {
      steps: ["define-system", "map-layers", "add-evidence", "export-prompt"],
      outputContract: "diagram-prompt-v1",
      approvalRequired: true,
    },
    tags: ["architecture", "diagram", "visual-canon", "business"],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "template-avs-002",
    templateCode: "AVS-002",
    slug: "saas-product-flow-board",
    title: "SaaS Product Flow Board",
    category: "Product Flow",
    difficulty: "starter",
    status: "published",
    visibility: "public",
    summary:
      "A visual product flow board for landing page, gallery, detail, editor, export, pricing, and dashboard flows.",
    promptTemplate:
      "Create a SaaS product flow board for {{product_name}} with user journey, monetization checkpoints, and verification steps.",
    workflow: {
      steps: ["hero", "gallery", "detail", "editor", "export", "pricing", "dashboard"],
      outputContract: "product-flow-prompt-v1",
      approvalRequired: false,
    },
    tags: ["saas", "product", "flow", "dashboard"],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "template-avs-003",
    templateCode: "AVS-003",
    slug: "evidence-card-showroom",
    title: "Evidence Card Showroom",
    category: "Evidence Visual",
    difficulty: "starter",
    status: "published",
    visibility: "paid",
    summary:
      "A card-based visual proof layout for showing source, decision, approval, risk, and next action.",
    promptTemplate:
      "Create evidence cards for {{workflow_name}} with source, decision, risk, human approval, and proof fields.",
    workflow: {
      steps: ["source", "decision", "risk", "approval", "proof"],
      outputContract: "evidence-card-prompt-v1",
      approvalRequired: true,
    },
    tags: ["evidence", "governance", "cards", "trust"],
    createdAt: now,
    updatedAt: now,
  },
];

export const mockProjects: AvsProject[] = [
  {
    id: "project-demo-001",
    ownerId: "demo-user",
    templateId: "template-avs-001",
    title: "AndyAI Visual Studio Architecture Demo",
    status: "ready",
    userPrompt: "Explain AndyAI Visual Studio as a reusable visual production SaaS.",
    generatedPrompt:
      "Create a clean architecture diagram for AndyAI Visual Studio with gallery, TAP editor, prompt export, pricing, dashboard, Supabase data layer, and human approval.",
    settings: {
      aspectRatio: "16:9",
      language: "en",
      style: "academic-business-sci-fi",
    },
    createdAt: now,
    updatedAt: now,
  },
];

export const mockExports: AvsExport[] = [
  {
    id: "export-demo-001",
    projectId: "project-demo-001",
    ownerId: "demo-user",
    exportType: "prompt",
    status: "completed",
    artifactUrl: null,
    metadata: {
      format: "copy-ready prompt",
      version: "v0.4.0",
    },
    createdAt: now,
  },
];
