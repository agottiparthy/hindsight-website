import Link from "next/link"
import Image from "next/image"

const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Competitive Intelligence", href: "/solutions/competitive-intelligence" },
      { label: "Win-Loss Analysis", href: "/solutions/win-loss-analysis" },
      { label: "Sales Enablement", href: "/solutions/sales-enablement" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Deal Review Agent", href: "/platform/deal-review-agent" },
      { label: "Win-Loss Interview Agent", href: "/platform/win-loss-interviews" },
      { label: "Analyst Agent", href: "/platform/analyst-agent" },
      { label: "Workflow Builder", href: "/platform/workflow-builder" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "API", href: "/platform/api" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.usehindsight.com/overview" },
      { label: "Compare", href: "/compare" },
      { label: "Win-Loss Playbook", href: "/resources/win-loss-playbook" },
      { label: "Competitive Intel Playbook", href: "/resources/competitive-intel-playbook" },
      { label: "Templates", href: "/resources/templates" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Results", href: "/results" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0F1F3D] px-12 pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-row gap-2 items-center mb-3">
              <Image
                src="/hindsightlogo-mark-only.svg"
                alt="Hindsight"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <span
                className="text-2xl font-bold text-white leading-none tracking-[-0.025em]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Hindsight
              </span>
            </Link>
            <p
              className="text-sm text-white/40 max-w-[220px] leading-relaxed"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.01em" }}
            >
              Winning more starts with knowing why you lose.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[11px] text-white/25 tracking-[0.04em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
          >
            © 2026 Baseplate Tech Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] text-white/25 hover:text-white/50 transition-colors tracking-[0.02em]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
