export function BetaFeedbackPanel() {
  const questions = [
    "Was the template easy to understand?",
    "Did the TAP Editor produce a useful prompt?",
    "Was export/download behavior clear?",
    "What should be improved before commercial launch?",
  ];

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Beta Feedback</p>
      <h2 className="mt-3 text-2xl font-bold">Questions for early users</h2>
      <ul className="mt-6 space-y-3">
        {questions.map((question) => (
          <li key={question} className="rounded-2xl bg-neutral-50 p-4 font-medium">
            {question}
          </li>
        ))}
      </ul>
    </section>
  );
}
