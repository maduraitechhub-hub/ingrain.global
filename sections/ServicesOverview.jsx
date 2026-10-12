import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { allServices } from "@/data/services";
import { asset } from "@/data/assets";

export default function ServicesOverview({ showHeader = true, headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <section className="section servicesOverview">
      <div className="container-narrow">
        {showHeader && (
          <div className="servicesHeader" data-aos="fade-up">
            <span className="eyebrow">Our Services</span>
            <Heading className="section-title">Certification &amp; Training Services</Heading>
            <p className="section-subtitle">
              IGS helps organizations gain international recognition through reliable third-party
              certification and professional training — ISO, Halal, HACCP and GMP certification,
              surveillance audits, recertification and certification transfers, plus Lead Auditor and
              Internal Auditor training.
            </p>
          </div>
        )}

        <div className="servicesGrid">
          {allServices.map((service, i) => (
            <Link
              href={`/services/${service.slug}`}
              className="serviceCard"
              key={service.slug}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
            >
              <div className="serviceCardMedia">
                <SmartImage
                  src={asset(service.image)}
                  alt={`${service.title} — ${service.name}`}
                  className="serviceCardImage"
                  fallbackIcon={service.icon}
                />
                <span className="serviceCardIcon">
                  <i className={`bi ${service.icon}`} />
                </span>
              </div>
              <div className="serviceCardBody"> 
                <h3>{service.title}</h3>
                <span className="serviceCardName">{service.name}</span>
                <p>{service.short}</p>
                <span className="serviceCardLink">
                  Read More <i className="bi bi-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
