export type WorkspaceMetric = {
  label: string;
  value: string;
  note: string;
};

export const workspaceMetrics: WorkspaceMetric[] = [
  {
    label: "Projects",
    value: "User-owned",
    note: "Every saved template becomes a workspace project.",
  },
  {
    label: "Exports",
    value: "Versioned",
    note: "Prompt artifacts can be saved, copied, and downloaded.",
  },
  {
    label: "Beta readiness",
    value: "Tracked",
    note: "Demo, deploy, QA, and launch candidate routes are visible.",
  },
];
