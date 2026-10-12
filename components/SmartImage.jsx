"use client";

import { useEffect, useRef, useState } from "react";

// Plain <img> with a branded fallback block if the file can't be loaded
// (e.g. before assets are copied locally, or if ingrain.world is offline).
export default function SmartImage({ src, alt, className = "", fallbackIcon = "bi-image", fallbackLabel, ...rest }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef(null);

  // onError can fire before hydration; re-check once mounted.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={`smartImageFallback ${className}`} role="img" aria-label={alt}>
        <i className={`bi ${fallbackIcon}`} />
        {fallbackLabel && <span>{fallbackLabel}</span>}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />
  );
}
