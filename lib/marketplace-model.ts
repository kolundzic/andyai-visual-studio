export type MarketplaceTemplate = {
  id: string;
  title: string;
  category: string;
  creator: string;
  license: "free" | "premium" | "studio";
  summary: string;
  outputFormats: string[];
};

export const marketplaceTemplates: MarketplaceTemplate[] = [
  {
    id: "AVS-MKT-001",
    title: "Academic Sci-Fi Hero Prompt",
    category: "Hero Visuals",
    creator: "AndyAI Visual Canon",
    license: "free",
    summary: "A launch-ready template for high-trust product hero imagery.",
    outputFormats: ["prompt", "markdown", "json"]
  },
  {
    id: "AVS-MKT-002",
    title: "Evidence Card Visual Pack",
    category: "Trust & Proof",
    creator: "AndyAI Visual Canon",
    license: "premium",
    summary: "Reusable visual prompt structure for proof cards, launch records, and evidence blocks.",
    outputFormats: ["prompt", "markdown", "json", "svg"]
  },
  {
    id: "AVS-MKT-003",
    title: "Visual Factory Diagram Prompt",
    category: "Diagrams",
    creator: "AndyAI Visual Factory",
    license: "studio",
    summary: "A structured template for product-flow diagrams and operational visual maps.",
    outputFormats: ["prompt", "markdown", "json"]
  }
];

export const marketplacePrinciples = [
  "Templates must be reusable, explainable, and exportable.",
  "Every template should connect to a category, output format, and usage intent.",
  "Marketplace items must preserve AndyAI visual canon metadata."
];
