import { siteConfig } from "@/data/siteConfig";

export default function LegalContact() {
  return (
    <>
      <h2>Contact</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {siteConfig.fullAddress}
        <br />
        Phone: <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a> /{" "}
        <a href={`tel:${siteConfig.phoneAltRaw}`}>{siteConfig.phoneAlt}</a>
        <br />
        Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </>
  );
}
