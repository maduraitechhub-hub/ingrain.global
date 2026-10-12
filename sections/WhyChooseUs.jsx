// "What makes us unique" — points taken from ingrain.world (About, Services, FAQ).
const reasons = [
  {
    icon: "bi-award",
    title: "GAC & IAF Accredited",
    text: "Accredited by GAC and IAF since 2024, strengthening the global credibility of every certificate we issue.",
  },
  {
    icon: "bi-mortarboard",
    title: "Exemplar Global RTP",
    text: "Recognised by Exemplar Global as an RTP-certified Training Provider for Lead Auditor courses.",
  },
  {
    icon: "bi-globe2",
    title: "2,000+ Clients Worldwide",
    text: "Serving government, public and private sector organizations across India and internationally.",
  },
  {
    icon: "bi-lightbulb",
    title: "Clear, Practical Guidance",
    text: "We take time to understand your business and turn complex ISO requirements into clear, practical steps.",
  },
  {
    icon: "bi-receipt",
    title: "Transparent Pricing",
    text: "Cost-effective certification with no hidden charges, and advice on the most suitable certification scope.",
  },
  {
    icon: "bi-calendar-check",
    title: "Planned Schedules",
    text: "Audits and certification follow planned schedules, so most certifications complete within a few weeks.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section whyChoose">
      <div className="container-narrow">
        <div className="whyChooseHeader" data-aos="fade-up">
          <span className="eyebrow">Why Choose IGS</span>
          <h2 className="section-title">Clear Certification. Real Value. Trusted Results.</h2>
          <p className="section-subtitle">
            Many certification bodies focus only on completing audits. We focus on certification that
            adds real value to your business.
          </p>
        </div>

        <div className="whyChooseGrid">
          {reasons.map((r, i) => (
            <div className="whyChooseCard" key={r.title} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <i className={`bi ${r.icon}`} />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
