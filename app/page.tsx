import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { productFlow, shellMetrics } from "@/lib/product-flow";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="hero shell">
        <div className="hero-card">
          <span className="kicker">🅰️💥 v0.3.0 Frontend Product Shell</span>
          <h1>Reusable AI visual templates become a SaaS studio.</h1>
          <p className="hero-text">
            AndyAI Visual Studio turns curated visual templates into editable TAP workflows, prompt exports, and production-ready visual systems for creators, teams, agencies, and serious AI product builders.
          </p>
          <div className="cta-row">
            <Link className="primary" href="/gallery">Browse Gallery</Link>
            <Link className="secondary" href="/tap-editor">Open TAP Editor</Link>
          </div>
        </div>
        <div className="panel">
          <span className="kicker">Product proof strip</span>
          <div className="metric-grid">
            {shellMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-head">
          <div>
            <span className="kicker">Canonical flow</span>
            <h2>Hero → Gallery → Template Detail → TAP Editor → Export.</h2>
          </div>
          <Link className="link-pill" href="/dashboard">View Dashboard</Link>
        </div>
        <div className="flow">
          {productFlow.map((step, index) => (
            <div className="flow-step" key={step}>
              <span className="badge">0{index + 1}</span>
              <h3>{step}</h3>
              <p>Locked into the v0.3.0 frontend product skeleton.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section shell">
        <div className="card-grid">
          <div className="card">
            <span className="status ok">Market layer</span>
            <h3>Gallery-first discovery</h3>
            <p>Users browse templates by category, keyword, ID, and production use case.</p>
          </div>
          <div className="card">
            <span className="status ok">Action layer</span>
            <h3>TAP editor path</h3>
            <p>Every template can become an editable workflow, not just a static prompt.</p>
          </div>
          <div className="card">
            <span className="status warn">Next layer</span>
            <h3>Supabase-ready</h3>
            <p>The frontend shell prepares the next step: real templates, accounts, saved projects, exports, and paid plans.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
