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

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }))
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen pt-[72px]">
        {/* Header */}
        <section className="bg-[#0F1F3D] px-12 py-[80px]">
          <div className="max-w-[800px] mx-auto">
            {/* Company logo */}
            <div className="h-10 flex items-center mb-8">
              <Image
                src={data.logo}
                alt={data.company}
                width={160}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Result stat */}
            <div className="flex items-baseline gap-3 mb-6">
              <span
                className="text-[56px] font-bold text-[#D4A843] leading-none tracking-[-0.03em]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {data.result.split(" ")[0]}
              </span>
              <span
                className="text-xl text-white/70"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {data.result.split(" ").slice(1).join(" ")}
              </span>
            </div>

            <h1
              className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-8"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {data.title}
            </h1>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#4A7FA5]">
                {data.contactPhoto && (
                  <Image
                    src={data.contactPhoto}
                    alt={data.contactName}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div>
                <div
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {data.contactName}
                </div>
                <div
                  className="text-xs text-white/50"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {data.contactRole}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MDX Content */}
        <section className="px-12 py-[80px]">
          <div className="max-w-[800px] mx-auto">
            <article className="prose prose-lg prose-neutral max-w-none
              prose-headings:font-bold prose-headings:text-[#0F1F3D] prose-headings:tracking-tight
              prose-h2:text-[28px] prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#374151] prose-p:leading-relaxed
              prose-li:text-[#374151]
              prose-strong:text-[#0F1F3D]
              prose-blockquote:border-l-4 prose-blockquote:border-[#D4A843] prose-blockquote:text-[#374151] prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:not-italic
              prose-table:border-collapse
              prose-th:bg-[#0F1F3D] prose-th:text-white prose-th:px-4 prose-th:py-2 prose-th:text-sm
              prose-td:border prose-td:border-[#E8E4DC] prose-td:px-4 prose-td:py-2 prose-td:text-[#374151]
              prose-a:text-[#D4A843] prose-a:no-underline hover:prose-a:underline
            ">
              <MDXRemote source={content} />
            </article>

            <div className="mt-16 pt-8 border-t border-[#E8E4DC]">
              <Link
                href="/results"
                className="text-sm font-bold text-[#0F1F3D] hover:text-[#D4A843] transition-colors"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                ← All customer stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
