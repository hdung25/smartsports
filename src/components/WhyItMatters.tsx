"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 41,
    suffix: "%",
    bg: "bg-brand-blue-card",
    title: "of Illinois students are\nchronically absent",
    source: "Source: Illinois State Board of Education",
  },
  {
    value: 26,
    suffix: "%",
    bg: "bg-brand-orange",
    title: "of students proficient\nin math",
    source: "Source: National Assessment of Educational Progress",
  },
  {
    value: 31,
    suffix: "%",
    bg: "bg-brand-green",
    title: "of students proficient\nin reading",
    source: "Source: National Assessment of Educational Progress",
  },
];

function AnimatedStat({ value, suffix, bg, title, source }: (typeof stats)[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const fps = 60;
          const totalFrames = (duration / 1000) * fps;
          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.min(Math.round(eased * value), value));
            if (frame >= totalFrames) clearInterval(timer);
          }, 1000 / fps);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`${bg} rounded-2xl p-6 sm:p-8 text-center shadow-lg`}>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-title">
        {count}{suffix}
      </div>
      <p className="mt-3 text-base whitespace-pre-line leading-snug">{title}</p>
      <p className="mt-4 text-[11px] italic opacity-90">{source}</p>
    </div>
  );
}

export default function WhyItMatters() {
  return (
    <section
      id="impact"
      className="relative bg-brand-blue text-white py-14 sm:py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/images/us-map-dots.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />

      <div className="container-x relative">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-white">
          Why It Matters
        </h2>
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.value} {...stat} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
            When young people do not see how what they are{" "}
            <br className="hidden md:block" />
            learning connects to their future, they disengage.
          </p>
          <p className="mt-4 text-sm text-white/85 leading-relaxed">
            Smart Sports changes that by aligning academics, sports, and meaningful
            exposure so students can see what is possible and how to get there.
          </p>
        </div>
      </div>
    </section>
  );
}
