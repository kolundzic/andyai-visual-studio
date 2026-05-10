import { renderPreviewSummary, templatePreviewBlocks } from "@/lib/template-preview-renderer";

export function TemplatePreviewRenderer() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">v3.6.0 Preview Renderer</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Template Preview Renderer</h1>
      <p className="mt-4 text-slate-600">
        A structured preview layer that shows what a marketplace template will produce before export.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {templatePreviewBlocks.map((block) => (
          <div key={block.label} className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{block.label}</p>
            <p className="mt-2 text-lg font-bold text-slate-950">{block.value}</p>
          </div>
        ))}
      </div>
      <pre className="mt-8 overflow-auto rounded-2xl bg-slate-950 p-5 text-sm text-slate-100">{renderPreviewSummary()}</pre>
    </section>
  );
}
