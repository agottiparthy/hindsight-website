"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const platformLinks = [
  {
    label: "Deal Review Agent",
    href: "/platform/deal-review-agent",
    desc: "AI that investigates every closed deal automatically",
  },
  {
    label: "Win-Loss Interview Agent",
    href: "/platform/win-loss-interviews",
    desc: "Personalized buyer & rep interviews at scale",
  },
  {
    label: "Analyst Agent",
    href: "/platform/analyst-agent",
    desc: "On-demand competitive and deal analysis",
  },
  {
    label: "Workflow Builder",
    href: "/platform/workflow-builder",
    desc: "Automated AI recipes for battlecards, reports & alerts",
  },
  {
    label: "Integrations",
    href: "/platform/integrations",
    desc: "Salesforce, HubSpot, Gong, Slack, and more",
  },
  {
    label: "API",
    href: "/platform/api",
    desc: "Embed deal intelligence in your own workflows",
  },
]

const resourcesLinks = [
  {
    label: "Documentation",
    href: "https://docs.usehindsight.com/overview",
    desc: "Guides, API reference, and setup docs",
  },
  {
    label: "Compare",
    href: "/compare",
    desc: "See how Hindsight stacks up against alternatives",
  },
  {
    label: "Win-Loss Playbook",
    href: "/resources/win-loss-playbook",
    desc: "Build a world-class win-loss program from scratch",
  },
  {
    label: "Competitive Intel Playbook",
    href: "/resources/competitive-intel-playbook",
    desc: "How top PMMs run CI programs that actually scale",
  },
  {
    label: "Templates",
    href: "/resources/templates",
    desc: "Battlecard, report, and interview templates",
  },
  {
    label: "Security",
    href: "/security",
    desc: "SOC 2, data handling, and privacy practices",
  },
]

const solutionsLinks = [
  {
    label: "Competitive Intelligence",
    href: "/solutions/competitive-intelligence",
    desc: "Battlecards & competitor monitoring from deal data",
  },
  {
    label: "Win-Loss Analysis",
    href: "/solutions/win-loss-analysis",
    desc: "Understand why every deal was won or lost",
  },
  {
    label: "Sales Enablement",
    href: "/solutions/sales-enablement",
    desc: "Verified answers for reps, mid-deal, in Slack",
  },
]

const navLinks = [
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const solutionsRef = useRef<HTMLDivElement>(null)
  const platformRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) setSolutionsOpen(false)
      if (platformRef.current && !platformRef.current.contains(e.target as Node)) setPlatformOpen(false)
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) setResourcesOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[#E8E4DC]" : "border-b border-transparent"
      }`}
      style={{ background: "rgba(248,246,241,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex flex-row gap-2 items-center">
          <Image
            src="/hindsightlogo-mark-only.svg"
            alt="Hindsight"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
            <h1
            className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#0F1F3D] mb-1"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Hindsight
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {/* Solutions dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => { setSolutionsOpen((o) => !o); setPlatformOpen(false); setResourcesOpen(false) }}
              className="flex items-center gap-1 font-sans text-sm text-[#374151] hover:text-[#0F1F3D] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.01em" }}
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-3 w-[320px] bg-white border border-[#E8E4DC] rounded-xl shadow-[0_8px_32px_rgba(15,31,61,0.12)] overflow-hidden">
                {solutionsLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="flex flex-col px-5 py-4 hover:bg-[#F8F6F1] transition-colors border-b border-[#F0EDE8] last:border-0 group"
                  >
                    <span
                      className="text-[13px] font-bold text-[#0F1F3D] mb-0.5 group-hover:text-[#D4A843] transition-colors"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-[12px] text-[#6B7280] leading-snug"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Platform dropdown */}
          <div className="relative" ref={platformRef}>
            <button
              onClick={() => { setPlatformOpen((o) => !o); setSolutionsOpen(false); setResourcesOpen(false) }}
              className="flex items-center gap-1 font-sans text-sm text-[#374151] hover:text-[#0F1F3D] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.01em" }}
            >
              Platform
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`}
              />
            </button>

            {platformOpen && (
              <div className="absolute top-full left-0 mt-3 w-[320px] bg-white border border-[#E8E4DC] rounded-xl shadow-[0_8px_32px_rgba(15,31,61,0.12)] overflow-hidden">
                {platformLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setPlatformOpen(false)}
                    className="flex flex-col px-5 py-4 hover:bg-[#F8F6F1] transition-colors border-b border-[#F0EDE8] last:border-0 group"
                  >
                    <span
                      className="text-[13px] font-bold text-[#0F1F3D] mb-0.5 group-hover:text-[#D4A843] transition-colors"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-[12px] text-[#6B7280] leading-snug"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => { setResourcesOpen((o) => !o); setSolutionsOpen(false); setPlatformOpen(false) }}
              className="flex items-center gap-1 font-sans text-sm text-[#374151] hover:text-[#0F1F3D] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.01em" }}
            >
              Resources
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-3 w-[320px] bg-white border border-[#E8E4DC] rounded-xl shadow-[0_8px_32px_rgba(15,31,61,0.12)] overflow-hidden">
                {resourcesLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setResourcesOpen(false)}
                    className="flex flex-col px-5 py-4 hover:bg-[#F8F6F1] transition-colors border-b border-[#F0EDE8] last:border-0 group"
                  >
                    <span
                      className="text-[13px] font-bold text-[#0F1F3D] mb-0.5 group-hover:text-[#D4A843] transition-colors"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-[12px] text-[#6B7280] leading-snug"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-[#374151] hover:text-[#0F1F3D] transition-colors"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.01em" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            className="bg-[#0F1F3D] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:bg-[#1a3660] transition-colors"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Get a Demo
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#0F1F3D] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-[#E8E4DC] ${
          mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(248,246,241,0.98)" }}
      >
        <div className="max-w-[1280px] mx-auto px-12 py-6 flex flex-col gap-5">
          {/* Mobile Solutions accordion */}
          <button
            className="flex items-center justify-between text-sm text-[#374151] hover:text-[#0F1F3D] text-left"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            onClick={() => setMobileSolutionsOpen((o) => !o)}
          >
            Solutions
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSolutionsOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#D4A843]/30 -mt-2">
              {solutionsLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-[#374151] hover:text-[#0F1F3D]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Platform accordion */}
          <button
            className="flex items-center justify-between text-sm text-[#374151] hover:text-[#0F1F3D] text-left"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            onClick={() => setMobilePlatformOpen((o) => !o)}
          >
            Platform
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${mobilePlatformOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobilePlatformOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#D4A843]/30 -mt-2">
              {platformLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-[#374151] hover:text-[#0F1F3D]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Resources accordion */}
          <button
            className="flex items-center justify-between text-sm text-[#374151] hover:text-[#0F1F3D] text-left"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            onClick={() => setMobileResourcesOpen((o) => !o)}
          >
            Resources
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileResourcesOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#D4A843]/30 -mt-2">
              {resourcesLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-[#374151] hover:text-[#0F1F3D]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#374151] hover:text-[#0F1F3D]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            className="bg-[#0F1F3D] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded text-center"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            onClick={() => setMobileOpen(false)}
          >
            Get a Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
