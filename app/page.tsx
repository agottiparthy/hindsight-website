import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";
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
      <Script id="software-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Hindsight",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Win-loss intelligence platform that investigates every closed deal, interviews buyers automatically, and tells you what actually happened.",
          "offers": {
            "@type": "Offer",
            "price": "899",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "899",
              "priceCurrency": "USD",
              "unitText": "MONTH"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "50"
          },
          "featureList": [
            "Automated win-loss analysis",
            "AI-powered buyer interviews",
            "Deal review agent",
            "Competitive intelligence",
            "Sales enablement"
          ]
        })}
      </Script>

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
