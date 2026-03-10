import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IntegrationsFlipGrid } from "@/components/ui/integrations-flip-grid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integrations | Hindsight",
  description: "Connect Hindsight to your CRM, call recording tools, Slack, and knowledge base. Works with HubSpot, Salesforce, Gong, Clari, Notion, and more.",
  openGraph: {
    title: "Integrations | Hindsight",
    description: "Connect Hindsight to your CRM, call recording tools, Slack, and knowledge base. Works with HubSpot, Salesforce, Gong, Clari, Notion, and more.",
    url: "https://usehindsight.com/platform/integrations",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations | Hindsight",
    description: "Connect Hindsight to your CRM, call recording tools, Slack, and knowledge base. Works with HubSpot, Salesforce, Gong, Clari, Notion, and more.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/platform/integrations",
  },
}

// ── Integration data ──────────────────────────────────────────────────
const crmIntegrations = [
  { name: "Salesforce", logo: "/integration_logos/salesforce logo.png" },
  { name: "HubSpot", logo: "/integration_logos/hubspot.svg" },
]

const callIntegrations = [
  { name: "Gong", logo: "/integration_logos/gong.png" },
  { name: "Clari", logo: "/integration_logos/clari.svg" },
  { name: "Outreach", logo: "/integration_logos/outreach.png" },
]

const commIntegrations = [
  { name: "Slack", logo: "/integration_logos/slack.png" },
  { name: "Gmail", logo: "/integration_logos/gmail.png" },
]

const knowledgeIntegrations = [
  { name: "Google Drive", logo: "/integration_logos/drive.png" },
  { name: "Notion", logo: "/integration_logos/notion.png" },
  { name: "Confluence", logo: "/integration_logos/confluence.svg" },
]

// ── Logo chip ─────────────────────────────────────────────────────────
function LogoChip({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-3 bg-background border border-[#E8E4DC] rounded-xl px-5 py-4 hover:shadow-sm transition-shadow">
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className="object-contain max-h-8"
        />
      </div>
      <span className="text-[14px] font-semibold text-navy">{name}</span>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────
function IntegrationSection({
  label,
  integrations,
}: {
  label: string
  integrations: { name: string; logo: string }[]
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9999aa] mb-4 font-mono">{label}</p>
      <div className="flex flex-wrap gap-3">
        {integrations.map((i) => (
          <LogoChip key={i.name} name={i.name} logo={i.logo} />
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Integrations
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                Connects to the tools your team already uses.
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                Hindsight integrates with your CRM, call recording, and communication tools in a few clicks. Your data stays in sync automatically.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/request-demo"
                  className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
                >
                  Get a Demo
                </Link>
                <Link
                  href="https://docs.usehindsight.com/integrations/api"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
                >
                  View documentation →
                </Link>
              </div>
            </div>
            <div>
              <IntegrationsFlipGrid />
            </div>
          </div>
        </section>

        {/* ── Core integrations ────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Core Integrations
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-12">
              Core integrations.
            </h2>

            <div className="flex flex-col gap-12">
              <IntegrationSection label="CRM" integrations={crmIntegrations} />
              <IntegrationSection label="Call Recording" integrations={callIntegrations} />
              <IntegrationSection label="Communication" integrations={commIntegrations} />
            </div>
          </div>
        </section>

        {/* ── Knowledge base ───────────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Knowledge Base
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-5">
                Knowledge base.
              </h2>
              <p className="text-[15px] text-body leading-relaxed">
                Upload existing assets and internal docs directly into Hindsight. Your battlecards, playbooks, and messaging docs become part of the context your AI Assistant searches.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {knowledgeIntegrations.map((i) => (
                <LogoChip key={i.name} name={i.name} logo={i.logo} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Build on top ─────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              For Developers
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-12">
              Build on top of Hindsight.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* API card */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                <div className="border-b border-[#E8E4DC] p-6 bg-background flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F1F3D] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-navy">REST API</div>
                    <div className="text-[11px] text-body">Programmatic access to deal intelligence</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-body leading-relaxed mb-5">
                    Query verified deal intelligence programmatically. Build custom workflows, push data to your own tools, or connect Hindsight to your existing data infrastructure.
                  </p>
                  <Link
                    href="https://docs.usehindsight.com/integrations/api"
                    className="text-[13px] font-bold text-navy border-b border-navy/30 pb-px hover:border-navy transition-colors"
                  >
                    View API docs →
                  </Link>
                </div>
              </div>

              {/* MCP card */}
              <div className="bg-card border border-[#E8E4DC] rounded-xl overflow-hidden">
                <div className="border-b border-[#E8E4DC] p-6 bg-background flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E8E4DC] flex items-center justify-center bg-white flex-shrink-0">
                      <Image src="/integration_logos/claude-color.png" alt="Claude" width={28} height={28} className="object-contain" />
                    </div>
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E8E4DC] flex items-center justify-center bg-white flex-shrink-0">
                      <Image src="/integration_logos/glean.png" alt="Glean" width={28} height={28} className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-navy">MCP</div>
                    <div className="text-[11px] text-body">Model Context Protocol</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-body leading-relaxed mb-5">
                    Connect Hindsight to Claude, Glean, and other AI tools via Model Context Protocol. Your agents read verified deal records instead of raw transcripts.
                  </p>
                  <Link
                    href="https://docs.usehindsight.com/integrations/api"
                    className="text-[13px] font-bold text-navy border-b border-navy/30 pb-px hover:border-navy transition-colors"
                  >
                    View MCP docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Don't see your tool ──────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.2] tracking-[-0.02em] text-navy mb-4">
              Don&apos;t see your tool?
            </h2>
            <p className="text-[15px] text-body leading-relaxed mb-8">
              We are adding integrations regularly. Use Zapier to connect Hindsight to thousands of tools today, or talk to us about a custom integration.
            </p>
            <Link
              href="/request-demo"
              className="inline-flex items-center text-[13px] font-bold text-navy border-b border-navy/30 pb-px hover:border-navy transition-colors"
            >
              Talk to us →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
