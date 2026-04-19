"use client";

import Tag from "@/components/ui/Tag";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const scoreBreakdown = [
  { label: "🌾 Traceability", val: 88, color: "var(--verified)" },
  { label: "📄 Documentation", val: 75, color: "var(--score-b)" },
  { label: "🧬 Lab Validation", val: 40, color: "var(--caution)" },
  { label: "⚙️ Processing", val: 82, color: "var(--score-b)" },
  { label: "♻️ Sustainability", val: 92, color: "var(--verified)" },
];

const passportData = [
  { label: "Farm", val: "Svastya, Shivamogga Dist., KA" },
  { label: "Harvest Date", val: "Nov 14, 2024" },
  { label: "Processing", val: "Cold-filtered, unheated" },
  { label: "Packaging", val: "Glass jar, recycled label" },
  { label: "FSSAI Cert.", val: "Verified ✓", highlight: true },
];

const flags = [
  { type: "verified", text: "Farm location, area, and harvest window GPS-verified. Volume consistent with apiary capacity." },
  { type: "caution", text: "Third-party lab test submitted. Results under review. Score will update once validated. Expected: 5–7 days." },
  { type: "verified", text: "FSSAI license independently verified. No open compliance violations on record." },
  { type: "caution", text: "Bee species not independently confirmed. Seller-declared as Apis dorsata (giant rock bee)." },
];

export default function ProductDemo() {
  return (
    <section id="product-demo" style={{ background: "var(--paper-warm)", padding: "6rem 4vw" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="page-section-label">Product Page — Example</div>
          <h2 className="display-medium" style={{ marginBottom: "0.75rem" }}>
            What consumers actually see.
          </h2>
          <p className="lead" style={{ marginBottom: "3rem" }}>
            Not a brand story. A structured evidence report — for every product, every batch.
          </p>
        </AnimateOnScroll>

        <div className="product-layout">
          {/* Left: Product + Passport */}
          <AnimateOnScroll>
            <div>
              {/* Product image area */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--border)",
                  minHeight: 380,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 50% 40%, #f5edd4 0%, transparent 70%)",
                  }}
                />
                <div style={{ fontSize: "5rem", position: "relative", zIndex: 1 }}>🍯</div>
                <div style={{ textAlign: "center", marginTop: "1.5rem", position: "relative", zIndex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                    }}
                  >
                    Wild Forest Honey
                  </h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)", marginTop: "0.2rem" }}>
                    Svastya Organic Farms · 500g · Batch #WFH-2024-11
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    position: "relative",
                    zIndex: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Tag variant="verified">✓ Batch Verified</Tag>
                  <Tag variant="accent">Western Ghats Origin</Tag>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    right: "1.25rem",
                    background: "var(--ink)",
                    color: "var(--paper)",
                    padding: "0.4rem 0.75rem",
                    borderRadius: 6,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                  }}
                >
                  📱 Scan to verify
                </div>
              </div>

              {/* Digital Passport */}
              <div
                style={{
                  marginTop: "1.25rem",
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--ink-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "'DM Mono', monospace",
                    marginBottom: "0.75rem",
                  }}
                >
                  Digital Passport
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.825rem" }}>
                  {passportData.map((row) => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--ink-soft)" }}>{row.label}</span>
                      <span
                        style={{
                          fontWeight: 500,
                          color: row.highlight ? "var(--verified)" : "var(--ink)",
                        }}
                      >
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Score breakdown */}
          <AnimateOnScroll delay={0.1}>
            <div>
              {/* Dual score row */}
              <div className="dual-score-row">
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "1.25rem",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", fontWeight: 500, marginBottom: "0.5rem" }}>
                    Pramaan Score
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "3rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "var(--verified)",
                      }}
                    >
                      81
                    </span>
                    <span style={{ color: "var(--ink-muted)", fontSize: "1rem" }}>/100</span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.2rem 0.5rem",
                        borderRadius: 4,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        marginTop: "0.4rem",
                        background: "var(--verified-soft)",
                        color: "var(--verified)",
                      }}
                    >
                      Grade A–
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.5rem" }}>
                    Based on 4 of 5 dimensions verified
                  </div>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px dashed var(--caution)",
                    borderRadius: 14,
                    padding: "1.25rem",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", fontWeight: 500, marginBottom: "0.5rem" }}>
                    Your Score{" "}
                    <span style={{ color: "var(--caution)" }}>— Purity Focused</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "3rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "var(--caution)",
                      }}
                    >
                      66
                    </span>
                    <span style={{ color: "var(--ink-muted)", fontSize: "1rem" }}>/100</span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.2rem 0.5rem",
                        borderRadius: 4,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        marginTop: "0.4rem",
                        background: "var(--caution-soft)",
                        color: "var(--caution)",
                      }}
                    >
                      Lab test pending
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.5rem" }}>
                    Lab validation weighted 35% for you
                  </div>
                </div>
              </div>

              {/* Score breakdown */}
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--ink-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: "0.75rem",
                  marginTop: "0.5rem",
                }}
              >
                Score Breakdown
              </div>

              {scoreBreakdown.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    marginBottom: "0.75rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{item.label}</span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.8rem",
                        color: "var(--ink-muted)",
                      }}
                    >
                      {item.val} / 100
                    </span>
                  </div>
                  <div style={{ height: 4, background: "var(--paper-warm)" }}>
                    <div style={{ height: "100%", width: `${item.val}%`, background: item.color }} />
                  </div>
                </div>
              ))}

              {/* Flags */}
              <div style={{ marginTop: "1.5rem" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--ink-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.75rem",
                  }}
                >
                  Verification Notes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {flags.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: "0.35rem",
                          background:
                            f.type === "verified" ? "var(--verified)" : "var(--caution)",
                        }}
                      />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <a
                  href="#cta"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem 1.75rem",
                    borderRadius: 8,
                    fontSize: "0.925rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    background: "var(--ink)",
                    color: "var(--paper)",
                    transition: "all 0.2s",
                    minWidth: 140,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Buy — ₹849
                </a>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.75rem 1.75rem",
                    borderRadius: 8,
                    fontSize: "0.925rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    background: "transparent",
                    color: "var(--ink)",
                    border: "1.5px solid var(--border-strong)",
                    transition: "border-color 0.2s",
                  }}
                >
                  View Full Passport
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

    </section>
  );
}
