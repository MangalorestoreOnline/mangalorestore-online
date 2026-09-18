import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { STORE_NAME, STORE_TAGLINE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${STORE_NAME} | ${STORE_TAGLINE}`,
    template: `%s | ${STORE_NAME}`,
  },
  description:
    "Bring the authentic taste of Mangalore to your home! Shop premium Mangalorean spices, pickles, and traditional masalas made with love. Enjoy free shipping across India and savor the real flavors of the coast.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mangalorestore.online"),
  keywords: [
    "mangalore store online",
    "mangalorean spices",
    "kori rotti",
    "kundapur chicken masala",
    "keramruth coconut oil",
    "vishnu ghee",
    "south indian snacks",
    "authentic mangalore food",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mangalorestore.online",
    siteName: STORE_NAME,
    title: `${STORE_NAME} — Authentic Mangalorean Delicacies & Spices`,
    description:
      "Bring the authentic taste of Mangalore to your home! Premium Mangalorean snacks, spices, pickles, and wellness products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: STORE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: STORE_NAME,
    description: "Authentic Mangalorean Flavors & Spices delivered across India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NJDDH8QC";

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased selection:bg-brand-saffron/20 selection:text-brand-saffron">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <Providers>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
