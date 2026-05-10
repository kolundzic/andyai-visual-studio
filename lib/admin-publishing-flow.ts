export type AdminPublishingStep = {
  step: number;
  title: string;
  approvalGate: string;
};

export const adminPublishingFlow: AdminPublishingStep[] = [
  { step: 1, title: "Draft Template", approvalGate: "author review" },
  { step: 2, title: "Attach Metadata", approvalGate: "metadata completeness" },
  { step: 3, title: "Preview Artifact", approvalGate: "visual QA" },
  { step: 4, title: "Run Marketplace QA", approvalGate: "governance check" },
  { step: 5, title: "Publish", approvalGate: "admin approval" }
];
