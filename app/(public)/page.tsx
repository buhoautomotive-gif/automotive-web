import { Hero } from "@/sections/hero";
import { ProcessSection } from "@/sections/process";
import {
  ValueSection,
  CalculatorSection,
  OpportunitiesSection,
  ScoreSection,
  DifferenceSection,
  TrustSection,
  CTASection,
} from "@/sections/home-sections";
export default function Home() {
  return (
    <>
      <Hero />
      <ValueSection />
      <CalculatorSection />
      <ProcessSection />
      <OpportunitiesSection />
      <ScoreSection />
      <DifferenceSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
