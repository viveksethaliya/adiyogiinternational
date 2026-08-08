import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ContactForm } from '@/components/shared/ContactForm';

export default function Contact() {
  return (
    <>
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Get in touch with our export management team for inquiries, product specifications, price quotations, or sample requests.</p>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info */}
            <div>
              <div className="mb-12 sticky top-28">
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Corporate Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <MapPin className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Address</h4>
                      <p className="text-gray-600">Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Phone className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Phone / WhatsApp</h4>
                      <p className="text-gray-600">+91 9016716062<br />+91 9408530385</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Mail className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-navy)] mb-1">Email</p>
                      <a href="mailto:suyashvyas700@gmail.com" className="text-gray-600 hover:text-[var(--color-orange)] hover:underline transition-colors">suyashvyas700@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-orange)]/10 p-3 rounded-full">
                      <Clock className="text-[var(--color-orange)] h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)]">Business Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 09:00 AM - 07:00 PM (IST)<br />Sunday: Closed</p>
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
