import React from 'react';
import Link from 'next/link';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/shared/WhatsAppIcon';

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
                ADIYOGI INTERNATIONAL
              </span>
            </Link>
            <p className="text-slate-300 mt-4">
              Premium Indian Spices & Agro Commodities Delivered Worldwide.
            </p>
            <div className="flex space-x-4 pt-2 text-sm font-medium">
              <a href="#" className="text-slate-400 hover:text-[var(--color-orange)] transition-colors duration-200">FB</a>
              <a href="#" className="text-slate-400 hover:text-[var(--color-orange)] transition-colors duration-200">TW</a>
              <a href="#" className="text-slate-400 hover:text-[var(--color-orange)] transition-colors duration-200">LI</a>
              <a href="#" className="text-slate-400 hover:text-[var(--color-orange)] transition-colors duration-200">IG</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Services</Link></li>
              <li><Link href="/industries" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Industries</Link></li>
              <li><Link href="/process" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Our Process</Link></li>
              <li><Link href="/network" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Global Network</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/road-transport" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Road Transport</Link></li>
              <li><Link href="/services/customs-clearance" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Customs Clearance</Link></li>
              <li><Link href="/services/warehousing" className="text-slate-300 hover:text-[var(--color-orange)] transition-colors duration-200">Warehousing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-orange)] mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[var(--color-orange)] shrink-0 mt-0.5" size={20} />
                <div className="flex flex-col gap-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <a href="tel:+919016716062" className="hover:text-[var(--color-orange)] transition-colors duration-200">+91 9016716062</a>
                    <a href="https://wa.me/919016716062" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" aria-label="Chat on WhatsApp">
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="tel:+919408530385" className="hover:text-[var(--color-orange)] transition-colors duration-200">+91 9408530385</a>
                    <a href="https://wa.me/919408530385" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" aria-label="Chat on WhatsApp">
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[var(--color-orange)] mt-0.5" />
                <a href="mailto:suyashvyas700@gmail.com" className="text-slate-300 hover:text-white hover:underline transition-colors duration-200">suyashvyas700@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#002a40] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Adiyogi International. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--color-orange)] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-orange)] transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
