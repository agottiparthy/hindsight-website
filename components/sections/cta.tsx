"use client"

import Link from "next/link"

export function CTASection() {
  return (
    <section className="px-12 py-[120px]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: copy */}
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Get Started
          </p>
          <h2
            className="text-[clamp(36px,4vw,52px)] font-bold leading-[1.15] tracking-[-0.025em] text-[#0F1F3D] mb-5"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            See what your AI<br />should actually know.
          </h2>
          <p
            className="text-[17px] text-[#374151] leading-relaxed mb-9"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/request-demo"
              className="bg-[#0F1F3D] text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#1a3660] transition-all hover:-translate-y-px"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Get a Demo
            </Link>
            <Link
              href="/customers"
              className="text-[#0F1F3D] text-sm border-b border-[#0F1F3D] pb-px hover:opacity-60 transition-opacity"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Read case studies →
            </Link>
          </div>
        </div>

        {/* Right: demo request box */}
        <div className="bg-[#0F1F3D] rounded-lg p-10">
          <h3
            className="text-[22px] font-bold text-white mb-2"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Request a Demo
          </h3>
          <p
            className="text-sm text-white/60 mb-7 leading-relaxed"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            We&apos;ll show you exactly what Hindsight finds in your deal data — usually within 48 hours.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D4A843] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            />
            <input
              type="email"
              placeholder="Work email"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D4A843] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            />
            <input
              type="text"
              placeholder="Company"
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#D4A843] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            />
            <select
              className="bg-white/[0.08] border border-white/[0.12] rounded px-4 py-3 text-sm text-white/60 outline-none focus:border-[#D4A843] transition-colors cursor-pointer"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
              className="bg-[#D4A843] text-[#0F1F3D] text-sm font-bold uppercase tracking-[0.06em] py-3.5 rounded hover:opacity-90 hover:-translate-y-px transition-all"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Request Demo →
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
