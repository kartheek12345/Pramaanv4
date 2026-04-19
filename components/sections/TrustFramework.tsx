"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const dimensions = [
  { icon: "🌾", title: "Traceability", sub: "Farm → Processing → Packaging → Delivery" },
  { icon: "📄", title: "Documentation", sub: "Certifications, audits, compliance records" },
  { icon: "🧬", title: "Lab Validation", sub: "Molecular, chemical, and biological testing" },
  { icon: "⚙️", title: "Processing Transparency", sub: "Methods, inputs, facility standards" },
  { icon: "♻️", title: "Sustainability", sub: "Emissions, farming practices, packaging" },
];

const tiers = [
  {
    badge: "A",
    cls: { bg: "var(--verified-soft)", color: "var(--verified)" },
    title: "Solid Black - Full Lifecycle Verified",
    desc: "End-to-end digital product passport. Molecular lab testing completed. IoT transit tracking active. All certifications independently verified. Represents our Gold Standard - carries the highest Pramaan Score and commands the IIT-Premium in the market.",
  },
  {
    badge: "B",
    cls: { bg: "#d8efd4", color: "var(--score-b)" },
    title: "Double Dot - Partial Traceability",
    desc: "Documentation verified, supply chain partially tracked. Lab testing may be in progress. A trustworthy tier with clear upgrade pathways to A-level.",
  },
  {
    badge: "C",
    cls: { bg: "var(--caution-soft)", color: "var(--caution)" },
    title: "Single Dot - Baseline Verified",
    desc: "Mandatory certifications confirmed. Basic paperwork validated. Traceability and lab testing not yet submitted. Better than unverified - but the score reflects what we could and couldn't prove.",
  },
  {
    badge: "D",
    cls: { bg: "var(--accent-soft)", color: "var(--accent)" },
    title: "Flagged - Gaps or Inconsistencies Detected",
    desc: "Our AI anomaly engine has flagged suspicious patterns: volume exceeds regional production capacity, documentation has unresolved conflicts, or greenwashing indicators are present. Shown to consumers with full disclosure.",
  },
];

export default function TrustFramework() {
  const [activeDim, setActiveDim] = useState(0);

  return (
    <section id="trust" style={{ background: "var(--paper)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="page-section-label">Trust Framework</div>
          <h2 className="display-medium" style={{ maxWidth: "22ch", marginBottom: "0.75rem" }}>
            The Pramaan Score is not an opinion. It's a formula.
          </h2>
          <p className="lead">
            Five independently weighted dimensions. No self-reporting. No guesswork.
          </p>
        </AnimateOnScroll>

        <div className="framework-grid" style={{ marginTop: "4rem" }}>
          {/* Sidebar */}
          <div className="framework-sidebar">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {dimensions.map((d, i) => (
                <button
                  key={d.title}
                  onClick={() => setActiveDim(i)}
                  style={{
                    padding: "1.25rem",
                    borderRadius: 10,
                    border: `1px solid ${activeDim === i ? "var(--ink)" : "var(--border)"}`,
                    background: activeDim === i ? "var(--ink)" : "transparent",
                    color: activeDim === i ? "var(--paper)" : "var(--ink)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    {d.icon} {d.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      opacity: 0.6,
                      marginTop: "0.2rem",
                    }}
                  >
                    {d.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Tiers */}
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--ink-soft)",
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              Each dimension is scored 0–100 based on verifiable evidence only. Unsubmitted data is
              treated as zero - not as assumed positive. The overall Pramaan Score is a weighted
              composite. Weightings are publicly documented and never changed without disclosure.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {tiers.map((t, i) => (
                <AnimateOnScroll key={t.badge} delay={i * 0.08}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      alignItems: "flex-start",
                      padding: "1.5rem",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        borderRadius: 10,
                        display: "grid",
                        placeItems: "center",
                        fontFamily: "'Fraunces', serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        background: t.cls.bg,
                        color: t.cls.color,
                      }}
                    >
                      {t.badge}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                        {t.title}
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* AI box */}
            <AnimateOnScroll delay={0.3}>
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "var(--paper-warm)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                }}
              >
                <h4 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  🤖 AI Anomaly Detection
                </h4>
                <p style={{ fontSize: "0.825rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                  Our system cross-references submitted data against regional yield averages, transit
                  times, and pricing histories. If a producer claims to sell 10,000 kg of wild forest
                  honey from a 2-acre operation, the system flags it automatically - before a single
                  unit reaches a consumer.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

    </section>
  );
}
