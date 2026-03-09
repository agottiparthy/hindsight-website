"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type StepStatus = "waiting" | "running" | "done"

interface MonitorStep {
  id: number
  tool: string
  detail: string
  result: string
  logos?: { src: string; alt: string }[]
  isAlert?: boolean
  isSlack?: boolean
}

const STEPS: MonitorStep[] = [
  {
    id: 1,
    tool: "monitor_linkedin",
    detail: "Scanning ACME company page & key personnel",
    result: "3 new posts detected",
    logos: [{ src: "/integration_logos/linkedin.svg", alt: "LinkedIn" }],
  },
  {
    id: 2,
    tool: "scan_release_notes",
    detail: "Fetching ACME changelog & product releases",
    result: "2 updates found — native Salesforce sync shipped",
  },
  {
    id: 3,
    tool: "search_news",
    detail: "Querying recent news, press & funding signals",
    result: "Series C announced · $40M raise · expansion play",
  },
  {
    id: 4,
    tool: "send_to_slack",
    detail: "#compete · @pmm-team",
    result: "",
    logos: [{ src: "/integration_logos/slack.png", alt: "Slack" }],
    isSlack: true,
  },
]

const STEP_DELAYS =   [600,  1200, 1100, 1000]
const RUNNING_TIMES = [900,  1100, 1000, 1400]
const RESTART_DELAY = 4500

export function CompetitorMonitoringAnimation() {
  const [statuses, setStatuses] = useState<StepStatus[]>(STEPS.map(() => "waiting"))
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleCount = statuses.filter((s) => s !== "waiting").length
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleCount])

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setStatuses(STEPS.map(() => "waiting"))
      await sleep(500)

      for (let i = 0; i < STEPS.length; i++) {
        if (cancelled) return
        await sleep(STEP_DELAYS[i])
        if (cancelled) return

        setStatuses((prev) => {
          const next = [...prev]; next[i] = "running"; return next
        })
        await sleep(RUNNING_TIMES[i])
        if (cancelled) return

        setStatuses((prev) => {
          const next = [...prev]; next[i] = "done"; return next
        })
      }

      await sleep(RESTART_DELAY)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  const visibleSteps = STEPS.filter((_, i) => statuses[i] !== "waiting")

  return (
    <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(15,31,61,0.06)] h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E4DC] bg-background">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Competitor Monitor · ACME
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span
            className="text-[9px] font-bold uppercase tracking-widest text-[#D4A843] bg-[#D4A843]/10 px-2 py-0.5 rounded-sm"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Thread */}
      <div ref={scrollRef} className="px-5 py-4 flex flex-col gap-3 flex-1 overflow-y-auto">
        {visibleSteps.length === 0 && (
          <span className="w-2 h-[14px] bg-[#D4A843] opacity-60 animate-pulse rounded-sm inline-block mt-1" />
        )}

        {visibleSteps.map((step, vi) => {
          const status = statuses[step.id - 1]
          const isRunning = status === "running"
          const isDone = status === "done"

          return (
            <div
              key={step.id}
              className="flex gap-2.5 items-start animate-fadeInUp"
              style={{ animationDuration: "0.3s", animationFillMode: "both" }}
            >
              {/* Icon */}
              <div className="mt-[1px] w-4 h-4 flex items-center justify-center shrink-0">
                {isRunning ? (
                  <svg className="animate-spin w-3.5 h-3.5 text-[#D4A843]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : step.isAlert ? (
                  <span className="text-[11px]">⚡</span>
                ) : step.isSlack ? (
                  <span className="text-[11px]">✓</span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-0.5" />
                )}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Tool name */}
                  <span
                    className="text-[11px] font-bold text-[#0F1F3D] font-mono"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                  >
                    {step.tool}
                  </span>
                  {/* Logos */}
                  {step.logos && (
                    <span className="flex items-center gap-1">
                      {step.logos.map((l) => (
                        <div key={l.alt} className="relative w-3.5 h-3.5">
                          <Image src={l.src} alt={l.alt} fill className="object-contain" />
                        </div>
                      ))}
                    </span>
                  )}
                </div>

                {/* Detail */}
                <p
                  className="text-[10px] text-[#9CA3AF] leading-snug mt-0.5"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {step.detail}
                </p>

                {/* Result — shown when done */}
                {isDone && !step.isSlack && step.result && (
                  <p
                    className={`text-[10px] font-bold mt-1 ${step.isAlert ? "text-[#D4A843]" : "text-[#2A5C45]"}`}
                    style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                  >
                    ✓ {step.result}
                  </p>
                )}

                {/* Slack message preview */}
                {isDone && step.isSlack && (
                  <div className="mt-2 bg-background border border-[#E8E4DC] rounded-lg px-3 py-2.5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="relative w-3.5 h-3.5 shrink-0">
                        <Image src="/integration_logos/slack.png" alt="Slack" fill className="object-contain" />
                      </div>
                      <span
                        className="text-[9px] font-bold text-[#0F1F3D]"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        #compete
                      </span>
                      <span
                        className="text-[9px] text-[#9CA3AF]"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        · just now
                      </span>
                    </div>
                    <p
                      className="text-[10px] text-[#374151] leading-relaxed"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      <span className="font-bold text-[#D4A843]">⚡ ACME alert:</span> Native Salesforce sync shipped + $40M raise announced. 3 active deals at risk.
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      {[
                        { src: "/integration_logos/linkedin.svg", alt: "LinkedIn" },
                        { src: "/integration_logos/salesforce logo.png", alt: "SF" },
                      ].map((l) => (
                        <div key={l.alt} className="relative w-3 h-3">
                          <Image src={l.src} alt={l.alt} fill className="object-contain" />
                        </div>
                      ))}
                      <span
                        className="text-[8px] text-[#9CA3AF]"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        3 sources
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
