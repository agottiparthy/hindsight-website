"use client"

import { useEffect, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXEC_SUMMARY =
  "Meridian Health selected Frontline by Ormandy over Hindsight despite an active evaluation. The $240K ARR deal was lost primarily due to a perceived integration gap with their existing QuickBooks Online setup and concerns about migration risk. The rep marked loss reason as 'pricing' in Salesforce — buyer interviews revealed integration confidence was the real driver."

const DECISION_DRIVERS = [
  { label: "Integration Confidence", pct: 38, color: "#EF4444" },
  { label: "Migration Risk",         pct: 24, color: "#F59E0B" },
  { label: "Incumbent Relationship", pct: 20, color: "#7C3AED" },
  { label: "Pricing",                pct: 10, color: "#1A6FD4" },
  { label: "Other",                  pct:  8, color: "#E5E7EB" },
]

const SCORECARD = [
  { label: "Product Fit",           score: 3, color: "#1A6FD4" },
  { label: "Sales Execution",       score: 2, color: "#22C55E" },
  { label: "Relationship Strength", score: 2, color: "#7C3AED" },
  { label: "Pricing Fit",           score: 4, color: "#F59E0B" },
  { label: "Competitive Perf.",     score: 2, color: "#EF4444" },
  { label: "Messaging Fit",         score: 3, color: "#EC4899" },
]

const COMPETITORS = [
  { name: "Frontline by Ormandy", score: 4, max: 5, tag: "Winner",    tagColor: "#2A5C45" },
  { name: "Manual processes",      score: 1, max: 5, tag: "Evaluated", tagColor: "#6B7280" },
]

const FEATURES = [
  { label: "QuickBooks Integration",       mentions: 3 },
  { label: "Data Migration Support",        mentions: 2 },
  { label: "Service Workflow Automation",   mentions: 2 },
  { label: "Job & Project Management",      mentions: 2 },
]

// ─── Donut chart ──────────────────────────────────────────────────────────────
const R = 34
const CX = 44
const CY = 44
const CIRC = 2 * Math.PI * R

function buildSegments() {
  let offset = 0
  return DECISION_DRIVERS.map(({ pct, color }) => {
    const dash = (pct / 100) * CIRC
    const seg = { dash, offset, color }
    offset += dash
    return seg
  })
}
const SEGMENTS = buildSegments()

// ─── Component ───────────────────────────────────────────────────────────────
type Phase = "idle" | "summary" | "drivers" | "scorecard" | "competitors" | "done"

const PHASE_ORDER: Phase[] = ["idle", "summary", "drivers", "scorecard", "competitors", "done"]

export function DealReportAnimation() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [scoreBars, setScoreBars] = useState(false)
  const [competitorIn, setCompetitorIn] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setPhase("idle")
      setScoreBars(false)
      setCompetitorIn(false)
      await sleep(500)

      if (cancelled) return
      setPhase("summary")

      await sleep(1000)
      if (cancelled) return

      setPhase("drivers")
      await sleep(1600)
      if (cancelled) return

      setPhase("scorecard")
      await sleep(300)
      if (cancelled) return
      setScoreBars(true)
      await sleep(1800)
      if (cancelled) return

      setPhase("competitors")
      await sleep(300)
      if (cancelled) return
      setCompetitorIn(true)
      await sleep(3000)

      if (!cancelled) run()
    }
    run()
    return () => { cancelled = true }
  }, [])



  const after = (target: Phase) =>
    PHASE_ORDER.indexOf(phase) >= PHASE_ORDER.indexOf(target)

  return (
    <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)]">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E4DC] bg-background shrink-0">
        <div>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Deal Review
          </span>
          <span className="mx-2 text-[#E8E4DC]">·</span>
          <span
            className="text-[11px] font-bold text-[#0D1B3E]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Meridian Health
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", background: "#FAEAEA", color: "#7A2828" }}
          >
            Closed Lost
          </span>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#6B7280]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            $240K ARR
          </span>
        </div>
      </div>

      {/* Body — two columns */}
      <div
        className="grid grid-cols-[1fr_180px] divide-x divide-[#E8E4DC] overflow-y-auto"
        style={{ height: 420 }}
      >

        {/* ── Left column ────────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-[#E8E4DC]">

          {/* Exec Summary */}
          <div className="px-5 py-4">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-2"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Exec Summary
            </p>
            <p
              className="text-[11px] leading-[1.65] text-[#374151] min-h-[60px] transition-all duration-700"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", opacity: after("summary") ? 1 : 0, transform: after("summary") ? "translateY(0)" : "translateY(6px)" }}
            >
              {EXEC_SUMMARY}
            </p>
          </div>

          {/* Decision Drivers */}
          <div
            className="px-5 py-4 transition-all duration-500"
            style={{ opacity: after("drivers") ? 1 : 0, transform: after("drivers") ? "translateY(0)" : "translateY(10px)" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Decision Drivers
            </p>
            <div className="flex items-center gap-5">
              {/* Donut */}
              <svg width={CX * 2} height={CY * 2} viewBox={`0 0 ${CX * 2} ${CY * 2}`} className="shrink-0 -rotate-90">
                {SEGMENTS.map((seg, i) => (
                  <circle
                    key={i}
                    cx={CX} cy={CY} r={R}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={10}
                    strokeDasharray={`${after("drivers") ? seg.dash : 0} ${CIRC}`}
                    strokeDashoffset={-seg.offset}
                    style={{ transition: `stroke-dasharray 0.7s ease ${i * 0.12}s` }}
                  />
                ))}
              </svg>
              {/* Legend */}
              <div className="flex flex-col gap-1.5">
                {DECISION_DRIVERS.filter(d => d.label !== "Other").map((d) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                    <span
                      className="text-[10px] text-[#374151] leading-none"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {d.label}:&nbsp;
                      <span className="font-bold">{d.pct}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p
              className="text-[9px] text-[#9CA3AF] mt-2"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              As % of influence on decision
            </p>
          </div>

          {/* Scorecard */}
          <div
            className="px-5 py-4 transition-all duration-500"
            style={{ opacity: after("scorecard") ? 1 : 0, transform: after("scorecard") ? "translateY(0)" : "translateY(10px)" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Scorecard
            </p>
            <div className="flex flex-col gap-2">
              {SCORECARD.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="text-[10px] text-[#374151] w-[118px] shrink-0"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-[#E8E4DC] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: scoreBars ? `${(item.score / 5) * 100}%` : "0%",
                        background: item.color,
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />
                  </div>
                  <span
                    className="text-[10px] font-bold text-[#374151] tabular-nums w-6 text-right shrink-0"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {item.score}/5
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column ───────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-[#E8E4DC]">

          {/* Competitors */}
          <div
            className="px-4 py-4 transition-all duration-500"
            style={{ opacity: after("competitors") ? 1 : 0, transform: after("competitors") ? "translateY(0)" : "translateY(8px)" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-2.5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Competitors
            </p>
            <div className="flex flex-col gap-2.5">
              {COMPETITORS.map((c, i) => (
                <div
                  key={c.name}
                  className="animate-fadeInUp"
                  style={{ animationDuration: "0.35s", animationFillMode: "both", animationDelay: `${competitorIn ? i * 150 : 9999}ms` }}
                >
                  <p
                    className="text-[11px] font-bold text-[#0D1B3E] leading-snug mb-1"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {c.name}
                  </p>
                  {/* Score dots */}
                  <div className="flex gap-0.5 mb-1.5">
                    {Array.from({ length: c.max }).map((_, j) => (
                      <span
                        key={j}
                        className="w-2.5 h-2.5 rounded-full border"
                        style={{
                          background: j < c.score ? c.tagColor : "transparent",
                          borderColor: j < c.score ? c.tagColor : "#E8E4DC",
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="inline-block text-[8px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                    style={{ background: c.tagColor, color: "#fff", fontFamily: "Arial, sans-serif" }}
                  >
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div
            className="px-4 py-4 flex-1 transition-all duration-500"
            style={{ opacity: after("competitors") ? 1 : 0, transform: after("competitors") ? "translateY(0)" : "translateY(8px)", transitionDelay: "150ms" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-2.5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-2.5">
              {FEATURES.map((f, i) => (
                <div
                  key={f.label}
                  className="animate-fadeInUp"
                  style={{ animationDuration: "0.35s", animationFillMode: "both", animationDelay: `${competitorIn ? 300 + i * 120 : 9999}ms` }}
                >
                  <p
                    className="text-[10px] font-bold text-[#0D1B3E] leading-snug mb-1"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {f.label}
                  </p>
                  <div className="flex items-center gap-1">
                    <span
                      className="w-4 h-4 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[8px] font-bold shrink-0"
                    >
                      {f.mentions}
                    </span>
                    <span
                      className="text-[9px] text-[#6B7280]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                    >
                      mentions
                    </span>
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
