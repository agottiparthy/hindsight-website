"use client"

import { useState } from "react"
import Link from "next/link"

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tiers = [
  {
    name: "Essentials",
    tag: "Competitive Enablement",
    description: "Build accurate competitive context your team can trust. Best for individual PMMs and small teams.",
    monthlyPrice: 249,
    featured: false,
    cta: "Start for Free",
    ctaHref: "https://app.dealpage.ai/sign-up",
    features: [
      "10 competitors included",
      "20 custom AI workflows",
      "Unlimited queries",
      "CI Library (100 pages)",
      "Slack integration",
      "10 seats included",
    ],
  },
  {
    name: "Growth",
    tag: "Deal Intelligence",
    description: "Analyze real deals to understand why you win and lose. For PMM, RevOps, and Enablement teams that want structured insights.",
    monthlyPrice: 799,
    featured: true,
    cta: "Start for Free",
    ctaHref: "https://app.dealpage.ai/sign-up",
    features: [
      "50 AI Deal Reviews per month",
      "CRM + Meeting Intelligence integrations",
      "Win-Loss Interviews",
      "Deal Analysis Recipes",
      "Competitive, Product & Messaging Insights",
      "100 custom AI workflows",
      "25 competitors included",
    ],
  },
  {
    name: "Enterprise",
    tag: "Win-Loss Program",
    description: "Operationalized win-loss analysis and reporting. Built for teams that need defensible insights across sales, product, and leadership.",
    monthlyPrice: null,
    featured: false,
    cta: "Talk to Us",
    ctaHref: "/request-demo",
    features: [
      "Custom usage limits",
      "Win-Loss Interviews",
      "Custom Deal Scoring & Methodologies",
      "Advanced integrations",
      "API Access + BYO API Keys",
      "Executive-ready reporting",
      "Support & implementation",
    ],
  },
]

export function PricingCards() {
  const [yearly, setYearly] = useState(false)

  function displayPrice(monthly: number | null) {
    if (monthly === null) return null
    return yearly ? Math.round(monthly * 0.8) : monthly
  }

  return (
    <section className="px-6 md:px-12 py-[72px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-[13px] font-bold transition-colors ${!yearly ? "text-navy" : "text-body/50"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-11 h-6 rounded-full transition-colors ${yearly ? "bg-navy" : "bg-[#D1D5DB]"}`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${yearly ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
          <span className={`text-[13px] font-bold transition-colors ${yearly ? "text-navy" : "text-body/50"}`}>
            Yearly
          </span>
          {yearly && (
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-amber bg-amber/10 border border-amber/20 rounded-full px-2.5 py-1 font-mono">
              Save 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => {
            const price = displayPrice(tier.monthlyPrice)
            return (
              <div
                key={tier.name}
                className={`rounded-2xl flex flex-col overflow-hidden ${
                  tier.featured
                    ? "bg-navy ring-2 ring-amber/40 shadow-xl"
                    : "bg-card border border-[#E8E4DC]"
                }`}
              >
                {tier.featured && (
                  <div className="bg-amber/10 border-b border-amber/20 px-7 py-2 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber font-mono">Most Popular</span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.14em] font-mono ${tier.featured ? "text-amber/70" : "text-amber"}`}>
                      {tier.tag}
                    </span>
                    <h3 className={`text-[22px] font-bold mt-1 mb-3 ${tier.featured ? "text-white" : "text-navy"}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-[14px] leading-relaxed ${tier.featured ? "text-white/60" : "text-body"}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-7">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-[46px] font-bold leading-none tracking-[-0.04em] font-mono ${tier.featured ? "text-white" : "text-navy"}`}>
                          ${price}
                        </span>
                        <span className={`text-[13px] ${tier.featured ? "text-white/50" : "text-body/60"}`}>
                          /mo{yearly ? ", billed annually" : ""}
                        </span>
                      </div>
                    ) : (
                      <span className={`text-[36px] font-bold leading-none tracking-[-0.04em] font-mono ${tier.featured ? "text-white" : "text-navy"}`}>
                        Custom
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={tier.ctaHref}
                    className={`block text-center text-[13px] font-bold uppercase tracking-[0.06em] px-6 py-3.5 rounded mb-8 transition-all hover:-translate-y-px ${
                      tier.featured
                        ? "bg-amber text-navy hover:bg-amber/90"
                        : "bg-navy text-white hover:bg-navy/90"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  {/* Divider */}
                  <div className={`border-t mb-6 ${tier.featured ? "border-white/10" : "border-[#E8E4DC]"}`} />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-[14px] ${tier.featured ? "text-white/80" : "text-body"}`}>
                        <span className={tier.featured ? "text-amber" : "text-amber"}>{CHECK}</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-[12px] text-body/50 mt-8">
          All plans include a free trial. No credit card required to start.
          Additional competitors $10/mo · Additional seats $15/mo.
        </p>
      </div>
    </section>
  )
}
