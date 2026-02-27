const traditionalItems = [
  "Manual interview programs cover <1% of deals. Decisions made on anecdotes, not patterns.",
  "Takes ~86 days from deal close to insight. The market has moved on before you act.",
  "Expensive. Traditional firms charge $50–100K per project for a point-in-time report.",
  "No ongoing monitoring. Battlecards go stale within weeks and reps stop trusting them.",
  "Disconnected from your stack. Findings live in a slide deck, not your CRM or Slack.",
]

const gongSfdcItems = [
  "Keyword-based tracking and naive RAG. Pricing came up 40% of the time — but did it cost you the deal?",
  "CRM loss reasons are fiction — entered by reps after deals they'd rather forget. AI inherits the bias.",
  "Calls, deals, and emails treated as separate silos. No resource has the full deal context.",
  "Transcripts, Salesforce, and emails contradict each other. No system ever resolves the conflict.",
  "ChatGPT on bad data is still bad data. Inconsistent outputs from the same broken inputs.",
]

const hindsightItems = [
  "100% deal coverage. Every closed deal analyzed automatically — not a sample, not a survey.",
  "Cross-source validation. CRM, transcripts, and email cross-referenced. Conflicts flagged and resolved.",
  "Semantic competitor attribution — 75% more accurate than keyword matching. No false positives.",
  "Autonomous buyer interviews fill the gaps that no existing source captures. Primary data, at scale.",
  "Verified intelligence with confidence scores — structured for AI agents to query accurately, not just search.",
]

const columns = [
  {
    label: "Traditional Win-Loss",
    title: "Slow, expensive, and sample-based",
    subtitle: "Clozd, Primary Intelligence, in-house programs",
    items: traditionalItems,
    dark: false,
    featured: false,
    checkColor: "#6B7280",
    cross: true,
  },
  {
    label: "Gong + Salesforce + AI",
    title: "Fast reads on unreliable data",
    subtitle: "Gong AI, ChatGPT on transcripts, CRM-only analysis",
    items: gongSfdcItems,
    dark: false,
    featured: false,
    checkColor: "#6B7280",
    cross: true,
  },
  {
    label: "Hindsight",
    title: "Verified intelligence your AI can trust",
    subtitle: "The system of record for GTM deal intelligence",
    items: hindsightItems,
    dark: true,
    featured: true,
    checkColor: "#D4A843",
    cross: false,
  },
]

export function ComparisonSection() {
  return (
    <section id="compare" className="border-t border-b border-[#E8E4DC] bg-[#F8F6F1] px-12 py-[100px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          The Honest Comparison
        </p>
        <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Three ways to run<br />win-loss. One that works.
          </h2>
          <p
            className="text-lg leading-relaxed text-[#374151] max-w-[420px]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Most teams choose between slow analysis or fast-but-wrong. Hindsight is the first option that's both real-time and verified.
          </p>
        </div>

        {/* Columns */}
        <div
          className="grid md:grid-cols-3 rounded-lg overflow-hidden border border-[#E8E4DC]"
          style={{ gap: "2px", background: "#E8E4DC" }}
        >
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`px-8 py-10 flex flex-col ${col.dark ? "bg-[#0F1F3D]" : "bg-[#F8F6F1]"}`}
            >
              {/* Column header */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.14em] mb-3"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: col.featured ? "#D4A843" : "#6B7280",
                }}
              >
                {col.label}
              </p>
              <h3
                className="text-xl font-bold leading-snug mb-2"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: col.dark ? "#ffffff" : "#0F1F3D",
                }}
              >
                {col.title}
              </h3>
              <p
                className="text-[12px] mb-8 pb-8 border-b"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: col.dark ? "rgba(255,255,255,0.35)" : "#6B7280",
                  borderColor: col.dark ? "rgba(255,255,255,0.08)" : "#E8E4DC",
                }}
              >
                {col.subtitle}
              </p>

              {/* Items */}
              <div className="flex flex-col gap-5 flex-1">
                {col.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span
                      className="text-sm mt-0.5 shrink-0"
                      style={{ color: col.cross ? "#9CA3AF" : col.checkColor }}
                    >
                      {col.cross ? "✗" : "✓"}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: col.dark ? "rgba(255,255,255,0.7)" : "#374151",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hindsight CTA / pull quote */}
              {col.featured && (
                <div className="mt-10 bg-[#D4A843] rounded px-6 py-5">
                  <p
                    className="text-[15px] italic text-[#0F1F3D] leading-relaxed"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    &ldquo;We get 50x-100x more interviews using Hindsight, and insights on 100% of deals. &rdquo;
                  </p>
                </div>
              )}

              {/* Non-featured footnote */}
              {!col.featured && colIdx === 0 && (
                <div
                  className="mt-10 pt-8 border-t text-xs leading-relaxed"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#9CA3AF",
                    borderColor: "#E8E4DC",
                  }}
                >
                  <p
                    className="text-[15px] italic text-[#0F1F3D] leading-relaxed"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    &ldquo;Because of cost we were covering ~1% of deals. By the time we got insights back, it was next quarter and they didn't matter. &rdquo;
                  </p>
                </div>
              )}

              {!col.featured && colIdx === 1 && (
                <div
                  className="mt-10 pt-8 border-t text-xs leading-relaxed"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#9CA3AF",
                    borderColor: "#E8E4DC",
                  }}
                >
                  <p
                    className="text-[15px] italic text-[#0F1F3D] leading-relaxed"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    &ldquo;Our teams are obviously experimenting with new AI workflows. But the data flowing in is questionable. There's no sense of what "good" looks like. &rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom stat row */}
        <div
          className="mt-6 grid grid-cols-3 gap-[2px] rounded-lg overflow-hidden border border-[#E8E4DC]"
          style={{ background: "#E8E4DC" }}
        >
          {[
            { label: "Traditional programs", stat: "<1%", desc: "of deals covered" },
            { label: "AI on bad data", stat: "33%", desc: "of deals misunderstand the key competitor or win-loss reason" },
            { label: "Hindsight", stat: "100%", desc: "of deals analyzed, verified, and AI-ready", highlight: true },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-8 py-6 flex items-center gap-6 ${item.highlight ? "bg-[#0F1F3D]" : "bg-[#F8F6F1]"}`}
            >
              <div
                className="text-[36px] font-bold leading-none tracking-tight shrink-0"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: item.highlight ? "#D4A843" : "#9CA3AF",
                }}
              >
                {item.stat}
              </div>
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: item.highlight ? "rgba(255,255,255,0.4)" : "#9CA3AF",
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="text-sm leading-snug"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: item.highlight ? "rgba(255,255,255,0.7)" : "#374151",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}