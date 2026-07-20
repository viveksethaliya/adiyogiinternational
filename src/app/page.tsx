import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ship, Plane, Truck, Package, Shield, Globe2, Anchor, Clock, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { StatCounter } from '@/components/shared/StatCounter';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_port_ship_1784568817316.png"
            alt="Cargo ship at port"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/90 to-[var(--color-navy)]/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20">
          <div className="max-w-3xl">
            <span className="block text-[var(--color-orange)] font-bold tracking-wider uppercase mb-4 text-sm md:text-base animate-fade-in-up">
              Global Supply Chain Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Moving your business <span className="text-[var(--color-orange)]">forward</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up animation-delay-200 max-w-2xl">
              End-to-end logistics, seamless customs clearance, and global freight forwarding with unmatched reliability and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button href="/contact" variant="primary" size="lg" className="group">
                Request a Quote 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-navy)]">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-white border-b border-[var(--color-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-[var(--color-steel)]">
            <div className="flex items-center gap-2 font-bold text-lg"><Clock className="text-[var(--color-orange)]" /> 15+ Years Experience</div>
            <div className="hidden md:block w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2 font-bold text-lg"><Globe2 className="text-[var(--color-orange)]" /> 40+ Countries</div>
            <div className="hidden md:block w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2 font-bold text-lg"><Users className="text-[var(--color-orange)]" /> 500+ Active Clients</div>
            <div className="hidden md:block w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2 font-bold text-lg"><CheckCircle className="text-[var(--color-orange)]" /> 99.8% On-Time</div>
          </div>
        </div>
      </div>

      {/* 3. About Preview */}
      <section className="py-24 bg-[var(--color-light)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="About Us" 
                title="Your trusted partner in international trade." 
                description="We simplify global logistics by providing comprehensive freight, warehousing, and supply chain solutions tailored to your unique requirements. With a robust international network and local expertise, we ensure your cargo reaches its destination safely and on time."
              />
              <ul className="space-y-4 mb-8">
                {['Customized logistics strategies', 'End-to-end supply chain visibility', 'Dedicated compliance experts', '24/7 customer support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[var(--color-orange)] h-5 w-5 shrink-0" />
                    <span className="text-[var(--color-steel)] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="secondary">Learn More About Us</Button>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <Image 
                src="/truck_highway_1784568844502.png" 
                alt="Logistics truck" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/20 mix-blend-overlay m-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Our Services"
            title="Comprehensive freight and logistics."
            description="From ocean freight to last-mile delivery, we provide the infrastructure and expertise to handle all your shipping needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL shipping solutions across major global trade lanes." },
              { icon: Plane, title: "Air Freight", desc: "Expedited air cargo services for time-critical shipments." },
              { icon: Truck, title: "Road Transport", desc: "Reliable inland haulage and cross-border trucking." },
              { icon: Package, title: "Warehousing", desc: "Secure storage, distribution, and fulfillment services." }
            ].map((service, i) => (
              <Card key={i} className="p-8 group hover:-translate-y-1 transition-transform cursor-pointer">
                <service.icon className="h-12 w-12 text-[var(--color-orange)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-[var(--color-orange)] font-semibold inline-flex items-center group-hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      {/* 5. Process Snapshot */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="How It Works"
            title="A seamless shipping experience."
            dark
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#002a40] z-0" />
            {[
              { step: "01", title: "Consultation", desc: "We analyze your logistics requirements." },
              { step: "02", title: "Planning", desc: "Optimizing routes and securing capacity." },
              { step: "03", title: "Transit", desc: "Execution of the shipping plan." },
              { step: "04", title: "Delivery", desc: "Final clearance and handover." }
            ].map((process, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-[#002a40] rounded-full flex items-center justify-center mb-6 border-4 border-[var(--color-navy)] group hover:border-[var(--color-orange)] transition-colors">
                  <span className="text-3xl font-display font-bold text-[var(--color-orange)]">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 bg-[var(--color-light)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Why Choose Us"
            title="The Global Logistics Advantage."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Shield className="h-10 w-10 text-[var(--color-navy)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Compliance Experts</h3>
              <p className="text-gray-600">Navigating complex customs regulations seamlessly to prevent delays.</p>
            </Card>
            <Card className="p-8">
              <Globe2 className="h-10 w-10 text-[var(--color-navy)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-600">Strategic partnerships in over 40 countries ensuring capacity year-round.</p>
            </Card>
            <Card className="p-8">
              <Anchor className="h-10 w-10 text-[var(--color-navy)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">A single point of contact for your entire supply chain journey.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Stats Counters */}
      <section className="py-16 bg-white border-y border-[var(--color-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-light)]">
            <StatCounter value="25k+" label="Shipments Handled" />
            <StatCounter value="1M+" label="Sq Ft Warehousing" />
            <StatCounter value="500+" label="Fleet Vehicles" />
            <StatCounter value="99%" label="Customer Retention" />
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <CTABanner />
    </>
  );
}
