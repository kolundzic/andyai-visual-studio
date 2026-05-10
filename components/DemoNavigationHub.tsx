import { demo_navigation_hubItems } from "@/lib/demo-navigation-hub";

export function DemoNavigationHub() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">AndyAI Visual Studio</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Demo Navigation Hub</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">Creates a public navigation hub that links the homepage, showcase, demo, marketplace, agency, and ecosystem routes.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {demo_navigation_hubItems.map((item) => (
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
