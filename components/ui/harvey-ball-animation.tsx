"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// ── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { name: "AI Analysis", desc: "Automated insight generation" },
  { name: "Native CRM Sync", desc: "Salesforce & HubSpot" },
  { name: "Onboarding Speed", desc: "Time to first insight" },
  { name: "Custom Reporting", desc: "Flexible templates" },
  { name: "Call Intelligence", desc: "Conversation analysis" },
]

// Scores per feature: [You, ACME, Clari]  (1–4)
const SCORES = [
  [4, 2, 3],
  [4, 3, 2],
  [4, 2, 3],
  [3, 3, 1],
  [4, 2, 1],
]

const COLS = ["You", "ACME", "HOOLI"]

// The single cell we focus on: ACME × AI Analysis
const ACTIVE_FEAT = 0
const ACTIVE_COL = 1

const SIDEBAR = {
  score: 2,
  col: "ACME",
  feature: "AI Analysis",
  explanation:
    "ACME provides basic trend charts but lacks AI-generated reasoning. Buyers consistently describe insights as 'surface-level' — unable to explain the why behind scores.",
  docSources: [
    { title: "ACME Product Page", subtitle: "acme.io/features/analytics", icon: "🌐" },
    { title: "G2 Reviews · AI category", subtitle: "avg 3.1 · 47 reviews", icon: "⭐" },
  ],
  deals: [
    { name: "Meridian Health", result: "Loss", amount: "$240K", note: "Cited 'no AI reasoning layer' as top gap" },
    { name: "Apex Software", result: "Win", amount: "$180K", note: "Buyer switched from ACME after eval" },
    { name: "Lakeview Financial", result: "Loss", amount: "$310K", note: "ACME's roadmap promise accepted instead" },
  ],
}

// ── Score badge (color-coded number) ─────────────────────────────────────────
function ScoreBadge({ score, active }: { score: number; active?: boolean }) {
  const colors: Record<number, { bg: string; text: string; border: string }> = {
    1: { bg: "#FEF2F2", text: "#B91C1C", border: "#FECACA" },
    2: { bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
    3: { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
    4: { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0" },
  }
  const c = colors[score] ?? colors[1]
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded font-bold text-[11px] transition-all duration-200"
      style={{
        background: active ? "#D4A843" : c.bg,
        color: active ? "#0F1F3D" : c.text,
        border: `1.5px solid ${active ? "#D4A843" : c.border}`,
        boxShadow: active ? "0 0 0 3px rgba(212,168,67,0.25)" : "none",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {score}
    </span>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export function HarveyBallAnimation() {
  const [showHighlight, setShowHighlight] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setShowHighlight(false)
      setShowSidebar(false)
      await sleep(800)
      if (cancelled) return

      setShowHighlight(true)
      await sleep(500)
      if (cancelled) return

      setShowSidebar(true)
      await sleep(5500)
      if (cancelled) return

      setShowSidebar(false)
      await sleep(400)
      if (cancelled) return
      setShowHighlight(false)
      await sleep(800)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="bg-[#FAFAF8] h-full flex overflow-hidden relative">

      {/* ── Left: table ─────────────────────────────────────────────── */}
      <div
        className="flex flex-col p-4 transition-all duration-500 ease-in-out shrink-0"
        style={{ width: showSidebar ? "52%" : "100%" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Feature Comparison
          </span>
          <span
            className="text-[9px] text-[#9CA3AF]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            sourced from deals
          </span>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="pb-2 pr-2 w-[44%]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF]" style={{ fontFamily: "Arial, sans-serif" }}>
                    Feature
                  </span>
                </th>
                {COLS.map((col, ci) => (
                  <th key={col} className="pb-2 text-center">
                    <span
                      className={`text-[10px] font-bold ${ci === 0 ? "text-[#0F1F3D]" : "text-[#6B7280]"}`}
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {col}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feat, fi) => (
                <tr
                  key={feat.name}
                  className={`border-t border-[#E8E4DC] transition-colors duration-300 ${
                    fi === ACTIVE_FEAT && showHighlight ? "bg-[#FFF8E7]" : ""
                  }`}
                >
                  <td className="py-2 pr-2">
                    <div className="text-[10px] font-bold text-[#0F1F3D] leading-none truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {feat.name}
                    </div>
                    {!showSidebar && (
                      <div className="text-[8px] text-[#9CA3AF] mt-0.5 truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                        {feat.desc}
                      </div>
                    )}
                  </td>
                  {SCORES[fi].map((score, ci) => {
                    const isActive = fi === ACTIVE_FEAT && ci === ACTIVE_COL && showHighlight
                    return (
                      <td key={ci} className="py-2 text-center">
                        <div className="flex items-center justify-center">
                          <ScoreBadge score={score} active={isActive} />
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-[#E8E4DC] flex-wrap">
          {([1, 2, 3, 4] as const).map((s) => (
            <div key={s} className="flex items-center gap-1">
              <ScoreBadge score={s} />
              <span className="text-[8px] text-[#9CA3AF]" style={{ fontFamily: "Arial, sans-serif" }}>
                {s === 1 ? "Weak" : s === 2 ? "Partial" : s === 3 ? "Strong" : "Best"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: sidebar ──────────────────────────────────────────── */}
      <div
        className="absolute top-0 right-0 h-full bg-white border-l border-[#E8E4DC] flex flex-col transition-all duration-500 ease-in-out overflow-hidden"
        style={{ width: showSidebar ? "48%" : "0%", opacity: showSidebar ? 1 : 0 }}
      >
        {/* Constrain inner content so it doesn't overflow during animation */}
        <div className="flex flex-col h-full" style={{ width: "calc(100% + 0px)", minWidth: 0 }}>

          {/* Header */}
          <div className="px-3.5 pt-3.5 pb-2.5 border-b border-[#E8E4DC] shrink-0">
            <div className="flex items-center gap-2 mb-1.5">
              <ScoreBadge score={SIDEBAR.score} active />
              <span className="text-[11px] font-bold text-[#0F1F3D]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                {SIDEBAR.col} · {SIDEBAR.feature}
              </span>
            </div>
            <p className="text-[9px] text-[#6B7280] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              {SIDEBAR.explanation}
            </p>
          </div>

          {/* Sources */}
          <div className="px-3.5 py-2.5 border-b border-[#E8E4DC] shrink-0">
            <div className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
              Sources
            </div>
            <div className="flex flex-col gap-1.5">
              {SIDEBAR.docSources.map((s, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] mt-px shrink-0">{s.icon}</span>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-[#374151] truncate" style={{ fontFamily: "Arial, sans-serif" }}>{s.title}</div>
                    <div className="text-[8px] text-[#9CA3AF] truncate" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>{s.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deals */}
          <div className="px-3.5 py-2.5 flex-1 overflow-hidden">
            <div className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
              Related Deals
            </div>
            <div className="flex flex-col gap-2">
              {SIDEBAR.deals.map((d, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="relative w-3 h-3 shrink-0 mt-0.5">
                    <Image src="/integration_logos/salesforce logo.png" alt="SF" fill className="object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[9px] font-bold text-[#0F1F3D] truncate" style={{ fontFamily: "Arial, sans-serif" }}>{d.name}</span>
                      <span
                        className="text-[8px] font-bold px-1 py-px rounded shrink-0"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          background: d.result === "Win" ? "#F0FDF4" : "#FEF2F2",
                          color: d.result === "Win" ? "#15803D" : "#B91C1C",
                        }}
                      >
                        {d.result}
                      </span>
                      <span className="text-[8px] text-[#9CA3AF] shrink-0" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>{d.amount}</span>
                    </div>
                    <div className="text-[8px] text-[#6B7280] leading-snug mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{d.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
