import { clientDeliveryPackageItems, summarizeDeliveryPackage } from "@/lib/client-delivery-package";

export function ClientDeliveryPackagePanel() {
  const summary = summarizeDeliveryPackage();

  return (
    <section className="avs-card">
      <p className="avs-kicker">v5.8.0</p>
      <h1>Client Delivery Package</h1>
      <p className="avs-muted">
        Package approved visual artifacts into a client-ready delivery bundle with prompts,
        markdown, HTML, SVG, diagrams, and evidence metadata.
      </p>

      <div className="avs-grid">
        <div className="avs-mini-card">Total assets: {summary.total}</div>
        <div className="avs-mini-card">Approved: {summary.approved}</div>
        <div className="avs-mini-card">Pending review: {summary.pending}</div>
      </div>

      <div className="avs-list">
        {clientDeliveryPackageItems.map((item) => (
          <div className="avs-list-row" key={item.id}>
            <strong>{item.label}</strong>
            <span>{item.format} · {item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
