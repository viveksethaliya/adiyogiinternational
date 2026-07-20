import React from 'react';
import Image from 'next/image';
import { Target, Compass, Award, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export default function About() {
  return (
    <>
      <div className="bg-[var(--color-navy)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Global Logistics</h1>
          <p className="text-xl text-gray-300 max-w-3xl">We are a leading provider of end-to-end supply chain solutions, connecting businesses across the globe with precision, reliability, and care.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-xl">
              <Image 
                src="/warehouse_interior_1784568830787.png" 
                alt="Warehouse operations" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading 
                eyebrow="Our Story" 
                title="Delivering excellence since 2011." 
                description="Founded with a vision to simplify complex global supply chains, Global Logistics has grown into a multinational operation spanning over 40 countries."
              />
              <p className="text-gray-600 mb-6 text-lg">
                We combine deep industry knowledge with innovative technology to provide seamless freight forwarding, customs clearance, and warehousing services. Our dedicated team of professionals ensures that every shipment, no matter the size, is handled with the utmost care and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div>
                  <h4 className="font-display font-bold text-3xl text-[var(--color-orange)] mb-2">40+</h4>
                  <p className="text-gray-600 font-medium">Countries Served</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-3xl text-[var(--color-orange)] mb-2">500+</h4>
                  <p className="text-gray-600 font-medium">Active Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-light)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Core Values" 
            title="What drives us forward." 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Exact execution of supply chain plans without compromise." },
              { icon: Compass, title: "Global Reach", desc: "Connecting markets across continents seamlessly." },
              { icon: Award, title: "Excellence", desc: "Setting industry standards in customer service." },
              { icon: Users, title: "Partnership", desc: "Treating every client's business as our own." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-[var(--color-light)] text-center">
                <value.icon className="h-12 w-12 mx-auto text-[var(--color-orange)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to optimize your supply chain?" />
    </>
  );
}
