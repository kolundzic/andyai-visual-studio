export function createSvgArtifactTitle(input: string) {
  const clean = input.trim() || "AndyAI Visual Artifact";
  return clean.slice(0, 80);
}

export const svgArtifactContract = {
  format: "svg",
  purpose: "vector visual identity artifact",
  rules: ["clean labels", "lightweight markup", "editable output", "visual canon alignment"],
};
