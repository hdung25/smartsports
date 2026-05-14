import Image from "next/image";

const items = [
  {
    img: "/images/wmd1.png",
    title: "Not Just Sports",
    desc: "Sports are the entry point, not the outcome.",
  },
  {
    img: "/images/wmd2.jpg",
    title: "Not Just Academics",
    desc: "Scholars apply learning in practical, hands-on scenarios, not abstract instruction.",
  },
  {
    img: "/images/wmd3.png",
    title: "Not Just Exposure",
    desc: "Career pathways are introduced early and intentionally.",
  },
  {
    img: "/images/wmd4.jpg",
    title: "Not Just Participation",
    desc: "Every experience is designed to prepare youth for what comes next.",
  },
];

export default function WhatMakesDifferent() {
  return (
    <section id="about" className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* texture corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 -scale-x-100"
        style={{
          backgroundImage: "url('/images/corner-arc.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 -scale-y-100"
        style={{
          backgroundImage: "url('/images/corner-arc.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />

      <div className="container-x relative">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          What Makes Us Different
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-muted px-2">
          A model designed to align learning, engagement, and future opportunity.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_6px_20px_rgba(15,27,61,0.06)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-brand-blue text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
