"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

/* ─── Panel 04: Interface (MCP) ───────────────────────────────────────────── */

const LOSS_REASONS = [
  { label: "Integration gap", revenue: 420, pct: 100 },
  { label: "Missing features", revenue: 290, pct: 69 },
  { label: "Pricing", revenue: 180, pct: 43 },
  { label: "Timing / budget", revenue: 95, pct: 23 },
]


export function InterfacePanel() {
  const [visible, setVisible] = useState(0) // 0 = none, 1 = report, 2 = slack, 3 = mcp, 4 = battlecard
  const [barsVisible, setBarsVisible] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setVisible(0)
      setBarsVisible(false)

      await sleep(600)
      if (cancelled) return

      // Card 1: Win-loss report
      setVisible(1)
      await sleep(400)
      if (cancelled) return
      setBarsVisible(true)

      await sleep(2400)
      if (cancelled) return

      // Card 2: Slack
      setVisible(2)

      await sleep(2600)
      if (cancelled) return

      // Card 3: MCP
      setVisible(3)

      await sleep(1800)
      if (cancelled) return

      // Card 4: Battlecard
      setVisible(4)

      await sleep(3200)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)]">

      {/* Header
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DC]">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]" style={{ fontFamily: "Arial, sans-serif" }}>
          Deal Intelligence · Outputs
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#2A5C45] text-white tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>
          LIVE SYNC
        </span>
      </div> */}

      {/* 2×2 grid canvas */}
      <div className="bg-background p-3 grid grid-cols-2 gap-3" style={{ height: 420, gridTemplateRows: "1fr 1fr" }}>

        {/* ── Card 1: Win-loss bar chart — top-left ── */}
        <div
          className={`rounded-lg overflow-hidden border border-[#E8E4DC] bg-card shadow-[0_4px_20px_rgba(15,31,61,0.10)] transition-all duration-500 ${
            visible >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between px-3.5 py-2 bg-background border-b border-[#E8E4DC]">
            <span className="text-[11px] font-bold text-[#0F1F3D]" style={{ fontFamily: "Arial, sans-serif" }}>
              Loss Reasons · Q1 2026
            </span>
            <span className="text-[9px] text-[#6B7280]" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>
              win-loss report
            </span>
          </div>
          <div className="px-3.5 py-3 flex flex-col gap-2.5">
            {LOSS_REASONS.map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <div className="w-[90px] shrink-0 text-[10px] text-[#374151] truncate" style={{ fontFamily: "Arial, sans-serif" }}>
                  {row.label}
                </div>
                <div className="flex-1 h-3 bg-[#E8E4DC] rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-[#0F1F3D] rounded-sm transition-all duration-700 ease-out"
                    style={{ width: barsVisible ? `${row.pct}%` : "0%" }}
                  />
                </div>
                <div className="w-[36px] shrink-0 text-right text-[10px] font-bold text-[#0F1F3D]" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>
                  ${row.revenue}k
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Card 2: Slack — top-right ── */}
        <div
          className={`rounded-lg overflow-hidden border border-[#E8E4DC] bg-card shadow-[0_6px_24px_rgba(15,31,61,0.13)] transition-all duration-500 ${
            visible >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#3F0F40]">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-[10px] font-bold text-white/80" style={{ fontFamily: "Arial, sans-serif" }}>#ask-hindsight</span>
          </div>
          <div className="bg-card px-3 py-2.5 flex items-start gap-2">
            <div className="w-6 h-6 rounded bg-[#E8EAF6] flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[9px] font-bold text-[#3949AB]" style={{ fontFamily: "Arial, sans-serif" }}>MR</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5 mb-0.5">
                <span className="text-[11px] font-bold text-[#1D1C1D]" style={{ fontFamily: "Arial, sans-serif" }}>Marcus R.</span>
                <span className="text-[9px] text-[#616061]" style={{ fontFamily: "Arial, sans-serif" }}>10:32 AM</span>
              </div>
              <div className="text-[11px] text-[#1D1C1D] leading-snug" style={{ fontFamily: "Arial, sans-serif" }}>
                <span className="text-[#1264A3] font-medium">@Hindsight</span> how do we beat Acme in midmarket?
              </div>
              <div className="mt-2 pl-2 border-l-2 border-[#D4A843]">
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="text-[10px] font-bold text-[#0F1F3D]" style={{ fontFamily: "Arial, sans-serif" }}>Hindsight</span>
                  <span className="text-[9px] px-1 py-0.5 rounded bg-[#F3F0FF] text-[#5B21B6] font-bold" style={{ fontFamily: "Arial, sans-serif" }}>APP</span>
                </div>
                <div className="text-[10px] text-[#374151] leading-snug" style={{ fontFamily: "Arial, sans-serif" }}>
                  Lead with SSO — cited in 7/9 wins vs. Acme. Avoid pricing early; they discount late.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 3: Claude MCP — bottom-left ── */}
        <div
          className={`rounded-lg overflow-hidden border border-[#E8E4DC] shadow-[0_8px_28px_rgba(15,31,61,0.16)] transition-all duration-500 flex flex-col ${
            visible >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1C1C1C] border-b border-white/[0.06]">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-[9px] text-white/30 ml-1 tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>claude</span>
          </div>
          {/* Chat body */}
          <div className="bg-[#1C1C1C] px-3 pt-3 pb-3 flex flex-col gap-3 flex-1">
            {/* User message bubble */}
            <div className="flex justify-end">
              <div className="bg-[#2E2E2E] text-white/80 text-[10px] leading-snug px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[85%]" style={{ fontFamily: "Arial, sans-serif" }}>
                use the hindsight mcp to find product gaps leading to losses this month
              </div>
            </div>
            {/* Working state */}
            <div className="flex items-center gap-2">
              {/* Claude logo */}
              <div className="w-4 h-4 shrink-0 relative">
                <Image src="/integration_logos/claude-color.png" alt="Claude" fill className="object-contain" />
              </div>
              <span className="text-[11px] text-white/50" style={{ fontFamily: "Arial, sans-serif" }}>Working</span>
            </div>
            {/* Tool call chip */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 bg-[#2A2A2A] border border-white/10 rounded-lg px-2.5 py-2">
                <div className="w-5 h-5 rounded bg-[#0F1F3D] flex items-center justify-center shrink-0">
                  <div className="relative w-3 h-3">
                    <Image src="/hindsightlogo-mark-only.svg" alt="Hindsight" fill className="object-contain brightness-0 invert" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-white/70 font-medium truncate" style={{ fontFamily: "Arial, sans-serif" }}>Query Hindsight deals</div>
                </div>
                <span className="text-[9px] text-white/30 bg-white/10 px-1.5 py-0.5 rounded text-nowrap" style={{ fontFamily: "Arial, sans-serif" }}>Request</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 4: Battlecard — bottom-right ── */}
        <div
          className={`rounded-lg overflow-hidden border border-[#E8E4DC] bg-card shadow-[0_10px_32px_rgba(15,31,61,0.18)] transition-all duration-500 ${
            visible >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Battlecard header */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#0F1F3D]">
            <div>
              <div className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>battlecard</div>
              <div className="text-[12px] font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>vs. Acme Inc.</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#4ADE80]" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>67%</div>
              <div className="text-[8px] text-white/40 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>win rate</div>
            </div>
          </div>
          {/* Bullets */}
          <div className="px-3.5 py-2.5 flex flex-col gap-2">
            {[
              { icon: "✓", color: "#2A5C45", bg: "#EAF4EF", text: "Lead with SSO & native integrations" },
              { icon: "✓", color: "#2A5C45", bg: "#EAF4EF", text: "Stress implementation speed — avg 14 days" },
              { icon: "✗", color: "#B91C1C", bg: "#FEF2F2", text: "Don't compete on price — they discount 30%+ late" },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[10px] font-bold mt-0.5 w-4 shrink-0 text-center rounded px-0.5" style={{ fontFamily: "Arial, sans-serif", color: b.color, background: b.bg }}>{b.icon}</span>
                <span className="text-[10px] text-[#374151] leading-snug" style={{ fontFamily: "Arial, sans-serif" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}