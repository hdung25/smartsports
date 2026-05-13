import Image from "next/image";

const items = [
  {
    icon: "/images/icon-learn.svg",
    bg: "bg-brand-blue",
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
    bg: "bg-brand-yellow",
    title: "Build Skills for\nthe Future",
    desc: "Scholars develop financial literacy, decision-making, teamwork, and communication skills.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-16 overflow-hidden">
      {/* texture corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-72 h-72 opacity-80"
        style={{
          backgroundImage: "url('/images/texture-lines.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 opacity-80 rotate-180"
        style={{
          backgroundImage: "url('/images/texture-lines.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="container-x relative">
        <h2 className="text-center text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          How It Works
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon, bg, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-7 shadow-[0_6px_24px_rgba(15,27,61,0.08)] border border-slate-100"
            >
              <div
                className={`shrink-0 w-16 h-16 rounded-full ${bg} flex items-center justify-center mb-4`}
              >
                <Image
                  src={icon}
                  alt=""
                  width={38}
                  height={38}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="text-brand-blue text-lg font-bold leading-tight whitespace-pre-line">
                {title}
              </h3>
              <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
