import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, DM_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16524878947"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16524878947');
          `}
        </Script>

        {/* PostHog Analytics */}
        <Script id="posthog" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}', {
                api_host: '${process.env.NEXT_PUBLIC_POSTHOG_HOST}',
                person_profiles: 'identified_only',
            })
          `}
        </Script>

        {/* Apollo.io Website Tracker */}
        <Script id="apollo" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6632747ae29de20572aceff3"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>

        {/* Organization Schema */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hindsight",
            "url": "https://usehindsight.com",
            "logo": "https://usehindsight.com/hindsightlogo-clear.png",
            "description": "Win-loss intelligence platform that investigates every closed deal, interviews buyers automatically, and delivers verified insights.",
            "foundingDate": "2023",
            "sameAs": [
              "https://www.linkedin.com/company/hindsight-io",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "url": "https://usehindsight.com/request-demo"
            }
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
