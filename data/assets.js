// Images and documents taken from the reference site (ingrain.world).
//
// By default the site loads them directly from ingrain.world so it works
// immediately. Before ingrain.world is retired, run:
//
//     npm run fetch-assets
//
// which downloads every file below into /public/images/igs and /public/documents,
// then set NEXT_PUBLIC_ASSET_MODE=local (see .env.example) and redeploy.
// After that the site no longer depends on the old domain.

const REMOTE_BASE = "https://ingrain.world";
const USE_LOCAL = process.env.NEXT_PUBLIC_ASSET_MODE === "local";

const SERVICE_IMAGE_OVERRIDES = {
  "svc-auditor-training-program": "/images/1.png",
  "svc-iso-9001": "/images/2.png",
  "svc-iso-14001": "/images/3.png",
  "svc-iso-45001": "/images/4.png",
  "svc-iso-27001": "/images/5.png",
  "svc-iso-22000": "/images/6.png",
  "svc-haccp": "/images/7.png",
  "svc-halal": "/images/8.png",
};

// key -> [remote path on ingrain.world, local path under /public]
export const assetMap = {
  about: ["/asset/uploads/on_page_element/6a031fff6d7d76.jpg", "/images/igs/about.jpg"],
  faq: ["/asset/uploads/on_page_element/6a3b8f3a759615.png", "/images/igs/faq.png"],

  "svc-auditor-training-program": ["/asset/uploads/portfolio/66337740bc6dd6.jpg", "/images/igs/services/auditor-training.png"],
  "svc-iso-9001": ["/asset/uploads/portfolio/6633775d19b3d4.jpg", "/images/igs/services/iso-9001.png"],
  "svc-iso-14001": ["/asset/uploads/portfolio/663379bdb114f1.jpg", "/images/igs/services/iso-14001.png"],
  "svc-iso-45001": ["/asset/uploads/portfolio/66337a0ec83070.jpg", "/images/igs/services/iso-45001.png"],
  "svc-iso-22000": ["/asset/uploads/portfolio/66337a852f7d88.jpg", "/images/igs/services/iso-22000.png"],
  "svc-iso-27001": ["/asset/uploads/portfolio/66337aac522a27.jpg", "/images/igs/services/iso-27001.png"],
  "svc-halal": ["/asset/uploads/portfolio/66337acfba8984.jpg", "/images/igs/services/halal.png"],
  "svc-haccp": ["/asset/uploads/portfolio/66337abdde19b3.jpg", "/images/igs/services/haccp.png"],

  "news-iso-14001-2026": ["/asset/uploads/portfolio/6a031bf8c1ba66.jpg", "/images/igs/news/iso-14001-2026.jpg"],
  "news-exemplar-transition": ["/asset/uploads/portfolio/6a92e1f707f271.png", "/images/igs/news/exemplar-transition.png"],
  "news-iso-9001-2026": ["/asset/uploads/portfolio/6a92df601f8055.png", "/images/igs/news/iso-9001-2026.png"],

  processFlow: ["/asset/uploads/pdf/IGSPL-Certification-process-flow-chart.jpg", "/documents/IGSPL-Certification-process-flow-chart.jpg"],
};

export function asset(key) {
  if (SERVICE_IMAGE_OVERRIDES[key]) return SERVICE_IMAGE_OVERRIDES[key];
  const entry = assetMap[key];
  if (!entry) return "";
  return USE_LOCAL ? entry[1] : `${REMOTE_BASE}${entry[0]}`;
}

// Public information documents (PDFs) — same remote/local switch.
export function documentUrl(remotePath) {
  if (!USE_LOCAL) return `${REMOTE_BASE}${remotePath}`;
  return `/documents/${remotePath.split("/").pop()}`;
}

export const REMOTE_ASSET_BASE = REMOTE_BASE;
