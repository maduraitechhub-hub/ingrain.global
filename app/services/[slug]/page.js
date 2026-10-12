import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import CTABanner from "@/sections/CTABanner";
import { allServices, getService } from "@/data/services";
import { asset } from "@/data/assets";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata({ title: "Service Not Found", path: `/services/${slug}` });

  return buildMetadata({
    title: `${service.title} — ${service.name}`,
    description: service.short,
    path: `/services/${service.slug}`,
    image: asset(service.image),
    keywords: [`${service.title} certification`, `${service.title} India`, service.name, "Ingrain Global Standard"],
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Breadcrumb title={service.title} items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
      <ServiceDetailSection service={service} />
      <CTABanner />
    </>
  );
}
