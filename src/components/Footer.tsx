import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-x py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src="/images/logonew.png"
            alt="Smart Sports"
            width={220}
            height={140}
            className="h-auto w-[180px]"
          />
          <p className="mt-4 text-xs text-brand-ink whitespace-nowrap">
            Smart Sports is a registered 501(c)3 nonprofit
          </p>
          <Link
            href="#support"
            className="mt-4 inline-flex btn-green text-sm"
          >
            Support the work
          </Link>
        </div>

        <div>
          <h4 className="text-brand-blue font-bold mb-4">Quick links</h4>
          <ul className="space-y-2 text-brand-ink">
            <li><Link href="#about" className="hover:text-brand-blue">About Us</Link></li>
            <li><Link href="#how-it-works" className="hover:text-brand-blue">How It Works</Link></li>
            <li><Link href="#where" className="hover:text-brand-blue">Where We Work</Link></li>
            <li><Link href="#impact" className="hover:text-brand-blue">Impact</Link></li>
            <li><Link href="#get-involved" className="hover:text-brand-blue">Get Involved</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-blue font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-brand-ink">
            <li><Link href="#news" className="hover:text-brand-blue">News</Link></li>
            <li><Link href="/events" className="hover:text-brand-blue">Events</Link></li>
            <li><Link href="/blogs" className="hover:text-brand-blue">Blogs</Link></li>
          </ul>
          <h4 className="text-brand-blue font-bold mt-6 mb-3">Follow Us</h4>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center hover:opacity-90"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center hover:opacity-90"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-brand-blue font-bold mb-4">Contact</h4>
          <ul className="space-y-4 text-brand-ink text-sm">
            <li className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </span>
              <span className="leading-snug pt-1">
                3340 N Hamilton Ave,
                <br />Unit 1, Chicago, IL 60618
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                <Phone size={16} />
              </span>
              <span>773-705-3102</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                <Mail size={16} />
              </span>
              <span>info@mysmartsports.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-brand-orange">
        <div className="container-x py-5 text-center text-sm text-brand-muted">
          © 2026 Smart Sports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
