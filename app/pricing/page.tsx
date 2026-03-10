import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/ui/pricing-cards"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Hindsight",
  description: "Win-loss intelligence and competitive insights that scale with your team. Start free or book a demo to see how Hindsight analyzes every closed deal.",
  openGraph: {
    title: "Pricing | Hindsight",
    description: "Win-loss intelligence and competitive insights that scale with your team. Start free or book a demo to see how Hindsight analyzes every closed deal.",
    url: "https://usehindsight.com/pricing",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Hindsight",
    description: "Win-loss intelligence and competitive insights that scale with your team. Start free or book a demo to see how Hindsight analyzes every closed deal.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/pricing",
  },
}

const faqs = [
  {
    q: "Can I add more competitors?",
    a: "Yes, additional competitors can be purchased for $10/mo.",
  },
  {
    q: "Can I add more seats?",
    a: "Yes, additional seats can be purchased for $15/mo.",
  },
  {
    q: "When should I choose Growth?",
    a: "If you use HubSpot or Salesforce to track your deals, Hindsight's AI will pull structured insights from every opportunity — win or loss — automatically.",
  },
  {
    q: "How do you find competitive intel?",
    a: "Our AI agents use a headless browser and custom instructions to find and summarize relevant intel from across the web — always current, always attributed.",
  },
  {
    q: "Can we try it out?",
    a: "Absolutely. Start a free trial directly from any plan, or contact us for a guided walkthrough of the full platform.",
  },
  {
    q: "Is my data secure and private?",
    a: "We take security extremely seriously. Hindsight is SOC 2 Type 2 certified and undergoes regular penetration tests. Your deal data is never used to train models.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-navy px-6 md:px-12 py-[80px] relative overflow-hidden">
          <div
            className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.08) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Pricing
            </p>
            <h1 className="text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white max-w-3xl mx-auto mb-5">
              Win more deals.<br />Pay for what you need.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl mx-auto">
              Start free. Scale when it&apos;s working.
            </p>
          </div>
        </section>

        {/* ── Pricing cards (client — has toggle) ──────────────────── */}
        <PricingCards />

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-[80px] border-t border-[#E8E4DC]">
          <div className="max-w-[860px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono text-center">FAQ</p>
            <h2 className="text-[clamp(24px,3vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy text-center mb-14">
              Frequently asked questions
            </h2>

            <div className="divide-y divide-[#E8E4DC]">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 select-none">
                    <span className="text-[16px] font-bold text-navy">{q}</span>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#E8E4DC] flex items-center justify-center text-navy/40 group-open:rotate-45 transition-transform duration-200">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] text-body leading-relaxed pr-8">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-navy px-6 md:px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">Get Started</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto">
              See what your last 50 deals actually say.
            </h2>
            <p className="text-[16px] text-white/60 mb-10 max-w-lg mx-auto">
              Analyze real deals for free. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://app.dealpage.ai/sign-up"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Start for Free
              </Link>
              <Link
                href="/request-demo"
                className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
