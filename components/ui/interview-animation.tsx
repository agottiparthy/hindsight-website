"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
/* ─── Panel 03: Win-Loss Interviews ──────────────────────────────────────── */

type InterviewPhase = "idle" | "slack" | "slack_done" | "email" | "call" | "call_done"

const SLACK_MESSAGES = [
  {
    id: 1,
    sender: "Hindsight",
    time: "9:04 AM",
    isApp: true,
    text: "Hey James 👋 — saw they went with Competitor A. You logged \"Product Gap\" as the loss reason but I didn't get much detail. What specifically did they need?",
  },
  {
    id: 2,
    sender: "James R.",
    time: "9:18 AM",
    isApp: false,
    text: "They wanted a native integration with their HRIS. We technically have it but it never came up early enough in discovery. Should've escalated sooner tbh.",
  },
    {
    id: 3,
    sender: "Hindsight",
    time: "9:18 AM",
    isApp: true,
    text: "Got it, thanks. Anything specific about the HRIS integration that was a problem? Like, was it a reliability issue, missing features, or just not native?",
  },
    {
    id: 4,
    sender: "James R.",
    time: "9:22 AM",
    isApp: false,
    text: "They took a look at our docs but it seemed too complicate for them. At least that's what I could tell..",
  },
  {
    id: 5,
    sender: "Hindsight",
    time: "9:22 AM",
    isApp: true,
    text: "Got it — logging that. Really helpful, thanks 🙏",
  },
]

const CALL_TRANSCRIPT = [
  "What ultimately drove the decision?",
  "The HRIS connector — we needed it live in 30 days.",
  "Was pricing ever a factor, or purely the integration?",
  "Purely integration. Competitor A had it native.",
]

export function InterviewPanel() {
  const [phase, setPhase] = useState<InterviewPhase>("idle")
  const [visibleMsgs, setVisibleMsgs] = useState<number[]>([])
  const [transcriptLines, setTranscriptLines] = useState<number[]>([])
  const [aiSpeaking, setAiSpeaking] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function run() {
      setPhase("idle")
      setVisibleMsgs([])
      setTranscriptLines([])
      setAiSpeaking(false)
      await sleep(600)
      if (cancelled) return

      // ── Slack half ──
      setPhase("slack")
      for (let i = 0; i < SLACK_MESSAGES.length; i++) {
        if (cancelled) return
        await sleep(i === 0 ? 0 : i === 1 ? 1800 : 1200)
        if (cancelled) return
        setVisibleMsgs((prev) => [...prev, SLACK_MESSAGES[i].id])
      }

      await sleep(800)
      if (cancelled) return
      setPhase("slack_done")
      await sleep(1800)
      if (cancelled) return

      // ── Buyer email half ──
      setPhase("email")
      await sleep(2800)
      if (cancelled) return

      // ── AI call half ──
      setPhase("call")
      await sleep(600)

      for (let i = 0; i < CALL_TRANSCRIPT.length; i++) {
        if (cancelled) return
        setAiSpeaking(i % 2 === 0)
        await sleep(200)
        setTranscriptLines((prev) => [...prev, i])
        await sleep(1600)
      }

      if (cancelled) return
      setAiSpeaking(false)
      setPhase("call_done")
      await sleep(3000)
      if (!cancelled) run()
    }

    run()
    return () => { cancelled = true }
  }, [])

  const onBuyerScreen = phase === "email" || phase === "call" || phase === "call_done"

  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(15,31,61,0.08)]">

      {/* Card header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Win-Loss Interviews · Auto-sent
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-sm bg-[#2A5C45] text-white tracking-widest"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          48H POST-CLOSE
        </span>
      </div>

      {/* ── Sliding viewport ── */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: onBuyerScreen ? "translateX(-50%)" : "translateX(0%)", width: "200%" }}
        >

          {/* ─── SCREEN 1: Seller / Slack ─────────────────────── */}
          <div className="w-1/2 flex flex-col border-r border-[#E8E4DC]">
            {/* Slack chrome bar */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#3F0F40]">
              <div className="w-5 h-5 rounded bg-[#0F1F3D] flex items-center justify-center shrink-0">
                <div className="relative w-3.5 h-3.5">
                  <Image src="/hindsightlogo-mark-only.svg" alt="Hindsight" fill className="object-contain brightness-0 invert" />
                </div>
              </div>
              <span className="text-[11px] font-bold text-white/90" style={{ fontFamily: "Arial, sans-serif" }}>Hindsight</span>
              <span className="text-[10px] text-white/40 ml-0.5" style={{ fontFamily: "Arial, sans-serif" }}>· App</span>
              <div className="ml-auto relative w-4 h-4 shrink-0">
                <Image src="/integration_logos/slack.png" alt="Slack" fill className="object-contain" />
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white px-4 py-3 flex flex-col gap-3.5">
              {SLACK_MESSAGES.filter((msg) => visibleMsgs.includes(msg.id)).map((msg) => (
                  <div
                    key={msg.id}
                    className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-500"
                  >
                    {msg.isApp ? (
                      <div className="w-8 h-8 rounded-lg bg-[#0F1F3D] flex items-center justify-center shrink-0 mt-0.5">
                        <div className="relative w-5 h-5">
                          <Image src="/hindsightlogo-mark-only.svg" alt="Hindsight" fill className="object-contain brightness-0 invert" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-[#E8EAF6] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[11px] font-bold text-[#3949AB]" style={{ fontFamily: "Arial, sans-serif" }}>JR</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-[13px] font-bold text-[#1D1C1D]" style={{ fontFamily: "Arial, sans-serif" }}>{msg.sender}</span>
                        <span className="text-[11px] text-[#616061]" style={{ fontFamily: "Arial, sans-serif" }}>{msg.time}</span>
                        {msg.isApp && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F3F0FF] text-[#5B21B6] font-bold tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>APP</span>
                        )}
                      </div>
                      <div className="text-[13px] text-[#1D1C1D] leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>{msg.text}</div>
                    </div>
                  </div>
              ))}
            </div>

            {/* Upload status */}
            <div
              className={`flex items-center gap-2.5 px-4 py-2.5 border-t border-[#E8E4DC] bg-[#FAFAF8] transition-opacity duration-500 ${
                phase === "slack_done" || onBuyerScreen ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-[11px] text-[#2A5C45]">✓</span>
              <span className="text-[11px] font-bold text-[#2A5C45]" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>Rep interview logged</span>
              <span className="text-[10px] text-[#6B7280] ml-1" style={{ fontFamily: "Arial, sans-serif" }}>· sending buyer invite</span>
            </div>

          </div>

          {/* ─── SCREEN 2: Buyer (email → call) ──────────────── */}
          <div className="w-1/2 flex flex-col relative">

            {/* EMAIL view — always visible */}
            <div>
              {/* Email chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F3F4F6] border-b border-[#E8E4DC]">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FC5858]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                </div>
                <span className="text-[10px] text-[#6B7280] mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>Inbox — sarah.chen@meridianhealth.com</span>
              </div>

              {/* Email body */}
              <div className="bg-white px-5 py-4">
                <div className="mb-3 pb-3 border-b border-[#F0EFEA]">
                  <div className="text-[13px] font-bold text-[#0F1F3D] mb-0.5" style={{ fontFamily: "Arial, sans-serif" }}>
                    Quick question about your Acme evaluation
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0F1F3D] flex items-center justify-center shrink-0">
                      <div className="relative w-3 h-3">
                        <Image src="/hindsightlogo-mark-only.svg" alt="H" fill className="object-contain brightness-0 invert" />
                      </div>
                    </div>
                    <span className="text-[11px] text-[#6B7280]" style={{ fontFamily: "Arial, sans-serif" }}>
                      James &lt;james@acme.ai&gt;
                    </span>
                  </div>
                </div>

                <div className="text-[12px] text-[#374151] leading-relaxed mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
                  Hi Sarah — I&rsquo;m reaching out on behalf of the product team at Acme which you evaluated recently.
                  Your perspective on the decision would be incredibly valuable — it only takes about 5 minutes and greatly helps us with our roadmap.
                </div>

                <div className="text-[12px] text-[#374151] leading-relaxed mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
                  You can{" "}
                  <span className="text-[#1D4ED8] underline cursor-pointer">start an AI conversation now</span>
                  {" "}(we&rsquo;ll send a <span className="font-medium">$20 gift card</span> as a thank you), or if you&rsquo;d prefer,{" "}
                  <span className="text-[#1D4ED8] underline cursor-pointer">book a quick 15-min call</span>{" "}instead.
                </div>

                <div className="text-[12px] text-[#374151] leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                  Thanks so much,
                  <br />
                  <span className="text-[#374151]">The Acme team</span>
                </div>
              </div>
            </div>

            {/* CALL view — overlays the email */}
            <div
              className={`absolute inset-0 flex flex-col bg-[#111827] transition-opacity duration-700 ease-in-out ${
                phase === "call" || phase === "call_done" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Call top bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#111827]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                  <span className="text-[10px] text-white/70 font-bold tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>AI INTERVIEW · LIVE</span>
                </div>
                <span className="text-[10px] text-white/40" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>04:12</span>
              </div>

              {/* Video tiles */}
              <div className="bg-[#1A1F2E] px-3 pt-3 pb-2 flex gap-2">
                {/* Hindsight AI tile */}
                <div className={`flex-1 rounded-lg bg-[#0F1F3D] aspect-video flex flex-col items-center justify-center relative overflow-hidden border-2 transition-colors duration-300 ${aiSpeaking ? "border-[#D4A843]" : "border-transparent"}`}>
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/hindsightlogo-mark-only.svg" alt="Hindsight" fill className="object-contain brightness-0 invert opacity-90" />
                  </div>
                  {aiSpeaking && (
                    <div className="flex items-end gap-0.5 h-4">
                      {[3, 6, 4, 7, 3, 5, 4].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 bg-[#D4A843] rounded-full animate-pulse"
                          style={{ height: `${h * 2}px`, animationDelay: `${i * 80}ms` }}
                        />
                      ))}
                    </div>
                  )}
                  <span className="absolute bottom-1.5 left-2 text-[9px] text-white/60" style={{ fontFamily: "Arial, sans-serif" }}>Hindsight AI</span>
                </div>

                {/* VP tile */}
                <div className={`flex-1 rounded-lg bg-[#1E293B] aspect-video flex flex-col items-center justify-center relative border-2 transition-colors duration-300 ${!aiSpeaking && phase === "call" ? "border-[#60A5FA]" : "border-transparent"}`}>
                  <div className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center mb-1">
                    <span className="text-[13px] font-bold text-white/80" style={{ fontFamily: "Arial, sans-serif" }}>SC</span>
                  </div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] text-white/60" style={{ fontFamily: "Arial, sans-serif" }}>Sarah C. · VP Eng</span>
                </div>
              </div>

              {/* Live transcript */}
              <div className="bg-[#111827] px-3 pb-3 flex flex-col gap-1 flex-1">
                <div className="text-[9px] text-white/30 mb-1 tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>TRANSCRIPT</div>
                {CALL_TRANSCRIPT.map((line, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 transition-all duration-350 ${transcriptLines.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                  >
                    <span
                      className="text-[9px] font-bold shrink-0 mt-0.5"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        color: i % 2 === 0 ? "#D4A843" : "#60A5FA",
                      }}
                    >
                      {i % 2 === 0 ? "AI" : "SC"}
                    </span>
                    <span className="text-[10px] text-white/70 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>{line}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

