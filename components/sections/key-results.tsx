import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

const metrics = [
  { value: "+12%", label: "competitive win rate", href: "/customers", logo: "LaunchDarkly" },
  { value: "+11%", label: "new business win rate", href: "/customers", logo: "Simpro" },
  { value: "-86 days", label: "time-to-insight", href: "/customers", logo: "Ironclad" },
  { value: "+44%", label: "tracked loss reason accuracy", href: "/customers", logo: "Fathom" },
]

export function KeyResultsSection() {
  return (
    <section className="bg-[#F5F8FB] py-20 md:py-28">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Key Results</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11214C]">
            Learn faster, increase your win rate
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric) => (
            <Link
              key={metric.label}
              href={metric.href}
              className="group bg-white border border-[#E8EEF4] rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-[#11214C]/5 transition-all"
            >
              <div className="text-xs text-[#11214C]/50 mb-2 font-medium">{metric.logo} →</div>
              <div className="text-3xl md:text-4xl font-bold text-[#3EA7ED] mb-2">
                {metric.value}
              </div>
              <div className="text-[#11214C]/60 text-sm">{metric.label}</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
