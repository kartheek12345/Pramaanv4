"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const tracks = [
  {
    icon: "🛠️",
    title: "Technical & Product",
    desc: "Build systems that verify truth in products. Work on AI document verification, IoT traceability, scoring algorithms, and the consumer platform.",
  },
  {
    icon: "📊",
    title: "Research & Market",
    desc: "Work directly with farmers, MSMEs, and consumers. Understand supply chains on the ground. Turn field data into product intelligence.",
  },
  {
    icon: "🚀",
    title: "Business & Growth",
    desc: "Take verified products to market and scale impact. Build brand partnerships, institutional channels, and the distribution strategy.",
  },
];

const qualities = [
  "Curious — you ask why before how",
  "Comfortable with ambiguity — we're building something new",
  "Willing to go to field — not everything is on a screen",
  "Obsessed with solving real problems — not shipping features",
];

const trackOptions = [
  "Technical & Product",
  "Research & Market",
  "Business & Growth",
];

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", track: "",
    why_pramaan: "", proud_problem: "", build_first: "", portfolio_link: "",
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
      const res = await fetch("/api/career", {
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

      {/* ─── VISION ─── */}
      <section style={{ padding: "4rem 4vw 3rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">Careers at Pramaan</div>
            <h1 className="display-medium">
              We are building India's trust layer for natural products.
            </h1>
            <p className="lead" style={{ marginTop: "1rem" }}>
              The organic and natural products market in India is massive — and almost entirely
              unverified. We're building the technology, data, and institutional infrastructure
              to change that. This is a zero-to-one problem. We need people who are drawn to it.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="divider" />

      {/* ─── OPEN TRACKS ─── */}
      <section style={{ background: "var(--paper-warm)", padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">Open Tracks</div>
            <h2 className="display-medium" style={{ maxWidth: "22ch", marginBottom: "2rem" }}>
              We hire by track, not title.
            </h2>
          </AnimateOnScroll>

          <div className="tracks-grid">
            {tracks.map((t, i) => (
              <AnimateOnScroll key={t.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                    {t.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── WHO SHOULD APPLY ─── */}
      <section style={{ padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">Who Should Apply</div>
            <h2 className="display-medium" style={{ marginBottom: "1.5rem" }}>
              This isn't for everyone. That's the point.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {qualities.map((q) => (
                <div
                  key={q}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    fontSize: "0.95rem",
                    color: "var(--ink-soft)",
                    padding: "0.75rem 1rem",
                    background: "var(--paper-warm)",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
                  {q}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="divider" />

      {/* ─── APPLICATION FORM ─── */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "4rem 4vw" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label" style={{ color: "rgba(247,244,239,0.35)" }}>
              Apply
            </div>
            <h2 className="display-medium" style={{ color: "var(--paper)", marginBottom: "0.5rem" }}>
              Tell us who you are.
            </h2>
            <p style={{ color: "rgba(247,244,239,0.5)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: 1.6 }}>
              No resume required. We care more about how you think than where you've been.
            </p>
          </AnimateOnScroll>

          {status === "success" ? (
            <AnimateOnScroll>
              <div
                style={{
                  background: "rgba(26,102,68,0.15)",
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
                <p style={{ fontSize: "0.9rem", color: "rgba(247,244,239,0.6)" }}>
                  Thanks for applying. We read every application and will get back to you soon.
                </p>
              </div>
            </AnimateOnScroll>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="form-row">
                <DarkFormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                <DarkFormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <DarkFormField label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                <div style={{ flex: 1 }}>
                  <label className="form-label-dark">Track *</label>
                  <select name="track" value={form.track} onChange={handleChange} required className="form-input-dark">
                    <option value="">Select track</option>
                    {trackOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label-dark">Why Pramaan? What draws you to this problem? *</label>
                <textarea name="why_pramaan" value={form.why_pramaan} onChange={handleChange} required rows={3} className="form-input-dark" placeholder="Be specific — generic answers don't help either of us." />
              </div>
              <div>
                <label className="form-label-dark">What's a problem you've solved that you're proud of? *</label>
                <textarea name="proud_problem" value={form.proud_problem} onChange={handleChange} required rows={3} className="form-input-dark" placeholder="Doesn't have to be technical. Could be a community project, a research paper, a business you ran." />
              </div>
              <div>
                <label className="form-label-dark">What would you build or investigate first if you joined? *</label>
                <textarea name="build_first" value={form.build_first} onChange={handleChange} required rows={3} className="form-input-dark" placeholder="Show us how you think about the problem space." />
              </div>
              <DarkFormField label="Link to any work — GitHub, portfolio, writing (optional)" name="portfolio_link" value={form.portfolio_link} onChange={handleChange} placeholder="https://" />

              {status === "error" && (
                <div style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{errorMsg}</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-accent"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.85rem",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  border: "none",
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

function DarkFormField({
  label, name, value, onChange, required, type = "text", placeholder,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; type?: string; placeholder?: string;
}) {
  return (
    <div style={{ flex: 1 }}>
      <label className="form-label-dark">{label} {required && "*"}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="form-input-dark" />
    </div>
  );
}
