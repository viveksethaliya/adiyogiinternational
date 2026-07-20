import React from 'react';
import Link from 'next/link';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-navy)] text-white pt-16 pb-8 border-t border-[#002a40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Ship className="h-8 w-8 text-[var(--color-orange)]" />
              <span className="font-display font-bold text-2xl tracking-tight">
                GLOBAL LOGISTICS
              </span>
            </Link>
            <p className="text-gray-400 mt-4">
              Providing reliable, fast, and secure freight forwarding and supply chain solutions worldwide.
            </p>
            <div className="flex space-x-4 pt-2 text-sm font-medium">
              <a href="#" className="text-gray-400 hover:text-[var(--color-orange)]">FB</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-orange)]">TW</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-orange)]">LI</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-orange)]">IG</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Industries</Link></li>
              <li><Link href="/process" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Our Process</Link></li>
              <li><Link href="/network" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Global Network</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ocean-freight" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Ocean Freight</Link></li>
              <li><Link href="/services/air-freight" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Air Freight</Link></li>
              <li><Link href="/services/road-transport" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Road Transport</Link></li>
              <li><Link href="/services/customs-clearance" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Customs Clearance</Link></li>
              <li><Link href="/services/warehousing" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-orange)] mt-1 shrink-0" size={20} />
                <span className="text-gray-400">123 Logistics Way, Port District<br />Global City, GC 10020</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-orange)] shrink-0" size={20} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-orange)] shrink-0" size={20} />
                <span className="text-gray-400">info@globallogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#002a40] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Global Logistics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--color-orange)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-orange)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
