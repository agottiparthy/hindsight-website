"use client"

import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-[140px] pb-[50px] px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: text */}
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-6"
            style={{ fontFamily: "Arial, Helvetica, sans-serif", animationDelay: "0.1s" }}
          >
            System of Record · GTM Intelligence
          </p>
          <h1
            className="text-[clamp(42px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0F1F3D] mb-7"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            AI is reading<br />
            your CRM.<br />
            <em className="italic text-[#374151]">Your CRM is wrong.</em>
          </h1>
          <p
            className="text-lg leading-relaxed text-[#374151] max-w-[480px] mb-10"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Hindsight verifies every deal — cross-referencing calls, CRM data, and win-loss interviews — and outputs validated intelligence your AI agents can actually trust.
          </p>
          <div className="flex items-center gap-4 mb-14">
            <Link
              href="/request-demo"
              className="bg-[#0F1F3D] text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-[#1a3660] transition-all hover:-translate-y-px"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Get a Demo
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#0F1F3D] text-sm border-b border-[#0F1F3D] pb-px hover:opacity-60 transition-opacity"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              See how it works →
            </Link>
          </div>

          {/* Trusted logos
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.12em] text-[#6B7280] mb-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Trusted by GTM teams at
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
              {[
                { name: "LaunchDarkly", src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
                { name: "Ironclad",     src: "/customer_logos/ironclad logo.svg" },
                { name: "Fathom",       src: "/customer_logos/fathom logo.svg" },
                { name: "Simpro",       src: "/customer_logos/simpro.svg" },
                { name: "PurpleLab",   src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
              ].map((logo) => (
                <div key={logo.name} className="relative h-5 w-24 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain object-left opacity-50 hover:opacity-75 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right: verification card */}
        <div className="relative">
          {/* Floating stat */}
          <div className="absolute -top-6 -right-6 bg-[#D4A843] text-[#0F1F3D] rounded-lg px-[18px] py-3.5 shadow-[0_4px_16px_rgba(212,168,67,0.4)] z-10">
            <div
              className="text-[28px] font-bold leading-none tracking-[-0.03em] mb-1"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              44%
            </div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.08em] opacity-75"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Better accuracy
            </div>
          </div>

          {/* Main card */}
          <div className="bg-white border border-[#E8E4DC] rounded-lg p-7 shadow-[0_8px_40px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)]">
            {/* Card header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DC]">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Deal Review Agent
              </span>
              <span
                className="bg-[#0F1F3D] text-white font-mono text-[10px] px-2 py-0.5 rounded-sm tracking-[0.06em]"
                style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
              >
                LIVE
              </span>
            </div>

            {/* Deal info */}
            <div
              className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-2"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Closed Deal
            </div>
            <div
              className="text-lg font-bold text-[#0F1F3D] mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Meridian Health — $240K ARR
            </div>
            <div
              className="text-[11px] text-[#6B7280] mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
            >
              Closed lost · Q4 2025 · vs. Competitor A
            </div>

            {/* Field: Loss Reason */}
            <div className="mb-0">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-1.5"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Loss Reason
              </div>

              {/* CRM source — struck */}
              <div className="flex items-start gap-2 mb-3">
                <span
                  className="text-[9px] font-medium tracking-[0.06em] px-1.5 py-0.5 rounded-sm whitespace-nowrap mt-0.5 bg-[#EDF2F7] text-[#4A5568]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  CRM
                </span>
                <span
                  className="text-sm text-[#6B7280] line-through opacity-60"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Lost on pricing
                </span>
              </div>

              {/* Conflict banner */}
              <div className="bg-[#FAEAEA] border border-[rgba(122,40,40,0.2)] rounded px-3 py-2.5 flex items-start gap-2 mb-3">
                <span className="text-xs mt-0.5">⚑</span>
                <span
                  className="text-[11px] text-[#7A2828] leading-snug"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  Conflict detected — transcript contradicts CRM entry. 3 sources reviewed.
                </span>
              </div>

              {/* Gong source */}
              <div className="flex items-start gap-2 mb-2">
                <span
                  className="text-[9px] font-medium tracking-[0.06em] px-1.5 py-0.5 rounded-sm whitespace-nowrap mt-0.5 bg-[#FFF3E0] text-[#E65100]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  Gong
                </span>
                <span
                  className="text-sm text-[#374151]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  &ldquo;Integration with existing stack was the blocker&rdquo;
                </span>
              </div>

              {/* Interview source */}
              <div className="flex items-start gap-2 mb-3">
                <span
                  className="text-[9px] font-medium tracking-[0.06em] px-1.5 py-0.5 rounded-sm whitespace-nowrap mt-0.5 bg-[#E8F5E9] text-[#2E7D32]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  Interview
                </span>
                <span
                  className="text-sm text-[#374151]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  &ldquo;Competitor had a native connector. We didn&apos;t.&rdquo;
                </span>
              </div>

              {/* Resolved banner */}
              <div className="bg-[#EAF4EF] border border-[rgba(42,92,69,0.2)] rounded px-3 py-2.5 flex items-start gap-2 mb-3">
                <span className="text-xs mt-0.5">✓</span>
                <span
                  className="text-[11px] text-[#2A5C45] leading-snug"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  Resolved — Loss reason updated to: Integration gap vs. Competitor A
                </span>
              </div>

              {/* Verified value */}
              <div className="flex items-start gap-2">
                <span
                  className="text-[9px] font-medium tracking-[0.06em] px-1.5 py-0.5 rounded-sm whitespace-nowrap mt-0.5 bg-[#0F1F3D] text-white"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
                >
                  Verified
                </span>
                <span
                  className="text-sm font-bold text-[#2A5C45]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Integration gap — missing native connector
                </span>
              </div>
            </div>

            {/* Confidence bar */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E8E4DC]">
              <span
                className="text-[11px] uppercase tracking-[0.08em] text-[#6B7280]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Confidence
              </span>
              <div className="flex-1 h-1 bg-[#E8E4DC] rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-[#2A5C45] rounded-full" />
              </div>
              <span
                className="text-[11px] font-medium text-[#2A5C45]"
                style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
              >
                92%
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
