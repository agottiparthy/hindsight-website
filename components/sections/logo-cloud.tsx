import { Container } from "@/components/ui/container"

const logos = [
  { name: "Kustomer", placeholder: true },
  { name: "Teamwork", placeholder: true },
  { name: "Joor", placeholder: true },
  { name: "Fathom", placeholder: true },
  { name: "Ironclad", placeholder: true },
  { name: "LaunchDarkly", placeholder: true },
  { name: "Simpro", placeholder: true },
  { name: "Interfolio", placeholder: true },
]

export function LogoCloudSection() {
  return (
    <section className="bg-[#F5F8FB] py-12 border-y border-[#E8EEF4]">
      <Container>
        <p className="text-center text-[#11214C]/60 text-sm mb-8">
          50+ GTM Teams Use Hindsight to Win More Deals
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="h-6 md:h-8 w-24 md:w-28 bg-[#11214C]/10 rounded flex items-center justify-center"
              title={logo.name}
            >
              <span className="text-[#11214C]/40 text-xs font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
