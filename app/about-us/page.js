import Breadcrumb from "@/components/Breadcrumb";
import AboutSection from "@/sections/AboutSection";
import CounterSection from "@/sections/CounterSection";
import CTABanner from "@/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Founded in 2008 in Madurai, Ingrain Global Standard (IGS) is a GAC and IAF accredited ISO certification body bringing clarity, structure and trust to certification for 2,000+ clients worldwide.",
  path: "/about-us",
  keywords: ["about Ingrain Global Standard", "IGS certification body", "ISO certification body Madurai"],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" items={[{ label: "About Us" }]} />
      <AboutSection />
      <CounterSection />
      <CTABanner />
    </>
  );
}
