import { UsagePlanGateCard } from "@/components/UsagePlanGateCard";

export default function UsageLimitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.7.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Usage Limits + Plan Gates</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        Plan gates define what users can do before billing is activated. This keeps
        the future Stripe integration clean and explainable.
      </p>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <UsagePlanGateCard
          title="Projects"
          limit="Free users can start with a small number of saved projects."
          upgradeReason="Upgrade when project volume becomes serious."
        />
        <UsagePlanGateCard
          title="Exports"
          limit="Export count can be limited by plan and artifact format."
          upgradeReason="Upgrade when export history becomes business-critical."
        />
        <UsagePlanGateCard
          title="Templates"
          limit="Premium template packs can become paid plan features."
          upgradeReason="Upgrade when users need more specialized visual systems."
        />
      </section>
    </main>
  );
}
