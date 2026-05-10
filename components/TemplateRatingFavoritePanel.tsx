const favoriteSignals = [
  "Favorite templates should be tied to a user.",
  "Ratings should be auditable and abuse-resistant.",
  "Marketplace ranking should combine usefulness, proof level, and user feedback.",
  "Free and premium templates must share the same quality model."
];

export function TemplateRatingFavoritePanel() {
  return (
    <section className="rounded-3xl bg-slate-950 p-8 text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">v3.7.0 Rating/Favorite</p>
      <h1 className="mt-3 text-4xl font-black">Template Rating & Favorite Model</h1>
      <p className="mt-4 text-slate-300">
        A future marketplace needs memory of what users like, save, and trust.
      </p>
      <div className="mt-8 grid gap-3">
        {favoriteSignals.map((signal) => (
          <div key={signal} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            ⭐ {signal}
          </div>
        ))}
      </div>
    </section>
  );
}
