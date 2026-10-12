"use client";

import { useEffect, useRef, useState } from "react";

// Official INGRAIN logo (public/images/igs/ingrain-logo*.svg), with a text wordmark fallback.
export default function Logo({ variant = "dark" }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  // onError can fire before hydration; re-check once mounted.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span className={`logoWordmark ${variant === "light" ? "logoWordmarkLight" : ""}`}>
        <span className="logoWordmarkMark">IGS</span>
        <span className="logoWordmarkText">
          Ingrain Global
          <small>Standard Pvt. Ltd.</small>
        </span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={variant === "light" ? "/images/igs/ingrain-logo-light.svg" : "/images/igs/ingrain-logo.svg"}
      alt="Ingrain Global Standard (IGS)"
      className={`logoImage ${variant === "light" ? "logoImageLight" : ""}`}
      width={1760}
      height={424}
      onError={() => setFailed(true)}
    />
  );
}
