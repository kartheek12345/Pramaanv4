import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustFramework from "@/components/sections/TrustFramework";
import ProductDemo from "@/components/sections/ProductDemo";
import Personalization from "@/components/sections/Personalization";
import ForBusiness from "@/components/sections/ForBusiness";
import Vision from "@/components/sections/Vision";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Problem />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <TrustFramework />
      <div className="divider" />
      <ProductDemo />
      <div className="divider" />
      <Personalization />
      <div className="divider" />
      <ForBusiness />
      <div className="divider" />
      <Vision />
      <div className="divider" />
      <CTA />
    </>
  );
}
