import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CTABanner } from '@/components/shared/CTABanner';
import { Button } from '@/components/ui/Button';

// Mock data for static generation / demonstration
const serviceData: Record<string, { title: string; description: string; benefits: string[] }> = {
  'ocean-freight': {
    title: 'Ocean Freight Forwarding',
    description: 'We offer reliable, cost-effective ocean freight services for both Full Container Load (FCL) and Less than Container Load (LCL) shipments.',
    benefits: ['Global carrier network', 'Customs clearance included', 'Real-time tracking', 'Door-to-door delivery'],
  },
};

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const data = serviceData[slug] || {
    title: 'Specialized Logistics Service',
    description: 'A comprehensive solution tailored to meet your unique supply chain requirements and operational challenges.',
    benefits: ['End-to-end visibility', 'Dedicated account manager', 'Compliance assurance', 'Flexible capacity'],
  };

  return (
    <>
      {/* Page Hero — pt-24 clears the 64px sticky nav, pb-16 gives balanced padding */}
      <div className="bg-[var(--color-navy)] pt-24 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-[var(--color-orange)] hover:text-white transition-colors duration-200 mb-6 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: data.title, href: `/services/${slug}` }
          ]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">{data.description}</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 text-slate-600 text-lg">
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">Service Overview</h2>
              <p>
                Our {data.title.toLowerCase()} services are designed to navigate the complexities of international trade on your behalf. 
                With decades of experience and a vast network of global partners, we ensure that your cargo is handled with the highest level of professionalism and care.
              </p>
              <p>
                Whether you are a small business making your first international shipment or a large enterprise optimizing a massive supply chain, our team provides scalable solutions that align with your strategic goals.
              </p>
              
              <h3 className="text-2xl font-bold text-[var(--color-navy)] mt-12 mb-6">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-lg">
                    <CheckCircle className="text-[var(--color-orange)] h-5 w-5 shrink-0" />
                    <span className="font-medium text-[var(--color-navy)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sticky Sidebar — top-24 matches h-16 header + 8px safety gap */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-4">Need this service?</h3>
                <p className="text-slate-600 mb-6">Contact our logistics experts to get a customized quote for your specific requirements.</p>
                <Button href="/contact" variant="primary" className="w-full mb-4">Request a Quote</Button>
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <p className="font-semibold text-[var(--color-navy)] mb-1">Call us directly:</p>
                  <p className="text-[var(--color-orange)] font-bold text-xl">+91 9016716062</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
