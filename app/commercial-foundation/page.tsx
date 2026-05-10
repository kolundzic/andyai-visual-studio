import { CommercialFoundationBadge } from "@/components/CommercialFoundationBadge";

export default function CommercialFoundationPage() {
  const pillars = [
    "Public beta surface",
    "Production deploy path",
    "Auth-ready workspace",
    "Supabase data layer",
    "Export and package workflow",
    "Pricing and plan-gate architecture",
    "Feedback signal layer",
    "Commercial launch documentation",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <CommercialFoundationBadge />
      <h1 className="mt-6 text-5xl font-bold tracking-tight">Commercial SaaS Foundation Lock</h1>
      <p className="mt-5 max-w-3xl text-lg text-neutral-700">
        AndyAI Visual Studio is now structured as a commercial SaaS foundation:
        demo-ready, deploy-ready, workspace-ready, export-ready, and beta-feedback-ready.
      </p>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar} className="rounded-3xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Foundation Pillar</p>
            <h2 className="mt-3 text-2xl font-bold">{pillar}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
