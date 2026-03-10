import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px] flex items-center justify-center">
        <div className="px-6 md:px-12 py-24 text-center max-w-2xl mx-auto">
          {/* 404 Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy/5 border border-navy/10 mb-8">
            <span className="text-3xl font-bold text-navy">404</span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.025em] text-navy mb-4">
            This page doesn&apos;t exist.
          </h1>

          {/* Description */}
          <p className="text-lg text-body leading-relaxed mb-8 max-w-md mx-auto">
            Looks like this deal closed before we could analyze it. Let&apos;s get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-navy text-white text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-blue transition-all hover:-translate-y-px"
            >
              Go home
            </Link>
            <Link
              href="/request-demo"
              className="text-navy text-sm font-semibold border border-navy/20 px-7 py-3.5 rounded hover:border-navy/40 transition-colors"
            >
              Request a demo
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-[0.14em] text-body/60 font-mono mb-4">
              Looking for something?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/pricing" className="text-sm text-navy hover:text-amber transition-colors">
                Pricing
              </Link>
              <Link href="/results" className="text-sm text-navy hover:text-amber transition-colors">
                Customer Stories
              </Link>
              <Link href="/compare" className="text-sm text-navy hover:text-amber transition-colors">
                Comparisons
              </Link>
              <Link href="/solutions/win-loss-analysis" className="text-sm text-navy hover:text-amber transition-colors">
                Win-Loss Analysis
              </Link>
              <Link href="/platform/ai-assistant" className="text-sm text-navy hover:text-amber transition-colors">
                AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
