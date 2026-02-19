import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

const metrics = [
  { value: "+12%", label: "competitive win rate", href: "/customers", logoSrc: "/customer_logos/launchdarkly-Logo-Vector.svg-.png", logoAlt: "LaunchDarkly" },
  { value: "+11%", label: "new business win rate", href: "/customers", logoSrc: "/customer_logos/simpro.svg", logoAlt: "Simpro" },
  { value: "-86 days", label: "time-to-insight", href: "/customers", logoSrc: "/customer_logos/ironclad logo.svg", logoAlt: "Ironclad" },
  { value: "+44%", label: "tracked loss reason accuracy", href: "/customers", logoSrc: "/customer_logos/fathom logo.svg", logoAlt: "Fathom" },
]

export function KeyResultsSection() {
  return (
    <section className="relative bg-[#F5F8FB] py-20 md:py-28 before:absolute before:inset-0 before:bg-[url('/background/chord-background.png')] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-75">
      <Container className="relative z-10">
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
              <div className="h-7 flex items-center justify-center mb-3">
                <Image
                  src={metric.logoSrc}
                  alt={metric.logoAlt}
                  width={100}
                  height={28}
                  className="object-contain max-h-7 opacity-50 group-hover:opacity-70 transition-opacity"
                />
              </div>
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
