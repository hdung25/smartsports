import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-x py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src="/images/logo.png"
            alt="Smart Sports"
            width={180}
            height={110}
            className="h-auto w-[160px]"
          />
          <p className="mt-4 text-sm text-brand-muted">
            Smart Sports is a registered 501(c)3 nonprofit
          </p>
          <Link
            href="#support"
            className="mt-4 inline-flex btn-green text-sm uppercase tracking-wide"
          >
            Support the Work
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
            <li><Link href="#blogs" className="hover:text-brand-blue">Blogs</Link></li>
          </ul>
          <h4 className="text-brand-blue font-bold mt-6 mb-3">Follow Us</h4>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Instagram" className="text-brand-orange hover:opacity-80">
              <Instagram size={22} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-brand-blue hover:opacity-80">
              <Facebook size={22} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-brand-blue font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-brand-ink text-sm">
            <li className="flex gap-2">
              <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
              <span>3340 N Hamilton Ave, Unit 1,<br />Chicago, IL 60618</span>
            </li>
            <li className="flex gap-2">
              <Phone size={18} className="text-brand-orange shrink-0" />
              <span>773-705-3102</span>
            </li>
            <li className="flex gap-2">
              <Mail size={18} className="text-brand-orange shrink-0" />
              <span>info@mysmartsports.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-x py-5 text-center text-sm text-brand-muted">
          © 2026 Smart Sports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
