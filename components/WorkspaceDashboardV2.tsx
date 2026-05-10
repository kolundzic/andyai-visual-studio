import { workspaceMetrics } from "@/lib/workspace-metrics";

export function WorkspaceDashboardV2() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {workspaceMetrics.map((metric) => (
        <article key={metric.label} className="rounded-3xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {metric.label}
          </p>
          <h3 className="mt-3 text-3xl font-bold">{metric.value}</h3>
          <p className="mt-3 text-neutral-700">{metric.note}</p>
        </article>
      ))}
    </section>
  );
}
