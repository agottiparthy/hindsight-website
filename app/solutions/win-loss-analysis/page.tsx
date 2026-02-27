import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
  {
    label: "Deal Review Agent",
    headline: "AI investigates every closed deal.",
    copy:
      "Hindsight cross-references CRM fields, call transcripts, email threads, and win-loss interviews to surface the real reasons behind every win and loss. No sampling. No manual review. 100% coverage.",
  },
  {
    label: "CRM Validation",
    headline: "Your CRM is wrong. We fix it.",
    copy:
      "Reps enter \"client not interested\" on a $400K loss. Hindsight validates every loss reason against actual deal activity and corrects inaccurate fields — giving you data you can actually make decisions from.",
  },
  {
    label: "Win-Loss Interviews",
    headline: "Personalized interviews at scale.",
    copy:
      "AI-powered interviews sent to reps (via Slack) and buyers (via email) within 48 hours of close. Questions are tailored to the specific deal — not generic surveys. Scales to 100% of deals.",
  },
  {
    label: "Dashboards & Reporting",
    headline: "Board-ready reporting on competitive position.",
    copy:
      "Real-time dashboards show win/loss trends by competitor, segment, rep, and deal stage. Track deal driver frequency, competitive win rates, and feature mention patterns — all from verified data.",
  },
  {
    label: "AI Workflows",
    headline: "Automated win-loss reports. No analyst required.",
    copy:
      "Pre-built workflow templates generate win/loss reports, competitive newsletters, product gap summaries, and coaching alerts. Scheduled automatically and distributed via Slack, email, or API.",
  },
  {
    label: "Quantitative + Qualitative",
    headline: "The full picture, not just one side.",
    copy:
      "Combine hard numbers (win rate by competitor, loss reason frequency) with the verbatim quotes that explain the why. Stop choosing between stats and stories — get both, verified.",
  },
]

const stats = [
  { num: "+44%", label: "Loss reason accuracy", company: "Fathom" },
  { num: "−86d", label: "Time-to-insight", company: "Ironclad" },
  { num: "+11%", label: "New business win rate", company: "Simpro" },
  { num: "100%", label: "Deal coverage", company: "vs. <5% industry avg" },
]

const testimonials = [
  {
    quote:
      "We'd lose a $400,000 deal and it would be like, 'client wasn't interested at this time.' There's always friction between product and sales. Hindsight lets us run off of the quant data and say, look, this is what's happening. There's no debate.",
    name: "Travis Allred",
    role: "VP of Commercial Operations — PurpleLab",
    photo: "/customer_pictures/Travis Allred.jpg",
  },
  {
    quote:
      "Gong tells me how often things come up. Hindsight tells me how the win rate changes when we talk about that topic. The platform lets me structure data on every opportunity that I can then analyze from any angle. It's been a tremendous unlock.",
    name: "Toby Laforest",
    role: "Sr. Director of Market Insights — Ironclad",
    photo: "/customer_pictures/toby laforest.jpeg",
  },
]

const problems = [
  {
    icon: "📉",
    title: "CRM data is biased and incomplete",
    body: "Reps manually input win/loss reasons under time pressure. What you get reflects how reps feel, not what buyers decided. You're building strategy on bad data.",
  },
  {
    icon: "🐢",
    title: "86+ days to produce a single report",
    body: "Traditional win-loss programs rely on human analysts to review calls and conduct interviews one by one. By the time insights surface, the deals that informed them are ancient history.",
  },
  {
    icon: "👁️",
    title: "Less than 5% of deals ever get reviewed",
    body: "Teams manually sample a handful of deals per quarter. The other 95% — including the patterns that explain a declining win rate — go completely unanalyzed.",
  },
]

export default function WinLossAnalysisPage() {
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
                Win-Loss Analysis
              </p>
              <h1
                className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Stop guessing.<br />
                Start knowing<br />
                <em className="italic text-[#D4A843]">why every deal closed.</em>
              </h1>
              <p
                className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                AI reviews 100% of your deals — cross-referencing calls, CRM, emails, and interviews — so you know exactly what&apos;s winning and losing business.
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
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg px-6 py-6 bg-white/[0.04]"
                >
                  <div
                    className="text-[38px] font-bold text-[#D4A843] leading-none tracking-[-0.03em] mb-2"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-sm font-bold text-white mb-0.5"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="text-[11px] text-white/40 uppercase tracking-[0.1em]"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {s.company}
                  </div>
                </div>
              ))}
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
              Traditional win-loss programs are slow, sampled, and wrong.
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
              Win-loss intelligence at scale — without hiring analysts.
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

        {/* ── Testimonials ────────────────────────────────────────────── */}
        <section className="bg-[#0F1F3D] px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-12 text-center"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              What Teams Are Saying
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-8 bg-white/[0.04]">
                  <p
                    className="text-[17px] font-bold leading-[1.55] text-white mb-7"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
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
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0F1F3D] mb-5 max-w-2xl mx-auto"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              See what your deal data is actually telling you.
            </h2>
            <p
              className="text-[17px] text-[#374151] mb-9 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-[#0F1F3D] text-white text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-[#1a3660] transition-all hover:-translate-y-px"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-[#0F1F3D] text-sm border-b border-[#0F1F3D] pb-px hover:opacity-60 transition-opacity"
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
