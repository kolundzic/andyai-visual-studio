import { templates } from "../../../lib/templates";

export default function TemplateDetailPage({ params }: { params: { slug: string } }) {
  const template = templates.find((t) => t.slug === params.slug) ?? templates[0];
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-cyan-300">{template.templateId}</div>
        <h1 className="mt-2 text-4xl font-bold">{template.name}</h1>
        <p className="mt-4 text-slate-300">{template.bestFor}</p>
        <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <div>Category: {template.category}</div>
          <div>Style: {template.styleFamily}</div>
          <div>Format: {template.format}</div>
        </div>
        <a className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950" href={`/tap/${template.templateId}`}>TAP Template</a>
      </div>
    </main>
  );
}
