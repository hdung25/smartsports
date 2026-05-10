const stats = [
  {
    pct: "41%",
    bg: "bg-brand-blue-card",
    title: "of Illinois students are\nchronically absent",
    source: "Source: Illinois State Board of Education",
  },
  {
    pct: "26%",
    bg: "bg-brand-orange",
    title: "of students proficient\nin math",
    source: "Source: National Assessment of Educational Progress",
  },
  {
    pct: "31%",
    bg: "bg-brand-green",
    title: "of students proficient\nin reading",
    source: "Source: National Assessment of Educational Progress",
  },
];

export default function WhyItMatters() {
  return (
    <section
      id="impact"
      className="relative bg-brand-blue text-white py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/images/us-map-dots.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="container-x relative">
        <h2 className="text-center text-3xl lg:text-4xl uppercase tracking-wide">
          Why It Matters
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ pct, bg, title, source }) => (
            <div
              key={pct}
              className={`${bg} rounded-2xl p-8 text-center shadow-lg`}
            >
              <div className="text-5xl lg:text-6xl font-extrabold">{pct}</div>
              <p className="mt-3 text-base whitespace-pre-line leading-snug">
                {title}
              </p>
              <p className="mt-4 text-[11px] italic opacity-90">{source}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl font-semibold leading-relaxed">
            When young people do not see how what they are
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
