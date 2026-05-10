export type PricingPlan = {
  name: string;
  audience: string;
  betaLimit: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    audience: "Learners and early testers",
    betaLimit: "Limited projects and exports",
  },
  {
    name: "Creator",
    audience: "Solo creators and technical writers",
    betaLimit: "More templates and export formats",
  },
  {
    name: "Studio",
    audience: "Agencies and product teams",
    betaLimit: "Team-ready workspace direction",
  },
];
