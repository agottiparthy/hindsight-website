"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// Simulated battlecard rows
const CARD_ROWS = [
  { section: "Positioning", lines: [80, 60] },
  { section: "Common Objections", lines: [85, 55, 70] },
  { section: "Pricing Response", lines: [75, 50] },
]

// The exact "objection" row we'll highlight and suggest an update on
const UPDATE_SECTION = 1 // "Common Objections"

type Phase = "idle" | "highlight" | "suggest" | "done"

export function KnowledgeBaseAnimation() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [arrowProgress, setArrowProgress] = useState(0)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setPhase("idle")
      setArrowProgress(0)
      await sleep(800)
      if (cancelled) return

      setPhase("highlight")
      await sleep(700)
      if (cancelled) return

      // Animate arrow
      const ticks = 24
      for (let t = 1; t <= ticks; t++) {
        if (cancelled) return
        setArrowProgress(t / ticks)
        await sleep(25)
      }

      setPhase("suggest")
      await sleep(200)
      if (cancelled) return
      setPhase("done")

      await sleep(4500)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="bg-background rounded-xl overflow-hidden h-full">
      <div className="flex flex-col gap-4 p-5 h-full">

        {/* ── Google Drive doc card ─────────────────────────────────── */}
        <div className="bg-card border border-[#E8E4DC] rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(15,31,61,0.06)]">
          {/* Doc header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E8E4DC] bg-background">
            <div className="flex items-center gap-2">
              {/* Google Drive triangle icon (inline SVG) */}
              <svg width="14" height="14" viewBox="0 0 87.3 78" className="shrink-0">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.95-1.2-4.5-1.2h-18.5c-1.55 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                <path d="m60.05 53h-32.8l-13.75 23.8c1.35.8 2.95 1.2 4.5 1.2h51.3c1.55 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                <path d="m73.4 26.95-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.4 28.35h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
              </svg>
              <span
                className="text-[11px] font-bold text-[#374151] truncate"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                ACME_Battlecard
              </span>
            </div>
            <span
              className="text-[9px] text-[#9CA3AF] whitespace-nowrap"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Updated 4mo ago
            </span>
          </div>

          {/* Doc body — simulated content rows */}
          <div className="px-4 py-3 flex flex-col gap-3">
            {CARD_ROWS.map((row, ri) => {
              const isHighlighted = ri === UPDATE_SECTION && (phase === "highlight" || phase === "suggest" || phase === "done")
              return (
                <div
                  key={row.section}
                  className={`rounded-md px-2.5 py-2 transition-all duration-400 ${
                    isHighlighted ? "bg-[#FFF8E7] ring-1 ring-[#D4A843]/40" : ""
                  }`}
                >
                  <div
                    className={`text-[9px] font-bold uppercase tracking-[0.1em] mb-1.5 transition-colors duration-300 ${
                      isHighlighted ? "text-[#D4A843]" : "text-[#9CA3AF]"
                    }`}
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {row.section}
                  </div>
                  <div className="flex flex-col gap-1">
                    {row.lines.map((w, li) => (
                      <div
                        key={li}
                        className={`h-[6px] rounded-full transition-colors duration-300 ${
                          isHighlighted ? "bg-[#D4A843]/25" : "bg-[#E8E4DC]"
                        }`}
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Animated connector arrow ─────────────────────────────── */}
        <div className="flex items-center px-2">
          <div className="relative flex-1 h-[2px] bg-[#E8E4DC] rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 h-full bg-[#D4A843] rounded-full"
              style={{
                width: `${arrowProgress * 100}%`,
                transition: arrowProgress === 0 ? "none" : "width 0.04s linear",
              }}
            />
          </div>
          <div
            className="ml-0.5 text-[#D4A843] text-[10px] leading-none transition-opacity duration-300"
            style={{ opacity: arrowProgress >= 0.95 ? 1 : 0 }}
          >
            ▼
          </div>
        </div>

        {/* ── Suggested update badge ────────────────────────────────── */}
        <div
          className={`border rounded-lg overflow-hidden transition-all duration-500 ${
            phase === "suggest" || phase === "done"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          } ${
            phase === "done"
              ? "border-[#D4A843]/50 bg-[#FFF8E7]"
              : "border-[#E8E4DC] bg-card"
          }`}
        >
          <div className="px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-5 h-5 rounded-md bg-[#D4A843]/15 flex items-center justify-center shrink-0">
                  <span className="text-[10px]">⚡</span>
                </div>
                <div>
                  <div
                    className="text-[11px] font-bold text-[#0F1F3D] mb-0.5"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Suggested Update · Common Objections
                  </div>
                  <div
                    className="text-[10px] text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Rising objection discovered — &ldquo;integration gaps&rdquo; mentioned across
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1 bg-[#0F1F3D] text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wide"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      4 deals
                    </span>
                    <span
                      className={`text-[9px] font-bold text-[#D4A843] transition-opacity duration-300 ${
                        phase === "done" ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      Review update →
                    </span>
                  </div>
                </div>
              </div>
              {/* Source logos */}
              <div className="flex items-center gap-1 shrink-0 mt-0.5">
                {[
                  { src: "/integration_logos/gong.png", alt: "Gong" },
                  { src: "/integration_logos/salesforce logo.png", alt: "Salesforce" },
                ].map((logo, i) => (
                  <div key={i} className="relative w-4 h-4">
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
