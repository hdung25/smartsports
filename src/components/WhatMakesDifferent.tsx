import Image from "next/image";

const items = [
  {
    img: "/images/pic2.png",
    title: "Not just sports",
    desc: "Sports are the entry point, not the outcome.",
  },
  {
    img: "/images/pic5.png",
    title: "Not just academics",
    desc: "Scholars apply learning in practical, hands-on scenarios, not abstract instruction.",
  },
  {
    img: "/images/pic4.png",
    title: "Not just exposure",
    desc: "Career pathways are introduced early and intentionally.",
  },
  {
    img: "/images/pic3.png",
    title: "Not just participation",
    desc: "Every experience is designed to prepare youth for what comes next.",
  },
];

export default function WhatMakesDifferent() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container-x">
        <h2 className="text-center text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          What Makes Us Different
        </h2>
        <p className="text-center mt-3 text-brand-muted">
          A model designed to align learning, engagement, and future opportunity.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-brand-blue text-base">{item.title}</h3>
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
