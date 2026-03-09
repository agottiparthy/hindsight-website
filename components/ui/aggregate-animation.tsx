"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
/* ─── Panel 01: Aggregate ─────────────────────────────────────────────────── */

type AggPhase = "idle" | "badge" | "syncing" | "done"

const AGG_SOURCES = [
  {
    logo: "/integration_logos/salesforce logo.png",
    alt: "Salesforce",
    label: "Syncing CRM data",
    result: "28 properties and objects",
  },
  {
    logo: "/integration_logos/gong.png",
    alt: "Gong",
    label: "Finding call transcripts",
    result: "8 matching transcripts",
  },
  {
    logo: "/integration_logos/outreach.png",
    alt: "Outreach",
    label: "Finding email threads",
    result: "128 emails",
  },
]

export function AggregatePanel() {
  const [phase, setPhase] = useState<AggPhase>("idle")
  const [rowVisible, setRowVisible] = useState([false, false, false])
  const [lineActive, setLineActive] = useState([false, false, false])
  const [rowDone, setRowDone] = useState([false, false, false])
  const [counts, setCounts] = useState({ deals: 0, calls: 0, embeddings: 0 })

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    const countUp = async (key: "deals" | "calls" | "embeddings", target: number) => {
      const ticks = 28
      const interval = 600 / ticks
      for (let t = 1; t <= ticks; t++) {
        if (cancelled) return
        const eased = Math.round(target * (1 - Math.pow(1 - t / ticks, 3)))
        setCounts((prev) => ({ ...prev, [key]: eased }))
        await sleep(interval)
      }
    }

    async function run() {
      setPhase("idle")
      setRowVisible([false, false, false])
      setLineActive([false, false, false])
      setRowDone([false, false, false])
      setCounts({ deals: 0, calls: 0, embeddings: 0 })
      await sleep(600)
      if (cancelled) return

      setPhase("badge")
      await sleep(1400)
      if (cancelled) return

      setPhase("syncing")
      await sleep(300)

      for (let i = 0; i < AGG_SOURCES.length; i++) {
        if (cancelled) return
        const idx = i
        setRowVisible((prev) => { const n = [...prev]; n[idx] = true; return n })
        await sleep(180)
        setTimeout(() => {
          if (!cancelled) setLineActive((prev) => { const n = [...prev]; n[idx] = true; return n })
        }, 80)
      }

      // Stagger row completions as lines finish, trigger counts in parallel
      await sleep(1500)
      if (cancelled) return
      setRowDone((prev) => { const n = [...prev]; n[0] = true; return n })
      countUp("deals", 440)

      await sleep(200)
      if (cancelled) return
      setRowDone((prev) => { const n = [...prev]; n[1] = true; return n })
      countUp("calls", 1128)

      await sleep(200)
      if (cancelled) return
      setRowDone((prev) => { const n = [...prev]; n[2] = true; return n })

      await sleep(700)
      if (cancelled) return
      setPhase("done")
      countUp("embeddings", 1568)

      await sleep(3800)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="bg-card border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">

      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Data Ingestion Layer
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span
            className="text-[10px] font-bold uppercase tracking-widest text-[#D4A843] bg-[#D4A843]/10 px-2 py-0.5 rounded-sm"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Badge: New opportunity detected */}
      <div
        className={`mb-5 transition-all duration-500 ${
          phase === "idle" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-start gap-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-3.5">
          <div className="relative w-5 h-5 shrink-0 mt-0.5">
            <Image
              src="/integration_logos/salesforce logo.png"
              alt="Salesforce"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3B82F6] mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              New opportunity detected
            </div>
            <div
              className="text-[13px] font-bold text-[#0F1F3D]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Meridian Health — $240K ARR
            </div>
            <div
              className="text-[11px] text-[#6B7280] mt-0.5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
            >
              Closed Lost · Q4 2025 · vs. Competitor A
            </div>
          </div>
        </div>
      </div>

      {/* Directory tree */}
      <div
        className={`mb-5 transition-all duration-400 ${
          phase === "syncing" || phase === "done" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Folder header */}
        <div className="flex items-center gap-2 mb-2.5 px-1">
          <span className="text-[13px]">📁</span>
          <span
            className="text-[11px] font-bold text-[#0F1F3D]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
          >
            meridian_health/
          </span>
        </div>

        {/* Source rows */}
        <div className="flex flex-col pl-2 gap-2.5">
          {AGG_SOURCES.map((src, i) => {
            const isLast = i === AGG_SOURCES.length - 1
            const visible = rowVisible[i]
            const lineOn = lineActive[i]
            const done = rowDone[i]

            return (
              <div
                key={src.alt}
                className={`flex items-center gap-0 transition-all duration-300 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                }`}
              >
                {/* Tree glyph */}
                <span
                  className="text-[#CBD5E1] text-[13px] leading-none select-none shrink-0 mr-2"
                  style={{ fontFamily: "monospace" }}
                >
                  {isLast ? "└─" : "├─"}
                </span>

                {/* Logo */}
                <div className="relative w-4 h-4 shrink-0 mr-2">
                  <Image src={src.logo} alt={src.alt} fill className="object-contain" />
                </div>

                {/* Label */}
                <span
                  className="text-[11px] text-[#374151] shrink-0 mr-2 whitespace-nowrap"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {src.label}
                </span>

                {/* Animated dotted line */}
                <div className="flex-1 relative h-px mx-1 overflow-hidden min-w-0">
                  <div
                    className="absolute inset-y-0 left-0 h-px"
                    style={{
                      width: lineOn ? "100%" : "0%",
                      transition: lineOn ? "width 1.5s linear" : "none",
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #D4A843 0px, #D4A843 3px, transparent 3px, transparent 8px)",
                    }}
                  />
                </div>

                {/* Result */}
                <div className="shrink-0 ml-2">
                  {done ? (
                    <span
                      className="text-[10px] font-bold text-[#2A5C45] whitespace-nowrap"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                    >
                      ✓ {src.result}
                    </span>
                  ) : (
                    <span
                      className="text-[10px] text-[#D4A843] animate-pulse"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                    >
                      ···
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer stats bar */}
      <div
        className={`border border-[#E8E4DC] rounded-lg bg-background px-4 py-3 transition-opacity duration-500 ${
          phase === "idle" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {[
            { value: counts.deals > 0 ? counts.deals.toLocaleString() : "—", label: "deals synced this month" },
            { value: counts.calls > 0 ? counts.calls.toLocaleString() : "—", label: "calls indexed" },
            { value: null, label: "Last synced 3 hrs ago" },
            { value: counts.embeddings > 0 ? counts.embeddings.toLocaleString() : "—", label: "embeddings created" },
          ].map((stat, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-[10px] text-[#6B7280]"
              style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
            >
              {stat.value !== null && (
                <span className="tabular-nums font-bold text-[#374151]">{stat.value}</span>
              )}
              {stat.label}
              {i < 3 && <span className="text-[#D8D3C8] ml-3">·</span>}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}