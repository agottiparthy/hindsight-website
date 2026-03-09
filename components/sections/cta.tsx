"use client"

import Link from "next/link"

export function CTASection() {
  return (
    <section className="px-12 py-[120px]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: copy */}
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D97706] mb-5"
            style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
          >
            Get Started
          </p>
          <h2
            className="text-[clamp(36px,4vw,52px)] font-bold leading-[1.15] tracking-[-0.025em] text-[#0D1B3E] mb-5"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            See what your last<br />50 deals actually say.
          </h2>
          <p
            className="text-[17px] text-[#2E3F58] leading-relaxed mb-9"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/request-demo"
              className="bg-[#0D1B3E] text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#1A6FD4] transition-all hover:-translate-y-px"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Get a Demo
            </Link>
            <Link
              href="/results"
              className="text-[#0D1B3E] text-sm border-b border-[#0D1B3E] pb-px hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Read case studies →
            </Link>
          </div>
        </div>

        {/* Right: demo request box */}
        <div className="bg-[#0D1B3E] rounded-lg p-10">
          <h3
            className="text-[22px] font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Request a Demo
          </h3>
          <p
            className="text-sm text-white/60 mb-7 leading-relaxed"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            We&apos;ll show you exactly what Hindsight finds in your deal data — usually within 48 hours.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D97706] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            />
            <input
              type="email"
              placeholder="Work email"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D97706] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            />
            <input
              type="text"
              placeholder="Company"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D97706] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            />
            <select
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white/60 outline-none focus:border-[#D97706] transition-colors cursor-pointer"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
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
              className="bg-[#D97706] text-white text-sm font-bold uppercase tracking-[0.06em] py-3.5 rounded hover:opacity-90 hover:-translate-y-px transition-all"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Request Demo →
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
