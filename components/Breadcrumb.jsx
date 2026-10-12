import Link from "next/link";

export default function Breadcrumb({ title, items = [], eyebrow = "Ingrain Global Standard" }) {
  return (
    <section className="breadcrumbHero">
      <div className="container-narrow breadcrumbInner" data-aos="fade-up">
        <span className="eyebrow eyebrowLight">{eyebrow}</span>
        <h1 className="breadcrumbTitle">{title}</h1>
        <nav className="breadcrumbTrail" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {items.map((item, i) => (
            <span key={i}>
              <i className="bi bi-chevron-right" />
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
