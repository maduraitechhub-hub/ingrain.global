// Page content adapted from ingrain.world (home, about, news, public information).

export const testimonials = [
  {
    name: "Global Tech Marine Offshore Pte. Ltd.",
    role: "Singapore",
    rating: 5,
    text: "The work was finished on time with high quality, and the team handled everything professionally. The final result was clean and well organised.",
  },
  {
    name: "Santricals Services India Private Limited",
    role: "India",
    rating: 5,
    text: "IGS gave us professional support throughout certification. The team was responsive, clear and easy to work with.",
  },
  {
    name: "Southern Engineering Corporation",
    role: "India",
    rating: 5,
    text: "This was our first engagement with IGS and the experience was positive. The certificate design was clean and professional — we expect to work with IGS again.",
  },
  {
    name: "PT. Putra Andalan Sakti",
    role: "Indonesia",
    rating: 5,
    text: "The process was smooth. The team understood our requirements and handled the work professionally. The support and outcome exceeded our expectations.",
  },
  {
    name: "E-Careerpluz Info (India) Private Limited",
    role: "India",
    rating: 5,
    text: "IGS paid careful attention to every requirement. We would recommend them.",
  },
];

export const faqs = [
  {
    q: "What does ISO certification cost?",
    a: "Pricing depends on the size of your organization, number of employees, business activities, locations and the ISO standard chosen. Our pricing is transparent with no hidden charges, and we advise you on the most suitable certification scope.",
  },
  {
    q: "Which ISO standard do I need?",
    a: "Choose ISO 9001 for quality management, ISO 14001 for environmental performance, ISO 45001 for workplace safety and employee well-being, ISO 22000 or HACCP if you produce or handle food, and ISO 27001 to protect business and customer information. Our team can recommend a standard based on your business activities and customer requirements.",
  },
  {
    q: "Why choose IGS?",
    a: "If you are looking for a certification partner who makes certification simple and meaningful — we're here. IGS is GAC and IAF accredited, serves 2,000+ clients worldwide, and turns complex ISO requirements into clear, practical steps.",
  },
  {
    q: "How long will it take to get ISO certification?",
    a: "Timing depends on your readiness, scope and the requirements of the standard. Most certifications are completed within a few weeks once document review and the audit are complete. We work to planned schedules to reduce delays.",
  },
  {
    q: "How can I verify my certificate?",
    a: "Click “Verify Certificate” at the top of the website, choose Organization or Auditor certificate, enter the certificate registration number and submit. Our team will confirm the validity and certification details.",
  },
];

// Company timeline (ingrain.world/about-us)
export const milestones = [
  { year: "2008", title: "Where It All Began", text: "Founded by Mr. M. Ibrahim and Mr. P. Sivasankar to bring clarity, structure and trust to ISO certification." },
  { year: "2014", title: "Ingrain Assessment LLP", text: "The business became Ingrain Assessment LLP, strengthening its structure, processes and operational capacity." },
  { year: "2022", title: "Ingrain Global Standard Pvt. Ltd.", text: "Established as Ingrain Global Standard Private Limited — reflecting growth, independence and a global outlook." },
  { year: "2024", title: "GAC & IAF Accreditation", text: "Received GAC and IAF accreditation, strengthening global credibility." },
];

// Certification journey — each step maps to a published IGS procedure (see Public Information)
export const processSteps = [
  { step: "01", title: "Application", description: "Submit the client application form online with your organization, site and scope details." },
  { step: "02", title: "Review & Agreement", description: "We review the application, confirm the scope and standard, and share the quotation and terms." },
  { step: "03", title: "Onsite Audit", description: "Our auditors conduct the certification audit at your site(s), including multi-site audits where applicable." },
  { step: "04", title: "Certification Decision", description: "An independent review of the audit results leads to the certification decision." },
  { step: "05", title: "Certificate Issued", description: "Your certificate is issued along with the rules for using certification and accreditation marks." },
  { step: "06", title: "Surveillance & Recertification", description: "Periodic surveillance audits maintain your certification, followed by recertification at the end of the cycle." },
];

// ingrain.world → "Public Information" menu. Paths are on ingrain.world; see data/assets.js.
export const publicDocuments = [
  {
    group: "About IGS",
    items: [
      ["Company Profile", "/asset/uploads/on_page_element/pdf/igspl-profile.pdf"],
      ["Organization Chart", "/asset/uploads/pdf/IGSPL-D-04-Organization-Chart.pdf"],
      ["Management System Policy", "/asset/uploads/pdf/IGSPL-D-05-Management-System-Policy.pdf"],
    ],
  },
  {
    group: "Certification Process",
    items: [
      ["Application Form", "/asset/uploads/on_page_element/pdf/igspl-f-01-client-application-form1.pdf"],
      ["Certification Process Flow", "/asset/uploads/pdf/IGSPL-Certification-process-flow-chart.jpg"],
      ["Conducting Onsite Audit", "/asset/uploads/pdf/QP-15.pdf"],
      ["Multi-sites Audit", "/asset/uploads/pdf/QP-02.pdf"],
      ["Certification Decision", "/asset/uploads/pdf/IGSPL-F-34.pdf"],
    ],
  },
  {
    group: "Impartiality",
    items: [
      ["Policies & Impartiality Statement", "/asset/uploads/pdf/IGS-SC-24-MANAGEMENT-IMPARTIAL-STATEMENT.pdf"],
      ["Impartial Policy", "/asset/uploads/pdf/IGSPL-F-93-IMPARTIAL-POLICY-STATEMENT.pdf"],
      ["Conflict of Interest Policy", "/asset/uploads/pdf/IGSPL-D-08-Conflict-of-interest-Policy.pdf"],
    ],
  },
  {
    group: "Certification Rules",
    items: [
      ["Certification Mark", "/asset/uploads/pdf/IGSPL-F-45.pdf"],
      ["Accreditation Marks", "/asset/uploads/pdf/IGSPL-D-08.pdf"],
      ["Suspension & Withdrawal", "/asset/uploads/pdf/QP-16.pdf"],
    ],
  },
  {
    group: "Complaints & Transfers",
    items: [
      ["Complaint Handling", "/asset/uploads/pdf/QP-06.pdf"],
      ["Complaint Register", "/asset/uploads/pdf/IGSPL-F-13.pdf"],
      ["CB's Transfer Process", "/asset/uploads/on_page_element/pdf/igspl-f-95-certification-body-transfer-procedure.pdf"],
    ],
  },
];

// ingrain.world/news — the three current articles. (Older 2022 training-photo posts had
// no text content on the reference site and were not carried over.)
export const newsPosts = [
  {
    slug: "iso-9001-2026-revision-approved",
    legacySlug: "iso-90012026--revision-approved",
    title: "ISO 9001:2026 — Revision Approved",
    date: "2026-08-29",
    category: "Standards Update",
    image: "news-iso-9001-2026",
    excerpt:
      "The ISO 9001 revision has reached its final stage. ISO 9001:2026 is set for publication on 16 September 2026 and will replace ISO 9001:2015.",
    body: [
      { p: "The ISO 9001 revision is in its final stage. ISO/FDIS 9001 has gained broad support from countries worldwide. ISO 9001:2026 is set for publication on 16 September 2026 and will replace ISO 9001:2015." },
      { h: "Key changes" },
      { ul: [
        "Requirements are written more clearly.",
        "Leadership and the development of a quality culture receive more emphasis.",
        "Risks and opportunities are explained more precisely.",
        "A new Annex A provides clarification.",
        "Closer alignment with other ISO management system standards.",
      ] },
      { h: "Status" },
      { p: "Approved, with publication scheduled for 16 September 2026." },
    ],
  },
  {
    slug: "exemplar-global-training-transition-guidance",
    legacySlug: "exemplar-global-issues-training-transition-guidance-for-iso-90012026--iso-140012026",
    title: "Exemplar Global Issues Training Transition Guidance for ISO 9001:2026 & ISO 14001:2026",
    date: "2026-08-29",
    category: "Training",
    image: "news-exemplar-transition",
    excerpt:
      "Exemplar Global has released guidance for its certified Training Providers on moving training and competency programs to the revised ISO 9001:2026 and ISO 14001:2026 standards.",
    body: [
      { p: "Exemplar Global has released guidance for its certified Training Providers on moving their training and competency programs to the revised ISO 9001:2026 and ISO 14001:2026 standards. The guidance sets out a structured transition process as the revised standards take effect." },
      { h: "Key highlights" },
      { ul: [
        "ISO 14001:2026 — training providers get a three-year phase-out period to stop delivering training based on the previous edition.",
        "TPECS Providers — training and assessment materials must be updated to the revised competency-unit requirements, followed by the required self-declaration process.",
        "RTP Providers — training must be aligned with the new edition of the applicable standard.",
        "ISO 9001:2026 — Exemplar Global is setting up a similar transition process, including arrangements for the updated Quality Management competency unit.",
        "Transition Training — providers in good standing may offer transition training that meets Exemplar Global's requirements.",
      ] },
      { h: "What this means for organizations and professionals" },
      { p: "Organizations, auditors, consultants and training professionals should start preparing for the revised standards and make sure their training, competency and certification activities stay aligned with Exemplar Global's transition requirements." },
    ],
  },
  {
    slug: "iso-14001-2026-officially-released",
    legacySlug: "iso-140012026-officially-released",
    title: "ISO 14001:2026 Officially Released",
    date: "2026-05-12",
    category: "Standards Update",
    image: "news-iso-14001-2026",
    excerpt:
      "ISO 14001:2026 was published in April 2026 and replaces ISO 14001:2015, with a transition window of about three years.",
    body: [
      { p: "The updated environmental management standard, ISO 14001:2026, was published in April 2026 and replaces ISO 14001:2015. Organizations have a transition window of about three years and need to complete the move to the new version by 2029." },
      { h: "Major changes in ISO 14001:2026" },
      { ul: [
        "Climate and environmental risks get more attention.",
        "New requirements address change management.",
        "A broader view of the product or service lifecycle.",
        "More emphasis on externally provided processes and services.",
        "Improved guidance for implementation and auditing.",
      ] },
      { p: "The goal is to bring organizations in line with current sustainability and ESG expectations." },
      { h: "Certificate validity" },
      { p: "Under draft transition guidance, organizations certified to ISO 14001:2015 can keep their certificates until roughly May 2029, by when they must transition to the 2026 version. Certification bodies are preparing transition audits and updating their accreditation processes." },
      { h: "Climate and biodiversity as core focus areas" },
      { p: "The revised standard explicitly treats climate resilience, biodiversity protection, pollution prevention and sustainable resource management as strategic considerations." },
      { h: "Certification bodies preparing for transition audits" },
      { p: "Accredited certification bodies worldwide are updating auditor competence requirements, transition procedures and audit methods. Transition audits are expected to begin on a wide scale during 2026." },
      { h: "Supporting guidance from ISO" },
      { p: "ISO has released guidance documents summarising the major changes to help organizations plan a smooth implementation and transition." },
    ],
  },
];
