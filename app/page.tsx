import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { LogoCloudSection } from "@/components/sections/logo-cloud"
import { PlatformSection } from "@/components/sections/platform"
import { UseCasesSection } from "@/components/sections/use-cases"
import { KeyResultsSection } from "@/components/sections/key-results"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { CaseStudySection } from "@/components/sections/case-study"
import { AboutSection } from "@/components/sections/about"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <PlatformSection />
        <UseCasesSection />
        <KeyResultsSection />
        <HowItWorksSection />
        <CaseStudySection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

