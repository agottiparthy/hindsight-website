import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start pt-14 pb-0">
      {/* Background image */}
      <Image
        src="/hero/bg-hero.png"
        alt=""
        fill
        className="object-cover object-top"
        priority
      />
      {/* Bottom fade into logo cloud */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F5F8FB] z-10 pointer-events-none" />
      {/* Decorative gradient blobs
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3EA7ED]/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#A0C6E6]/30 rounded-full blur-3xl" />
       */}
      <Container className="relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
          
          {/* Left: text content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-display mb-6">
              AI Agents for{" "}<br />
              <span className="text-[#3EA7ED]">Win-Loss + Compete</span>
            </h1>
            <p className="text-body-lg max-w-xl mb-8">
              Hindsight analyzes every deal to show why you win and lose. It turns those insights into battlecards, enablement, and decisions teams act on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button size="lg" className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90 shadow-lg shadow-[#3EA7ED]/25" asChild>
                <Link href="https://app.usehindsight.com/sign-up">Try it for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#11214C]/20 text-[#11214C] hover:bg-[#11214C]/5" asChild>
                <Link href="/request-demo">Get a Demo</Link>
              </Button>
            </div>
            <p className="text-muted text-sm">No credit card required.</p>
          </div>

          {/* Right: hero image */}
          <div className="relative flex items-center justify-center h-[500px] md:h-[600px] lg:h-[680px]">
            <Image
              src="/hero/hero-image.png"
              alt="Hindsight Platform"
              fill
              className="object-contain scale-[2] origin-center"
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  )
}
