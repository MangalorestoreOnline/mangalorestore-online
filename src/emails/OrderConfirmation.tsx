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
  Hr,
  Row,
  Column,
  Link,
} from "@react-email/components";
import { Order } from "@/types/order";
import { formatPrice } from "@/lib/utils";

interface OrderConfirmationEmailProps {
  order: Order;
}

export const OrderConfirmationEmail = ({ order }: OrderConfirmationEmailProps) => {
  const previewText = `Order Confirmation #${order?.order_number || "MSO-XXXX"}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>MangaloreStore.Online</Heading>
            <Text style={headerSubtitle}>Authentic Mangalorean Flavors & Wellness</Text>
          </Section>

          {/* Greeting */}
          <Section style={content}>
            <Heading as="h2" style={subHeading}>
              Thank You for Your Order! 🙏
            </Heading>
            <Text style={paragraph}>
              Hi {order?.customer_name || "Valued Customer"},
            </Text>
            <Text style={paragraph}>
              We have received your order <strong>#{order?.order_number}</strong> and are preparing it with utmost care and coastal love.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Order Details */}
          <Section style={content}>
            <Heading as="h3" style={sectionTitle}>
              Order Summary
            </Heading>
            {order?.items?.map((item, index) => (
              <Row key={index} style={itemRow}>
                <Column style={{ width: "70%" }}>
                  <Text style={itemName}>{item.product_name}</Text>
                  {item.variant_name && <Text style={itemVariant}>{item.variant_name}</Text>}
                  <Text style={itemQty}>Qty: {item.quantity}</Text>
                </Column>
                <Column style={{ width: "30%", textAlign: "right" }}>
                  <Text style={itemPrice}>{formatPrice(item.total_price)}</Text>
                </Column>
              </Row>
            ))}

            <Hr style={divider} />

            <Row style={summaryRow}>
              <Column style={{ width: "70%" }}>
                <Text style={summaryLabel}>Subtotal:</Text>
                <Text style={summaryLabel}>Shipping:</Text>
                {order?.discount_amount > 0 && (
                  <Text style={summaryLabel}>Discount:</Text>
                )}
                <Text style={summaryTotalLabel}>Total:</Text>
              </Column>
              <Column style={{ width: "30%", textAlign: "right" }}>
                <Text style={summaryVal}>{formatPrice(order?.subtotal)}</Text>
                <Text style={summaryVal}>
                  {order?.shipping_amount === 0 ? "FREE" : formatPrice(order?.shipping_amount)}
                </Text>
                {order?.discount_amount > 0 && (
                  <Text style={summaryVal}>-{formatPrice(order?.discount_amount)}</Text>
                )}
                <Text style={summaryTotalVal}>{formatPrice(order?.total)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Delivery Address */}
          <Section style={content}>
            <Heading as="h3" style={sectionTitle}>
              Delivery Address
            </Heading>
            <Text style={paragraph}>
              {order?.shipping_address?.full_name}<br />
              {order?.shipping_address?.address_line1}<br />
              {order?.shipping_address?.address_line2 && `${order?.shipping_address?.address_line2}, `}
              {order?.shipping_address?.city}, {order?.shipping_address?.state} - {order?.shipping_address?.pincode}<br />
              Phone: {order?.shipping_address?.phone}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Need assistance? WhatsApp us at{" "}
              <Link href="https://wa.me/9179759287652" style={link}>
                +91 7975928765
              </Link>{" "}
              or email{" "}
              <Link href="mailto:help@mangalorestore.online" style={link}>
                help@mangalorestore.online
              </Link>
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

export default OrderConfirmationEmail;

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
  backgroundColor: "#E8571A",
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
  padding: "20px 24px",
};

const subHeading = {
  color: "#1A1A1A",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 12px 0",
};

const sectionTitle = {
  color: "#0D7680",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 12px 0",
};

const paragraph = {
  color: "#4A4A4A",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 10px 0",
};

const divider = {
  borderColor: "#F0EAE1",
  margin: "16px 0",
};

const itemRow = {
  marginBottom: "12px",
};

const itemName = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1A1A1A",
  margin: "0",
};

const itemVariant = {
  fontSize: "12px",
  color: "#7A7A7A",
  margin: "2px 0 0 0",
};

const itemQty = {
  fontSize: "12px",
  color: "#7A7A7A",
  margin: "2px 0 0 0",
};

const itemPrice = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1A1A1A",
  margin: "0",
};

const summaryRow = {
  marginTop: "12px",
};

const summaryLabel = {
  fontSize: "14px",
  color: "#666",
  margin: "4px 0",
};

const summaryVal = {
  fontSize: "14px",
  color: "#1A1A1A",
  margin: "4px 0",
};

const summaryTotalLabel = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#E8571A",
  margin: "8px 0 0 0",
};

const summaryTotalVal = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#E8571A",
  margin: "8px 0 0 0",
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
  lineHeight: "18px",
};

const footerCopyright = {
  fontSize: "11px",
  color: "#999999",
  marginTop: "8px",
};

const link = {
  color: "#E8571A",
  textDecoration: "underline",
};
