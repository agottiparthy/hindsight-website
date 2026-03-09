"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// ─── Scenario data ────────────────────────────────────────────────────────────

const TURNS = [
  {
    speaker: "AI",     // Hindsight playing prospect
    label: "Prospect (Hindsight AI)",
    text: "We're already deep with Competitor X. Switching feels risky — what's the migration story?",
    coaching: null,
  },
  {
    speaker: "REP",
    label: "You (rep)",
    text: "That's fair — migration is usually the biggest concern. Most teams are live in under 14 days and we handle the data transfer. What's your current process for…",
    coaching: null,
  },
  {
    speaker: "AI",
    label: "Prospect (Hindsight AI)",
    text: "14 days sounds aggressive. What if something breaks mid-cycle?",
    coaching: null,
  },
  {
    speaker: "AI_COACH",  // Hindsight dropping out of roleplay to coach
    label: "Hindsight · coaching",
    text: "Strong start on migration speed ✓ — but reference a live customer here. Teams like LaunchDarkly cut over in 11 days. Specificity closes the concern.",
    coaching: "Based on 6 similar competitive wins",
  },
]

type Phase = "idle" | "running" | "done"

export function RoleplayAnimation() {
  const [visibleTurns, setVisibleTurns] = useState(0)
  const [aiSpeaking, setAiSpeaking] = useState(false)
  const [repSpeaking, setRepSpeaking] = useState(false)
  const [phase, setPhase] = useState<Phase>("idle")

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setVisibleTurns(0)
      setAiSpeaking(false)
      setRepSpeaking(false)
      setPhase("idle")

      await sleep(500)
      if (cancelled) return
      setPhase("running")

      for (let i = 0; i < TURNS.length; i++) {
        if (cancelled) return
        const t = TURNS[i]
        if (t.speaker === "AI" || t.speaker === "AI_COACH") {
          setAiSpeaking(true)
          setRepSpeaking(false)
        } else {
          setRepSpeaking(true)
          setAiSpeaking(false)
        }
        await sleep(300)
        if (cancelled) return
        setVisibleTurns(i + 1)
        await sleep(i === TURNS.length - 1 ? 3200 : 1800)
        if (cancelled) return
        setAiSpeaking(false)
        setRepSpeaking(false)
        await sleep(400)
      }

      if (cancelled) return
      setPhase("done")
      await sleep(2400)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="h-full flex flex-col bg-[#111827] rounded-xl overflow-hidden">

      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111827] border-b border-white/[0.07] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-white/60 font-mono">
            AI ROLEPLAY · COMPETITIVE SCENARIO
          </span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">vs. Competitor X</span>
      </div>

      {/* ── Video tiles ──────────────────────────────────────────── */}
      <div className="bg-[#1A1F2E] px-3 pt-3 pb-2 flex gap-2.5 shrink-0">

        {/* Hindsight AI tile — plays the prospect + coaching */}
        <div
          className={`flex-1 rounded-xl bg-[#0F1F3D] flex flex-col items-center justify-center relative overflow-hidden border-2 transition-colors duration-300`}
          style={{ aspectRatio: "16/9", borderColor: aiSpeaking ? "#D4A843" : "transparent" }}
        >
          <div className="relative w-9 h-9 mb-1.5">
            <Image
              src="/hindsightlogo-mark-only.svg"
              alt="Hindsight"
              fill
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>
          {/* Speaking bars */}
          <div className="flex items-end gap-0.5 h-3.5">
            {[3, 5, 4, 7, 3, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-0.5 rounded-full"
                style={{
                  height: aiSpeaking ? `${h * 2}px` : "2px",
                  background: "#D4A843",
                  transition: `height 0.2s ease ${i * 60}ms`,
                }}
              />
            ))}
          </div>
          <span className="absolute bottom-1.5 left-2 text-[9px] text-white/50 font-mono">
            Hindsight AI
          </span>
        </div>

        {/* Rep tile */}
        <div
          className={`flex-1 rounded-xl bg-[#1E293B] flex flex-col items-center justify-center relative border-2 transition-colors duration-300`}
          style={{ aspectRatio: "16/9", borderColor: repSpeaking ? "#60A5FA" : "transparent" }}
        >
          <div className="w-9 h-9 rounded-full bg-[#334155] flex items-center justify-center mb-1.5">
            <span className="text-[12px] font-bold text-white/80 font-mono">MR</span>
          </div>
          <div className="flex items-end gap-0.5 h-3.5">
            {[3, 5, 4, 7, 3, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-0.5 rounded-full"
                style={{
                  height: repSpeaking ? `${h * 2}px` : "2px",
                  background: "#60A5FA",
                  transition: `height 0.2s ease ${i * 60}ms`,
                }}
              />
            ))}
          </div>
          <span className="absolute bottom-1.5 left-2 text-[9px] text-white/50 font-mono">
            Marcus R. (rep)
          </span>
        </div>

      </div>

      {/* ── Transcript / coaching strip ──────────────────────────── */}
      <div className="flex-1 px-3.5 py-3 flex flex-col gap-2 overflow-hidden">
        <div className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/30 font-mono mb-0.5">
          Live transcript
        </div>

        {TURNS.slice(0, visibleTurns).map((turn, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 animate-fadeInUp ${
              turn.speaker === "AI_COACH"
                ? "mt-1 pt-2 border-t border-white/[0.08]"
                : ""
            }`}
            style={{ animationDuration: "0.3s", animationFillMode: "both" }}
          >
            <span
              className="text-[9px] font-bold shrink-0 mt-0.5 w-[30px] font-mono"
              style={{
                color: turn.speaker === "REP"
                  ? "#60A5FA"
                  : turn.speaker === "AI_COACH"
                  ? "#D4A843"
                  : "#D4A843",
              }}
            >
              {turn.speaker === "REP" ? "REP" : turn.speaker === "AI_COACH" ? "COACH" : "PROS"}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`text-[10.5px] leading-snug ${
                  turn.speaker === "AI_COACH"
                    ? "text-amber/90 font-medium"
                    : "text-white/70"
                }`}
              >
                {turn.text}
              </p>
              {turn.coaching && (
                <p className="text-[9px] text-white/30 font-mono mt-1">
                  ↑ {turn.coaching}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
