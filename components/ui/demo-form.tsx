"use client"

import { useState } from "react"

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — wire up to your actual endpoint
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center mb-6">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11l5 5 9-9" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-[22px] font-bold text-white mb-3">You&apos;re on the list.</h3>
        <p className="text-[15px] text-white/60 leading-relaxed max-w-xs">
          We&apos;ll reach out within one business day to schedule your walkthrough.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 md:p-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">First name</label>
          <input
            required
            type="text"
            placeholder="Alex"
            className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">Last name</label>
          <input
            required
            type="text"
            placeholder="Chen"
            className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">Work email</label>
        <input
          required
          type="email"
          placeholder="alex@company.com"
          className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">Company</label>
        <input
          required
          type="text"
          placeholder="Acme Corp"
          className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">Your role</label>
        <select
          required
          defaultValue=""
          className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white/60 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
        >
          <option value="" disabled>Select your role</option>
          <option className="text-black bg-white" value="pmm">Product Marketing</option>
          <option className="text-black bg-white" value="ci">Competitive Intelligence</option>
          <option className="text-black bg-white" value="se">Sales Enablement</option>
          <option className="text-black bg-white" value="revops">Revenue Operations</option>
          <option className="text-black bg-white" value="sales">Sales Leadership</option>
          <option className="text-black bg-white" value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono">What are you trying to solve? <span className="text-white/20 normal-case tracking-normal font-normal">(optional)</span></label>
        <textarea
          rows={3}
          placeholder="e.g. understand why we're losing to a specific competitor, scale win-loss across 200+ reps..."
          className="bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none focus:border-amber/60 focus:bg-white/[0.08] transition-all resize-none leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-1 bg-amber text-navy text-[13px] font-bold uppercase tracking-[0.08em] py-4 rounded-lg hover:bg-amber/90 hover:-translate-y-px transition-all disabled:opacity-60 disabled:translate-y-0"
      >
        {loading ? "Sending…" : "Request a Demo →"}
      </button>

      <p className="text-center text-[11px] text-white/30">
        No spam. We&apos;ll respond within one business day.
      </p>
    </form>
  )
}
