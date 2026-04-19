import { ReactNode } from "react";

type TagVariant = "ink" | "verified" | "caution" | "risk" | "accent";

interface TagProps {
  variant?: TagVariant;
  children: ReactNode;
}

const styles: Record<TagVariant, React.CSSProperties> = {
  ink: {
    color: "var(--ink-soft)",
    border: "1px solid var(--border-strong)",
    background: "transparent",
  },
  verified: {
    color: "var(--verified)",
    background: "var(--verified-soft)",
    border: "1px solid transparent",
  },
  caution: {
    color: "var(--caution)",
    background: "var(--caution-soft)",
    border: "1px solid transparent",
  },
  risk: {
    color: "var(--risk)",
    background: "var(--risk-soft)",
    border: "1px solid transparent",
  },
  accent: {
    color: "var(--accent)",
    background: "var(--accent-soft)",
    border: "1px solid transparent",
  },
};

export default function Tag({ variant = "ink", children }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.3rem 0.7rem",
        borderRadius: "4px",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
