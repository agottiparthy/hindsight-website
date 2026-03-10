"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InterviewPanel } from "@/components/ui/interview-animation"

// ── Hindsight icon SVG ──────────────────────────────────────────────────
const HsIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 250 250" width={size} height={size}>
    <path d="M39.1406 54.5834C38.2656 51.1885 37.5 46.0414 37.5 43.1941V37.9375H98.4219C148.625 37.9375 160.547 38.266 165.469 39.5802C168.75 40.4563 174.656 42.7561 178.594 44.7273C183.188 47.027 188.438 50.9695 193.469 56.0071C198.281 60.8256 202.547 66.4108 205.062 71.3388C207.25 75.6098 209.875 81.9616 210.75 85.5755C212.062 90.2845 212.5 97.2933 212.5 110.435C212.5 120.619 212.172 128.833 211.734 128.833C211.188 128.723 209.328 126.643 207.469 124.124C205.609 121.605 201.016 117.115 197.078 114.268C193.25 111.311 187.344 107.916 184.062 106.602C178.375 104.412 175.531 104.193 134.297 103.536C97.875 102.988 89.4531 102.55 83.9844 101.017C80.375 99.9216 74.4688 97.6218 70.8594 95.6506C67.25 93.7889 60.7969 88.7513 56.5312 84.4803C51.1719 79.2237 47.5625 74.4052 44.7188 68.9296C42.5312 64.5491 40.0156 58.0878 39.1406 54.5834Z" fill="#379BFF"/>
    <path d="M39.25 138.141C38.2656 134.528 37.5 129.271 37.5 126.424V121.167H97.875C148.406 121.167 159.453 121.386 164.922 122.81C168.531 123.795 174.656 126.095 178.594 128.066C183.188 130.257 188.438 134.309 193.359 139.237C198.281 144.055 202.547 149.75 205.062 154.568C207.25 158.73 209.766 165.191 210.75 168.805C211.953 173.514 212.5 180.632 212.5 193.774C212.5 203.849 212.172 212.062 211.625 212.062C211.188 212.062 209.109 209.763 207.031 206.915C204.953 204.178 200.25 199.797 196.641 197.169C193.031 194.65 187.344 191.365 184.062 190.05C178.266 187.532 176.734 187.422 133.75 186.875C92.4062 186.217 89.0156 185.998 82.3438 183.808C78.4062 182.494 72.0625 179.647 68.2344 177.347C64.4062 175.047 58.2812 169.9 54.5625 165.958C50.9531 162.015 46.3594 155.663 44.3906 151.721C42.4219 147.888 40.125 141.755 39.25 138.141Z" fill="#81DBFD"/>
  </svg>
)

// ── Hero agent-session visual ─────────────────────────────────────────
function HeroDealCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#E8E4DC] shadow-[0_8px_40px_rgba(15,31,61,0.14)] bg-white text-[12px]" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Sidebar + main split */}
      <div className="grid" style={{ gridTemplateColumns: "180px 1fr" }}>
        {/* Sidebar */}
        <div className="bg-[#f7f7f8] border-r border-[#e8e8ec] p-3">
          <div className="pb-3 mb-2 border-b border-[#e8e8ec]">
            <div className="text-[10px] text-[#9999aa] font-mono mb-1.5">Deals › <span className="text-[#555566]">Meridian</span></div>
            <div className="text-[12px] font-semibold text-[#111113] mb-2">Meridian Systems — Q1</div>
            <div className="flex justify-between mb-1"><span className="text-[10px] text-[#9999aa]">Stage</span><span className="text-[9px] bg-red-50 text-red-600 rounded px-1.5 py-0.5">Closed Lost</span></div>
            <div className="flex justify-between mb-1"><span className="text-[10px] text-[#9999aa]">Amount</span><span className="text-[10px] text-[#555566] font-mono">$38,000</span></div>
            <div className="flex justify-between"><span className="text-[10px] text-[#9999aa]">Close date</span><span className="text-[10px] text-[#555566] font-mono">Feb 28</span></div>
          </div>
          {["Home", "Quotes", "Agent Sessions"].map((item) => (
            <div key={item} className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-[10px] mb-0.5 ${item === "Agent Sessions" ? "bg-blue-50 text-blue-600" : "text-[#9999aa]"}`}>
              <span className="w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="bg-white p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[11px] text-[#555566] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Win-Loss Interview Agent · running
            </div>
            <span className="text-[10px] font-mono bg-[#f2f2f5] border border-[#d8d8e2] text-[#555566] px-2 py-0.5 rounded">▷ Run</span>
          </div>

          {/* Contact found */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 border border-emerald-100 mb-2">
            <span className="text-emerald-600 text-xs">◉</span>
            <span className="text-[11px] text-[#555566]"><strong className="text-emerald-700">1 contact found</strong> · Sarah Chen, VP of Sales</span>
          </div>

          {/* Event: email */}
          <div className="bg-[#f2f2f5] border border-[#e8e8ec] rounded-md p-2.5 mb-2">
            <div className="flex items-start gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-white border border-[#d8d8e2] flex items-center justify-center text-[9px] flex-shrink-0">✉</div>
              <span className="text-[11px] text-[#555566] font-medium">Internal interview sent to <strong>jordan@acme.com</strong></span>
            </div>
            <div className="text-[10px] text-[#9999aa] pl-7 leading-relaxed">Internal loss review for Meridian. Deal stalled after proposal, rep cited pricing pushback and a competing vendor&apos;s deeper CRM integration…</div>
          </div>

          {/* Event: approval */}
          <div className="bg-[#f2f2f5] border border-[#e8e8ec] rounded-md p-2.5 mb-2">
            <div className="flex items-start gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-white border border-[#d8d8e2] flex items-center justify-center text-[9px] flex-shrink-0">📋</div>
              <span className="text-[11px] text-[#555566] font-medium">Interview Approval Requested</span>
            </div>
            <div className="text-[10px] text-[#9999aa] pl-7">Slack DM sent to 1 approver · waiting for approval before sending to buyer</div>
          </div>

          {/* Follow-up */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#f2f2f5] border border-[#e8e8ec] text-[10px] text-[#9999aa]">
            <span className="text-sm">🕐</span>
            Follow-up in <strong className="text-[#555566]">4 days</strong>. Remind internal respondents, send buyer invite after approval.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Slack approval card ──────────────────────────────────────────────
function SlackApprovalCard() {
  const [approved, setApproved] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden border border-[#2d2d35]" style={{ background: "#1a1d21", fontFamily: "system-ui, sans-serif" }}>
      <div className="grid" style={{ gridTemplateColumns: "180px 1fr" }}>
        {/* Sidebar */}
        <div style={{ background: "#19171d", borderRight: "1px solid #2d2d35" }} className="p-3">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-white mb-3 px-1">
            <div className="w-5 h-5 rounded bg-[#4a154b] flex items-center justify-center text-[9px] text-white">A</div>
            Acme Corp
          </div>
          {["#marketing-sales", "#win-loss", "#general"].map((ch) => (
            <div key={ch} className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white/40 rounded mx-1">{ch}</div>
          ))}
          <div className="mt-2">
            <div className="text-[10px] text-white/30 px-3 py-1 uppercase tracking-wider font-medium">Direct messages</div>
            <div className="flex items-center gap-1.5 px-2 py-1 mx-1 text-[11px] text-white/40">
              <div className="w-3.5 h-3.5 rounded bg-white/10 flex items-center justify-center text-[7px]">M</div> Marcus T.
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 mx-1 text-[11px] text-white rounded" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="w-3.5 h-3.5 rounded bg-[#0d1117] p-0.5 flex-shrink-0"><HsIcon size={12} /></div> Hindsight
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="p-3">
          <div className="flex gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#0d1117] p-1 flex-shrink-0"><HsIcon size={24} /></div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[12px] font-bold text-white">Hindsight</span>
                <span className="text-[9px] bg-white/10 text-white/50 px-1.5 py-0.5 rounded uppercase tracking-wide">App</span>
                <span className="text-[10px] text-white/25">10:49 AM</span>
              </div>

              {/* Approval card */}
              <div className="rounded-md p-3 border-l-[3px] border-[#379BFF]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderLeftColor: "#379BFF", borderLeftWidth: 3 }}>
                <div className="text-[12px] font-bold text-white mb-2.5">📋 Approval Required: Win-Loss Interview Request</div>
                <div className="flex gap-2 mb-1 text-[11px]"><span className="text-white/40 font-semibold">Deal:</span><span className="text-white/75">Meridian Systems — Q1</span></div>
                <div className="flex gap-2 mb-1 text-[11px]"><span className="text-white/40 font-semibold">Reason:</span><span className="text-white/75">Interview Sarah Chen (VP Sales) on why we lost at proposal stage.</span></div>
                <div className="flex items-center gap-2 my-2">
                  <span className="text-[10px] text-white/40">Email variant:</span>
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded">$100 – VP / Director</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded mt-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <div className="text-[11px] font-semibold text-white">Sarah Chen</div>
                    <div className="text-[10px] font-mono text-white/30">s.chen@meridiansys.com</div>
                  </div>
                  <button
                    onClick={() => setApproved(true)}
                    className="text-[11px] font-semibold text-white px-3 py-1.5 rounded cursor-pointer transition-all"
                    style={{ background: approved ? "#2d5a3d" : "#007a5a" }}
                  >
                    {approved ? "✓ Approved" : "Approve"}
                  </button>
                </div>
                <button className="mt-2 text-[10px] border border-white/10 text-white/50 px-3 py-1 rounded flex items-center gap-1">View in app</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Slack thread / rep interview ────────────────────────────────────
function SlackRepThread() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#2d2d35]" style={{ background: "#1a1d21", fontFamily: "system-ui, sans-serif" }}>
      <div className="grid" style={{ gridTemplateColumns: "180px 1fr 260px" }}>
        {/* Sidebar */}
        <div style={{ background: "#19171d", borderRight: "1px solid #2d2d35" }} className="p-3">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-white mb-3 px-1">
            <div className="w-5 h-5 rounded bg-[#4a154b] flex items-center justify-center text-[9px] text-white">A</div>
            Acme Corp
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white rounded mx-1 mb-0.5" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-white/50 text-[10px]">#</span> marketing-sales
          </div>
          {["#general"].map((ch) => (
            <div key={ch} className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white/40 mx-1">{ch}</div>
          ))}
          <div className="mt-2">
            <div className="text-[9px] text-white/25 px-3 py-1 uppercase tracking-wider">Direct messages</div>
            <div className="flex items-center gap-1.5 px-2 py-1 mx-1 text-[11px] text-white rounded" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="w-3.5 h-3.5 rounded bg-[#0d1117] p-0.5 flex-shrink-0"><HsIcon size={12} /></div> Hindsight
            </div>
          </div>
        </div>

        {/* Main msg */}
        <div className="p-3 border-r border-[#2d2d35]">
          <div className="flex gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#0d1117] p-1 flex-shrink-0"><HsIcon size={24} /></div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-[12px] font-bold text-white">Hindsight</span>
                <span className="text-[9px] bg-white/10 text-white/50 px-1.5 py-0.5 rounded uppercase">App</span>
              </div>
              <div className="text-[11px] text-white/70 leading-relaxed">
                <strong className="text-white">Meridian Systems — Q1</strong> closed lost at proposal stage. Hi Jordan, doing a quick internal review.<br /><br />
                Pricing pushback appeared in 3 calls. A competing vendor&apos;s CRM integration was mentioned twice. Would you mind answering a few async questions?
              </div>
              <div className="text-[10px] text-white/25 mt-2">3 replies</div>
            </div>
          </div>
        </div>

        {/* Thread panel */}
        <div style={{ background: "#0d0d12" }} className="flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#1e1e2a]">
            <span className="text-[12px] font-semibold text-white">Thread</span>
            <span className="text-[10px] text-white/25">Hindsight</span>
          </div>
          <div className="p-3 flex flex-col gap-3 overflow-hidden">
            {/* AI question */}
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded bg-[#0d1117] p-0.5 flex-shrink-0"><HsIcon size={20} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-white mb-0.5">Hindsight <span className="text-[9px] font-normal text-white/25">App</span></div>
                <div className="text-[11px] text-white/80 leading-snug">In your view, was pricing a genuine blocker? Or was it cover for a decision already made?</div>
              </div>
            </div>
            {/* Rep voice response */}
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded bg-[#2d5a3d] flex items-center justify-center text-[9px] text-white/70 flex-shrink-0">J</div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-white mb-1">Jordan <span className="text-[9px] font-normal text-white/25">Just now</span></div>
                {/* Audio bubble */}
                <div className="flex items-center gap-2 rounded-[18px] py-2 px-3 w-fit" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-5 h-5 rounded-full bg-[#379BFF] flex items-center justify-center text-[7px] text-white">▶</div>
                  <div className="flex items-center gap-0.5 h-4">
                    {[8, 12, 16, 10, 14, 8, 12].map((h, i) => (
                      <div key={i} className="w-0.5 rounded bg-white/25" style={{ height: h }} />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/35">0:14</span>
                </div>
                <div className="text-[10px] text-[#379BFF] font-mono mt-1 cursor-pointer">Generate transcript</div>
              </div>
            </div>
            {/* AI follow-up with transcript */}
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded bg-[#0d1117] p-0.5 flex-shrink-0"><HsIcon size={20} /></div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-white mb-1">Hindsight</div>
                <div className="text-[10px] italic text-white/45 border-l-2 border-[#2d2d35] pl-2 mb-1.5 leading-snug">Transcribed: Honestly pricing came up late. The real issue was their ops team couldn&apos;t get sign-off without a native Salesforce integration.</div>
                <div className="text-[11px] text-white/70 leading-snug">That&apos;s a critical detail. When did IT or procurement get involved?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Buyer email visual ───────────────────────────────────────────────
function BuyerEmailCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#e0e0e0] shadow-sm" style={{ background: "#fff", fontFamily: "system-ui, sans-serif", color: "#1a1a1a" }}>
      {/* Chrome */}
      <div className="flex items-center gap-3 px-3 py-2 border-b" style={{ background: "#f5f5f5", borderColor: "#e0e0e0" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white rounded border border-[#ddd] px-2 py-1 text-[10px] font-mono text-[#888]">mail.google.com/mail</div>
      </div>

      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0f0]">
        <div className="text-[16px] font-semibold mb-2">One question about your evaluation (<mark className="bg-amber-100 text-amber-900 rounded px-0.5">2 min</mark>)</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">JT</div>
            <div>
              <div className="text-[12px] font-semibold">Jamie Torres <span className="font-normal text-[#888] text-[10px]">&lt;j.torres@acme.com&gt;</span></div>
              <div className="text-[10px] text-[#888]">to Sarah Chen</div>
            </div>
          </div>
          <div className="text-[10px] text-[#888]">Mon, Mar 2, 7:21 PM</div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 text-[13px] leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#333" }}>
        <p className="mb-3">Hi Sarah,</p>
        <p className="mb-3">I was the PMM on the Acme side during your evaluation. I know the decision didn&apos;t go our way, and I&apos;m not going to pretend otherwise.</p>
        <p className="mb-3">I want to understand what drove the call. Not to re-open it. A short AI-guided conversation, 5 minutes, on your schedule.</p>
        <p><span className="text-blue-600 underline cursor-pointer">Share your feedback →</span></p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 px-5 pb-4">
        <button className="flex items-center gap-1.5 border border-[#ddd] bg-white text-[#555] text-[11px] px-3 py-1.5 rounded-full">↩ Reply</button>
        <button className="flex items-center gap-1.5 border border-[#ddd] bg-white text-[#555] text-[11px] px-3 py-1.5 rounded-full">→ Forward</button>
      </div>
    </div>
  )
}

// ── A/B testing response-rate chart ─────────────────────────────────
function ABTestingChart() {
  const variants = [
    { name: "VP / Director · $100 incentive", pct: 34, color: "#22c55e", note: "↑ was 18% · best performer" },
    { name: "C-suite · $200 incentive", pct: 27, color: "#379BFF", note: "↑ was 14% · improving" },
    { name: "Competitive win · no incentive", pct: 22, color: "#a78bfa", note: "↑ was 9% · wins only" },
    { name: "Default · no incentive", pct: 19, color: "#f59e0b", note: "↑ was 12% · baseline" },
  ]
  return (
    <div className="rounded-xl border border-[#E8E4DC] overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DC]">
        <div>
          <div className="text-[13px] font-semibold text-navy">Outreach performance</div>
          <div className="text-[11px] text-body mt-0.5">Response rates climb as the agent optimizes copy across variants</div>
        </div>
        <span className="text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded" style={{ background: "rgba(55,155,255,0.08)", border: "1px solid rgba(55,155,255,0.2)", color: "#379BFF" }}>A/B testing active</span>
      </div>

      <div className="grid grid-cols-[1fr_1.4fr]">
        {/* Sparkline */}
        <div className="flex flex-col px-6 py-5 border-r border-[#E8E4DC]">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#9999aa] mb-3">Total requests sent</div>
          <svg viewBox="0 0 220 70" preserveAspectRatio="none" className="w-full flex-1" style={{ minHeight: 60 }}>
            <defs>
              <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#379BFF" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#379BFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,65 C15,64 30,62 50,58 C70,54 80,50 95,42 C110,34 120,26 140,18 C155,12 175,7 200,4 L220,3 L220,70 L0,70 Z" fill="url(#ag)"/>
            <path d="M0,65 C15,64 30,62 50,58 C70,54 80,50 95,42 C110,34 120,26 140,18 C155,12 175,7 200,4 L220,3" fill="none" stroke="#379BFF" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="220" cy="3" r="2.5" fill="#379BFF"/>
          </svg>
          <div className="flex justify-between mt-2 text-[9px] font-mono text-[#9999aa]">
            <span>Oct</span><span>Dec</span><span>Feb</span><span>Now</span>
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-[26px] font-light text-navy" style={{ fontFamily: "Georgia, serif" }}>847</span>
            <span className="text-[10px] font-mono text-[#9999aa]">requests sent</span>
          </div>
        </div>

        {/* Variant bars */}
        <div className="px-6 py-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#9999aa] mb-4">Response rate by variant</div>
          <div className="flex flex-col gap-4">
            {variants.map((v) => (
              <div key={v.name}>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] text-body">{v.name}</span>
                  <span className="text-[12px] font-semibold font-mono ml-3 flex-shrink-0" style={{ color: v.color }}>{v.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-[#f0f0f3] overflow-hidden mb-0.5">
                  <div className="h-full rounded-full" style={{ width: `${v.pct}%`, background: v.color }} />
                </div>
                <div className="text-[9px] font-mono text-[#9999aa]">{v.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── AI interview visual ──────────────────────────────────────────────
function AIInterviewCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#1e1e2a]" style={{ background: "#0f0f14", fontFamily: "system-ui, sans-serif" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1e1e2a]" style={{ background: "#111118" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#379BFF] to-[#81DBFD] flex items-center justify-center text-[11px] font-bold text-white">A</div>
          <div>
            <div className="text-[13px] font-semibold text-white">Acme Corp</div>
            <div className="text-[9px] text-white/30">AI-Guided Interview</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono border px-2.5 py-1 rounded" style={{ background: "rgba(55,155,255,0.12)", borderColor: "rgba(55,155,255,0.25)", color: "#7bbfff" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Voice
          </div>
          <div className="text-[10px] font-mono border px-2.5 py-1 rounded" style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)", color: "#f87171" }}>End Survey</div>
        </div>
      </div>

      {/* Body */}
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 300px" }}>
        {/* Paige video tile */}
        <div className="flex flex-col items-center justify-center gap-2.5 py-8 px-4" style={{ background: "#0a0a10", borderRight: "1px solid #1e1e2a" }}>
          <div className="relative w-14 h-14">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{
              background: "linear-gradient(135deg, #379BFF, #8b5cf6)",
              boxShadow: "0 0 30px rgba(55,155,255,0.4)"
            }}>🤖</div>
            <div className="absolute inset-[-4px] rounded-full border-2 border-emerald-400 opacity-60 animate-ping" />
          </div>
          <div className="text-[11px] text-white/50">
            <strong className="text-white/80">Paige</strong> | AI Interviewer
          </div>
        </div>

        {/* Sarah tile */}
        <div className="flex flex-col items-center justify-center gap-2.5 py-8 px-4" style={{ background: "#0a0a10", borderRight: "1px solid #1e1e2a" }}>
          <div className="w-14 h-14 rounded-full bg-[#2a3a4a] flex items-center justify-center text-lg font-semibold text-white/60">SC</div>
          <div className="text-[11px] text-white/50"><strong className="text-white/80">Sarah Chen</strong></div>
        </div>

        {/* Chat */}
        <div className="flex flex-col" style={{ background: "#0d0d12" }}>
          <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
            <div className="max-w-[90%] p-2 rounded text-[11px] leading-snug" style={{ background: "rgba(55,155,255,0.1)", border: "1px solid rgba(55,155,255,0.15)", color: "rgba(255,255,255,0.8)", borderRadius: "8px 8px 8px 2px" }}>
              You mentioned pricing came up during the evaluation. Was that a genuine blocker, or more of a proxy for something else?
            </div>
            <div className="self-end max-w-[90%] p-2 rounded text-[11px] leading-snug" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", borderRadius: "8px 8px 2px 8px" }}>
              More of a proxy. The real issue was IT — they needed a native Salesforce integration.
            </div>
            <div className="max-w-[90%] p-2 rounded text-[11px] leading-snug" style={{ background: "rgba(55,155,255,0.1)", border: "1px solid rgba(55,155,255,0.15)", color: "rgba(255,255,255,0.8)", borderRadius: "8px 8px 8px 2px" }}>
              That&apos;s really useful. When did IT get involved? Was that something your team saw coming?
            </div>
            <div className="self-end max-w-[90%] p-2 rounded text-[11px] leading-snug" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", borderRadius: "8px 8px 2px 8px" }}>
              No — it blindsided us. They came in at the proposal stage and that&apos;s when things stalled.
            </div>
            <div className="max-w-[90%] p-2 rounded text-[11px] leading-snug" style={{ background: "rgba(55,155,255,0.1)", border: "1px solid rgba(55,155,255,0.15)", color: "rgba(255,255,255,0.8)", borderRadius: "8px 8px 8px 2px" }}>
              Would earlier technical validation have changed the outcome?
            </div>
          </div>
          <div className="p-2 border-t border-[#1e1e2a]">
            <div className="rounded-md px-3 py-2 text-[10px]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)" }}>Message...</div>
          </div>
        </div>
      </div>
    </div>
  )
}



// ── Step definitions ─────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    label: "Deal closes. Agent triggers.",
    surface: "Hindsight",
    desc: "Full context already loaded from the Deal Review Agent. It knows the deal before it sends anything.",
    visual: <HeroDealCard />,
  },
  {
    num: "02",
    label: "Approval request fires in Slack.",
    surface: "Slack",
    desc: "One click to approve and send. The agent explains who it wants to contact, why, and which email variant it plans to use.",
    visual: <SlackApprovalCard />,
  },
  {
    num: "03",
    label: "Rep interview runs in Slack.",
    surface: "Slack",
    desc: "Deal-specific questions based on the transcript. The rep responds by voice or text while the deal is still fresh.",
    visual: <SlackRepThread />,
  },
  {
    num: "04",
    label: "Buyer outreach goes out. Follow-ups handled.",
    surface: "Email",
    desc: "Personalized email lands in the buyer's inbox. The agent runs the full follow-up cadence. No chasing.",
    visual: <BuyerEmailCard />,
  },
  {
    num: "05",
    label: "Buyer completes the AI interview.",
    surface: "Hindsight",
    desc: "Real-time voice interview. Deal-specific questions. Follow-ups on vague answers. No human moderator needed.",
    visual: <AIInterviewCard />,
  },
]

// ── Page ─────────────────────────────────────────────────────────────
export default function WinLossInterviewsPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Win-Loss Interview Agent
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                The interview was never{" "}
                <em className="italic text-amber">the hard part.</em>
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Scheduling is where win-loss programs die. Too much work for too few interviews. The Interview Agent handles every step automatically, so you get 50× the interviews in a fraction of the time.
              </p>

              {/* Stats */}
              <div className="inline-flex border border-white/10 rounded-lg overflow-hidden bg-white/[0.04] mb-9">
                {[
                  { n: "50×", l: "Interview volume" },
                  { n: "0", l: "Manual steps" },
                  { n: "4,500", l: "Interviews conducted" },
                ].map((s, i) => (
                  <div key={i} className="px-6 py-4 text-center border-r border-white/10 last:border-r-0">
                    <div className="text-[26px] font-bold text-white leading-none mb-1">{s.n}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.07em] text-white/35">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <Link
                  href="/request-demo"
                  className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/results"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
                >
                  See customer results →
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="w-full rounded-xl overflow-hidden" style={{ height: 420 }}>
              <InterviewPanel />
            </div>
          </div>
        </section>

        {/* ── Bottleneck section ───────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-start">
            {/* Left: heading + copy */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">The Problem</p>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy mb-8">
                The bottleneck was never<br />
                <span className="text-amber">getting the interview.</span><br />
                It was everything before it.
              </h2>
              <p className="text-[16px] text-body leading-relaxed mb-5">
                Approvals. Outreach. Follow-ups. Chasing reps. By the time you scheduled one interview, the buyer forgot the deal.
              </p>
              <p className="text-[16px] text-body leading-relaxed">
                The Interview Agent does all of it. Automatically. From deal close to completed interview, no human coordination required.
              </p>
            </div>

            {/* Right: problem list */}
            <div className="flex flex-col gap-3 pt-1">
              {[
                { label: "Get manager sign-off", note: "Back-and-forth on every buyer contact" },
                { label: "Find the right buyer contact", note: "CRM is out of date; guessing titles" },
                { label: "Write personalized outreach", note: "Takes 20 minutes per deal" },
                { label: "Chase reps for context", note: "They've already moved on to the next deal" },
                { label: "Follow up when buyers don't respond", note: "Manually. Every time." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-[#E8E4DC] bg-background">
                  <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[9px] text-red-400 flex-shrink-0 mt-0.5">✕</span>
                  <div>
                    <div className="text-[14px] font-semibold text-navy">{item.label}</div>
                    <div className="text-[12px] text-body mt-0.5">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works — tabbed ────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono">How It Works</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy mb-12">
              Deal close to completed interview.<br />
              <span className="text-amber">Zero coordination.</span>
            </h2>

            {/* Tab strip */}
            <div className="flex mb-10 border-b border-[#E8E4DC]">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex-1 flex flex-col gap-1 px-5 py-4 text-left border-b-2 transition-all ${
                    activeStep === i
                      ? "border-amber"
                      : "border-transparent hover:border-[#E8E4DC]"
                  }`}
                >
                  <span className={`text-[11px] font-mono font-bold ${activeStep === i ? "text-amber" : "text-[#9999aa]"}`}>{step.num}</span>
                  <span className={`text-[13px] font-medium leading-snug ${activeStep === i ? "text-navy" : "text-body"}`}>{step.label}</span>
                </button>
              ))}
            </div>

            {/* Active step */}
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              <div>
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded mb-4 border border-[#E8E4DC] text-body">{steps[activeStep].surface}</span>
                <h3 className="text-[20px] font-bold text-navy leading-snug mb-4">{steps[activeStep].label}</h3>
                <p className="text-[15px] text-body leading-relaxed">{steps[activeStep].desc}</p>
              </div>
              <div className="w-full">
                {steps[activeStep].visual}
              </div>
            </div>
          </div>
        </section>

        {/* ── What makes it different — 3 cards ───────────────────── */}
        <section className="px-12 py-[100px] bg-card border-t border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono">What Makes It Different</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy mb-12">
              Not a survey tool.<br />
              <span className="text-amber">An automated program.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-background border border-[#E8E4DC] rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1A6FD4" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M3 5h14M3 10h10M3 15h7"/>
                    <circle cx="16" cy="14" r="3"/>
                    <path d="M16 13v1l1 1"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-navy mb-2">Built on deal context.</h3>
                <p className="text-[13px] text-body leading-relaxed">
                  The agent is fed full context from the Deal Review Agent before it sends anything. Questions are specific to that deal. Not a generic survey.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-background border border-[#E8E4DC] rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="2" y="3" width="16" height="14" rx="2"/>
                    <path d="M7 9l2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-navy mb-2">Approval workflow built in.</h3>
                <p className="text-[13px] text-body leading-relaxed">
                  Every buyer outreach requires one-click approval in Slack. You stay in control without doing any of the work.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-background border border-[#E8E4DC] rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="3,14 7,9 11,11 17,5"/>
                    <path d="M15 5h2v2"/>
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-navy mb-2">Response rates improve over time.</h3>
                <p className="text-[13px] text-body leading-relaxed">
                  The agent A/B tests email variants automatically. Subject lines, incentives, framing. Response rates climb as it learns what works for your buyers.
                </p>
              </div>
            </div>

            {/* A/B chart */}
            <ABTestingChart />
          </div>
        </section>

        {/* ── Social proof ─────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[22px] font-bold leading-[1.5] text-white mb-8">
                &ldquo;We get 50× to 100× more interviews using Hindsight, and insights on 100% of deals.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/customer_pictures/toby laforest.jpeg"
                  alt="Toby Laforest"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Toby Laforest</div>
                  <div className="text-xs text-white/50">Sr. Director of Market Insights — Ironclad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">Get Started</p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-navy mb-5 max-w-2xl mx-auto">
              See it running on your deals.
            </h2>
            <p className="text-[16px] text-body leading-relaxed mb-10 max-w-xl mx-auto">
              Connect your CRM and get your first automated interview within days. No setup fees. No manual scheduling.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-body text-sm border-b border-body/30 pb-px hover:text-navy transition-colors"
              >
                Read customer stories →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
