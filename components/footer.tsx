"use client"

import Link from "next/link"

const footerLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Docs", href: "https://docs.usehindsight.com/overview" },
  { label: "Privacy", href: "/legal/privacy" },
]

export function Footer() {
  return (
    <footer
      style={{
        background: "#0F1F3D",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 60px",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Logo + tagline */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#FFFFFF",
              marginBottom: "4px",
            }}
          >
            Hindsight
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            Winning more starts with knowing why you lose.
          </div>
        </div>

        {/* Links */}
        <ul className="flex items-center flex-wrap justify-center gap-7" style={{ listStyle: "none" }}>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "#D4A843"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          © 2026 Baseplate Tech Inc.
        </div>
      </div>
    </footer>
  )
}
