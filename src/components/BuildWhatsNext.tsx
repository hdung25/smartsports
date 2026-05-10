import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildWhatsNext() {
  return (
    <section
      id="get-involved"
      className="relative bg-brand-blue text-white py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-x relative text-center">
        <h2 className="text-3xl lg:text-4xl uppercase tracking-wide">
          Let&rsquo;s Build What Comes Next
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/85">
          Whether you are a school, partner, or funder, there is an opportunity
          to bring Smart Sports to more young people.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="#bring" className="btn-orange text-sm">
            Bring Smart Sports to Your Community
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link href="#partner" className="btn-outline-white text-sm">
            Partner With Us
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link href="#support" className="btn-green text-sm">
            Support the Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
