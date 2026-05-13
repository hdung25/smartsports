import Image from "next/image";
import Link from "next/link";
import UpcomingEvents from "@/components/UpcomingEvents";
import HostAnEvent from "@/components/HostAnEvent";
import EventCategories from "@/components/EventCategories";
import StayConnected from "@/components/StayConnected";
import BuildWhatsNext from "@/components/BuildWhatsNext";
import RevealOnScroll from "@/components/RevealOnScroll";

function EventsHero() {
  return (
    <section className="relative w-full h-[480px] sm:h-[520px] lg:h-[580px] overflow-hidden">
      <Image
        src="/images/anhmoi1.png"
        alt="Youth playing basketball"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75 sm:bg-gradient-to-r sm:from-black/55 sm:via-black/20 sm:to-transparent" />
      <div className="relative container-x h-full flex items-end pb-10 sm:pb-16">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Events
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
            Join us in building brighter futures
            <br className="hidden sm:block" />
            {" "}through sports and learning
          </p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="#find" className="btn-orange text-xs sm:text-sm justify-center">
              Find an Event
            </Link>
            <Link
              href="#host"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-blue text-xs sm:text-sm justify-center"
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
      <RevealOnScroll>
        <UpcomingEvents />
      </RevealOnScroll>
      <RevealOnScroll>
        <HostAnEvent />
      </RevealOnScroll>
      <RevealOnScroll>
        <EventCategories />
      </RevealOnScroll>
      <RevealOnScroll>
        <StayConnected />
      </RevealOnScroll>
      <RevealOnScroll>
        <BuildWhatsNext />
      </RevealOnScroll>
    </>
  );
}
