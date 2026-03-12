// ── Win-Loss Playbook — Section Content ───────────────────────────────────────
// Replace the placeholder body text with the real content for each section.
// Each section can include:
//   - body: paragraph text (array of strings = multiple paragraphs)
//   - callouts: navy stat cards that break out of the text column
//   - pullQuote: a customer quote with sky-blue left border
//   - subsections: optional sub-headings + body within a section

export interface Callout {
  stat: string
  label: string
}

export interface PullQuote {
  quote: string
  name: string
  role: string
  company: string
  photo?: string
}

export interface Subsection {
  heading: string
  body: string[]
}

export interface PlaybookSection {
  id: string
  number: string
  title: string
  intro: string[]
  callouts?: Callout[]
  pullQuote?: PullQuote
  subsections?: Subsection[]
  ctaText?: string
}

export const SECTIONS: PlaybookSection[] = [
  {
    id: "why-programs-fail",
    number: "01",
    title: "Why Most Win-Loss Programs Fail",
    intro: [
      "[Placeholder] Most win-loss programs are built on a structural flaw: they rely entirely on the person who just lost the deal to explain why it was lost. This is not a data problem. It is a psychology problem.",
      "[Placeholder] This section covers the three root causes of failed programs — coverage gaps, rep bias, and slow turnaround — and explains why fixing one without the others produces noise, not signal.",
      "[Placeholder] Enter additional context here about common failure modes, what good coverage means, and how most teams dramatically overestimate the accuracy of their CRM loss reasons.",
    ],
    callouts: [
      {
        stat: "< 20%",
        label: "Average deal coverage in self-reported W/L programs",
      },
      {
        stat: "33%",
        label: "Of CRM loss reasons don't match what buyers actually said",
      },
    ],
    pullQuote: {
      quote:
        "We used to rely on CRM notes, which are not reliable. It wasn't a full picture of what we were trying to learn from our lost and won deals.",
      name: "Jason Bonhert",
      role: "Sr. PMM",
      company: "Simpro Group",
      photo: "/customer_pictures/jason bonhert.png",
    },
    ctaText: "See how Hindsight eliminates coverage gaps →",
  },
  {
    id: "fields-to-track",
    number: "02",
    title: "What Fields to Track",
    intro: [
      "[Placeholder] Not all deal data is equal. Some fields produce insight. Most produce noise. The difference is not what you capture — it's how you structure it and whether you verify it against more than one source.",
      "[Placeholder] This section outlines the minimum viable deal record: the fields that actually change outcomes when you track them carefully vs. the fields that feel important but produce undefined variance.",
      "[Placeholder] Enter additional content here about deal stages, competitor fields, value driver tracking, and how to handle multi-stakeholder deals.",
    ],
    subsections: [
      {
        heading: "Fields that produce insight",
        body: [
          "[Placeholder] The fields that reliably predict win rate when analyzed in aggregate. Competitor named, primary buyer title, deal source, contract value band, evaluation length.",
          "[Placeholder] Enter specifics about which fields correlate most strongly with win rate in your data.",
        ],
      },
      {
        heading: "Fields that produce noise",
        body: [
          "[Placeholder] Fields that seem important but collapse under multivariate analysis: account size buckets, rep-entered 'next step' notes, subjective scoring fields filled inconsistently.",
          "[Placeholder] Enter content about how noise fields mislead analysis and what to do instead.",
        ],
      },
    ],
    callouts: [
      {
        stat: "+44%",
        label: "Accuracy improvement when triangulating CRM + call data + buyer interview",
      },
    ],
    ctaText: "See how Hindsight structures the deal record →",
  },
  {
    id: "analyzing-deal-data",
    number: "03",
    title: "Analyzing Deal Data",
    intro: [
      "[Placeholder] The most important skill in win-loss analysis is not analysis — it is conflict resolution. When your CRM says pricing, your call transcript says product gaps, and your buyer says relationship, one of those is closer to the truth. Knowing which one is the methodology.",
      "[Placeholder] This section walks through how to reconcile conflicting signals across sources, what inconsistency actually tells you about your sales process, and how to build a single verified record per deal.",
      "[Placeholder] Enter additional content about analysis frameworks, multi-source reconciliation, and how to weight evidence.",
    ],
    subsections: [
      {
        heading: "Resolving CRM vs. call transcript conflicts",
        body: [
          "[Placeholder] When a rep enters 'pricing' as the loss reason but the call shows a 40-minute technical deep-dive on integration limitations, the call wins. This section explains why and how to apply the rule systematically.",
        ],
      },
      {
        heading: "What inconsistency signals",
        body: [
          "[Placeholder] A rep-vs-buyer mismatch isn't just a data quality problem. It's often a signal about where in the sales process the decision was actually made, and whether the rep was present for it.",
        ],
      },
    ],
    callouts: [
      {
        stat: "3×",
        label: "More deal signals when analysis spans CRM, calls, and interviews together",
      },
    ],
    pullQuote: {
      quote:
        "Gong tells me how often things come up. Hindsight tells me how the win rate changes when we talk about that topic. It's been a tremendous unlock.",
      name: "Toby Laforest",
      role: "Sr. Director of Market Insights",
      company: "Ironclad",
      photo: "/customer_pictures/toby laforest.jpeg",
    },
    ctaText: "See how Hindsight reconciles deal signals →",
  },
  {
    id: "interviewing-reps",
    number: "04",
    title: "Interviewing Sales Reps",
    intro: [
      "[Placeholder] Rep interviews are underused and underrated. When done well, they surface the context that no CRM field or call transcript captures: what the rep knew going in, what surprised them, what they'd do differently.",
      "[Placeholder] The problem is that most rep interviews happen too late, ask the wrong questions, and invite post-hoc rationalization. This section covers how to run rep interviews that produce real information.",
      "[Placeholder] Enter content about timing, question structure, how to probe without leading, and how to separate signal from rationalization.",
    ],
    subsections: [
      {
        heading: "Timing the interview",
        body: [
          "[Placeholder] The optimal window is 24–72 hours after deal close. Earlier and the rep is still processing; later and the narrative has calcified. Enter specifics about how timing affects data quality.",
        ],
      },
      {
        heading: "Questions that work",
        body: [
          "[Placeholder] Enter the question framework here. Focus on questions that surface information the rep wouldn't volunteer, without triggering defensiveness.",
        ],
      },
    ],
    ctaText: "See how Hindsight automates rep debriefs →",
  },
  {
    id: "scheduling-buyer-interviews",
    number: "05",
    title: "Scheduling Buyer Interviews",
    intro: [
      "[Placeholder] A win-loss program without buyer interviews is a rep survey with extra steps. Buyers are the only people who know why they actually made the decision they made. The challenge is getting them to tell you.",
      "[Placeholder] This section covers response rate optimization: timing, personalization, incentives, and how to frame the request in a way that doesn't feel like a sales follow-up.",
      "[Placeholder] Enter content about outreach sequences, who should send the request, response rates by segment, and what a well-designed interview looks like.",
    ],
    callouts: [
      {
        stat: "31%",
        label: "Average buyer interview response rate at Hindsight customers (vs. 8–12% industry average)",
      },
    ],
    subsections: [
      {
        heading: "Timing and personalization",
        body: [
          "[Placeholder] The ideal outreach window, how to personalize at scale, and why the sender identity matters more than the copy.",
        ],
      },
      {
        heading: "Incentives: what works",
        body: [
          "[Placeholder] Enter content about incentive structures: gift cards, charitable donations, recognition. What moves response rates and what backfires.",
        ],
      },
    ],
    pullQuote: {
      quote:
        "I'm getting insights from deals that are being analyzed every day — pulling from Salesforce, Gong, and now win-loss interviews. My reps are going into deals with the most up-to-date information.",
      name: "Tye Davis",
      role: "Sr. PMM",
      company: "LaunchDarkly",
      photo: "/customer_pictures/tye davis.jpeg",
    },
    ctaText: "See how Hindsight runs buyer interviews →",
  },
  {
    id: "competitive-benchmarking",
    number: "06",
    title: "Competitive Benchmarking",
    intro: [
      "[Placeholder] Win-loss data is the only source of ground-truth competitive intelligence. Everything else is secondhand. This section covers how to turn deal data into a competitive picture that the whole GTM team can act on.",
      "[Placeholder] The key concepts: win rate by competitor, trend tracking over time, attribution (when a competitor was mentioned vs. primary driver of decision), and how to identify competitive moats vs. surface-level objections.",
      "[Placeholder] Enter content about competitive analysis frameworks, how to segment by deal size and segment, and how to communicate findings without creating panic.",
    ],
    callouts: [
      {
        stat: "+12%",
        label: "Competitive win rate improvement — LaunchDarkly, after routing competitive insights to their sales team",
      },
    ],
    subsections: [
      {
        heading: "Win rates by competitor",
        body: [
          "[Placeholder] How to calculate and track win rate segmented by which competitor you faced, and how to distinguish head-to-head vs. multi-vendor evaluations.",
        ],
      },
      {
        heading: "Trend tracking",
        body: [
          "[Placeholder] Win rates at a single point in time are interesting. Win rates over time are actionable. Enter content about how to build rolling competitive benchmarks.",
        ],
      },
    ],
    ctaText: "See Hindsight's competitive intelligence feature →",
  },
  {
    id: "distributing-insights",
    number: "07",
    title: "Distributing Insights",
    intro: [
      "[Placeholder] Insight that lives in a deck is not insight — it's documentation. The question is not how to build a good win-loss report. It is how to make the findings flow to the people who can act on them, in the moment they need them.",
      "[Placeholder] This section covers the three distribution channels that actually work: Slack, battlecards, and quarterly reports. Each has a different audience, cadence, and format requirement.",
      "[Placeholder] Enter content about how to structure each channel, what to include and omit, and how to close the loop so insights drive visible behavior change.",
    ],
    subsections: [
      {
        heading: "Slack: the real-time layer",
        body: [
          "[Placeholder] How to structure automated deal notifications in Slack so sales gets context without getting buried. What to surface automatically vs. what requires human curation.",
        ],
      },
      {
        heading: "Battlecards: the sales enablement layer",
        body: [
          "[Placeholder] What makes a battlecard actually used vs. ignored. How win-loss data should feed battlecard updates and how to track whether they're changing outcomes.",
        ],
      },
      {
        heading: "Reports: the strategic layer",
        body: [
          "[Placeholder] Who reads the quarterly win-loss report, what they actually want from it, and how to write a summary that produces decisions rather than nods.",
        ],
      },
    ],
    callouts: [
      {
        stat: "−86 days",
        label: "Time to insight — Ironclad, after moving from manual to automated deal intelligence",
      },
    ],
    ctaText: "See how Hindsight routes insights to your team →",
  },
  {
    id: "build-vs-buy",
    number: "08",
    title: "Build vs. Buy",
    intro: [
      "[Placeholder] Every team eventually faces this decision. You have a CRM, a call recording tool, maybe a survey platform. You have engineers or ops people who could wire them together. Why not build?",
      "[Placeholder] This section is the honest framework. Not a vendor pitch — an actual accounting of what the build requires, where it typically breaks, and when buying makes sense vs. when it doesn't.",
      "[Placeholder] Enter content that addresses the build-vs-buy question directly, with concrete cost and complexity estimates.",
    ],
    // Build vs Buy table — columns: Traditional Vendor / DIY / Hindsight
    // The table is rendered directly in the page component
    ctaText: "Talk to us about your current setup →",
  },
  {
    id: "synthesizing-for-ai",
    number: "09",
    title: "Synthesizing for AI Agents",
    intro: [
      "[Placeholder] This is the section most teams are not thinking about yet — but will be in 12 months. AI agents can only be as good as the data layer underneath them. Win-loss data is one of the highest-signal datasets any GTM team has. Whether your AI tools can read it depends entirely on how it's structured.",
      "[Placeholder] This section covers the data layer question: schema, normalization, conflict resolution (again, but for machines), and how to make your win-loss data consumable by LLMs, search tools, and workflow agents.",
      "[Placeholder] Enter content about structured outputs, metadata requirements, retrieval-augmented generation patterns, and how teams are using verified deal data to ground AI responses.",
    ],
    callouts: [
      {
        stat: "350,000+",
        label: "Deals analyzed by Hindsight — all structured for AI retrieval",
      },
    ],
    pullQuote: {
      quote:
        "We'd lose a $400,000 deal and it would be like, 'client wasn't interested at this time.' Hindsight lets us run off of the quant data and say, look, this is what's happening. There's no debate.",
      name: "Travis Allred",
      role: "VP of Commercial Operations",
      company: "PurpleLab",
      photo: "/customer_pictures/Travis Allred.jpg",
    },
    subsections: [
      {
        heading: "The schema question",
        body: [
          "[Placeholder] What a machine-readable deal record looks like, what fields matter for retrieval vs. analysis, and why free-text notes are the enemy of AI-ready data.",
        ],
      },
      {
        heading: "Grounding AI agents in deal reality",
        body: [
          "[Placeholder] How teams are using structured win-loss data to power sales agents, automated briefings, and competitive Q&A. Enter examples and architecture patterns.",
        ],
      },
    ],
    ctaText: undefined,
  },
]

// ── Build vs Buy table data ────────────────────────────────────────────────────
export interface BvBRow {
  category: string
  traditional: string
  diy: string
  hindsight: string
  hindsightHighlight?: boolean
}

export const BUILD_VS_BUY_ROWS: BvBRow[] = [
  {
    category: "Deal coverage",
    traditional: "5–15% of closed deals",
    diy: "Depends on rep compliance",
    hindsight: "100% of closed deals",
    hindsightHighlight: true,
  },
  {
    category: "Time to insight",
    traditional: "4–8 weeks per cycle",
    diy: "Varies widely",
    hindsight: "Within 12 hours",
    hindsightHighlight: true,
  },
  {
    category: "Buyer interviews",
    traditional: "Analyst-scheduled, limited",
    diy: "Manual outreach, low response",
    hindsight: "AI-conducted, 31% avg response",
    hindsightHighlight: true,
  },
  {
    category: "Source triangulation",
    traditional: "CRM only",
    diy: "CRM + calls (if configured)",
    hindsight: "CRM + calls + interviews",
    hindsightHighlight: true,
  },
  {
    category: "Competitive benchmarking",
    traditional: "Quarterly report",
    diy: "Manual aggregation",
    hindsight: "Real-time, deal-level",
    hindsightHighlight: true,
  },
  {
    category: "Rep bias removal",
    traditional: "Analyst judgment",
    diy: "None by default",
    hindsight: "Verified against buyer record",
    hindsightHighlight: true,
  },
  {
    category: "AI-ready output",
    traditional: "PDF reports",
    diy: "Unstructured notes",
    hindsight: "Structured, queryable schema",
    hindsightHighlight: true,
  },
  {
    category: "Setup time",
    traditional: "Weeks of onboarding",
    diy: "Months of engineering",
    hindsight: "Days",
    hindsightHighlight: true,
  },
  {
    category: "Cost",
    traditional: "$50K–$250K / year",
    diy: "Engineering time + tooling",
    hindsight: "Starts at $899/mo",
    hindsightHighlight: true,
  },
]
