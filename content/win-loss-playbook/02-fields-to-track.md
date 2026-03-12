---
number: "02"
id: "fields-to-track"
title: "What Fields to Track"
---

<!-- INTRO ────────────────────────────────────────────────────────────────────
  Write 2–4 paragraphs that explain why field selection matters.
  The argument: deal data quality is determined before analysis begins.
  Most orgs capture too much noise and not enough signal.
─────────────────────────────────────────────────────────────────────────── -->

Most win-loss programs fail at the data model before they fail anywhere else. Teams capture what is easy, not what is useful. The result is a dataset that can tell you what happened but not why. Or worse, one that can tell you why but only in prose you cannot aggregate.

A useful deal record has two things running in parallel for every field that matters: a structured value for aggregation and a text field for the nuance behind it. Strip either one and you lose half the value.

Here is how to build it.

---

### Deal basics

Table stakes. Clean these up in your CRM before you build anything else.

- Account name
- ACV
- Close date
- Sales cycle length (days)
- Outcome: Won / Lost / No Decision / Churned
- Rep and segment
- Use case
- Buyer persona and seniority

The last two are frequently missing and consistently important. Win rate varies more by use case and persona than most teams realize. If you are not tracking them here, track them somewhere.

---

### Decision Drivers

This is the most important part of your data model. It is also the most commonly botched.

Most deals are decided by three to four factors. Each one needs three things: a label, a weight, and a description.

**Label:** A specific, named driver from a shared taxonomy. Not "pricing." Not "product." Something precise enough to aggregate across deals and still mean the same thing to two different analysts.

Good examples:
- Usage-based pricing uncertainty
- Pricing complexity
- Missing SSO
- HRIS connector gap
- Champion lost internal support
- Implementation timeline concern

Broad categories like "Pricing" or "Product" are useful for filtering. The specific driver is what produces insight. "We lost 14 deals to pricing concerns last quarter" tells you nothing. "11 of those 14 cited usage-based pricing uncertainty specifically" tells you what to fix.

Hindsight maintains a driver library organized by category and common industry patterns. Use it as a starting point and extend it for your business. The goal is a taxonomy that is consistent enough to aggregate but specific enough to act on.

**Weight:** Each driver gets a percentage influence on the decision. Drivers across a deal should sum to 100%.

This changes how you read the data entirely. A deal where pricing was tagged at 8% influence is a very different deal from one where pricing was tagged at 52%, even if both have "pricing" as a listed driver. Aggregate the weights and you get a map of what is actually driving decisions in your market, not just what came up.

**Description:** A short text field. What specifically happened with this driver in this deal? What did the buyer say? What did the rep observe? This is the field that explains an outlier, captures a quote, and gives future readers the context the structured fields cannot.

---

### Competitors

Track every vendor in the evaluation, not just the one that won.

Each competitor entry needs:

**Competitor name**

**Type:**
- Incumbent (already in the account)
- Primary competitor (main alternative evaluated)
- Other (mentioned, briefly evaluated, or used for price benchmarking)

**Outcome:**
- Selected (they won)
- Evaluated (seriously considered, not selected)
- Mentioned (came up but not formally evaluated)

**Comparison notes:** A text field. How did the buyer describe this vendor relative to you? What did they do better? What did they do worse? What specific capabilities or terms came up in comparison?

This last field is the one that actually updates battlecards. "Lost to Competitor A" is a data point. "Buyer said Competitor A had a native QuickBooks connector and offered a 90-day implementation guarantee. We had neither" is something a rep can use tomorrow.

---

### Product

This is the layer that makes your win-loss data useful to product teams, not just GTM.

For every capability that played a role in a deal, capture:

**Feature name:** Pull from your product taxonomy. Use the same terms your product team uses internally. Consistency matters for aggregation across deals.

**Role in deal:**
- Gap (buyer needed it, you do not have it)
- Blocker (deal-breaker, explicitly cited)
- Request (buyer asked for it, not a hard requirement)
- Delight (positively influenced the decision)
- Concern (buyer had questions or hesitation around it)

**Notes:** What specifically did the buyer say? How did it come up? Was it raised by the buyer or surfaced by the rep?

Aggregated across deals, this gives product a ranked, evidence-backed view of what is winning and losing deals. Not a feature request list. Not a support ticket queue. Actual deal outcomes tied to specific capabilities.

---

### Scorecard

After a full deal review, score the deal across five dimensions. These are not entered by reps. They are completed by the analyst or Hindsight after the full record has been reviewed.

- Product Fit (1-5)
- Pricing Fit (1-5)
- Customer Fit (1-5)
- Sales Execution (1-5)
- Competitive Performance (1-5)

Each score gets a short rationale note. Why did this deal score a 2 on sales execution? What specifically happened?

Scores enable KPI tracking over time. Average product fit across lost deals. Sales execution score by rep or segment. Competitive performance against a specific competitor. These are the numbers a VP wants in a quarterly review. They only mean something if the underlying record is complete.

---

### Putting it together

A complete deal record is not a form. It is a structured document with layered depth.

The structured fields handle aggregation. The text fields handle context. The two together handle the question every stakeholder actually asks: what is happening, and why.

For teams using AI to synthesize win-loss data, this structure matters even more. An AI agent reading a flat CRM export gets noise. An AI agent reading a properly structured deal record with labeled drivers, weighted influences, competitor comparisons, and product gaps gets something it can reason over accurately. We will cover how to format records for AI in Section 09.


<!-- CALLOUT ──────────────────────────────────────────────────────────────── -->

:::callout
stat: +44%
label: Accuracy improvement when triangulating CRM + call data + buyer interview
:::

<!-- SECTION CTA ─────────────────────────────────────────────────────────── -->

cta: See how Hindsight structures the deal record →
