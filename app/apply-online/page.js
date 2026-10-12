import Breadcrumb from "@/components/Breadcrumb";
import ApplyForm from "@/sections/ApplyForm";
import { siteConfig } from "@/data/siteConfig";
import { documentUrl } from "@/data/assets";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apply Online for Certification",
  description:
    "Apply online for ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, HACCP, GMP or other certification assessment with Ingrain Global Standard.",
  path: "/apply-online",
  keywords: ["apply for ISO certification", "ISO certification application form"],
});

export default function ApplyOnlinePage() {
  return (
    <>
      <Breadcrumb title="Apply Online" items={[{ label: "Apply Online" }]} />
      <section className="section applySectionWrap">
        <div className="container-narrow">
          <div className="applyIntro" data-aos="fade-up">
            <span className="eyebrow">Application for Certification</span>
            <h2 className="section-title">Please Fill Out the Form for Certification Assessment</h2>
            <p className="section-subtitle">
              If you have any questions, contact us at{" "}
              <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a> or{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Prefer paper? Download the{" "}
              <a href={documentUrl("/asset/uploads/on_page_element/pdf/igspl-f-01-client-application-form1.pdf")} target="_blank" rel="noopener noreferrer">
                client application form (PDF)
              </a>
              . Thank you for applying!
            </p>
          </div>
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
