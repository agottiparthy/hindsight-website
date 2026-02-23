"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Win-Loss Analysis", href: "/platform/win-loss" },
      { label: "Competitive Intelligence", href: "/platform/competitive-intelligence" },
      { label: "Enablement", href: "/platform/enablement" },
    ],
  },
  {
    label: "Results",
    href: "/results",
  },
  {
    label: "For [Role]",
    href: "/for",
    children: [
      { label: "For PMMs & Compete", href: "/for/product-marketing" },
      { label: "For VP Sales & Revenue", href: "/for/sales-leadership" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Guides", href: "/resources/guides" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(248,246,241,0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "#E8E4DC",
      }}
    >
      <Container size="wide">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/hindsightlogo-mark-only.svg"
              alt="Hindsight mark"
              width={28}
              height={28}
              className="flex-shrink-0"
            />
            <span
              className="text-[20px] font-bold tracking-[-0.3px]"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                color: "#0F1F3D",
              }}
            >
              Hindsight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-normal transition-colors"
                  style={{ color: "#6B7280", letterSpacing: "0.2px" }}
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div
                    className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className="rounded-xl py-2 min-w-[200px] shadow-lg"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #E8E4DC",
                        boxShadow: "0 8px 32px rgba(15,31,61,0.08)",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm transition-colors hover:text-[#0F1F3D]"
                          style={{ color: "#6B7280" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.usehindsight.com/sign-in"
              className="text-sm font-medium px-5 py-2 rounded-[6px] border transition-all"
              style={{ color: "#0F1F3D", borderColor: "#E8E4DC" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0F1F3D"
                e.currentTarget.style.background = "#0F1F3D"
                e.currentTarget.style.color = "#FFFFFF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E8E4DC"
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#0F1F3D"
              }}
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium px-5 py-2 rounded-[6px] transition-all"
              style={{ background: "#D4A843", color: "#0F1F3D" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ECC96A"
                e.currentTarget.style.transform = "translateY(-1px)"
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(212,168,67,0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#D4A843"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#0F1F3D" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-2 py-2.5 text-sm font-medium transition-colors"
                  style={{ color: "#6B7280" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-2 py-2 text-sm transition-colors"
                        style={{ color: "#9CA3AF" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className="flex flex-col gap-2 pt-4 mt-2"
              style={{ borderTop: "1px solid #E8E4DC" }}
            >
              <Link
                href="https://app.usehindsight.com/sign-in"
                className="text-sm font-medium px-4 py-2.5 rounded-[6px] text-center border"
                style={{ color: "#0F1F3D", borderColor: "#E8E4DC" }}
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/demo"
                className="text-sm font-medium px-4 py-2.5 rounded-[6px] text-center"
                style={{ background: "#D4A843", color: "#0F1F3D" }}
                onClick={() => setMobileOpen(false)}
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
