import Link from "next/link";

const checks = [
  {
    label: "Public shell",
    detail: "Home, demo, status, gallery, template, project, export, and package routes are mapped."
  },
  {
    label: "Data safety",
    detail: "The data adapter can use Supabase when configured and fall back to the local mock layer."
  },
  {
    label: "Deployment readiness",
    detail: "The repo contains a Vercel config, environment checklist, deploy guide, and smoke route."
  }
];

export default function ProductionSmokePage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">AndyAI Visual Studio</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Production Smoke Route</h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">
          This route is the public deployment proof page for v1.1.0. It confirms that the production app can render a stable route after Vercel deployment.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {checks.map((check) => (
            <article key={check.label} className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm font-bold text-white">{check.label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{check.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black">Home</Link>
          <Link href="/demo" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white">Demo</Link>
          <Link href="/status" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white">Status</Link>
          <Link href="/gallery" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white">Gallery</Link>
        </div>
      </section>
    </main>
  );
}
