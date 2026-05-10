export default function PricingPage() {
  const plans = ['Free', 'Pro', 'Studio', 'Agency'];
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><h1 className="text-4xl font-bold">Pricing</h1><div className="mt-8 grid gap-4 md:grid-cols-4">{plans.map(p=><div className="rounded-3xl border border-white/10 bg-white/5 p-6" key={p}><h2 className="text-2xl font-semibold">{p}</h2><p className="mt-3 text-slate-300">Coming in v0.2.</p></div>)}</div></main>;
}
