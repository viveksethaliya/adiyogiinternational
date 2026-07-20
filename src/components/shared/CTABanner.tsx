import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTABanner = ({ 
  title = "Partner with a logistics team you can trust", 
  subtitle = "Contact us today for a customized freight forwarding solution tailored to your supply chain needs."
}) => {
  return (
    <section className="bg-[var(--color-navy)] py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-orange)] transform skew-x-12 translate-x-32" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" className="group">
            Request a Quote 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="/services" variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:border-white hover:text-white hover:bg-transparent">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};
