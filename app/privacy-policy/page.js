import Breadcrumb from "@/components/Breadcrumb";
import LegalContact from "@/components/LegalContact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Ingrain Global Standard (IGS) collects, uses, shares and protects personal and organizational information.",
  path: "/privacy-policy",
});

// Content from section 6 of ingrain.world/terms-and-conditions
export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb title="Privacy Policy" items={[{ label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container-narrow legalContent">
          <h2>Scope</h2>
          <p>
            This policy covers personal and organizational information handled by IGS for
            certification, training and auditing services, inquiries, applications, contracts, and
            visits to our website and digital platforms.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Personal details:</strong> name, title, contact information, professional qualifications, job roles, and identification documents where needed for verification.</li>
            <li><strong>Organizational details:</strong> business name, address, contacts, certification application data, audit and certification records, feedback and complaints.</li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>Processing certification and audit applications and carrying out those activities</li>
            <li>Meeting accreditation and regulatory requirements</li>
            <li>Sending service updates and information</li>
            <li>Improving our services</li>
            <li>Handling complaints, inquiries and feedback</li>
          </ul>

          <h2>Legal Bases for Processing</h2>
          <p>Performance of a contract, legal obligations, legitimate interests (such as service improvement), and consent where explicitly required.</p>

          <h2>Sharing of Information</h2>
          <ul>
            <li>Accreditation bodies, where compliance requires it</li>
            <li>Subcontractors or auditors involved in certification</li>
            <li>Regulatory authorities, when required by law</li>
            <li>Third-party service providers (such as IT support) under strict confidentiality agreements</li>
          </ul>
          <p>IGS does not sell or rent personal information.</p>

          <h2>Data Retention</h2>
          <p>Information is kept only as long as needed for the stated purposes or as required by law. Retention periods depend on the type of data and applicable regulations.</p>

          <h2>Security</h2>
          <p>IGS uses technical and organizational safeguards — including encryption, secure servers and access controls — to protect data from unauthorized access, loss or misuse.</p>

          <h2>Your Rights</h2>
          <ul>
            <li>Access a copy of your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request erasure, subject to legal requirements</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Data portability to another organization</li>
            <li>Withdraw consent, where processing relies on consent</li>
          </ul>

          <h2>International Transfers</h2>
          <p>If data is transferred outside your country, IGS ensures adequate protection in line with applicable data protection laws.</p>

          <h2>Policy Updates</h2>
          <p>IGS may revise this policy periodically. Updates are posted on this website with an effective date.</p>

          <LegalContact />
        </div>
      </section>
    </>
  );
}
