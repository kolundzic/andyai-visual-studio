export type TapInput = {
  projectName: string;
  topic: string;
  audience: string;
  language: string;
  format: string;
  requiredLabels: string;
  avoid: string;
};

export function buildPrompt(templatePrompt: string, input: TapInput) {
  return `${templatePrompt}

Project: ${input.projectName}
Topic: ${input.topic}
Audience: ${input.audience}
Language: ${input.language}
Format: ${input.format}
Required labels: ${input.requiredLabels}
Avoid: ${input.avoid}`;
}
