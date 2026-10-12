import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { asset } from "@/data/assets";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="hero">
      <SmartImage src="/images/herobanner.png" alt="" className="heroBgImage" fallbackIcon="bi-award" aria-hidden="true" loading="eager" />
      <div className="heroOverlay" />
      <div className="container-narrow heroInner">
        <div className="heroContent" data-aos="fade-up">
          <span className="heroBadge">
            <i className="bi bi-patch-check-fill" /> International Certification Body · Since {siteConfig.foundedYear}
          </span>
          <h1 className="heroTitle">
            Struggling with ISO Certification?
            <br />
            <span>We Make It Simple.</span>
          </h1>
          <p className="heroSubtitle">
            Reliable third-party certification for ISO, Halal, HACCP and GMP standards — plus Exemplar
            Global recognised Lead Auditor and Internal Auditor training. Trusted by 2,000+ clients
            worldwide.
          </p>
          <div className="heroActions">
            <Link href="/apply-online" className="btn-luxury">
              <i className="bi bi-pencil-square" /> Apply Now
            </Link>
            <Link href="/services" className="btn-luxury-outline">
              Our Services <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="heroCounters">
            <div className="heroCounterItem">
              <strong>2,000+</strong>
              <span>Clients Worldwide</span>
            </div>
            <div className="heroCounterItem">
              <strong>GAC &amp; IAF</strong>
              <span>Accredited</span>
            </div>
            <div className="heroCounterItem">
              <strong>Exemplar Global</strong>
              <span>RTP Training Provider</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
