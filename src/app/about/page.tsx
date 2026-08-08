import React from 'react';
import Image from 'next/image';
import { Target, Compass, Award, Users, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export default function About() {
  return (
    <>
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">About Adiyogi International</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">We are a Gujarat-based merchant export and trading company engaged in the sourcing, supply, import, and export of high-quality agricultural commodities.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-xl hidden lg:block sticky top-28">
              <Image 
                src="/warehouse_interior_1784568830787.png" 
                alt="Agricultural warehouse operations" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/30 to-transparent" />
            </div>
            <div className="lg:col-span-7">
              <SectionHeading 
                eyebrow="Our Mission" 
                title="Supplying premium agro products globally." 
                description="To supply premium Indian spices and agricultural products globally while establishing enduring, mutually beneficial partnerships grounded in uncompromising quality, corporate integrity, transparent trade, and dependable service."
              />
              
              <div className="space-y-4 mb-12">
                {[
                  { title: "Uncompromising Product Purity", desc: "Ensuring every spice, grain, and agricultural commodity retains its natural flavor, essential oils, color, and nutritional profile without artificial additives or contamination." },
                  { title: "Global Trade Facilitation", desc: "Simplifying complex international supply chains for foreign buyers by managing end-to-end documentation, quality testing, customs clearance, and shipment tracking seamlessly." },
                  { title: "Sustainable Farmer Empowerment", desc: "Working closely with Indian farming communities to promote ethical agricultural practices, fair trade pricing, and sustainable sourcing methods." },
                  { title: "Client-Centric Tailoring", desc: "Adapting our product specifications, moisture levels, grading scales, and packaging solutions to match exact destination-country import mandates and buyer requirements." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <CheckCircle className="text-[var(--color-orange)] h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[var(--color-navy)] mb-1 text-sm">{pillar.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <SectionHeading 
                  eyebrow="Our Vision" 
                  title="A universally trusted global sourcing partner." 
                />
                <blockquote className="text-slate-600 text-base italic border-l-4 border-[var(--color-orange)] pl-5 py-1 leading-relaxed">
                  &ldquo;To become a universally trusted global sourcing partner for international buyers seeking authentic Indian agricultural products, recognized across continents for operational excellence, innovation in supply chain management, and ethical trading practices.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Core Values" 
            title="What drives us forward." 
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Integrity", desc: "Conducting every transaction with absolute honesty, clarity, and adherence to agreed-upon contract terms." },
              { icon: Award, title: "Quality Assurance", desc: "Implementing multi-tier inspection procedures from farm gate to port loading." },
              { icon: Compass, title: "Agility", desc: "Responding rapidly to market shifts, custom requests, and urgent shipment timelines." },
              { icon: Users, title: "Customer Commitment", desc: "Prioritizing buyer satisfaction and building trust that extends far beyond the initial invoice." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-7 rounded-xl shadow-sm border border-slate-200 text-center flex flex-col h-full">
                <value.icon className="h-11 w-11 mx-auto text-[var(--color-orange)] mb-4 shrink-0" />
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">{value.title}</h3>
                <p className="text-slate-600 flex-grow text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to optimize your supply chain?" />
    </>
  );
}
