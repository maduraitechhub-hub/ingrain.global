import Breadcrumb from "@/components/Breadcrumb";
import ContactPageSection from "@/sections/ContactPageSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Ingrain Global Standard, D 63/127 Rajam Road, T.V.S Nagar, Madurai 625 003. Call +91 98942 63543 or email head@ingrain.world. Associate partners in Chennai and Brazil.",
  path: "/contact",
  keywords: ["contact IGS", "ISO certification Madurai contact", "Ingrain Global Standard contact"],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact" items={[{ label: "Contact" }]} />
      <ContactPageSection />
    </>
  );
}
