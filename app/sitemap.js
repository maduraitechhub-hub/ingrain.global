import { siteConfig } from "@/data/siteConfig";
import { allServices } from "@/data/services";
import { newsPosts } from "@/data/content";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/accreditation",
    "/public-information",
    "/apply-online",
    "/verify-certificate",
    "/news",
    "/faq",
    "/testimonials",
    "/contact",
    "/terms-and-conditions",
    "/training-terms",
    "/privacy-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = allServices.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const newsRoutes = newsPosts.map((p) => ({
    url: `${siteConfig.url}/news/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes];
}
