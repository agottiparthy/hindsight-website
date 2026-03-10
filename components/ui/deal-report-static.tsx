import React from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXEC_SUMMARY =
  "Meridian Health selected Frontline by Ormandy over Hindsight despite an active evaluation. The $240K ARR deal was lost primarily due to a perceived integration gap with their existing QuickBooks Online setup and concerns about migration risk. The rep marked loss reason as 'pricing' in Salesforce — buyer interviews revealed integration confidence was the real driver."

const DECISION_DRIVERS = [
  {
    label: "Integration Confidence",
    pct: 38,
    color: "#EF4444",
    explanation: "Buyer cited the absence of a native QuickBooks connector as the deciding factor. Three separate calls referenced it unprompted.",
  },
  {
    label: "Migration Risk",
    pct: 24,
    color: "#F59E0B",
    explanation: "Champion flagged the complexity of migrating existing job history. No migration playbook was presented during evaluation.",
  },
  {
    label: "Incumbent Relationship",
    pct: 20,
    color: "#7C3AED",
    explanation: "Ormandy had a two-year relationship with the IT lead. Switching cost was perceived as high even before the demo.",
  },
  {
    label: "Pricing",
    pct: 10,
    color: "#1A6FD4",
    explanation: "Mentioned once in email. CRM recorded this as the primary loss reason — interviews do not support that conclusion.",
  },
  {
    label: "Other",
    pct: 8,
    color: "#E5E7EB",
    explanation: "Timeline pressure and procurement cycle length contributed marginally.",
  },
]

const SCORECARD = [
  { label: "Product Fit",           score: 3, color: "#1A6FD4" },
  { label: "Sales Execution",       score: 2, color: "#22C55E" },
  { label: "Relationship Strength", score: 2, color: "#7C3AED" },
  { label: "Pricing Fit",           score: 4, color: "#F59E0B" },
  { label: "Competitive Perf.",     score: 2, color: "#EF4444" },
  { label: "Messaging Fit",         score: 3, color: "#EC4899" },
]

const COMPETITORS = [
  {
    name: "Frontline by Ormandy",
    score: 4,
    max: 5,
    tag: "Winner",
    tagColor: "#2A5C45",
    explanation: "Selected. Had incumbent advantage and a native QuickBooks integration. Positioning focused on low-friction migration.",
  },
  {
    name: "Manual processes",
    score: 1,
    max: 5,
    tag: "Evaluated",
    tagColor: "#6B7280",
    explanation: "Status quo was considered briefly. Dismissed early — not a real competitive threat in this deal.",
  },
]

const FEATURES = [
  {
    label: "QuickBooks Integration",
    mentions: 3,
    type: "Gap",
    typeColor: { bg: "#FAEAEA", text: "#7A2828" },
    explanation: "Buyer required a native connector. Hindsight does not have one — this was the deal's turning point.",
  },
  {
    label: "Service Workflow Automation",
    mentions: 2,
    type: "Love",
    typeColor: { bg: "#DCFCE7", text: "#15803D" },
    explanation: "Buyer was impressed by the automation demo. Not enough to overcome the integration concern.",
  },
  {
    label: "Job & Project Management",
    mentions: 2,
    type: "Request",
    typeColor: { bg: "#FEF3C7", text: "#92400E" },
    explanation: "Buyer asked whether job-level deal tracking was on the roadmap. Rep did not have an answer.",
  },
]

// ─── Donut chart ──────────────────────────────────────────────────────────────
const R = 34
const CX = 44
const CY = 44
const CIRC = 2 * Math.PI * R

function buildSegments() {
  let offset = 0
  return DECISION_DRIVERS.map(({ pct, color }) => {
    const dash = (pct / 100) * CIRC
    const seg = { dash, offset, color }
    offset += dash
    return seg
  })
}
const SEGMENTS = buildSegments()

// ─── Component ────────────────────────────────────────────────────────────────

export function DealReportStatic() {
  return (
    <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E4DC] bg-background">
        <div>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Deal Review
          </span>
          <span className="mx-2 text-[#E8E4DC]">·</span>
          <span
            className="text-[11px] font-bold text-[#0D1B3E]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Meridian Health
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", background: "#FAEAEA", color: "#7A2828" }}
          >
            Closed Lost
          </span>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#6B7280]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            $240K ARR
          </span>
        </div>
      </div>

      {/* Body — left 2/3 + right 1/3 */}
      <div className="grid grid-cols-[2fr_1fr] divide-x divide-[#E8E4DC]">

        {/* ── Left column ──────────────────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-[#E8E4DC]">

          {/* Exec Summary */}
          <div className="px-6 py-5">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-2"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Exec Summary
            </p>
            <p
              className="text-[12px] leading-[1.7] text-[#374151]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {EXEC_SUMMARY}
            </p>
          </div>

          {/* Decision Drivers */}
          <div className="px-6 py-5">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Decision Drivers
            </p>
            <div className="flex gap-6 items-start">
              {/* Donut */}
              <svg width={CX * 2} height={CY * 2} viewBox={`0 0 ${CX * 2} ${CY * 2}`} className="shrink-0 -rotate-90">
                {SEGMENTS.map((seg, i) => (
                  <circle
                    key={i}
                    cx={CX} cy={CY} r={R}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={10}
                    strokeDasharray={`${seg.dash} ${CIRC}`}
                    strokeDashoffset={-seg.offset}
                  />
                ))}
              </svg>
              {/* Driver list with explanations */}
              <div className="flex flex-col gap-3 flex-1">
                {DECISION_DRIVERS.map((d) => (
                  <div key={d.label} className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-[5px]" style={{ background: d.color }} />
                    <div>
                      <span
                        className="text-[11px] font-bold text-[#0D1B3E]"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {d.label} <span className="font-normal text-[#6B7280]">— {d.pct}%</span>
                      </span>
                      <p
                        className="text-[11px] text-[#6B7280] leading-relaxed mt-0.5"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {d.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scorecard */}
          <div className="px-6 py-5">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Scorecard
            </p>
            <div className="flex flex-col gap-2.5">
              {SCORECARD.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    className="text-[11px] text-[#374151] w-[140px] shrink-0"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-[#E8E4DC] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(item.score / 5) * 100}%`, background: item.color }}
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold text-[#374151] tabular-nums w-7 text-right shrink-0"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {item.score}/5
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-[#E8E4DC]">

          {/* Competitors */}
          <div className="px-5 py-5">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Competitors
            </p>
            <div className="flex flex-col gap-4">
              {COMPETITORS.map((c) => (
                <div key={c.name}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p
                      className="text-[12px] font-bold text-[#0D1B3E] leading-snug"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {c.name}
                    </p>
                    <span
                      className="inline-block text-[8px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                      style={{ background: c.tagColor, color: "#fff", fontFamily: "Arial, sans-serif" }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: c.max }).map((_, j) => (
                      <span
                        key={j}
                        className="w-2.5 h-2.5 rounded-full border"
                        style={{
                          background: j < c.score ? c.tagColor : "transparent",
                          borderColor: j < c.score ? c.tagColor : "#E8E4DC",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-[11px] text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {c.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="px-5 py-5 flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-4">
              {FEATURES.map((f) => (
                <div key={f.label}>
                  <div className="flex items-center gap-2 mb-1">
                    <p
                      className="text-[12px] font-bold text-[#0D1B3E] flex-1 leading-snug"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {f.label}
                    </p>
                    <span className="flex items-center gap-1.5 shrink-0">
                      <span
                        className="text-[8px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                        style={{ background: f.typeColor.bg, color: f.typeColor.text, fontFamily: "Arial, sans-serif" }}
                      >
                        {f.type}
                      </span>
                      <span className="w-4 h-4 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[8px] font-bold">
                        {f.mentions}
                      </span>
                    </span>
                  </div>
                  <p
                    className="text-[11px] text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {f.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Answers */}
          <div className="px-5 py-5">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7280] mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Answers
            </p>
            <div className="border border-[#E8E4DC] rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-background border-b border-[#E8E4DC]">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0D1B3E]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Decision Maker
                </p>
              </div>
              <div className="divide-y divide-[#E8E4DC]">
                <div className="px-4 py-3">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Persona
                  </p>
                  <span
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ background: "#EDE9FE", color: "#5B21B6", fontFamily: "Arial, sans-serif" }}
                  >
                    IT Decision Maker
                  </span>
                </div>
                <div className="px-4 py-3">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-1.5"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    Primary Needs
                  </p>
                  <p
                    className="text-[11px] text-[#374151] leading-relaxed"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Native integrations with existing finance and operations stack. Low-friction onboarding with minimal disruption to active service workflows. Confidence in vendor support during migration.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
