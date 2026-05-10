export type TemplateCatalogItem = {
  id: string;
  name: string;
  category: string;
  audience: string;
  outputFormats: string[];
  difficulty: "starter" | "pro" | "studio";
  betaReady: boolean;
};

export const templateCatalogV2: TemplateCatalogItem[] = [
  { id: "avs-launch-hero", name: "Launch Hero Visual Prompt", category: "Marketing", audience: "Founders", outputFormats: ["Markdown", "JSON", "TXT"], difficulty: "starter", betaReady: true },
  { id: "avs-client-brief", name: "Client Visual Brief Pack", category: "Agency", audience: "Freelancers", outputFormats: ["Markdown", "JSON"], difficulty: "pro", betaReady: true },
  { id: "avs-educator-diagram", name: "Educator Diagram Prompt", category: "Education", audience: "Teachers", outputFormats: ["Markdown", "TXT"], difficulty: "starter", betaReady: true },
  { id: "avs-repo-readme-visual", name: "Repo README Visual Pack", category: "Developer", audience: "Builders", outputFormats: ["Markdown", "JSON"], difficulty: "pro", betaReady: true },
  { id: "avs-product-explainer", name: "Product Explainer Canvas", category: "SaaS", audience: "Product teams", outputFormats: ["Markdown", "JSON", "TXT"], difficulty: "studio", betaReady: false },
  { id: "avs-investor-onepager", name: "Investor One-Pager Visual Prompt", category: "Business", audience: "Startup teams", outputFormats: ["Markdown", "PDF-ready text"], difficulty: "pro", betaReady: false },
];
