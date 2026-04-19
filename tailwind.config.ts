import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-muted": "var(--ink-muted)",
        paper: "var(--paper)",
        "paper-warm": "var(--paper-warm)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        verified: "var(--verified)",
        "verified-soft": "var(--verified-soft)",
        caution: "var(--caution)",
        "caution-soft": "var(--caution-soft)",
        risk: "var(--risk)",
        "risk-soft": "var(--risk-soft)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1160px",
      },
      screens: {
        tablet: "900px",
        mobile: "600px",
      },
    },
  },
  plugins: [],
};

export default config;
