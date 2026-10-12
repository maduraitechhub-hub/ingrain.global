import Link from "next/link";

// Content from ingrain.world/accreditation (+ GAC/IAF accreditation stated on the About page).
const commitments = [
  { icon: "bi-mortarboard", title: "Competence", text: "Qualified auditors and documented procedures for every certification activity." },
  { icon: "bi-shield-check", title: "Impartiality", text: "Certification decisions free from commercial, financial or other pressures." },
  { icon: "bi-lock", title: "Confidentiality", text: "Client information is protected throughout the certification process." },
  { icon: "bi-arrow-repeat", title: "Continual Improvement", text: "Our own management system is reviewed and improved continually." },
];

export default function AccreditationSection() {
  return (
    <>
      <section className="section accreditationIntro">
        <div className="container-narrow accreditationGrid">
          <div data-aos="fade-up">
            <span className="eyebrow">Our Accreditation Bodies</span>
            <h2 className="section-title">Building Confidence Through Independent Accreditation</h2>
            <p className="aboutParagraph">
              Accreditation is formal recognition that a Certification Body is competent to perform
              certification activities. It shows that a certification body works with impartiality,
              consistency and integrity, and that its services follow internationally accepted
              requirements.
            </p>
            <p className="aboutParagraph">
              Ingrain Global Standard Private Limited (IGS) delivers accredited certification services
              that reflect our commitment to competence, impartiality, confidentiality and continual
              improvement.
            </p>
          </div>
          <div className="accreditationBadges" data-aos="fade-up" data-aos-delay="120">
            <div className="accreditationBadge">
              <i className="bi bi-award-fill" />
              <strong>GAC</strong>
              <span>Accredited since 2024</span>
            </div>
            <div className="accreditationBadge">
              <i className="bi bi-globe2" />
              <strong>IAF</strong>
              <span>Accredited since 2024</span>
            </div>
            <div className="accreditationBadge">
              <i className="bi bi-mortarboard-fill" />
              <strong>Exemplar Global</strong>
              <span>RTP-certified Training Provider</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section whyChoose">
        <div className="container-narrow">
          <div className="whyChooseGrid whyChooseGrid4">
            {commitments.map((c, i) => (
              <div className="whyChooseCard" key={c.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <i className={`bi ${c.icon}`} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="processFooter" data-aos="fade-up">
            <Link href="/public-information" className="btn-luxury-dark">
              <i className="bi bi-file-earmark-text" /> Impartiality &amp; Accreditation Mark Documents
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
