export type MarketplaceCategory = {
  slug: string;
  label: string;
  description: string;
  tags: string[];
};

export const marketplaceCategories: MarketplaceCategory[] = [
  {
    slug: "hero-visuals",
    label: "Hero Visuals",
    description: "High-impact product and launch visuals.",
    tags: ["landing", "product", "cinematic", "brand"]
  },
  {
    slug: "trust-proof",
    label: "Trust & Proof",
    description: "Evidence cards, proof strips, audit visuals, and launch receipts.",
    tags: ["evidence", "proof", "audit", "launch"]
  },
  {
    slug: "diagrams",
    label: "Diagrams",
    description: "System maps, product flows, repo flows, and architecture visuals.",
    tags: ["architecture", "flow", "diagram", "system"]
  },
  {
    slug: "social-education",
    label: "Social Education",
    description: "Cards and explainers for courses, posts, and learning products.",
    tags: ["education", "course", "notion", "social"]
  }
];

export const searchV2Rules = [
  "Search by category first.",
  "Filter by tags second.",
  "Show output formats third.",
  "Never hide proof metadata from the user."
];
