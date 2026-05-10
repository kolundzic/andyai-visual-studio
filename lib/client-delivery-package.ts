export type ClientDeliveryPackageItem = {
  id: string;
  label: string;
  format: "prompt" | "markdown" | "html" | "svg" | "diagram" | "evidence";
  status: "ready" | "review" | "approved";
};

export const clientDeliveryPackageItems: ClientDeliveryPackageItem[] = [
  { id: "prompt-export", label: "Edited TAP Prompt", format: "prompt", status: "approved" },
  { id: "readme-pack", label: "README Visual Pack", format: "markdown", status: "ready" },
  { id: "html-export", label: "Client HTML Export", format: "html", status: "ready" },
  { id: "evidence-log", label: "Evidence + Metadata Sheet", format: "evidence", status: "review" },
];

export function summarizeDeliveryPackage() {
  const approved = clientDeliveryPackageItems.filter((item) => item.status === "approved").length;
  return {
    total: clientDeliveryPackageItems.length,
    approved,
    pending: clientDeliveryPackageItems.length - approved,
  };
}
