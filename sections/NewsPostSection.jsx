import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { newsPosts } from "@/data/content";
import { asset } from "@/data/assets";
import { formatDate } from "@/lib/format";

export default function NewsPostSection({ post }) {
  const others = newsPosts.filter((p) => p.slug !== post.slug);

  return (
    <article className="section newsPostSection">
      <div className="container-narrow newsPostGrid">
        <div data-aos="fade-up">
          <div className="newsPostImageWrap">
            <SmartImage src={asset(post.image)} alt={post.title} className="newsPostImage" fallbackIcon="bi-newspaper" />
          </div>

          <div className="newsPostMeta">
            <span className="newsCardCategory">{post.category}</span>
            <span>
              <i className="bi bi-calendar3" /> {formatDate(post.date)}
            </span>
            <span>
              <i className="bi bi-person" /> IGS Team
            </span>
          </div>

          <h2 className="newsPostTitle">{post.title}</h2>

          <div className="richText">
            {post.body.map((block, i) => {
              if (block.h) return <h3 key={i}>{block.h}</h3>;
              if (block.ul)
                return (
                  <ul key={i}>
                    {block.ul.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.p}</p>;
            })}
          </div>

          <Link href="/news" className="btn-luxury-dark newsPostBack">
            <i className="bi bi-arrow-left" /> Back to News
          </Link>
        </div>

        <aside className="sidebar" data-aos="fade-up" data-aos-delay="120">
          <div className="sidebarCard">
            <h4>Recent News</h4>
            <ul className="sidebarList">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link href={`/news/${p.slug}`}>{p.title}</Link>
                  <small>{formatDate(p.date)}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebarCard sidebarCardDark">
            <h4>Planning a transition audit?</h4>
            <p>Talk to our team about certification or transition to the revised standards.</p>
            <Link href="/contact" className="btn-luxury">
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
