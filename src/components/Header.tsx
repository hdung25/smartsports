import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Where We Work", href: "#where" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container-x relative flex items-start justify-between py-3 lg:py-4">
        <Link href="/" className="block shrink-0">
          <Image
            src="/images/logonew.png"
            alt="Smart Sports"
            width={200}
            height={120}
            priority
            className="h-auto w-[140px] lg:w-[180px]"
          />
        </Link>

        <div className="flex flex-col items-end gap-3 pt-1">
          <div className="flex items-center gap-6">
            <Link
              href="/events"
              className="text-brand-blue font-semibold hover:text-brand-orange transition-colors"
            >
              Events
            </Link>
            <span className="text-brand-blue/40">|</span>
            <Link
              href="#blogs"
              className="text-brand-blue font-semibold hover:text-brand-orange transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#support"
              className="btn-green text-sm tracking-wide uppercase px-6 py-2 ml-2"
            >
              Support The Work
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-brand-ink font-semibold hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
