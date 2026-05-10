export type PublicDemoScenario = {
  id: string;
  title: string;
  audience: string;
  userGoal: string;
  templateFlow: string[];
  exportResult: string;
  proofPoint: string;
};

export const publicDemoScenarios: PublicDemoScenario[] = [
  {
    id: "founder-launch-pack",
    title: "Founder launch visual pack",
    audience: "Solo founder / startup team",
    userGoal: "Turn a product idea into a launch-ready visual prompt package.",
    templateFlow: ["Choose launch template", "Edit TAP prompt", "Save project", "Export Markdown + JSON"],
    exportResult: "A reusable launch prompt package for landing pages, posts, decks, and visuals.",
    proofPoint: "Shows how one template becomes a repeatable production workflow.",
  },
  {
    id: "agency-client-delivery",
    title: "Agency client delivery pack",
    audience: "AI agency / freelancer",
    userGoal: "Create a client-ready visual content package with structured prompt evidence.",
    templateFlow: ["Select client template", "Customize brand angle", "Save project", "Download package"],
    exportResult: "A clean prompt artifact with metadata that can be reused or reviewed.",
    proofPoint: "Moves the product from demo toy to practical delivery workflow.",
  },
  {
    id: "educator-explainer-kit",
    title: "Educator explainer kit",
    audience: "Teacher / trainer / course creator",
    userGoal: "Convert a lesson idea into a structured visual explainer prompt.",
    templateFlow: ["Open educational template", "Adapt beginner language", "Save project", "Copy prompt"],
    exportResult: "A teaching-oriented prompt pack for diagrams, slides, and visual summaries.",
    proofPoint: "Demonstrates value beyond marketing: education, documentation, and training.",
  },
];
