import Image from "next/image";
import Link from "next/link";
import UpcomingEvents from "@/components/UpcomingEvents";
import HostAnEvent from "@/components/HostAnEvent";
import EventCategories from "@/components/EventCategories";
import StayConnected from "@/components/StayConnected";
import BuildWhatsNext from "@/components/BuildWhatsNext";

function EventsHero() {
  return (
    <section className="relative w-full h-[520px] lg:h-[580px] overflow-hidden">
      <Image
        src="/images/anhmoi1.png"
        alt="Youth playing basketball"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="relative container-x h-full flex items-end pb-16">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Events
          </h1>
          <p className="mt-4 text-base lg:text-lg text-white/90 leading-relaxed">
            Join us in building brighter futures
            <br />
            through sports and learning
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link href="#find" className="btn-orange text-sm">
              Find an Event
            </Link>
            <Link
              href="#host"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-blue text-sm"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <HostAnEvent />
      <EventCategories />
      <StayConnected />
      <BuildWhatsNext />
    </>
  );
}
