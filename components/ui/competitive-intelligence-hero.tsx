"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// ── Win drivers ──────────────────────────────────────────────────────────────
const WIN_DRIVERS = [
  { label: "AI / Automation Capabilities", pct: 87, amount: "$87K" },
  { label: "Workflow Integration", pct: 85, amount: "$85K" },
  { label: "Qualitative Insights Depth", pct: 48, amount: "$48K" },
  { label: "Perceived Value", pct: 37, amount: "$37K" },
  { label: "Sales Relationship", pct: 36, amount: "$36K" },
]

// ── Monitoring sources — front/back pairs for flip grid ─────────────────────
const FLIP_TILES: [{ src: string; alt: string }, { src: string; alt: string }][] = [
  [{ src: "/integration_logos/salesforce logo.png", alt: "Salesforce" }, { src: "/integration_logos/hubspot.svg", alt: "HubSpot" }],
  [{ src: "/integration_logos/gong.png", alt: "Gong" }, { src: "/integration_logos/outreach.png", alt: "Outreach" }],
  [{ src: "/integration_logos/linkedin.svg", alt: "LinkedIn" }, { src: "/integration_logos/x.png", alt: "X" }],
  [{ src: "/integration_logos/slack.png", alt: "Slack" }, { src: "/integration_logos/drive.png", alt: "Drive" }],
  [{ src: "/integration_logos/g2.png", alt: "G2" }, { src: "/integration_logos/google.svg", alt: "Google" }],
  [{ src: "/integration_logos/clari.svg", alt: "Clari" }, { src: "/integration_logos/salesforce logo.png", alt: "Salesforce" }],
]

// ── Line chart data ─────────────────────────────────────────────────────────
const MONTHS = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
const FREQ =    [18,   26,   38,   52,   64,   76]  // % of deals mentioning ACME — sharply rising
const WINRATE = [62,   58,   51,   44,   36,   28]  // win rate when ACME is present — declining

const CW = 136, CH = 58, PAD_L = 12, PAD_T = 6

function pt(i: number, v: number) {
  return `${PAD_L + (i / (MONTHS.length - 1)) * CW},${PAD_T + CH - (v / 100) * CH}`
}
const freqPoints  = FREQ.map((v, i) => pt(i, v)).join(" ")
const ratePoints  = WINRATE.map((v, i) => pt(i, v)).join(" ")

export function CompetitiveIntelligenceHero() {
  const [phase, setPhase] = useState<"hidden" | "in" | "animated">("hidden")
  const [flipped, setFlipped] = useState<boolean[]>(FLIP_TILES.map(() => false))

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("in"), 200)
    const t2 = setTimeout(() => setPhase("animated"), 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function loop() {
      await sleep(1800)
      for (let i = 0; i < FLIP_TILES.length; i++) {
        if (cancelled) return
        if (i > 0) await sleep(220)
        setFlipped((prev) => { const n = [...prev]; n[i] = true; return n })
      }
      await sleep(2400)
      for (let i = 0; i < FLIP_TILES.length; i++) {
        if (cancelled) return
        if (i > 0) await sleep(220)
        setFlipped((prev) => { const n = [...prev]; n[i] = false; return n })
      }
      await sleep(800)
      if (!cancelled) loop()
    }

    loop()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square select-none">

      {/* ── Concentric rings ─────────────────────────────────────────────── */}
      {[0.92, 0.66, 0.42].map((scale, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />
      ))}

      {/* ── Central icon ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(140deg, #2563eb 0%, #60a5fa 100%)",
            boxShadow: "0 8px 32px rgba(37,99,235,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <Image
            src="/hindsightlogo-mark-only.svg"
            alt="Hindsight"
            width={32}
            height={32}
            className="brightness-0 invert"
          />
        </div>
      </div>

      {/* ── 2×2 card grid ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-2">

        {/* ── Top-left: Monitoring ─────────────────────────────────────── */}
        <div
          className="bg-card rounded-2xl p-4 flex flex-col gap-2 z-10 transition-all duration-500"
          style={{
            boxShadow: "0 8px 32px rgba(15,31,61,0.18), 0 1px 4px rgba(0,0,0,0.08)",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translate(-6px,-6px) scale(0.96)" : "translate(0,0) scale(1)",
            transitionDelay: "0ms",
          }}
        >
          <span className="text-[12px] font-bold text-navy">
            Monitoring
          </span>

          {/* 3×2 flip grid */}
          <div className="grid grid-cols-3 gap-1.5 mt-0.5 flex-1">
            {FLIP_TILES.map((pair, i) => (
              <div
                key={i}
                className="relative w-full aspect-square"
                style={{ perspective: "400px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[i] ? "rotateX(180deg)" : "rotateX(0deg)",
                    transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 rounded-lg bg-background border border-[#E8E4DC] flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image src={pair[0].src} alt={pair[0].alt} width={20} height={20} className="object-contain" />
                  </div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
                  >
                    <Image src={pair[1].src} alt={pair[1].alt} width={20} height={20} className="object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status line */}
          <div className="flex items-center gap-1.5 pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
            <span className="text-[9px] text-[#6B7280]">Monitoring 11 sources</span>
          </div>
        </div>

        {/* ── Top-right: Win Drivers ────────────────────────────────────── */}
        <div
          className="bg-card rounded-2xl p-4 flex flex-col gap-1.5 z-10 overflow-hidden transition-all duration-500"
          style={{
            boxShadow: "0 8px 32px rgba(15,31,61,0.18), 0 1px 4px rgba(0,0,0,0.08)",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translate(6px,-6px) scale(0.96)" : "translate(0,0) scale(1)",
            transitionDelay: "80ms",
          }}
        >
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[11px] font-bold text-navy">
              Win Drivers vs. ACME
            </span>
          </div>
          {WIN_DRIVERS.map((d, i) => (
            <div key={d.label} className="flex flex-col gap-[3px]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-[#6B7280] truncate max-w-[80px]">
                  {d.label}
                </span>
                <span className="text-[9px] font-bold text-navy ml-1 shrink-0">
                  {d.amount}
                </span>
              </div>
              <div className="h-[5px] bg-[#E8E4DC] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #16a34a 0%, #22C55E 100%)",
                    width: phase === "animated" ? `${d.pct}%` : "0%",
                    transition: `width 0.8s cubic-bezier(0.4,0,0.2,1) ${i * 120 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom-left: Frequency + Win Rate line chart ─────────────── */}
        <div
          className="bg-card rounded-2xl p-4 flex flex-col z-10 transition-all duration-500"
          style={{
            boxShadow: "0 8px 32px rgba(15,31,61,0.18), 0 1px 4px rgba(0,0,0,0.08)",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translate(-6px,6px) scale(0.96)" : "translate(0,0) scale(1)",
            transitionDelay: "160ms",
          }}
        >
          {/* Title + legend */}
          <div className="flex items-start justify-between mb-2">
            <span className="text-[11px] font-bold text-navy leading-tight">
              vs. ACME
            </span>
            <div className="flex flex-col gap-[3px] items-end">
              <div className="flex items-center gap-1">
                <div className="w-4 h-[2px] rounded-full bg-navy" />
                <span className="text-[8px] text-[#6B7280]">Frequency</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-[2px] rounded-full bg-amber" />
                <span className="text-[8px] text-[#6B7280]">Win Rate</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1">
            <svg viewBox="0 0 160 82" className="w-full h-full overflow-visible">
              {/* Horizontal gridlines at 25%, 50%, 75% */}
              {[25, 50, 75].map(v => {
                const y = PAD_T + CH - (v / 100) * CH
                return (
                  <line key={v} x1={PAD_L} x2={PAD_L + CW} y1={y} y2={y}
                    stroke="#E8E4DC" strokeWidth="0.5" strokeDasharray="2 3" />
                )
              })}

              {/* Frequency line (navy) */}
              <polyline
                points={freqPoints}
                fill="none"
                stroke="#0F1F3D"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={phase === "animated" ? "0" : "1"}
                style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s" }}
              />

              {/* Win-rate line (gold) */}
              <polyline
                points={ratePoints}
                fill="none"
                stroke="#D4A843"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={phase === "animated" ? "0" : "1"}
                style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.5s" }}
              />

              {/* End-point dots */}
              {[{ pts: FREQ, color: "#0F1F3D" }, { pts: WINRATE, color: "#D4A843" }].map(({ pts, color }) =>
                pts.map((v, i) => {
                  const [x, y] = pt(i, v).split(",").map(Number)
                  return (
                    <circle key={`${color}-${i}`} cx={x} cy={y} r="2"
                      fill="white" stroke={color} strokeWidth="1.2"
                      opacity={phase === "animated" ? 1 : 0}
                      style={{ transition: `opacity 0.3s ease ${0.9 + i * 0.08}s` }}
                    />
                  )
                })
              )}

              {/* X-axis month labels */}
              {MONTHS.map((m, i) => (
                <text
                  key={m}
                  x={PAD_L + (i / (MONTHS.length - 1)) * CW}
                  y={PAD_T + CH + 11}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#9CA3AF"
                >
                  {m}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* ── Bottom-right: Battlecard ──────────────────────────────────── */}
        <div
          className="bg-card rounded-2xl p-4 flex flex-col gap-2 z-10 transition-all duration-500"
          style={{
            boxShadow: "0 8px 32px rgba(15,31,61,0.18), 0 1px 4px rgba(0,0,0,0.08)",
            opacity: phase === "hidden" ? 0 : 1,
            transform: phase === "hidden" ? "translate(6px,6px) scale(0.96)" : "translate(0,0) scale(1)",
            transitionDelay: "240ms",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold text-navy">
              Acme Battlecard
            </span>
            <span
              className="text-[9px] text-white bg-navy px-2 py-0.5 rounded-md font-bold tracking-wide"
            >
              .md
            </span>
          </div>
          <p className="text-[10px] text-[#6B7280] leading-[1.55] flex-1">
            Our base battlecard for sales reps on Acme. I'll personalize this for reps based on the deal scenario.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E4DC]">
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-md overflow-hidden flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(140deg, #2563eb 0%, #60a5fa 100%)" }}
              >
                <Image
                  src="/hindsightlogo-mark-only.svg"
                  alt="Hindsight"
                  width={14}
                  height={14}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-[10px] text-[#374151]">
                Feb 20
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                <span className="text-[8px] font-bold text-[#2563eb]">RD</span>
              </div>
              <span className="text-[10px] text-[#374151]">
                Riley Davis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
