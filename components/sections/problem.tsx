"use client"

const problems = [
  {
    num: "01 / CRM",
    title: "Win-loss reasons are fiction",
    body: "Reps fill in loss reasons after deals they would rather forget. The data reflects what was convenient, not what was true.",
    stat: "~33% of deals show significant mismatch between CRM loss reasons and buyer interview results.",
  },
  {
    num: "02 / Call Transcripts",
    title: "Frequency is not causality",
    body: "Gong tells you what came up, not what drove the outcome. Pricing was mentioned in 40% of calls — but did it cost you the deal?",
    stat: "75% more accurate competitor attribution than keyword-based tracking.",
  },
  {
    num: "03 / AI Agents",
    title: "Bad inputs, convincing outputs",
    body: "Win-loss programs cover less than 5% of deals and take months to deliver insights. That data is now flowing into every positioning, product, and competitive decision your team makes.",
    stat: "Hindsight corrected 128,000+ loss reasons in 2025.",
  },
]

// ─── Conveyor Belt Animation ─────────────────────────────────────────────────
// Pattern: p p p 💡 p — repeats so lightbulb always has papers either side
const BELT_PATTERN = ["paper", "paper", "paper", "lightbulb", "paper"] as const
const ICON_SRC: Record<string, string> = {
  paper:     "/random_icons/paper.png",
  lightbulb: "/random_icons/light-bulb.png",
}
const CYCLE_S = 7 // seconds for one full pass

function ConveyorBelt() {
  return (
    <div className="relative w-full h-[260px] select-none overflow-hidden">

      {/* Machine box */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[108px] h-[148px] rounded-xl
          border border-[#D97706]/40 bg-[rgba(13,27,62,0.85)]
          flex flex-col items-center justify-center gap-2 z-10"
        style={{ animation: "machinePulse 2.4s ease-in-out infinite" }}
      >
        {/* Input slot on left edge */}
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[5px] h-10 bg-[#D97706]/40 rounded-l" />
        <div className="text-2xl">🤖</div>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#D97706] text-center leading-snug"
          style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
        >
          Your<br />AI Agents
        </p>
        {/* Output glow dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
      </div>

      {/* Belt track area — stops just before the machine */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2" style={{ right: "116px" }}>

        {/* Riding items */}
        <div className="relative h-14">
          {BELT_PATTERN.map((icon, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={ICON_SRC[icon]}
              alt={icon}
              width={28}
              height={28}
              className="absolute"
              style={{
                top: "50%",
                marginTop: "-14px",
                left: 0,
                animation: `conveyorRide ${CYCLE_S}s linear infinite`,
                animationDelay: `${-((i / BELT_PATTERN.length) * CYCLE_S)}s`,
              }}
            />
          ))}
        </div>

        {/* Belt surface */}
        <div className="h-[3px] rounded-full overflow-hidden bg-white/[0.07] relative">
          <div
            className="absolute inset-y-0 w-[200%]"
            style={{
              animation: "beltStripe 0.9s linear infinite",
              background:
                "repeating-linear-gradient(90deg, rgba(217,119,6,0.5) 0px, rgba(217,119,6,0.5) 10px, transparent 10px, transparent 22px)",
            }}
          />
        </div>

        {/* Belt legs */}
        <div className="flex mt-1" style={{ justifyContent: "space-around" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-px h-3 bg-white/[0.08]" />
          ))}
        </div>

        {/* Feed label */}
        <p
          className="text-[10px] uppercase tracking-[0.14em] text-white/20 mt-3"
          style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
        >
          Unverified Deal Data
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-0 left-0 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/random_icons/paper.png" alt="paper" width={16} height={16} />
            <span
              className="text-[10px] text-white/30 uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
            >
             Noise
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/random_icons/light-bulb.png" alt="insight" width={16} height={16} />
            <span
              className="text-[10px] text-white/30 uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
            >
              Insight
            </span>
          </div>
        </div>
    </div>
  )
}

export function ProblemSection() {
  return (
    <section className="bg-[#0D1B3E] px-12 py-[100px] relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(217,119,6,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">

        {/* Top: text left, animation right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D97706] mb-5"
              style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
            >
              The Problem
            </p>
            <h2
              className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              That deal is not<br />
              <em className="italic text-[#D97706]">an exception.</em>
            </h2>
            <p
              className="text-lg leading-relaxed text-white/60 max-w-[480px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Most teams have the right instincts. CRM fields required. Gong connected. A win-loss process in place. The problem is structural. The data was never accurate enough to act on.
            </p>
          </div>

          {/* Conveyor belt */}
          <div className="hidden md:block">
            <ConveyorBelt />
          </div>
        </div>

        <div
          className="grid md:grid-cols-3 rounded-lg overflow-hidden border border-white/[0.08]"
          style={{ gap: "2px", background: "rgba(255,255,255,0.06)" }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-[rgba(13,27,62,0.6)] px-8 py-9 hover:bg-[rgba(255,255,255,0.04)] transition-colors"
            >
              <div
                className="text-[11px] text-[#D97706] tracking-[0.1em] mb-5"
                style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
              >
                {p.num}
              </div>
              <h3
                className="text-xl font-bold text-white leading-snug mb-3"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-white/55 leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {p.body}
              </p>
              <p
                className="text-[11px] text-[#D97706] tracking-[0.04em] pt-4 border-t border-white/[0.08]"
                style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace" }}
              >
                {p.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
