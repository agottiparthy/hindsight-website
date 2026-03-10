import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { DealReportStatic } from "@/components/ui/deal-report-static"

const investigations = [
  {
    icon: "◈",
    title: "Decision Drivers",
    body: "What actually moved the buyer's decision. Each driver labeled, explained, and scored. No more one-word loss reasons.",
    tags: ["Influence score", "Confidence score", "Evidence chain"],
    badgeClass: "bg-amber-100 text-amber-800",
  },
  {
    icon: "⊕",
    title: "Competitors",
    body: "Every competitor that touched the deal and how you did. Tagged by type: incumbent, primary, secondary. Tagged by outcome: selected, evaluated, mentioned.",
    tags: ["Type tagging", "Outcome tagging", "Confidence score"],
    badgeClass: "bg-rose-100 text-rose-700",
  },
  {
    icon: "◻",
    title: "Features",
    body: "Features that impacted the decision. Labeled by type: gap, request, love, confusion, competitive comparison. Great for product roadmapping.",
    tags: ["Gap / Request / Love", "Sentiment scored", "Citations"],
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "▣",
    title: "Deal Metrics",
    body: "Multi-demnsional scorecard across product fit, competitive position, pricing fit, sales execution, relationship, and more. Tied to your rubrics.",
    tags: ["6 dimensions", "Score explanations", "Cited sources"],
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: "≡",
    title: "Exec Summary",
    body: "One clean narrative that ties it all together. The full deal story in plain language — what happened, why, and what would have changed the outcome.",
    tags: ["Plain language", "Full narrative", "Actionable conclusions"],
    badgeClass: "bg-violet-100 text-violet-700",
  },
  {
    icon: "⌘",
    title: "Custom Answers",
    body: "Any prompt you want to run, any output schema. Ask it to score a deal against your own rubric, extract a specific fact, or fill a field your team cares about. Maps directly to CRM fields on close.",
    tags: ["Any prompt", "Any schema", "CRM field mapping"],
    badgeClass: "bg-slate-100 text-slate-700",
  },
]

export default function DealReviewAgentPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Deal Review Agent
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                Every closed deal investigated.{" "}
                <em className="italic text-amber">Automatically.</em>
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Most deal reviews never happen. The Deal Review Agent runs on every closed deal, the moment it closes. It pulls every signal, resolves contradictions, and tells you what actually happened.
              </p>
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
            <div className="w-full rounded-xl overflow-hidden" style={{ height: 420 }}>
              <DealReviewCard />
            </div>
          </div>
        </section>

        {/* ── How It's Different ───────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[760px] mx-auto flex flex-col gap-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber font-mono">
              How It&apos;s Different
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
              Not a summary.{" "}<br />
              <span className="text-amber">An investigation.</span>
            </h2>

            {/* Single callout */}
            <p className="text-[16px] font-semibold text-navy/80 leading-relaxed border-l-[3px] border-amber pl-4">
              There is a difference between an AI that reads your CRM and one that questions it.
            </p>

            {/* Reasoning thread */}
            <div className="rounded-xl border border-[#E8E4DC] overflow-hidden text-[12px] font-mono">
              {/* Root claim */}
              <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-[#E8E4DC]">
                <Image src="/integration_logos/salesforce logo.png" alt="Salesforce" width={18} height={18} className="flex-shrink-0 object-contain" />
                <span className="text-navy font-bold">Loss reason: Pricing</span>
              </div>
              {/* Step 1 */}
              <div className="flex items-start gap-2 px-4 py-3 border-b border-[#E8E4DC]">
                <span className="text-amber font-bold mt-px flex-shrink-0">↳</span>
                <span className="text-body flex-1">Agent searches transcripts and emails. Finds no pricing mentions.</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 mt-px" style={{ background: "#fce7e7", color: "#b91c1c" }}>CONTRADICTS</span>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-2 px-4 py-3 border-b border-[#E8E4DC]">
                <span className="text-amber font-bold mt-px flex-shrink-0">↳</span>
                <span className="text-body flex-1 flex items-center gap-2">
                  Looks for other loss drivers. Finds 3 references to a missing integration.
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 mt-px" style={{ background: "#dcfce7", color: "#15803d" }}>CORROBORATES</span>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-2 px-4 py-3">
                <span className="text-amber font-bold mt-px flex-shrink-0">↳</span>
                <span className="text-body flex-1">Confidence: Low. Kicking off buyer interview.</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 mt-px" style={{ background: "#fef3c7", color: "#92400e" }}>INTERVIEW ↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── What it investigates ─────────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">

            {/* Header */}
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono">
                What It Investigates
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-3">
                On every deal. Every time. Without being asked.
              </h2>
            </div>

            {/* Full-width deal report */}
            <div className="w-full mb-10">
              <DealReportStatic />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {investigations.map((inv) => (
                <div key={inv.title} className="bg-background border border-[#E8E4DC] rounded-xl p-6 flex flex-col gap-3">
                  <h3 className="text-[15px] font-bold text-navy">{inv.title}</h3>
                  <p className="text-[13px] text-body leading-relaxed flex-1">{inv.body}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {inv.tags.map((t) => (
                      <span key={t} className={`text-[10px] font-bold uppercase tracking-[0.08em] font-mono rounded-full px-2.5 py-1 ${inv.badgeClass}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Reasoning chain ──────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Reasoning Chain
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-6">
                Every conclusion is verifiable.
              </h2>
              <p className="text-[15px] text-body leading-relaxed mb-4">
                See exactly what was checked, what was found, and how confident the agent is. Low confidence triggers the Win-Loss Interview Agent automatically.
              </p>
            </div>

            {/* Thread visual — matches DealReviewCard styling */}
            <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DC] bg-background">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Reasoning Thread · Deal #2847
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded" style={{ background: "#FAEAEA", color: "#7A2828", fontFamily: "Arial, sans-serif" }}>
                  ⚠ Contradiction
                </span>
              </div>

              {/* Steps */}
              <div className="px-6 py-5 flex flex-col gap-5">

                {/* Turn 1 */}
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold text-[#0F1F3D] leading-snug" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Checking loss reason</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "Arial, sans-serif" }}>Checking</span>
                    </div>
                    <p className="text-[11px] leading-relaxed mt-0.5 text-[#6B7280]" style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}>
                      CRM field: &ldquo;Loss reason: Pricing&rdquo;
                    </p>
                  </div>
                </div>

                {/* Turn 2 */}
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <span className="text-[13px] text-[#7A2828]">⚑</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold text-[#7A2828] leading-snug" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Cross-referencing sources</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: "#FAEAEA", color: "#7A2828", fontFamily: "Arial, sans-serif" }}>Contradicts</span>
                    </div>
                    <p className="text-[11px] leading-relaxed mt-0.5 text-[#7A2828]/80" style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}>
                      3 calls reviewed. Pricing: 1 mention. Email negotiation: none.
                    </p>
                  </div>
                </div>

                {/* Turn 3 */}
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold text-[#0F1F3D] leading-snug" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Searching for true driver</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: "#DCFCE7", color: "#15803D", fontFamily: "Arial, sans-serif" }}>Corroborates</span>
                    </div>
                    <p className="text-[11px] leading-relaxed mt-0.5 text-[#6B7280]" style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}>
                      QuickBooks integration gap: 6× across 3 calls.
                    </p>
                  </div>
                </div>

                {/* Verdict */}
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <span className="text-[13px] text-[#2A5C45]">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold text-[#2A5C45] leading-snug" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Resolved &amp; Verified</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: "#FEF3C7", color: "#92400E", fontFamily: "Arial, sans-serif" }}>Interview ↗</span>
                    </div>
                    <p className="text-[11px] leading-relaxed mt-0.5 text-[#2A5C45]/80" style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}>
                      Pricing: LOW · Integration gap: HIGH · Buyer interview triggered
                    </p>
                    {/* Confidence bar */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] uppercase tracking-[0.08em] text-[#6B7280]" style={{ fontFamily: "Arial, sans-serif" }}>Confidence</span>
                      <div className="flex-1 h-1 bg-[#E8E4DC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#2A5C45] rounded-full" style={{ width: "92%" }} />
                      </div>
                      <span className="text-[11px] font-bold text-[#2A5C45] tabular-nums" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>92%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── The output every team can use ────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">The Output</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-12 max-w-xl">
              The output every team can use.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* For your team */}
              <div className="border border-white/10 rounded-xl p-7 bg-white/[0.04]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 text-white/70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Document outline */}
                  <rect x="8" y="4" width="28" height="36" rx="2" />
                  <path d="M32 4v8h4" strokeWidth="1.5" />
                  {/* Exec summary line */}
                  <line x1="13" y1="18" x2="31" y2="18" />
                  <line x1="13" y1="22" x2="28" y2="22" />
                  {/* Mini bar chart */}
                  <rect x="13" y="30" width="4" height="6" rx="0.5" />
                  <rect x="19" y="27" width="4" height="9" rx="0.5" />
                  <rect x="25" y="32" width="4" height="4" rx="0.5" />
                </svg>
                <p className="text-[16px] font-bold text-white mb-2">For your team</p>
                <p className="text-[14px] text-white/60 leading-relaxed">A deal report with every driver, competitor, feature, and metric in one view.</p>
              </div>

              {/* For your dashboards */}
              <div className="border border-white/10 rounded-xl p-7 bg-white/[0.04]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 text-white/70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Table outer */}
                  <rect x="4" y="8" width="40" height="32" rx="2" />
                  {/* Header row */}
                  <line x1="4" y1="16" x2="44" y2="16" />
                  {/* Column dividers */}
                  <line x1="18" y1="8" x2="18" y2="40" />
                  <line x1="32" y1="8" x2="32" y2="40" />
                  {/* Row dividers */}
                  <line x1="4" y1="24" x2="44" y2="24" />
                  <line x1="4" y1="32" x2="44" y2="32" />
                  {/* Dot values in cells */}
                  <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="25" cy="12" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="38" cy="12" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <p className="text-[16px] font-bold text-white mb-2">For your dashboards</p>
                <p className="text-[14px] text-white/60 leading-relaxed">Structured fields mapped to your labels. Feeds tabular data and metrics automatically.</p>
              </div>

              {/* For your AI tools */}
              <div className="border border-white/10 rounded-xl p-7 bg-white/[0.04]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 text-white/70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Terminal window */}
                  <rect x="4" y="6" width="40" height="36" rx="3" />
                  <line x1="4" y1="14" x2="44" y2="14" />
                  {/* Traffic dots */}
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="22" cy="10" r="1.5" fill="currentColor" stroke="none" />
                  {/* Code lines */}
                  <path d="M14 22 l-4 3 4 3" strokeLinecap="round" />
                  <path d="M26 22 l4 3-4 3" strokeLinecap="round" />
                  <line x1="16" y1="32" x2="22" y2="20" />
                </svg>
                <p className="text-[16px] font-bold text-white mb-2">For your AI tools</p>
                <p className="text-[14px] text-white/60 leading-relaxed">A verified markdown deal record. Clean inputs for every workflow built on top.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built for your workflow ──────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">Customization</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-12">
              Built for your workflow. Not ours.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Custom fields — scoring rubric graphic */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                {/* Graphic */}
                <div className="border-b border-[#E8E4DC] p-5 bg-background">
                  <div className="rounded-lg border border-[#E8E4DC] overflow-hidden bg-card text-[11px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {/* Modal header */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E8E4DC] bg-background">
                      <span className="font-bold text-navy text-[12px]">Sales Execution</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: "#EDE9FE", color: "#5B21B6" }}>Metric</span>
                    </div>
                    {/* Scoring rows */}
                    {[
                      { n: "1", label: "Lowest",  desc: "Missed key opportunities, poor communication",    bg: "#FAEAEA", text: "#7A2828" },
                      { n: "3", label: "Average",  desc: "Met basic expectations, standard process",         bg: "#F1F5F9", text: "#334155" },
                      { n: "5", label: "Highest", desc: "Exceptional process, perfect timing",              bg: "#DCFCE7", text: "#15803D" },
                    ].map((row) => (
                      <div key={row.n} className="flex items-start gap-3 px-4 py-2.5 border-b border-[#E8E4DC] last:border-0">
                        <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-px" style={{ background: row.bg, color: row.text }}>{row.n}</span>
                        <div>
                          <p className="font-bold text-navy text-[10px] mb-0.5">{row.label}</p>
                          <p className="text-[#6B7280] text-[10px] leading-snug">{row.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Copy */}
                <div className="p-8">
                  <p className="text-[16px] font-bold text-navy mb-2">Custom fields</p>
                  <p className="text-[14px] text-body leading-relaxed">Fill CRM dispositions, tag personas, score deals against your own rubrics. Any field, any schema.</p>
                </div>
              </div>

              {/* Your labels — taxonomy table graphic */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                {/* Graphic */}
                <div className="border-b border-[#E8E4DC] p-5 bg-background">
                  <div className="rounded-lg border border-[#E8E4DC] overflow-hidden bg-card text-[11px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-2 border-b border-[#E8E4DC] bg-background">
                      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">Feature</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">Label</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">Area</span>
                    </div>
                    {/* Table rows */}
                    {[
                      { feature: "QuickBooks Integration", label: "Gap",     labelColor: { bg: "#FAEAEA", text: "#7A2828" }, area: "Integrations" },
                      { feature: "Service Workflow Auto.", label: "Love",    labelColor: { bg: "#DCFCE7", text: "#15803D" }, area: "Core Product" },
                      { feature: "Job & Project Mgmt",     label: "Request", labelColor: { bg: "#FEF3C7", text: "#92400E" }, area: "Core Product" },
                      { feature: "Data Migration",          label: "Gap",     labelColor: { bg: "#FAEAEA", text: "#7A2828" }, area: "Onboarding" },
                    ].map((row) => (
                      <div key={row.feature} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-4 py-2.5 border-b border-[#E8E4DC] last:border-0">
                        <span className="text-[11px] font-medium text-navy truncate">{row.feature}</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: row.labelColor.bg, color: row.labelColor.text }}>{row.label}</span>
                        <span className="text-[10px] text-[#6B7280] flex-shrink-0">{row.area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Copy */}
                <div className="p-8">
                  <p className="text-[16px] font-bold text-navy mb-2">Your labels</p>
                  <p className="text-[14px] text-body leading-relaxed">Map competitors, drivers, and features to your own taxonomy. The agent learns your language.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-9 max-w-2xl mx-auto">
              Every deal reviewed. Every contradiction resolved.
            </h2>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-white/60 text-sm border-b border-white/30 pb-px hover:text-white transition-colors"
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
