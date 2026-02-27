import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.usehindsight.com/overview" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F1F3D] px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <Link href="/" className="block mb-2">
          <Image
            src="/hindsightlogo-white.svg"
            alt="Hindsight"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <p
          className="text-xs text-white/35"
          style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.02em" }}
        >
          Winning more starts with knowing why you lose.
        </p>
      </div>

      <ul className="flex flex-wrap gap-7">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/40 hover:text-white/80 transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p
        className="text-[11px] text-white/25 tracking-[0.04em]"
        style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
      >
        © 2026 Baseplate Tech Inc.
      </p>
    </footer>
  )
}
