import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LegalContact from "@/components/LegalContact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for ISO management system certification services provided by Ingrain Global Standard Private Limited (IGS).",
  path: "/terms-and-conditions",
});

// Content from ingrain.world/terms-and-conditions
export default function TermsPage() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" items={[{ label: "Terms & Conditions" }]} />
      <section className="section">
        <div className="container-narrow legalContent">
          <span className="legalUpdated">ISO Management System Certification Service</span>
          <p>
            These terms apply to certification activities carried out by Ingrain Global Standard
            Private Limited (IGS).
          </p>

          <h2>1. General</h2>
          <ul>
            <li>The offer to provide the described services is subject to these conditions.</li>
            <li>When the client accepts the offer, the offer and its acceptance form the contract between IGS and the client.</li>
            <li>IGS may change service specifications without prior notice, in line with continual-improvement guidelines from the International Organization for Standardization (ISO).</li>
          </ul>

          <h2>2. Service Fees</h2>
          <ul>
            <li>Quoted prices exclude GST and any other applicable duties or taxes, unless stated otherwise.</li>
          </ul>

          <h2>3. Invoicing</h2>
          <ul>
            <li>Unless agreed otherwise in writing, IGS issues an invoice once services are completed or products are delivered.</li>
            <li>Any advance payments are deducted from the final amount and credited to the client.</li>
          </ul>

          <h2>4. Payment</h2>
          <ul>
            <li>Without a written credit agreement, the client must pay an advance toward the quoted price before work begins.</li>
            <li>Where credit terms are agreed, payment is due 6 days from the invoice date, subject to the client&apos;s status and credit limit.</li>
            <li>If the client misses a payment due date, IGS may cancel the contract or suspend further services, without limiting its other rights or remedies.</li>
          </ul>

          <h2>5. Refund and Cancellation Policy</h2>
          <ul>
            <li>IGS will carry out audits and certification services according to the planned schedule.</li>
            <li>IGS may postpone or cancel a session, or change its location, at any time for unavoidable reasons.</li>
            <li>Cancellation requests received at least 6 days before a training session begins qualify for a 70% refund of the total amount paid.</li>
          </ul>

          <h2>6. Privacy Policy</h2>
          <p>
            How we handle personal and organizational information is described in our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>. For training-specific terms, see{" "}
            <Link href="/training-terms">Training Terms</Link>.
          </p>

          <LegalContact />
        </div>
      </section>
    </>
  );
}
