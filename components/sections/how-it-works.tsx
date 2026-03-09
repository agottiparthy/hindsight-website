"use client"

import { useEffect, useRef, useState } from "react"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { InterviewPanel } from "../ui/interview-animation"
import { InterfacePanel } from "../ui/interface-animation"
import { AggregatePanel } from "../ui/aggregate-animation"

const steps = [
  {
    num: "01",
    title: "The Deal Review Agent investigates every closed deal.",
    body: "Within 48 hours of close, Hindsight pulls every call, email, and CRM record for the deal. It cross-references them, flags contradictions, and builds a verified picture of what actually happened. Not a sample. Every deal.",
  },
  {
    num: "02",
    title: "AI interviews fill the gaps.",
    body: "Buyers go cold fast. Hindsight sends personalized AI interviews to reps via Slack and buyers via email while the deal is still fresh. The questions are specific to that deal, not a generic survey. The answers fill what no existing source captures.",
  },
  {
    num: "03",
    title: "Every deal becomes a verified record.",
    body: "One clean document per deal. Decision drivers. Competitor attribution. What worked, what did not. Structured for your team to query and for your AI tools to read accurately.",
  },
  {
    num: "04",
    title: "Insights flow to where your team works.",
    body: "Battlecards. Win-loss reports. Rep alerts in Slack. Query the data yourself or let your AI agents do it via API and MCP.",
  }
]




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
      <div className="sticky top-0 h-screen flex flex-col justify-center px-12 overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto w-full">

          {/* Header */}
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
              How It Works
            </p>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
              Every closed deal. Automatically.<br />No analyst required.
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
                    i < steps.length - 1 ? "border-b border-border" : ""
                  } ${i === 0 ? "pt-0" : ""}`}
                  style={{ opacity: i === activeStep ? 1 : 0.25 }}
                >
                  <div className="text-xs text-muted-foreground tracking-[0.06em] pt-1 min-w-[32px] font-mono">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-body leading-relaxed">
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
