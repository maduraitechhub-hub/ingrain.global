// Central business details for Ingrain Global Standard Private Limited (IGS).
// Every value below was taken from the current site at ingrain.world.
// The Navbar, Footer, Contact page, emails and JSON-LD schema all read from
// this single file — update details here only.

const fullAddress = "D 63/127 Rajam Road, T.V.S Nagar, Madurai, Tamil Nadu 625 003, India";

export const siteConfig = {
  name: "Ingrain Global",
  shortName: "IGS",
  legalName: "Ingrain Global Standard Private Limited",
  // IMPORTANT: must be the exact domain the site is served on (no trailing slash).
  // Overridable per-deployment with NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ingrain.global").replace(/\/$/, ""),
  tagline: "Struggling with ISO Certification? We Make It Simple.",
  description:
    "Ingrain Global Standard (IGS) is an international ISO certification body based in Madurai, India, serving 2,000+ clients worldwide with ISO 9001, 14001, 45001, 27001, 22000, HACCP and Halal certification and Exemplar Global recognised Lead Auditor training.",
  foundedYear: 2008,

  phone: "+91 98942 63543",
  phoneRaw: "+919894263543",
  phoneAlt: "+91 98942 09907",
  phoneAltRaw: "+919894209907",
  whatsapp: "919894263543",
  email: "head@ingrain.world",

  address: {
    line1: "D 63/127 Rajam Road, T.V.S Nagar",
    line2: "",
    city: "Madurai",
    state: "Tamil Nadu",
    pincode: "625 003",
    country: "India",
  },
  fullAddress,

  businessHours: "Monday - Saturday, 09:30 AM - 06:30 PM",
  closedDays: "Sunday: Closed",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },

  // Associate partners, as listed on ingrain.world/contact
  associates: [
    {
      label: "Associate Partner — Brazil",
      lines: ["Rua São Vicente 855, Cotia - SP, Brazil", "Zipcode: 06705-435"],
      email: "fernandaschefferlima@gmail.com",
    },
    {
      label: "Associate Partner — Chennai",
      lines: ["No. 10, Mettukuppam Main Road, Maduravoyal", "Chennai - 600 095, Tamil Nadu, India"],
    },
  ],

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61554736082295",
    instagram: "https://www.instagram.com/ingrainglobalstandard/",
    linkedin: "https://www.linkedin.com/in/ingrain-standard-assessment-llp-4b0811148/",
    twitter: "https://www.twitter.com/IGS_Asia_Cert",
    youtube: "",
  },

  // Highlights published on ingrain.world (About + Services pages)
  highlights: {
    clients: 2000,
    accreditation: "GAC & IAF accredited (2024)",
    trainingRecognition: "Exemplar Global RTP-certified Training Provider",
  },

  serviceAreas: ["Madurai", "Tamil Nadu", "India", "Singapore", "Indonesia", "Brazil"],

  // Map embed by address (no Google Business Profile ID was available for IGS).
  // If IGS has a verified GBP listing, replace with `https://www.google.com/maps?cid=<CID>`.
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  mapDirectionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
};

export const activeSocialLinks = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));
