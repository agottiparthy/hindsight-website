import { HeroChatVisual, QuantAnalysisVisual } from "@/app/platform/ai-assistant/page"
import Link from "next/link"

const solutions = [
  {
    label: "PRODUCT MARKETING / CI",
    headline: "Know exactly why you are losing to each competitor.",
    copy: "Battlecards built from what is actually winning deals, updated automatically as new deals close. No more stale decks. No more one-person bottleneck. Every team can pull the cut of data they need without asking you first.",
    proof: "\"We used to rely on CRM notes, which are not reliable. Hindsight helps our sellers know what's actually working in other deals.\" — Jason Bonhert, Sr. PMM, Simpro",
    href: "/solutions/competitive-intelligence",
  },
  {
    label: "SALES",
    headline: "Get verified answers to reps when it matters.",
    copy: "Reps DM @Hindsight in Slack mid-deal and get verified answers grounded in actual deal data. What worked against this competitor last quarter. How to handle the objection that just came up. Built from what actually closed deals.",
    proof: "\"My reps are going into deals with the most up-to-date information, letting them compete with confidence.\" — Tye Davis, Sr. PMM, LaunchDarkly",
    href: "/solutions/sales-enablement",
  },
  {
    label: "REVOPS",
    headline: "A verification layer for better reporting.",
    copy: "Your existing tools read verified deal records instead of raw transcripts. Clean inputs. Reliable outputs. Hindsight sits in your operational hub and generates the insights every other team acts on. Use Hindsight's AI, your CRM, or plug in via API or MCP.",
    proof: "\"It really sits in our operational hub, to generate insights that everybody else will act on.\" — Travis Allred, VP Commercial Operations, PurpleLab",
    href: "/platform/deal-review-agent",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-surface px-12 pb-[100px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Eyebrow + headline */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
          Who Uses It
        </p>
        <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy max-w-2xl">
          Win-loss intelligence for every team that touches a deal.
        </h2>
        <div className="flex flex-row gap-4 py-12">
                                    <QuantAnalysisVisual />

                                <HeroChatVisual />
        
        </div>

        
        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-border">
          {solutions.map((s, i) => (
            <div key={i} className="px-10 first:pl-0 last:pr-0 flex flex-col">
              {/* Amber top rule */}
              <div className="w-8 h-[3px] bg-amber mb-8" />

              {/* Label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono">
                {s.label}
              </p>

              {/* Headline */}
              <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-navy mb-4">
                {s.headline}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-body leading-relaxed mb-6 flex-1">
                {s.copy}
              </p>

              {/* Proof point */}
              <div className="mb-6 px-3.5 py-3 rounded-lg bg-surface border border-[#D3DAE8] border-l-[3px] border-l-amber">
                <p className="text-[12px] text-body leading-snug italic">
                  {s.proof}
                </p>
              </div>

              {/* Link */}
              <Link
                href={s.href}
                className="text-[13px] font-bold text-navy hover:text-amber transition-colors"
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
