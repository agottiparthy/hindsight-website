import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  LogoCloudSection,
  StatsBarSection,
  ProblemSection,
  HowItWorksSection,
  SolutionsSection,
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
        <SolutionsSection />
        <KeyResultsSection />
        <StatsBarSection />

        <ComparisonSection />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
