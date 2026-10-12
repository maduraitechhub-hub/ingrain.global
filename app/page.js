import HeroSection from "@/sections/HeroSection";
import CounterSection from "@/sections/CounterSection";
import AboutPreview from "@/sections/AboutPreview";
import ServicesOverview from "@/sections/ServicesOverview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import ProcessTimeline from "@/sections/ProcessTimeline";
import FAQSection from "@/sections/FAQSection";
import ContactForm from "@/sections/ContactForm";
import Testimonials from "@/sections/Testimonials";
import NewsPreview from "@/sections/NewsPreview";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "ISO Certification Body in India | Ingrain Global Standard",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "ISO certification body",
    "ISO certification India",
    "ISO certification Madurai",
    "Lead Auditor training",
    "HACCP certification",
    "Halal certification",
  ],
});

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <HeroSection />
      <CounterSection />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <FAQSection compact aside={<ContactForm variant="callback" title="Request a Call Back" />} />
      <Testimonials />
      <NewsPreview />
      <CTABanner />
    </>
  );
}
