/** @type {import('next').NextConfig} */

// Old ingrain.world URLs → new ingrain.global routes, so existing links,
// bookmarks and search results keep working after the domain move.
const legacyRedirects = [
  ["/services/iso-90012015", "/services/iso-9001-2015"],
  ["/services/iso-140012015", "/services/iso-14001-2015"],
  ["/services/iso-450012018", "/services/iso-45001-2018"],
  ["/services/iso-270012022", "/services/iso-27001-2022"],
  ["/services/iso-220002018", "/services/iso-22000-2018"],
  ["/news/detail/iso-90012026--revision-approved", "/news/iso-9001-2026-revision-approved"],
  [
    "/news/detail/exemplar-global-issues-training-transition-guidance-for-iso-90012026--iso-140012026",
    "/news/exemplar-global-training-transition-guidance",
  ],
  ["/news/detail/iso-140012026-officially-released", "/news/iso-14001-2026-officially-released"],
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Reference-site images are served from ingrain.world until
    // `npm run fetch-assets` copies them locally (see data/assets.js).
    remotePatterns: [{ protocol: "https", hostname: "ingrain.world", pathname: "/asset/uploads/**" }],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  async redirects() {
    return [
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/news/detail/:slug", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
