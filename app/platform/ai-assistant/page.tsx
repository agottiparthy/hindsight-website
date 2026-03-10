"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// ── Chat interface hero visual ────────────────────────────────────────
function HeroChatVisual() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[#E8E4DC] shadow-[0_8px_40px_rgba(15,31,61,0.14)] bg-white text-[12px]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e8ec] bg-[#f7f7f8]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-[#555566]">AI Assistant · Deal Intelligence</span>
        </div>
        <span className="text-[10px] text-[#9999aa] font-mono">All deals · Q1 2025</span>
      </div>

      {/* Messages */}
      <div className="p-4 flex flex-col gap-4 bg-white">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-[#0F1F3D] text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-[12px] leading-relaxed">
            What are the top three reasons we lost enterprise deals last quarter? Break down by competitor.
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-3 items-start">
          <div className="w-7 h-7 rounded-full bg-[#0F1F3D] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 250 250" width={16} height={16}>
              <path d="M39.1406 54.5834C38.2656 51.1885 37.5 46.0414 37.5 43.1941V37.9375H98.4219C148.625 37.9375 160.547 38.266 165.469 39.5802C168.75 40.4563 174.656 42.7561 178.594 44.7273C183.188 47.027 188.438 50.9695 193.469 56.0071C198.281 60.8256 202.547 66.4108 205.062 71.3388C207.25 75.6098 209.875 81.9616 210.75 85.5755C212.062 90.2845 212.5 97.2933 212.5 110.435C212.5 120.619 212.172 128.833 211.734 128.833C211.188 128.723 209.328 126.643 207.469 124.124C205.609 121.605 201.016 117.115 197.078 114.268C193.25 111.311 187.344 107.916 184.062 106.602C178.375 104.412 175.531 104.193 134.297 103.536C97.875 102.988 89.4531 102.55 83.9844 101.017C80.375 99.9216 74.4688 97.6218 70.8594 95.6506C67.25 93.7889 60.7969 88.7513 56.5312 84.4803C51.1719 79.2237 47.5625 74.4052 44.7188 68.9296C42.5312 64.5491 40.0156 58.0878 39.1406 54.5834Z" fill="#379BFF"/>
              <path d="M39.25 138.141C38.2656 134.528 37.5 129.271 37.5 126.424V121.167H97.875C148.406 121.167 159.453 121.386 164.922 122.81C168.531 123.795 174.656 126.095 178.594 128.066C183.188 130.257 188.438 134.309 193.359 139.237C198.281 144.055 202.547 149.75 205.062 154.568C207.25 158.73 209.766 165.191 210.75 168.805C211.953 173.514 212.5 180.632 212.5 193.774C212.5 203.849 212.172 212.062 211.625 212.062C211.188 212.062 209.109 209.763 207.031 206.915C204.953 204.178 200.25 199.797 196.641 197.169C193.031 194.65 187.344 191.365 184.062 190.05C178.266 187.532 176.734 187.422 133.75 186.875C92.4062 186.217 89.0156 185.998 82.3438 183.808C78.4062 182.494 72.0625 179.647 68.2344 177.347C64.4062 175.047 58.2812 169.9 54.5625 165.958C50.9531 162.015 46.3594 155.663 44.3906 151.721C42.4219 147.888 40.125 141.755 39.25 138.141Z" fill="#81DBFD"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-[#111113] mb-1.5">Hindsight AI</p>
            <div className="text-[11px] text-[#444455] leading-relaxed mb-3">
              Analyzed <strong>83 enterprise deals</strong> closed Q1 2025. Here are the top three loss reasons:
            </div>
            {/* Results rows */}
            <div className="flex flex-col gap-1.5">
              {[
                { rank: "01", reason: "Integration gaps (Salesforce / QuickBooks)", pct: "38%", competitor: "Competitor A", color: "#7A2828", bg: "#FAEAEA" },
                { rank: "02", reason: "Pricing — deal size mismatch at late stage", pct: "27%", competitor: "Competitor B", color: "#92400E", bg: "#FEF3C7" },
                { rank: "03", reason: "Champion lost internal support", pct: "18%", competitor: "Multiple", color: "#334155", bg: "#F1F5F9" },
              ].map((r) => (
                <div key={r.rank} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e8e8ec] bg-[#fafafa]">
                  <span className="text-[10px] font-bold font-mono text-[#9999aa] w-4 flex-shrink-0">{r.rank}</span>
                  <span className="text-[11px] text-[#333344] flex-1 leading-snug">{r.reason}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: r.bg, color: r.color }}>{r.pct}</span>
                </div>
              ))}
            </div>
            {/* Citations */}
            <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
              {["Deal #3841", "Deal #3799", "Deal #3712", "+80 more"].map((c) => (
                <span key={c} className="text-[9px] font-mono bg-[#f0f0f5] border border-[#e0e0ea] text-[#7777aa] px-2 py-0.5 rounded">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex gap-3 items-start">
          <div className="w-7 h-7 rounded-full bg-[#0F1F3D] flex items-center justify-center flex-shrink-0 opacity-30">
            <svg viewBox="0 0 250 250" width={16} height={16}>
              <path d="M39.1406 54.5834C38.2656 51.1885 37.5 46.0414 37.5 43.1941V37.9375H98.4219C148.625 37.9375 160.547 38.266 165.469 39.5802C168.75 40.4563 174.656 42.7561 178.594 44.7273C183.188 47.027 188.438 50.9695 193.469 56.0071C198.281 60.8256 202.547 66.4108 205.062 71.3388C207.25 75.6098 209.875 81.9616 210.75 85.5755C212.062 90.2845 212.5 97.2933 212.5 110.435C212.5 120.619 212.172 128.833 211.734 128.833C211.188 128.723 209.328 126.643 207.469 124.124C205.609 121.605 201.016 117.115 197.078 114.268C193.25 111.311 187.344 107.916 184.062 106.602C178.375 104.412 175.531 104.193 134.297 103.536C97.875 102.988 89.4531 102.55 83.9844 101.017C80.375 99.9216 74.4688 97.6218 70.8594 95.6506C67.25 93.7889 60.7969 88.7513 56.5312 84.4803C51.1719 79.2237 47.5625 74.4052 44.7188 68.9296C42.5312 64.5491 40.0156 58.0878 39.1406 54.5834Z" fill="#379BFF"/>
              <path d="M39.25 138.141C38.2656 134.528 37.5 129.271 37.5 126.424V121.167H97.875C148.406 121.167 159.453 121.386 164.922 122.81C168.531 123.795 174.656 126.095 178.594 128.066C183.188 130.257 188.438 134.309 193.359 139.237C198.281 144.055 202.547 149.75 205.062 154.568C207.25 158.73 209.766 165.191 210.75 168.805C211.953 173.514 212.5 180.632 212.5 193.774C212.5 203.849 212.172 212.062 211.625 212.062C211.188 212.062 209.109 209.763 207.031 206.915C204.953 204.178 200.25 199.797 196.641 197.169C193.031 194.65 187.344 191.365 184.062 190.05C178.266 187.532 176.734 187.422 133.75 186.875C92.4062 186.217 89.0156 185.998 82.3438 183.808C78.4062 182.494 72.0625 179.647 68.2344 177.347C64.4062 175.047 58.2812 169.9 54.5625 165.958C50.9531 162.015 46.3594 155.663 44.3906 151.721C42.4219 147.888 40.125 141.755 39.25 138.141Z" fill="#81DBFD"/>
            </svg>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tl-sm bg-[#f2f2f5] border border-[#e0e0ea]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9999aa] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#9999aa] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#9999aa] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t border-[#e8e8ec] bg-[#fafafa]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e0e0ea] bg-white">
          <span className="text-[11px] text-[#9999aa] flex-1">Ask a follow-up question…</span>
          <span className="text-[10px] bg-[#0F1F3D] text-white px-2 py-0.5 rounded">↵</span>
        </div>
      </div>
    </div>
  )
}

// ── Qualitative chat visual ────────────────────────────────────────────
function QualChatVisual() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[#E8E4DC] bg-white text-[12px] shadow-[0_4px_24px_rgba(15,31,61,0.10)]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#e8e8ec] bg-[#f7f7f8]">
        <span className="text-[11px] font-semibold text-[#555566]">AI Assistant</span>
        <span className="text-[9px] font-mono text-[#9999aa] uppercase tracking-wider">Find &amp; Synthesize</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {/* User bubble */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-[#0F1F3D] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-[11px] leading-relaxed">
            Summarize how we won the Acme Corp deal against Competitor A. What messaging resonated most?
          </div>
        </div>
        {/* AI answer */}
        <div className="flex gap-2.5 items-start">
          <div className="w-6 h-6 rounded-full bg-[#0F1F3D] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 250 250" width={14} height={14}>
              <path d="M39.1406 54.5834C38.2656 51.1885 37.5 46.0414 37.5 43.1941V37.9375H98.4219C148.625 37.9375 160.547 38.266 165.469 39.5802C168.75 40.4563 174.656 42.7561 178.594 44.7273C183.188 47.027 188.438 50.9695 193.469 56.0071C198.281 60.8256 202.547 66.4108 205.062 71.3388C207.25 75.6098 209.875 81.9616 210.75 85.5755C212.062 90.2845 212.5 97.2933 212.5 110.435C212.5 120.619 212.172 128.833 211.734 128.833C211.188 128.723 209.328 126.643 207.469 124.124C205.609 121.605 201.016 117.115 197.078 114.268C193.25 111.311 187.344 107.916 184.062 106.602C178.375 104.412 175.531 104.193 134.297 103.536C97.875 102.988 89.4531 102.55 83.9844 101.017C80.375 99.9216 74.4688 97.6218 70.8594 95.6506C67.25 93.7889 60.7969 88.7513 56.5312 84.4803C51.1719 79.2237 47.5625 74.4052 44.7188 68.9296C42.5312 64.5491 40.0156 58.0878 39.1406 54.5834Z" fill="#379BFF"/>
              <path d="M39.25 138.141C38.2656 134.528 37.5 129.271 37.5 126.424V121.167H97.875C148.406 121.167 159.453 121.386 164.922 122.81C168.531 123.795 174.656 126.095 178.594 128.066C183.188 130.257 188.438 134.309 193.359 139.237C198.281 144.055 202.547 149.75 205.062 154.568C207.25 158.73 209.766 165.191 210.75 168.805C211.953 173.514 212.5 180.632 212.5 193.774C212.5 203.849 212.172 212.062 211.625 212.062C211.188 212.062 209.109 209.763 207.031 206.915C204.953 204.178 200.25 199.797 196.641 197.169C193.031 194.65 187.344 191.365 184.062 190.05C178.266 187.532 176.734 187.422 133.75 186.875C92.4062 186.217 89.0156 185.998 82.3438 183.808C78.4062 182.494 72.0625 179.647 68.2344 177.347C64.4062 175.047 58.2812 169.9 54.5625 165.958C50.9531 162.015 46.3594 155.663 44.3906 151.721C42.4219 147.888 40.125 141.755 39.25 138.141Z" fill="#81DBFD"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-[#111113] mb-1">Hindsight AI</div>
            <div className="text-[11px] text-[#444455] leading-relaxed mb-2">
              The win came down to <strong>time-to-value messaging</strong> and our native CRM integration. Three themes stood out across 4 calls and 6 emails:
            </div>
            <div className="flex flex-col gap-1">
              {[
                { tag: "Messaging", text: "\"Deployed in a day\" — mentioned twice by champion in final call" },
                { tag: "Competitor A gap", text: "Buyer raised Competitor A's slow implementation 3 times." },
                { tag: "Decision maker", text: "CTO signed off after seeing the Salesforce integration demo." },
              ].map((item) => (
                <div key={item.tag} className="flex gap-2 items-start text-[10px] px-2.5 py-1.5 rounded-lg bg-[#f4f4f8] border border-[#e8e8ec]">
                  <span className="font-bold text-[#379BFF] flex-shrink-0">{item.tag}</span>
                  <span className="text-[#555566] leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-1 flex-wrap">
              {["Acme call 3", "Acme proposal email", "CTO demo notes"].map((c) => (
                <span key={c} className="text-[9px] font-mono bg-[#f0f0f5] border border-[#e0e0ea] text-[#7777aa] px-2 py-0.5 rounded">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Scorecard mini bars ───────────────────────────────────────────────
function ScorecardBars({ segments }: { segments: { color: string; h: number }[] }) {
  return (
    <div className="flex items-end gap-[2px] h-[18px]">
      {segments.map((s, i) => (
        <div key={i} className="w-[4px] rounded-sm flex-shrink-0" style={{ height: s.h, background: s.color }} />
      ))}
    </div>
  )
}

// ── Competitor badge ──────────────────────────────────────────────────
function CompBadge({ type }: { type: "H" | "k" | "dot" }) {
  if (type === "dot") return <span className="w-4 h-4 rounded-full bg-[#379BFF] flex-shrink-0 inline-block" />
  return (
    <span className="w-4 h-4 rounded bg-[#1a1a2e] flex items-center justify-center flex-shrink-0 text-[8px] font-bold text-white">
      {type}
    </span>
  )
}

// ── Driver bar ────────────────────────────────────────────────────────
function DriverBar({ won }: { won: boolean; partial?: boolean }) {
  return (
    <div className="w-full h-[6px] rounded-full overflow-hidden bg-[#f0f0f5]">
      <div
        className="h-full rounded-full"
        style={{
          width: won ? "100%" : "60%",
          background: won ? "#22c55e" : "#f87171",
        }}
      />
    </div>
  )
}

const dealRows = [
  { name: "Zoozzy Deal",         comps: ["H"] as const,          won: true,  feature: "Deal Reviews (1)",          amount: "$6K",   date: "Mar 01, 2026", scoreSegs: [{color:"#22c55e",h:14},{color:"#f59e0b",h:10},{color:"#ef4444",h:6},{color:"#8b5cf6",h:12},{color:"#3b82f6",h:8}] },
  { name: "Logitech - New Deal",  comps: ["k"] as const,          won: false, feature: "Integrations (2)  +2",       amount: "$4K",   date: "Mar 01, 2026", scoreSegs: [{color:"#22c55e",h:6},{color:"#f59e0b",h:14},{color:"#ef4444",h:10},{color:"#8b5cf6",h:8},{color:"#3b82f6",h:12}] },
  { name: "Rubrik - New Deal",    comps: ["k"] as const,          won: false, feature: "Comp. Monitoring (1)  +3",   amount: "$4K",   date: "Feb 28, 2026", scoreSegs: [{color:"#22c55e",h:8},{color:"#f59e0b",h:6},{color:"#ef4444",h:14},{color:"#8b5cf6",h:10},{color:"#3b82f6",h:6}] },
  { name: "Segment - Upsell",     comps: ["k"] as const,          won: false, feature: "Deal Reviews (2)  +1",       amount: "$24K",  date: "Feb 28, 2026", scoreSegs: [{color:"#22c55e",h:10},{color:"#f59e0b",h:8},{color:"#ef4444",h:8},{color:"#8b5cf6",h:14},{color:"#3b82f6",h:10}] },
  { name: "Realcube Deal",        comps: [] as const,             won: true,  feature: "Integrations (2)  +1",       amount: "$6K",   date: "Feb 28, 2026", scoreSegs: [{color:"#22c55e",h:14},{color:"#f59e0b",h:12},{color:"#ef4444",h:6},{color:"#8b5cf6",h:8},{color:"#3b82f6",h:10}] },
  { name: "Okta - Renewals",      comps: ["dot","k"] as const,    won: true,  feature: "Comp. Enablement (1)  +1",   amount: "$24K",  date: "Feb 27, 2026", scoreSegs: [{color:"#22c55e",h:12},{color:"#f59e0b",h:14},{color:"#ef4444",h:8},{color:"#8b5cf6",h:6},{color:"#3b82f6",h:14}] },
  { name: "Databricks - Upsell",  comps: ["dot"] as const,        won: false, feature: "Integrations (2)",           amount: "$88K",  date: "Feb 27, 2026", scoreSegs: [{color:"#22c55e",h:6},{color:"#f59e0b",h:10},{color:"#ef4444",h:14},{color:"#8b5cf6",h:12},{color:"#3b82f6",h:8}] },
  { name: "Atlassian - Renewal",  comps: ["H","k"] as const,      won: false, feature: "Integrations (2)  +1",       amount: "$125K", date: "Feb 27, 2026", scoreSegs: [{color:"#22c55e",h:8},{color:"#f59e0b",h:12},{color:"#ef4444",h:10},{color:"#8b5cf6",h:6},{color:"#3b82f6",h:14}] },
]

// ── Quantitative analysis visual ──────────────────────────────────────
function QuantAnalysisVisual() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[#d8d8e4] bg-white shadow-[0_8px_32px_rgba(15,31,61,0.12)]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Modal header */}
      <div className="px-5 pt-5 pb-3 border-b border-[#e8e8ec]">
        <div className="flex items-start justify-between mb-1">
          <span className="text-[14px] font-bold text-[#111113]">Build Deal Dataset</span>
          <span className="text-[#9999aa] text-[14px] leading-none cursor-pointer mt-0.5">×</span>
        </div>
        <p className="text-[10px] text-[#888899] leading-snug max-w-[420px]">
          Create a dataset for quantitative analysis—counts, percentages, trends, and comparisons. The Data Analyst will analyze your data and generate insights.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#e8e8ec]">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#e0e0ea] bg-[#fafafa] min-w-[140px]">
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#9999aa] flex-shrink-0">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[10px] text-[#aaaabc]">Search deals</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#e0e0ea] text-[10px] font-medium text-[#555566] bg-white">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Filters
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#e0e0ea] text-[10px] font-medium text-[#555566] bg-white">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
            Columns ∨
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        {/* Header */}
        <div className="grid gap-x-4 items-center px-5 py-2 border-b border-[#e8e8ec] bg-[#fafafa]" style={{ gridTemplateColumns: "16px 1fr 52px 72px 140px 52px 72px 50px 80px" }}>
          <div className="w-3 h-3" />
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0 truncate">Name</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Comp.</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Drivers</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Features</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Score</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Stage</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Amt</div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#9999aa] min-w-0">Date</div>
        </div>

        {/* Rows */}
        {dealRows.map((row, i) => (
          <div
            key={row.name}
            className="grid gap-x-4 items-center px-5 py-2 border-b border-[#f0f0f5] last:border-0"
            style={{ gridTemplateColumns: "16px 1fr 52px 72px 140px 52px 72px 50px 80px" }}
          >
            {/* Checkbox */}
            <div className="w-3 h-3 rounded border border-[#d0d0dc] flex-shrink-0" />
            {/* Name */}
            <span className="text-[10px] font-medium text-[#1a1a2e] truncate pr-2">{row.name}</span>
            {/* Competitors */}
            <div className="flex items-center gap-1">
              {(row.comps as unknown as string[]).map((c, ci) => (
                <CompBadge key={ci} type={c as "H" | "k" | "dot"} />
              ))}
            </div>
            {/* Drivers */}
            <DriverBar won={row.won} />
            {/* Features */}
            <span className="text-[9px] text-[#555566] truncate">{row.feature}</span>
            {/* Scorecard */}
            <ScorecardBars segments={row.scoreSegs} />
            {/* Stage */}
            <div className="flex items-center gap-1">
              {row.won ? (
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/><path d="M10 6l-4 4M6 6l4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
              )}
              <span className={`text-[9px] font-medium ${row.won ? "text-emerald-600" : "text-red-500"}`}>
                {row.won ? "Won" : "Lost"}
              </span>
            </div>
            {/* Amount */}
            <span className="text-[9px] font-mono text-[#555566]">{row.amount}</span>
            {/* Date */}
            <span className="text-[9px] text-[#9999aa]">{row.date}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-[#e8e8ec] bg-[#fafafa]">
        <span className="text-[9px] text-[#9999aa]">Showing 1–50 of 53 deals</span>
        <div className="flex items-center gap-2">
          <button className="text-[10px] text-[#555566] border border-[#d8d8e4] bg-white px-3 py-1.5 rounded-md">
            Cancel
          </button>
          <button className="text-[10px] font-bold text-white bg-[#0F1F3D] px-3 py-1.5 rounded-md">
            Use This Dataset
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Use case cards data ────────────────────────────────────────────────
const useCases = [
  {
    tag: "Competitive",
    accentClass: "bg-blue-100 text-blue-800",
    query: "Generate a battlecard for Competitor X. Use wins from the last quarter and include top objections and how we beat them.",
    body: "Battlecards, positioning analysis, win rate by competitor. Built from what actually closed deals.",
  },
  {
    tag: "Win-Loss",
    accentClass: "bg-amber-100 text-amber-800",
    query: "What are the top three reasons we lost deals in enterprise last quarter? Break down by competitor.",
    body: "Loss reason analysis, deal patterns, trend breakdowns. Across every deal, not a sample.",
  },
  {
    tag: "Product",
    accentClass: "bg-emerald-100 text-emerald-800",
    query: "Find deals lost due to reporting limitations. Quantify the pipeline impact and summarize buyer feedback for the product team.",
    body: "Feature gap reports, buyer feedback summaries, roadmap inputs. Straight from buyer conversations.",
  },
]

// ── Output card data ───────────────────────────────────────────────────
const outputs = [
  {
    icon: "⊞",
    title: "Battlecard",
    body: "Competitor positioning, top objections, best responses, win rate. Built from closed deals. Updated every time you ask.",
    tags: ["Competitor analysis", "Win rate", "Objection handling"],
    badgeClass: "bg-blue-100 text-blue-800",
  },
  {
    icon: "⊟",
    title: "Loss reason breakdown",
    body: "Top loss reasons by competitor, segment, and deal size. Quantified by pipeline value. Cited from deal records.",
    tags: ["By segment", "Pipeline value", "Deal citations"],
    badgeClass: "bg-amber-100 text-amber-800",
  },
  {
    icon: "≋",
    title: "Product gap report",
    body: "Feature gaps mentioned across closed lost deals. Ranked by pipeline impact. Formatted for the product team.",
    tags: ["Feature gaps", "Pipeline impact", "Buyer verbatims"],
    badgeClass: "bg-emerald-100 text-emerald-800",
  },
]

// ── Page ──────────────────────────────────────────────────────────────
export default function AIAssistantPage() {
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
                AI Assistant
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                Ask anything about your deals.{" "}
                <em className="italic text-amber">Get verified answers.</em>
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Most teams spend hours searching Gong, exporting CRM data, and piecing together analysis manually. Hindsight&apos;s AI Assistant does it in seconds, grounded in verified deal intelligence from every closed deal.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/request-demo"
                  className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/platform"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
                >
                  See it in action →
                </Link>
              </div>
            </div>
            <div className="w-full">
              <HeroChatVisual />
            </div>
          </div>
        </section>

        {/* ── Ask about anything ───────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Example Queries
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy max-w-xl">
                Ask about anything that touches a deal.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div key={uc.tag} className="bg-card border border-[#E8E4DC] rounded-xl p-6 flex flex-col gap-4">
                  <span className={`self-start text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${uc.accentClass}`}>
                    {uc.tag}
                  </span>
                  {/* Chat bubble */}
                  <div className="bg-[#0F1F3D] rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-[12px] text-white/90 leading-relaxed italic">
                      &ldquo;{uc.query}&rdquo;
                    </p>
                  </div>
                  <p className="text-[13px] text-body leading-relaxed flex-1">
                    {uc.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Two ways to get answers ──────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                How It Works
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
                Two ways to get answers.
              </h2>
            </div>

            <div className="flex flex-col gap-16">

              {/* Find and synthesize */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] font-mono bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Qualitative</span>
                  </div>
                  <h3 className="text-[clamp(22px,2.5vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] text-navy mb-4">
                    Find and synthesize.
                  </h3>
                  <p className="text-[15px] text-body leading-relaxed mb-5">
                    Ask qualitative questions about specific deals, competitors, or themes. The assistant searches across deals, finds the right context, and synthesizes it into a clear answer with citations.
                  </p>
                  <div className="border-l-[3px] border-amber pl-4">
                    <p className="text-[13px] text-navy/70 italic leading-relaxed">
                      &ldquo;Summarize how we won the Acme Corp deal against Competitor A. What messaging resonated most?&rdquo;
                    </p>
                  </div>
                </div>
                <QualChatVisual />
              </div>

              {/* Segment and analyze */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] font-mono bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Quantitative</span>
                  </div>
                  <h3 className="text-[clamp(22px,2.5vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] text-navy mb-4">
                    Segment and analyze.
                  </h3>
                  <p className="text-[15px] text-body leading-relaxed mb-5">
                    Ask quantitative questions across your entire deal history. The assistant filters, segments, charts, and analyzes without a 25 deal limit. No SQL. No exports.
                  </p>
                  <div className="border-l-[3px] border-amber pl-4">
                    <p className="text-[13px] text-navy/70 italic leading-relaxed">
                      &ldquo;Break down win rate by segment, competitor, and deal size for Q1. Show me where we are losing ground.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="md:order-1">
                  <QuantAnalysisVisual />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── What the output looks like ───────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                The Output
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
                What the output looks like.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outputs.map((o) => (
                <div key={o.title} className="bg-card border border-[#E8E4DC] rounded-xl p-6 flex flex-col gap-3">
                  <span className="text-[22px] text-navy/40">{o.icon}</span>
                  <h3 className="text-[15px] font-bold text-navy">{o.title}</h3>
                  <p className="text-[13px] text-body leading-relaxed flex-1">{o.body}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {o.tags.map((t) => (
                      <span key={t} className={`text-[10px] font-bold uppercase tracking-[0.08em] font-mono rounded-full px-2.5 py-1 ${o.badgeClass}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-9 max-w-2xl mx-auto">
              Your deals know more than you think.
            </h2>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="/platform"
                className="text-white/60 text-sm border-b border-white/30 pb-px hover:text-white transition-colors"
              >
                Explore the recipe library →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
