import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, DM_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hindsight — Win-Loss Intelligence",
  description: "Hindsight investigates every closed deal, interviews buyers automatically, and tells you what actually happened.",
  metadataBase: new URL('https://usehindsight.com'),
  openGraph: {
    title: "Hindsight — Win-Loss Intelligence",
    description: "Hindsight investigates every closed deal, interviews buyers automatically, and tells you what actually happened.",
    images: ['/win-loss-og-image.jpg'],
    url: 'https://usehindsight.com',
    siteName: 'Hindsight',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hindsight — Win-Loss Intelligence",
    description: "Hindsight investigates every closed deal, interviews buyers automatically, and tells you what actually happened.",
    images: ['/win-loss-og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${sora.variable} ${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
