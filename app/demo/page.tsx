"use client";

import ScoreRing from "@/components/ui/ScoreRing";
import Tag from "@/components/ui/Tag";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

/* ─── Sample product data ─── */
const scoreBreakdown = [
  { label: "Traceability", icon: "🌾", val: 88, color: "var(--verified)", explain: "GPS-tagged farm origin, IoT-tracked transit, and verified packaging facility." },
  { label: "Documentation", icon: "📄", val: 75, color: "var(--score-b)", explain: "FSSAI license cross-verified. Organic board certificate on file." },
  { label: "Lab Validation", icon: "🧬", val: 40, color: "var(--caution)", explain: "Sample submitted to NABL-accredited lab. Results pending — score will update." },
  { label: "Processing", icon: "⚙️", val: 82, color: "var(--score-b)", explain: "Cold-filtered, unheated. Equipment logs and facility audit on record." },
  { label: "Sustainability", icon: "♻️", val: 92, color: "var(--verified)", explain: "Regenerative beekeeping practices. Glass jar, recycled label, low carbon footprint." },
];

const passportData = [
  { label: "Farm", val: "Svastya, Srisailam, AP" },
  { label: "Harvest Window", val: "Oct – Nov 2024" },
  { label: "Processing", val: "Cold-filtered, unheated" },
  { label: "Packaging", val: "Glass jar, recycled label" },
  { label: "FSSAI Cert.", val: "Verified ✓", highlight: true },
  { label: "Certification", val: "Double Dot (Grade B+)", highlight: false },
];

const flags = [
  { type: "verified", text: "Farm location, area, and harvest window GPS-verified. Volume consistent with apiary capacity." },
  { type: "caution", text: "Third-party lab test submitted. Results under review. Score will update once validated. Expected: 5–7 days." },
  { type: "verified", text: "FSSAI license independently verified. No open compliance violations on record." },
  { type: "caution", text: "Bee species not independently confirmed. Seller-declared as Apis dorsata (giant rock bee)." },
];

const traceSteps = [
  { step: "01", label: "Farm Harvest", detail: "Srisailam Forest, AP", icon: "🌿" },
  { step: "02", label: "Raw Collection", detail: "Cold-extracted at source", icon: "🍯" },
  { step: "03", label: "Processing", detail: "Filtered, not heated", icon: "⚙️" },
  { step: "04", label: "Quality Check", detail: "Internal + NABL sample sent", icon: "🧬" },
  { step: "05", label: "Packaging", detail: "Glass jar, recycled label", icon: "📦" },
  { step: "06", label: "Dispatch", detail: "IoT-tracked last mile", icon: "🚚" },
];

export default function DemoPage() {
  return (
    <>
      <div style={{ height: "5rem" }} />

      {/* ─── DISCLAIMER BANNER ─── */}
      <div
        style={{
          background: "var(--caution-soft)",
          borderBottom: "1px solid var(--caution)",
          padding: "0.75rem 4vw",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--ink-soft)",
          fontWeight: 500,
        }}
      >
        This is a sample product to demonstrate our verification system. No real transaction occurs.
      </div>

      <section style={{ padding: "3rem 4vw 5rem" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div className="page-section-label">System Demo</div>
            <h1 className="display-medium" style={{ marginBottom: "0.5rem" }}>
              What a verified product looks like.
            </h1>
            <p className="lead" style={{ marginBottom: "3rem" }}>
              This is how Pramaan presents evidence to consumers — not a brand story, but a
              structured, verifiable report.
            </p>
          </AnimateOnScroll>

          <div className="product-layout">
            {/* ═══ LEFT: Product card + Passport + Traceability ═══ */}
            <AnimateOnScroll>
              <div>
                {/* Product card */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid var(--border)",
                    minHeight: 360,
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
                    <h2
                      style={{
                        fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                        fontSize: "1.5rem",
                        fontWeight: 500,
                      }}
                    >
                      Wild Forest Honey
                    </h2>
                    <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                      Svastya Organic Farms · 500g · Batch #WFH-2024-11
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.15rem" }}>
                      Srisailam, Andhra Pradesh
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "1.25rem",
                      position: "relative",
                      zIndex: 1,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Tag variant="verified">Organic</Tag>
                    <Tag variant="verified">Traceable</Tag>
                    <Tag variant="accent">Double Dot Certified</Tag>
                  </div>
                </div>

                {/* Digital Passport */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--ink-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-dm-mono), monospace",
                      marginBottom: "1rem",
                    }}
                  >
                    Digital Passport
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem" }}>
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

                {/* Traceability Timeline */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--ink-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-dm-mono), monospace",
                      marginBottom: "1rem",
                    }}
                  >
                    Farm → Shelf Traceability
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {traceSteps.map((s, i) => (
                      <div
                        key={s.step}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.6rem 0",
                          borderBottom: i < traceSteps.length - 1 ? "1px solid var(--border)" : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: "var(--paper-warm)",
                            display: "grid",
                            placeItems: "center",
                            fontSize: "0.9rem",
                            flexShrink: 0,
                          }}
                        >
                          {s.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "0.825rem", fontWeight: 600 }}>{s.label}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>{s.detail}</div>
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: "0.65rem",
                            color: "var(--ink-muted)",
                          }}
                        >
                          {s.step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ═══ RIGHT: Scores + Breakdown + Flags ═══ */}
            <AnimateOnScroll delay={0.1}>
              <div>
                {/* Score rings row */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "2rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <ScoreRing score={82} label="Pramaan Score" color="var(--verified)" />
                    <ScoreRing score={66} label="Your Score" color="var(--caution)" />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "0.75rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.6,
                      maxWidth: 400,
                      margin: "0 auto",
                    }}
                  >
                    <strong>Pramaan Score</strong> is the objective composite across all 5 dimensions.{" "}
                    <strong>Your Score</strong> reflects your personal priorities (e.g. if you weight
                    lab purity higher, a pending test pulls your score down more).
                  </div>
                </div>

                {/* Grade badge */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.75rem",
                        borderRadius: 6,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: "var(--verified-soft)",
                        color: "var(--verified)",
                      }}
                    >
                      Grade A–
                    </span>
                    <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.4rem" }}>
                      4 of 5 dimensions verified
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#fff",
                      border: "1px dashed var(--caution)",
                      borderRadius: 12,
                      padding: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.75rem",
                        borderRadius: 6,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: "var(--caution-soft)",
                        color: "var(--caution)",
                      }}
                    >
                      Lab Pending
                    </span>
                    <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.4rem" }}>
                      Results expected in 5–7 days
                    </div>
                  </div>
                </div>

                {/* Score breakdown with explanations */}
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--ink-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-dm-mono), monospace",
                    marginBottom: "0.75rem",
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
                        padding: "0.9rem 1.25rem 0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {item.icon} {item.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "0.8rem",
                          color: "var(--ink-muted)",
                        }}
                      >
                        {item.val} / 100
                      </span>
                    </div>
                    <div style={{ padding: "0 1.25rem 0.75rem" }}>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--ink-muted)",
                          lineHeight: 1.5,
                          fontStyle: "italic",
                        }}
                      >
                        {item.explain}
                      </div>
                    </div>
                    <div style={{ height: 4, background: "var(--paper-warm)" }}>
                      <div style={{ height: "100%", width: `${item.val}%`, background: item.color }} />
                    </div>
                  </div>
                ))}

                {/* Verification notes */}
                <div style={{ marginTop: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--ink-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.75rem",
                      fontFamily: "var(--font-dm-mono), monospace",
                    }}
                  >
                    Verification Notes
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {flags.map((f, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                          fontSize: "0.825rem",
                          lineHeight: 1.5,
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            flexShrink: 0,
                            marginTop: "0.35rem",
                            background: f.type === "verified" ? "var(--verified)" : "var(--caution)",
                          }}
                        />
                        <span style={{ color: "var(--ink-soft)" }}>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link href="/for-brands" className="btn-primary" style={{ flex: 1, textAlign: "center", justifyContent: "center" }}>
                    Get Your Product Verified
                  </Link>
                  <Link href="/how-it-works" className="btn-outline" style={{ justifyContent: "center" }}>
                    How Scoring Works
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
