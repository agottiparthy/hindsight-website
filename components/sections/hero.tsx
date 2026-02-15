"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const rotatingTexts = [
  "competitive intel.",
  "win-loss analysis.",
  "messaging strategy.",
  "competitive enablement.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Trigger card animations after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden pt-28 pb-0">
      {/* Background image */}
      <Image
        src="/hero/bg-hero.png"
        alt=""
        fill
        className="object-cover object-top"
        priority
      />
      {/* Decorative gradient blobs
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3EA7ED]/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#A0C6E6]/30 rounded-full blur-3xl" />
       */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-2">
            AI agents for
          </h1>
          <div className="relative h-[60px] md:h-[72px] lg:h-[84px] mb-6 flex justify-center items-center" style={{ perspective: "1000px" }}>
            <div
              className={`flip-card ${
                isAnimating
                  ? "flip-card-animate-out"
                  : "flip-card-animate-in"
              }`}
              style={{ minWidth: "340px" }}
            >
              {rotatingTexts[currentIndex]}
            </div>
          </div>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
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
          <p className="text-muted text-sm mb-8">No credit card required.</p>
          
          {/* Hero cards composition */}
          <div className="relative mx-auto max-w-4xl h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Background left card */}
            <div 
              className={`absolute left-20 top-10 w-[35%] z-0 transition-all duration-1000 ease-out ${
                cardsVisible 
                  ? "opacity-100 translate-x-0 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src="/hero/UI/hero-card-bg-left.png"
                alt="Deal Analysis Card"
                width={845}
                height={1017}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>

            {/* Background right card */}
            <div 
              className={`absolute right-20 top-10 w-[35%] z-0 transition-all duration-1000 ease-out ${
                cardsVisible 
                  ? "opacity-100 translate-x-0 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src="/hero/UI/hero-card-bg-right.png"
                alt="Analytics Card"
                width={845}
                height={1017}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>

            {/* Main center card - in front at bottom */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 bottom-40 w-[75%] z-20 transition-all duration-1000 ease-out ${
                cardsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Image
                src="/hero/UI/hero-card-main.png"
                alt="Hindsight Platform"
                width={845}
                height={1017}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Center top card */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 top-0 w-[55%] z-10 transition-all duration-1000 ease-out ${
                cardsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
            >
              <Image
                src="/hero/UI/hero-card-center.png"
                alt="Ask Anything Card"
                width={753}
                height={946}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
