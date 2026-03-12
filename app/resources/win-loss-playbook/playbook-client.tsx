"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"

// ── Types ─────────────────────────────────────────────────────────────────────
interface SectionMeta {
  id: string
  number: string
  title: string
}

// ── Gate Form ─────────────────────────────────────────────────────────────────
function GateForm({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError("Please enter a valid work email.")
      return
    }
    setLoading(true)
    setError("")
    try {
      await fetch("/api/playbook-gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "win-loss-playbook" }),
      })
    } catch {
      // Non-blocking
    } finally {
      setLoading(false)
      onUnlock()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email"
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 rounded-md focus:outline-none focus:border-sky transition-colors"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-amber hover:bg-amber/90 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-[0.08em] px-6 py-3 rounded-md transition-all hover:-translate-y-px whitespace-nowrap"
      >
        {loading ? "One sec…" : "Read the Playbook"}
      </button>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </form>
  )
}

// ── Sticky Nav Rail ───────────────────────────────────────────────────────────
function NavRail({ sections, activeId }: { sections: SectionMeta[]; activeId: string }) {
  return (
    <aside className="hidden lg:block w-[200px] xl:w-[220px] shrink-0 self-start sticky top-[88px]">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sub mb-4 font-mono">
        In this playbook
      </p>
      <nav className="space-y-0.5">
        {sections.map((s) => {
          const isActive = activeId === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-start gap-3 py-2 pl-3 rounded-md transition-all border-l-2 ${
                isActive
                  ? "border-sky bg-sky/5 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:border-sky/40"
              }`}
            >
              <span
                className={`font-mono text-[11px] font-medium mt-px shrink-0 transition-colors ${
                  isActive ? "text-sky" : "text-sub group-hover:text-sky"
                }`}
              >
                {s.number}
              </span>
              <span
                className={`text-[13px] leading-snug transition-colors ${
                  isActive ? "text-navy font-semibold" : "text-sub"
                }`}
              >
                {s.title}
              </span>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

// ── Playbook Gate — wraps all gated content ───────────────────────────────────
export function PlaybookGate({
  sections,
  children,
}: {
  sections: SectionMeta[]
  children: React.ReactNode
}) {
  const [unlocked, setUnlocked] = useState(false)
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")
  const contentRef = useRef<HTMLDivElement>(null)

  // IntersectionObserver — fires after unlock so elements are visible
  useEffect(() => {
    if (!unlocked || !contentRef.current) return
    const sectionEls = contentRef.current.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -65% 0px" }
    )
    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [unlocked])

  const handleUnlock = useCallback(() => {
    setUnlocked(true)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 80)
  }, [])

  return (
    <>
      {/* ── Hero / Gate ──────────────────────────────────────────────────── */}
      <section className="bg-navy px-4 sm:px-6 md:px-12 py-[60px] md:py-[80px] relative overflow-hidden">
        <div
          className="absolute -top-[200px] right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-[20%] w-[400px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(91,184,245,0.04) 0%, transparent 65%)" }}
          aria-hidden
        />
        <div className="max-w-[800px] mx-auto relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
            Win-Loss Playbook
          </p>
          <h1 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-5 max-w-[680px]">
            What 500,000 Deals Taught Us About Win-Loss Programs
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-10 max-w-[540px]">
            A playbook for GTM teams who want coverage, accuracy, and insights that actually flow.
          </p>

          {!unlocked ? (
            <div>
              <p className="text-[13px] text-white/50 mb-4">
                Enter your work email to read the full playbook. No spam.
              </p>
              <GateForm onUnlock={handleUnlock} />
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sky text-sm animate-fadeInUp">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="shrink-0">
                <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Playbook unlocked — scroll to read
            </div>
          )}
        </div>
      </section>

      {/* ── Mobile ToC ───────────────────────────────────────────────────── */}
      {unlocked && (
        <div className="lg:hidden bg-surface border-b border-border px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sub mb-3">Sections</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-[12px] text-blue hover:text-navy transition-colors">
                <span className="font-mono text-sub mr-1">{s.number}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── Gated content ────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Gradient fade overlay when locked */}
        {!unlocked && (
          <div
            className="absolute inset-x-0 bottom-0 h-[280px] pointer-events-none z-10"
            style={{ background: "linear-gradient(to bottom, transparent 0%, white 80%)" }}
            aria-hidden
          />
        )}
        <div
          ref={contentRef}
          className={`transition-all duration-700 ease-out ${
            unlocked
              ? "opacity-100 translate-y-0"
              : "opacity-25 blur-[3px] pointer-events-none select-none max-h-[480px] overflow-hidden"
          }`}
          aria-hidden={!unlocked}
        >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 py-8 flex gap-12 xl:gap-20 items-start">
          <NavRail sections={sections} activeId={activeId} />
          <div className="flex-1 min-w-0 max-w-[720px]">
            <div className="h-px bg-border mb-2" />
            {children}

            {/* ── Final CTA ──────────────────────────────────────────── */}
            <div className="mt-16 mb-20 bg-navy rounded-xl px-8 py-10 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(217,119,6,0.12) 0%, transparent 60%)" }}
                aria-hidden
              />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 font-mono">
                  Start Now
                </p>
                <h2 className="text-[clamp(22px,3.5vw,32px)] font-bold text-white leading-tight tracking-[-0.02em] mb-4">
                  Ready to see it in your own deal data?
                </h2>
                <p className="text-[14px] text-white/60 leading-relaxed mb-7 max-w-[400px] mx-auto">
                  Connect your CRM and get your first verified deal analysis within hours. No setup fees. No analyst to hire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/request-demo"
                    className="bg-amber hover:bg-amber/90 text-white text-xs font-bold uppercase tracking-[0.08em] px-7 py-3.5 rounded-md transition-all hover:-translate-y-px"
                  >
                    Get a Demo
                  </Link>
                  <Link href="/results" className="text-white/70 hover:text-white text-sm transition-colors py-3.5 px-2">
                    Read customer case studies →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
