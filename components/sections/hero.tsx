"use client"

import Link from "next/link"
import { DealReviewCard } from "@/components/ui/deal-review-card"

export function HeroSection() {
  return (
    <section className="pt-[140px] pb-[50px] px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: text */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-6 font-mono">
            Win-Loss Intelligence
          </p>
          <h1 className="text-[clamp(42px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.025em] text-navy mb-7">
            Win-loss analysis<br />
            that actually<br />
            <em className="italic text-navy opacity-60">works.</em>
          </h1>
          <p className="text-lg leading-relaxed text-body max-w-[480px] mb-10">
            Your CRM says pricing. Your buyer said something else. Hindsight investigates every closed deal, interviews buyers automatically, and tells you what actually happened.
          </p>
          <div className="flex items-center gap-4 mb-14">
            <Link
              href="/request-demo"
              className="bg-navy text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-blue transition-all hover:-translate-y-px"
            >
              See what your last 50 deals actually say
            </Link>
          </div>
        </div>

        {/* Right: animated deal review card */}
        <div className="relative">
          {/* Floating stat */}
          <div className="absolute -top-6 -right-6 bg-amber text-white rounded-lg px-[18px] py-3.5 shadow-[0_4px_16px_rgba(217,119,6,0.4)] z-10">
            <div className="text-[28px] font-bold leading-none tracking-[-0.03em] mb-1">
              44%
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.08em] opacity-90 font-mono">
              Better accuracy
            </div>
          </div>

          <DealReviewCard />
        </div>

      </div>
    </section>
  )
}
