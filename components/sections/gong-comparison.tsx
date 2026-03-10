const traditionalItems = [
  "Less than 1% of deals covered. Decisions made on anecdotes, not patterns.",
  "~86 days from deal close to insight. The market has moved on before you act.",
  "Expensive. $50K to $100K per project for a point-in-time report.",
  "No ongoing monitoring. Battlecards go stale. Reps stop trusting them.",
  "Findings live in a slide deck, not your CRM or Slack.",
]

const gongSfdcItems = [
  "Pricing came up in 40% of calls. Did it cost you the deal?",
  "CRM loss reasons are fiction. Reps enter what was convenient. AI inherits the bias.",
  "Calls, deals, and emails treated as silos. No source has the full deal context.",
  "Transcripts, Salesforce, and emails contradict each other. No system resolves the conflict.",
  "Bad inputs, convincing outputs. Nobody is catching it.",
]

const hindsightItems = [
  "100% deal coverage. Every closed deal analyzed automatically.",
  "CRM, transcripts, and email cross-referenced. Conflicts resolved.",
  "75% more accurate competitor attribution than keyword matching.",
  "Buyer interviews confirm what no existing source captures.",
  "Verified deal records your team and AI can query accurately.",
]

const columns = [
  {
    label: "Traditional Win-Loss",
    title: "Slow, expensive, and sample-based",
    subtitle: "Clozd, Primary Intelligence, in-house programs",
    items: traditionalItems,
    dark: false,
    featured: false,
    cross: true,
    pullQuote: "Because of cost we were covering ~1% of deals. By the time we got insights back, it was next quarter and they didn't matter.",
  },
  {
    label: "Gong + Salesforce + AI",
    title: "Fast reads on unreliable data",
    subtitle: "Gong AI, ChatGPT on transcripts, CRM-only analysis",
    items: gongSfdcItems,
    dark: false,
    featured: false,
    cross: true,
    pullQuote: "Our teams are experimenting with AI workflows. But the data flowing in is questionable. There's no sense of what good looks like.",
  },
  {
    label: "Hindsight",
    title: "Verified intelligence your whole team trusts",
    subtitle: "The verified context layer for GTM",
    items: hindsightItems,
    dark: true,
    featured: true,
    cross: false,
    pullQuote: "We get 50x to 100x more interviews using Hindsight, and insights on 100% of deals.",
  },
]

export function ComparisonSection() {
  return (
    <section id="compare" className="border-t border-b border-border bg-surface px-4 sm:px-6 md:px-8 lg:px-12 py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 md:mb-5 font-mono">
          The Honest Comparison
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6 md:gap-8">
          <h2 className="text-[clamp(28px,6vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
            Three ways to run<br />win-loss. One that works.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-body max-w-[420px]">
            Most teams choose between slow analysis or fast-but-wrong. Hindsight is the first option that is both real-time and verified.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden border border-border bg-border gap-0.5">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`px-5 md:px-8 py-8 md:py-10 flex flex-col ${col.dark ? "bg-navy" : "bg-surface"}`}
            >
              {/* Column header */}
              <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-2 md:mb-3 font-mono ${col.featured ? "text-amber" : "text-muted-foreground"}`}>
                {col.label}
              </p>
              <h3 className={`text-lg md:text-xl font-bold leading-snug mb-2 ${col.dark ? "text-white" : "text-navy"}`}>
                {col.title}
              </h3>
              <p className={`text-[11px] md:text-[12px] mb-6 md:mb-8 pb-6 md:pb-8 border-b ${col.dark ? "text-white/35 border-white/[0.08]" : "text-muted-foreground border-border"}`}>
                {col.subtitle}
              </p>

              {/* Items */}
              <div className="flex flex-col gap-4 md:gap-5 flex-1">
                {col.items.map((item, i) => (
                  <div key={i} className="flex gap-2 md:gap-3 items-start">
                    <span className={`text-sm mt-0.5 shrink-0 ${col.cross ? "text-muted-foreground" : "text-amber"}`}>
                      {col.cross ? "✗" : "✓"}
                    </span>
                    <span className={`text-[13px] md:text-sm leading-relaxed ${col.dark ? "text-white/70" : "text-body"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className={`mt-8 md:mt-10 rounded px-4 md:px-6 py-4 md:py-5 ${col.featured ? "bg-amber" : "pt-6 md:pt-8 border-t"} ${!col.featured ? (col.dark ? "border-white/[0.08]" : "border-border") : ""}`}>
                <p className={`text-[14px] md:text-[15px] italic leading-relaxed ${col.featured ? "text-navy" : "text-sub"}`}>
                  &ldquo;{col.pullQuote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat row */}
        <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden border border-border bg-border gap-0.5">
          {[
            { label: "Traditional programs", stat: "<1%", desc: "of deals covered" },
            { label: "AI on bad data", stat: "33%", desc: "of deals misunderstand the key competitor or win-loss reason" },
            { label: "Hindsight", stat: "100%", desc: "of deals analyzed, verified, and AI-ready", highlight: true },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-5 md:px-8 py-5 md:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 ${item.highlight ? "bg-navy" : "bg-surface"}`}
            >
              <div className={`text-[32px] md:text-[36px] font-bold leading-none tracking-tight shrink-0 ${item.highlight ? "text-amber" : "text-muted-foreground"}`}>
                {item.stat}
              </div>
              <div>
                <div className={`text-[10px] font-bold uppercase tracking-[0.12em] mb-1 font-mono ${item.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                  {item.label}
                </div>
                <div className={`text-[13px] md:text-sm leading-snug ${item.highlight ? "text-white/70" : "text-body"}`}>
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
