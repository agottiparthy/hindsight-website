import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// ── Hindsight icon ────────────────────────────────────────────────────
const HsIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 250 250" width={size} height={size}>
    <path d="M39.1406 54.5834C38.2656 51.1885 37.5 46.0414 37.5 43.1941V37.9375H98.4219C148.625 37.9375 160.547 38.266 165.469 39.5802C168.75 40.4563 174.656 42.7561 178.594 44.7273C183.188 47.027 188.438 50.9695 193.469 56.0071C198.281 60.8256 202.547 66.4108 205.062 71.3388C207.25 75.6098 209.875 81.9616 210.75 85.5755C212.062 90.2845 212.5 97.2933 212.5 110.435C212.5 120.619 212.172 128.833 211.734 128.833C211.188 128.723 209.328 126.643 207.469 124.124C205.609 121.605 201.016 117.115 197.078 114.268C193.25 111.311 187.344 107.916 184.062 106.602C178.375 104.412 175.531 104.193 134.297 103.536C97.875 102.988 89.4531 102.55 83.9844 101.017C80.375 99.9216 74.4688 97.6218 70.8594 95.6506C67.25 93.7889 60.7969 88.7513 56.5312 84.4803C51.1719 79.2237 47.5625 74.4052 44.7188 68.9296C42.5312 64.5491 40.0156 58.0878 39.1406 54.5834Z" fill="#379BFF"/>
    <path d="M39.25 138.141C38.2656 134.528 37.5 129.271 37.5 126.424V121.167H97.875C148.406 121.167 159.453 121.386 164.922 122.81C168.531 123.795 174.656 126.095 178.594 128.066C183.188 130.257 188.438 134.309 193.359 139.237C198.281 144.055 202.547 149.75 205.062 154.568C207.25 158.73 209.766 165.191 210.75 168.805C211.953 173.514 212.5 180.632 212.5 193.774C212.5 203.849 212.172 212.062 211.625 212.062C211.188 212.062 209.109 209.763 207.031 206.915C204.953 204.178 200.25 199.797 196.641 197.169C193.031 194.65 187.344 191.365 184.062 190.05C178.266 187.532 176.734 187.422 133.75 186.875C92.4062 186.217 89.0156 185.998 82.3438 183.808C78.4062 182.494 72.0625 179.647 68.2344 177.347C64.4062 175.047 58.2812 169.9 54.5625 165.958C50.9531 162.015 46.3594 155.663 44.3906 151.721C42.4219 147.888 40.125 141.755 39.25 138.141Z" fill="#81DBFD"/>
  </svg>
)

// ── Hero Slack visual — weekly competitive summary ────────────────────
function HeroSlackVisual() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[#2d2d35] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      style={{ background: "#1a1d21", fontFamily: "system-ui, sans-serif" }}
    >
      <div className="grid" style={{ gridTemplateColumns: "164px 1fr" }}>
        {/* Sidebar */}
        <div style={{ background: "#19171d", borderRight: "1px solid #2d2d35" }} className="p-3">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-white mb-3 px-1">
            <div className="w-5 h-5 rounded bg-[#4a154b] flex items-center justify-center text-[9px] text-white">A</div>
            Acme Corp
          </div>
          {["#general", "#product", "#sales"].map((ch) => (
            <div key={ch} className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white/35 mx-1">{ch}</div>
          ))}
          <div
            className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white rounded mx-1 mt-0.5"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <span className="text-white/50 text-[10px]">#</span> competitive-intel
          </div>
          {["#win-loss"].map((ch) => (
            <div key={ch} className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-white/35 mx-1 mt-0.5">{ch}</div>
          ))}
        </div>

        {/* Main */}
        <div className="p-4">
          {/* Channel header */}
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#2d2d35]">
            <span className="text-white/40 text-[11px]">#</span>
            <span className="text-[12px] font-semibold text-white">competitive-intel</span>
            <span className="ml-auto text-[9px] text-white/25 font-mono">234 members</span>
          </div>

          {/* Hindsight message */}
          <div className="flex gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#0d1117] p-1 flex-shrink-0">
              <HsIcon size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[12px] font-bold text-white">Hindsight</span>
                <span className="text-[9px] bg-white/10 text-white/50 px-1.5 py-0.5 rounded uppercase tracking-wide">App</span>
                <span className="text-[10px] text-white/25">Mon 9:00 AM</span>
              </div>

              {/* Attachment card */}
              <div
                className="rounded-md p-3 border-l-[3px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeftColor: "#379BFF",
                  borderLeftWidth: 3,
                }}
              >
                <div className="text-[12px] font-bold text-white mb-0.5">
                  📊 Weekly Competitive Summary — Mar 9, 2026
                </div>
                <div className="text-[10px] text-white/40 mb-3">Auto-generated · Workflows · Every Monday 9 AM</div>

                <div className="flex flex-col gap-2">
                  {/* Win rate row */}
                  <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                    <span className="text-[11px] text-white/60">Win rate vs. Competitor A</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-emerald-400">47%</span>
                      <span className="text-[9px] text-emerald-400/70 font-mono">↑ +6 pts</span>
                    </div>
                  </div>
                  {/* New mentions */}
                  <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                    <span className="text-[11px] text-white/60">New competitor mentions this week</span>
                    <span className="text-[11px] font-bold text-white">14</span>
                  </div>
                  {/* Battlecards */}
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-[11px] text-white/60">Battlecard updates triggered</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(55,155,255,0.15)", color: "#7bbfff" }}>3 updated</span>
                  </div>
                </div>

                <button className="mt-3 text-[10px] border border-white/10 text-white/50 px-3 py-1 rounded">
                  View full report →
                </button>
              </div>

              {/* Reaction row */}
              <div className="flex items-center gap-1.5 mt-2">
                {["👍 4", "🔥 2"].map((r) => (
                  <span
                    key={r}
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Recipe builder visual ─────────────────────────────────────────────
function RecipeBuilderVisual() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[#E8E4DC] bg-white shadow-[0_8px_32px_rgba(15,31,61,0.10)]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e8e8ec] bg-[#fafafa]">
        <span className="text-[12px] font-bold text-[#111113]">Configure Workflow</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#9999aa] font-mono">Recipe Builder</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Prompt */}
        <div>
          <label className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#9999aa] mb-1.5 block">Prompt</label>
          <div
            className="rounded-lg border border-[#e0e0ea] bg-[#fafafa] px-3 py-2.5 text-[11px] text-[#333344] leading-relaxed"
          >
            Summarize win rates, new competitor mentions, and battlecard updates from the past 7 days. Format for Slack.
            <span className="inline-block w-0.5 h-3 bg-[#379BFF] align-middle ml-0.5 animate-pulse" />
          </div>
        </div>

        {/* Schedule */}
        <div>
          <label className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#9999aa] mb-1.5 block">Schedule</label>
          <div className="flex gap-2">
            {["Daily", "Weekly", "Monthly", "Custom"].map((opt) => (
              <button
                key={opt}
                className="flex-1 py-1.5 rounded-md text-[10px] font-semibold border transition-colors"
                style={
                  opt === "Weekly"
                    ? { background: "#0F1F3D", color: "#fff", borderColor: "#0F1F3D" }
                    : { background: "#fff", color: "#9999aa", borderColor: "#e0e0ea" }
                }
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e0e0ea] bg-[#fafafa]">
            <span className="text-[10px] text-[#9999aa]">Runs every</span>
            <span className="text-[10px] font-bold text-[#111113] bg-white border border-[#ddd] rounded px-2 py-0.5">Monday</span>
            <span className="text-[10px] text-[#9999aa]">at</span>
            <span className="text-[10px] font-bold text-[#111113] bg-white border border-[#ddd] rounded px-2 py-0.5">9:00 AM</span>
          </div>
        </div>

        {/* Destination */}
        <div>
          <label className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#9999aa] mb-1.5 block">Delivery destination</label>
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Slack channel", sub: "#competitive-intel", active: true, icon: "/integration_logos/slack.png" },
              { label: "Email", sub: "team@acmecorp.com", active: false, icon: "/integration_logos/gmail.png" },
            ].map((dest) => (
              <div
                key={dest.label}
                className="flex items-center gap-3 px-3 py-2 rounded-lg border"
                style={
                  dest.active
                    ? { borderColor: "#379BFF", background: "rgba(55,155,255,0.05)" }
                    : { borderColor: "#e0e0ea", background: "#fff" }
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dest.icon} alt={dest.label} className="w-4 h-4 object-contain flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold text-[#333344]">{dest.label}</div>
                  <div className="text-[9px] text-[#9999aa] font-mono">{dest.sub}</div>
                </div>
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={dest.active ? { borderColor: "#379BFF" } : { borderColor: "#d0d0dc" }}
                >
                  {dest.active && <div className="w-1.5 h-1.5 rounded-full bg-[#379BFF]" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <button className="w-full py-2.5 rounded-lg bg-[#0F1F3D] text-white text-[11px] font-bold tracking-[0.05em]">
          Save &amp; Activate Workflow
        </button>
      </div>
    </div>
  )
}

// ── Recipe library grid ───────────────────────────────────────────────
const recipeCategories = [
  {
    tag: "Competitive",
    icon: "⊕",
    desc: "Win rates by competitor, battlecard updates, new mention alerts. Delivered on a schedule.",
    accentBg: "bg-blue-50",
    accentText: "text-blue-800",
    accentBorder: "border-blue-100",
    count: "8 recipes",
  },
  {
    tag: "Enablement",
    icon: "◈",
    desc: "Coaching summaries, talk track updates, objection handling refreshers for your reps.",
    accentBg: "bg-amber-50",
    accentText: "text-amber-800",
    accentBorder: "border-amber-100",
    count: "6 recipes",
  },
  {
    tag: "Marketing",
    icon: "◻",
    desc: "Message-market fit analysis, ICP shifts, positioning updates from real buyer language.",
    accentBg: "bg-violet-50",
    accentText: "text-violet-800",
    accentBorder: "border-violet-100",
    count: "5 recipes",
  },
  {
    tag: "Operations",
    icon: "▣",
    desc: "CRM hygiene checks, deal coverage reports, pipeline risk alerts on a custom cadence.",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-800",
    accentBorder: "border-emerald-100",
    count: "7 recipes",
  },
  {
    tag: "Product",
    icon: "≡",
    desc: "Feature gap reports, roadmap inputs, buyer feedback summaries from closed lost deals.",
    accentBg: "bg-rose-50",
    accentText: "text-rose-800",
    accentBorder: "border-rose-100",
    count: "5 recipes",
  },
  {
    tag: "Sales",
    icon: "⌘",
    desc: "Rep performance trends, deal quality scores, win-loss summaries for your weekly review.",
    accentBg: "bg-slate-50",
    accentText: "text-slate-800",
    accentBorder: "border-slate-100",
    count: "6 recipes",
  },
]

// ── What teams automate cards ─────────────────────────────────────────
const automations = [
  {
    icon: "📊",
    title: "Weekly competitive summary",
    body: "Win rates, new competitor mentions, battlecard updates. Delivered to your Slack channel every Monday morning.",
    cadence: "Weekly · Monday 9 AM",
    dest: "Slack",
  },
  {
    icon: "🗂",
    title: "Product gap report",
    body: "Feature gaps from closed lost deals, ranked by pipeline impact. Sent to your product channel on a custom cadence.",
    cadence: "Monthly · 1st of month",
    dest: "Slack",
  },
  {
    icon: "🃏",
    title: "Battlecard updates",
    body: "When new deals close against a competitor, the battlecard updates automatically. Reps always have the latest intel.",
    cadence: "On new deal close",
    dest: "Slack + CRM",
  },
]

// ── How it works steps ────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Build a recipe.",
    body: "Start from a pre-built template or create your own. Natural language prompt. No code required.",
  },
  {
    num: "02",
    title: "Set a schedule.",
    body: "Daily, weekly, monthly, or on a custom cadence. Run on demand any time.",
  },
  {
    num: "03",
    title: "Choose where it lands.",
    body: "Slack channel, Slack DM, email, or your CRM via Zapier. The insight reaches your team where they work.",
  },
]

// ── Page ──────────────────────────────────────────────────────────────
export default function WorkflowsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[72px]">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px] relative overflow-hidden">
          <div
            className="absolute -top-[300px] right-0 w-[700px] h-[700px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
          />
          <div className="max-w-[1280px] mx-auto relative grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Workflows
              </p>
              <h1 className="text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-6">
                Your best analysis.{" "}
                <em className="italic text-amber">Running automatically.</em>
              </h1>
              <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[480px]">
                You know which questions matter. Competitive trends. Product gaps. Rep performance. Workflows run those questions on a schedule and push the answers to your team automatically.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/request-demo"
                  className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-7 py-3.5 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/platform"
                  className="text-white/70 text-sm border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
                >
                  See the recipe library →
                </Link>
              </div>
            </div>
            <div className="w-full">
              <HeroSlackVisual />
            </div>
          </div>
        </section>

        {/* ── Problem callout ──────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[760px] mx-auto">
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-8">
              The analysis exists.{" "}
              <span className="text-body font-normal">Nobody has time to run it every week.</span>
            </h2>

            <div className="flex flex-col gap-0 border border-[#E8E4DC] rounded-xl overflow-hidden">
              {[
                "A competitive summary that used to take two hours every Friday.",
                "A product gap report your PM asked for every month.",
                "A deal alert every time a key competitor is mentioned.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-4 px-6 py-5 border-b border-[#E8E4DC] last:border-0 bg-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <p className="text-[16px] text-navy leading-relaxed">{line}</p>
                </div>
              ))}
              <div className="px-6 py-5 bg-[#0F1F3D]">
                <p className="text-[15px] text-white/80 leading-relaxed">
                  Workflows run all of it. Without anyone touching it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What teams automate ──────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                Examples
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
                What teams automate.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {automations.map((a) => (
                <div key={a.title} className="bg-background border border-[#E8E4DC] rounded-xl p-6 flex flex-col gap-3">
                  <span className="text-[22px]">{a.icon}</span>
                  <h3 className="text-[15px] font-bold text-navy">{a.title}</h3>
                  <p className="text-[13px] text-body leading-relaxed flex-1">{a.body}</p>
                  <div className="flex items-center gap-3 pt-1 border-t border-[#E8E4DC] mt-1">
                    <span className="text-[10px] font-mono text-[#9999aa]">{a.cadence}</span>
                    <span className="text-[#E8E4DC]">·</span>
                    <span className="text-[10px] font-mono text-[#9999aa]">{a.dest}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────── */}
        <section className="px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-start">

            {/* Steps */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                How It Works
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-10">
                How it works.
              </h2>
              <div className="flex flex-col gap-8">
                {steps.map((step, i) => (
                  <div key={step.num} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center">
                      <span className="text-[11px] font-bold font-mono text-amber">{step.num}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-[16px] font-bold text-navy mb-1">{step.title}</h3>
                      <p className="text-[14px] text-body leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div>
              <RecipeBuilderVisual />
            </div>

          </div>
        </section>

        {/* ── Recipe library ───────────────────────────────────────── */}
        <section className="px-12 py-[100px] bg-card border-y border-[#E8E4DC]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12 md:flex items-end justify-between gap-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
                  Recipe Library
                </p>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-4 max-w-xl">
                  Start from the recipe library.
                </h2>
                <p className="text-[15px] text-body leading-relaxed max-w-xl">
                  Pre-built workflows for every team. Competitive intel, win-loss reports, product gap summaries, sales coaching, rep performance. Pick one, remix it, make it yours.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {recipeCategories.map((cat) => (
                <div
                  key={cat.tag}
                  className={`rounded-xl border p-6 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer ${cat.accentBorder} ${cat.accentBg}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.1em] ${cat.accentText}`}>
                      {cat.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#9999aa]">{cat.count}</span>
                  </div>
                  <p className="text-[13px] text-body leading-relaxed flex-1">{cat.desc}</p>
                  <span className={`text-[11px] font-semibold ${cat.accentText}`}>Browse →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-navy px-12 py-[100px]">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5 font-mono">
              Get Started
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mb-9 max-w-2xl mx-auto">
              Set up your first workflow in minutes.
            </h2>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="/request-demo"
                className="bg-amber text-navy text-sm font-bold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-amber/90 transition-all hover:-translate-y-px"
              >
                Get a Demo
              </Link>
              <Link
                href="/platform"
                className="text-white/60 text-sm border-b border-white/30 pb-px hover:text-white transition-colors"
              >
                Browse the recipe library →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
