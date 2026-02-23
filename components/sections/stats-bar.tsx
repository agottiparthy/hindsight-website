import { Container } from "@/components/ui/container"

const stats = [
  { number: "350K+", label: "Deals analyzed" },
  { number: "3K+", label: "Win-loss interviews conducted" },
  { number: "$250M+", label: "Revenue impacted" },
  { number: "1 hr", label: "Time to first insight" },
]

export function StatsBarSection() {
  return (
    <div
      className="reveal"
      style={{
        background: "#0F1F3D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Amber top-edge rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #D4A843 0%, transparent 100%)",
        }}
      />

      <Container size="wide">
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ padding: "36px 0" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="py-4 lg:py-0"
            style={{
              paddingLeft: i > 0 ? "40px" : 0,
              paddingRight: i < stats.length - 1 ? "40px" : 0,
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                fontSize: "44px",
                fontWeight: 900,
                color: "#D4A843",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {stat.number}
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      </Container>
    </div>
  )
}
