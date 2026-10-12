import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { allServices } from "@/data/services";
import { asset } from "@/data/assets";
import { siteConfig } from "@/data/siteConfig";

function CourseTable({ title, courses }) {
  return (
    <div className="courseBlock">
      <h3 className="serviceDetailSubheading">{title}</h3>
      <div className="courseGrid">
        {courses.map(([code, name]) => (
          <div className="courseItem" key={code + name}>
            <strong>{code}</strong>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetailSection({ service }) {
  const isTraining = Boolean(service.leadAuditorCourses);

  return (
    <section className="section serviceDetailSection">
      <div className="container-narrow serviceDetailGrid">
        <div className="serviceDetailMain" data-aos="fade-up">
          <div className="serviceDetailMedia">
            <SmartImage
              src={asset(service.image)}
              alt={`${service.title} — ${service.name}`}
              className="serviceDetailImage"
              fallbackIcon={service.icon}
              fallbackLabel={service.title}
            />
          </div>

          <span className="eyebrow">{service.name}</span>
          <h2 className="serviceDetailTitle">{service.title}</h2>
          {service.overview.map((p) => (
            <p className="serviceDetailDescription" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}

          {service.benefits && (
            <>
              <h3 className="serviceDetailSubheading">Benefits of {service.title}</h3>
              <div className="benefitGrid">
                {service.benefits.map(([title, text]) => (
                  <div className="benefitCard" key={title}>
                    <i className="bi bi-check2-circle" />
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {isTraining && (
            <>
              <CourseTable title="Management System Lead Auditor Training" courses={service.leadAuditorCourses} />
              <CourseTable title="Professional & Specialized Training" courses={service.specializedCourses} />
              <p className="serviceDetailNote">
                <i className="bi bi-info-circle" /> Course schedules and durations are shared on enquiry.
                See our <Link href="/training-terms">Training Terms</Link> for registration and refund
                conditions.
              </p>
            </>
          )}

          {service.summary && <p className="serviceDetailSummary">{service.summary}</p>}
        </div>

        <aside className="sidebar serviceDetailSidebar" data-aos="fade-up" data-aos-delay="150">
          <div className="sidebarCard">
            <h4>Our Services</h4>
            <ul className="sidebarNav">
              {allServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={s.slug === service.slug ? "sidebarNavActive" : ""}>
                    {s.title} <i className="bi bi-chevron-right" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebarCard sidebarCardDark">
            <h4>{isTraining ? "Enrol in a Course" : `Get ${service.title} Certified`}</h4>
            <p>
              {isTraining
                ? "Contact us for upcoming batches, fees and online/classroom options."
                : "Apply online for a certification assessment, or talk to our team about scope and pricing."}
            </p>
            <Link href={isTraining ? "/contact" : "/apply-online"} className="btn-luxury sidebarCta">
              <i className={`bi ${isTraining ? "bi-envelope" : "bi-pencil-square"}`} /> {isTraining ? "Enquire Now" : "Apply Now"}
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="sidebarPhone">
              <i className="bi bi-telephone" /> {siteConfig.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
