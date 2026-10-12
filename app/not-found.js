import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="notFoundSection">
      <div className="container-narrow notFoundInner">
        <span className="notFoundCode">404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist or may have been moved. Let's get you back on
          track.
        </p>
        <div className="notFoundActions">
          <Link href="/" className="btn-luxury">
            <i className="bi bi-house" /> Back to Home
          </Link>
          <Link href="/contact" className="btn-luxury-outline notFoundOutline">
            <i className="bi bi-envelope" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
