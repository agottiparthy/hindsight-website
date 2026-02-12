import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: 1,
    title: "Connect and Research",
    description:
      "Connect your tools in a few clicks. Hindsight conducts layered analysis of your market, messaging, and deals.",
  },
  {
    number: 2,
    title: "Build Your Workflows",
    description:
      "Build tailored Recipes that combine insights from the web and your deals into battlecards, product comparisons, win-loss reports, newsletters, and more.",
  },
  {
    number: 3,
    title: "Distribute Insights",
    description:
      "Hindsight plugs into Slack, Email, Zapier, Glean, and other systems via API to help your teams take action.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="brand" className="mb-4">How it Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#11214C] mb-6">
              AI agents that understand why you win or lose.
            </h2>
            <p className="text-lg text-[#11214C]/70 mb-8">
              Hindsight makes sure fixable mistakes and exploitable opportunities are detected quickly - and the right stakeholders are notified to take action.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  {/* Step number */}
                  <div className="w-8 h-8 rounded-full bg-[#3EA7ED] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#11214C] mb-1">{step.title}</h3>
                    <p className="text-[#11214C]/60 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="bg-[#F5F8FB] border border-[#E8EEF4] rounded-2xl p-6 aspect-square flex items-center justify-center">
            <span className="text-[#11214C]/30">Product Visual</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
