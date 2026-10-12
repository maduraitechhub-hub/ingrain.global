import Breadcrumb from "@/components/Breadcrumb";
import AccreditationSection from "@/sections/AccreditationSection";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accreditation",
  description:
    "IGS is a GAC and IAF accredited certification body. Learn how independent accreditation builds confidence in our competence, impartiality and integrity.",
  path: "/accreditation",
  keywords: ["accredited certification body", "GAC accredited", "IAF accredited certification body India"],
});

export default function AccreditationPage() {
  return (
    <>
      <Breadcrumb title="Accreditation Body" items={[{ label: "Accreditation" }]} />
      <AccreditationSection />
      <CTABanner />
    </>
  );
}
