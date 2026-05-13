import Link from "next/link";
import { Users, HandHeart, MonitorPlay, Footprints, CalendarHeart } from "lucide-react";

const categories = [
  {
    icon: Users,
    bg: "bg-brand-blue-card",
    title: "Community Events",
    desc: "Local events that bring people together.",
  },
  {
    icon: HandHeart,
    bg: "bg-brand-orange",
    title: "Fundraisers",
    desc: "Help raise critical resources for youth programs.",
  },
  {
    icon: MonitorPlay,
    bg: "bg-brand-green",
    title: "Workshops",
    desc: "Learn, grow, and build skills that create impact.",
  },
  {
    icon: Footprints,
    bg: "bg-amber-400",
    title: "Sports Events",
    desc: "Games, tournaments, and activities for all ages.",
  },
  {
    icon: CalendarHeart,
    bg: "bg-brand-blue-card",
    title: "All Events",
    desc: "View all upcoming events and opportunities.",
  },
];

export default function EventCategories() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-x">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          Event Categories
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-ink/80 font-medium px-2">
          Explore events that match your interests.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map(({ icon: Icon, bg, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-slate-100 shadow-[0_6px_20px_rgba(15,27,61,0.06)]"
            >
              <div
                className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bg} flex items-center justify-center text-white`}
              >
                <Icon size={26} />
              </div>
              <h3 className="mt-4 sm:mt-5 text-brand-blue text-sm sm:text-base">{title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#browse"
            className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          >
            Browse All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
