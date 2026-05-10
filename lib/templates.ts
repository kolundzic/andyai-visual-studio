export type VisualTemplate = {
  id: string;
  name: string;
  category: string;
  level: "Starter" | "Pro" | "Studio";
  summary: string;
  useCase: string;
  promptSeed: string;
  tags: string[];
};

export const templates: VisualTemplate[] = [
  {
    id: "AVS-001",
    name: "Academic Sci-Fi Hero Diagram",
    category: "Hero Visuals",
    level: "Starter",
    summary: "A clean hero visual for explaining a serious AI product, research layer, or trust engine.",
    useCase: "Landing pages, README covers, investor explainers, SaaS product intros.",
    promptSeed: "Create an academic sci-fi hero diagram for a trustworthy AI visual production system, with layered architecture, clean labels, luminous edges, and premium editorial composition.",
    tags: ["hero", "architecture", "sci-fi", "academic"]
  },
  {
    id: "AVS-002",
    name: "TAP Editor Workflow Card",
    category: "Workflow Systems",
    level: "Starter",
    summary: "A visual workflow card that turns template selection into guided prompt editing and export.",
    useCase: "Product demos, guided action flows, educational explainers, TAP-TAP documentation.",
    promptSeed: "Create a workflow card showing Template → Human Edit → TAP Structure → Prompt Export → Verified Result, with compact visual blocks and clear directional flow.",
    tags: ["workflow", "tap", "editor", "guided action"]
  },
  {
    id: "AVS-003",
    name: "Evidence Card Layout",
    category: "Trust Layer",
    level: "Pro",
    summary: "A reusable evidence card for showing source, assumption, output, verification, and next action.",
    useCase: "Trust dashboards, AI governance pages, agent reviews, client proposal proof sections.",
    promptSeed: "Create a premium evidence card layout for AI output verification, including source, assumption, generated output, proof status, and human approval marker.",
    tags: ["evidence", "trust", "governance", "proof"]
  },
  {
    id: "AVS-004",
    name: "Template Marketplace Preview",
    category: "Marketplace",
    level: "Studio",
    summary: "A market-ready gallery preview card for selling visual templates by category, ID, and use case.",
    useCase: "Template marketplace listings, SaaS gallery pages, public product showcases.",
    promptSeed: "Create a polished template marketplace preview with ID, category, usage badges, miniature diagram preview, price tier, and conversion-focused call-to-action.",
    tags: ["marketplace", "gallery", "pricing", "preview"]
  }
];

export function getTemplateById(templateId: string) {
  return templates.find((template) => template.id.toLowerCase() === templateId.toLowerCase());
}

export const categories = Array.from(new Set(templates.map((template) => template.category)));
