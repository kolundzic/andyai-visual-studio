export type TemplatePreviewBlock = {
  label: string;
  value: string;
};

export const templatePreviewBlocks: TemplatePreviewBlock[] = [
  { label: "Template ID", value: "AVS-MKT-002" },
  { label: "Visual Intent", value: "Evidence card for launch proof" },
  { label: "Style", value: "Academic sci-fi, clean, professional" },
  { label: "Output", value: "Prompt + Markdown + JSON" },
  { label: "Proof Metadata", value: "launch-ready" }
];

export function renderPreviewSummary(blocks: TemplatePreviewBlock[] = templatePreviewBlocks) {
  return blocks.map((block) => `${block.label}: ${block.value}`).join("\n");
}
