"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const QUESTION = "@Hindsight how do we handle pricing objections vs. ACME in midmarket?"

const RESPONSE_BULLETS = [
  { icon: "✓", color: "#2A5C45", bg: "#EAF4EF", text: "Lead with ROI — avg customer saves 14h/week. Anchor value before price comes up." },
  { icon: "✓", color: "#2A5C45", bg: "#EAF4EF", text: "ACME discounts 30–40% late in cycle. Don't match — stress implementation & support." },
  { icon: "✗", color: "#B91C1C", bg: "#FEF2F2", text: "Avoid direct price comparison early. You win 71% when value is established first." },
]

const SOURCE_LINE = "Based on 9 deals vs. ACME · Q4 2025–Q1 2026"

type Phase = "idle" | "question" | "typing" | "responding" | "done"

export function SlackEnablementAnimation() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [questionChars, setQuestionChars] = useState(0)
  const [bulletsDone, setBulletsDone] = useState(0)
  const [showSource, setShowSource] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setPhase("idle")
      setQuestionChars(0)
      setBulletsDone(0)
      setShowSource(false)

      await sleep(600)
      if (cancelled) return

      // Type the question
      setPhase("question")
      for (let i = 1; i <= QUESTION.length; i++) {
        if (cancelled) return
        setQuestionChars(i)
        await sleep(22)
      }

      await sleep(400)
      if (cancelled) return

      // Typing indicator
      setPhase("typing")
      await sleep(1600)
      if (cancelled) return

      // Reveal bullets one by one
      setPhase("responding")
      for (let b = 1; b <= RESPONSE_BULLETS.length; b++) {
        if (cancelled) return
        setBulletsDone(b)
        await sleep(700)
      }

      if (cancelled) return
      setShowSource(true)
      setPhase("done")

      await sleep(4000)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden border border-[#E8E4DC] shadow-[0_2px_12px_rgba(15,31,61,0.06)]">

      {/* ── Slack chrome: top bar ─────────────────────────────────── */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#3F0F40] shrink-0">
        <div className="relative w-3.5 h-3.5 shrink-0">
          <Image src="/integration_logos/slack.png" alt="Slack" fill className="object-contain" />
        </div>
        <span
          className="text-[11px] font-bold text-white/90"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          #ask-hindsight
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span
            className="text-[9px] text-white/40"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            live
          </span>
        </div>
      </div>

      {/* ── Message thread ─────────────────────────────────────────── */}
      <div className="flex-1 bg-white px-4 py-4 flex flex-col gap-4 overflow-hidden">

        {/* Rep message */}
        <div
          className={`flex items-start gap-2.5 transition-all duration-400 ${
            phase !== "idle" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="w-7 h-7 rounded bg-[#E8EAF6] flex items-center justify-center shrink-0 mt-0.5">
            <span
              className="text-[9px] font-bold text-[#3949AB]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              MR
            </span>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-0.5">
              <span
                className="text-[12px] font-bold text-[#1D1C1D]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Marcus R.
              </span>
              <span
                className="text-[10px] text-[#616061]"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                10:32 AM
              </span>
            </div>
            <p
              className="text-[12px] text-[#1D1C1D] leading-snug"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {phase === "idle" ? "" : (
                <>
                  <span className="font-medium text-[#1264A3]">@Hindsight</span>
                  {" "}{QUESTION.replace("@Hindsight ", "").slice(0, Math.max(0, questionChars - 10))}
                  <span className={`inline-block w-[2px] h-[13px] bg-[#1D1C1D] align-middle ml-px ${questionChars < QUESTION.length ? "animate-pulse" : "opacity-0"}`} />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Hindsight response */}
        {(phase === "typing" || phase === "responding" || phase === "done") && (
          <div
            className="flex items-start gap-2.5 transition-all duration-400 opacity-100 translate-y-0"
          >
            {/* Hindsight avatar */}
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "linear-gradient(140deg, #2563eb 0%, #60a5fa 100%)" }}
            >
              <div className="relative w-4 h-4">
                <Image src="/hindsightlogo-mark-only.svg" alt="Hindsight" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-[12px] font-bold text-[#0F1F3D]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Hindsight
                </span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-sm bg-[#D4A843]/15 text-[#D4A843] font-bold tracking-wide"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  APP
                </span>
                <span
                  className="text-[10px] text-[#616061]"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  10:32 AM
                </span>
              </div>

              {/* Typing indicator */}
              {phase === "typing" && (
                <div className="flex items-center gap-1 mt-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]"
                      style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              )}

              {/* Bullets */}
              {(phase === "responding" || phase === "done") && (
                <div className="flex flex-col gap-1.5">
                  {RESPONSE_BULLETS.slice(0, bulletsDone).map((b, bi) => (
                    <div
                      key={bi}
                      className="flex items-start gap-2 animate-fadeInUp"
                      style={{ animationDuration: "0.3s", animationFillMode: "both" }}
                    >
                      <span
                        className="text-[10px] font-bold mt-0.5 w-4 shrink-0 text-center rounded px-0.5 leading-[16px]"
                        style={{ fontFamily: "Arial, sans-serif", color: b.color, background: b.bg }}
                      >
                        {b.icon}
                      </span>
                      <span
                        className="text-[11px] text-[#374151] leading-snug"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {b.text}
                      </span>
                    </div>
                  ))}

                  {/* Source line */}
                  {showSource && (
                    <div
                      className="flex items-center gap-2 mt-1 pt-2 border-t border-[#F3F4F6] animate-fadeInUp"
                      style={{ animationDuration: "0.4s", animationFillMode: "both" }}
                    >
                      {["/integration_logos/gong.png", "/integration_logos/salesforce logo.png"].map((src, i) => (
                        <div key={i} className="relative w-3.5 h-3.5 shrink-0">
                          <Image src={src} alt="" fill className="object-contain" />
                        </div>
                      ))}
                      <span
                        className="text-[9px] text-[#9CA3AF]"
                        style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                      >
                        {SOURCE_LINE}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Input bar ─────────────────────────────────────────────── */}
      <div className="bg-white px-4 pb-4 shrink-0">
        <div className="border border-[#E8E4DC] rounded-lg px-3 py-2 flex items-center gap-2">
          <span
            className="text-[11px] text-[#9CA3AF] flex-1"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Message #ask-hindsight
          </span>
          <span className="text-[12px] text-[#9CA3AF]">↵</span>
        </div>
      </div>
    </div>
  )
}
