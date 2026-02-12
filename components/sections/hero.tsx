import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#E8F4FC] via-[#F5F8FB] to-[#F5F8FB] overflow-hidden pt-20">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3EA7ED]/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#A0C6E6]/30 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#11214C] leading-tight mb-4">
            Winning more starts with
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3EA7ED] leading-tight mb-6 italic">
            knowing why you lose.
          </h1>
          <p className="text-lg md:text-xl text-[#11214C]/70 max-w-2xl mx-auto mb-8">
            Hindsight analyzes every deal to show why you win and lose. It turns those insights into battlecards, enablement, and decisions teams act on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90 shadow-lg shadow-[#3EA7ED]/25" asChild>
              <Link href="https://app.usehindsight.com/sign-up">Try it for Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#11214C]/20 text-[#11214C] hover:bg-[#11214C]/5" asChild>
              <Link href="/request-demo">Get a Demo</Link>
            </Button>
          </div>
          <p className="text-[#11214C]/50 text-sm mb-12">No credit card required.</p>
          
          {/* Hero image placeholder */}
          <div className="relative mx-auto max-w-3xl">
            <div className="bg-white rounded-2xl shadow-2xl shadow-[#11214C]/10 border border-[#E8EEF4] p-4 aspect-[16/10]">
              <div className="w-full h-full bg-gradient-to-br from-[#F5F8FB] to-[#E8F4FC] rounded-xl flex items-center justify-center">
                <span className="text-[#11214C]/30 text-lg">Product Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
