"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const personas = [
  { icon: "🧬", name: "Purity Focused", desc: "Prioritises lab testing and ingredient validation above all.", weights: [75, 60, 40, 50] },
  { icon: "🌍", name: "Eco Conscious", desc: "Weights sustainability, packaging, and carbon footprint.", weights: [40, 70, 90, 55] },
  { icon: "🔒", name: "Safety First", desc: "Focuses on certifications, traceability, and risk flags.", weights: [60, 85, 50, 80] },
  { icon: "⚖️", name: "Value Seeker", desc: "Balances verification level against pricing to find optimal buys.", weights: [50, 50, 45, 50] },
];

const sliderLabels = ["Lab Validation", "Traceability", "Sustainability", "Documentation"];

export default function Personalization() {
  const [activePersona, setActivePersona] = useState(0);
  const [sliders, setSliders] = useState([75, 60, 40, 50]);

  const handlePersona = (idx: number) => {
    setActivePersona(idx);
    setSliders(personas[idx].weights);
  };

  return (
    <section id="personalize" style={{ background: "var(--ink)", color: "var(--paper)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="personalize-grid">
          {/* Left */}
          <AnimateOnScroll>
            <div className="page-section-label" style={{ color: "rgba(247,244,239,0.35)" }}>
              For Consumers
            </div>
            <h2 className="display-medium" style={{ color: "var(--paper)" }}>
              Your score.<br />Based on{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>your</span>{" "}
              priorities.
            </h2>
            <p
              style={{
                color: "rgba(247,244,239,0.55)",
                marginTop: "1.25rem",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "44ch",
              }}
            >
              Not everyone buys honey for the same reason. A diabetic consumer prioritises purity
              above all. An environmentalist weights sustainability first. Pramaan surfaces both scores
              - so you can decide with full context, not partial information.
            </p>
          </AnimateOnScroll>

          {/* Right */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(247,244,239,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: "1rem",
                }}
              >
                Choose a Preset
              </div>

              {/* Persona cards */}
              <div className="persona-grid">
                {personas.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => handlePersona(i)}
                    style={{
                      background:
                        activePersona === i
                          ? "rgba(247,244,239,0.12)"
                          : "rgba(247,244,239,0.06)",
                      border: `1px solid ${activePersona === i ? "rgba(247,244,239,0.3)" : "rgba(247,244,239,0.12)"}`,
                      borderRadius: 14,
                      padding: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "left",
                      transform: activePersona === i ? "translateY(-2px)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (activePersona !== i) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(247,244,239,0.1)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activePersona !== i) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(247,244,239,0.06)";
                        (e.currentTarget as HTMLElement).style.transform = "none";
                      }
                    }}
                  >
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--paper)" }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(247,244,239,0.5)", lineHeight: 1.5 }}>
                      {p.desc}
                    </div>
                  </button>
                ))}
              </div>

              {/* Sliders */}
              <div
                style={{
                  marginTop: "2.5rem",
                  background: "rgba(247,244,239,0.04)",
                  border: "1px solid rgba(247,244,239,0.1)",
                  borderRadius: 16,
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(247,244,239,0.4)",
                    marginBottom: "1.25rem",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Or customise weights manually
                </div>
                {sliderLabels.map((label, i) => (
                  <div
                    key={label}
                    style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}
                  >
                    <span style={{ fontSize: "0.875rem", width: 160, flexShrink: 0, color: "var(--paper)" }}>
                      {label}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        background: "rgba(247,244,239,0.1)",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${sliders[i]}%`,
                          background: "var(--accent)",
                          borderRadius: 99,
                          transition: "width 0.4s",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        color: "rgba(247,244,239,0.5)",
                        width: 36,
                        textAlign: "right",
                      }}
                    >
                      {sliders[i]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

    </section>
  );
}
