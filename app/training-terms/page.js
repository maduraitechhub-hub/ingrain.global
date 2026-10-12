import Breadcrumb from "@/components/Breadcrumb";
import LegalContact from "@/components/LegalContact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Training Terms",
  description: "Lead Auditor training terms and conditions — delegate application, payment, refund and cancellation policy at Ingrain Global Standard.",
  path: "/training-terms",
});

// Content from ingrain.world/training-terms
export default function TrainingTermsPage() {
  return (
    <>
      <Breadcrumb title="Training Terms" items={[{ label: "Training Terms" }]} />
      <section className="section">
        <div className="container-narrow legalContent">
          <span className="legalUpdated">Lead Auditor Training Terms and Conditions</span>

          <h2>Delegate Application and Conditions</h2>
          <ul>
            <li>Completing the online training application form and submitting it to the IGS team creates a pre-registration. Pre-registration does not guarantee a place in the training.</li>
            <li>Pre-registration becomes final registration once a partial training fee is paid and the payment receipt is confirmed.</li>
            <li>Enrollment closes 3 business days before the start date for online training.</li>
            <li>After final registration, a confirmation is sent to the email address provided, so please give a valid email address.</li>
          </ul>

          <h2>Mode of Payment</h2>
          <ul>
            <li>Online payments are accepted by credit or debit card (MasterCard or Visa), UPI and digital wallets.</li>
          </ul>

          <h2>Refund and Cancellation Policy</h2>
          <ul>
            <li>Ingrain Global Standard Pvt Ltd is responsible for running training courses on the planned schedule, but may postpone or cancel a session, or change its location, at any time for unavoidable reasons.</li>
            <li>If the company cancels a training session, the participant receives a 100% refund.</li>
            <li>If a candidate cancels at least 6 days before the training starts, they receive a 90% refund of the total amount paid.</li>
          </ul>

          <LegalContact />
        </div>
      </section>
    </>
  );
}
