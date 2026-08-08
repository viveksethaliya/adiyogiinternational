import React from 'react';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTABanner } from '@/components/shared/CTABanner';
import { Button } from '@/components/ui/Button';
import { BadgeCheck, Leaf } from 'lucide-react';

export default function ProductsPage() {
  return (
    <>
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }]} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Product Catalog</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Explore our premium range of spices, food additives, and agricultural commodities formulated for industrial excellence.
          </p>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 pb-6">
            <button className="bg-[var(--color-navy)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              All Products
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:text-[var(--color-navy)] hover:border-slate-300 px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              Spices & Masalas
            </button>
            <button className="bg-white border border-slate-200 text-slate-600 hover:text-[var(--color-navy)] hover:border-slate-300 px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              Food Additives & Colors
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Product 3: Keshari Gold */}
            <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-200">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-slate-700">Synthetic-Free</span>
                </div>
                <Image 
                  src="/products/3/natural-keshari-gold-1l-bottle-product-view.jpg" 
                  alt="Natural Keshari Gold" 
                  fill 
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Natural Keshari Gold (G-03) Liquid Extract</h3>
                <p className="text-slate-600 text-sm mb-4">Plant-Derived Color Extract (Curcumin & Paprika)</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Lab Certified', 'Low Heavy Metals', '1L Bottles'].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">{tag}</span>
                  ))}
                </div>
                <Button href="/products/natural-keshari-gold" variant="outline" className="mt-auto w-full group-hover:bg-[var(--color-orange)] group-hover:text-white group-hover:border-[var(--color-orange)] transition-colors">
                  View COA & Details
                </Button>
              </div>
            </Card>

            {/* Product 4: Chakki Fresh Atta */}
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

          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title="Looking for a custom quotation?"
            description="Our team specializes in B2B bulk orders, custom formulations, and white-label manufacturing. Reach out to discuss your specific requirements."
            centered
          />
          <Button href="/contact" variant="primary" size="lg" className="mt-4">
            Request Bulk Quotation
          </Button>
        </div>
      </section>
    </>
  );
}
