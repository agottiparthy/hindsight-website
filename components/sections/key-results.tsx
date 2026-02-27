import Image from "next/image"
import Link from "next/link"

const results = [
  { num: "+12%", company: "LaunchDarkly", desc: "Competitive win rate" },
  { num: "+11%", company: "Simpro",       desc: "New business win rate" },
  { num: "−86d", company: "Ironclad",     desc: "Time to insight" },
  { num: "+44%", company: "Fathom",       desc: "Loss reason accuracy" },
  { num: "+16%", company: "PurpleLab",    desc: "New business win rate" },
]

const testimonials = [
  {
    quote: "We used to rely on CRM notes, which are not reliable. It wasn't a full picture of what we were trying to learn from our lost and won deals. Hindsight helps our sellers know what's actually working in other deals - which helps them win.",
    initials: "JB",
    name: "Jason Bonhert",
    role: "Sr. PMM - Simpro Group",
    photo: "/customer_pictures/jason bonhert.png",
    logo: "/customer_logos/simpro.svg",
    slug: "simpro",
  },
  {
    quote: "Gong tells me how often things come up. Hindsight tells me how the win rate changes when we talk about that topic. The platform lets me structure data on every opportunity that I can then analyze from any angle. It's been a tremendous unlock for Ironclad.",
    initials: "TL",
    name: "Toby Laforest",
    role: "Sr. Director of Market Insights - Ironclad",
    photo: "/customer_pictures/toby laforest.jpeg",
    logo: "/customer_logos/ironclad logo.svg",
    slug: "ironclad",
  },
  {
    quote: "I'm getting insights from deals that are being analyzed every day - pulling from Salesforce, Gong, and now win-loss interviews. My reps are going into deals with the most up-to-date information, letting them compete with confidence.",
    initials: "TD",
    name: "Tye Davis",
    role: "Sr. Product Marketing Manager - LaunchDarkly",
    photo: "/customer_pictures/tye davis.jpeg",
    logo: "/customer_logos/launchdarkly-Logo-Vector.svg-.png",
    slug: "launchdarkly",
  },
  {
    quote: "We'd lose a $400,000 deal and it would be like, 'client wasn't interested at this time.' There's always friction between product and sales. Hindsight let's us run off of the quant data and say, look, this is what's happening. There's no debate.",
    initials: "TA",
    name: "Travis Allred",
    role: "VP of Commercial Operations - PurpleLab",
    photo: "/customer_pictures/Travis Allred.jpg",
    logo: "/customer_logos/PURPLELAB-LOGO-August2024-1024x224.png",
    slug: "purplelab",
  },
]

export function KeyResultsSection() {
  return (
    <section id="results" className="bg-[#0F1F3D] px-12 pt-[100px] pb-[50px] relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A843] mb-5"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Proven Results
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-12"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          The numbers that matter<br />to the teams that use it.
        </h2>

        {/* Results grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 rounded-lg overflow-hidden mb-16"
          style={{ gap: "2px", background: "rgba(255,255,255,0.06)" }}
        >
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-[rgba(15,31,61,0.5)] px-6 py-8 text-center hover:bg-[rgba(255,255,255,0.04)] transition-colors"
            >
              <div
                className="text-[40px] font-bold text-[#D4A843] leading-none tracking-[-0.03em] mb-2"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {r.num}
              </div>
              <div
                className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40 mb-2"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {r.company}
              </div>
              <div
                className="text-sm text-white/60 leading-snug"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {r.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-8 flex flex-col"
            >
              {/* Company logo */}
              <div className="h-7 flex items-center mb-6">
                <Image
                  src={t.logo}
                  alt={t.name.split(" ").slice(-1)[0]}
                  width={120}
                  height={28}
                  className="h-6 w-auto object-contain brightness-0 invert opacity-70"
                />
              </div>

              <p
                className="text-lg italic text-white/85 leading-relaxed mb-6 flex-1"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#4A7FA5] flex items-center justify-center overflow-hidden flex-shrink-0">
                  {t.photo ? (
                    <Image src={t.photo} alt={t.name} width={36} height={36} className="object-cover w-full h-full" />
                  ) : (
                    <span
                      className="text-[11px] font-bold text-white"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {t.initials}
                    </span>
                  )}
                </div>
                <div>
                  <div
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-white/40"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Case study link */}
              <div className="border-t border-white/[0.08] pt-5">
                <Link
                  href={`/results/${t.slug}`}
                  className="text-sm font-bold text-[#D4A843] hover:text-[#e8c46a] transition-colors"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  See case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
