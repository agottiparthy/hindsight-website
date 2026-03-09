"use client"

import { useEffect, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const REP = { initials: "MR", name: "Marcus Rodriguez", title: "Account Executive" }

const COMPETITOR_ROWS = [
  { name: "Acme Inc.",   wr: 71, deals: 7, delta: "+9%",  up: true },
  { name: "Ironclad",   wr: 38, deals: 5, delta: "–8%",  up: false },
  { name: "Frontline",  wr: 60, deals: 4, delta: "+4%",  up: true },
  { name: "Legacy Ops", wr: 80, deals: 3, delta: "+15%", up: true },
]

const SCENARIO_ROWS = [
  { name: "Midmarket expansion", wr: 78, deals: 6,  bg: "#EAF4EF", bar: "#2A5C45" },
  { name: "New business (SMB)",  wr: 52, deals: 9,  bg: "#EEF2FE", bar: "#3B5FD4" },
  { name: "Enterprise new logo", wr: 33, deals: 3,  bg: "#FEF2F2", bar: "#EF4444" },
  { name: "Upsell / expansion",  wr: 85, deals: 8,  bg: "#FFF9EB", bar: "#D4A843" },
]

const COACHING_ROWS = [
  { name: "Pricing objection", pct: 42, color: "#EF4444", bg: "#FEF2F2", note: "Loses pricing talks early — 4 of 5 losses" },
  { name: "Late multi-threading", pct: 31, color: "#F59E0B", bg: "#FFF9EB", note: "Champion unreachable in 3 Q4 losses" },
  { name: "Discovery depth", pct: 19, color: "#7C3AED", bg: "#F5F3FF", note: "HRIS need missed until demo stage" },
  { name: "Competitive framing", pct: 8, color: "#3B5FD4", bg: "#EEF2FE", note: "Avoids Acme comparisons — leads to stalls" },
]

const TABS = ["By Competitor", "By Scenario", "Coaching Flags"] as const
type Tab = typeof TABS[number]

// ─── Component ────────────────────────────────────────────────────────────────

export function WinLossInsightAnimation() {
  const [tab, setTab] = useState<Tab>("By Competitor")
  const [rowsVisible, setRowsVisible] = useState(0)
  const [barsVisible, setBarsVisible] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function showTab(t: Tab, rowCount: number) {
      if (cancelled) return
      setTab(t)
      setRowsVisible(0)
      setBarsVisible(false)
      await sleep(250)
      for (let i = 1; i <= rowCount; i++) {
        if (cancelled) return
        setRowsVisible(i)
        await sleep(260)
      }
      if (cancelled) return
      setBarsVisible(true)
      await sleep(3000)
    }

    async function run() {
      await sleep(400)
      while (!cancelled) {
        await showTab("By Competitor", COMPETITOR_ROWS.length)
        if (cancelled) break
        await showTab("By Scenario", SCENARIO_ROWS.length)
        if (cancelled) break
        await showTab("Coaching Flags", COACHING_ROWS.length)
        if (cancelled) break
        await sleep(200)
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="h-full flex flex-col bg-background rounded-xl overflow-hidden border border-[#E8E4DC] shadow-[0_2px_12px_rgba(15,31,61,0.06)]">

      {/* ── Chrome bar ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-background border-b border-[#E8E4DC] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#E8EAF6] flex items-center justify-center shrink-0">
            <span className="text-[8px] font-bold text-[#3949AB] font-mono">{REP.initials}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-navy">{REP.name}</span>
            <span className="text-[10px] text-[#9CA3AF] ml-1.5">· Rep Scorecard · Q1 2026</span>
          </div>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded-sm bg-[#EAF4EF] text-[#2A5C45] font-bold tracking-widest font-mono">
          LIVE
        </span>
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-0 border-b border-[#E8E4DC] bg-background shrink-0">
        {TABS.map((t) => (
          <button
            key={t}
            className={`px-3.5 py-2 text-[10px] font-bold tracking-[0.06em] transition-colors border-b-2 ${
              tab === t
                ? "text-navy border-navy"
                : "text-[#9CA3AF] border-transparent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-hidden px-3.5 py-3">

        {/* By Competitor */}
        {tab === "By Competitor" && (
          <div className="flex flex-col gap-0">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_52px_40px_40px] gap-1 pb-1.5 border-b border-[#E8E4DC] mb-2">
              {["Competitor", "Win %", "Deals", "Δ QoQ"].map((h) => (
                <span key={h} className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] font-mono">{h}</span>
              ))}
            </div>
            {COMPETITOR_ROWS.slice(0, rowsVisible).map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_52px_40px_40px] gap-1 items-center py-1.5 border-b border-[#F3F4F6] last:border-0 animate-fadeInUp"
                style={{ animationDuration: "0.25s", animationFillMode: "both" }}
              >
                <span className="text-[11px] font-semibold text-navy truncate">{row.name}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] font-bold text-navy font-mono">{row.wr}%</span>
                </div>
                <span className="text-[10px] text-[#6B7280] font-mono">{row.deals}</span>
                <span
                  className="text-[10px] font-bold font-mono"
                  style={{ color: row.up ? "#2A5C45" : "#B91C1C" }}
                >
                  {row.delta}
                </span>
              </div>
            ))}
            {/* Win rate bar chart (appears last) */}
            {barsVisible && rowsVisible === COMPETITOR_ROWS.length && (
              <div className="mt-3 pt-3 border-t border-[#E8E4DC] animate-fadeInUp" style={{ animationDuration: "0.35s", animationFillMode: "both" }}>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] font-mono mb-2">Win rate</p>
                <div className="flex flex-col gap-1.5">
                  {COMPETITOR_ROWS.map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-[70px] shrink-0 text-[10px] text-[#374151] truncate">{row.name}</div>
                      <div className="flex-1 h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: barsVisible ? `${row.wr}%` : "0%",
                            background: row.up ? "#2A5C45" : "#374151",
                            transitionDelay: `${i * 80}ms`,
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-navy font-mono w-[28px] text-right shrink-0">{row.wr}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* By Scenario */}
        {tab === "By Scenario" && (
          <div className="flex flex-col gap-2">
            <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] font-mono mb-0.5">Win rate by deal scenario</p>
            {SCENARIO_ROWS.slice(0, rowsVisible).map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-lg border border-[#E8E4DC] animate-fadeInUp"
                style={{ animationDuration: "0.25s", animationFillMode: "both", background: row.bg + "44" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-navy truncate mb-1">{row.name}</p>
                  <div className="h-1.5 bg-[#E8E4DC] rounded-full overflow-hidden w-full">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: barsVisible ? `${row.wr}%` : "0%", background: row.bar, transitionDelay: `${i * 100}ms` }}
                    />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[14px] font-bold font-mono" style={{ color: row.bar }}>{row.wr}%</p>
                  <p className="text-[9px] text-[#9CA3AF] font-mono">{row.deals} deals</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Coaching Flags */}
        {tab === "Coaching Flags" && (
          <div className="flex flex-col gap-2">
            <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#9CA3AF] font-mono mb-0.5">Loss patterns for {REP.name}</p>
            {COACHING_ROWS.slice(0, rowsVisible).map((row, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-2.5 rounded-lg border border-[#E8E4DC] animate-fadeInUp"
                style={{ animationDuration: "0.25s", animationFillMode: "both", background: row.bg + "55" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold font-mono text-[11px] mt-0.5"
                  style={{ color: row.color, background: row.bg }}
                >
                  {row.pct}%
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-navy">{row.name}</p>
                  <p className="text-[10px] text-[#9CA3AF] leading-snug mt-0.5">{row.note}</p>
                </div>
                <div className="w-[50px] h-1.5 bg-[#E8E4DC] rounded-full overflow-hidden shrink-0 mt-2.5">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: barsVisible ? `${row.pct / 42 * 100}%` : "0%", background: row.color, transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  )
}
