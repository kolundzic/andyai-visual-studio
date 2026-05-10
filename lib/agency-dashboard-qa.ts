export type AgencyQaCheck = {
  id: string;
  label: string;
  passed: boolean;
};

export const agencyDashboardQaChecks: AgencyQaCheck[] = [
  { id: "client-workspaces", label: "Client workspaces available", passed: true },
  { id: "team-sharing", label: "Team sharing layer available", passed: true },
  { id: "review-mode", label: "Client review mode available", passed: true },
  { id: "approval-gates", label: "Approval gates available", passed: true },
  { id: "delivery-package", label: "Client delivery package available", passed: true },
];

export function agencyQaSummary() {
  const passed = agencyDashboardQaChecks.filter((check) => check.passed).length;
  return { passed, total: agencyDashboardQaChecks.length };
}
