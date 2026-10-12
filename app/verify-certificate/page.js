import Breadcrumb from "@/components/Breadcrumb";
import VerifyCertificateForm from "@/sections/VerifyCertificateForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Verify Certificate",
  description:
    "Verify an IGS organization or auditor certificate by entering the certificate registration number.",
  path: "/verify-certificate",
  keywords: ["verify ISO certificate", "IGS certificate verification", "auditor certificate verification"],
});

export default function VerifyCertificatePage() {
  return (
    <>
      <Breadcrumb title="Verify Certificate" items={[{ label: "Verify Certificate" }]} />
      <section className="section verifySection">
        <div className="container-narrow verifyGrid">
          <div data-aos="fade-up">
            <span className="eyebrow">Certificate Verification</span>
            <h2 className="section-title">Check the Validity of an IGS Certificate</h2>
            <p className="section-subtitle">
              Choose whether you are verifying an organization certificate or an auditor (training)
              certificate, enter the certificate registration number and submit. We&apos;ll confirm
              its validity and certification details.
            </p>
            <ul className="checkList">
              <li><i className="bi bi-check-circle-fill" /> Organization certificates — ISO, HACCP, Halal and GMP</li>
              <li><i className="bi bi-check-circle-fill" /> Auditor certificates — Lead Auditor and Internal Auditor courses</li>
            </ul>
          </div>
          <div className="contactFormWrapper" data-aos="fade-up" data-aos-delay="120">
            <VerifyCertificateForm />
          </div>
        </div>
      </section>
    </>
  );
}
