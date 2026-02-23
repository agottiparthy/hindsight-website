"use client"

import { Container } from "@/components/ui/container"
import Image from "next/image"

const logos = [
  { name: "PurpleLab", src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
  { name: "Amplitude", src: "/customer_logos/amplitude logo.png" },
  { name: "EventMobi", src: "/customer_logos/eventmobi logo.webp" },
  { name: "Fathom", src: "/customer_logos/fathom logo.svg" },
  { name: "Hyperbrowser", src: "/customer_logos/hyperbrowser (black).svg" },
  { name: "Ironclad", src: "/customer_logos/ironclad logo.svg" },
  { name: "LaunchDarkly", src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
  { name: "Nixtla", src: "/customer_logos/nixtla logo.svg" },
  { name: "Raken", src: "/customer_logos/raken app logo.png" },
  { name: "Simpro", src: "/customer_logos/simpro.svg" },
  { name: "Treasury Prime", src: "/customer_logos/treasury prime.png" },
  { name: "Uberall", src: "/customer_logos/uberall.svg" },
]

export function LogoCloudSection() {
  return (
    <section
      className="py-12"
      style={{
        background: "#F8F6F1",
        borderBottom: "1px solid #E8E4DC",
      }}
    >
      <style>{`
        .logo-img { opacity: 0.45; filter: saturate(0); transition: opacity 0.2s; }
        .logo-cell:hover .logo-img { opacity: 0.7; }
      `}</style>
      <Container>
        <p
          className="text-center mb-8"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#6B7280",
          }}
        >
          Trusted by GTM teams at
        </p>
        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          style={{
            borderLeft: "1px solid #E8E4DC",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="logo-cell flex items-center justify-center px-6 py-6"
              style={{
                borderRight: "1px solid #E8E4DC",
                borderBottom: "1px solid #E8E4DC",
              }}
              title={logo.name}
            >
              <div className="relative h-7 w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="logo-img object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
