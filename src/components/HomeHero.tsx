import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[540px] lg:h-[600px] overflow-hidden">
      <Image
        src="/images/pic1new.png"
        alt="Coach with students"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent lg:to-transparent" />
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-container mx-auto px-6 lg:pl-10 lg:pr-0">
          <div className="max-w-[44%] lg:max-w-[42%] text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.08]">
              Where Sports
              <br />
              Connect to
              <br />
              Opportunity
            </h1>
            <p className="mt-5 text-sm lg:text-base leading-relaxed text-white/90">
              Smart Sports integrates sports and academics to build practical
              skills, literacy, and early exposure to career pathways that
              prepare youth for what comes next.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#bring" className="btn-orange text-xs lg:text-sm">
                Bring Smart Sports to Your Community
                <ArrowRight size={14} className="ml-2" />
              </Link>
              <Link
                href="#partner"
                className="btn border-2 border-white text-white hover:bg-white hover:text-brand-blue text-xs lg:text-sm"
              >
                Partner With Us
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
