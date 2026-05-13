"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Where We Work", href: "#where" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <div className="container-x flex items-center justify-between py-3 lg:py-4 gap-3">
        <Link href="/" className="block shrink-0">
          <Image
            src="/images/logonew.png"
            alt="Smart Sports"
            width={200}
            height={120}
            priority
            className="h-auto w-[110px] sm:w-[140px] lg:w-[180px]"
          />
        </Link>

        {/* Desktop & tablet: top utility row + main nav */}
        <div className="hidden md:flex flex-col items-end gap-3 pt-1">
          <div className="flex items-center gap-6">
            <Link
              href="/events"
              className="text-brand-blue font-semibold hover:text-brand-orange transition-colors"
            >
              Events
            </Link>
            <span className="text-brand-blue/40">|</span>
            <Link
              href="/blogs"
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

        {/* Mobile: support button + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="#support"
            className="btn-green text-[11px] uppercase tracking-wide px-3 py-2 rounded-full"
          >
            Support
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-md text-brand-blue hover:bg-slate-100"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg absolute top-full inset-x-0 z-40">
          <nav className="container-x py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-brand-ink font-semibold py-2 hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-1" />
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="text-brand-blue font-semibold py-2"
            >
              Events
            </Link>
            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="text-brand-blue font-semibold py-2"
            >
              Blogs
            </Link>
            <Link
              href="#support"
              onClick={() => setOpen(false)}
              className="btn-green text-sm tracking-wide uppercase mt-2 self-start"
            >
              Support The Work
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
