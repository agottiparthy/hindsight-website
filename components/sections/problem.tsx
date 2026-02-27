"use client"

const problems = [
  {
    num: "01 / CRM",
    title: "Win-Loss reasons are fiction",
    body: "Reps enter loss reasons under time pressure, after a deal they'd rather forget. The data reflects what's convenient, not what's true.",
    stat: "~33% of deals show significant mismatch between CRM loss reasons and buyer interview results.",
  },
  {
    num: "02 / Call Transcripts",
    title: "Naive RAG misses the point",
    body: "Gong can tell you how often something was said. It can't tell you what impacted deal outcomes. AI inherits the noise.",
    stat: "~45% worse competitor attribution than Hindsight's semantic analysis",
  },
  {
    num: "03 / AI Agents",
    title: "Smarter models can't fix bad data",
    body: "Everyone is building AI Agents. The outputs are convincing, but on shaky foundation. Slop in, slop out — at AI speed.",
    stat: "~95% of data-driven errors and hallucinations go undetected until it's too late.",
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
          border border-[#D4A843]/40 bg-[rgba(15,31,61,0.85)]
          flex flex-col items-center justify-center gap-2 z-10"
        style={{ animation: "machinePulse 2.4s ease-in-out infinite" }}
      >
        {/* Input slot on left edge */}
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[5px] h-10 bg-[#D4A843]/40 rounded-l" />
        <div className="text-2xl">🤖</div>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#D4A843] text-center leading-snug"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
                "repeating-linear-gradient(90deg, rgba(212,168,67,0.5) 0px, rgba(212,168,67,0.5) 10px, transparent 10px, transparent 22px)",
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
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Raw GTM Data
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-0 left-0 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/random_icons/paper.png" alt="paper" width={16} height={16} />
            <span
              className="text-[10px] text-white/30 uppercase tracking-[0.1em]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
             Noise
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/random_icons/light-bulb.png" alt="insight" width={16} height={16} />
            <span
              className="text-[10px] text-white/30 uppercase tracking-[0.1em]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
    <section className="bg-[#0F1F3D] px-12 py-[100px] relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(212,168,67,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">

        {/* Top: text left, animation right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              The Slop Problem
            </p>
            <h2
              className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              GTM AI is running on<br />
              <em className="italic text-[#D4A843]">bad data.</em>
            </h2>
            <p
              className="text-lg leading-relaxed text-white/60 max-w-[480px]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Teams are plugging Gong and Salesforce into AI workflows via MCP and raw APIs. The AI trusts what it finds. What it finds is wrong.
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
              className="bg-[rgba(15,31,61,0.6)] px-8 py-9 hover:bg-[rgba(255,255,255,0.04)] transition-colors"
            >
              <div
                className="text-[11px] text-[#D4A843] tracking-[0.1em] mb-5"
                style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
              >
                {p.num}
              </div>
              <h3
                className="text-xl font-bold text-white leading-snug mb-3"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-white/55 leading-relaxed mb-5"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {p.body}
              </p>
              <p
                className="text-[11px] text-[#D4A843] tracking-[0.04em] pt-4 border-t border-white/[0.08]"
                style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
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
