"use client"

import Link from "next/link"
import Image from "next/image"
import { DealReviewCard } from "@/components/ui/deal-review-card"
import { DealReportAnimation } from "../ui/deal-report-animation"

export function HeroSection() {
  return (
    <section className="pt-[100px] md:pt-[140px] pb-[40px] md:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Left: text */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-4 md:mb-6 font-mono">
            Win-Loss Intelligence
          </p>
          <h1 className="text-[clamp(32px,8vw,64px)] font-bold leading-[1.1] tracking-[-0.025em] text-navy mb-5 md:mb-7">
            Your buyers know<br />
            why you lost.<br />
            <em className="italic text-navy opacity-60">Now you can too.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-body max-w-[480px] mb-6 md:mb-10">
            Hindsight runs your buyer interview program on autopilot. Stop guessing and get verified insights into why you lose deals, churn customers, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 md:mb-14">
            <Link
              href="/request-demo"
              className="bg-navy text-white text-xs sm:text-sm font-bold uppercase tracking-[0.06em] px-5 sm:px-7 py-3 sm:py-3.5 rounded hover:bg-blue transition-all hover:-translate-y-px text-center"
            >
              See What Your Last 50 Buyers Said
            </Link>
          </div>
        </div>

        {/* Right: animated deal review card */}
        <div className="relative mt-8 md:mt-0 hidden md:block">
          {/* Floating stat */}
          <div className="absolute -top-6 -right-6 bg-amber text-white rounded-lg px-[18px] py-3.5 shadow-[0_4px_16px_rgba(217,119,6,0.4)] z-10">
            <div className="text-[28px] font-bold leading-none tracking-[-0.03em] mb-1">
              12%
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.08em] opacity-90 font-mono">
              Response Rate
            </div>
          </div>

          <DealReportAnimation />

          {/* Floating Salesforce loss reason dropdown */}
          <div
            className="absolute -bottom-6 -right-8 z-10 bg-white border border-[#E8E4DC] rounded-xl shadow-[0_8px_32px_rgba(15,31,61,0.12),0_2px_8px_rgba(15,31,61,0.06)] w-[210px] overflow-hidden animate-fadeInUp"
            style={{ animationDuration: "0.5s", animationFillMode: "both", animationDelay: "0.4s" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#FAFAF8] border-b border-[#E8E4DC]">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B7280]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Loss Reason
              </span>
              <div className="relative w-[18px] h-[18px] flex-shrink-0">
                <Image
                  src="/integration_logos/salesforce logo.png"
                  alt="Salesforce"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Options list */}
            <div className="py-1">
              {["Budget", "Timing", "Pricing", "Competitor", "No Decision"].map((option) => (
                <div
                  key={option}
                  className={`flex items-center gap-2 px-4 py-[7px] text-[12px] ${
                    option === "Pricing"
                      ? "bg-[#1A6FD4] text-white font-bold"
                      : "text-[#374151]"
                  }`}
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  <span className="w-3 flex-shrink-0 text-[10px]">
                    {option === "Pricing" ? "✓" : ""}
                  </span>
                  {option}
                </div>
              ))}
            </div>

            {/* Before Hindsight badge */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAEAEA] border-t border-[#F5C6C6]">
              <span className="text-[#7A2828] text-[10px]">✕</span>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#7A2828]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Rep-reported · Unverified
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
