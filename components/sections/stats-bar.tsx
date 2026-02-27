const stats = [
  { num: "350", suffix: "K+", desc: "Deals analyzed and verified" },
  { num: "3",   suffix: "K+", desc: "Buyer interviews conducted" },
  { num: "44",  suffix: "%",  desc: "Avg improvement in loss reason accuracy" },
  { num: "75",  suffix: "%",  desc: "Better competitor attribution vs. Gong" },
]

export function StatsBarSection() {
  return (
    <section className="bg-[#0F1F3D] py-10 px-12 relative overflow-hidden">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.012) 40px,
            rgba(255,255,255,0.012) 41px
          )`,
        }}
      />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-2 px-10 ${i !== 0 ? "border-l border-white/[0.08]" : ""} ${i === 0 ? "pl-0" : ""}`}
            >
              <div
                className="text-[40px] font-bold text-white leading-none tracking-[-0.03em] mb-1.5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {s.num}
                <span className="text-[#D4A843]">{s.suffix}</span>
              </div>
              <div
                className="text-sm text-white/50 leading-snug"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
