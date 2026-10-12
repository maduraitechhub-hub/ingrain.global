import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
      className="whatsappFloat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp" />
    </a>
  );
}
