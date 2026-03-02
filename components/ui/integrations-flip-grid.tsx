"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const TILES: { src: string; alt: string; category: string; back: { src: string; alt: string; category: string } }[] = [
  {
    src: "/integration_logos/salesforce logo.png", alt: "Salesforce", category: "CRM",
    back: { src: "/integration_logos/hubspot.svg", alt: "HubSpot", category: "CRM" },
  },
  {
    src: "/integration_logos/gong.png", alt: "Gong", category: "Call Intelligence",
    back: { src: "/integration_logos/outreach.png", alt: "Outreach", category: "Sales Engagement" },
  },
  {
    src: "/integration_logos/slack.png", alt: "Slack", category: "Messaging",
    back: { src: "/integration_logos/clari.svg", alt: "Clari", category: "Revenue Intelligence" },
  },
  {
    src: "/integration_logos/linkedin.svg", alt: "LinkedIn", category: "Social",
    back: { src: "/integration_logos/x.png", alt: "X / Twitter", category: "Social" },
  },
  {
    src: "/integration_logos/g2.png", alt: "G2", category: "Reviews",
    back: { src: "/integration_logos/notion.png", alt: "Notion", category: "Knowledge Base" },
  },
  {
    src: "/integration_logos/drive.png", alt: "Google Drive", category: "Knowledge Base",
    back: { src: "/integration_logos/claude-color.png", alt: "Claude", category: "AI" },
  },
]

export function IntegrationsFlipGrid() {
  const [flipped, setFlipped] = useState<boolean[]>(TILES.map(() => false))

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    async function loop() {
      await sleep(1200)
      for (let i = 0; i < TILES.length; i++) {
        if (cancelled) return
        if (i > 0) await sleep(200)
        setFlipped((prev) => { const n = [...prev]; n[i] = true; return n })
      }
      await sleep(2600)
      for (let i = 0; i < TILES.length; i++) {
        if (cancelled) return
        if (i > 0) await sleep(200)
        setFlipped((prev) => { const n = [...prev]; n[i] = false; return n })
      }
      await sleep(900)
      if (!cancelled) loop()
    }

    loop()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {TILES.map((tile, i) => {
        const face = flipped[i] ? tile.back : tile
        return (
          <div key={i} className="relative" style={{ perspective: "600px" }}>
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped[i] ? "rotateX(180deg)" : "rotateX(0deg)",
                transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Front */}
              <div
                className="bg-white border border-[#E8E4DC] rounded-xl p-4 flex items-center gap-3"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] border border-[#E8E4DC] flex items-center justify-center shrink-0">
                  <Image src={tile.src} alt={tile.alt} width={20} height={20} className="object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#0F1F3D] truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {tile.alt}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {tile.category}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-white border border-[#D4A843]/30 rounded-xl p-4 flex items-center gap-3"
                style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFF8E7] border border-[#D4A843]/30 flex items-center justify-center shrink-0">
                  <Image src={tile.back.src} alt={tile.back.alt} width={20} height={20} className="object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#0F1F3D] truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {tile.back.alt}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] truncate" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {tile.back.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
