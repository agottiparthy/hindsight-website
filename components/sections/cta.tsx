import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CTASection() {
  return (
    <section className="bg-[#11214C] py-20 md:py-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 border-white/20 bg-white/10 text-white/80">Get Started</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start learning from every deal
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Analyze recent deals and find your next opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/request-demo">Book a Demo</Link>
            </Button>
            <Button size="lg" className="bg-[#3EA7ED] text-white hover:bg-[#3EA7ED]/90" asChild>
              <Link href="https://app.usehindsight.com/sign-up">Try it for Free</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
