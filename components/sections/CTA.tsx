"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const trustSignals = [
  "🏫 IIT-Incubated",
  "🧪 Technology-Verified",
  "📋 FSSAI-Aligned",
  "♻️ Carbon-Tracking Ready",
];

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: "var(--ink)",
        textAlign: "center",
        color: "var(--paper)",
        padding: "7rem 4vw",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <AnimateOnScroll>
          <div
            className="page-section-label"
            style={{
              color: "rgba(247,244,239,0.35)",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            Get Started
          </div>
          <h2 className="display" style={{ color: "var(--paper)" }}>
            Proof before<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>purchase.</span>
          </h2>
          <p
            className="lead"
            style={{ color: "rgba(247,244,239,0.6)", margin: "0 auto", marginTop: "1.25rem" }}
          >
            Whether you're a consumer done with guessing, or a brand ready to prove your worth -
            Pramaan is where the verification starts.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#product-demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: 8,
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                background: "var(--accent)",
                color: "#fff",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#a84015";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Explore Verified Products →
            </a>
            <a
              href="#business"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9rem 2rem",
                borderRadius: 8,
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                background: "transparent",
                color: "var(--paper)",
                border: "1.5px solid rgba(247,244,239,0.25)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.6)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.25)")
              }
            >
              Apply as a Brand
            </a>
          </div>

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "2.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {trustSignals.map((s) => (
              <span key={s} style={{ fontSize: "0.825rem", color: "rgba(247,244,239,0.35)" }}>
                {s}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
