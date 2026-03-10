import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Assistant | Hindsight",
  description: "Ask questions about your deal data in natural language. Get instant answers grounded in verified win-loss insights, available in Slack and the web app.",
  openGraph: {
    title: "AI Assistant | Hindsight",
    description: "Ask questions about your deal data in natural language. Get instant answers grounded in verified win-loss insights, available in Slack and the web app.",
    url: "https://usehindsight.com/platform/ai-assistant",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant | Hindsight",
    description: "Ask questions about your deal data in natural language. Get instant answers grounded in verified win-loss insights, available in Slack and the web app.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/platform/ai-assistant",
  },
}

export default function AIAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
