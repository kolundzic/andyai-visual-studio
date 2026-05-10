import { getProductDataAdapter } from "../../lib/data";

export const metadata = {
  title: "Data Preview | AndyAI Visual Studio",
  description: "v0.4.0 Supabase Product Data Layer preview using the local mock adapter.",
};

export default async function DataPreviewPage() {
  const adapter = getProductDataAdapter();
  const templates = await adapter.listTemplates();
  const projects = await adapter.listProjects("demo-user");
  const exports = projects[0] ? await adapter.listExportsByProject(projects[0].id, "demo-user") : [];

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">v0.4.0 Data Layer</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Supabase Product Data Layer Preview</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This page proves the first product data layer: templates, projects, exports, starter RLS docs,
          SQL migration, seed data, and a local mock adapter that keeps the frontend working before live
          Supabase auth is connected.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-500">Templates</p>
          <p className="mt-2 text-4xl font-bold text-slate-950">{templates.length}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-500">Demo Projects</p>
          <p className="mt-2 text-4xl font-bold text-slate-950">{projects.length}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-500">Demo Exports</p>
          <p className="mt-2 text-4xl font-bold text-slate-950">{exports.length}</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <article key={template.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{template.templateCode}</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{template.title}</h2>
            <p className="mt-2 text-sm font-medium text-slate-500">{template.category}</p>
            <p className="mt-4 text-sm leading-6 text-slate-700">{template.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
