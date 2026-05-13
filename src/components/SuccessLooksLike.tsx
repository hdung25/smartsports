import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Increased attendance and engagement",
  "Stronger academic confidence",
  "Awareness of career pathways",
  "Financial literacy and decision-making skills",
  "Clear connection between school and future goals",
];

export default function SuccessLooksLike() {
  return (
    <section className="bg-brand-surface py-14 sm:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/images/risehand.jpg"
            alt="Students raising hands"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-brand-blue">
            What Success Looks Like
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed max-w-md">
            A model designed to align learning, engagement, and future opportunity.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2
                  size={22}
                  className="text-brand-green shrink-0 mt-0.5"
                />
                <span className="text-brand-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
