import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import axios from "axios";
import { WebClient } from "@slack/web-api";
import { render } from "@react-email/render";
import DemoRequestEmail from "@/components/emails/demo-request";

const resend = new Resend(process.env.RESEND_API_KEY);
const HUBSPOT_BASE_URL = "https://api.hubapi.com";
const APOLLO_BASE_URL = "https://api.apollo.io/v1";

// Common free email providers to block
const FREE_EMAIL_PROVIDERS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
];

function isWorkEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? !FREE_EMAIL_PROVIDERS.includes(domain) : false;
}

async function sendDemoRequestSlack(data: {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  details?: string;
}) {
  if (!process.env.SLACK_BOT_TOKEN || !process.env.SLACK_DEMO_CHANNEL_ID) {
    console.warn("Slack credentials not configured");
    return;
  }

  const client = new WebClient(process.env.SLACK_BOT_TOKEN);

  await client.chat.postMessage({
    channel: process.env.SLACK_DEMO_CHANNEL_ID,
    text: `New Demo Request from ${data.firstName} ${data.lastName} at ${data.company}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*🎯 New Demo Request*\n\n*Name:* ${data.firstName} ${data.lastName}\n*Email:* ${data.email}\n*Company:* ${data.company}\n*Role:* ${data.role}${data.details ? `\n*Details:* ${data.details}` : ""}`,
        },
      },
    ],
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, role, details } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate work email
    if (!isWorkEmail(email)) {
      return NextResponse.json(
        { error: "Please use your work email address" },
        { status: 400 }
      );
    }

    // Enrich with Apollo (optional, don't fail if it errors)
    let apolloData = null;
    let orgData = null;
    try {
      const apolloResponse = await axios.post(
        `${APOLLO_BASE_URL}/people/match`,
        {
          api_key: process.env.APOLLO_KEY,
          email: email,
        }
      );
      apolloData = apolloResponse?.data?.person;
      orgData = apolloResponse?.data?.person?.organization;
    } catch (err) {
      console.warn("Apollo enrichment failed:", err);
    }

    const domain = orgData?.primary_domain || email.split("@")[1];
    const companyName = orgData?.name || company;

    // Find or create company in HubSpot
    let companyId = null;
    if (domain) {
      try {
        const searchResponse = await axios.post(
          `${HUBSPOT_BASE_URL}/crm/v3/objects/companies/search`,
          {
            filters: [
              {
                propertyName: "domain",
                operator: "EQ",
                value: domain,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
          }
        );

        if (searchResponse?.data?.total > 0) {
          companyId = searchResponse.data.results[0].id;
        } else {
          // Create new company
          const createCompanyResponse = await axios.post(
            `${HUBSPOT_BASE_URL}/companies/v2/companies`,
            {
              properties: [
                { name: "domain", value: domain },
                { name: "name", value: companyName },
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
          companyId = createCompanyResponse.data.companyId;
        }
      } catch (err) {
        console.warn("HubSpot company creation failed:", err);
      }
    }

    // Create or update contact in HubSpot
    const contactProperties = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      jobtitle: apolloData?.title || role,
      company: companyName,
      lifecyclestage: "marketingqualifiedlead",
      hs_lead_status: "NEW",
    };

    let associations: any[] = [];
    if (companyId) {
      associations = [
        {
          to: { id: companyId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 279,
            },
          ],
        },
      ];
    }

    try {
      // Search for existing contact
      const searchContactResponse = await axios.post(
        `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/search`,
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          },
        }
      );

      if (searchContactResponse.data.total > 0) {
        // Update existing contact
        const contactId = searchContactResponse.data.results[0].id;
        await axios.patch(
          `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${contactId}`,
          {
            ...(associations?.length > 0 && { associations: associations }),
            properties: contactProperties,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        // Create new contact
        await axios.post(
          `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`,
          {
            ...(associations?.length > 0 && { associations: associations }),
            properties: contactProperties,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
      }
    } catch (err) {
      console.warn("HubSpot contact creation failed:", err);
    }

    // Add to Resend audience
    try {
      await resend.contacts.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID!,
      });
    } catch (err) {
      console.warn("Resend contact creation failed:", err);
    }

    // Send email with Calendly link
    try {
      const emailHtml = await render(
        DemoRequestEmail({
          name: firstName,
          company: company,
        })
      );

      await resend.emails.send({
        from: "Ani from Hindsight <support@usehindsight.com>",
        to: [email],
        subject: "Your win-loss insight is already in there",
        html: emailHtml,
      });
    } catch (err) {
      console.error("Resend email failed:", err);
    }

    // Send Slack notification
    try {
      await sendDemoRequestSlack({
        email,
        firstName,
        lastName,
        company,
        role,
        details,
      });
    } catch (err) {
      console.warn("Slack notification failed:", err);
    }

    return NextResponse.json({
      success: true,
      calendlyUrl: "https://calendly.com/ani-hindsight/30min",
    });
  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
