"use client";

import { useState } from "react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonialsSection">
      <div className="container-narrow">
        <div className="testimonialsHeader" data-aos="fade-up">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonialCard" data-aos="fade-up">
          <i className="bi bi-quote testimonialQuoteIcon" />
          <div className="testimonialStars">
            {Array.from({ length: t.rating }).map((_, i) => (
              <i className="bi bi-star-fill" key={i} />
            ))}
          </div>
          <p className="testimonialText">{t.text}</p>
          <div className="testimonialAuthor">
            <div className="testimonialAvatar"><i className="bi bi-building" /></div>
            <div>
              <strong>{t.name}</strong>
              <span><i className="bi bi-geo-alt" /> {t.role}</span>
            </div>
          </div>

          <div className="testimonialNav">
            <button onClick={prev} aria-label="Previous testimonial">
              <i className="bi bi-arrow-left" />
            </button>
            <div className="testimonialDots">
              {testimonials.map((_, i) => (
                <button type="button" key={i} aria-label={`Show testimonial ${i + 1}`} className={i === active ? "testimonialDotActive" : ""} onClick={() => setActive(i)} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial">
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
