import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function CaseStudySection() {
  return (
    <section className="bg-[#F5F8FB] py-20 md:py-28">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Case Study</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11214C]">
            Used by teams that want to win more.
          </h2>
        </div>

        <div className="bg-[#11214C] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white/60 text-sm mb-2">+12% win rate vs. top competitor</p>
              
              <blockquote className="my-6">
                <p className="text-white text-xl md:text-2xl italic mb-6">
                  &quot;My reps are winning deals thanks to Hindsight.&quot;
                </p>
                <footer className="flex items-center gap-3">
                  <Image
                    src="/customer_pictures/tye davis.jpeg"
                    alt="Tye Davis"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <div>
                    <p className="text-white font-medium">Tye Davis</p>
                    <p className="text-white/60 text-sm">Sr. PMM - Compete</p>
                  </div>
                </footer>
              </blockquote>

              <div className="mb-6">
                <Image
                  src="/customer_logos/launchdarkly-Logo-Vector.svg-.png"
                  alt="LaunchDarkly"
                  width={140}
                  height={32}
                  className="object-contain brightness-0 invert"
                />
              </div>

              <Button className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90" asChild>
                <Link href="/customers/how-launchdarkly-scaled-win-loss-and-ci-to-200-reps">
                  Read Case Study
                </Link>
              </Button>
            </div>

            {/* Visual placeholder */}
            <div className="bg-white/10 border border-white/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-white/40">Screenshot</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
