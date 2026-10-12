import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NewsPostSection from "@/sections/NewsPostSection";
import { newsPosts } from "@/data/content";
import { asset } from "@/data/assets";
import { buildMetadata, breadcrumbSchema, articleSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

const getPost = (slug) => newsPosts.find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: "Article Not Found", path: `/news/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${post.slug}`,
    image: asset(post.image),
    keywords: [post.category, "ISO news", "Ingrain Global Standard"],
  });
}

export default async function NewsPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "News", path: "/news" },
      { name: post.title, path: `/news/${post.slug}` },
    ]),
    articleSchema(post, asset(post.image)),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb title="News Details" items={[{ label: "News", href: "/news" }, { label: post.title }]} />
      <NewsPostSection post={post} />
    </>
  );
}
