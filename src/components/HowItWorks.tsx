import { BookOpen, Trophy, BarChart3, Star } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    bg: "bg-brand-blue",
    title: "Learn Through Application",
    desc: "Scholars apply math, literacy, and problem-solving in practical scenarios tied to sports and business.",
  },
  {
    icon: Trophy,
    bg: "bg-brand-orange",
    title: "Engage Through Sport",
    desc: "Sports create consistency, energy, and motivation, making learning active and meaningful.",
  },
  {
    icon: BarChart3,
    bg: "bg-brand-green",
    title: "Explore Career Pathways",
    desc: "Youth are introduced to careers connected to sports, including business, health, media, and technology.",
  },
  {
    icon: Star,
    bg: "bg-amber-400",
    title: "Build Skills for the Future",
    desc: "Scholars develop financial literacy, decision-making, teamwork, and communication skills.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container-x">
        <h2 className="text-center text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          How It Works
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, bg, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-7 shadow-[0_6px_24px_rgba(15,27,61,0.08)] border border-slate-100"
            >
              <div
                className={`w-14 h-14 rounded-full ${bg} flex items-center justify-center text-white`}
              >
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-brand-blue text-lg leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
