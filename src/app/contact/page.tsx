import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  return (
    <>
      <div className="bg-[var(--color-navy)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Get in touch with our team of logistics experts for tailored solutions and inquiries.</p>
        </div>
      </div>

      <section className="py-24 bg-[var(--color-light)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form UI */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[var(--color-light)]">
              <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 border" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 border" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 border" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 border">
                    <option>Ocean Freight</option>
                    <option>Air Freight</option>
                    <option>Road Transport</option>
                    <option>Warehousing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 border" placeholder="How can we help you?"></textarea>
                </div>
                <Button type="button" variant="primary" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Global Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <MapPin className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Address</h4>
                      <p className="text-gray-600">123 Logistics Way, Port District<br />Global City, GC 10020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Phone className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543 (Support)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Mail className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Email</h4>
                      <p className="text-gray-600">info@globallogistics.com<br />quotes@globallogistics.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Clock className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Weekend: Closed (24/7 Operations Support)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
