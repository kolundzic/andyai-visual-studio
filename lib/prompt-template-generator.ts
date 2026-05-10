export type PromptToTemplateStage = {
  step: number;
  title: string;
  input: string;
  output: string;
};

export const promptToTemplateStages: PromptToTemplateStage[] = [
  { step: 1, title: "Capture Intent", input: "raw user prompt", output: "clean visual purpose" },
  { step: 2, title: "Extract Structure", input: "purpose + constraints", output: "template fields" },
  { step: 3, title: "Attach Canon", input: "template fields", output: "style and proof metadata" },
  { step: 4, title: "Generate Template", input: "canon metadata", output: "reusable template object" },
  { step: 5, title: "Verify Export", input: "template object", output: "prompt, markdown, json package" }
];
