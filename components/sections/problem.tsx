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
    body: "Everyone is building AI Agents. The outputs are convincing, but on shaky foundation. Garbage in, garbage out — at AI speed.",
    stat: "~95% of data-driven errors and hallucinations go undetected until it's too late.",
  },
]

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
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          The Problem
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          GTM AI is running on<br />
          systematically bad data.
        </h2>
        <p
          className="text-lg leading-relaxed text-white/60 max-w-[560px] mb-12"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Teams are plugging Gong and Salesforce into AI workflows via MCP and raw APIs. The AI trusts what it finds. What it finds is wrong.
        </p>

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
