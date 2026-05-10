export type PremiumTemplateMetadata = {
  templateId: string;
  tier: "free" | "creator" | "pro" | "studio";
  commercialUse: boolean;
  includesSourcePrompt: boolean;
  includesExportPackage: boolean;
  proofLevel: "basic" | "verified" | "launch-ready";
};

export const premiumTemplateMetadata: PremiumTemplateMetadata[] = [
  {
    templateId: "AVS-MKT-001",
    tier: "free",
    commercialUse: true,
    includesSourcePrompt: true,
    includesExportPackage: false,
    proofLevel: "basic"
  },
  {
    templateId: "AVS-MKT-002",
    tier: "pro",
    commercialUse: true,
    includesSourcePrompt: true,
    includesExportPackage: true,
    proofLevel: "verified"
  },
  {
    templateId: "AVS-MKT-003",
    tier: "studio",
    commercialUse: true,
    includesSourcePrompt: true,
    includesExportPackage: true,
    proofLevel: "launch-ready"
  }
];
