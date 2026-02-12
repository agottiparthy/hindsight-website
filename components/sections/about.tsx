import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

const stats = [
  { value: "$250m", label: "Revenue Impacted" },
  { value: "350,000", label: "Deals Analyzed in 2025" },
  { value: "3,000", label: "Win-Loss Interviews" },
  { value: "25,000", label: "Rep Questions Answered" },
]

export function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#E8EEF4]">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">About Us</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11214C]">
            We help GTM teams increase win rates
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3EA7ED] mb-2">
                {stat.value}
              </div>
              <div className="text-[#11214C]/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
