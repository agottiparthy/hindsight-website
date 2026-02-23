"use client"

import { Container } from "@/components/ui/container"

const rows = [
  {
    label: "Annual cost",
    pmm: "$150–200K salary",
    firm: "$50–100K/project",
    hindsight: "$24–36K/year",
  },
  {
    label: "Time to first insight",
    pmm: "3–6 months to ramp",
    firm: "~86 days per project",
    hindsight: "Days, not months",
  },
  {
    label: "Deal coverage",
    pmm: "Sample-based",
    firm: "<1% of deals",
    hindsight: "100% of deals",
  },
  {
    label: "Freshness",
    pmm: "Manual, ad hoc",
    firm: "Point-in-time report",
    hindsight: "Continuously updated",
  },
  {
    label: "CRM validation",
    pmm: "✗",
    firm: "✗",
    hindsight: "✓ Validated against transcripts",
    pmmStyle: { color: "#9CA3AF" },
    firmStyle: { color: "#9CA3AF" },
    hindsightStyle: { color: "#166534", fontWeight: 600 },
  },
  {
    label: "Rep enablement",
    pmm: "Ad hoc",
    firm: "✗ Not included",
    hindsight: "✓ Built in",
    firmStyle: { color: "#9CA3AF" },
    hindsightStyle: { color: "#166534", fontWeight: 600 },
  },
]

export function ComparisonSection() {
  return (
    <div style={{ background: "#F8F6F1" }}>
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
          The honest comparison
          <span style={{ display: "block", width: "32px", height: "1px", background: "#D4A843" }} />
        </div>

        {/* Headline */}
        <h2
          className="reveal reveal-delay-1 mb-12"
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
          What you&rsquo;re really<br />choosing between.
        </h2>

        {/* Table */}
        <div
          className="reveal reveal-delay-2 overflow-x-auto"
          style={{
            borderRadius: "16px",
            boxShadow: "0 4px 40px rgba(15,31,61,0.08)",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "#0F1F3D" }}>
                <th style={{ width: "220px", padding: "20px 24px" }} />
                <th
                  style={{
                    padding: "20px 24px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    textAlign: "left",
                    letterSpacing: "0.5px",
                  }}
                >
                  In-house PMM
                </th>
                <th
                  style={{
                    padding: "20px 24px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    textAlign: "left",
                    letterSpacing: "0.5px",
                  }}
                >
                  Traditional firm
                </th>
                <th
                  style={{
                    padding: "20px 24px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#D4A843",
                    textAlign: "left",
                    letterSpacing: "0.5px",
                  }}
                >
                  Hindsight
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    borderBottom: i < rows.length - 1 ? "1px solid #E8E4DC" : "none",
                  }}
                >
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0F1F3D",
                      background: "rgba(248,246,241,0.8)",
                    }}
                  >
                    {row.label}
                  </td>
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      color: "#374151",
                      background: "#FFFFFF",
                      ...(row.pmmStyle || {}),
                    }}
                  >
                    {row.pmm}
                  </td>
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      color: "#374151",
                      background: "#FFFFFF",
                      ...(row.firmStyle || {}),
                    }}
                  >
                    {row.firm}
                  </td>
                  <td
                    style={{
                      padding: "16px 24px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0F1F3D",
                      background: "rgba(212,168,67,0.06)",
                      ...(row.hindsightStyle || {}),
                    }}
                  >
                    {row.hindsight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}
