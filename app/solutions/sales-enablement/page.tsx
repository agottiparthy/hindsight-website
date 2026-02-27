import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
  {
    label: "Slack Sales Assistant",
    headline: "Reps ask @Hindsight. Hindsight answers.",
    copy:
      "Mid-deal, a rep needs to know how to handle a competitive objection. They DM @Hindsight in Slack and get a verified answer backed by battlecards, deal data, and real call quotes — in seconds, not hours.",
  },
  {
    label: "Talk Tracks & Objection Handling",
    headline: "Messaging built from what actually wins.",
    copy:
      "Talk tracks and objection responses are generated from deals your team has already won — not theoretical frameworks. When a rep faces \"we're going with Competitor X,\" they know exactly what to say.",
  },
  {
    label: "One-Pagers & Battlecards",
    headline: "Assets reps use because they trust them.",
    copy:
      "PMMs build once. Hindsight updates automatically. Battlecards reflect the latest competitive landscape, grounded in real deal data — so reps pull them up and act on them, instead of ignoring stale wikis.",
  },
  {
    label: "Just-in-Time Coaching",
    headline: "Surface insights before the call, not after.",
    copy:
      "Hindsight monitors deal activity and pushes relevant coaching alerts to reps in Slack before high-stakes calls — competitive deals, at-risk renewals, multi-stakeholder pursuits.",
  },
  {
    label: "CRM Enrichment",
    headline: "Richer context without extra rep work.",
    copy:
      "Every CRM record is enriched with AI-verified win/loss reasons, competitor mentions, decision drivers, and deal summaries — automatically. Reps spend less time logging, more time selling.",
  },
  {
    label: "Asset Performance Tracking",
    headline: "Know which enablement assets actually move deals.",
    copy:
      "Tracks which battlecards, talk tracks, and one-pagers get used in deals — and which ones correlate with wins. Keep what works. Cut what doesn't.",
  },
]

const stats = [
  { num: "25k+", label: "Rep questions answered", company: "To date" },
  { num: "+12%", label: "Competitive win rate", company: "LaunchDarkly" },
  { num: "100%", label: "Deal coverage", company: "vs. <5% industry avg" },
]

const testimonials = [
  {
    quote:
      "We used to rely on CRM notes, which are not reliable. It wasn't a full picture of what we were trying to learn from our lost and won deals. Hindsight helps our sellers know what's actually working in other deals — which helps them win.",
    name: "Jason Bonhert",
    role: "Sr. PMM — Simpro Group",
    photo: "/customer_pictures/jason bonhert.png",
  },
]

const problems = [
  {
    icon: "📁",
    title: "Reps don't use the content you build",
    body: "Battlecards live in Confluence or a shared drive. Reps don't have time to find them, can't tell if they're current, and don't trust them anyway. Your best enablement assets sit unused.",
  },
  {
    icon: "⏱️",
    title: "Answers come after the deal is lost",
    body: "Win-loss reviews, call coaching, and competitive alerts happen retrospectively — too late to influence the deal that just slipped. Reps make educated guesses mid-call instead.",
  },
  {
    icon: "🔗",
    title: "Enablement is disconnected from the field",
    body: "PMMs build messaging from analyst reports and competitor websites. Salesreps build their own from how they've heard things work. There's no shared source of truth — just conflicting narratives.",
  },
]

export default function SalesEnablementPage() {
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
                Sales Enablement
              </p>
              <h1
                className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Get reps the<br />
                right answer,<br />
                <em className="italic text-[#D4A843]">mid-deal, in Slack.</em>
              </h1>
              <p
                className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Hindsight turns your deal history into verified answers, talk tracks, and battlecards — delivered where reps already work, when they actually need them.
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
            {/* Stats */}
            <div className="flex flex-col gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg px-8 py-6 bg-white/[0.04] flex items-center gap-6"
                >
                  <div
                    className="text-[42px] font-bold text-[#D4A843] leading-none tracking-[-0.03em]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-white mb-0.5"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-[12px] text-white/40 uppercase tracking-[0.1em]"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.company}
                    </div>
                  </div>
                </div>
              ))}

              {/* Slack DM mockup */}
              <div className="border border-white/10 rounded-lg p-6 bg-white/[0.04]">
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40 mb-3"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Rep → @Hindsight · Slack
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-[#4A154B]/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white/80 self-end max-w-[80%]" style={{ fontFamily: "Arial, sans-serif" }}>
                    How do I handle the Gong objection mid-demo?
                  </div>
                  <div className="bg-white/[0.08] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white/70 self-start max-w-[90%]" style={{ fontFamily: "Arial, sans-serif" }}>
                    Based on 14 recent Gong deals: lead with workflow customization. Buyers who saw the audit trail demo closed at 67% vs 31%. Key quote from Tye at LaunchDarkly: &ldquo;the reporting depth is what sealed it.&rdquo;
                  </div>
                </div>
              </div>
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
              Enablement built in a vacuum doesn&apos;t enable anyone.
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
              Enablement grounded in what&apos;s actually winning deals.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className="bg-white border border-[#E8E4DC] rounded-xl p-9">
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
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.slice(4).map((f, i) => (
                <div key={i} className="bg-white border border-[#E8E4DC] rounded-xl p-9">
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
              ))}
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

        {/* ── Who it's for ────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-start">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Built For
              </p>
              <h2
                className="text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F1F3D] mb-5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                The whole GTM team acts on the same intelligence.
              </h2>
              <p
                className="text-[16px] text-[#374151] leading-relaxed"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Hindsight connects the data loop between Product, Marketing, and Sales — so the insights that come from the field actually make it back into your messaging, roadmap, and coaching.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  role: "Product Marketing",
                  description: "Build battlecards and messaging that stay current automatically — grounded in real deal data, not guesswork.",
                },
                {
                  role: "Sales Enablement",
                  description: "Deliver just-in-time coaching and verified content via Slack — where reps already are, when they need it most.",
                },
                {
                  role: "Sales Leadership",
                  description: "Identify rep-level coaching opportunities, track which messaging correlates with wins, and build a feedback loop from the field.",
                },
                {
                  role: "Revenue Operations",
                  description: "Enrich CRM records automatically, improve pipeline data quality, and give leadership the clean data they need to forecast accurately.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E8E4DC] rounded-lg px-6 py-5 flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0" />
                  <div>
                    <div
                      className="text-sm font-bold text-[#0F1F3D] mb-1"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {item.role}
                    </div>
                    <div
                      className="text-[13px] text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              Connect your CRM and Slack. Get your reps verified answers in under 48 hours.
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
