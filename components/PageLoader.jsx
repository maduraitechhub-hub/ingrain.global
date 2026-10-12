"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`pageLoader ${hidden ? "pageLoaderHidden" : ""}`} aria-hidden="true">
      <div className="pageLoaderMark">
        Ingrain Global Standard<span>.</span>
      </div>
      <div className="pageLoaderBar">
        <span />
      </div>
    </div>
  );
}
