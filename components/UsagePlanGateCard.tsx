type UsagePlanGateCardProps = {
  title: string;
  limit: string;
  upgradeReason: string;
};

export function UsagePlanGateCard({ title, limit, upgradeReason }: UsagePlanGateCardProps) {
  return (
    <article className="rounded-3xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Plan Gate</p>
      <h3 className="mt-3 text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-neutral-700">{limit}</p>
      <p className="mt-5 rounded-2xl bg-neutral-50 p-4 text-sm font-semibold">{upgradeReason}</p>
    </article>
  );
}
