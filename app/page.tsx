import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  LogoCloudSection,
  StatsBarSection,
  ProblemSection,
  HowItWorksSection,
  ComparisonSection,
  KeyResultsSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
                <LogoCloudSection />
        <ProblemSection />
        <HowItWorksSection />
        <StatsBarSection />
        <ComparisonSection />
        <KeyResultsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
