import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/tinos/400.css";
import "@fontsource/tinos/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import AOSInit from "@/components/AOSInit";
import PageLoader from "@/components/PageLoader";
import Analytics from "@/components/Analytics";
import { buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

// Fonts match ingrain.world (Tinos headings, Open Sans body). They are
// self-hosted via @fontsource, so builds don't need to reach Google Fonts.

export const metadata = {
  ...buildMetadata({
    title: "ISO Certification Body in India | Ingrain Global Standard",
    description: siteConfig.description,
    keywords: [
      "ISO certification body India",
      "ISO certification Madurai",
      "ISO 9001 certification",
      "ISO 14001 certification",
      "ISO 45001 certification",
      "ISO 27001 certification",
      "ISO 22000 certification",
      "HACCP certification",
      "Halal certification",
      "Lead Auditor training India",
      "Exemplar Global RTP",
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.legalName,
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport = {
  themeColor: "#60080E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
        <PageLoader />
        <AOSInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
