import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CompetitiveIntelligenceHero } from "@/components/ui/competitive-intelligence-hero"
import { KnowledgeBaseAnimation } from "@/components/ui/knowledge-base-animation"
import { CompetitorMonitoringAnimation } from "@/components/ui/competitor-monitoring-animation"
import { HarveyBallAnimation } from "@/components/ui/harvey-ball-animation"
import { SlackEnablementAnimation } from "@/components/ui/slack-enablement-animation"
import { IntegrationsFlipGrid } from "@/components/ui/integrations-flip-grid"

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
    quote:
      "I'm getting insights from deals that are being analyzed every day — pulling from Salesforce, Gong, and now win-loss interviews. My reps are going into deals with the most up-to-date information, letting them compete with confidence.",
    name: "Tye Davis",
    role: "Sr. Product Marketing Manager — LaunchDarkly",
    photo: "/customer_pictures/tye davis.jpeg",
    logo: "/customer_logos/launchdarkly-Logo-Vector.svg-.png",
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
      <main className="bg-[#F8F6F1] min-h-screen pt-[72px]">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="bg-[#0F1F3D] px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(212,168,67,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Competitive Intelligence
              </p>
              <h1
                className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Know exactly why<br />
                you win and lose<br />
                <em className="italic text-[#D4A843]">to every competitor.</em>
              </h1>
              <p
                className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Battlecards built from your own deal data. Competitor monitoring that never sleeps. Insights your reps will actually use.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/request-demo"
                  className="bg-[#D4A843] text-[#0F1F3D] text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#e0b84e] transition-all hover:-translate-y-px"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Get a Demo
                </Link>
                <Link
                  href="/results"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              The Problem
            </p>
            <h2
              className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D] mb-14 max-w-2xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              More competitors. Suspect data. Not enough time.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <div key={i} className="bg-white border border-[#E8E4DC] rounded-xl p-8">
                  <div className="text-2xl mb-4">{p.icon}</div>
                  <h3
                    className="text-[17px] font-bold text-[#0F1F3D] mb-3 leading-snug"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[14px] text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
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
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              How Hindsight Does It
            </p>
            <h2
              className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D] mb-16 max-w-2xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Competitive intelligence that actually works.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => {
                const hasAnimation = i === 0 || i === 1 || i === 2 || i === 3
                return (
                  <div
                    key={i}
                    className={`bg-white border border-[#E8E4DC] rounded-xl overflow-hidden ${
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
                      <div className="w-8 h-[3px] bg-[#D4A843] mb-6" />
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-3"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {f.label}
                      </p>
                      <h3
                        className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0F1F3D] mb-4"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {f.headline}
                      </h3>
                      <p
                        className="text-[14px] text-[#374151] leading-relaxed"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {f.copy}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Testimonial ─────────────────────────────────────────────── */}
        <section className="bg-[#0F1F3D] px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="max-w-3xl mx-auto text-center">
                <p
                  className="text-[22px] font-bold leading-[1.5] text-white mb-8"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-white/50"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it integrates ───────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Integrations
              </p>
              <h2
                className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D] mb-5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Plugs into the stack<br />your team already uses.
              </h2>
              <p
                className="text-[16px] text-[#374151] leading-relaxed mb-8"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Connect Salesforce or HubSpot, Gong, and Slack. Hindsight ingests your deals, monitors competitors, and pushes verified intelligence where reps already work — no new tabs, no new tools.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#0F1F3D] text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#1a3660] transition-all hover:-translate-y-px inline-block"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                See It In Action
              </Link>
            </div>
            <IntegrationsFlipGrid />
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-[#0F1F3D] px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Winning more starts with knowing why you lose.
            </h2>
            <p
              className="text-[17px] text-white/60 mb-9 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Connect your CRM and get your first competitive analysis within hours. No setup fees. No analyst to hire.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-[#D4A843] text-[#0F1F3D] text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-[#e0b84e] transition-all hover:-translate-y-px"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-white/60 text-sm border-b border-white/30 pb-px hover:text-white transition-colors"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
