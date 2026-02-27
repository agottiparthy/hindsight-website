import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface CaseStudyMeta {
  title: string
  company: string
  logo: string
  result: string
  slug: string
  contactName: string
  contactRole: string
  contactPhoto: string
  quote: string
}

function getCaseStudies(): CaseStudyMeta[] {
  const dir = path.join(process.cwd(), "content", "case-studies")
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8")
    const { data } = matter(raw)
    return data as CaseStudyMeta
  })
}

export default function ResultsPage() {
  const studies = getCaseStudies()

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="bg-[#0F1F3D] px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Customer Stories
            </p>
            <h1
              className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-white max-w-2xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Real results from teams that bet on knowing why.
            </h1>
          </div>
        </section>

        {/* Case study cards */}
        <section className="px-12 py-[80px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/results/${study.slug}`}
                className="group bg-white border border-[#E8E4DC] rounded-xl p-8 flex flex-col hover:shadow-lg hover:border-[#D4A843]/40 transition-all duration-200"
              >
                {/* Logo */}
                <div className="h-10 flex items-center mb-6">
                  <Image
                    src={study.logo}
                    alt={study.company}
                    width={160}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>

                {/* Result */}
                <div
                  className="text-[48px] font-bold text-[#D4A843] leading-none tracking-[-0.03em] mb-2"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {study.result.split(" ")[0]}
                </div>
                <div
                  className="text-sm text-[#374151] mb-6"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {study.result.split(" ").slice(1).join(" ")}
                </div>

                {/* Quote */}
                <p
                  className="text-[#374151] italic leading-relaxed flex-1 mb-6 line-clamp-3"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  &ldquo;{study.quote}&rdquo;
                </p>

                {/* Contact */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#4A7FA5]">
                    {study.contactPhoto && (
                      <Image
                        src={study.contactPhoto}
                        alt={study.contactName}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-[#0F1F3D]"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {study.contactName}
                    </div>
                    <div
                      className="text-xs text-[#374151]/60"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {study.contactRole}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="text-sm font-bold text-[#D4A843] group-hover:text-[#b8912a] transition-colors"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  See case study →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
