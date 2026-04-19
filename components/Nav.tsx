"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/demo", label: "Demo" },
  { href: "/for-brands", label: "For Brands" },
  { href: "/careers", label: "Careers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(247,244,239,0.96)"
            : "rgba(247,244,239,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s, box-shadow 0.3s",
          boxShadow: scrolled ? "0 1px 20px rgba(15,14,12,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "1.2rem 4vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-fraunces), 'Fraunces', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            Pramaan<span style={{ color: "var(--accent)" }}>360</span>
          </Link>

          {/* Desktop Links */}
          <ul
            style={{ display: "flex", gap: "2rem", listStyle: "none" }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--ink)" : "var(--ink-soft)",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s",
                      borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                      paddingBottom: "0.15rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/for-brands#apply"
              className="hidden-mobile"
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                padding: "0.55rem 1.25rem",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "var(--ink)")
              }
            >
              Get Verified
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.4rem",
                color: "var(--ink)",
              }}
              className="show-mobile hamburger-btn"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                background: "rgba(15,14,12,0.3)",
                backdropFilter: "blur(2px)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: "64px",
                left: "1rem",
                right: "1rem",
                zIndex: 99,
                background: "var(--paper)",
                border: "1px solid var(--border-strong)",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 8px 32px rgba(15,14,12,0.12)",
              }}
            >
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "0.75rem 1rem",
                        fontSize: "1rem",
                        fontWeight: pathname === link.href ? 600 : 500,
                        color: pathname === link.href ? "var(--ink)" : "var(--ink-soft)",
                        textDecoration: "none",
                        borderRadius: "8px",
                        background: pathname === link.href ? "var(--paper-warm)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid var(--border)", marginTop: "1rem", paddingTop: "1rem" }}>
                <Link
                  href="/for-brands#apply"
                  style={{
                    display: "block",
                    background: "var(--ink)",
                    color: "var(--paper)",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    fontSize: "0.925rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Get Verified →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <motion.line
        x1="3" y1="6" x2="19" y2="6"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        animate={open ? { rotate: 45, y: 5, x: 0 } : { rotate: 0, y: 0, x: 0 }}
        style={{ transformOrigin: "11px 6px" }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="3" y1="11" x2="19" y2="11"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="3" y1="16" x2="19" y2="16"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        style={{ transformOrigin: "11px 16px" }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}
