import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Raise awareness about youth opportunity gaps",
  "Engage your network in meaningful ways",
  "Support programs that change lives",
  "We’ll support you every step of the way",
];

export default function HostAnEvent() {
  return (
    <section className="bg-brand-surface py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[360px] lg:h-[460px] rounded-2xl overflow-hidden">
          <Image
            src="/images/anhmoi4.png"
            alt="Kids playing soccer"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
            Host an Event
          </h2>
          <p className="mt-3 text-brand-ink font-semibold">
            Make a difference in your community.
          </p>
          <p className="mt-3 text-brand-muted leading-relaxed max-w-md">
            From small gatherings to large fundraisers, your event helps create
            opportunities for youth to learn, grow, and thrive.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2
                  size={24}
                  className="text-brand-green shrink-0 mt-0.5"
                />
                <span className="text-brand-ink">{p}</span>
              </li>
            ))}
          </ul>

          <Link href="#get-started" className="mt-8 btn-orange text-sm">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
