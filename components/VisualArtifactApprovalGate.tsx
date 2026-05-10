import { VisualArtifactApprovalGateItems, VisualArtifactApprovalGateSummary } from "@/lib/artifact-approval-gate";

export function VisualArtifactApprovalGate() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">{VisualArtifactApprovalGateSummary.version}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-950">{VisualArtifactApprovalGateSummary.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          Agency/client delivery layer for AndyAI Visual Studio. This route documents the workflow, data contract, and product intent.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {VisualArtifactApprovalGateItems.map((item) => (
            <div key={item} className="rounded-2xl border border-neutral-200 p-5">
              <div className="font-semibold text-neutral-950">{item}</div>
              <p className="mt-2 text-sm text-neutral-600">Locked into the agency delivery roadmap.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
