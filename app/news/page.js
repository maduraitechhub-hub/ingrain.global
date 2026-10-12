import Breadcrumb from "@/components/Breadcrumb";
import NewsPreview from "@/sections/NewsPreview";
import CTABanner from "@/sections/CTABanner";
import { newsPosts } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "News & Updates",
  description:
    "Latest ISO standards and training updates from IGS — ISO 9001:2026, ISO 14001:2026 and Exemplar Global transition guidance.",
  path: "/news",
  keywords: ["ISO 9001:2026", "ISO 14001:2026", "ISO transition", "Exemplar Global transition"],
});

export default function NewsPage() {
  return (
    <>
      <Breadcrumb title="News" items={[{ label: "News" }]} />
      <NewsPreview limit={newsPosts.length} showHeader={false} />
      <CTABanner />
    </>
  );
}
