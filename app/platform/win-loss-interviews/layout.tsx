import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Win-Loss Interviews | Hindsight",
  description: "Automated AI interviews sent to buyers and reps via email and Slack. Get primary source data on every deal without chasing calendar invites.",
  openGraph: {
    title: "Win-Loss Interviews | Hindsight",
    description: "Automated AI interviews sent to buyers and reps via email and Slack. Get primary source data on every deal without chasing calendar invites.",
    url: "https://usehindsight.com/platform/win-loss-interviews",
    siteName: "Hindsight",
    images: ["/win-loss-og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Win-Loss Interviews | Hindsight",
    description: "Automated AI interviews sent to buyers and reps via email and Slack. Get primary source data on every deal without chasing calendar invites.",
    images: ["/win-loss-og-image.jpg"],
  },
  alternates: {
    canonical: "https://usehindsight.com/platform/win-loss-interviews",
  },
}

export default function WinLossInterviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
