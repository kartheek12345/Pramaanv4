import type { Metadata } from "next";
import { Fraunces, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "500", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pramaan — Proof Before Purchase",
  description:
    "India's first trust infrastructure for natural and wellness products. We verify what brands claim — so you can buy with certainty.",
  keywords: [
    "Pramaan",
    "organic verification",
    "product trust score",
    "India organic",
    "greenwashing",
    "natural products",
    "IIT verified",
  ],
  openGraph: {
    title: "Pramaan — Proof Before Purchase",
    description:
      "India's trust infrastructure for natural products. Every claim, proven.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmMono.variable} ${outfit.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
