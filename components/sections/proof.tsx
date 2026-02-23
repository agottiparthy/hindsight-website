"use client"

import Image from "next/image"
import { Container } from "@/components/ui/container"

const results = [
  { metric: "+12%", company: "LaunchDarkly", desc: "Competitive win rate increase", logo: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
  { metric: "+16%", company: "PurpleLab", desc: "New business win rate", logo: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
  { metric: "+11%", company: "Simpro", desc: "New business win rate", logo: "/customer_logos/simpro.svg" },
  { metric: "−86d", company: "Ironclad", desc: "Reduction in time-to-insight", logo: "/customer_logos/ironclad logo.svg" },
  { metric: "+44%", company: "Fathom", desc: "Loss reason accuracy", logo: "/customer_logos/fathom logo.svg" },
]

const testimonials = [
  {
    quote: "My reps are winning deals thanks to messaging identified by Hindsight. It helps us replicate what is working.",
    photo: "/customer_pictures/tye davis.jpeg",
    name: "Tye Davis",
    role: "Sr. PMM – Compete",
    companyLogo: "/customer_logos/launchdarkly-Logo-Vector.svg-.png",
    company: "LaunchDarkly",
  },
  {
    quote: "We finally have a clear picture of why we're losing deals — and the data to do something about it. It changed how we prioritize roadmap.",
    photo: "/customer_pictures/toby laforest.jpeg",
    name: "Toby Laforest",
    role: "VP Product Marketing",
    companyLogo: "/customer_logos/ironclad logo.svg",
    company: "Ironclad",
  },
]

export function ProofSection() {
  return (
    <div
      id="results"
      style={{
        background: "#0F1F3D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial amber glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container className="py-24 relative">
        {/* Eyebrow */}
        <div
          className="reveal flex items-center gap-2.5 mb-4"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#D4A843",
          }}
        >
          Proven results
          <span style={{ display: "block", width: "32px", height: "1px", background: "#D4A843" }} />
        </div>

        {/* Headline */}
        <h2
          className="reveal reveal-delay-1 mb-16"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 4vw, 54px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#FFFFFF",
            maxWidth: "540px",
          }}
        >
          Numbers from real customers.{" "}
          <em style={{ fontStyle: "italic", color: "#D4A843" }}>Not projections.</em>
        </h2>

        {/* Results grid */}
        <div
          className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-5 mb-16"
          style={{
            gap: "2px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {results.map((r) => (
            <div
              key={r.company}
              style={{
                background: "rgba(255,255,255,0.04)",
                padding: "28px 20px",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#D4A843",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {r.metric}
              </div>
              {/* Company logo */}
              <div className="relative h-5 w-20 mb-3" style={{ filter: "brightness(0) invert(1)", opacity: 0.55 }}>
                <Image src={r.logo} alt={r.company} fill className="object-contain object-left" />
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                {r.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,67,0.3)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  fontSize: "17px",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "28px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid rgba(212,168,67,0.4)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{t.role}</div>
                  </div>
                </div>
                {/* Company logo */}
                <div
                  className="relative flex-shrink-0"
                  style={{ height: "20px", width: "80px", filter: "brightness(0) invert(1)", opacity: 0.4 }}
                >
                  <Image src={t.companyLogo} alt={t.company} fill className="object-contain object-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
