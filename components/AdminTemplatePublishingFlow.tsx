import { adminPublishingFlow } from "@/lib/admin-publishing-flow";

export function AdminTemplatePublishingFlow() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">v3.8.0 Admin Publishing</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Admin Template Publishing Flow</h1>
      <p className="mt-4 text-slate-600">
        Publishing needs gates: metadata, preview, QA, governance, and human approval.
      </p>
      <div className="mt-8 grid gap-4">
        {adminPublishingFlow.map((item) => (
          <article key={item.step} className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold text-red-600">STEP {item.step}</p>
            <h2 className="mt-1 text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">Gate: {item.approvalGate}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
