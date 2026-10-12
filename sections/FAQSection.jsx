"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function FAQSection({ compact = false, aside = null }) {
  const [openIndex, setOpenIndex] = useState(0);
  const list = compact ? faqs.slice(0, 5) : faqs;

  return (
    <section className="section faqSection">
      <div className={`container-narrow faqInner ${aside ? "faqInnerWithAside" : ""}`}>
        <div className="faqHeader" data-aos="fade-up">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Answers to common questions about ISO certification, timelines, costs and certificate
            verification.
          </p>
        </div>

        <div className="faqBody">
        <div className="faqList" data-aos="fade-up">
          {list.map((f, i) => (
            <div className={`faqItem ${openIndex === i ? "faqItemOpen" : ""}`} key={f.q}>
              <button type="button" className="faqQuestion" aria-expanded={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                {f.q}
                <i className="bi bi-plus-lg" />
              </button>
              <div className="faqAnswer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        {aside}
        </div>
      </div>
    </section>
  );
}
