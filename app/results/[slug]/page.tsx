import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const contentDir = path.join(process.cwd(), "content", "case-studies")

interface Stat { value: string; label: string }

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return {}
  const { data } = matter(fs.readFileSync(filePath, "utf8"))
  return {
    title: `${data.title} — Hindsight`,
    description: data.teaser ?? data.quote,
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const stats: Stat[] = data.stats ?? []

  // All slugs for prev/next navigation
  const allFiles = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))
  const allSlugs = allFiles.map((f) => f.replace(/\.mdx$/, ""))
  const idx = allSlugs.indexOf(slug)
  const prevSlug = idx > 0 ? allSlugs[idx - 1] : null
  const nextSlug = idx < allSlugs.length - 1 ? allSlugs[idx + 1] : null

  function getStudyTitle(s: string) {
    const f = path.join(contentDir, `${s}.mdx`)
    const { data: d } = matter(fs.readFileSync(f, "utf8"))
    return d.company as string
  }

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[80px] relative overflow-hidden">
          <div
            className="absolute -top-[200px] right-0 w-[500px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative">
            {/* Back link */}
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40 hover:text-white/70 transition-colors font-mono mb-10"
            >
              ← Customer Stories
            </Link>

            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
              <div>
                {/* Logo */}
                <div className="h-9 flex items-center mb-8">
                  <Image
                    src={data.logo}
                    alt={data.company}
                    width={160}
                    height={36}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </div>

                {data.industry && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-amber/70 font-mono border border-amber/20 rounded-full px-3 py-1 mb-6">
                    {data.industry}
                  </span>
                )}

                <h1 className="text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.025em] text-white max-w-3xl mb-8">
                  {data.title}
                </h1>

                {/* Contact */}
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.contactPhoto} alt={data.contactName} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold text-white">{data.contactName}</div>
                    <div className="text-xs text-white/50">{data.contactRole}</div>
                  </div>
                </div>
              </div>

              {/* Stat chips */}
              {stats.length > 0 && (
                <div className="flex flex-col gap-3 md:items-end">
                  {stats.map((s: Stat, i: number) => (
                    <div key={i} className="flex items-baseline gap-2 border border-white/10 rounded-xl px-5 py-3 bg-white/[0.04] md:min-w-[200px]">
                      <span className="text-[26px] font-bold text-amber leading-none font-mono tracking-[-0.02em]">{s.value}</span>
                      <span className="text-[11px] text-white/50 leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <section className="px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">

            {/* ── Sidebar ────────────────────────────────────────── */}
            <aside className="md:sticky md:top-[100px] flex flex-col gap-6">
              {/* Primary quote */}
              <div className="bg-navy rounded-xl p-6">
                <div className="w-6 h-[3px] bg-amber mb-4" />
                <p className="text-[15px] font-bold leading-[1.6] text-white mb-5">
                  &ldquo;{data.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.contactPhoto} alt={data.contactName} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="text-[12px] font-bold text-white">{data.contactName}</div>
                    <div className="text-[10px] text-white/50">{data.contactRole}</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              {stats.length > 0 && (
                <div className="bg-card border border-[#E8E4DC] rounded-xl p-5 flex flex-col gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber font-mono">Key Results</p>
                  {stats.map((s: Stat, i: number) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#E8E4DC]" : ""}>
                      <div className="text-[26px] font-bold text-navy leading-none font-mono tracking-[-0.02em] mb-1">{s.value}</div>
                      <div className="text-[11px] text-body">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Industry tag */}
              {data.industry && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-body/60 font-mono border border-[#E8E4DC] rounded-full px-3 py-1">
                    {data.industry}
                  </span>
                </div>
              )}

              <Link
                href="/request-demo"
                className="bg-amber text-navy text-[12px] font-bold uppercase tracking-[0.06em] px-5 py-3 rounded text-center hover:bg-amber/90 transition-all"
              >
                Get a Demo
              </Link>
            </aside>

            {/* ── Article column (video + prose) ─────────────────── */}
            <div>
              {/* ── Video testimonial ──────────────────────────── */}
              {data.videoUrl && (
                <div className="mb-12 rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={data.videoUrl}
                    title={`${data.company} customer story`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              <article className="
              prose max-w-none
              prose-headings:font-bold prose-headings:text-navy prose-headings:tracking-tight
              prose-h2:text-[24px] prose-h2:mt-12 prose-h2:mb-4 prose-h2:leading-snug
              prose-h3:text-[18px] prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-[15px] prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-navy/80
              prose-p:text-body prose-p:leading-[1.75] prose-p:text-[16px]
              prose-li:text-body prose-li:text-[15px] prose-li:leading-[1.7]
              prose-strong:text-navy prose-strong:font-bold
              prose-blockquote:not-italic prose-blockquote:border-l-[3px] prose-blockquote:border-amber
              prose-blockquote:pl-5 prose-blockquote:py-0.5 prose-blockquote:my-6
              prose-blockquote:bg-amber/[0.04] prose-blockquote:rounded-r-lg prose-blockquote:pr-4
              [&_blockquote_p]:text-navy [&_blockquote_p]:font-semibold [&_blockquote_p]:text-[16px] [&_blockquote_p]:leading-relaxed [&_blockquote_p]:m-0
              [&_blockquote_p:first-child]:before:content-none [&_blockquote_p:last-child]:after:content-none
              prose-table:border-collapse
              prose-th:bg-navy prose-th:text-white prose-th:px-4 prose-th:py-2 prose-th:text-[12px] prose-th:font-bold prose-th:uppercase prose-th:tracking-widest
              prose-td:border prose-td:border-[#E8E4DC] prose-td:px-4 prose-td:py-2.5 prose-td:text-[14px] prose-td:text-body
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
              prose-hr:border-[#E8E4DC]
            ">
              <MDXRemote source={content} />
            </article>
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ────────────────────────────────── */}
        <div className="px-12 pb-[80px]">
          <div className="max-w-[1280px] mx-auto border-t border-[#E8E4DC] pt-10 flex items-center justify-between">
            {prevSlug ? (
              <Link href={`/results/${prevSlug}`} className="flex items-center gap-2 text-[13px] font-bold text-navy hover:text-amber transition-colors">
                &larr; {getStudyTitle(prevSlug)}
              </Link>
            ) : <span />}
            <Link href="/results" className="text-[12px] font-bold uppercase tracking-[0.12em] text-amber font-mono hover:text-amber/70 transition-colors">
              All Stories
            </Link>
            {nextSlug ? (
              <Link href={`/results/${nextSlug}`} className="flex items-center gap-2 text-[13px] font-bold text-navy hover:text-amber transition-colors">
                {getStudyTitle(nextSlug)} &rarr;
              </Link>
            ) : <span />}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">Get Started</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-2xl mx-auto">
              See what your last 50 deals actually say.
            </h2>
            <div className="flex items-center justify-center gap-5 mt-8">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="/results"
                className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
              >
                More customer stories &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
