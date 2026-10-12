import Breadcrumb from "@/components/Breadcrumb";
import Testimonials from "@/sections/Testimonials";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Testimonials",
  description: "What clients in India, Singapore and Indonesia say about certification with Ingrain Global Standard.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb title="Testimonials" items={[{ label: "Testimonials" }]} />
      <Testimonials />
      <CTABanner />
    </>
  );
}
