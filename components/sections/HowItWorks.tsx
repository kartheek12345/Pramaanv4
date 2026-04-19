"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const consumerSteps = [
  { num: "01", icon: "🔎", title: "Discover Products", desc: "Browse our curated marketplace of verified products across honey, ghee, oils, spices, and personal care." },
  { num: "02", icon: "⚙️", title: "Set Your Priorities", desc: "Choose what matters most to you - lab testing, traceability, sustainability, or price - and get a personalised trust score." },
  { num: "03", icon: "📋", title: "Read the Evidence", desc: "See exactly what data we verified, what's still pending, and what greenwashing risks exist - for every product, every batch." },
  { num: "04", icon: "✓", title: "Buy With Certainty", desc: "Every purchase is backed by a digital product passport. Scan the QR on the packaging to verify what you're actually consuming." },
];

const brandSteps = [
  { num: "01", icon: "📤", title: "Submit for Onboarding", desc: "Apply with your products, certifications, sourcing documentation, and supply chain data. Our team reviews eligibility within 7 days." },
  { num: "02", icon: "🤖", title: "AI Document Verification", desc: "Our system parses and cross-references ISO certifications, lab reports, and farm records against regulatory databases automatically." },
  { num: "03", icon: "🏷️", title: "Receive Your Score", desc: "Your Pramaan Score is assigned based on verified data - not your claims. Scores are updated as you submit new documentation or lab results." },
  { num: "04", icon: "🚀", title: "Access Premium Markets", desc: "Publish on the Pramaan marketplace, unlock B2B institutional channels, and use your verified badge across your own storefront." },
];

export default function HowItWorks() {
  const [tab, setTab] = useState<"consumers" | "brands">("consumers");
  const steps = tab === "consumers" ? consumerSteps : brandSteps;

  return (
    <section id="how" style={{ background: "var(--paper-warm)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="page-section-label">Process</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <h2 className="display-medium" style={{ maxWidth: "18ch" }}>
              From onboarding to a verified score in four stages.
            </h2>
            <p className="lead" style={{ maxWidth: "36ch", fontSize: "0.925rem" }}>
              We built a structured verification pipeline - not a self-reported checklist. Every stage
              adds a layer of proof.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tab bar */}
        <AnimateOnScroll delay={0.1}>
          <div
            style={{
              display: "flex",
              marginBottom: "2.5rem",
              border: "1px solid var(--border-strong)",
              borderRadius: 10,
              overflow: "hidden",
              width: "fit-content",
            }}
          >
            {(["consumers", "brands"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "0.6rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  background: tab === t ? "var(--ink)" : "transparent",
                  color: tab === t ? "var(--paper)" : "var(--ink-soft)",
                  border: "none",
                  transition: "all 0.2s",
                }}
              >
                {t === "consumers" ? "For Consumers" : "For Brands"}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="how-steps">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 0.08}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "1.75rem",
                  position: "relative",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(15,14,12,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
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
                  {step.num}
                </div>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: "-1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--ink-muted)",
                      fontSize: "1rem",
                      zIndex: 1,
                    }}
                    className="step-connector"
                  >
                    →
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

    </section>
  );
}
