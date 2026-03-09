"use client"

import Link from "next/link"

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
        <div className="bg-navy rounded-lg p-10">
          <h3 className="text-[22px] font-bold text-white mb-2">
            Request a Demo
          </h3>
          <p className="text-sm text-white/60 mb-7 leading-relaxed">
            We&apos;ll show you exactly what Hindsight finds in your deal data — usually within 48 hours.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber transition-colors"
            />
            <input
              type="email"
              placeholder="Work email"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber transition-colors"
            />
            <input
              type="text"
              placeholder="Company"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber transition-colors"
            />
            <select
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white/60 outline-none focus:border-amber transition-colors cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>How are you currently tracking win/loss?</option>
              <option className="text-black" value="crm">CRM only</option>
              <option className="text-black" value="gong">Gong / call recording</option>
              <option className="text-black" value="manual">Manual interviews</option>
              <option className="text-black" value="none">We&apos;re not</option>
            </select>
            <button
              type="submit"
              className="bg-amber text-white text-sm font-bold uppercase tracking-[0.06em] py-3.5 rounded hover:opacity-90 hover:-translate-y-px transition-all"
            >
              Request Demo →
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
