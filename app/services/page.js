import Breadcrumb from "@/components/Breadcrumb";
import ServicesOverview from "@/sections/ServicesOverview";
import ProcessTimeline from "@/sections/ProcessTimeline";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Certification Services",
  description:
    "ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, HACCP and Halal certification, surveillance, recertification and transfers — plus Exemplar Global recognised Lead Auditor training from IGS.",
  path: "/services",
  keywords: ["ISO certification services", "Lead Auditor training", "HACCP certification", "Halal certification India"],
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb title="Our Services" items={[{ label: "Services" }]} />
      <ServicesOverview />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
