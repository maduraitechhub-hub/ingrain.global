import Image from "next/image";
import SmartImage from "@/components/SmartImage";
import { milestones } from "@/data/content";
import { founders } from "@/data/team";

// Content from ingrain.world/about-us
export default function AboutSection() {
  return (
    <>
      <section className="section aboutIntro">
        <div className="container-narrow aboutPreviewGrid">
          <div className="aboutPreviewVisual" data-aos="fade-right">
            <SmartImage
              src="/images/aboutus.png"
              alt="Ingrain Global Standard"
              className="aboutPreviewImage"
              fallbackIcon="bi-building-check"
              fallbackLabel="Ingrain Global Standard"
            />
            <div className="aboutPreviewBadge">
              <strong>Since 2008</strong>
              <span>Madurai, India</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="eyebrow">Where It All Began</span>
            <h2 className="section-title">Bringing Clarity, Structure and Trust to ISO Certification</h2>
            <p className="aboutParagraph">
              ISO certification should be straightforward, yet for many organizations it feels
              confusing, slow and hard to follow — and that can hold back business growth.
            </p>
            <p className="aboutParagraph">
              Ingrain was founded in 2008 by Mr. M. Ibrahim and Mr. P. Sivasankar to address these gaps
              in the industry, with one goal: to bring clarity, structure and trust to ISO
              certification.
            </p>
          </div>
        </div>
      </section>

      <section className="section aboutTimeline">
        <div className="container-narrow">
          <div className="sectionHeaderCenter" data-aos="fade-up">
            <span className="eyebrow">Growth Brings Evolution</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="timelineGrid">
            {milestones.map((m, i) => (
              <div className="timelineCard" key={m.year} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="timelineYear">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section aboutUnique">
        <div className="container-narrow aboutUniqueGrid">
          <div data-aos="fade-up">
            <span className="eyebrow">What Makes Us Unique</span>
            <h2 className="section-title">Certification That Adds Real Value</h2>
            <p className="aboutParagraph">
              Many certification bodies focus mainly on completing audits. Our approach is different:
              we take the time to understand each client&apos;s business and turn complex ISO
              requirements into clear, practical solutions that add real value.
            </p>
            <h3 className="aboutSubheading">Highlighted Achievements</h3>
            <ul className="checkList">
              <li>
                <i className="bi bi-check-circle-fill" /> Received GAC and IAF accreditation in 2024,
                strengthening global credibility.
              </li>
              <li>
                <i className="bi bi-check-circle-fill" /> Delivered ISO certification services to
                organizations across multiple industries.
              </li>
            </ul>
          </div>
          <div className="aboutMissionStack" data-aos="fade-up" data-aos-delay="120">
            <div className="aboutMissionCard">
              <i className="bi bi-bullseye" />
              <h3>Our Mission</h3>
              <p>Clear certification. Real value. Trusted results.</p>
            </div>
            <div className="aboutMissionCard">
              <i className="bi bi-eye" />
              <h3>Our Vision</h3>
              <p>A world where certification drives trust, growth and global success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section foundersSection">
        <div className="container-narrow">
          <div className="sectionHeaderCenter" data-aos="fade-up">
            <span className="eyebrow">Our Founders</span>
            <h2 className="section-title">The People Behind IGS</h2>
          </div>
          <div className="foundersGrid">
            {founders.map((f, i) => (
              <div className="founderCard" key={f.slug} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="founderPhotoWrap">
                  <Image src={f.photo} alt={f.name} width={400} height={600} className="founderPhoto" />
                </div>
                <h3>{f.name}</h3>
                <span>{f.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
