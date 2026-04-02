"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const benefits = [
  {
    icon: "🏆",
    title: "Verified Badge — Defensible Credibility",
    desc: "An IIT-backed, third-party verified score that converts consumer skepticism into purchasing confidence. Not a logo you pay for — a score you earn.",
  },
  {
    icon: "💰",
    title: "Pricing Power",
    desc: "Verified products command measurably higher margins. When consumers can see the proof, the premium is justified — and defended against cheaper, unverified competitors.",
  },
  {
    icon: "🏢",
    title: "B2B Institutional Access",
    desc: "Unlock procurement relationships with luxury hotels, corporate wellness programs, and CSR-driven institutional buyers who require documented sustainability credentials.",
  },
  {
    icon: "📈",
    title: "Score Improvement Roadmap",
    desc: "Your dashboard shows exactly what data or lab tests would improve your score — giving you a clear investment pathway to a higher tier and better market positioning.",
  },
];

const tiers = [
  {
    num: "Tier 01",
    title: "Listed Partner",
    desc: "Verified on the Pramaan marketplace. Documentation audit, Single Dot classification, consumer-facing profile with basic score display.",
    badge: null,
  },
  {
    num: "Tier 02",
    title: "Certified Partner",
    desc: "Full AI document verification, IoT traceability integration, Digital Passport generation, B2B channel access, and marketing support.",
    badge: "Most Popular",
  },
  {
    num: "Tier 03",
    title: "Gold Standard Partner",
    desc: "In-house lab validation pipeline, Solid Black classification, end-to-end lifecycle tracking, institutional buyer introductions, and co-branding rights.",
    badge: null,
  },
];

export default function ForBusiness() {
  return (
    <section id="business" style={{ background: "var(--paper)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="biz-grid">
          {/* Left */}
          <div>
            <AnimateOnScroll>
              <div className="page-section-label">For Brands</div>
              <h2 className="display-medium" style={{ maxWidth: "20ch" }}>
                Stop defending your claims. Start proving them.
              </h2>
              <p className="lead" style={{ marginTop: "1.25rem" }}>
                Greenwashing accusations cost brands credibility, pricing power, and consumer trust.
                Pramaan gives you an independent, technology-backed trust signal that no internal
                claim can replicate.
              </p>
            </AnimateOnScroll>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
              {benefits.map((b, i) => (
                <AnimateOnScroll key={b.title} delay={i * 0.08}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1.25rem",
                      borderRadius: 12,
                      background: "var(--paper-warm)",
                      border: "1px solid var(--border)",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                    }
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
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
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                        {b.title}
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Pricing */}
          <AnimateOnScroll delay={0.15}>
            <div
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 20,
                padding: "2.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--paper)",
                }}
              >
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
                    borderBottom:
                      i < tiers.length - 1
                        ? "1px solid rgba(247,244,239,0.1)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "rgba(247,244,239,0.5)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {t.num}
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    {t.title}
                    {t.badge && (
                      <span
                        style={{
                          display: "inline-block",
                          background: "var(--accent)",
                          color: "#fff",
                          padding: "0.2rem 0.6rem",
                          borderRadius: 4,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          marginLeft: "0.5rem",
                          verticalAlign: "middle",
                        }}
                      >
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.825rem", color: "rgba(247,244,239,0.5)" }}>{t.desc}</div>
                </div>
              ))}

              <div style={{ marginTop: "2rem" }}>
                <a
                  href="#cta"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.75rem 1.75rem",
                    borderRadius: 8,
                    fontSize: "0.925rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    background: "var(--accent)",
                    color: "#fff",
                    transition: "all 0.2s",
                    textAlign: "center",
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
                  Apply for Onboarding →
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

    </section>
  );
}
