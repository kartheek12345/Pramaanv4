"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Tag from "@/components/ui/Tag";

const heroStats = [
  { val: "77%", label: "of natural honey fails basic purity tests" },
  { val: "0", label: "independent platforms verify end-to-end" },
  { val: "₹75K Cr", label: "market with no trusted verification standard" },
];

const problems = [
  {
    icon: "⚗️",
    title: "Widespread Adulteration",
    stat: "68%",
    desc: "of spice samples in FSSAI audits fail basic adulteration tests. Sugar syrups in honey. Mineral oil in coconut oil. These aren't edge cases.",
  },
  {
    icon: "📱",
    title: "Greenwashing at Scale",
    stat: "₹1.2T",
    desc: "estimated annual consumer loss to greenwashed FMCG products. Thousands of D2C brands sell 'natural' without a single proof point.",
  },
  {
    icon: "🔍",
    title: "Zero Verification Infrastructure",
    stat: "0",
    desc: "platforms exist that verify the full lifecycle of a natural product - from farm to shelf - using technology, not paperwork.",
  },
];

export default function Home() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingLeft: "4vw",
          paddingRight: "4vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, #e8dfd4 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, #f0ddd4 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div
              className="anim anim-d1"
              style={{
                display: "inline-flex",
                gap: "0.5rem",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--accent)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              />
              <span className="mono" style={{ color: "var(--ink-muted)" }}>
                India's Trust Infrastructure for Natural Products
              </span>
            </div>

            <h1 className="display anim anim-d2" style={{ marginTop: 0 }}>
              Every claim.{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Proven.</span>
              <br />
              Not assumed.
            </h1>

            <p className="lead anim anim-d3" style={{ marginTop: "1.5rem", marginLeft: "auto", marginRight: "auto" }}>
              Pramaan360 is not just a marketplace. It's the verification layer India's natural products
              industry has always lacked. We score products on what's provable - not what's printed
              on the label.
            </p>

            <div
              className="anim anim-d4"
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link href="/demo" className="btn-primary">
                See the Demo
              </Link>
              <Link href="/how-it-works" className="btn-outline">
                How It Works
              </Link>
              <Link href="/for-brands" className="btn-outline">
                For Brands
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="anim anim-d4"
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {heroStats.map((s) => (
              <div key={s.val} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--ink-muted)",
                    marginTop: "0.1rem",
                    maxWidth: "20ch",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ PROBLEM (condensed) ════════════ */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "5rem 4vw" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                className="page-section-label"
                style={{ color: "rgba(247,244,239,0.35)", justifyContent: "center" }}
              >
                The Problem
              </div>
              <h2 className="display-medium" style={{ color: "var(--paper)", maxWidth: "28ch", margin: "0 auto" }}>
                "Natural" is the most abused word in Indian commerce.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="problem-cards-row">
            {problems.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(247,244,239,0.05)",
                    border: "1px solid rgba(247,244,239,0.1)",
                    borderRadius: 14,
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.stat}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      color: "var(--paper)",
                    }}
                  >
                    {p.icon} {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(247,244,239,0.55)",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ SOLUTION PREVIEW ════════════ */}
      <section style={{ padding: "5rem 4vw" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <AnimateOnScroll>
            <div className="page-section-label" style={{ justifyContent: "center" }}>
              What We Built
            </div>
            <h2 className="display-medium" style={{ maxWidth: "28ch", margin: "0 auto" }}>
              A 360° trust score - - backed by data, not marketing.
            </h2>
            <p
              className="lead"
              style={{ marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}
            >
              Five independently weighted dimensions. Lab testing. Farm traceability. AI anomaly
              detection. Every product gets a score - and consumers see exactly why.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Tag variant="verified">Traceability</Tag>
              <Tag variant="ink">Documentation</Tag>
              <Tag variant="caution">Lab Validation</Tag>
              <Tag variant="ink">Processing</Tag>
              <Tag variant="verified">Sustainability</Tag>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.25}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginTop: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/demo" className="btn-primary">
                See It in Action
              </Link>
              <Link href="/how-it-works" className="btn-outline">
                Explore the Framework
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ BOTTOM CTA ════════════ */}
      <section
        style={{
          background: "var(--ink)",
          textAlign: "center",
          color: "var(--paper)",
          padding: "5rem 4vw",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <AnimateOnScroll>
            <h2 className="display-medium" style={{ color: "var(--paper)" }}>
              Proof before{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>purchase.</span>
            </h2>
            <p
              className="lead"
              style={{
                color: "rgba(247,244,239,0.6)",
                margin: "1rem auto 0",
              }}
            >
              Whether you're a consumer done with guessing, or a brand ready to prove your worth -
              this is where verification starts.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/demo" className="btn-accent">
                View Demo Product
              </Link>
              <Link href="/for-brands" className="btn-outline-light">
                Apply as a Brand
              </Link>
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                gap: "2.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["🏫 IIT-Incubated", "🧪 Technology-Verified", "📋 FSSAI-Aligned", "♻️ Carbon-Tracking Ready"].map((s) => (
                <span key={s} style={{ fontSize: "0.8rem", color: "rgba(247,244,239,0.35)" }}>
                  {s}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
