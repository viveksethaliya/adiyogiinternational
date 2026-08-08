import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTABanner = ({
  title = 'Partner with a trusted agro-export specialist',
  subtitle = 'Contact our team today for a customized quotation on premium Indian spices and agricultural commodities.',
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section className="bg-[var(--color-navy)] py-20 relative overflow-hidden">
      {/* Decorative shape */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.07]"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-orange)] transform skew-x-12 translate-x-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" className="group">
            Request a Free Quote
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="lg"
            className="border-slate-500 text-slate-200 hover:border-white hover:text-white hover:bg-transparent"
          >
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
};
