'use client'
import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8 font-['Inter']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <Link href="/" className="flex items-center gap-2 text-white mb-6">
            <Droplets className="w-8 h-8 text-[#00A6A6]" />
            <span className="font-['Montserrat'] font-bold text-2xl tracking-tight">
              AQUA Z
            </span>
          </Link>
          <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
            Advanced geomembrane lining and waterproofing systems for critical infrastructure across Africa and the Middle East. Engineering excellence since 2009.
          </p>
          <div className="flex flex-col gap-3 text-sm text-[#94A3B8]">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#00A6A6]" />
              <div className="flex flex-col gap-1">
                <span>{process.env.NEXT_PUBLIC_PHONE1}</span>
                <span>{process.env.NEXT_PUBLIC_PHONE2}</span>
                <span>{process.env.NEXT_PUBLIC_PHONE3}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00A6A6]" />
              <span>{process.env.NEXT_PUBLIC_MAIL}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00A6A6]" />
              <span>Cairo, Egypt (HQ)</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
            <li><Link href="/services" className="hover:text-white transition-colors">HDPE Geomembranes</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">PVC Geomembranes</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">TPO Membranes</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">EPDM Systems</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Welding & Installation</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">QA/QC Testing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Industries</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
            <li><Link href="/industries" className="hover:text-white transition-colors">Mining</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Agriculture</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Aquaculture</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Waste Management</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Infrastructure</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Recreation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#64748B] text-sm">
          &copy; {new Date().getFullYear()} AQUA Z. All rights reserved.
        </p>
        <p className="text-[#64748B] text-sm">
          <a href="https://www.facebook.com/profile.php?id=61565299295319" target="_blank">
            Made By <span className="text-emerald-600">Technology Craft</span>&copy;
          </a>
        </p>
        <p className="text-[#64748B] text-sm font-medium">
          Egypt <span className="mx-2 opacity-50">|</span> Africa <span className="mx-2 opacity-50">|</span> Middle East
        </p>
      </div>
    </footer>
  );
}
