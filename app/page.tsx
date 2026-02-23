import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSection } from "@/components/sections/hero"
import { LogoCloudSection } from "@/components/sections/logo-cloud"
import { StatsBarSection } from "@/components/sections/stats-bar"
import { DeliverablesSection } from "@/components/sections/deliverables"
import { ProofSection } from "@/components/sections/proof"
import { ComparisonSection } from "@/components/sections/comparison"
import { PricingSection } from "@/components/sections/pricing"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <HeroSection />
        {/* <LogoCloudSection /> */}
        <StatsBarSection />
        <DeliverablesSection />
        <ProofSection />
        <ComparisonSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
