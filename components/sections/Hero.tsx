"use client";

import ScoreRing from "@/components/ui/ScoreRing";
import Tag from "@/components/ui/Tag";

const scoreBars = [
  { label: "Traceability", val: 88, color: "var(--verified)" },
  { label: "Documentation", val: 75, color: "var(--score-b)" },
  { label: "Lab Validation", val: 40, color: "var(--caution)" },
  { label: "Sustainability", val: 92, color: "var(--verified)" },
];

const confidenceColors = [
  "var(--verified)",
  "var(--verified)",
  "var(--verified)",
  "var(--caution)",
  "var(--border-strong)",
];

const heroStats = [
  { val: "77%", label: "of natural honey fails\nbasic purity tests" },
  { val: "0", label: "independent platforms\nverify end-to-end" },
  { val: "75K Cr", label: "rupee market with no trusted\nverification standard" },
];

export default function Hero() {
  return (
    <section
      id="hero"
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
      {/* Background */}
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
        <div className="hero-grid">

          {/* LEFT - copy */}
          <div>
            <div className="hero-eyebrow anim anim-d1">
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--accent)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span className="mono" style={{ color: "var(--ink-muted)" }}>
                India's Trust Infrastructure for Products
              </span>
            </div>

            <h1
              className="display anim anim-d2"
              style={{ marginTop: 0 }}
            >
              Every claim.<br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Proven.</span><br />
              Not assumed.
            </h1>

            <p className="lead anim anim-d3" style={{ marginTop: "1.5rem" }}>
              Pramaan360 is not just a marketplace. It's the verification layer that India's
              natural products industry has always lacked. We score products on what's provable, not what's printed on the label.
            </p>

            <div
              className="anim anim-d4"
              style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
            >
              <HoverLink href="#product-demo" primary>
                See a Product Score
              </HoverLink>
              <HoverLink href="#how">
                How It Works
              </HoverLink>
            </div>

            {/* Stats */}
            <div
              className="anim anim-d4"
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {heroStats.map((s) => (
                <div key={s.val}>
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
                      whiteSpace: "pre-line",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - score card */}
          <div className="anim anim-d3">
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "2rem",
                boxShadow: "0 8px 40px rgba(15,14,12,0.08), 0 1px 4px rgba(15,14,12,0.04)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: "1rem" }}>
                    Wild Forest Honey - 500g
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)", marginTop: "0.2rem" }}>
                    Svastya Organic Farms · Western Ghats, Karnataka
                  </div>
                </div>
                <Tag variant="verified">Verified</Tag>
              </div>

              {/* Rings */}
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <ScoreRing score={81} label="Pramaan Score" color="var(--verified)" />
                <ScoreRing score={66} label="Your Score" color="var(--caution)" />
                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginBottom: "0.5rem" }}>
                    Your priorities
                  </div>
                  <div
                    style={{ fontSize: "0.8rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}
                  >
                    <span>Lab Testing <strong style={{ color: "var(--caution)" }}>Pending</strong></span>
                    <span>Traceability <strong style={{ color: "var(--verified)" }}>Full</strong></span>
                    <span>Sustainability <strong style={{ color: "var(--verified)" }}>High</strong></span>
                  </div>
                </div>
              </div>

              {/* Score bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
                {scoreBars.map((bar) => (
                  <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{ fontSize: "0.75rem", color: "var(--ink-soft)", width: 110, flexShrink: 0 }}
                    >
                      {bar.label}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        background: "var(--paper-warm)",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: bar.val + "%",
                          background: bar.color,
                          borderRadius: 99,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "0.7rem",
                        color: "var(--ink-muted)",
                        width: 28,
                        textAlign: "right",
                      }}
                    >
                      {bar.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Flags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <Tag variant="verified">Farm-to-shelf traced</Tag>
                <Tag variant="caution">Lab test pending</Tag>
                <Tag variant="verified">FSSAI certified</Tag>
              </div>

              {/* Confidence */}
              <div
                style={{
                  background: "var(--paper-warm)",
                  borderRadius: 8,
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--ink-soft)" }}>Confidence Level</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {confidenceColors.map((c, i) => (
                      <div key={i} style={{ width: 18, height: 8, borderRadius: 2, background: c }} />
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.75rem",
                      color: "var(--ink-soft)",
                    }}
                  >
                    Medium-High
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HoverLink({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1.75rem",
        borderRadius: 8,
        fontSize: "0.925rem",
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.2s",
        background: primary ? "var(--ink)" : "transparent",
        color: primary ? "var(--paper)" : "var(--ink)",
        border: primary ? "none" : "1.5px solid var(--border-strong)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        if (primary) {
          el.style.background = "var(--accent)";
        } else {
          el.style.borderColor = "var(--ink)";
        }
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        if (primary) {
          el.style.background = "var(--ink)";
        } else {
          el.style.borderColor = "var(--border-strong)";
        }
        el.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}
