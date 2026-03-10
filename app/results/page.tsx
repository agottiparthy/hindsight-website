import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Customer Results | Hindsight",
  description: "See how teams at LaunchDarkly, Ironclad, Simpro, and PurpleLab use Hindsight to improve win rates, scale win-loss programs, and compete with confidence.",
  openGraph: {
    title: "Customer Results | Hindsight",
    description: "See how teams at LaunchDarkly, Ironclad, Simpro, and PurpleLab use Hindsight to improve win rates, scale win-loss programs, and compete with confidence.",
    url: "https://usehindsight.com/results",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Results | Hindsight",
    description: "See how teams at LaunchDarkly, Ironclad, Simpro, and PurpleLab use Hindsight to improve win rates, scale win-loss programs, and compete with confidence.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/results",
  },
}

interface Stat { value: string; label: string }

interface CaseStudyMeta {
  title: string
  company: string
  logo: string
  result: string
  slug: string
  featured?: boolean
  industry?: string
  teaser?: string
  contactName: string
  contactRole: string
  contactPhoto: string
  quote: string
  stats?: Stat[]
}

const OTHER_LOGOS = [
  { src: "/customer_logos/fathom logo.svg",            alt: "Fathom" },
  { src: "/customer_logos/amplitude logo.png",          alt: "Amplitude" },
  { src: "/customer_logos/uberall.svg",                 alt: "Uberall" },
  { src: "/customer_logos/mimica logo.svg",             alt: "Mimica" },
  { src: "/customer_logos/raken app logo.png",          alt: "Raken" },
  { src: "/customer_logos/treasury prime.png",          alt: "Treasury Prime" },
  { src: "/customer_logos/eventmobi logo.webp",         alt: "EventMobi" },
  { src: "/customer_logos/nixtla logo.svg",             alt: "Nixtla" },
  { src: "/customer_logos/hyperbrowser (black).svg",    alt: "Hyperbrowser" },
]

function getCaseStudies(): CaseStudyMeta[] {
  const dir = path.join(process.cwd(), "content", "case-studies")
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))
  const studies = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8")
    const { data } = matter(raw)
    return data as CaseStudyMeta
  })
  return [...studies.filter((s) => s.featured), ...studies.filter((s) => !s.featured)]
}

export default function ResultsPage() {
  const studies = getCaseStudies()
  const featured = studies[0]
  const rest = studies.slice(1)

  return (
    <>
      <Script id="review-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": studies.map((study, index) => ({
            "@type": "Review",
            "position": index + 1,
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Hindsight"
            },
            "author": {
              "@type": "Person",
              "name": study.contactName,
              "jobTitle": study.contactRole
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": study.quote,
            "publisher": {
              "@type": "Organization",
              "name": study.company
            }
          }))
        })}
      </Script>

      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[200px] right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.06) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Customer Stories
            </p>
            <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6 max-w-3xl">
              Real results from teams that bet on knowing why.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              50+ GTM teams use Hindsight to win more competitive deals, ship smarter roadmaps, and stop repeating the same mistakes.
            </p>
          </div>
        </section>

        {/* ── Featured case study ───────────────────────────────────── */}
        {featured && (
          <section className="px-12 py-[80px]">
            <div className="max-w-[1280px] mx-auto">
              <Link
                href={`/results/${featured.slug}`}
                className="group block bg-navy rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left — stats + quote */}
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      <div className="h-9 flex items-center mb-10">
                        <Image
                          src={featured.logo}
                          alt={featured.company}
                          width={140}
                          height={36}
                          className="h-7 w-auto object-contain brightness-0 invert"
                        />
                      </div>
                      {featured.stats && (
                        <div className="flex items-center gap-8 mb-8 flex-wrap">
                          {featured.stats.map((s, i) => (
                            <div key={i}>
                              <div className="text-[30px] font-bold text-amber leading-none font-mono tracking-[-0.03em] mb-1">{s.value}</div>
                              <div className="text-[10px] text-white/40 uppercase tracking-[0.1em]">{s.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-[19px] font-bold leading-[1.55] text-white mb-8 max-w-md">
                        &ldquo;{featured.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={featured.contactPhoto} alt={featured.contactName} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-bold text-white">{featured.contactName}</div>
                          <div className="text-xs text-white/50">{featured.contactRole}</div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-amber group-hover:text-amber/80 transition-colors">
                        Read case study &rarr;
                      </span>
                    </div>
                  </div>
                  {/* Right — title + teaser */}
                  <div className="bg-white/[0.04] border-l border-white/[0.08] p-12 flex flex-col gap-5 justify-center">
                    {featured.industry && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber/70 font-mono border border-amber/20 rounded-full px-3 py-1 self-start">
                        {featured.industry}
                      </span>
                    )}
                    <h2 className="text-[clamp(22px,2.5vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
                      {featured.title}
                    </h2>
                    {featured.teaser && (
                      <p className="text-[15px] text-white/60 leading-relaxed">
                        {featured.teaser}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── Case study grid ───────────────────────────────────────── */}
        <section className="px-12 pb-[80px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-6">
            {rest.map((study) => (
              <Link
                key={study.slug}
                href={`/results/${study.slug}`}
                className="group bg-card border border-[#E8E4DC] rounded-xl overflow-hidden hover:shadow-lg hover:border-navy/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="bg-navy/[0.03] border-b border-[#E8E4DC] px-7 pt-7 pb-6">
                  <div className="h-8 flex items-center mb-6">
                    <Image
                      src={study.logo}
                      alt={study.company}
                      width={120}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <div className="text-[38px] font-bold text-amber leading-none tracking-[-0.03em] mb-1 font-mono">
                    {study.result.split(" ")[0]}
                  </div>
                  <div className="text-[11px] text-body uppercase tracking-[0.08em]">
                    {study.result.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div className="px-7 py-6 flex flex-col flex-1">
                  {study.industry && (
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber font-mono mb-3">
                      {study.industry}
                    </p>
                  )}
                  <p className="text-[13px] text-body leading-relaxed flex-1 mb-5 line-clamp-3 italic">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DC]">
                    <div className="flex items-center gap-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={study.contactPhoto} alt={study.contactName} className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <div className="text-[11px] font-bold text-navy">{study.contactName}</div>
                        <div className="text-[10px] text-body/60 leading-tight">{study.contactRole}</div>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-amber group-hover:text-amber/70 transition-colors shrink-0">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Logo cloud ────────────────────────────────────────────── */}
        <section className="px-12 py-[64px] border-t border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber font-mono text-center mb-10">
              50+ GTM Teams Trust Hindsight
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {OTHER_LOGOS.map((logo) => (
                <div key={logo.alt} className="h-7 flex items-center grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all">
                  <Image src={logo.src} alt={logo.alt} width={110} height={28} className="h-5 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto">
              See what your last 50 deals actually say.
            </h2>
            <p className="text-[17px] text-white/60 mb-9 max-w-lg mx-auto leading-relaxed">
              Connect your CRM and call recordings. Get your first report in under 48 hours.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="https://app.usehindsight.com/sign-up"
                className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
              >
                Start for free &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

