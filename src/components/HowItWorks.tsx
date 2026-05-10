import Image from "next/image";

const items = [
  {
    icon: "/images/icon-learn.svg",
    bg: "bg-brand-blue-card",
    title: "Learn Through\nApplication",
    desc: "Scholars apply math, literacy, and problem-solving in practical scenarios tied to sports and business.",
  },
  {
    icon: "/images/icon-sport.svg",
    bg: "bg-brand-orange",
    title: "Engage Through\nSport",
    desc: "Sports create consistency, energy, and motivation, making learning active and meaningful.",
  },
  {
    icon: "/images/icon-explore.svg",
    bg: "bg-brand-green",
    title: "Explore Career\nPathways",
    desc: "Youth are introduced to careers connected to sports, including business, health, media, and technology.",
  },
  {
    icon: "/images/icon-build.svg",
    bg: "bg-amber-400",
    title: "Build Skills for\nthe Future",
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
          {items.map(({ icon, bg, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-7 shadow-[0_6px_24px_rgba(15,27,61,0.08)] border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 w-14 h-14 rounded-full ${bg} flex items-center justify-center`}
                >
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <h3 className="text-brand-blue text-lg leading-tight whitespace-pre-line pt-2">
                  {title}
                </h3>
              </div>
              <p className="mt-5 text-sm text-brand-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
