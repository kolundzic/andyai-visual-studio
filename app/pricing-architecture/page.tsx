import { pricingPlans } from "@/lib/pricing-architecture";

export default function PricingArchitecturePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.6.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Stripe Pricing Architecture Draft</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        This is not live billing yet. It is the pricing architecture map that prepares
        the product for Stripe integration.
      </p>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-3 text-neutral-700">{plan.audience}</p>
            <p className="mt-5 rounded-2xl bg-neutral-50 p-4 text-sm font-semibold">
              {plan.betaLimit}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
