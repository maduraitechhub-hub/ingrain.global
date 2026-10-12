"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Analytics 4. Loads only when NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXXXXX).
// Also sends lead events for Call / WhatsApp / Directions / Review clicks so you
// can see which channel brings enquiries (Admin → Events → mark as Key events).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function leadEventFor(href = "") {
  if (href.startsWith("tel:")) return "click_call";
  if (href.startsWith("mailto:")) return "click_email";
  if (href.includes("wa.me/")) return "click_whatsapp";
  if (href.includes("g.page/r/") || href.includes("writereview")) return "click_review";
  if (href.includes("google.com/maps")) return "click_directions";
  return null;
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    function onClick(e) {
      const link = e.target.closest?.("a[href]");
      if (!link || typeof window.gtag !== "function") return;
      const eventName = leadEventFor(link.getAttribute("href"));
      if (eventName) {
        window.gtag("event", eventName, {
          link_url: link.href,
          page_path: window.location.pathname,
        });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
