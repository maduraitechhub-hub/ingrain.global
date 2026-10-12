import { publicDocuments } from "@/data/content";
import { documentUrl } from "@/data/assets";

const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function PublicInfoSection() {
  return (
    <section className="section publicInfoSection">
      <div className="container-narrow">
        <div className="sectionHeaderCenter" data-aos="fade-up">
          <span className="eyebrow">Public Information</span>
          <h2 className="section-title">Policies, Procedures &amp; Certification Rules</h2>
          <p className="section-subtitle">
            As an accredited certification body, IGS publishes its profile, policies and certification
            procedures for clients and the public.
          </p>
        </div>

        <div className="docGroups">
          {publicDocuments.map((group) => (
            <div className="docGroup" key={group.group} id={slugify(group.group)} data-aos="fade-up">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map(([label, path]) => {
                  const isPdf = path.toLowerCase().endsWith(".pdf");
                  return (
                    <li key={label}>
                      <a href={documentUrl(path)} target="_blank" rel="noopener noreferrer">
                        <i className={`bi ${isPdf ? "bi-file-earmark-pdf" : "bi-file-earmark-image"}`} />
                        <span>{label}</span>
                        <i className="bi bi-box-arrow-up-right docExternal" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
