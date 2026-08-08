import React from 'react';
import { Ship, Plane, Truck, Package, Shield, ClipboardCheck, BarChart3, Briefcase } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function Services() {
  const services = [
    { slug: 'ocean-freight', icon: Ship, title: 'Ocean Freight Forwarding', desc: 'Comprehensive FCL and LCL shipping solutions across all major global trade lanes.' },
    { slug: 'air-freight', icon: Plane, title: 'Air Freight Forwarding', desc: 'Expedited and consolidated air cargo services for time-critical international shipments.' },
    { slug: 'road-transport', icon: Truck, title: 'Road Transport', desc: 'Reliable inland haulage, cross-border trucking, and last-mile delivery services.' },
    { slug: 'customs-clearance', icon: Shield, title: 'Customs Clearance', desc: 'Expert navigation of global customs regulations to ensure smooth border crossings.' },
    { slug: 'warehousing', icon: Package, title: 'Warehousing & Distribution', desc: 'Secure storage, inventory management, and strategic distribution center services.' },
    { slug: 'export-documentation', icon: ClipboardCheck, title: 'Export Documentation', desc: 'Accurate preparation and compliance checking for all necessary shipping paperwork.' },
    { slug: 'supply-chain-consulting', icon: BarChart3, title: 'Supply Chain Consulting', desc: 'Strategic analysis and optimization of your global logistics operations.' },
    { slug: 'cargo-insurance', icon: Briefcase, title: 'Cargo Insurance', desc: 'Comprehensive coverage options to protect your valuable shipments during transit.' }
  ];

  return (
    <>
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Our Services</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">A comprehensive suite of freight forwarding and logistics solutions designed to streamline your global trade operations.</p>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="End-to-end agro export solutions."
            description="We manage every aspect of the supply chain, ensuring your cargo moves efficiently from origin to destination."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200 group">
                <service.icon className="h-9 w-9 text-[var(--color-orange)] mb-5 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">{service.desc}</p>
                <Link href={`/services/${service.slug}`} className="text-[var(--color-orange)] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Learn more
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
