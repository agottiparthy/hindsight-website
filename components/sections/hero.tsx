"use client"

import Link from "next/link"
import { DealReviewCard } from "@/components/ui/deal-review-card"

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="pt-[140px] pb-[50px] px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: text */}
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-6"
            style={{ fontFamily: "Arial, Helvetica, sans-serif", animationDelay: "0.1s" }}
          >
            System of Record · Win-Loss Intelligence
          </p>
          <h1
            className="text-[clamp(42px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0F1F3D] mb-7"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            AI is reading<br />
            your CRM.<br />
            <em className="italic text-[#374151]">Your CRM is wrong.</em>
          </h1>
          <p
            className="text-lg leading-relaxed text-[#374151] max-w-[480px] mb-10"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Hindsight reviews and verifies every deal — cross-referencing your calls and other GTM data, then filling in the gaps with win-loss interviews. Feed your AI Agents high-quality validated intelligence you can actually trust.
          </p>
          <div className="flex items-center gap-4 mb-14">
            <Link
              href="/request-demo"
              className="bg-[#0F1F3D] text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#1a3660] transition-all hover:-translate-y-px"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Get a Demo
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#0F1F3D] text-sm border-b border-[#0F1F3D] pb-px hover:opacity-60 transition-opacity"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              See how it works →
            </Link>
          </div>

          {/* Trusted logos
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.12em] text-[#6B7280] mb-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Trusted by GTM teams at
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
              {[
                { name: "LaunchDarkly", src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
                { name: "Ironclad",     src: "/customer_logos/ironclad logo.svg" },
                { name: "Fathom",       src: "/customer_logos/fathom logo.svg" },
                { name: "Simpro",       src: "/customer_logos/simpro.svg" },
                { name: "PurpleLab",   src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
              ].map((logo) => (
                <div key={logo.name} className="relative h-5 w-24 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain object-left opacity-50 hover:opacity-75 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right: animated deal review card */}
        <div className="relative">
          {/* Floating stat */}
          <div className="absolute -top-6 -right-6 bg-[#D4A843] text-[#0F1F3D] rounded-lg px-[18px] py-3.5 shadow-[0_4px_16px_rgba(212,168,67,0.4)] z-10">
            <div
              className="text-[28px] font-bold leading-none tracking-[-0.03em] mb-1"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              44%
            </div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.08em] opacity-75"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Better accuracy
            </div>
          </div>

          <DealReviewCard />
        </div>

      </div>
    </section>
  )
}
