export type DemoRoute = {
  path: string;
  label: string;
  purpose: string;
  readiness: "locked" | "demo-ready" | "needs-live-env";
};

export type DemoMilestone = {
  version: string;
  title: string;
  proof: string;
};

export const mvpProductFlow = [
  "Choose visual template",
  "Open TAP Editor",
  "Edit prompt/workflow",
  "Save project",
  "Preview project package",
  "Export prompt artifact",
  "Download TXT / Markdown / JSON",
] as const;

export const demoRoutes: DemoRoute[] = [
  {
    path: "/",
    label: "Home",
    purpose: "Public MVP positioning, product promise, and launch routing.",
    readiness: "locked",
  },
  {
    path: "/gallery",
    label: "Gallery",
    purpose: "Template discovery and template selection entry point.",
    readiness: "demo-ready",
  },
  {
    path: "/tap-editor",
    label: "TAP Editor",
    purpose: "Template-to-prompt editing workspace.",
    readiness: "demo-ready",
  },
  {
    path: "/projects",
    label: "Projects",
    purpose: "User workspace and saved project list.",
    readiness: "needs-live-env",
  },
  {
    path: "/exports",
    label: "Exports",
    purpose: "Export history and reusable prompt artifacts.",
    readiness: "demo-ready",
  },
  {
    path: "/data-preview",
    label: "Data Preview",
    purpose: "Adapter visibility for local mock and Supabase data sources.",
    readiness: "demo-ready",
  },
  {
    path: "/demo",
    label: "Public Demo",
    purpose: "Curated walkthrough for reviewers, partners, and early users.",
    readiness: "locked",
  },
  {
    path: "/status",
    label: "MVP Status",
    purpose: "Public build status and product maturity snapshot.",
    readiness: "locked",
  },
];

export const mvpMilestones: DemoMilestone[] = [
  {
    version: "v0.1.0",
    title: "Initial SaaS Scaffold",
    proof: "Repo initialized with public product direction and first GitHub tag.",
  },
  {
    version: "v0.3.0",
    title: "Frontend Product Shell",
    proof: "Landing, gallery, template detail, TAP Editor, pricing, and dashboard shell.",
  },
  {
    version: "v0.5.0",
    title: "Live Supabase Client Wiring",
    proof: "Supabase client, adapter switch, real template fetch, and safe local fallback.",
  },
  {
    version: "v0.7.0",
    title: "Template Save & Project Creation Flow",
    proof: "Template → editor → save project → project preview → workspace list.",
  },
  {
    version: "v0.9.0",
    title: "Export Download & Artifact Package Layer",
    proof: "Downloadable TXT, Markdown, and JSON prompt artifact package layer.",
  },
  {
    version: "v1.0.0",
    title: "MVP Product Lock & Public Demo Readiness",
    proof: "Public demo route, route QA, README launch pass, and Vercel deploy checklist.",
  },
];

export const mvpStatus = {
  version: "v1.0.0",
  label: "MVP Product Lock",
  status: "public-demo-ready",
  repo: "andyai-visual-studio",
  product: "AndyAI Visual Studio",
  oneLiner:
    "A SaaS studio for turning reusable AI visual templates into editable prompts, saved projects, and downloadable artifact packages.",
};
