import { templates } from "../../lib/templates";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Template Gallery</h1>
        <p className="mt-3 text-slate-300">Browse by category, keyword, style family, or template ID.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {templates.map((t) => (
            <a key={t.templateId} href={`/templates/${t.slug}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              <div className="text-sm text-cyan-300">{t.templateId}</div>
              <h2 className="mt-2 text-xl font-semibold">{t.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{t.bestFor}</p>
              <div className="mt-4 text-xs text-slate-400">{t.category} · {t.styleFamily}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
