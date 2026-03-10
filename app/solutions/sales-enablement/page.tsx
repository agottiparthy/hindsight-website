import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SlackEnablementAnimation } from "@/components/ui/slack-enablement-animation"
import { WinLossInsightAnimation } from "@/components/ui/win-loss-insight-animation"
import { DealReportAnimation } from "@/components/ui/deal-report-animation"
import { RoleplayAnimation } from "@/components/ui/roleplay-animation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sales Enablement | Hindsight",
  description: "Give reps instant competitive answers in Slack. AI-powered coaching, verified win-loss insights, and deal-specific guidance when they need it most.",
  openGraph: {
    title: "Sales Enablement | Hindsight",
    description: "Give reps instant competitive answers in Slack. AI-powered coaching, verified win-loss insights, and deal-specific guidance when they need it most.",
    url: "https://usehindsight.com/solutions/sales-enablement",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Enablement | Hindsight",
    description: "Give reps instant competitive answers in Slack. AI-powered coaching, verified win-loss insights, and deal-specific guidance when they need it most.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/solutions/sales-enablement",
  },
}

const features = [
  {
    label: "Ask @Hindsight Before the Call",
    headline: "Ask @Hindsight before the call.",
    copy: "\"How do I handle the pricing objection against Competitor X in midmarket?\" Reps get answers grounded in what actually closed similar deals. In Slack. In 30 seconds.",
  },
  {
    label: "Win / Loss Intelligence",
    headline: "See what's actually driving wins and losses.",
    copy: "Rep level. Team level. Deal scenario. Separate execution problems from product gaps from pricing issues. Iterate on your playbook without waiting for a QBR.",
  },
  {
    label: "AI Roleplays",
    headline: "Practice the objections that are actually coming up.",
    copy: "AI roleplays built from verified deal scenarios. Not hypotheticals. Real competitive situations from your own deal history.",
    comingSoon: true,
  },
]

const stats = [
  { num: "+11%", label: "New business win rate", company: "Simpro" },
  { num: "+12%", label: "Competitive win rate", company: "LaunchDarkly" },
]

const testimonials = [
  {
    quote: "My reps are going into deals with the most up-to-date information, letting them compete with confidence.",
    name: "Tye Davis",
    role: "Sr. Product Marketing Manager — LaunchDarkly",
    photo: "/customer_pictures/tye davis.jpeg",
    stat: "+12%",
    statLabel: "Competitive win rate",
  },
  {
    quote: "Hindsight helps our sellers know what's actually working in other deals, which helps them win.",
    name: "Jason Bonhert",
    role: "Sr. PMM — Simpro Group",
    photo: "/customer_pictures/jason bonhert.png",
    stat: "+11%",
    statLabel: "New business win rate",
  },
]

export default function SalesEnablementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="bg-navy px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Sales Enablement
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                Your reps know the product.
                <em className="italic text-amber">They don&apos;t know<br className="hidden sm:inline" />
                what worked in the last 10 deals.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Winnable competitive deals are lost mid-stage. Wrong differentiators. Wrong framing. Generic talk tracks that don&apos;t match what&apos;s actually closing deals right now.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-8">
                <Link
                  href="/request-demo"
                  className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-amber/90 transition-all hover:-translate-y-px text-center"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/results"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors text-center"
                >
                  See customer results →
                </Link>
              </div>
              {/* Stat pills */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-baseline gap-1.5 sm:gap-2 border border-white/10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 bg-white/[0.04]">
                    <span className="text-[16px] sm:text-[18px] font-bold text-amber leading-none font-mono tracking-[-0.02em]">{s.num}</span>
                    <span className="text-[10px] sm:text-[11px] text-white/60">{s.label}</span>
                    <span className="text-[9px] sm:text-[10px] text-white/30 font-mono uppercase tracking-[0.08em]">{s.company}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero animation */}
            <div className="w-full max-w-[600px] rounded-xl overflow-hidden" style={{ height: "clamp(300px, 45vw, 420px)" }}>
              <SlackEnablementAnimation />
            </div>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              The Problem
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-12 sm:mb-16 max-w-2xl">
              The intel exists. It just never reaches the rep.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-card border border-[#E8E4DC] rounded-xl p-6 sm:p-9">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-navy mb-3 leading-snug">Reps wing it.</h3>
                <p className="text-[14px] sm:text-[15px] text-body leading-relaxed">
                  Not because they ignored the battlecard. Because the battlecard feels generic and doesn&apos;t tell them what worked in the last deals like the current one.
                </p>
              </div>
              <div className="bg-card border border-[#E8E4DC] rounded-xl p-6 sm:p-9">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-navy mb-3 leading-snug">Managers fly blind.</h3>
                <p className="text-[14px] sm:text-[15px] text-body leading-relaxed">
                  Product gap, pricing issue, or execution problem? Hard to tell. Harder to fix. Relying on self-reported data or sporadic deal reviews doesn't scale.
                </p>
              </div>
              <div className="bg-card border border-[#E8E4DC] rounded-xl p-6 sm:p-9">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-navy mb-3 leading-snug">Winnable deals lost.</h3>
                <p className="text-[14px] sm:text-[15px] text-body leading-relaxed">
                  Same mistakes repeated. Advantages never used. The fix arrives a quarter late — after the next training, the next QBR, the next time someone finally looks at the data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three ways ──────────────────────────────────────────────── */}
        <section className="px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              How Hindsight Enables Your Team
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-12 sm:mb-16 max-w-2xl">
              Three ways Hindsight enables your team.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Feature 1 — Slack */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                <div className="border-b border-[#E8E4DC] h-[280px] sm:h-[340px] overflow-hidden">
                  <SlackEnablementAnimation />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-8 h-[3px] bg-amber mb-6" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                    {features[0].label}
                  </p>
                  <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-navy mb-4">
                    {features[0].headline}
                  </h3>
                  <p className="text-[14px] text-body leading-relaxed">
                    {features[0].copy}
                  </p>
                </div>
              </div>
              {/* Feature 2 — Dashboard */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                <div className="border-b border-[#E8E4DC] h-[280px] sm:h-[340px] overflow-hidden">
                  <WinLossInsightAnimation />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-8 h-[3px] bg-amber mb-6" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                    {features[1].label}
                  </p>
                  <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-navy mb-4">
                    {features[1].headline}
                  </h3>
                  <p className="text-[14px] text-body leading-relaxed">
                    {features[1].copy}
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 — Roleplays (coming soon, full width) */}
            <div className="bg-card border border-[#E8E4DC] rounded-xl p-6 sm:p-9 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="w-8 h-[3px] bg-amber mb-6" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                  {features[2].label}
                </p>
                <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-navy mb-4">
                  {features[2].headline}
                </h3>
                <p className="text-[14px] text-body leading-relaxed mb-5">
                  {features[2].copy}
                </p>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-amber bg-amber/10 border border-amber/20 rounded-full px-3 py-1 font-mono">
                  Beta
                </span>
              </div>
              {/* Roleplay mockup */}
              <div className="rounded-xl overflow-hidden" style={{ height: "clamp(280px, 40vw, 340px)" }}>
                <RoleplayAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* ── Proof ───────────────────────────────────────────────────── */}
        <section className="bg-navy px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left — text + before/after */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                  The Foundation
                </p>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-5 max-w-2xl">
                  Built on verified deal outcomes. Not content.
                </h2>
                <p className="text-[15px] sm:text-[17px] text-white/60 leading-relaxed mb-10 max-w-2xl">
                  Every other enablement tool is built on what someone thinks works. Hindsight is built on what the data shows works. Every answer. Every insight. Cross-referenced across calls, emails, CRM, and buyer interviews.
                </p>
                {/* Before / After */}
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 font-mono mb-4">Before &rarr; After</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 sm:p-5">
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
                  <div className="bg-white/[0.08] border border-amber/20 rounded-xl p-4 sm:p-5">
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
              <div className="flex flex-col gap-5 sm:gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="border border-white/10 rounded-xl p-6 sm:p-7 bg-white/[0.04]">
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

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-navy mb-5 max-w-2xl mx-auto">
              See what your last 50 deals actually say.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-body mb-9 max-w-xl mx-auto leading-relaxed">
              Connect your CRM and Slack. Get your reps verified answers in under 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px text-center"
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-navy text-sm border-b border-navy/40 pb-px hover:opacity-60 transition-opacity text-center"
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
