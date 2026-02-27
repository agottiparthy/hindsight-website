/* ─── Panel 04: Interface (MCP) ───────────────────────────────────────────── */
export function InterfacePanel() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-[0_8px_40px_rgba(15,31,61,0.08)]">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E8E4DC]">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Hindsight MCP · Query Interface
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-sm bg-[#2A5C45] text-white tracking-widest"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          CONNECTED
        </span>
      </div>

      <div className="bg-[#0F1F3D] rounded-lg p-5 mb-4">
        <div
          className="text-xs text-white/40 mb-2"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          # Query verified deal intelligence
        </div>
        <div
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            lineHeight: "1.7",
          }}
        >
          <span className="text-sm text-[#D4A843]">hindsight.deals.search(&#123;</span>
          <br />
          <span className="text-sm text-white/70 pl-4">competitor: &quot;Competitor A&quot;,</span>
          <br />
          <span className="text-sm text-white/70 pl-4">outcome: &quot;lost&quot;,</span>
          <br />
          <span className="text-sm text-white/70 pl-4">verified_only: true</span>
          <br />
          <span className="text-sm text-[#D4A843]">&#125;)</span>
        </div>
      </div>

      <div
        className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-2"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Returns
      </div>
      <div className="flex flex-col gap-2">
        {[
          {
            key: "verified_loss_reason",
            val: "Integration gap — missing native connector (92% confidence)",
          },
          {
            key: "buyer_quote",
            val: '"Competitor had a native connector. We didn\'t." — Buyer interview, Jan 2026',
          },
          {
            key: "pattern_signal",
            val: "Integration cited in 41% of losses vs. Competitor A — up 18pts QoQ",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="bg-[#EAF4EF] border border-[rgba(42,92,69,0.15)] rounded-lg px-3.5 py-3"
          >
            <div
              className="text-[11px] text-[#2A5C45] mb-1"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {item.key}
            </div>
            <div
              className="text-sm text-[#374151]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {item.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}