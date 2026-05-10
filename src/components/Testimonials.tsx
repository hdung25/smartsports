"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Smart Sports showed me that what I learn in class actually matters. Now I see myself working in sports management.",
    name: "Marcus, Age 15",
    role: "Scholar",
  },
  {
    quote:
      "The program helped my son stay engaged in school. He's excited about his future now.",
    name: "Mrs. Johnson",
    role: "Parent",
  },
  {
    quote:
      "This is exactly what our students needed — a bridge between academics and real-world opportunity.",
    name: "Coach Williams",
    role: "Coach & Mentor",
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

  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <h2 className="text-center text-3xl lg:text-4xl text-brand-blue">
          Real Stories, Real Impact
        </h2>
        <p className="text-center mt-3 text-brand-muted">
          Hear from the students, parents, and mentors who
          <br className="hidden md:block" /> are experiencing the transformation.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_18px_rgba(15,27,61,0.06)]"
              >
                <p className="text-sm text-brand-ink leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-dashed border-brand-orange/40 pt-3">
                  <p className="text-brand-orange font-bold text-sm">{t.name}</p>
                  <p className="text-brand-muted text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
