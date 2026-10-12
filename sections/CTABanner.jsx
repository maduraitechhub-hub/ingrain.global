import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function CTABanner() {
  return (
    <section className="ctaBanner">
      <div className="container-narrow ctaBannerInner" data-aos="fade-up">
        <div>
          <span className="eyebrow eyebrowLight">Ready to Get Certified?</span>
          <h2>Clear certification. Real value. Trusted results.</h2>
        </div>
        <div className="ctaBannerActions">
          <Link href="/apply-online" className="btn-luxury">
            <i className="bi bi-pencil-square" /> Apply Online
          </Link>
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-luxury-outline">
            <i className="bi bi-telephone" /> {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
