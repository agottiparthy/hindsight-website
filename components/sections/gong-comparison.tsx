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
    <section id="compare" className="border-t border-b border-border bg-surface px-12 py-[100px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
          The Honest Comparison
        </p>
        <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
            Three ways to run<br />win-loss. One that works.
          </h2>
          <p className="text-lg leading-relaxed text-body max-w-[420px]">
            Most teams choose between slow analysis or fast-but-wrong. Hindsight is the first option that is both real-time and verified.
          </p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 rounded-lg overflow-hidden border border-border bg-border gap-0.5">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`px-8 py-10 flex flex-col ${col.dark ? "bg-navy" : "bg-surface"}`}
            >
              {/* Column header */}
              <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-3 font-mono ${col.featured ? "text-amber" : "text-muted-foreground"}`}>
                {col.label}
              </p>
              <h3 className={`text-xl font-bold leading-snug mb-2 ${col.dark ? "text-white" : "text-navy"}`}>
                {col.title}
              </h3>
              <p className={`text-[12px] mb-8 pb-8 border-b ${col.dark ? "text-white/35 border-white/[0.08]" : "text-muted-foreground border-border"}`}>
                {col.subtitle}
              </p>

              {/* Items */}
              <div className="flex flex-col gap-5 flex-1">
                {col.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className={`text-sm mt-0.5 shrink-0 ${col.cross ? "text-muted-foreground" : "text-amber"}`}>
                      {col.cross ? "✗" : "✓"}
                    </span>
                    <span className={`text-sm leading-relaxed ${col.dark ? "text-white/70" : "text-body"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className={`mt-10 rounded px-6 py-5 ${col.featured ? "bg-amber" : "pt-8 border-t"} ${!col.featured ? (col.dark ? "border-white/[0.08]" : "border-border") : ""}`}>
                <p className={`text-[15px] italic leading-relaxed ${col.featured ? "text-navy" : "text-sub"}`}>
                  &ldquo;{col.pullQuote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat row */}
        <div className="mt-6 grid grid-cols-3 rounded-lg overflow-hidden border border-border bg-border gap-0.5">
          {[
            { label: "Traditional programs", stat: "<1%", desc: "of deals covered" },
            { label: "AI on bad data", stat: "33%", desc: "of deals misunderstand the key competitor or win-loss reason" },
            { label: "Hindsight", stat: "100%", desc: "of deals analyzed, verified, and AI-ready", highlight: true },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-8 py-6 flex items-center gap-6 ${item.highlight ? "bg-navy" : "bg-surface"}`}
            >
              <div className={`text-[36px] font-bold leading-none tracking-tight shrink-0 ${item.highlight ? "text-amber" : "text-muted-foreground"}`}>
                {item.stat}
              </div>
              <div>
                <div className={`text-[10px] font-bold uppercase tracking-[0.12em] mb-1 font-mono ${item.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                  {item.label}
                </div>
                <div className={`text-sm leading-snug ${item.highlight ? "text-white/70" : "text-body"}`}>
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
