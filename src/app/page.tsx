import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { JupiterHighlight } from "@/components/sections/jupiter-highlight";
import { ServicesPreview } from "@/components/sections/services-preview";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { WhyUs } from "@/components/sections/why-us";
import { CoveragePreview } from "@/components/sections/coverage-preview";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <JupiterHighlight />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyUs />
      <CoveragePreview />
      <CTA />
    </>
  );
}
