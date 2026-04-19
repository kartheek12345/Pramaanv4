"use client";

import { useEffect, useRef, useState } from "react";

export interface Dimension {
  label: string;
  score: number; // 0–100
  color: string;
}

interface Score360Props {
  dimensions: Dimension[];
  overallScore: number;
  size?: number;
  showLabels?: boolean;
}

const GAP_DEG = 5;

export default function Score360({
  dimensions,
  overallScore,
  size = 280,
  showLabels = true,
}: Score360Props) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ── Geometry ────────────────────────────────────────────────────
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.44;          // outer ring edge
  const ringW = size * 0.13;           // ring thickness
  const innerR = outerR - ringW;       // inner ring edge
  const textR  = innerR - size * 0.04; // white disc radius

  const n = dimensions.length;
  const sliceDeg = 360 / n;

  const segments = dimensions.map((dim, i) => {
    const startDeg = i * sliceDeg + GAP_DEG / 2 - 90; // start at top
    const endDeg   = startDeg + sliceDeg - GAP_DEG;

    const trackPath = describeArc(cx, cy, outerR, innerR, startDeg, endDeg);

    const fillSpan  = (sliceDeg - GAP_DEG) * (animated ? dim.score / 100 : 0.001);
    const fillEndDeg = startDeg + fillSpan;
    const fillPath  = describeArc(cx, cy, outerR, innerR, startDeg, fillEndDeg);

    // Dot at fill tip
    const tipRad = (fillEndDeg * Math.PI) / 180;
    const tipMid = (outerR + innerR) / 2;
    const tx = cx + tipMid * Math.cos(tipRad);
    const ty = cy + tipMid * Math.sin(tipRad);

    return { dim, trackPath, fillPath, tx, ty };
  });

  // ── Center text positions (vertically centred group) ────────────
  const scoreFontSize = size * 0.21;
  const unitFontSize  = size * 0.063;
  const brandFontSize = size * 0.052;
  const lineGap       = size * 0.018;

  const groupH =
    scoreFontSize + lineGap + unitFontSize + lineGap + brandFontSize;

  const scoreY = cy - groupH / 2 + scoreFontSize / 2;
  const unitY  = scoreY + scoreFontSize / 2 + lineGap + unitFontSize / 2;
  const brandY = unitY  + unitFontSize  / 2 + lineGap + brandFontSize / 2;

  // ── Resolve colors for muted/inactive dimensions ─────────────────
  const isMuted = (color: string) => color.startsWith("rgba(180");

  return (
    <div
      ref={ref}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* ── Ring SVG ── */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ overflow: "visible", display: "block" }}
      >
        <defs>
          {/* Subtle inner shadow for the disc */}
          <filter id="disc-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.07" />
          </filter>
        </defs>

        {segments.map(({ dim, trackPath, fillPath, tx, ty }, i) => (
          <g key={dim.label}>
            {/* Track */}
            <path d={trackPath} fill={dim.color} opacity={isMuted(dim.color) ? 0.08 : 0.13} />
            {/* Fill */}
            <path
              d={fillPath}
              fill={dim.color}
              opacity={animated ? (isMuted(dim.color) ? 0.3 : 1) : 0}
              style={{ transition: `opacity 0.5s ease ${i * 0.1}s` }}
            />
            {/* Tip dot */}
            {!isMuted(dim.color) && (
              <circle
                cx={tx}
                cy={ty}
                r={size * 0.022}
                fill={dim.color}
                opacity={animated ? 1 : 0}
                style={{ transition: `opacity 0.3s ease ${i * 0.1 + 0.4}s` }}
              />
            )}
          </g>
        ))}

        {/* White centre disc */}
        <circle
          cx={cx}
          cy={cy}
          r={textR}
          fill="white"
          filter="url(#disc-shadow)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={textR}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1}
        />

        {/* Score number */}
        <text
          x={cx}
          y={scoreY}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: "var(--font-fraunces), 'Fraunces', serif",
            fontSize: scoreFontSize,
            fontWeight: 700,
            fill: "var(--ink)",
            opacity: animated ? 1 : 0,
            transition: "opacity 0.5s ease 0.2s",
          }}
        >
          {overallScore}
        </text>

        {/* / 100 */}
        <text
          x={cx}
          y={unitY}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: unitFontSize,
            fill: "var(--ink-muted)",
            letterSpacing: "0.04em",
            opacity: animated ? 1 : 0,
            transition: "opacity 0.5s ease 0.3s",
          }}
        >
          / 100
        </text>

        {/* PRAMAAN 360° */}
        <text
          x={cx}
          y={brandY}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: brandFontSize,
            fontWeight: 600,
            fill: "var(--accent)",
            letterSpacing: "0.07em",
            opacity: animated ? 1 : 0,
            transition: "opacity 0.5s ease 0.4s",
          }}
        >
          P·360°
        </text>
      </svg>

      {/* ── HTML legend (only when showLabels) ── */}
      {showLabels && (
        <div
          style={{
            marginTop: "1.25rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem 1.75rem",
            width: "100%",
            maxWidth: size + 40,
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
          }}
        >
          {dimensions.map((d) => (
            <div
              key={d.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {/* Color swatch */}
              <div
                style={{
                  width: 8,
                  height: 24,
                  borderRadius: 3,
                  background: d.color,
                  flexShrink: 0,
                  opacity: isMuted(d.color) ? 0.3 : 1,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.68rem",
                    color: isMuted(d.color) ? "var(--ink-muted)" : "var(--ink)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: 500,
                  }}
                >
                  {d.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), 'Fraunces', serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: isMuted(d.color) ? "var(--ink-muted)" : d.color,
                    lineHeight: 1.1,
                  }}
                >
                  {d.score}
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontWeight: 400,
                      color: "var(--ink-muted)",
                      marginLeft: 2,
                    }}
                  >
                    /100
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── SVG arc helpers ─────────────────────────────────────────────────

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startDeg: number,
  endDeg: number
): string {
  if (Math.abs(endDeg - startDeg) < 0.01) return "";
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  const o1 = polarToCartesian(cx, cy, outerR, startDeg);
  const o2 = polarToCartesian(cx, cy, outerR, endDeg);
  const i2 = polarToCartesian(cx, cy, innerR, endDeg);
  const i1 = polarToCartesian(cx, cy, innerR, startDeg);
  return [
    `M ${o1.x} ${o1.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${o2.x} ${o2.y}`,
    `L ${i2.x} ${i2.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${i1.x} ${i1.y}`,
    "Z",
  ].join(" ");
}
