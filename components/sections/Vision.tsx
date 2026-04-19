"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Tag from "@/components/ui/Tag";

const phases = [
  {
    num: "PHASE 01",
    year: "Year 1",
    title: "Regional Pilot",
    items: [
      "South India supply base (AP, TN, Karnataka)",
      "10 Tier-1 brand partnerships live",
      "Natural Honey, A2 Ghee, Cold-Pressed Oils",
      "Metro city distribution (Mumbai, Delhi, Bangalore)",
      "AI document verification engine live",
    ],
  },
  {
    num: "PHASE 02",
    year: "Year 2–3",
    title: "Platform Scale",
    items: [
      "IoT transit tracking fully integrated",
      "GoI color-code system as consumer standard",
      "Ayurvedic supplements category live",
      "Carbon tracking dashboard for brands",
      "B2B institutional procurement channel",
    ],
  },
  {
    num: "PHASE 03",
    year: "Year 4–5",
    title: "Proprietary Authority",
    items: [
      "In-house molecular testing labs operational",
      "India Carbon Credit market integration (2026 policy)",
      "ESG scoring for FMCG companies",
      "Greenwashing certificate for B2B clients",
      "Policy partnership with GoI food regulatory bodies",
    ],
  },
];

export default function Vision() {
  return (
    <section id="vision" style={{ background: "var(--paper-warm)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="page-section-label">Where We're Going</div>
          <div className="vision-header">
            <h2 className="display-medium" style={{ maxWidth: "20ch" }}>
              We're building the trust layer for all of commerce.
            </h2>
            <p className="lead">
              We start with honey and ghee. We're building toward a national verification standard
              - one that moves organic claims from marketing language to machine-readable proof.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="vision-timeline">
          {phases.map((phase, i) => (
            <AnimateOnScroll key={phase.num} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--ink-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  {phase.num}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--ink-muted)",
                  }}
                >
                  {phase.year}
                </div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                  }}
                >
                  {phase.title}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--ink-soft)",
                        paddingLeft: "1rem",
                        position: "relative",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--accent)",
                          fontSize: "0.7rem",
                          top: "0.15rem",
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bigger idea */}
        <AnimateOnScroll delay={0.2}>
          <div
            style={{
              marginTop: "3rem",
              padding: "2.5rem",
              background: "#fff",
              borderRadius: 20,
              border: "1px solid var(--border)",
            }}
            className="bigger-idea"
          >
            <div>
              <div className="page-section-label" style={{ marginBottom: "0.75rem" }}>
                The Bigger Idea
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  maxWidth: "32ch",
                }}
              >
                Think CIBIL for products. A score that the entire supply chain - farmers, brands,
                retailers, and institutions - can act on.
              </h3>
            </div>
            <div style={{ minWidth: 180 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginBottom: "0.5rem" }}>
                Future: India's First
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Tag variant="ink">Product Trust Score</Tag>
                <Tag variant="ink">Carbon Credit Gateway</Tag>
                <Tag variant="ink">ESG Rating Engine</Tag>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

    </section>
  );
}
