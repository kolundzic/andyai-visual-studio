import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const plans = [
  { name: "Free", price: "$0", detail: "Explore templates and export starter prompts.", status: "MVP" },
  { name: "Creator", price: "$12", detail: "Save projects, export prompt packs, and reuse favorite templates.", status: "Next" },
  { name: "Pro", price: "$29", detail: "Team-ready workflows, advanced template variants, and commercial exports.", status: "Next" },
  { name: "Studio", price: "$99", detail: "Agency-grade visual systems, client workspaces, and priority packs.", status: "Future" }
];

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <section className="section shell">
        <span className="kicker">Pricing Shell</span>
        <h1>Pricing model prepared for Stripe later.</h1>
        <p className="hero-text">v0.3.0 keeps pricing as a public product skeleton. Payments arrive after the gallery, accounts, and Supabase project storage are stable.</p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className="card" key={plan.name}>
              <span className="status warn">{plan.status}</span>
              <h3>{plan.name}</h3>
              <h2>{plan.price}</h2>
              <p>{plan.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
