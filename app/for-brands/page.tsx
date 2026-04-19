"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

const painPoints = [
  { icon: "🎭", title: "Fake Competitors", desc: "Unverified brands undercut you on price while copying your 'organic' claims. You have no way to differentiate." },
  { icon: "📉", title: "Trust Erosion", desc: "Every greenwashing scandal in the industry erodes YOUR brand's credibility — even if you're genuinely clean." },
  { icon: "💸", title: "Premium Justification", desc: "You charge more because your product IS better — but consumers can't verify that. So they buy cheaper." },
  { icon: "🏢", title: "B2B Gatekeeping", desc: "Institutional buyers (hotels, wellness chains, corporates) need documented credentials you can't easily produce." },
];

const benefits = [
  { icon: "🏆", title: "Verified Trust Badge", desc: "An independently earned, technology-backed score that converts consumer skepticism into purchase confidence." },
  { icon: "💰", title: "Pricing Power", desc: "When consumers can see proof, the premium is justified — and defended against cheaper, unverified competitors." },
  { icon: "🏢", title: "B2B Institutional Access", desc: "Unlock procurement from luxury hotels, corporate wellness, and CSR-driven institutional buyers." },
  { icon: "📈", title: "Score Improvement Roadmap", desc: "Your dashboard shows exactly what data or lab tests would improve your score — a clear investment path." },
];

const future = [
  { label: "Carbon Credit Integration", desc: "Track and monetize your sustainability practices through India's upcoming carbon credit market." },
  { label: "Certification Authority", desc: "As Pramaan scales, your early verification becomes a lasting competitive moat." },
  { label: "ESG Rating for FMCG", desc: "Institutional investors and procurement teams will filter by Pramaan score." },
];

const tiers = [
  { num: "Tier 01", title: "Listed Partner", desc: "Documentation audit, basic score, consumer-facing profile.", badge: null },
  { num: "Tier 02", title: "Certified Partner", desc: "Full AI verification, IoT traceability, Digital Passport, B2B access.", badge: "Most Popular" },
  { num: "Tier 03", title: "Gold Standard Partner", desc: "In-house lab pipeline, Solid Black tier, co-branding rights, institutional intros.", badge: null },
];

const productTypes = [
  "Honey", "Ghee", "Cold-Pressed Oil", "Spices", "Personal Care",
  "Ayurvedic Products", "Dairy", "Other",
];

export default function ForBrandsPage() {
  const [form, setForm] = useState({
    brand_name: "", contact_name: "", email: "", phone: "",
    product_type: "", location: "", description: "", website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <>
      <div style={{ height: "5rem" }} />

      {/* ─── HERO ─── */}
      <section style={{ padding: "4rem 4vw 3rem" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">For Brands</div>
            <h1 className="display-medium" style={{ maxWidth: "24ch" }}>
              Stop defending your claims. Start{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>proving</span>{" "}
              them.
            </h1>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Greenwashing accusations cost brands credibility, pricing power, and trust.
              Pramaan gives you an independent, technology-backed verification that no internal claim can replicate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="divider" />

      {/* ─── PAIN POINTS ─── */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label" style={{ color: "rgba(247,244,239,0.35)" }}>
              The Problem for Brands
            </div>
            <h2 className="display-medium" style={{ color: "var(--paper)", maxWidth: "26ch", marginBottom: "2.5rem" }}>
              Your biggest competitor isn't another brand. It's consumer doubt.
            </h2>
          </AnimateOnScroll>
          <div className="problem-cards-row">
            {painPoints.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.08}>
                <div
                  style={{
                    background: "rgba(247,244,239,0.05)",
                    border: "1px solid rgba(247,244,239,0.1)",
                    borderRadius: 14,
                    padding: "1.75rem",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(247,244,239,0.55)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── BENEFITS ─── */}
      <section style={{ padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">What You Get</div>
            <h2 className="display-medium" style={{ maxWidth: "22ch", marginBottom: "2.5rem" }}>
              Verification that earns trust — and revenue.
            </h2>
          </AnimateOnScroll>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.08}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    borderRadius: 12,
                    background: "var(--paper-warm)",
                    border: "1px solid var(--border)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      background: "#fff",
                      borderRadius: 8,
                      display: "grid",
                      placeItems: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.25rem" }}>{b.title}</h4>
                    <p style={{ fontSize: "0.825rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Partner tiers */}
          <AnimateOnScroll delay={0.2}>
            <div
              style={{
                marginTop: "3rem",
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 20,
                padding: "2.5rem",
              }}
            >
              <div style={{ fontFamily: "var(--font-fraunces), 'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Partner Tiers
              </div>
              <p style={{ fontSize: "0.825rem", color: "rgba(247,244,239,0.4)", marginBottom: "2rem" }}>
                Onboarding is by application. Scores are earned, not bought.
              </p>
              {tiers.map((t, i) => (
                <div
                  key={t.num}
                  style={{
                    marginBottom: i < tiers.length - 1 ? "1.5rem" : 0,
                    paddingBottom: i < tiers.length - 1 ? "1.5rem" : 0,
                    borderBottom: i < tiers.length - 1 ? "1px solid rgba(247,244,239,0.1)" : "none",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(247,244,239,0.5)", marginBottom: "0.4rem" }}>
                    {t.num}
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    {t.title}
                    {t.badge && (
                      <span style={{ display: "inline-block", background: "var(--accent)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: 4, fontSize: "0.7rem", fontWeight: 600, marginLeft: "0.5rem", verticalAlign: "middle" }}>
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.825rem", color: "rgba(247,244,239,0.5)" }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Future vision */}
          <AnimateOnScroll delay={0.15}>
            <div style={{ marginTop: "3rem" }}>
              <div className="page-section-label">Where This Goes</div>
              <div className="future-grid">
                {future.map((f) => (
                  <div
                    key={f.label}
                    style={{
                      padding: "1.25rem",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.3rem" }}>{f.label}</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="divider" />

      {/* ─── APPLICATION FORM ─── */}
      <section id="apply" style={{ background: "var(--paper-warm)", padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">Apply for Onboarding</div>
            <h2 className="display-medium" style={{ marginBottom: "0.5rem" }}>
              Tell us about your brand.
            </h2>
            <p className="lead" style={{ marginBottom: "2rem" }}>
              We review every application. If your products qualify, we'll reach out within 7 days.
            </p>
          </AnimateOnScroll>

          {status === "success" ? (
            <AnimateOnScroll>
              <div
                style={{
                  background: "var(--verified-soft)",
                  border: "1px solid var(--verified)",
                  borderRadius: 14,
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-fraunces), 'Fraunces', serif", fontSize: "1.3rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Application Received
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                  Thanks! We'll review your submission and get back to you within 7 days.
                </p>
              </div>
            </AnimateOnScroll>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="form-row">
                <FormField label="Brand Name" name="brand_name" value={form.brand_name} onChange={handleChange} required />
                <FormField label="Contact Name" name="contact_name" value={form.contact_name} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                <FormField label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label className="form-label">Product Type *</label>
                  <select name="product_type" value={form.product_type} onChange={handleChange} required className="form-input">
                    <option value="">Select category</option>
                    {productTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <FormField label="Location" name="location" value={form.location} onChange={handleChange} required placeholder="City, State" />
              </div>
              <div>
                <label className="form-label">Tell us about your products</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  className="form-input"
                  placeholder="What do you produce? What makes it different?"
                />
              </div>
              <FormField label="Website (optional)" name="website" value={form.website} onChange={handleChange} placeholder="https://" />

              {status === "error" && (
                <div style={{ color: "var(--risk)", fontSize: "0.85rem" }}>{errorMsg}</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.85rem",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Reusable form field ─── */
function FormField({
  label, name, value, onChange, required, type = "text", placeholder,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; type?: string; placeholder?: string;
}) {
  return (
    <div style={{ flex: 1 }}>
      <label className="form-label">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}
