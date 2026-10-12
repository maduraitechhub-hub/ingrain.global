"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { certificationServices, trainingService } from "@/data/services";

// Every figure here comes from ingrain.world content.
const stats = [
  { label: "Clients Worldwide", value: siteConfig.highlights.clients, suffix: "+" },
  { label: "Years of Experience", value: new Date().getFullYear() - siteConfig.foundedYear, suffix: "+" },
  { label: "Certification Schemes", value: certificationServices.length, suffix: "" },
  {
    label: "Training Courses",
    value: trainingService.leadAuditorCourses.length + trainingService.specializedCourses.length,
    suffix: "+",
  },
];

// Starts at the real number so the server-rendered HTML (what Google reads)
// shows the correct value; the count-up still runs when scrolled into view.
function useCountUp(target, active) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const duration = 1600;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function CounterItem({ stat }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(stat.value, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="counterItem" ref={ref}>
      <strong>
        {value.toLocaleString("en-IN")}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="counterSection">
      <div className="container-narrow counterGrid">
        {stats.map((stat) => (
          <CounterItem stat={stat} key={stat.label} />
        ))}
      </div>
    </section>
  );
}
