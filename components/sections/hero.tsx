"use client"

import Link from "next/link"
import Image from "next/image"

const trustLogos = [
  { name: "LaunchDarkly", src: "/customer_logos/launchdarkly-Logo-Vector.svg-.png" },
  { name: "Ironclad", src: "/customer_logos/ironclad logo.svg" },
  { name: "Fathom", src: "/customer_logos/fathom logo.svg" },
  { name: "PurpleLab", src: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png" },
  { name: "Simpro", src: "/customer_logos/simpro.svg" },
]

export function HeroSection() {
  return (
    <section
      className="min-h-screen pt-[72px]"
      style={{ background: "#F8F6F1" }}
    >
      <style>{`
        .hero-trust-logo { opacity: 0.4; filter: saturate(0); transition: opacity 0.2s; }
        .hero-trust-logo:hover { opacity: 0.65; }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 min-h-[calc(100vh-72px)]">
      {/* Left: text content */}
      <div
        className="flex flex-col justify-center py-20"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-2 mb-7"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#D4A843",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.1s forwards",
          }}
        >
          <span
            style={{ display: "block", width: "24px", height: "1px", background: "#D4A843" }}
          />
          Win-Loss &amp; Competitive Intelligence
        </div>

        {/* Headline */}
        <h1
          className="mb-7"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 5.5vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#0F1F3D",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.2s forwards",
          }}
        >
          Know exactly<br />why you{" "}
          <em style={{ fontStyle: "italic", color: "#D4A843" }}>lose.</em>
        </h1>

        {/* Body */}
        <p
          className="mb-11"
          style={{
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "#374151",
            maxWidth: "480px",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.35s forwards",
          }}
        >
          Hindsight runs your win-loss and competitive intelligence program — fully managed, AI-powered, and live on every deal. No analyst to hire. No consultant to wait for.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.45s forwards",
          }}
        >
          <Link
            href="/demo"
            className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-lg transition-all"
            style={{ background: "#D4A843", color: "#0F1F3D", letterSpacing: "0.1px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ECC96A"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(212,168,67,0.35)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#D4A843"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
            }}
          >
            Get a Demo
          </Link>
          <Link
            href="#how"
            className="inline-block text-[15px] font-normal px-7 py-3.5 rounded-lg transition-all"
            style={{
              color: "#0F1F3D",
              background: "transparent",
              border: "1.5px solid rgba(15,31,61,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#0F1F3D"
              ;(e.currentTarget as HTMLElement).style.background = "#0F1F3D"
              ;(e.currentTarget as HTMLElement).style.color = "#FFFFFF"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,61,0.2)"
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "#0F1F3D"
            }}
          >
            See how it works
          </Link>
        </div>

        {/* Trust strip */}
        <div
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.55s forwards",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: "16px",
            }}
          >
            Trusted by GTM teams at
          </div>
          <div className="flex items-center flex-wrap gap-6">
            {trustLogos.map((logo) => (
              <div key={logo.name} className="relative h-6 w-24 flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="hero-trust-logo object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: JSX product UI card */}
      <div
        className="relative flex items-center justify-center py-20"
        style={{
          opacity: 0,
          animation: "fadeIn 1s ease 0.4s forwards",
        }}
      >
        <div className="relative w-full max-w-[500px]">

          {/* Floating quote card — top left */}
          <div
            className="absolute z-10 animate-float-delayed"
            style={{
              top: "-24px",
              left: "-28px",
              background: "#FFFFFF",
              borderRadius: "12px",
              padding: "14px 16px",
              boxShadow: "0 8px 32px rgba(15,31,61,0.12)",
              maxWidth: "200px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                fontSize: "12px",
                lineHeight: 1.5,
                color: "#0F1F3D",
                fontStyle: "italic",
              }}
            >
              "My reps are winning deals thanks to messaging identified by Hindsight."
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ background: "#D4A843", color: "#0F1F3D" }}
              >
                TD
              </div>
              <span style={{ fontSize: "11px", color: "#6B7280" }}>Tye Davis, Sr. PMM</span>
            </div>
          </div>

          {/* Card behind — decorative navy */}
          <div
            style={{
              position: "absolute",
              left: "-20px",
              top: "32px",
              right: "20px",
              background: "#0F1F3D",
              borderRadius: "16px",
              padding: "24px",
              zIndex: 1,
              opacity: 0.9,
              bottom: 0,
            }}
          />

          {/* Main card */}
          <div
            className="relative z-10"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              boxShadow: "0 4px 40px rgba(15,31,61,0.1), 0 1px 4px rgba(15,31,61,0.06)",
              padding: "24px",
            }}
          >
            {/* Card tag */}
            <div
              className="flex items-center gap-1.5 mb-4"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#D4A843",
              }}
            >
              <span
                className="animate-pulse-dot"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#D4A843",
                  display: "inline-block",
                }}
              />
              Live deal analysis
            </div>

            {/* Card title */}
            <div
              className="mb-5"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#0F1F3D",
                lineHeight: 1.3,
              }}
            >
              Q4 Closed Deals — Competitive Review
            </div>

            {/* Deal rows */}
            {[
              { company: "Workday — $185K ARR", meta: "Lost vs. Competitor A · Pricing gap flagged", badge: "Lost", badgeStyle: { background: "rgba(239,68,68,0.1)", color: "#991B1B" } },
              { company: "Amplitude — $220K ARR", meta: "Won · Integration story decisive", badge: "Won", badgeStyle: { background: "rgba(34,197,94,0.12)", color: "#166534" } },
              { company: "Figma — $94K ARR", meta: "At risk · Competitor re-engaged late", badge: "At Risk", badgeStyle: { background: "rgba(212,168,67,0.15)", color: "#92400E" } },
            ].map((deal, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5"
                style={{
                  borderBottom: i < 2 ? "1px solid #E8E4DC" : "none",
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#0F1F3D" }}>
                    {deal.company}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>
                    {deal.meta}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "3px 10px",
                    borderRadius: "100px",
                    flexShrink: 0,
                    marginLeft: "12px",
                    ...deal.badgeStyle,
                  }}
                >
                  {deal.badge}
                </span>
              </div>
            ))}

            {/* AI Insight strip */}
            <div
              className="mt-4"
              style={{
                background: "rgba(15,31,61,0.04)",
                borderRadius: "10px",
                padding: "14px 16px",
                borderLeft: "3px solid #D4A843",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#D4A843",
                  marginBottom: "6px",
                }}
              >
                AI Insight
              </div>
              <div style={{ fontSize: "13px", lineHeight: 1.5, color: "#0F1F3D" }}>
                Pricing is cited in 38% of losses this quarter — up 14pts vs Q3. Competitor A dropped their Pro tier by ~20%.
              </div>
            </div>
          </div>

          {/* Floating stat badge — bottom right */}
          <div
            className="absolute z-20 animate-float"
            style={{
              bottom: "-20px",
              right: "-24px",
              background: "#0F1F3D",
              borderRadius: "12px",
              padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(15,31,61,0.25)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                fontSize: "32px",
                fontWeight: 900,
                color: "#D4A843",
                lineHeight: 1,
              }}
            >
              +12%
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "4px", letterSpacing: "0.5px" }}>
              Competitive win rate<br />LaunchDarkly
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}
