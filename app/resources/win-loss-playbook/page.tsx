import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlaybookGate } from "./playbook-client"
import { SECTIONS, BUILD_VS_BUY_ROWS } from "@/content/win-loss-playbook/sections"
import type { Callout, PullQuote } from "@/content/win-loss-playbook/sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Win-Loss Playbook | Hindsight",
  description:
    "What 500,000 deals taught us about win-loss programs. A practical playbook for GTM teams who want coverage, accuracy, and insights that actually flow.",
  openGraph: {
    title: "Win-Loss Playbook | Hindsight",
    description:
      "What 500,000 deals taught us about win-loss programs. A practical playbook for GTM teams who want coverage, accuracy, and insights that actually flow.",
    url: "https://usehindsight.com/resources/win-loss-playbook",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  alternates: { canonical: "https://usehindsight.com/resources/win-loss-playbook" },
}

// ── Markdown parsing helpers ──────────────────────────────────────────────────

const contentDir = path.join(process.cwd(), "content", "win-loss-playbook")

function readSectionFile(sectionId: string): string | null {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8")
    const { data } = matter(raw)
    if (data.id === sectionId) return raw
  }
  return null
}

interface ParsedSection {
  prose: string
  callouts: Callout[]
  pullQuote: PullQuote | null
  ctaText: string | null
}

function parseSectionContent(raw: string): ParsedSection {
  const { content } = matter(raw)

  const callouts: Callout[] = []
  const calloutRegex = /:::callout\s*\nstat:\s*(.+)\nlabel:\s*(.+)\n:::/g
  let m: RegExpExecArray | null
  while ((m = calloutRegex.exec(content)) !== null) {
    callouts.push({ stat: m[1].trim(), label: m[2].trim() })
  }

  let pullQuote: PullQuote | null = null
  const pqMatch = content.match(
    /:::pullquote\s*\nquote:\s*"([^"]+)"\nname:\s*(.+)\nrole:\s*(.+)\ncompany:\s*(.+)\n(?:photo:\s*(.+)\n)?:::/
  )
  if (pqMatch) {
    pullQuote = {
      quote: pqMatch[1].trim(),
      name: pqMatch[2].trim(),
      role: pqMatch[3].trim(),
      company: pqMatch[4].trim(),
      photo: pqMatch[5]?.trim(),
    }
  }

  const ctaMatch = content.match(/^cta:\s*(.+)$/m)
  const ctaText = ctaMatch ? ctaMatch[1].trim() : null

  const prose = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/:::callout[\s\S]*?:::/g, "")
    .replace(/:::pullquote[\s\S]*?:::/g, "")
    .replace(/^cta:.*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()

  return { prose, callouts, pullQuote, ctaText }
}


// ── Callout Card ──────────────────────────────────────────────────────────────
function CalloutCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="bg-navy rounded-lg px-6 py-5 flex items-start gap-5 my-8">
      <span className="text-[clamp(28px,4vw,38px)] font-bold text-amber leading-none tracking-[-0.03em] shrink-0">
        {stat}
      </span>
      <span className="text-[13px] text-white/70 leading-snug pt-1">{label}</span>
    </div>
  )
}

// ── Pull Quote ────────────────────────────────────────────────────────────────
function PullQuoteBlock({
  quote,
  name,
  role,
  company,
  photo,
}: PullQuote) {
  return (
    <blockquote className="border-l-4 border-sky pl-5 my-8">
      <p className="text-[15px] text-body leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
      <footer className="flex items-center gap-3">
        {photo && (
          <Image
            src={photo}
            alt={name}
            width={32}
            height={32}
            className="rounded-full object-cover grayscale"
          />
        )}
        <div>
          <span className="text-[12px] font-semibold text-navy block">{name}</span>
          <span className="text-[11px] text-sub">
            {role}, {company}
          </span>
        </div>
      </footer>
    </blockquote>
  )
}

// ── Section CTA Link ──────────────────────────────────────────────────────────
function SectionCTA({ text }: { text: string }) {
  return (
    <div className="mt-8 pt-6 border-t border-border">
      <Link
        href="/request-demo"
        className="text-[13px] text-blue hover:text-navy transition-colors font-medium"
      >
        {text}
      </Link>
    </div>
  )
}

// ── Build vs Buy Table ────────────────────────────────────────────────────────
function BuildVsBuyTable() {
  return (
    <div className="my-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left text-[11px] font-bold uppercase tracking-[0.12em] text-sub py-3 pr-4 w-[30%]">
              Factor
            </th>
            <th className="text-left text-[11px] font-bold uppercase tracking-[0.12em] text-sub py-3 px-4 w-[22%]">
              Traditional
            </th>
            <th className="text-left text-[11px] font-bold uppercase tracking-[0.12em] text-sub py-3 px-4 w-[22%]">
              DIY
            </th>
            <th className="text-left text-[11px] font-bold uppercase tracking-[0.12em] text-navy py-3 px-4 w-[26%]">
              Hindsight
            </th>
          </tr>
        </thead>
        <tbody>
          {BUILD_VS_BUY_ROWS.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-surface/60" : ""}>
              <td className="py-3 pr-4 text-[13px] font-semibold text-navy align-top border-t border-border">
                {row.category}
              </td>
              <td className="py-3 px-4 text-[13px] text-sub leading-snug align-top border-t border-border">
                {row.traditional}
              </td>
              <td className="py-3 px-4 text-[13px] text-sub leading-snug align-top border-t border-border">
                {row.diy}
              </td>
              <td className="py-3 px-4 text-[13px] text-navy font-medium leading-snug align-top border-t border-border">
                {row.hindsight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function WinLossPlaybookPage() {
  // Build section data: read markdown prose, fall back to sections.ts for structure
  const sectionData = SECTIONS.map((section) => {
    const raw = readSectionFile(section.id)
    if (!raw) {
      return {
        ...section,
        prose: section.intro.join("\n\n"),
        overrideCallouts: null as Callout[] | null,
        overridePullQuote: null as PullQuote | null,
        overrideCta: null as string | null,
      }
    }
    const { prose, callouts, pullQuote, ctaText } = parseSectionContent(raw)
    return {
      ...section,
      prose,
      overrideCallouts: callouts.length > 0 ? callouts : null,
      overridePullQuote: pullQuote,
      overrideCta: ctaText,
    }
  })

  const sectionMeta = SECTIONS.map((s) => ({ id: s.id, number: s.number, title: s.title }))

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">
        <PlaybookGate sections={sectionMeta}>
          {sectionData.map((section) => {
            const callouts = section.overrideCallouts ?? section.callouts ?? []
            const pullQuote = section.overridePullQuote ?? section.pullQuote ?? null
            const ctaText = section.overrideCta ?? section.ctaText ?? null

            return (
              <section key={section.id} id={section.id} className="pt-16 pb-4 scroll-mt-24">
                {/* Number + title */}
                <div className="mb-6">
                  <span
                    className="block font-mono text-[clamp(48px,6vw,72px)] font-medium leading-none text-amber/20 tracking-tight select-none -ml-1"
                    aria-hidden
                  >
                    {section.number}
                  </span>
                  <h2 className="text-[clamp(22px,3vw,28px)] font-bold text-navy leading-tight tracking-[-0.02em] -mt-3">
                    {section.title}
                  </h2>
                </div>

                {/* Prose from MDX */}
                <div
                  className="
                    prose max-w-none
                    prose-headings:font-bold prose-headings:text-navy prose-headings:tracking-tight
                    prose-h2:text-[22px] prose-h2:mt-10 prose-h2:mb-3 prose-h2:leading-snug
                    prose-h3:text-[18px] prose-h3:mt-8 prose-h3:mb-2
                    prose-p:text-body prose-p:leading-[1.8] prose-p:text-[16px] prose-p:my-4
                    prose-li:text-body prose-li:text-[16px] prose-li:leading-[1.75]
                    prose-strong:text-navy prose-strong:font-bold
                    prose-blockquote:not-italic prose-blockquote:border-l-[3px] prose-blockquote:border-sky
                    prose-blockquote:pl-5 prose-blockquote:my-5
                    [&_blockquote_p]:text-body [&_blockquote_p]:m-0
                    prose-hr:border-border
                    prose-a:text-blue prose-a:no-underline hover:prose-a:underline
                  "
                >
                  <MDXRemote
                    source={section.prose}
                    options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                  />
                </div>

                {/* Callout cards */}
                {callouts.map((c, i) => (
                  <CalloutCard key={i} stat={c.stat} label={c.label} />
                ))}

                {/* Build vs Buy table — section 08 only */}
                {section.id === "build-vs-buy" && <BuildVsBuyTable />}

                {/* Pull quote */}
                {pullQuote && <PullQuoteBlock {...pullQuote} />}

                {/* Section CTA */}
                {ctaText && <SectionCTA text={ctaText} />}
              </section>
            )
          })}
        </PlaybookGate>
      </main>
      <Footer />
    </>
  )
}
