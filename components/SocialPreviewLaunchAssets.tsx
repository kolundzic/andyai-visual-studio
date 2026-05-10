import { social_preview_launch_assetsItems } from "@/lib/social-preview-launch-assets";

export function SocialPreviewLaunchAssets() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">AndyAI Visual Studio</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Social Preview and Launch Assets</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">Adds launch asset structure for public previews, sharing cards, product summary blocks, and launch-ready social snippets.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {social_preview_launch_assetsItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
