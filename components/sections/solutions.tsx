import Link from "next/link"

const solutions = [
  {
    label: "PRODUCT MARKETING / CI",
    headline: "Know exactly why you are losing to each competitor.",
    copy: "Battlecards built from what is actually winning deals, updated automatically as new deals close. No more stale decks. No more one-person bottleneck. Every team can pull the cut of data they need without asking you first.",
    proof: "\"We used to rely on CRM notes, which are not reliable. Hindsight helps our sellers know what's actually working in other deals.\" — Jason Bonhert, Sr. PMM, Simpro",
    href: "#how-it-works",
  },
  {
    label: "SALES",
    headline: "Get verified answers to reps when it matters.",
    copy: "Reps DM @Hindsight in Slack mid-deal and get verified answers grounded in actual deal data. What worked against this competitor last quarter. How to handle the objection that just came up. Built from what actually closed deals.",
    proof: "\"My reps are going into deals with the most up-to-date information, letting them compete with confidence.\" — Tye Davis, Sr. PMM, LaunchDarkly",
    href: "#how-it-works",
  },
  {
    label: "REVOPS",
    headline: "A verification layer for the stack you already built.",
    copy: "Plug in via API and MCP. Your existing tools read verified deal records instead of raw transcripts. Clean inputs. Reliable outputs. Hindsight sits in your operational hub and generates the insights every other team acts on.",
    proof: "\"It really kind of sits in our operational hub, to generate insights that everybody else will act on.\" — Travis Allred, VP Commercial Operations, PurpleLab",
    href: "#compare",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-[#F6F8FC] px-12 pb-[100px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Eyebrow + headline */}
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D97706] mb-5"
          style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
        >
          Who Uses It
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0D1B3E] mb-16 max-w-2xl"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Win-loss intelligence for every team that touches a deal.
        </h2>
        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-[#EAEEF5]">
          {solutions.map((s, i) => (
            <div key={i} className="px-10 first:pl-0 last:pr-0 flex flex-col">
              {/* Amber top rule */}
              <div className="w-8 h-[3px] bg-[#D97706] mb-8" />

              {/* Label */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97706] mb-4"
                style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
              >
                {s.label}
              </p>

              {/* Headline */}
              <h3
                className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0D1B3E] mb-4"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {s.headline}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] text-[#2E3F58] leading-relaxed mb-6 flex-1"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {s.copy}
              </p>

              {/* Proof point */}
              <div className="mb-6 px-3.5 py-3 rounded-lg bg-[#F6F8FC] border border-[#D3DAE8] border-l-[3px] border-l-[#D97706]">
                <p
                  className="text-[12px] text-[#2E3F58] leading-snug italic"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.proof}
                </p>
              </div>

              {/* Link */}
              <Link
                href={s.href}
                className="text-[13px] font-bold text-[#0D1B3E] hover:text-[#D97706] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
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
