"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    num: "01",
    title: "Aggregate without trusting",
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
    title: "Trusted Deal Context for AI Agents",
    body: "Go from low-trust, low-context document chunks to clean, structured deal context. Allow your agents to find deep quantitative and qualitative deal insights via semantic search or structured queries via our APIs and MCP.",
  },
]

/* ─── Panel 01: Aggregate ─────────────────────────────────────────────────── */
function AggregatePanel() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Data Ingestion Layer
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-sm tracking-widest text-[#D4A843] bg-[#D4A843]/10"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {[
          { name: "Salesforce", records: "2,847 deals", dot: "#0070D2" },
          { name: "Gong", records: "41,293 calls", dot: "#FF4B00" },
          { name: "HubSpot", records: "1,204 contacts", dot: "#FF7A59" },
          { name: "Outreach", records: "8,341 sequences", dot: "#5951DD" },
        ].map((src) => (
          <div key={src.name} className="border border-[#E8E4DC] rounded-lg p-3.5 bg-[#FAFAF8]">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: src.dot }}
              />
              <span
                className="text-xs font-bold text-[#0F1F3D]"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {src.name}
              </span>
            </div>
            <div
              className="text-[11px] text-[#6B7280]"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {src.records}
            </div>
            <div
              className="text-[10px] text-[#D4A843] mt-1.5 tracking-widest"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              SYNCING ↓
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-3">
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-px h-5 bg-[#D4A843]/30" />
          <div className="text-[#D4A843]">↓</div>
        </div>
      </div>

      <div className="bg-[#0F1F3D] rounded-lg p-4 flex items-center justify-between">
        <div>
          <div
            className="text-white text-sm font-bold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hindsight
          </div>
          <div
            className="text-white/40 text-[11px] mt-0.5"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            ingesting · not trusting
          </div>
        </div>
        <div className="text-right">
          <div
            className="text-[#D4A843] text-sm font-bold"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            54,385
          </div>
          <div
            className="text-white/40 text-[10px]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            records queued
          </div>

          {/* Callout */}
          

        </div>
      </div>
    </div>
  )
}

/* ─── Panel 02: Verify ────────────────────────────────────────────────────── */
function VerifyPanel() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Deal Review Agent
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-sm bg-[#2A5C45] text-white tracking-widest"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          VERIFYING
        </span>
      </div>

      <div className="mb-4">
        <div
          className="text-[13px] font-bold text-[#0F1F3D]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Meridian Health — $240K ARR
        </div>
        <div
          className="text-[11px] text-[#6B7280] mt-0.5"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Closed lost · Q4 2025 · vs. Competitor A
        </div>
      </div>

      <div
        className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-2"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Sources compared
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-start gap-2 bg-[#FEF2F2] border border-red-100 rounded-lg p-3">
          <span
            className="text-[10px] font-bold text-[#EF4444] px-1.5 py-0.5 rounded bg-red-50 mt-0.5 shrink-0"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            CRM
          </span>
          <span
            className="text-sm text-[#9CA3AF] line-through"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Lost on pricing
          </span>
        </div>
        <div className="flex items-start gap-2 bg-[#F0FDF4] border border-green-100 rounded-lg p-3">
          <span
            className="text-[10px] font-bold text-[#16A34A] px-1.5 py-0.5 rounded bg-green-50 mt-0.5 shrink-0"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Gong
          </span>
          <span
            className="text-sm text-[#374151]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            "Integration with existing stack was the blocker"
          </span>
        </div>
        <div className="flex items-start gap-2 bg-[#F0FDF4] border border-green-100 rounded-lg p-3">
          <span
            className="text-[10px] font-bold text-[#16A34A] px-1.5 py-0.5 rounded bg-green-50 mt-0.5 shrink-0"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            Interview
          </span>
          <span
            className="text-sm text-[#374151]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            "Competitor had a native connector. We didn't."
          </span>
        </div>
      </div>

      <div className="bg-[#0F1F3D] rounded-lg p-3.5">
        <div
          className="text-[10px] text-white/40 mb-1"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          ✓ Resolved — 3 sources reviewed
        </div>
        <div
          className="text-sm text-white font-bold"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Integration gap vs. Competitor A
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#D4A843] rounded-full" style={{ width: "92%" }} />
          </div>
          <span
            className="text-[11px] text-[#D4A843]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            92%
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─── Panel 03: Win-Loss Interviews ──────────────────────────────────────── */
function InterviewPanel() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
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

      {/* Seller interview — Slack */}
      <div className="mb-4">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B7280] mb-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Seller interview · via Slack
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#0F1F3D] rounded-lg rounded-bl-sm px-3.5 py-3 max-w-[85%]">
            <div
              className="text-[11px] text-[#D4A843] mb-1"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              @Hindsight
            </div>
            <div
              className="text-[13px] text-white/90 leading-snug"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              You lost Meridian Health vs. Competitor A. Did the integration gap
              come up before the final call, or only at close?
            </div>
          </div>
          <div className="bg-[#F0FDF4] border border-green-100 rounded-lg rounded-br-sm px-3.5 py-3 max-w-[85%] self-end">
            <div
              className="text-[11px] text-[#16A34A] mb-1"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Rep · 14 min ago
            </div>
            <div
              className="text-[13px] text-[#374151] leading-snug"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              It was there from demo 1 actually. They kept asking about native
              connectors and we kept saying &ldquo;roadmap.&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Buyer interview — email */}
      <div className="border-t border-[#E8E4DC] pt-4">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B7280] mb-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Buyer interview · via email
        </div>
        <div className="bg-[#FAFAF8] border border-[#E8E4DC] rounded-lg px-3.5 py-3">
          <div className="flex justify-between items-start mb-2">
            <div
              className="text-[12px] font-bold text-[#0F1F3D]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Re: Quick question about your evaluation
            </div>
            <div
              className="text-[10px] text-[#6B7280]"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              2d ago
            </div>
          </div>
          <div
            className="text-[13px] text-[#374151] leading-snug italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;Honestly the native connector was the deciding factor. We
            needed it live in 30 days and the roadmap answer wasn&rsquo;t
            enough.&rdquo;
          </div>
          <div
            className="text-[11px] text-[#6B7280] mt-2"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            — VP of Engineering, Meridian Health
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Panel 04: Interface (MCP) ───────────────────────────────────────────── */
function InterfacePanel() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Hindsight MCP · Query Interface
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-sm bg-[#2A5C45] text-white tracking-widest"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          CONNECTED
        </span>
      </div>

      <div className="bg-[#0F1F3D] rounded-lg p-5 mb-4">
        <div
          className="text-xs text-white/40 mb-2"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          # Query verified deal intelligence
        </div>
        <div
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            lineHeight: "1.7",
          }}
        >
          <span className="text-sm text-[#D4A843]">hindsight.deals.search(&#123;</span>
          <br />
          <span className="text-sm text-white/70 pl-4">competitor: &quot;Competitor A&quot;,</span>
          <br />
          <span className="text-sm text-white/70 pl-4">outcome: &quot;lost&quot;,</span>
          <br />
          <span className="text-sm text-white/70 pl-4">verified_only: true</span>
          <br />
          <span className="text-sm text-[#D4A843]">&#125;)</span>
        </div>
      </div>

      <div
        className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-2"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Returns
      </div>
      <div className="flex flex-col gap-2">
        {[
          {
            key: "verified_loss_reason",
            val: "Integration gap — missing native connector (92% confidence)",
          },
          {
            key: "buyer_quote",
            val: '"Competitor had a native connector. We didn\'t." — Buyer interview, Jan 2026',
          },
          {
            key: "pattern_signal",
            val: "Integration cited in 41% of losses vs. Competitor A — up 18pts QoQ",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="bg-[#EAF4EF] border border-[rgba(42,92,69,0.15)] rounded-lg px-3.5 py-3"
          >
            <div
              className="text-[11px] text-[#2A5C45] mb-1"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {item.key}
            </div>
            <div
              className="text-sm text-[#374151]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {item.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const panels = [AggregatePanel, VerifyPanel, InterviewPanel, InterfacePanel]

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
              Aggregate. Verify. Enrich. Interface.
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
