import Link from "next/link";
import { siteConfig, activeSocialLinks } from "@/data/siteConfig";
import { allServices } from "@/data/services";
import Logo from "@/components/Logo";
import FooterSubscribe from "@/components/FooterSubscribe";

const socialIcons = {
  facebook: { icon: "bi-facebook", label: "Facebook" },
  instagram: { icon: "bi-instagram", label: "Instagram" },
  linkedin: { icon: "bi-linkedin", label: "LinkedIn" },
  twitter: { icon: "bi-twitter-x", label: "X (Twitter)" },
  youtube: { icon: "bi-youtube", label: "YouTube" },
};

// "Useful links" — same set as the ingrain.world footer
const usefulLinks = [
  ["About Us", "/about-us"],
  ["Services", "/services"],
  ["Accreditation", "/accreditation"],
  ["Public Information", "/public-information"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["Training Terms", "/training-terms"],
  ["News", "/news"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-narrow footerTop">
        <div className="footerCol footerBrandCol">
          <Link href="/" className="footerBrand" aria-label="Ingrain Global Standard — Home">
            <Logo variant="light" />
          </Link>
          <p className="footerAbout">
            {siteConfig.legalName} (IGS) is an international certification body based in India,
            serving 2,000+ clients worldwide with credible, globally respected certification.
          </p>
          <div className="footerSocial">
            {activeSocialLinks.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`IGS on ${socialIcons[key]?.label || key}`}
              >
                <i className={`bi ${socialIcons[key]?.icon || "bi-link-45deg"}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="footerCol">
          <h5>Useful Links</h5>
          <ul>
            {usefulLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerCol">
          <h5>Our Services</h5>
          <ul>
            {allServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerCol">
          <h5>Contact</h5>
          <ul className="footerContactList">
            <li>
              <i className="bi bi-geo-alt" />
              <span>{siteConfig.fullAddress}</span>
            </li>
            <li>
              <i className="bi bi-telephone" />
              <span>
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
                <br />
                <a href={`tel:${siteConfig.phoneAltRaw}`}>{siteConfig.phoneAlt}</a>
              </span>
            </li>
            <li>
              <i className="bi bi-envelope" /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <i className="bi bi-clock" /> {siteConfig.businessHours}
            </li>
          </ul>

          <h5 className="footerSubscribeTitle">Subscribe Us</h5>
          <p className="footerSubscribeText">Sign up for our mailing list to get the latest updates and news.</p>
          <FooterSubscribe />
        </div>
      </div>

      <div className="footerBottom">
        <div className="container-narrow footerBottomInner">
          <p>
            © {year} {siteConfig.legalName.toUpperCase()}. All Rights Reserved.
          </p>
          <div className="footerBottomLinks">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/training-terms">Training Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
