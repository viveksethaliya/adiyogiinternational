import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ship, Plane, Truck, Package, Shield, Globe2, Anchor, Clock, Users, CheckCircle, BadgeCheck, FileText, FileBadge, Building2, Leaf, CircleDollarSign, Timer, Box, HeartHandshake } from 'lucide-react';
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
            alt="Agricultural cargo shipment at port"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for WCAG AA contrast on hero text */}
          <div className="absolute inset-0 bg-[var(--color-navy)]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20">
          <div className="max-w-4xl">
            <span className="block text-[var(--color-orange)] font-bold tracking-wider uppercase mb-4 text-sm md:text-base animate-fade-in-up">
              Adiyogi International
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Premium Indian Spices & Agro Commodities Delivered <span className="text-[var(--color-orange)]">Worldwide</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up animation-delay-200 max-w-3xl">
              Your Trusted Gujarat-Based Merchant Export Partner Connecting Global Markets with Authentic, High-Quality Agricultural Products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button href="/contact" variant="primary" size="lg" className="group">
                Request a Free Quote 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-navy)]">
                Explore Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center">
            {[
              { icon: Shield, label: 'APEDA Registered' },
              { icon: Globe2, label: 'IEC Certified' },
              { icon: CheckCircle, label: 'FSSAI Approved' },
              { icon: Anchor, label: 'MSME Registered' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm"
              >
                <Icon className="h-4 w-4 text-[var(--color-orange)] flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Our Catalog"
            title="Featured Products"
            description="Explore our top-selling spices, additives, and agro-commodities engineered for the B2B food industry."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Kabutar Masala */}
            <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-200">
                  <BadgeCheck className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-slate-700">FSSAI Certified</span>
                </div>
                <Image 
                  src="/products/2/slb-rajwadi-masala-1kg-pack.jpg" 
                  alt="SLB Kabutar Masala" 
                  fill 
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">SLB Kabutar Masala — Pure Spices & Custom Blends</h3>
                <p className="text-slate-600 text-sm mb-4">Manufacturer & Wholesaler | Custom Recipe Matching</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Standard Spices', 'Custom Blends', 'Bulk Packs (50g - 50kg)'].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">{tag}</span>
                  ))}
                </div>
                <Button href="/products/kabutar-masala" variant="outline" className="mt-auto w-full group-hover:bg-[var(--color-orange)] group-hover:text-white group-hover:border-[var(--color-orange)] transition-colors">
                  Explore Spice Catalog
                </Button>
              </div>
            </Card>

            {/* Product 2: Chakki Fresh Atta */}
            <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-200">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-slate-700">100% Natural</span>
                </div>
                <Image 
                  src="/products/1/product.png" 
                  alt="Anugrah Chakki Fresh Atta" 
                  fill 
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Anugrah 100% Whole Wheat Chakki Fresh Atta</h3>
                <p className="text-slate-600 text-sm mb-4">Naturally Pure, Gracefully Delivered</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Traditional Stone Ground', 'Zero Maida', 'Commercial & Retail Packs'].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">{tag}</span>
                  ))}
                </div>
                <Button href="/products/anugrah-chakki-fresh-atta" variant="outline" className="mt-auto w-full group-hover:bg-[var(--color-orange)] group-hover:text-white group-hover:border-[var(--color-orange)] transition-colors">
                  View Details & Pricing
                </Button>
              </div>
            </Card>

            {/* Product 3: Keshari Gold */}
            <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-200">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-slate-700">100% Synthetic-Free</span>
                </div>
                <Image 
                  src="/products/3/natural-keshari-gold-1l-bottle-product-view.jpg" 
                  alt="Natural Keshari Gold" 
                  fill 
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Natural Keshari Gold (G-03) Liquid Food Color</h3>
                <p className="text-slate-600 text-sm mb-4">Plant-Derived Color Extract (Curcumin & Paprika)</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Lab Certified', 'Low Heavy Metals (<1.2 ppm)', '1L Bottles'].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">{tag}</span>
                  ))}
                </div>
                <Button href="/products/natural-keshari-gold" variant="outline" className="mt-auto w-full group-hover:bg-[var(--color-orange)] group-hover:text-white group-hover:border-[var(--color-orange)] transition-colors">
                  View COA & Request Sample
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/products" variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="About Us" 
                title="Your trusted partner in international trade." 
                description="Adiyogi International is a Gujarat-based merchant export and trading company engaged in the sourcing, supply, import, and export of high-quality agricultural commodities. We specialize in the export of premium Indian agro products and food."
              />
              <p className="text-slate-600 leading-relaxed mb-8 -mt-4">
                With a strong focus on quality, transparency, timely delivery, and customer satisfaction, we aim to build long-term business relationships with buyers and suppliers across global markets.
              </p>
              <ul className="space-y-3 mb-8">
                {['Quality assurance & compliance', 'Timely delivery worldwide', 'Transparent trade practices', 'Customer satisfaction focused'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[var(--color-orange)] h-5 w-5 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="secondary">Learn More About Us</Button>
            </div>
            <div className="relative h-[440px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/truck_highway_1784568844502.png" 
                alt="Agro commodity logistics truck on highway" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Our Services"
            title="End-to-end agro export solutions."
            description="From spice sourcing to port dispatch, we provide the infrastructure and expertise to handle all your export requirements."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Ship, title: "Ocean Freight", desc: "FCL and LCL shipping across major global trade lanes via Mundra, Kandla & Pipavav." },
              { icon: Package, title: "Export Packaging", desc: "Customized PP bags, jute bags, vacuum bags, and retail private labeling." },
              { icon: Truck, title: "Logistics & Transport", desc: "Reliable inland haulage and port delivery from farm to container." },
              { icon: Shield, title: "Quality & Compliance", desc: "APEDA, FSSAI, and IEC compliant documentation and pre-shipment inspection." }
            ].map((service, i) => (
              <Card key={i} className="p-7 flex flex-col group hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                <service.icon className="h-10 w-10 text-[var(--color-orange)] mb-5 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">{service.desc}</p>
                <Link href="/services" className="text-[var(--color-orange)] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      {/* 6. Process Snapshot */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="How We Work"
            title="The Adiyogi B2B Export Process."
            dark
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mt-16">
            {[
              { step: "01", title: "Inquiry Analysis", desc: "Submit your specifications, volume requirements, target port, and packaging choice." },
              { step: "02", title: "Commercial Quotation", desc: "We provide competitive FOB or CIF pricing based on current market dynamics." },
              { step: "03", title: "Sample Dispatch", desc: "Laboratory or physical samples are dispatched via express courier for testing." },
              { step: "04", title: "Contract Execution", desc: "Proforma Invoice and Sales Contract finalized with agreed payment terms." },
              { step: "05", title: "Processing & Inspection", desc: "Cleaning, sorting, grading, packaging, and third-party lab inspection." },
              { step: "06", title: "Port Dispatch", desc: "Container loading, ocean transport booking, and customs clearance." }
            ].map((process, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-[#002a40] rounded-full flex items-center justify-center mb-6 border-4 border-[var(--color-navy)] group hover:border-[var(--color-orange)] transition-colors">
                  <span className="text-2xl font-display font-bold text-[var(--color-orange)]">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Why Choose Us"
            title="The Adiyogi Advantage."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'APEDA Registered',
                desc: 'As an official APEDA-registered exporter, Adiyogi International adheres strictly to government-mandated quality, hygiene, and phytosanitary standards. This certification serves as a seal of quality assurance, confirming that all our agricultural products—from spices to processed foods—meet international export criteria and comply with global food safety regulations.',
                icon: Shield
              },
              {
                title: 'IEC Registered',
                desc: 'Issued by the Directorate General of Foreign Trade (DGFT), Government of India, our active IEC registration empowers us to conduct legitimate, frictionless international trade operations. It guarantees complete regulatory compliance, smooth customs clearance at both origin and destination ports, and legally sound cross-border financial transactions.',
                icon: FileText
              },
              {
                title: 'FSSAI Registered',
                desc: 'Food safety is non-negotiable. Our FSSAI registration confirms that our sourcing, handling, storage, and packaging protocols conform to India\'s premier food safety benchmarks. Buyers can rest assured that every consignment is processed under strict hygienic conditions, ensuring non-contaminated, safe, and consumable products.',
                icon: BadgeCheck
              },
              {
                title: 'MSME Registered',
                desc: 'Recognized under the Government of India\'s MSME framework, Adiyogi International combines operational agility with institutional credibility. This registration reflects our ethical business practices, strong governance, financial accountability, and commitment to driving economic growth within the agricultural sector.',
                icon: Building2
              },
              {
                title: 'Reliable Sourcing Network',
                desc: 'Gujarat is India’s agricultural powerhouse. Leveraging our strategic location, we have established direct, longstanding relationships with local farmers, agricultural cooperatives, and verified APMC mandi networks. By bypassing unnecessary intermediaries, we maintain complete traceability, secure peak-harvest quality, and maintain supply continuity year-round.',
                icon: Leaf
              },
              {
                title: 'Competitive & Transparent Pricing',
                desc: 'We optimize our supply chain through lean direct-sourcing models and efficient logistics planning. This enables us to pass significant cost savings directly to our international buyers. We provide clear, transparent commercial offers—including FOB, CFR, and CIF pricing structures—with zero hidden charges.',
                icon: CircleDollarSign
              },
              {
                title: 'Timely & Reliable Shipment',
                desc: 'In the agro-export industry, timing is critical to maintaining product freshness and avoiding costly buyer downtime. Situated near major Indian maritime hubs like Mundra, Kandla, and Pipavav, we coordinate closely with leading ocean liners and freight forwarders to ensure swift container allocation, seamless customs clearance, and on-time vessel departures.',
                icon: Timer
              },
              {
                title: 'Flexible & Customized Packaging Options',
                desc: 'We understand that packaging requirements vary according to country regulations, client branding, and product type. We offer highly customizable packaging solutions—ranging from bulk PP bags, jute bags, multi-layer paper bags, and vacuum bags to retail-ready private labeling (OEM). Our packaging preserves product aroma, extends shelf life, and prevents moisture ingress during sea transport.',
                icon: Box
              },
              {
                title: 'Customer-First Business Approach',
                desc: 'Our business model revolves around long-term relationship building rather than one-time transactions. We assign dedicated trade specialists to every account, offering transparent order updates, quick issue resolution, pre-shipment inspection reports, multi-currency trade support, and reliable post-delivery assistance.',
                icon: HeartHandshake
              }
            ].map((feature, i) => (
              <Card key={i} className="p-7 flex flex-col h-full">
                <feature.icon className="h-9 w-9 text-[var(--color-navy)] mb-4 shrink-0" />
                <h3 className="text-base font-bold text-[var(--color-navy)] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Stats Counters */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            <StatCounter value="50+" label="Export Destinations" />
            <StatCounter value="100+" label="Products Exported" />
            <StatCounter value="APEDA" label="Government Certified" />
            <StatCounter value="99%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* 9. CTA Banner */}
      <CTABanner />
    </>
  );
}
