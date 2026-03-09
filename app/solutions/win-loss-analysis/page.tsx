import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InterviewPanel } from "@/components/ui/interview-animation"

const howItWorks = [
  {
    num: "01",
    headline: "Every deal investigated automatically.",
    copy: "The Deal Review Agent pulls every call, email, and CRM record within 48 hours of close. It cross-references them, flags contradictions, and builds a verified picture of what actually happened. Every deal. Not a sample.",
    stat: { num: "100%", label: "of deals analyzed within 12 hours of close" },
    integrations: [
      { src: "/integration_logos/hubspot.svg", alt: "HubSpot" },
      { src: "/integration_logos/salesforce logo.png", alt: "Salesforce" },
      { src: "/integration_logos/gong.png", alt: "Gong" },
      { src: "/integration_logos/clari.svg", alt: "Clari" },
      { src: "/integration_logos/outreach.png", alt: "Outreach" },
    ],
    integrationsMore: "+more",
  },
  {
    num: "02",
    headline: "Buyer interviews at scale. No scheduling required.",
    copy: "Hindsight sends personalized AI interviews to reps via Slack and buyers via email while the deal is still fresh. Questions are specific to that deal. Responses are synthesized automatically. You get primary source data on every deal without chasing a single calendar invite.",
    stat: { num: "10–15%", label: "buyer interview response rate" },
    integrations: [
      { src: "/integration_logos/slack.png", alt: "Slack" },
      { src: "/integration_logos/gmail.png", alt: "Gmail" },
    ],
    integrationsMore: undefined,
  },
  {
    num: "03",
    headline: "Insights on demand. Sliced any way you need.",
    copy: "Every deal becomes a verified record your whole team can query. Ask about win rates by competitor, decision drivers by segment, product gaps by deal size, or any other cut that matters. You get the answer. No export required. No analyst needed.",
    stat: { num: "−86 days", label: "faster time-to-insight than traditional programs" },
    integrations: [
      { src: "/integration_logos/claude-color.png", alt: "Claude" },
      { src: "/integration_logos/glean.png", alt: "Glean" },
      { src: "/integration_logos/openai.png", alt: "OpenAI", invert: true },
    ],
    integrationsMore: "+ API, MCP",
  },
]

const outputs = [
  {
    label: "Competitive Intelligence",
    headline: "Win rates by competitor.",
    copy: "What is working against each one. What is not. Updated every time a deal closes.",
  },
  {
    label: "Decision Drivers",
    headline: "What actually moves deals.",
    copy: "Not what came up in calls. What changed the outcome.",
  },
  {
    label: "Product Insights",
    headline: "Gaps quantified by pipeline value.",
    copy: "Patterns from closed-lost deals that product needs to see, without the noise.",
  },
  {
    label: "Deal Scenarios",
    headline: "Win rates by any cut.",
    copy: "Segment, use case, buying scenario, deal size. Understand exactly where you are strong and where you are losing ground.",
  },
  {
    label: "Every Team Served",
    headline: "No one needs to ask you first.",
    copy: "PMM pulls battlecards. Product queries gaps. Sales asks mid-deal questions in Slack. RevOps connects via API. Everyone gets the cut they need.",
  },
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
    icon: "$$$$",
    title: "Trying to justify budget",
    body: "Outsourcing win-loss can cost $50K–$100K per project. You get a handful of interviews, a slide deck, and insights that arrive three months late. You're stuck trying to prove value to leadership.",
  },
  {
    icon: "📋",
    title: "In-house leads to low ROI",
    body: "Response rates drop. You end up with two interviews a month and not enough volume to see patterns. You don't have the time to manage interviews, data cleanup, and reporting to everyone.",
  },
  {
    icon: "🔀",
    title: "Win-loss gets decentralized",
    body: "Every team runs their own version on their own data. RevOps presents from the CRM. You present from Gong. Product runs their own flow. No central source of truth.",
  },
]

export default function WinLossAnalysisPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Win-Loss Analysis
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                The win-loss program
                you<br />  always wanted.<br />
                <em className="italic text-amber">Without the tradeoffs.</em>
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Hindsight gives you 100% deal coverage, automated buyer interviews at scale, and insights on demand. No analysts. No per-interview fees. No quarter-late insights.
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
            {/* Interview animation */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden" style={{ height: 420 }}>
                <InterviewPanel />
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              The Problem
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-14 max-w-2xl">
              Most win-loss programs hit a roadblock, then get sidelined.
            </h2>
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

        {/* ── How it works ────────────────────────────────────────────── */}
        <section className="px-12 pb-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              How It Works
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-16 max-w-2xl">
              You stay in control. Hindsight does the heavy lifting.
            </h2>
            <div className="flex flex-col gap-6">
              {howItWorks.map((step, i) => (
                <div key={i} className="bg-card border border-[#E8E4DC] rounded-xl p-9 grid md:grid-cols-[120px_1fr] gap-8 items-start">
                  <div className="text-[52px] font-bold text-amber/20 leading-none tracking-[-0.04em] font-mono">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-navy mb-3">
                      {step.headline}
                    </h3>
                    <p className="text-[15px] text-body leading-relaxed max-w-2xl mb-6">
                      {step.copy}
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                      {/* Stat pill */}
                      <div className="flex items-baseline gap-2 bg-amber/[0.08] border border-amber/20 rounded-lg px-4 py-2.5">
                        <span className="text-[18px] font-bold text-amber leading-none font-mono tracking-[-0.02em]">{step.stat.num}</span>
                        <span className="text-[11px] text-body">{step.stat.label}</span>
                      </div>
                      {/* Integration icons */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF] font-mono mr-1">Integrates with</span>
                        {step.integrations.map((ig, j) => (
                          <div key={j} className="w-6 h-6 rounded-md bg-background border border-[#E8E4DC] flex items-center justify-center p-[3px]">
                            <Image src={ig.src} alt={ig.alt} width={16} height={16} className={`object-contain${"invert" in ig && ig.invert ? " invert" : ""}`} />
                          </div>
                        ))}
                        {step.integrationsMore && (
                          <span className="text-[10px] font-bold text-[#9CA3AF] font-mono ml-0.5">{step.integrationsMore}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What your team gets ─────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              What Your Team Gets
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4 max-w-2xl">
              Not a report you have to interpret.<br />Answers you can act on.
            </h2>
            <p className="text-[17px] text-white/60 mb-16 max-w-xl leading-relaxed">
              Every deal becomes a verified record your whole team can query — sliced any way that matters.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {outputs.slice(0, 3).map((o, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-8 bg-white/[0.04]">
                  <div className="w-8 h-[3px] bg-amber mb-6" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                    {o.label}
                  </p>
                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-white mb-3">
                    {o.headline}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">
                    {o.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {outputs.slice(3).map((o, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-8 bg-white/[0.04]">
                  <div className="w-8 h-[3px] bg-amber mb-6" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                    {o.label}
                  </p>
                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-white mb-3">
                    {o.headline}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">
                    {o.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ────────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-12 text-center font-mono">
              What Teams Are Saying
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-[#E8E4DC] rounded-xl p-8">
                  <p className="text-[17px] font-bold leading-[1.55] text-navy mb-7">
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
                      <div className="text-sm font-bold text-navy">
                        {t.name}
                      </div>
                      <div className="text-xs text-body">
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
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto">
              See what your deal data is actually telling you.
            </h2>
            <p className="text-[17px] text-white/60 mb-9 max-w-xl mx-auto leading-relaxed">
              Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
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
