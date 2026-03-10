"use client"

import Link from "next/link"
import { DemoForm } from "@/components/ui/demo-form"

export function CTASection() {
  return (
    <section className="px-12 py-[120px]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: copy */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
            Get Started
          </p>
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold leading-[1.15] tracking-[-0.025em] text-navy mb-5">
            See what your last<br />50 deals actually say.
          </h2>
          <p className="text-[17px] text-body leading-relaxed mb-9">
            Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/request-demo"
              className="bg-navy text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-blue transition-all hover:-translate-y-px"
            >
              Get a Demo
            </Link>
            <Link
              href="/results"
              className="text-navy text-sm border-b border-navy pb-px hover:opacity-60 transition-opacity"
            >
              Read case studies →
            </Link>
          </div>
        </div>

        {/* Right: demo request box */}
        <div className="bg-navy rounded-lg">
          <div className="p-10 pb-2">
            <h3 className="text-[22px] font-bold text-white mb-2">
              Request a Demo
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We&apos;ll show you exactly what Hindsight finds in your deal data — usually within 48 hours.
            </p>
          </div>
          <DemoForm />
        </div>

      </div>
    </section>
  )
}
