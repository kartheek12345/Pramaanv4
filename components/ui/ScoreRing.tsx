"use client";

import { useEffect, useRef, useState } from "react";

interface ScoreRingProps {
  score: number;
  label: string;
  color: string;
}

export default function ScoreRing({ score, label, color }: ScoreRingProps) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ width: 90, height: 90, position: "relative" }}>
        <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="45" cy="45" r={radius} fill="none" stroke="#e5e0d8" strokeWidth="7" />
          <circle
            cx="45" cy="45" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Fraunces', serif",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color }}>{score}</span>
          <span style={{ fontSize: "0.65rem", color: "var(--ink-muted)" }}>/ 100</span>
        </div>
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--ink-soft)",
          marginTop: "0.4rem",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}
