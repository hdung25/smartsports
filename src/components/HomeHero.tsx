import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[520px] lg:h-[560px] overflow-hidden">
      <Image
        src="/images/pic1.png"
        alt="Coach with students"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/0" />
      <div className="relative container-x h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.05]">
            Where Sports
            <br />
            Connect to
            <br />
            Opportunity
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/90 max-w-xl">
            Smart Sports integrates sports and academics to build practical
            skills, literacy, and early exposure to career pathways
            that prepare youth for what comes next.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#bring" className="btn-orange text-sm">
              Bring Smart Sports to Your Community
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="#partner"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-blue text-sm"
            >
              Partner With Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
