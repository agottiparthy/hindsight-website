"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"

const plans = [
  {
    name: "Standard Program",
    price: "$24K",
    cadence: "per year · $2,000 / month effective",
    featured: false,
    badge: null,
    features: [
      "Win-loss analysis on 100% of deals",
      "Rep + buyer interview program",
      "Competitive monitoring + battlecards",
      "Monthly leadership readout",
      "Kickoff + monthly check-in calls",
      "Slack distribution of insights",
    ],
    cta: "Book a scoping call",
    ctaHref: "/demo",
  },
  {
    name: "Advanced Program",
    price: "$36K",
    cadence: "per year · $3,000 / month effective",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Standard",
      "Rep coaching workflows + scorecards",
      "CRM enrichment (Salesforce + HubSpot)",
      "Custom Recipes + automated alerts",
      "Competitive roleplays for sales team",
      "Bi-weekly touchpoints",
    ],
    cta: "Get a Demo",
    ctaHref: "/demo",
  },
]

export function PricingSection() {
  return (
    <div id="pricing" style={{ background: "#F8F6F1" }}>
      <Container className="py-24">
        {/* Eyebrow */}
        <div
          className="reveal flex items-center justify-center gap-2.5 mb-4"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#D4A843",
          }}
        >
          Pricing
          <span style={{ display: "block", width: "32px", height: "1px", background: "#D4A843" }} />
        </div>

        {/* Headline */}
        <h2
          className="reveal reveal-delay-1 text-center mb-3"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 4vw, 54px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#0F1F3D",
          }}
        >
          Simple. Transparent. Annual.
        </h2>

        <p
          className="reveal reveal-delay-2 text-center mb-16"
          style={{
            fontSize: "15px",
            color: "#6B7280",
            maxWidth: "480px",
            margin: "0 auto 64px",
          }}
        >
          All programs are annual contracts. Setup fees waived. Connect in under an hour.
        </p>

        {/* Pricing cards */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? "#0F1F3D" : "#FFFFFF",
                borderRadius: "20px",
                padding: "40px",
                border: plan.featured ? "none" : "1.5px solid #E8E4DC",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "#0F1F3D"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(15,31,61,0.12)"
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "#E8E4DC"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                }
              }}
            >
              {/* Amber top accent for featured */}
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "#D4A843",
                  }}
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#0F1F3D",
                    background: "#D4A843",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    marginBottom: "24px",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: plan.featured ? "rgba(255,255,255,0.5)" : "#6B7280",
                  marginBottom: "12px",
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div
                style={{
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  fontSize: "52px",
                  fontWeight: 900,
                  color: plan.featured ? "#D4A843" : "#0F1F3D",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {plan.price}
              </div>

              {/* Cadence */}
              <div
                style={{
                  fontSize: "13px",
                  color: plan.featured ? "rgba(255,255,255,0.4)" : "#6B7280",
                  marginBottom: "32px",
                }}
              >
                {plan.cadence}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: plan.featured ? "rgba(255,255,255,0.1)" : "#E8E4DC",
                  marginBottom: "28px",
                }}
              />

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "36px",
                }}
              >
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: plan.featured ? "rgba(255,255,255,0.7)" : "#374151",
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: "#D4A843", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className="block text-center text-sm font-medium py-3.5 rounded-[10px] transition-all"
                style={
                  plan.featured
                    ? { background: "#D4A843", color: "#0F1F3D" }
                    : {
                        background: "transparent",
                        border: "1.5px solid #0F1F3D",
                        color: "#0F1F3D",
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.featured) {
                    ;(e.currentTarget as HTMLElement).style.background = "#ECC96A"
                    ;(e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(212,168,67,0.3)"
                  } else {
                    ;(e.currentTarget as HTMLElement).style.background = "#0F1F3D"
                    ;(e.currentTarget as HTMLElement).style.color = "#FFFFFF"
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    ;(e.currentTarget as HTMLElement).style.background = "#D4A843"
                    ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                  } else {
                    ;(e.currentTarget as HTMLElement).style.background = "transparent"
                    ;(e.currentTarget as HTMLElement).style.color = "#0F1F3D"
                  }
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
