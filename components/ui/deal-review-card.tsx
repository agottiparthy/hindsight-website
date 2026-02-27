"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// ─── Animated Deal Review Card ───────────────────────────────────────────────

type StepStatus = "waiting" | "running" | "done" | "error"

interface Step {
  id: number
  label: string
  detail?: string
  status: StepStatus
  logos?: { src: string; alt: string }[]
  isIssue?: boolean
  isResolved?: boolean
  isFile?: boolean
}

const INITIAL_STEPS: Omit<Step, "status">[] = [
  {
    id: 1,
    label: "Deal closed in Salesforce",
    detail: "Meridian Health · $240K ARR · Closed Lost",
    logos: [{ src: "/integration_logos/salesforce logo.png", alt: "Salesforce" }],
  },
  {
    id: 2,
    label: "Ingesting deal data",
    detail: "6 calls via Gong · 23 emails via Outreach · CRM notes & properties",
    logos: [
      { src: "/integration_logos/gong.png", alt: "Gong" },
      { src: "/integration_logos/outreach.png", alt: "Outreach" },
      { src: "/integration_logos/salesforce logo.png", alt: "Salesforce" },
    ],
  },
  {
    id: 3,
    label: "Cross-referencing & reviewing deal",
    detail: "Comparing against 847 historical patterns · 3 sources",
  },
  {
    id: 4,
    label: "Issues detected",
    detail: "Loss reason inconclusive — CRM says 'pricing' but calls say otherwise · Competitor positioning contradiction",
    isIssue: true,
  },
  {
    id: 5,
    label: "Win-loss interview sent",
    detail: "Personalized questions sent to buyer via email · rep via Slack",
    logos: [{ src: "/integration_logos/slack.png", alt: "Slack" }],
  },
  {
    id: 6,
    label: "Analyzing interview responses",
    detail: "3 of 3 responses received · extracting decision drivers",
  },
  {
    id: 7,
    label: "Resolved & Verified",
    detail: "Integration gap — missing native connector vs. Competitor A",
    isResolved: true,
  },
  {
    id: 8,
    label: "Deal review saved",
    detail: "meridian_health_opp_7f3a2c_review.md",
    isFile: true,
  },
]

// Delays (ms) before each step becomes "running" after the previous goes "done"
const STEP_DURATIONS = [900, 1400, 1600, 1100, 1200, 1400, 1200, 700]
// How long each step stays in "running" state before going "done"
const RUNNING_DURATIONS = [700, 1000, 1300, 800, 900, 1100, 0, 600]
const RESTART_DELAY = 4000

export function DealReviewCard() {
  const [steps, setSteps] = useState<Step[]>(
    INITIAL_STEPS.map((s) => ({ ...s, status: "waiting" }))
  )
  const [confidence, setConfidence] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom whenever a new step becomes visible
  const visibleCount = steps.filter((s) => s.status !== "waiting").length
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleCount])

  useEffect(() => {
    let cancelled = false

    const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

    async function runSequence() {
      // Reset
      setSteps(INITIAL_STEPS.map((s) => ({ ...s, status: "waiting" })))
      setConfidence(0)
      await sleep(600)

      for (let i = 0; i < INITIAL_STEPS.length; i++) {
        if (cancelled) return
        await sleep(STEP_DURATIONS[i])
        if (cancelled) return

        // Set to running
        setSteps((prev) =>
          prev.map((s) => (s.id === i + 1 ? { ...s, status: "running" } : s))
        )

        const isResolvedStep = i === 6 // step 7 (0-indexed)
        const isLastStep = i === INITIAL_STEPS.length - 1

        if (RUNNING_DURATIONS[i] > 0) {
          await sleep(RUNNING_DURATIONS[i])
          if (cancelled) return
          setSteps((prev) =>
            prev.map((s) => (s.id === i + 1 ? { ...s, status: "done" } : s))
          )
        } else {
          setSteps((prev) =>
            prev.map((s) => (s.id === i + 1 ? { ...s, status: "done" } : s))
          )
        }

        // Animate confidence bar right after the resolved step finishes
        if (isResolvedStep) {
          const target = 92
          const ticks = 30
          for (let t = 1; t <= ticks; t++) {
            if (cancelled) return
            await sleep(20)
            setConfidence(Math.round((target / ticks) * t))
          }
        }

        void isLastStep
      }

      await sleep(RESTART_DELAY)
      if (!cancelled) runSequence()
    }

    runSequence()
    return () => { cancelled = true }
  }, [])

  const visibleSteps = steps.filter((s) => s.status !== "waiting")

  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl shadow-[0_8px_40px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)] overflow-hidden">
      {/* Card header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DC] bg-[#FAFAF8]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Deal Review Agent
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#22C55E]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Steps log */}
      <div ref={scrollRef} className="px-6 py-5 flex flex-col gap-3 h-[450px] overflow-y-auto">
        {visibleSteps.map((step) => {
          const isRunning = step.status === "running"
          const isDone = step.status === "done"

          return (
            <div
              key={step.id}
              className="flex gap-3 items-start animate-fadeInUp"
              style={{ animationDuration: "0.35s", animationFillMode: "both" }}
            >
              {/* Icon */}
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                {isRunning ? (
                  <svg className="animate-spin w-4 h-4 text-[#D4A843]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : step.isIssue ? (
                  <span className="text-[13px]">⚑</span>
                ) : step.isResolved ? (
                  <span className="text-[13px] text-[#2A5C45]">✓</span>
                ) : step.isFile ? (
                  <span className="text-[13px]">📄</span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[13px] font-bold leading-snug ${
                      step.isIssue
                        ? "text-[#7A2828]"
                        : step.isResolved
                        ? "text-[#2A5C45]"
                        : step.isFile
                        ? "text-[#0F1F3D]"
                        : isDone
                        ? "text-[#0F1F3D]"
                        : "text-[#374151]"
                    }`}
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {step.label}
                  </span>
                  {/* Logos */}
                  {step.logos && isDone && (
                    <span className="flex items-center gap-1.5">
                      {step.logos.map((logo) => (
                        <div key={logo.alt} className="relative w-4 h-4 flex-shrink-0">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </span>
                  )}
                </div>

                {/* Detail — only when done or running */}
                {(isDone || isRunning) && step.detail && (
                  <p
                    className={`text-[11px] leading-relaxed mt-0.5 ${
                      step.isIssue
                        ? "text-[#7A2828]/80"
                        : step.isResolved
                        ? "text-[#2A5C45]/80"
                        : step.isFile
                        ? "text-[#6B7280] font-mono tracking-tight"
                        : "text-[#6B7280]"
                    }`}
                    style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                  >
                    {step.detail}
                  </p>
                )}

                {/* Confidence bar — on the resolved step once done */}
                {step.isResolved && isDone && (
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className="text-[10px] uppercase tracking-[0.08em] text-[#6B7280]"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      Confidence
                    </span>
                    <div className="flex-1 h-1 bg-[#E8E4DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2A5C45] rounded-full transition-all duration-75"
                        style={{ width: `${confidence}%` }}
                      />
                    </div>
                    <span
                      className="text-[11px] font-bold text-[#2A5C45] tabular-nums"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                    >
                      {confidence}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* Pulse cursor when idle */}
        {visibleSteps.length === 0 && (
          <div className="flex items-center gap-2 pt-2">
            <span
              className="w-2 h-[14px] bg-[#D4A843] animate-pulse rounded-sm inline-block"
            />
          </div>
        )}
      </div>
    </div>
  )
}
