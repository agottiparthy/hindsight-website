"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { InterviewPanel } from "../ui/interview-animation"
import { InterfacePanel } from "../ui/interface-animation"

const steps = [
  {
    num: "01",
    title: "Aggregate without trusting",
    body: "Hindsight ingests from Gong, Salesforce, HubSpot, Clari, Outreach, and more. Data stays in-sync, is organized, vectorized, and tagged - ready for complex AI workflows.",
  },
  {
    num: "02",
    title: "Deal Review Agent",
    body: "Hindsight investigates every closed deal like an expert human analyst would - cross-referencing CRM data, call transcripts, email threads, and win-loss interviews to surface the real reasons behind every win and loss.",
  },
  {
    num: "03",
    title: "Win-Loss Interviews",
    body: "Where data has gaps, Hindsight fills them. Personalized interviews are automatically sent to reps via Slack and buyers via email within 48 hours of close — targeted to the specific deal context, not generic surveys.",
  },
  {
    num: "04",
    title: "Trusted Deal Context for AI Agents",
    body: "Go from low-trust, low-context document chunks to clean, structured deal context. Allow your agents to find deep quantitative and qualitative deal insights via semantic search or structured queries via our APIs and MCP.",
  },
]

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

function AggregatePanel() {
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
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">

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
        className={`border border-[#E8E4DC] rounded-lg bg-[#FAFAF8] px-4 py-3 transition-opacity duration-500 ${
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


const panels = [AggregatePanel, DealReviewCard, InterviewPanel, InterfacePanel]

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = rect.height - window.innerHeight
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollable))
      const step = Math.min(3, Math.floor(progress * 4))
      setActiveStep(step)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} id="how-it-works" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center px-12 overflow-hidden bg-[#F8F6F1]">
        <div className="max-w-[1280px] mx-auto w-full">

          {/* Header */}
          <div className="mb-10">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-3"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              How It Works
            </p>
            <h2
              className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Aggregate. Verify. Enrich. Interface.
            </h2>
          </div>

          {/* Two-col grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Steps list */}
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-6 py-5 transition-all duration-400 ${
                    i < steps.length - 1 ? "border-b border-[#E8E4DC]" : ""
                  } ${i === 0 ? "pt-0" : ""}`}
                  style={{ opacity: i === activeStep ? 1 : 0.25 }}
                >
                  <div
                    className="text-xs text-[#6B7280] tracking-[0.06em] pt-1 min-w-[32px]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-[#0F1F3D] mb-1.5"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[14px] text-[#374151] leading-relaxed"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Panels — stacked in same grid cell via CSS grid */}
            <div className="grid">
              {panels.map((Panel, i) => (
                <div
                  key={i}
                  className="col-start-1 row-start-1 transition-all duration-500"
                  style={{
                    opacity: i === activeStep ? 1 : 0,
                    transform: `translateY(${
                      i === activeStep ? 0 : i < activeStep ? -18 : 18
                    }px)`,
                    pointerEvents: i === activeStep ? "auto" : "none",
                  }}
                >
                  <Panel />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
