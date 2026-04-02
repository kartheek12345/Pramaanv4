"use client";

const footerLinks = [
  { href: "#how", label: "How It Works" },
  { href: "#trust", label: "Trust Framework" },
  { href: "#business", label: "For Brands" },
  { href: "#cta", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(247,244,239,0.4)",
        padding: "2rem 4vw",
        borderTop: "1px solid rgba(247,244,239,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.1rem",
              color: "var(--paper)",
              fontWeight: 700,
            }}
          >
            Pramaan<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div style={{ fontSize: "0.75rem", marginTop: "0.3rem" }}>
            India's Trust Infrastructure for Products
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8rem",
                color: "rgba(247,244,239,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--paper)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(247,244,239,0.4)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ fontSize: "0.75rem" }}>© 2025 Pramaan. All rights reserved.</div>
      </div>
    </footer>
  );
}
