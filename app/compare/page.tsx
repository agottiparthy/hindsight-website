import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ComparisonSection } from "@/components/sections"
import { Metadata } from "next"

const contentDir = path.join(process.cwd(), "content", "comparisons")

interface ComparisonMeta {
  title: string
  competitor: string
  slug: string
  category: string
  tagline: string
  description: string
  logos?: string[]
}

function getComparisons(): ComparisonMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8")
    const { data } = matter(raw)
    return data as ComparisonMeta
  })
}

export const metadata: Metadata = {
  title: "Compare | Hindsight",
  description: "See how Hindsight compares to traditional win-loss vendors like Clozd, competitive intelligence tools like Klue and Crayon, and DIY solutions.",
  openGraph: {
    title: "Compare | Hindsight",
    description: "See how Hindsight compares to traditional win-loss vendors like Clozd, competitive intelligence tools like Klue and Crayon, and DIY solutions.",
    url: "https://usehindsight.com/compare",
    siteName: "Hindsight",
    images: ["/compete-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare | Hindsight",
    description: "See how Hindsight compares to traditional win-loss vendors like Clozd, competitive intelligence tools like Klue and Crayon, and DIY solutions.",
    images: ["/compete-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/compare",
  },
}

export default function ComparePage() {
  const comparisons = getComparisons()

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">
        {/* ── Hero ───────────────────────────────────────────────── */}
        {/* <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[200px] right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.06) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              The Honest Comparison
            </p>
            <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6 max-w-3xl">
              Three ways to run win-loss.<br />One that works.
            </h1>
            <p className="text-[17px] text-white/60 leading-relaxed max-w-xl">
              Most teams choose between slow analysis or fast-but-wrong. Hindsight is the first option that is both real-time and verified.
            </p>
          </div>
        </section> */}

        {/* ── Full Comparison Table (from homepage) ──────────────── */}
        <ComparisonSection />

        {/* ── Individual Competitor Pages ────────────────────────── */}
        <section className="px-6 md:px-12 py-24 max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.02em] text-navy mb-2">
            Deep-dive comparisons
          </h2>
          <p className="text-body mb-12 text-lg">
            A closer look at how we stack up against each category.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group block border border-border rounded-xl p-8 bg-surface hover:border-amber transition-colors"
              >
                {c.logos && c.logos.length > 0 && (
                  <div className="flex items-center gap-3 mb-6 h-7">
                    {c.logos.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt={c.competitor}
                        width={80}
                        height={28}
                        className="h-6 w-auto object-contain grayscale opacity-60"
                      />
                    ))}
                  </div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-3 font-mono">
                  {c.category}
                </p>
                <h3 className="text-xl font-bold text-navy mb-2 leading-snug group-hover:text-amber transition-colors">
                  {c.competitor}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-6">{c.description}</p>
                <span className="text-sm font-semibold text-navy group-hover:text-amber transition-colors">
                  Read comparison →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
