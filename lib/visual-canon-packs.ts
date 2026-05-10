export type VisualCanonPack = {
  id: string;
  title: string;
  purpose: string;
  templates: string[];
  canonLinks: string[];
};

export const visualCanonPacks: VisualCanonPack[] = [
  {
    id: "AVS-PACK-001",
    title: "Launch Proof Pack",
    purpose: "Visual proof cards, status badges, and launch evidence panels.",
    templates: ["AVS-MKT-002", "AVS-MKT-003"],
    canonLinks: ["Visual Canon", "TAPFORGE", "Trust Layer"]
  },
  {
    id: "AVS-PACK-002",
    title: "Academic Sci-Fi Product Pack",
    purpose: "Hero visuals and product identity prompts for serious AI products.",
    templates: ["AVS-MKT-001"],
    canonLinks: ["Visual Template System", "Visual Factory"]
  },
  {
    id: "AVS-PACK-003",
    title: "Diagram Explainer Pack",
    purpose: "System diagrams, repo maps, and educational visual blocks.",
    templates: ["AVS-MKT-003"],
    canonLinks: ["Knowledge Factory", "Director", "RAG Ingestion Factory"]
  }
];
