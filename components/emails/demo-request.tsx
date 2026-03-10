import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const DemoRequestEmail = ({
  name = "there",
  company = "your company",
}: {
  name: string;
  company: string;
}) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Let's walk through your deal data together</Preview>
        <Body style={main}>
          <Container style={container}>
            <Text style={paragraph}>Hi {name},</Text>
            
            <Text style={paragraph}>
            Thanks for reaching out. I'm Ani, founder of Hindsight.
            </Text>

            <Text style={paragraph}>
            Most teams I talk to have the same problem. They know they're losing winnable deals. They just can't prove why. The CRM says pricing. The rep says something else. And by the time anyone digs in, the deal is three months old and the buyer has moved on.
            </Text>

            <Text style={paragraph}>
              If you can connect {company}'s CRM, I'll show you what's actually driving your wins and losses live in the demo. Not a sandbox. Your own deals.

            </Text>

            <Text style={paragraph}>
By the end of 30 minutes you'll know which competitors are eating your lunch and exactly why, what's actually moving your win rate versus what reps are entering after the fact, and how Hindsight fits into your team's workflow without adding more work.
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href="https://calendly.com/ani-hindsight/30min"
              >
                Pick a time →
              </Button>
            </Section>

            <Text style={paragraph}>
If Calendly is blocked, just reply with your availability.
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              Ani Gottiparthy<br />
              Founder, Hindsight<br />
              <Link href="https://www.usehindsight.com" style={link}>
                usehindsight.com
              </Link>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default DemoRequestEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333",
  marginBottom: "16px",
};

const list = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333",
  marginBottom: "16px",
  marginTop: "0",
  paddingLeft: "20px",
};

const listItem = {
  marginBottom: "8px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#D4A843",
  borderRadius: "8px",
  color: "#080F1E",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "32px 0",
};

const footer = {
  color: "#666",
  fontSize: "13px",
  lineHeight: "20px",
};

const link = {
  color: "#D4A843",
  textDecoration: "none",
};
