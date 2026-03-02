import Link from "next/link"

const solutions = [
  {
    label: "COMPETITIVE INTELLIGENCE",
    headline: "Know what's working against every competitor.",
    copy: "Battlecards and messaging built from what's winning deals - not just what's being said. Research, content creation, and knowledge base included.",
    proof: "Used by LaunchDarkly to close 12% more competitive deals.",
    href: "#how-it-works",
  },
  {
    label: "WIN-LOSS ANALYSIS",
    headline: "Drive action with insights on what's impacting deals.",
    copy: "Understand exactly why deals are won and lost with analysis grounded in deal data and win-loss interviews. Surface insights on deal risks, competitive threats, and growth opportunities.",
    proof: "Ironclad went from <1% deal coverage to 100% in 90 days.",
    href: "#results",
  },
  {
    label: "SALES ENABLEMENT",
    headline: "Get verified answers to reps when it matters.",
    copy: "Reps DM @Hindsight in Slack mid-deal and get answers grounded in actual deal data — not hallucinated content. Talk tracks, objection responses, and one-pagers generated from what's actually working in the field.",
    proof: "Simpro saw an 11% lift in new business win rate when using Hindsight.",
    href: "#how-it-works",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-[#F8F6F1] px-12 pb-[100px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Eyebrow + headline */}
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Use Cases
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D] mb-16 max-w-2xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Win-Loss insights that help you win more deals.
        </h2>
        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-[#E8E4DC]">
          {solutions.map((s, i) => (
            <div key={i} className="px-10 first:pl-0 last:pr-0 flex flex-col">
              {/* Amber top rule */}
              <div className="w-8 h-[3px] bg-[#D4A843] mb-8" />

              {/* Label */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {s.label}
              </p>

              {/* Headline */}
              <h3
                className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0F1F3D] mb-4"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {s.headline}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] text-[#374151] leading-relaxed mb-6 flex-1"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {s.copy}
              </p>

              {/* Proof point */}
              <div className="mb-6 px-3.5 py-3 rounded-lg bg-[#FDF8EE] border border-[#E8D9A8] border-l-[3px] border-l-[#D4A843]">
                <p
                  className="text-[12px] font-bold text-[#0F1F3D] leading-snug"
                  style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace" }}
                >
                  {s.proof}
                </p>
              </div>

              {/* Link */}
              <Link
                href={s.href}
                className="text-[13px] font-bold text-[#0F1F3D] hover:text-[#D4A843] transition-colors"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
