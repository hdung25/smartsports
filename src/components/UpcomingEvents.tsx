import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, ArrowRight } from "lucide-react";

type Badge = "Community Event" | "Fundraiser" | "Workshop";

const badgeStyles: Record<Badge, string> = {
  "Community Event": "bg-brand-blue-card text-white",
  Fundraiser: "bg-brand-green text-white",
  Workshop: "bg-brand-orange text-white",
};

const events: {
  badge: Badge;
  image: string;
  date: string;
  title: string;
  desc: string;
  location: string;
}[] = [
  {
    badge: "Community Event",
    image: "/images/anhmoi2.png",
    date: "June 8, 2026 • 10:00 AM",
    title: "Smart Sports\nCommunity Day",
    desc: "A family-friendly day of sports, learning activities, and fun for all ages.",
    location: "Austin, TX",
  },
  {
    badge: "Fundraiser",
    image: "/images/anhmoi3.png",
    date: "June 8, 2026 • 10:00 AM",
    title: "Play It Forward\nGala",
    desc: "An evening of inspiration and impact to support youth opportunities.",
    location: "Chicago, IL",
  },
  {
    badge: "Workshop",
    image: "/images/anhmoi3.png",
    date: "June 8, 2026 • 10:00 AM",
    title: "Smart Sports\nCommunity Day",
    desc: "A family-friendly day of sports, learning activities, and fun for all ages.",
    location: "Virtual Event",
  },
  {
    badge: "Community Event",
    image: "/images/anhmoi3.png",
    date: "June 8, 2026 • 10:00 AM",
    title: "Smart Sports\nCommunity Day",
    desc: "A family-friendly day of sports, learning activities, and fun for all ages.",
    location: "Memphis, TN",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative bg-white py-14 sm:py-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 -scale-x-100"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 -scale-y-100"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />
      <div className="container-x relative">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          Upcoming Events
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-ink/80 font-medium px-2">
          Find ways to connect, support, and get involved in your community
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {events.map((ev, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_6px_22px_rgba(15,27,61,0.08)] flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={ev.image}
                  alt={ev.title.replace("\n", " ")}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                />
                <span
                  className={`absolute top-3 left-3 ${badgeStyles[ev.badge]} text-xs font-semibold rounded-md px-3 py-1`}
                >
                  {ev.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-brand-blue text-sm font-medium">
                  <CalendarCheck size={16} className="text-brand-blue" />
                  {ev.date}
                </p>
                <h3 className="mt-3 text-brand-blue text-xl whitespace-pre-line leading-tight">
                  {ev.title}
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {ev.desc}
                </p>
                <p className="mt-4 flex items-center gap-2 text-brand-ink text-sm">
                  <MapPin size={16} className="text-brand-blue" />
                  {ev.location}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#all"
            className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
