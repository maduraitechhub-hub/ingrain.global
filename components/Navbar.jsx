"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { allServices } from "@/data/services";
import { publicDocuments } from "@/data/content";
import Logo from "@/components/Logo";

const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Mirrors the ingrain.world main menu.
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Certification Services",
    href: "/services",
    viewAllLabel: "All Services",
    dropdown: allServices.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    label: "Public Information",
    href: "/public-information",
    viewAllLabel: "All Public Information",
    dropdown: publicDocuments.map((g) => ({ label: g.group, href: `/public-information#${slugify(g.group)}` })),
  },
  { label: "Accreditation", href: "/accreditation" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header className={`siteHeader ${scrolled ? "siteHeaderScrolled" : ""}`} ref={navRef}>
      {/* Top info bar (black), as on ingrain.world */}
      <div className="topBar">
        <div className="container-narrow topBarInner">
          <div className="topBarInfo">
            <span>
              <i className="bi bi-clock" /> {siteConfig.businessHours}
            </span>
            <a href={`tel:${siteConfig.phoneRaw}`}>
              <i className="bi bi-telephone" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <i className="bi bi-envelope" /> {siteConfig.email}
            </a>
          </div>
          <div className="topBarActions">
            <Link href="/verify-certificate" className="topBarLink">
              <i className="bi bi-patch-check" /> Verify Certificate
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="navbarInner container-narrow">
          <Link href="/" className="navbarBrand" aria-label="Ingrain Global Standard — Home">
            <Logo />
          </Link>

          <div
            className={`navbarBackdrop ${open ? "navbarBackdropVisible" : ""}`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <nav className={`navbarLinks ${open ? "navbarLinksOpen" : ""}`} aria-label="Main navigation">
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className={`navbarItem ${item.dropdown ? "navbarItemHasDropdown" : ""} ${
                  activeDropdown === i ? "navbarItemOpen" : ""
                }`}
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`navbarLink navbarLinkTrigger ${isActive(item.href) ? "navbarLinkActive" : ""}`}
                      onClick={() => setActiveDropdown((prev) => (prev === i ? null : i))}
                      aria-expanded={activeDropdown === i}
                    >
                      {item.label}
                      <i className="bi bi-chevron-down navbarChevron" />
                    </button>

                    <div className="navbarDropdown">
                      <Link href={item.href} className="navbarDropdownLink navbarDropdownViewAll">
                        {item.viewAllLabel} <i className="bi bi-arrow-right" />
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="navbarDropdownLink">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className={`navbarLink ${isActive(item.href) ? "navbarLinkActive" : ""}`}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/apply-online" className="btn-luxury navbarCta">
              <i className="bi bi-pencil-square" /> Apply Now
            </Link>
            <Link href="/verify-certificate" className="btn-luxury-dark navbarCta navbarCtaMobileOnly">
              <i className="bi bi-patch-check" /> Verify Certificate
            </Link>
          </nav>

          <button
            className={`navbarToggle ${open ? "navbarToggleOpen" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
