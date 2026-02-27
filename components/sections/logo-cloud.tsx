import { Container } from "@/components/ui/container"
import Image from "next/image"

const logos = [
  { name: "PurpleLab", src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
  { name: "Amplitude", src: "/customer_logos/amplitude logo.png" },
  { name: "Fathom", src: "/customer_logos/fathom logo.svg" },
  { name: "Ironclad", src: "/customer_logos/ironclad logo.svg" },
  { name: "LaunchDarkly", src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
    { name: "Hyperbrowser", src: "/customer_logos/hyperbrowser (black).svg" },
  { name: "Nixtla", src: "/customer_logos/nixtla logo.svg" },
  { name: "Raken", src: "/customer_logos/raken app logo.png" },
  { name: "Simpro", src: "/customer_logos/simpro.svg" },
  { name: "Treasury Prime", src: "/customer_logos/mimica logo.svg" },
  { name: "Uberall", src: "/customer_logos/uberall.svg" },
    { name: "EventMobi", src: "/customer_logos/eventmobi logo.webp" },
]

export function LogoCloudSection() {
  return (
    <section className="bg-[#F8F6F1] pb-[50px] border-b border-[#E8E4DC]">
      <Container>
        <p
          className="text-center text-[11px] uppercase tracking-[0.12em] text-[#6B7280] mb-8"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          AI-Powered GTM Teams Use Hindsight
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-[#E8E4DC]">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="border-r border-b border-[#E8E4DC] flex items-center justify-center px-6 py-6"
              title={logo.name}
            >
              <div className="relative h-7 w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-60 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
