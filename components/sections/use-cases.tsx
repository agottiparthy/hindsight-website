import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const useCases = [
  {
    id: "competitive-enablement",
    badge: "Competitive Enablement",
    title: "Accurate competitive messaging that wins deals.",
    description:
      "Hindsight monitors competitors and tracks winning and losing messaging. PMMs create battlecards and enablement assets once, Hindsight maintains them, and gives reps answers in Slack.",
    quote: {
      text: "My reps are winning deals thanks to messaging identified by Hindsight. It helps us replicate what is working.",
      author: "Tye Davis",
      role: "Sr. PMM - Compete",
      company: "LaunchDarkly",
    },
    caseStudyHref: "/customers/how-launchdarkly-scaled-win-loss-and-ci-to-200-reps",
    learnMoreHref: "/competitive-enablement",
  },
  {
    id: "win-loss-analysis",
    badge: "Win-Loss Analysis",
    title: "Understand why you win and lose with full coverage.",
    description:
      "Hindsight analyzes your GTM data and conducts interviews to fill in any gaps. Get real data on how factors like sales execution, messaging, and product are affecting deals.",
    quote: {
      text: "The best win-loss report we've had in years. We replaced sampled interviews with full analysis, at a lower price.",
      author: "Toby LaForest",
      role: "Sr. Director, PMM",
      company: "Ironclad",
    },
    caseStudyHref: "/customers/ironclad",
    learnMoreHref: "/win-loss-analysis",
  },
  {
    id: "insight-workflows",
    badge: "Insight Workflows",
    title: "Turn win-loss insights into action across the business.",
    description:
      "Build workflows to share the right insight at the right time. Hindsight ties insights directly into sales coaching, messaging strategy, and product decisions.",
    quote: {
      text: "Knowing why we win or losing deals today instead of waiting a quarter let's us enable our team to react quickly.",
      author: "Travis Allred",
      role: "Sr. Director, PMM",
      company: "PurpleLab",
    },
    caseStudyHref: "/customers/purplelab",
    learnMoreHref: "/workflows",
  },
]

export function UseCasesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11214C]">
            Use Cases
          </h2>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.id} 
              className="bg-[#F5F8FB] rounded-3xl p-8 md:p-12 border border-[#E8EEF4]"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Badge variant="brand" className="mb-4">{useCase.badge}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#11214C] mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-[#11214C]/70 mb-6">{useCase.description}</p>
                  
                  {/* Quote Card */}
                  <Link href={useCase.caseStudyHref} className="block group">
                    <div className="bg-white border border-[#E8EEF4] rounded-xl p-4 mb-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#A0C6E6]/30 rounded-full flex-shrink-0" />
                        <div>
                          <p className="text-[#11214C]/80 text-sm italic mb-2">&quot;{useCase.quote.text}&quot;</p>
                          <p className="text-[#11214C] font-medium text-sm">{useCase.quote.author}</p>
                          <p className="text-[#11214C]/50 text-xs">{useCase.quote.role}</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={useCase.learnMoreHref}
                    className="inline-flex items-center gap-2 text-[#3EA7ED] font-medium hover:gap-3 transition-all"
                  >
                    See {useCase.badge} <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Placeholder for visual */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-white border border-[#E8EEF4] rounded-2xl shadow-lg shadow-[#11214C]/5 aspect-[4/3] flex items-center justify-center">
                    <span className="text-[#11214C]/30">Screenshot Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
