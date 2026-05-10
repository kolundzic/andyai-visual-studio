import { agencyDashboardQaChecks, agencyQaSummary } from "@/lib/agency-dashboard-qa";

export function AgencyDashboardQaPanel() {
  const summary = agencyQaSummary();

  return (
    <section className="avs-card">
      <p className="avs-kicker">v5.9.0</p>
      <h1>Agency Dashboard QA</h1>
      <p className="avs-muted">
        Verifies the agency workflow surface before locking v6.0.0.
      </p>
      <div className="avs-mini-card">
        QA status: {summary.passed}/{summary.total} checks passed
      </div>
      <div className="avs-list">
        {agencyDashboardQaChecks.map((check) => (
          <div className="avs-list-row" key={check.id}>
            <strong>{check.label}</strong>
            <span>{check.passed ? "ready" : "needs work"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
