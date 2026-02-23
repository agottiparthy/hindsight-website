"use client"

import { Container } from "@/components/ui/container"

const deliverables = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Win-Loss on Every Deal",
    body: "Not a sample. Every closed deal analyzed — call transcripts, emails, and CRM fields. CRM loss reasons validated and corrected automatically.",
    items: [
      "AI deal review on 100% of closed deals",
      "CRM enrichment — validated data pushed back",
      "Win-loss interviews at scale (5–10× volume)",
      "Leadership readouts tailored per audience",
    ],
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "AI Agent",
    body: "The platform layer powering everything. Chat for instant answers, analytics for self-serve deep dives, and automated workflows that run without you.",
    items: [
      "Chat — ask anything, get grounded answers",
      "Analytics — slice by segment, competitor, rep",
      "Workflows — competitor monitoring, alerts",
      "Recipes — custom automations built to your goals",
    ],
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Enablement",
    body: "After baseline analysis, we activate the sales team. Battlecards grounded in real deal data. AI roleplays built on actual competitor objections.",
    items: [
      "Battlecards auto-updated from deal intelligence",
      "AI competitive roleplays for reps",
      "Slack assistant for mid-deal answers",
      "Based on findings — not generic templates",
    ],
  },
]

export function DeliverablesSection() {
  return (
    <div id="how" style={{ background: "#F8F6F1" }}>
      <Container className="py-24">
        {/* Eyebrow */}
        <div
          className="reveal flex items-center gap-2.5 mb-4"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#D4A843",
          }}
        >
          What we deliver
          <span style={{ display: "block", width: "32px", height: "1px", background: "#D4A843" }} />
        </div>

        {/* Headline */}
        <h2
          className="reveal reveal-delay-1 mb-16"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 4vw, 54px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#0F1F3D",
            maxWidth: "600px",
          }}
        >
          A complete intelligence program.{" "}
          <em style={{ fontStyle: "italic", color: "#D4A843" }}>Done for you.</em>
        </h2>

        {/* Cards grid */}
        <div
          className="reveal reveal-delay-2 grid md:grid-cols-3"
          style={{
            gap: "2px",
            background: "#E8E4DC",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {deliverables.map((d) => (
            <div
              key={d.num}
              className="group"
              style={{
                background: "#FFFFFF",
                padding: "40px 36px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "rgba(248,246,241,0.5)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "#FFFFFF"
              }}
            >
              {/* Top accent on hover */}
              <div
                className="group-hover-amber-top"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "transparent",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = "#D4A843"
                }}
              />

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#6B7280",
                  marginBottom: "20px",
                }}
              >
                {d.num}
              </div>

              <div
                className="deliverable-icon"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(15,31,61,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  color: "#0F1F3D",
                  transition: "background 0.25s, color 0.25s",
                }}
              >
                {d.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0F1F3D",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {d.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "#374151",
                  marginBottom: "24px",
                }}
              >
                {d.body}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {d.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#D4A843", flexShrink: 0, fontSize: "12px" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
