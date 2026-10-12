import Link from "next/link";
import SmartImage from "@/components/SmartImage";

// Homepage "About IGS" block (ingrain.world homepage)
export default function AboutPreview() {
  return (
    <section className="section aboutPreview">
      <div className="container-narrow aboutPreviewGrid">
        <div className="aboutPreviewVisual" data-aos="fade-right">
          <SmartImage
            src="/images/aboutus.png"
            alt="Ingrain Global Standard — ISO certification body"
            className="aboutPreviewImage"
            fallbackIcon="bi-building-check"
            fallbackLabel="Ingrain Global Standard"
          />
          <div className="aboutPreviewBadge">
            <strong>2,000+</strong>
            <span>Clients worldwide</span>
          </div>
        </div>

        <div data-aos="fade-left">
          <span className="eyebrow">About IGS</span>
          <h2 className="section-title">An International Certification Body You Can Trust</h2>
          <p className="aboutParagraph">
            Ingrain Global Standard Private Limited is an international certification body based in
            India with more than 2,000 clients worldwide. We offer reliable, cost-effective
            certification to government, public and private sector organizations.
          </p>
          <p className="aboutParagraph">
            Our experienced team delivers efficient solutions with a commitment to continual
            improvement and customer satisfaction — providing credible, globally respected
            certification.
          </p>
          <ul className="checkList">
            <li>
              <i className="bi bi-check-circle-fill" /> GAC &amp; IAF accredited certification services
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> Exemplar Global RTP-certified training provider
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> ISO, Halal, HACCP and GMP certification
            </li>
          </ul>
          <Link href="/about-us" className="btn-luxury">
            View More Info <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
