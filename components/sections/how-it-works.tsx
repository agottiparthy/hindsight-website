"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { InterviewPanel } from "../ui/interview-animation"
import { InterfacePanel } from "../ui/interface-animation"
import { AggregatePanel } from "../ui/aggregate-animation"

const steps = [
  {
    num: "01",
    title: "Integrate in a few clicks",
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
    title: "Verified intelligence, wherever your team needs it",
    body: "Know exactly why you're losing to specific competitors. Understand what's actually moving deals. Hindsight surfaces these answers as battlecards, win-loss reports, and rep-facing alerts — flowing to Slack, your CRM, and whatever AI tools your team is building on.",
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
              Trusted intel your whole team <br/> (and AI) can rely on.
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
