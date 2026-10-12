import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { newsPosts } from "@/data/content";
import { asset } from "@/data/assets";
import { formatDate } from "@/lib/format";

export default function NewsPreview({ limit = 3, showHeader = true }) {
  const posts = [...newsPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);

  return (
    <section className="section newsPreview">
      <div className="container-narrow">
        {showHeader && (
          <div className="newsPreviewHeader" data-aos="fade-up">
            <div>
              <span className="eyebrow">Latest News &amp; Updates</span>
              <h2 className="section-title">Standards &amp; Training Updates</h2>
            </div>
            <Link href="/news" className="btn-luxury-dark">
              All News <i className="bi bi-arrow-right" />
            </Link>
          </div>
        )}

        <div className="newsGrid">
          {posts.map((post, i) => (
            <Link href={`/news/${post.slug}`} className="newsCard" key={post.slug} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="newsCardMedia">
                <SmartImage src={asset(post.image)} alt={post.title} className="newsCardImage" fallbackIcon="bi-newspaper" />
                <span className="newsCardDate">
                  <i className="bi bi-calendar3" /> {formatDate(post.date)}
                </span>
              </div>
              <div className="newsCardBody">
                <span className="newsCardCategory">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="newsCardMore">
                  Read More <i className="bi bi-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
