import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildWhatsNext() {
  return (
    <section
      id="get-involved"
      className="relative bg-brand-blue text-white py-14 sm:py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/basketball-court.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="container-x relative text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide">
          Let&rsquo;s Build What Comes Next
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/85">
          Whether you are a school, partner, or funder, there is an opportunity
          to bring Smart Sports to more young people.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link href="#bring" className="btn-orange text-xs sm:text-sm">
            Bring Smart Sports to Your Community
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link href="#partner" className="btn-outline-white text-xs sm:text-sm">
            Partner With Us
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link href="#support" className="btn-green text-xs sm:text-sm">
            Support the Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
