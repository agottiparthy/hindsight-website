const stats = [
  { num: "350", suffix: "K+", desc: "Deals analyzed and verified" },
  { num: "13",   suffix: "K+", desc: "Win-loss interviews conducted" },
  { num: "128",  suffix: "K+",  desc: "Inaccuracies detected and corrected" },
  { num: "44",  suffix: "%",  desc: "Avg improvement in win-loss accuracy" },
]

export function StatsBarSection() {
  return (
    <section className="bg-navy py-10 px-12 relative overflow-hidden">
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
              <div className="text-[40px] font-bold text-white leading-none tracking-[-0.03em] mb-1.5">
                {s.num}
                <span className="text-amber">{s.suffix}</span>
              </div>
              <div className="text-sm text-white/50 leading-snug">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
