import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CompetitiveIntelligenceHero } from "@/components/ui/competitive-intelligence-hero"
import { KnowledgeBaseAnimation } from "@/components/ui/knowledge-base-animation"
import { CompetitorMonitoringAnimation } from "@/components/ui/competitor-monitoring-animation"
import { HarveyBallAnimation } from "@/components/ui/harvey-ball-animation"
import { SlackEnablementAnimation } from "@/components/ui/slack-enablement-animation"
import { IntegrationsFlipGrid } from "@/components/ui/integrations-flip-grid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Competitive Intelligence | Hindsight",
  description: "Auto-updated battlecards, real-time competitor monitoring, and AI-powered competitive enablement. Keep your team ahead of every competitor move.",
  openGraph: {
    title: "Competitive Intelligence | Hindsight",
    description: "Auto-updated battlecards, real-time competitor monitoring, and AI-powered competitive enablement. Keep your team ahead of every competitor move.",
    url: "https://usehindsight.com/solutions/competitive-intelligence",
    siteName: "Hindsight",
    images: ["/compete-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitive Intelligence | Hindsight",
    description: "Auto-updated battlecards, real-time competitor monitoring, and AI-powered competitive enablement. Keep your team ahead of every competitor move.",
    images: ["/compete-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/solutions/competitive-intelligence",
  },
}

const features = [
  {
    label: "Auto-Updated Knowledge Base",
    headline: "Battlecards that never go stale.",
    copy:
      "PMMs build or import your existing competitive assets. Hindsight keeps it current — pulling from deal data, call transcripts, and competitor monitoring to suggest updates.",
  },
  {
    label: "Competitor Monitoring",
    headline: "Track every meaningful competitor move.",
    copy:
      "Continuous monitoring across product pages, pricing, release notes, ads, and community forums. Get alerts when a competitor changes their pricing, ships a new feature, or shifts messaging.",
  },
  {
    label: "Feature Comparisons",
    headline: "Harvey Ball charts built from real deal data.",
    copy:
      "AI scores competitors 1–4 on each feature, sourced from your internal deal conversations and external research — not biased analyst reports. Always grounded in what buyers actually said.",
  },
  {
    label: "Slack CI Assistant",
    headline: "Reps get answers mid-deal, not after.",
    copy:
      "Reps DM @Hindsight in Slack and get verified competitive answers before their next call. Talk tracks, objection responses, and battle-tested positioning — all sourced from what's actually worked.",
  },
]

const testimonials = [
  {
    quote: "My battlecards stay current with what's actually working in the field. Reps have the right message for every competitive scenario.",
    name: "Tye Davis",
    role: "Sr. Product Marketing Manager — LaunchDarkly",
    photo: "/customer_pictures/tye davis.jpeg",
    stat: "+12%",
    statLabel: "Competitive win rate",
  },
  {
    quote: "Hindsight helps me see which messaging actually resonates and wins deals. No more guessing what works.",
    name: "Jason Bonhert",
    role: "Sr. PMM — Simpro Group",
    photo: "/customer_pictures/jason bonhert.png",
    stat: "+11%",
    statLabel: "New business win rate",
  },
]

const problems = [
  {
    icon: "⏳",
    title: "Battlecards go stale within weeks",
    body: "PMMs spend weeks building competitive assets. By the time they ship, competitors have already moved. Reps ignore them because they don't trust them.",
  },
  {
    icon: "📋",
    title: "Good data is hard to find",
    body: "CRMs are filled with inaccurate competitive data. They might tell you who was mentioned in the deal, but not how you were positioned vs. each competitor or what's actually winning deals.",
  },
  {
    icon: "🔍",
    title: "Compete is nobody's full-time job",
    body: "CI is often owned by PMM teams that are already stretched thin. Too many competitors, too much context, too much data. Deals with competitive insights often go unnoticed or unacted upon.",
  },
]

export default function CompetitiveIntelligencePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(212,168,67,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono"
              >
                Competitive Intelligence
              </p>
              <h1
                className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6"

              >
                Know exactly why<br />
                you win and lose<br />
                <em className="italic text-amber">to every competitor.</em>
              </h1>
              <p
                className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]"

              >
                Battlecards built from verified deal data, not slop. Direct integration into Slack. Insights your reps will actually use to win deals.
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
            {/* Hero animation */}
            <div className="flex items-center justify-center">
              <CompetitiveIntelligenceHero />
            </div>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              The Problem
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <div key={i} className="bg-card border border-[#E8E4DC] rounded-xl p-8">
                  <div className="text-2xl mb-4">{p.icon}</div>
                  <h3 className="text-[17px] font-bold text-navy mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-body leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────────────── */}
        <section className="px-12 pb-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              How Hindsight Does It
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => {
                const hasAnimation = i === 0 || i === 1 || i === 2 || i === 3
                return (
                  <div
                    key={i}
                    className={`bg-card border border-[#E8E4DC] rounded-xl overflow-hidden ${
                      hasAnimation ? "" : "p-9"
                    }`}
                  >
                    {/* Animation panels for first two cards */}
                    {i === 0 && (
                      <div className="border-b border-[#E8E4DC] h-[375px] overflow-hidden">
                        <KnowledgeBaseAnimation />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="border-b border-[#E8E4DC] h-[375px] overflow-hidden">
                        <CompetitorMonitoringAnimation />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="border-b border-[#E8E4DC] h-[375px] overflow-hidden">
                        <HarveyBallAnimation />
                      </div>
                    )}
                    {i === 3 && (
                      <div className="border-b border-[#E8E4DC] h-[375px] overflow-hidden">
                        <SlackEnablementAnimation />
                      </div>
                    )}

                    {/* Text content */}
                    <div className={hasAnimation ? "p-8" : ""}>
                      <div className="w-8 h-[3px] bg-amber mb-6" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                        {f.label}
                      </p>
                      <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-navy mb-4">
                        {f.headline}
                      </h3>
                      <p className="text-[14px] text-body leading-relaxed">
                        {f.copy}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Proof ───────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left — text + before/after */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                  The Foundation
                </p>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-5 max-w-2xl">
                  Built on verified deal outcomes. Not content.
                </h2>
                <p className="text-[17px] text-white/60 leading-relaxed mb-10 max-w-2xl">
                  Every other competitive intelligence tool is built on what someone thinks works. Hindsight is built on what the data shows works. Every battlecard. Every positioning message. Cross-referenced across calls, emails, CRM, and buyer interviews.
                </p>
                {/* Before / After */}
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono mb-4">Before &rarr; After</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="relative w-4 h-4 shrink-0">
                        <Image src="/integration_logos/salesforce logo.png" alt="Salesforce" fill className="object-contain" />
                      </div>
                      <span className="text-[10px] font-bold text-white/40 font-mono uppercase tracking-[0.1em]">CRM field</span>
                    </div>
                    <div className="bg-white/[0.06] rounded-lg px-3 py-2.5 mb-2">
                      <p className="text-[11px] text-white/40 font-mono mb-1">Loss Reason</p>
                      <p className="text-[13px] font-bold text-white/70">Pricing</p>
                    </div>
                    <p className="text-[11px] text-white/30 leading-snug">Rep-reported &middot; Unverified</p>
                  </div>
                  <div className="bg-white/[0.08] border border-amber/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded bg-blue/40 flex items-center justify-center shrink-0">
                        <span className="text-white text-[8px] font-bold">H</span>
                      </div>
                      <span className="text-[10px] font-bold text-amber font-mono uppercase tracking-[0.1em]">Verified record</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-2">
                      {[["Integration confidence", "38%"], ["Migration risk", "24%"], ["Pricing", "10%"]].map(([d, p]) => (
                        <div key={d} className="flex items-center justify-between">
                          <span className="text-[10px] text-white/60 truncate max-w-[100px]">{d}</span>
                          <span className="text-[10px] font-bold text-amber font-mono">{p}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-amber/60 leading-snug">Cross-referenced &middot; Verified</p>
                  </div>
                </div>
              </div>
              {/* Right — Testimonials */}
              <div className="flex flex-col gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="border border-white/10 rounded-xl p-7 bg-white/[0.04]">
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="text-[32px] font-bold text-amber leading-none font-mono tracking-[-0.03em]">{t.stat}</span>
                      <span className="text-[12px] text-white/50 leading-snug">{t.statLabel}</span>
                    </div>
                    <p className="text-[15px] leading-[1.6] text-white/80 mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.photo} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-bold text-white">{t.name}</div>
                        <div className="text-xs text-white/50">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How it integrates ───────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Integrations
              </p>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-5">
                Plugs into the stack<br />your team already uses.
              </h2>
              <p
              className="text-[16px] text-body leading-relaxed mb-8"
              >
                Connect Salesforce or HubSpot, Gong, and Slack. Hindsight ingests your deals, monitors competitors, and pushes verified intelligence where reps already work — no new tabs, no new tools.
              </p>
              <Link
                href="/request-demo"
                className="bg-navy text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-blue transition-all hover:-translate-y-px inline-block"
              >
                See It In Action
              </Link>
            </div>
            <IntegrationsFlipGrid />
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto">
              Winning more starts with knowing why you lose.
            </h2>
            <p
              className="text-[17px] text-white/60 mb-9 max-w-xl mx-auto leading-relaxed"
            >
              Connect your CRM and get your first competitive analysis within hours. No setup fees. No analyst to hire.
            </p>
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
