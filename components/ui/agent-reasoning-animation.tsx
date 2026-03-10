"use client"

import { useEffect, useState, useRef } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

type StepKind = "deal" | "claim" | "search" | "found" | "contradiction" | "score" | "decision" | "interview"

interface Step {
  kind: StepKind
  label: string
  detail?: string
  confidence?: "high" | "low" | "medium"
}

// ─── Investigation steps ──────────────────────────────────────────────────────

const STEPS: Step[] = [
  {
    kind: "deal",
    label: "Deal closed · Meridian Health",
    detail: "$240K ARR · Closed Lost",
  },
  {
    kind: "claim",
    label: "CRM disposition",
    detail: "Loss reason: Pricing",
  },
  {
    kind: "search",
    label: "Searching 3 call transcripts for pricing mentions",
  },
  {
    kind: "found",
    label: "Pricing found in 1 of 3 calls",
    detail: "34 min call · 2 mentions · no negotiation",
    confidence: "low",
  },
  {
    kind: "contradiction",
    label: "Contradiction detected",
    detail: "Buyer email chain — zero pricing objections found",
  },
  {
    kind: "search",
    label: "Searching all signals for integration mentions",
  },
  {
    kind: "found",
    label: "\"QuickBooks integration\" — 6 mentions across 3 calls",
    detail: "Buyer raised unprompted in calls 1, 2, and 3",
    confidence: "high",
  },
  {
    kind: "score",
    label: "Pricing as primary driver",
    detail: "Confidence: LOW — 1 source, contradicted by email thread",
    confidence: "low",
  },
  {
    kind: "score",
    label: "Integration gap as primary driver",
    detail: "Confidence: HIGH — 8 sources, no contradictions",
    confidence: "high",
  },
  {
    kind: "decision",
    label: "Loss reason revised",
    detail: "Integration confidence gap → not pricing",
  },
  {
    kind: "interview",
    label: "Migration risk confidence: LOW",
    detail: "Triggering Win-Loss Interview Agent to fill gap",
  },
]

// ─── Color maps ───────────────────────────────────────────────────────────────

const KIND_META: Record<StepKind, { tag: string; tagBg: string; tagColor: string; icon: string }> = {
  deal:         { tag: "DEAL",         tagBg: "#1e293b",  tagColor: "#94a3b8", icon: "●" },
  claim:        { tag: "CLAIM",        tagBg: "#1e293b",  tagColor: "#94a3b8", icon: "?" },
  search:       { tag: "SEARCH",       tagBg: "#0f2240",  tagColor: "#60a5fa", icon: "⟳" },
  found:        { tag: "FOUND",        tagBg: "#0f2a1a",  tagColor: "#4ade80", icon: "✓" },
  contradiction:{ tag: "CONFLICT",     tagBg: "#2d1515",  tagColor: "#f87171", icon: "!" },
  score:        { tag: "SCORE",        tagBg: "#1e1a2e",  tagColor: "#a78bfa", icon: "◈" },
  decision:     { tag: "REVISED",      tagBg: "#1a2210",  tagColor: "#86efac", icon: "→" },
  interview:    { tag: "INTERVIEW",    tagBg: "#2a1d0a",  tagColor: "#fbbf24", icon: "↗" },
}

const CONF_META = {
  high:   { label: "HIGH",   color: "#4ade80", bars: [1,1,1] },
  medium: { label: "MEDIUM", color: "#fbbf24", bars: [1,1,0] },
  low:    { label: "LOW",    color: "#f87171", bars: [1,0,0] },
}

function ConfBars({ level }: { level: "high" | "medium" | "low" }) {
  const conf = CONF_META[level]
  return (
    <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
      {conf.bars.map((on, bi) => (
        <div
          key={bi}
          className="w-[3px] rounded-full"
          style={{
            height: bi === 0 ? 8 : bi === 1 ? 11 : 14,
            background: on ? conf.color : "rgba(255,255,255,0.1)",
          }}
        />
      ))}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AgentReasoningAnimation() {
  const [visibleCount, setVisibleCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      while (!cancelled) {
        setVisibleCount(0)
        await sleep(600)
        for (let i = 1; i <= STEPS.length; i++) {
          if (cancelled) return
          setVisibleCount(i)
          // longer pause on key moments
          const s = STEPS[i - 1]
          const delay =
            s.kind === "deal" ? 800 :
            s.kind === "contradiction" ? 700 :
            s.kind === "decision" ? 800 :
            s.kind === "interview" ? 900 :
            s.kind === "search" ? 500 :
            420
          await sleep(delay)
        }
        await sleep(2800)
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  // Auto-scroll to bottom as steps appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [visibleCount])

  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "#0b1220" }}>

      {/* Chrome bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07]" style={{ background: "#0e1628" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30 font-mono ml-2">
            Deal Review Agent · Investigation
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#4ade80]/70 font-mono">RUNNING</span>
        </div>
      </div>

      {/* Step list */}
      <div className="flex-1 overflow-hidden p-4 flex flex-col gap-2">
        {STEPS.slice(0, visibleCount).map((step, i) => {
          const meta = KIND_META[step.kind]
          return (
            <div
              key={i}
              className="flex items-start gap-3 animate-[fadeSlideIn_0.25s_ease_forwards]"
            >
              {/* Tag */}
              <span
                className="flex-shrink-0 text-[9px] font-bold tracking-[0.1em] font-mono px-1.5 py-0.5 rounded mt-0.5 min-w-[64px] text-center"
                style={{ background: meta.tagBg, color: meta.tagColor }}
              >
                {meta.icon} {meta.tag}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-white/85 leading-snug">{step.label}</p>
                {step.detail && (
                  <p className="text-[11px] text-white/40 leading-snug mt-0.5">{step.detail}</p>
                )}
              </div>

              {/* Confidence indicator */}
              {step.confidence && <ConfBars level={step.confidence} />}
            </div>
          )
        })}

        {/* Blinking cursor when running */}
        {visibleCount > 0 && visibleCount < STEPS.length && (
          <div className="flex items-center gap-1.5 pl-[76px]">
            <span className="w-1.5 h-3 bg-[#60a5fa] animate-pulse rounded-sm opacity-70" />
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  )
}
