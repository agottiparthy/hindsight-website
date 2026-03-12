import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { WebClient } from "@slack/web-api"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Add to Resend playbook audience
    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: process.env.RESEND_PLAYBOOK_AUDIENCE_ID!,
      })
    } catch (err) {
      console.warn("Resend audience add failed:", err)
    }

    // Slack notification
    try {
      if (process.env.SLACK_BOT_TOKEN && process.env.SLACK_DEMO_CHANNEL_ID) {
        const slack = new WebClient(process.env.SLACK_BOT_TOKEN)
        await slack.chat.postMessage({
          channel: process.env.SLACK_DEMO_CHANNEL_ID,
          text: `📄 New Win-Loss Playbook unlock: ${email}`,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*📄 Win-Loss Playbook Unlocked*\n\n*Email:* ${email}${source ? `\n*Source:* ${source}` : ""}`,
              },
            },
          ],
        })
      }
    } catch (err) {
      console.warn("Slack notification failed:", err)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Playbook gate error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
