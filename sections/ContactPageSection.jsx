import { siteConfig } from "@/data/siteConfig";
import ContactForm from "./ContactForm";

export default function ContactPageSection() {
  return (
    <section className="section contactPageSection">
      <div className="container-narrow contactPageGrid">
        <div className="contactInfoColumn" data-aos="fade-up">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">We&apos;re Always Here to Help You</h2>
          <p className="section-subtitle">
            Questions about certification, training or an existing certificate? Reach our head office
            or one of our associate partners.
          </p>

          <div className="contactInfoCards">
            <div className="contactInfoCard">
              <i className="bi bi-geo-alt" />
              <div>
                <strong>Head Office</strong>
                <span>{siteConfig.address.line1}</span>
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode},{" "}
                  {siteConfig.address.country}
                </span>
              </div>
            </div>
            <div className="contactInfoCard">
              <i className="bi bi-telephone" />
              <div>
                <strong>Phone</strong>
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
                <a href={`tel:${siteConfig.phoneAltRaw}`}>{siteConfig.phoneAlt}</a>
              </div>
            </div>
            <div className="contactInfoCard">
              <i className="bi bi-envelope" />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
            <div className="contactInfoCard">
              <i className="bi bi-clock" />
              <div>
                <strong>Working Hours</strong>
                <span>{siteConfig.businessHours}</span>
                <span>{siteConfig.closedDays}</span>
              </div>
            </div>
          </div>

          <h3 className="contactSubheading">Our Associate Partners</h3>
          <div className="contactInfoCards">
            {siteConfig.associates.map((a) => (
              <div className="contactInfoCard" key={a.label}>
                <i className="bi bi-buildings" />
                <div>
                  <strong>{a.label}</strong>
                  {a.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                  {a.email && <a href={`mailto:${a.email}`}>{a.email}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <ContactForm title="Send Us a Message" />
        </div>
      </div>

      <div className="contactMapWrapper container-narrow" data-aos="fade-up">
        <div className="contactMapHeader">
          <h3>Find Our Head Office in Madurai</h3>
          <a href={siteConfig.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="contactDirectionsLink">
            <i className="bi bi-signpost-2" /> Get Directions
          </a>
        </div>
        <iframe
          src={siteConfig.mapEmbed}
          className="contactMap"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ingrain Global Standard head office location"
        />
      </div>
    </section>
  );
}
