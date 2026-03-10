import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/ui/demo-form"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Demo | Hindsight",
  description: "See what Hindsight finds in your deal data — usually within 48 hours. Book a demo to understand why you're winning and losing deals.",
  openGraph: {
    title: "Request a Demo | Hindsight",
    description: "See what Hindsight finds in your deal data — usually within 48 hours. Book a demo to understand why you're winning and losing deals.",
    url: "https://usehindsight.com/request-demo",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Demo | Hindsight",
    description: "See what Hindsight finds in your deal data — usually within 48 hours. Book a demo to understand why you're winning and losing deals.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/request-demo",
  },
}

const logos = [
  { src: "/customer_logos/simpro.svg", alt: "Simpro" },
  { src: "/customer_logos/ironclad logo.svg", alt: "Ironclad" },
  { src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png", alt: "LaunchDarkly" },
  { src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png", alt: "PurpleLab" },
  { src: "/customer_logos/amplitude logo.png", alt: "Amplitude" },
  { src: "/customer_logos/fathom logo.svg", alt: "Fathom" },
]

const outcomes = [
  { stat: "+12%", label: "Competitive win rate", company: "LaunchDarkly" },
  { stat: "+11%", label: "New business win rate", company: "Simpro" },
  { stat: "+16%", label: "New business win rate", company: "PurpleLab" },
]

const testimonial = {
  quote:
    "My sales reps are not going into deals with outdated information anymore. They can compete with confidence — and the numbers are showing it.",
  name: "Tye Davis",
  role: "Sr. Manager of Competitive Intelligence",
  company: "LaunchDarkly",
  photo: "/customer_pictures/tye davis.jpeg",
}

const steps = [
  {
    n: "01",
    title: "We schedule a 30-min call",
    body: "You'll talk to someone who actually knows the product — no SDR hand-offs.",
  },
  {
    n: "02",
    title: "We walk through your deal data",
    body: "Connect your CRM and call recordings (or use our sandbox). We show you what Hindsight finds in your last 50 deals.",
  },
  {
    n: "03",
    title: "You get a tailored rollout plan",
    body: "We map the platform to your team's workflow — PMM, RevOps, Sales, or all three.",
  },
]

export default function RequestDemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen pt-[72px]">

        {/* ── Main two-col layout ───────────────────────────────────── */}
        <section className="relative overflow-hidden">

          {/* Radial glow */}
          <div
            className="absolute top-0 left-1/4 w-[800px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.06) 0%, transparent 60%)" }}
          />

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-[80px] relative grid md:grid-cols-[1fr_480px] gap-16 items-start">

            {/* ── Left: social proof ─────────────────────────────── */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-6 font-mono">
                Request a Demo
              </p>
              <h1 className="text-[clamp(34px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6 max-w-xl">
                See what your deals are actually telling you.
              </h1>
              <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px] mb-12">
                We&apos;ll walk you through your own deal data — live — and show you exactly what patterns Hindsight surfaces across wins, losses, and competitive moments.
              </p>

              {/* What to expect */}
              <div className="flex flex-col gap-6 mb-14">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-5 items-start">
                    <span className="flex-shrink-0 text-[11px] font-bold text-amber font-mono mt-0.5 w-6">{s.n}</span>
                    <div>
                      <p className="text-[15px] font-bold text-white mb-1">{s.title}</p>
                      <p className="text-[14px] text-white/50 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome stats */}
              <div className="grid grid-cols-3 gap-4 mb-14">
                {outcomes.map((o) => (
                  <div key={o.company} className="border border-white/10 rounded-xl p-4 bg-white/[0.03]">
                    <div className="text-[28px] font-bold text-amber leading-none font-mono tracking-[-0.03em] mb-1">{o.stat}</div>
                    <div className="text-[11px] text-white/50 leading-snug mb-1">{o.label}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/30 font-mono">{o.company}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border border-white/10 rounded-xl p-7 bg-white/[0.03] mb-12">
                <div className="w-6 h-[3px] bg-amber mb-5" />
                <p className="text-[16px] font-semibold text-white leading-[1.7] mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[13px] font-bold text-white">{testimonial.name}</div>
                    <div className="text-[11px] text-white/40">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>

              {/* Logo cloud */}
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 font-mono mb-5">
                Trusted by GTM teams at
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {logos.map((l) => (
                  <Image
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    width={100}
                    height={28}
                    className="h-6 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* ── Right: form card ───────────────────────────────── */}
            <div className="md:sticky md:top-[100px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden backdrop-blur-sm">
                <div className="px-8 md:px-10 pt-8 pb-2 border-b border-white/[0.08]">
                  <h2 className="text-[20px] font-bold text-white mb-1">Book a walkthrough</h2>
                  <p className="text-[13px] text-white/50">
                    Usually scheduled within 1–2 business days.
                  </p>
                </div>
                <DemoForm />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mt-5">
                <div className="flex items-center gap-1.5 text-[11px] text-white/30 whitespace-nowrap">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <path d="M6 1l1.3 2.7L10.5 4l-2.25 2.2.53 3.1L6 7.77l-2.78 1.53.53-3.1L1.5 4l3.2-.3L6 1z" fill="currentColor"/>
                  </svg>
                  SOC 2 Type 2
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/30 whitespace-nowrap">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <rect x="1" y="4" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3.5 4V3a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Data never used for training
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/30 whitespace-nowrap">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 3.5v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Reply within 1 business day
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
