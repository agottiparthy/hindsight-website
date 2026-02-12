"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Competitive Enablement", href: "/competitive-enablement" },
      { label: "Win-Loss Analysis", href: "/win-loss-analysis" },
      { label: "AI Workflows", href: "/workflows" },
      { label: "Win-Loss Interviews", href: "/win-loss-research" },
      { label: "Dashboards", href: "/dashboards" },
      { label: "Sales Assistant", href: "/slack-assistant" },
      { label: "Enrich CRM", href: "/enrich-crm" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Product Marketing", href: "/solutions/product-marketing" },
      { label: "Competitive Intelligence", href: "/solutions/for-competitive-intelligence" },
      { label: "Sales Enablement", href: "/solutions/for-sales-enablement" },
    ],
  },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "https://docs.usehindsight.com/overview" },
    ],
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8EEF4]">
      <Container size="wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3EA7ED] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-[#11214C] font-semibold text-lg">Hindsight</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#11214C]/70 hover:text-[#11214C] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-[#11214C]/70 hover:text-[#11214C] hover:bg-[#11214C]/5" asChild>
              <Link href="https://app.usehindsight.com/sign-in">Sign In</Link>
            </Button>
            <Button className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90" asChild>
              <Link href="https://app.usehindsight.com/sign-up">Try it Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#11214C] p-2"
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
            mobileOpen ? "max-h-[400px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#11214C]/70 hover:text-[#11214C] text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-[#E8EEF4]">
              <Button variant="ghost" className="text-[#11214C]/70 hover:text-[#11214C] hover:bg-[#11214C]/5 justify-start" asChild>
                <Link href="https://app.usehindsight.com/sign-in">Sign In</Link>
              </Button>
              <Button className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90" asChild>
                <Link href="https://app.usehindsight.com/sign-up">Try it Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
