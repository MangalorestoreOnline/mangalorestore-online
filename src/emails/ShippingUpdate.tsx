import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Button,
} from "@react-email/components";

interface ShippingUpdateEmailProps {
  orderNumber: string;
  trackingNumber?: string;
  courierName?: string;
  trackingUrl?: string;
}

export const ShippingUpdateEmail = ({
  orderNumber,
  trackingNumber,
  courierName,
  trackingUrl,
}: ShippingUpdateEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Order #{orderNumber} has shipped! 🚚</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>MangaloreStore.Online</Heading>
            <Text style={headerSubtitle}>Authentic Mangalorean Flavors & Wellness</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={subHeading}>
              Your Order is on the Way! 📦
            </Heading>
            <Text style={paragraph}>
              Great news! Your order <strong>#{orderNumber}</strong> has been packed and handed over to our courier partner.
            </Text>

            {courierName && (
              <Text style={paragraph}>
                <strong>Courier:</strong> {courierName}
              </Text>
            )}

            {trackingNumber && (
              <Text style={paragraph}>
                <strong>Tracking Number / AWB:</strong> {trackingNumber}
              </Text>
            )}

            {trackingUrl && (
              <Section style={{ textAlign: "center", margin: "24px 0" }}>
                <Button style={ctaButton} href={trackingUrl}>
                  Track Shipment
                </Button>
              </Section>
            )}
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Need assistance? WhatsApp us at +91 7975928765
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} MangaloreStore.Online. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ShippingUpdateEmail;

const main = {
  backgroundColor: "#FDF8F0",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "24px 16px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #E8E0D5",
};

const header = {
  backgroundColor: "#0D7680",
  padding: "24px",
  borderRadius: "6px 6px 0 0",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const headerSubtitle = {
  color: "#FDF8F0",
  fontSize: "13px",
  margin: "4px 0 0 0",
};

const content = {
  padding: "24px",
};

const subHeading = {
  color: "#1A1A1A",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 12px 0",
};

const paragraph = {
  color: "#4A4A4A",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 12px 0",
};

const ctaButton = {
  backgroundColor: "#0D7680",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
};

const footer = {
  backgroundColor: "#FDF8F0",
  padding: "16px",
  borderRadius: "0 0 6px 6px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  color: "#666666",
};

const footerCopyright = {
  fontSize: "11px",
  color: "#999999",
  marginTop: "8px",
};
