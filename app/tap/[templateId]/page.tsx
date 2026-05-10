import { templates } from "../../../lib/templates";

export default function TapEditorPage({ params }: { params: { templateId: string } }) {
  const template = templates.find((t) => t.templateId === params.templateId) ?? templates[0];
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-cyan-300">TAP Editor · {template.templateId}</div>
          <h1 className="mt-2 text-3xl font-bold">{template.name}</h1>
          <div className="mt-6 space-y-3">
            {['Project name','Topic','Audience','Language','Format','Required labels','Avoid'].map((label) => (
              <label key={label} className="block">
                <span className="text-sm text-slate-300">{label}</span>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3" placeholder={label} />
              </label>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Generated Prompt</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm text-slate-200">{template.prompt}</pre>
        </section>
      </div>
    </main>
  );
}
