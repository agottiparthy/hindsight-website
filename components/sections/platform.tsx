import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

export function PlatformSection() {
  return (
    <section className="relative bg-[#F5F8FB] py-20 md:py-28 before:absolute before:inset-0 before:bg-[url('/background/grid-background.png')] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-20">
      <Container className="relative z-10">
        <div className="grid gap-12 items-center">
          <div>
            <Badge variant="brand" className="mb-4">PLATFORM</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#11214C] mb-6">
              Your <span className="text-[#3EA7ED]">system of record</span> for what's driving wins and losses.
            </h2>
            <p className="text-lg text-[#11214C]/70">
              AI agents cross-reference every deal across call recordings, emails, and CRM data, then fill in the gaps with automated buyer interviews. The result: enriched, validated win-loss intelligence your whole GTM team can trust and act on.
            </p>
          </div>
          
          {/* Platform visual placeholder */}
          {/* <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl shadow-[#11214C]/5 border border-[#E8EEF4] p-6 aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-[#F5F8FB] to-[#E8F4FC] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3EA7ED]/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#3EA7ED] rounded-lg" />
                  </div>
                  <span className="text-[#11214C]/40">Platform Visual</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
