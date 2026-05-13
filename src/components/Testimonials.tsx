"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Smart Sports showed me that what I learn in class actually matters. Now I see myself working in sports management.",
    name: "Marcus, Age 15",
    role: "Scholar",
    accent: "bg-brand-orange",
  },
  {
    quote:
      "The program helped my son stay engaged in school. He's excited about his future now.",
    name: "Mrs. Johnson",
    role: "Parent",
    accent: "bg-brand-green",
  },
  {
    quote:
      "This is exactly what our students needed — a bridge between academics and real-world opportunity.",
    name: "Coach Williams",
    role: "Coach & Mentor",
    accent: "bg-brand-yellow",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const prev = () =>
    setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setStart((s) => (s + 1) % testimonials.length);

  const visible = [0, 1, 2].map(
    (i) => testimonials[(start + i) % testimonials.length]
  );

  const single = testimonials[start % testimonials.length];

  return (
    <section
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f6ff 0%, #e8f3fa 50%, #f5f7fb 100%)",
      }}
    >
      {/* Decorative giant quote mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-6 lg:left-16 select-none"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(180px, 20vw, 280px)",
          lineHeight: 1,
          color: "#0064b0",
          opacity: 0.06,
          fontWeight: 900,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Texture top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-60 rotate-90"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      {/* Texture bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-60 -rotate-90"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* Accent circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-blue opacity-[0.04]"
      />

      <div className="container-x relative">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          Real Stories, Real Impact
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-muted px-2">
          Hear from the students, parents, and mentors who
          <br className="hidden md:block" /> are experiencing the transformation.
        </p>

        <div className="mt-10 md:mt-12 flex items-center gap-2 sm:gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Mobile: single card */}
          <div className="md:hidden flex-1">
            <div className="bg-white rounded-2xl p-5 border border-white shadow-[0_6px_24px_rgba(0,100,176,0.10)] flex flex-col">
              <div className="text-brand-blue/20 text-6xl font-serif leading-none mb-2 select-none">&ldquo;</div>
              <p className="text-sm text-brand-ink leading-relaxed flex-1">
                {single.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`w-1 h-10 rounded-full ${single.accent} shrink-0`} />
                <div>
                  <p className="text-brand-blue font-bold text-sm">{single.name}</p>
                  <p className="text-brand-muted text-xs">{single.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet/Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 flex-1">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-white rounded-2xl p-6 border border-white shadow-[0_6px_24px_rgba(0,100,176,0.10)] flex flex-col"
              >
                <div className="text-brand-blue/20 text-6xl font-serif leading-none mb-2 select-none">&ldquo;</div>
                <p className="text-sm text-brand-ink leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className={`w-1 h-10 rounded-full ${t.accent} shrink-0`} />
                  <div>
                    <p className="text-brand-blue font-bold text-sm">{t.name}</p>
                    <p className="text-brand-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === start % testimonials.length
                  ? "bg-brand-blue w-6"
                  : "bg-brand-blue/25"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
