import HowItWorks from "@/components/sections/HowItWorks";
import TrustFramework from "@/components/sections/TrustFramework";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Pramaan",
  description:
    "Understand the Pramaan verification pipeline: five trust dimensions, certification tiers, and AI anomaly detection.",
};

export default function HowItWorksPage() {
  return (
    <>
      <div style={{ height: "5rem" }} /> {/* Nav offset */}
      <HowItWorks />
      <div className="divider" />
      <TrustFramework />
    </>
  );
}
