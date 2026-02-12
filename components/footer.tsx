import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "Competitive Enablement", href: "/competitive-enablement" },
    { label: "Win-Loss Analysis", href: "/win-loss-analysis" },
    { label: "AI Workflows", href: "/workflows" },
    { label: "Win-Loss Interviews", href: "/win-loss-research" },
    { label: "Dashboards", href: "/dashboards" },
    { label: "Sales Assistant", href: "/slack-assistant" },
    { label: "Enrich CRM", href: "/enrich-crm" },
  ],
  solutions: [
    { label: "Product Marketing", href: "/solutions/product-marketing" },
    { label: "Competitive Intelligence", href: "/solutions/for-competitive-intelligence" },
    { label: "Sales Enablement", href: "/solutions/for-sales-enablement" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Documentation", href: "https://docs.usehindsight.com/overview" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  company: [
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#F5F8FB] text-[#11214C] border-t border-[#E8EEF4]">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#3EA7ED] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-[#11214C] font-semibold text-lg">Hindsight</span>
            </Link>
            <p className="text-[#11214C]/50 text-sm mb-4">backed by</p>
            <div className="flex gap-4">
              {/* Placeholder for investor logos */}
              <div className="w-20 h-6 bg-[#11214C]/10 rounded" />
              <div className="w-20 h-6 bg-[#11214C]/10 rounded" />
            </div>
            <p className="text-[#11214C]/50 text-xs mt-6">
              © 2026 Baseplate Tech Inc.
              <br />
              85 Broad Street, Floor 17
              <br />
              New York, NY, 10004
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[#11214C] font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#11214C]/60 hover:text-[#11214C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#11214C] font-medium mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#11214C]/60 hover:text-[#11214C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#11214C] font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#11214C]/60 hover:text-[#11214C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#11214C] font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#11214C]/60 hover:text-[#11214C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
              <Link
                href="https://www.linkedin.com/company/hindsighthq/"
                className="text-[#11214C]/60 hover:text-[#11214C] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://x.com/hindsight_ai"
                className="text-[#11214C]/60 hover:text-[#11214C] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
