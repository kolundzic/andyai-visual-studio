import { BetaFeedbackPanel } from "@/components/BetaFeedbackPanel";

export default function FeedbackPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.9.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Beta User Feedback Layer</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        The beta feedback layer turns early users into product signal, not random comments.
      </p>
      <div className="mt-10">
        <BetaFeedbackPanel />
      </div>
    </main>
  );
}
