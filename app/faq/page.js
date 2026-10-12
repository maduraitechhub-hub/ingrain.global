import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/sections/FAQSection";
import ContactForm from "@/sections/ContactForm";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/data/content";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "ISO certification cost, which ISO standard you need, how long certification takes and how to verify an IGS certificate.",
  path: "/faq",
  keywords: ["ISO certification cost", "how long ISO certification takes", "which ISO standard"],
});

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb title="FAQ" items={[{ label: "FAQ" }]} />
      <FAQSection aside={<ContactForm variant="callback" title="Request a Call Back" />} />
      <CTABanner />
    </>
  );
}
