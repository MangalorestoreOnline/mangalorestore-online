import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mangalorestore.online";

  const staticPages = [
    "",
    "/about-us",
    "/contact",
    "/cart",
    "/checkout",
    "/wishlist",
    "/loyalty-program",
    "/terms",
    "/privacy-policy",
    "/shipping-policy",
    "/returns-and-refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.6,
  }));

  return [...staticPages];
}
