"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const problems = [
  {
    icon: "⚗️",
    title: "Widespread Adulteration",
    desc: "Sugar syrups in honey. Mineral oil in coconut oil. Synthetic dyes in turmeric. These aren't edge cases - they're industry-wide patterns that current regulatory frameworks cannot catch in real time.",
  },
  {
    icon: "📱",
    title: "Social Media Greenwashing",
    desc: "Thousands of D2C brands have built large followings selling 'natural' products. Their claims are marketing narratives - unverified, unaudited, and unverifiable to the consumer who trusts them.",
  },
  {
    icon: "🔍",
    title: "Consumer Blindness",
    desc: "A certification logo means a document was filed - not that a product is genuinely pure. No platform currently shows consumers the actual evidence behind a health claim. That's the gap Pramaan closes.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "6rem 4vw",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="problem-grid">
          {/* Left: Copy */}
          <AnimateOnScroll>
            <div className="page-section-label" style={{ color: "rgba(247,244,239,0.35)" }}>
              The Problem
            </div>
            <h2 className="display-medium" style={{ color: "var(--paper)" }}>
              "Natural" is the most abused word in commerce.
            </h2>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                color: "rgba(247,244,239,0.55)",
                lineHeight: 1.7,
                maxWidth: "52ch",
              }}
            >
              Every brand claims purity. Most cannot prove it. India has no independent,
              technology-driven infrastructure to verify what's actually inside products labelled
              "pure," "herbal," or "chemical-free." Until now.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "3rem",
                  padding: "2rem 0",
                  borderBottom: "1px solid rgba(247,244,239,0.1)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    68%
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(247,244,239,0.6)", marginTop: "0.3rem" }}>
                    of spice samples in FSSAI audits fail<br />basic adulteration tests
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    ₹1.2T
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(247,244,239,0.6)", marginTop: "0.3rem" }}>
                    estimated annual consumer loss<br />to greenwashed FMCG products
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Problem Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {problems.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(247,244,239,0.05)",
                    border: "1px solid rgba(247,244,239,0.1)",
                    borderRadius: 14,
                    padding: "1.5rem",
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "rgba(247,244,239,0.08)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "rgba(247,244,239,0.05)")
                  }
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(200,80,26,0.2)",
                      borderRadius: 8,
                      display: "grid",
                      placeItems: "center",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.6)", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
