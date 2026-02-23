"use client"

import Link from "next/link"

export function CTASection() {
  return (
    <div
      style={{
        background: "#0F1F3D",
        padding: "120px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial amber glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative">
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "#FFFFFF",
            maxWidth: "680px",
            margin: "0 auto 24px",
          }}
        >
          Start knowing why you{" "}
          <em style={{ color: "#D4A843", fontStyle: "italic" }}>win</em>{" "}
          and lose.
        </h2>

        <p
          className="reveal reveal-delay-1"
          style={{
            fontSize: "17px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "480px",
            margin: "0 auto 44px",
            lineHeight: 1.65,
          }}
        >
          Connect your CRM, get your first deal analysis in hours. No setup fees. No analyst to hire.
        </p>

        <div
          className="reveal reveal-delay-2 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/demo"
            className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-lg transition-all"
            style={{ background: "#D4A843", color: "#0F1F3D" }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "#ECC96A"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(212,168,67,0.35)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "#D4A843"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
            }}
          >
            Get a Demo
          </Link>
          <Link
            href="/results"
            className="inline-block text-[15px] font-normal px-7 py-3.5 rounded-lg transition-all"
            style={{
              color: "rgba(255,255,255,0.7)",
              border: "1.5px solid rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"
              ;(e.currentTarget as HTMLElement).style.color = "#FFFFFF"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"
              ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"
            }}
          >
            Read case studies →
          </Link>
        </div>
      </div>
    </div>
  )
}
