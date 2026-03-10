import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const contentDir = path.join(process.cwd(), "content", "comparisons")

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
    description: data.description,
  }
}

function getComparisonTitle(slug: string): string {
  const f = path.join(contentDir, `${slug}.mdx`)
  const { data } = matter(fs.readFileSync(f, "utf8"))
  return data.competitor as string
}

export default async function ComparisonPage({ params }: Params) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  // Prev / next navigation
  const allFiles = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))
  const allSlugs = allFiles.map((f) => f.replace(/\.mdx$/, ""))
  const idx = allSlugs.indexOf(slug)
  const prevSlug = idx > 0 ? allSlugs[idx - 1] : null
  const nextSlug = idx < allSlugs.length - 1 ? allSlugs[idx + 1] : null

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="bg-navy px-6 md:px-12 py-[80px] relative overflow-hidden">
          <div
            className="absolute -top-[200px] right-0 w-[500px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40 hover:text-white/70 transition-colors font-mono mb-10"
            >
              ← All Comparisons
            </Link>

            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-amber/70 font-mono border border-amber/20 rounded-full px-3 py-1 mb-6">
              {data.category}
            </span>

            {data.logos && data.logos.length > 0 && (
              <div className="flex items-center gap-4 mb-8 h-8">
                {(data.logos as string[]).map((logo: string, i: number) => (
                  <Image
                    key={i}
                    src={logo}
                    alt={data.competitor}
                    width={100}
                    height={32}
                    className="h-7 w-auto object-contain brightness-0 invert opacity-70"
                  />
                ))}
              </div>
            )}

            <h1 className="text-[clamp(28px,3.5vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white max-w-3xl mb-6">
              {data.title}
            </h1>

            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">

            {/* ── Sidebar ──────────────────────────────────────── */}
            <aside className="md:sticky md:top-[100px] flex flex-col gap-6">
              <div className="bg-navy rounded-xl p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber/70 font-mono mb-3">
                  vs. Hindsight
                </p>
                <p className="text-white font-bold text-lg leading-snug mb-1">{data.competitor}</p>
                <p className="text-white/50 text-sm">{data.tagline}</p>
              </div>

              <Link
                href="/request-demo"
                className="bg-amber text-navy text-[12px] font-bold uppercase tracking-[0.06em] px-5 py-3 rounded text-center hover:bg-amber/90 transition-all"
              >
                Get a Demo
              </Link>

              <Link
                href="/compare"
                className="text-[12px] font-bold uppercase tracking-[0.12em] text-amber font-mono hover:text-amber/70 transition-colors text-center"
              >
                View all comparisons →
              </Link>
            </aside>

            {/* ── Article ──────────────────────────────────────── */}
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
              [&_th]:text-white [&_th]:bg-navy [&_th_*]:text-white
              prose-td:border prose-td:border-[#E8E4DC] prose-td:px-4 prose-td:py-2.5 prose-td:text-[14px] prose-td:text-body
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
              prose-hr:border-[#E8E4DC]
            ">
              <MDXRemote 
                source={content} 
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm]
                  }
                }}
              />
            </article>
          </div>
        </section>

        {/* ── Prev / Next ────────────────────────────────────────── */}
        <div className="px-6 md:px-12 pb-[80px]">
          <div className="max-w-[1280px] mx-auto border-t border-[#E8E4DC] pt-10 flex items-center justify-between">
            {prevSlug ? (
              <Link
                href={`/compare/${prevSlug}`}
                className="flex items-center gap-2 text-[13px] font-bold text-navy hover:text-amber transition-colors"
              >
                &larr; {getComparisonTitle(prevSlug)}
              </Link>
            ) : <span />}
            <Link
              href="/compare"
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-amber font-mono hover:text-amber/70 transition-colors"
            >
              All Comparisons
            </Link>
            {nextSlug ? (
              <Link
                href={`/compare/${nextSlug}`}
                className="flex items-center gap-2 text-[13px] font-bold text-navy hover:text-amber transition-colors"
              >
                {getComparisonTitle(nextSlug)} &rarr;
              </Link>
            ) : <span />}
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="bg-navy px-6 md:px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
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
                href="/compare"
                className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
              >
                More comparisons &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
