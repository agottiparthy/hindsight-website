"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { InterviewPanel } from "@/components/ui/interview-animation"
import { DealReportAnimation } from "@/components/ui/deal-report-animation"
import { HeroChatVisual } from "@/app/platform/ai-assistant/page"

// ── Slide config ───────────────────────────────────────────────────────────────
const SLIDES = [
  {
    label: "Deal Intelligence",
    headline: "Every closed deal, investigated automatically.",
    stat: "100% coverage. Within 12 hours of close.",
    Component: DealReviewCard,
    duration: 16_000,
  },
  {
    label: "Buyer Interviews",
    headline: "Rep said pricing. Buyer said something else.",
    stat: "13,000+ interviews conducted.",
    Component: InterviewPanel,
    duration: 21_000,
  },
  {
    label: "Deal Reports",
    headline: "One verified record per deal.",
    stat: "+44% accuracy over CRM alone.",
    Component: DealReportAnimation,
    duration: 12_000,
  },
  {
    label: "AI Assistant",
    headline: "Ask anything. Get answers grounded in verified data.",
    stat: "350,000+ deals analyzed.",
    Component: HeroChatVisual,
    duration: 12_000,
  },
]

const FADE_MS = 800 // crossfade duration

// ── Page ───────────────────────────────────────────────────────────────────────
export default function BoothDisplay() {
  const [index, setIndex] = useState(0)    // which slide's content is mounted
  const [fading, setFading] = useState(false) // true while opacity → 0
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Reusable transition — delta: +1 (next) or -1 (prev)
  const goTo = useCallback((delta: number) => {
    setFading(true)
    setTimeout(() => {
      setIndex((prev) => (prev + delta + SLIDES.length) % SLIDES.length)
      setFading(false)
    }, FADE_MS)
  }, [])

  // Schedule the next auto-advance using the current slide's duration
  const scheduleNext = useCallback((currentIndex: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => goTo(1), SLIDES[currentIndex].duration)
  }, [goTo])

  // Reset the auto-advance timer (call after any manual navigation)
  const resetTimer = useCallback(() => {
    setIndex((prev) => { scheduleNext(prev); return prev })
  }, [scheduleNext])

  // Auto-advance — reschedule whenever index changes
  useEffect(() => {
    scheduleNext(index)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [index, scheduleNext])

  // Arrow-key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goTo(1)
        resetTimer()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goTo(-1)
        resetTimer()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goTo, resetTimer])

  // Screen Wake Lock — prevent monitor sleep while the tab is visible
  useEffect(() => {
    let lock: WakeLockSentinel | null = null

    async function acquire() {
      try {
        if ("wakeLock" in navigator) {
          lock = await (navigator as Navigator & { wakeLock: { request: (type: string) => Promise<WakeLockSentinel> } }).wakeLock.request("screen")
        }
      } catch {
        // Wake Lock not supported or permission denied — silent fail
      }
    }

    acquire()

    // Re-acquire on visibility change (OS may release it on tab hide)
    const onVisible = () => { if (document.visibilityState === "visible") acquire() }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      lock?.release()
      document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  const { label, headline, stat, Component } = SLIDES[index]

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0D1B3E",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-sora), sans-serif",
      }}
    >
      {/* ── Slide area ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          opacity: fading ? 0 : 1,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
          minHeight: 0,
        }}
      >
        {/* Left column — headline + stat (~40%) */}
        <div
          style={{
            width: "40%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 3rem 4rem 5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D97706",
              marginBottom: "1.75rem",
            }}
          >
            {label}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(1.75rem, 3.2vw, 3.1rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "2.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
              fontWeight: 600,
              color: "#D97706",
              lineHeight: 1.45,
            }}
          >
            {stat}
          </p>
        </div>

        {/* Right column — animation (~60%) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem 3rem 1.5rem 1rem",
            overflow: "hidden",
          }}
        >
          {/*
            key={index} causes React to unmount the old component and mount a
            fresh one on every slide transition, so animations always reset.
            transform: scale(2) doubles the visual size; the base width is kept
            at 480px so 2× = 960px visual width, which fits the right column.
          */}
          <div
            style={{
              width: "480px",
              flexShrink: 0,
              transform: "scale(2)",
              transformOrigin: "center center",
            }}
          >
            <Component key={index} />
          </div>
        </div>
      </div>

      {/* ── Bottom bar — wordmark + progress dots ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 4rem 1.5rem 5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          flexShrink: 0,
        }}
      >
        {/* Hindsight wordmark */}
        <Image
          src="/hindsightlogo-clear-white.svg"
          alt="Hindsight"
          width={110}
          height={26}
          priority
          style={{ opacity: 0.85 }}
        />

        {/* Slide progress dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {SLIDES.map((_, i) => (
            <div
              key={i}
              style={{
                height: "6px",
                width: i === index ? "1.75rem" : "6px",
                borderRadius: "999px",
                background: i === index ? "#D97706" : "rgba(255,255,255,0.22)",
                transition: "all 400ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
