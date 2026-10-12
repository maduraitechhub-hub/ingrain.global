import Breadcrumb from "@/components/Breadcrumb";
import PublicInfoSection from "@/sections/PublicInfoSection";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Public Information",
  description:
    "IGS company profile, organization chart, management system and impartiality policies, certification procedures, certification and accreditation mark rules, complaints and CB transfer process.",
  path: "/public-information",
  keywords: ["certification body public information", "impartiality policy", "certification procedure", "complaint handling"],
});

export default function PublicInformationPage() {
  return (
    <>
      <Breadcrumb title="Public Information" items={[{ label: "Public Information" }]} />
      <PublicInfoSection />
      <CTABanner />
    </>
  );
}
