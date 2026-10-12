import { siteConfig, activeSocialLinks } from "@/data/siteConfig";
import { founders } from "@/data/team";

const OG_IMAGE = `${siteConfig.url}/images/og-cover.jpg`;
const ORG_ID = `${siteConfig.url}/#organization`;

// Builds a consistent Next.js Metadata object for any page.
export function buildMetadata({ title, description, path = "", keywords = [], image }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.legalName;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const desc = description || siteConfig.description;
  const ogImage = image || OG_IMAGE;

  return {
    title: fullTitle,
    description: desc,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.legalName,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.legalName }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@IGS_Asia_Cert",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

// Organization / ProfessionalService schema for the certification body.
export function organizationSchema() {
  const { address, openingHours } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.shortName],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    image: OG_IMAGE,
    foundingDate: String(siteConfig.foundedYear),
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pincode.replace(/\s/g, ""),
      addressCountry: "IN",
    },
    hasMap: siteConfig.mapDirectionsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHours.days,
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "Place", name: area })),
    sameAs: activeSocialLinks.map(([, url]) => url),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw,
        contactType: "customer service",
        email: siteConfig.email,
        availableLanguage: ["English", "Tamil"],
      },
    ],
    founder: founders.map((f) => ({ "@type": "Person", name: f.name.replace(/^Mr\.\s+/i, "") })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post, image) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    image: image ? [image] : undefined,
    mainEntityOfPage: `${siteConfig.url}/news/${post.slug}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
