import Link from "next/link";
import { processSteps } from "@/data/content";

export default function ProcessTimeline() {
  return (
    <section className="section processSection">
      <div className="container-narrow">
        <div className="processHeader" data-aos="fade-up">
          <span className="eyebrow">Certification Process</span>
          <h2 className="section-title">Your Path to Certification</h2>
          <p className="section-subtitle">
            Every certification follows our published procedures — from application to surveillance
            and recertification.
          </p>
        </div>

        <div className="processGrid">
          {processSteps.map((s, i) => (
            <div className="processCard" key={s.step} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <span className="processCardNumber">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="processFooter" data-aos="fade-up">
          <Link href="/public-information" className="btn-luxury-dark">
            <i className="bi bi-file-earmark-text" /> View Certification Procedures
          </Link>
        </div>
      </div>
    </section>
  );
}
