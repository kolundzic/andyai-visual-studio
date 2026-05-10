import { showcaseQaRoutes } from "@/lib/showcase-qa";

export function ShowcaseQaDemoSmoke() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Showcase QA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Showcase QA and Demo Smoke Automation</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This layer verifies the public showcase and product demo path before the v8.0.0 product demo lock.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {showcaseQaRoutes.map((route) => (
            <li key={route} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-800">
              {route}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
