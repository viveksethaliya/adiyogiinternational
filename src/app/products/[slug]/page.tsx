import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CTABanner } from '@/components/shared/CTABanner';
import { ProductCard } from '@/components/shared/ProductCard';
import { ProductGallery } from '@/components/shared/ProductGallery';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { powderProducts } from '@/data/powders';

export const dynamicParams = false;

export function generateStaticParams() {
  return powderProducts.map((product) => ({ slug: product.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = powderProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Adiyogi International`,
    description: product.description,
  };
}

const highlights = [
  'Available for bulk and export orders',
  'Export-ready packing, with private labeling on request',
  'Specifications and samples shared on request',
];

export default async function PowderProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = powderProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = powderProducts.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: product.name, href: `/products/${product.slug}` },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">{product.name}</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{product.tagline}</p>
        </div>
      </div>

      {/* ── Product Hero ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ProductGallery items={product.media} alt={product.name} />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4">{product.name}</h2>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Price</p>
                  <p className="text-sm font-bold text-[var(--color-navy)]">Price on request</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-4">Product Highlights</h3>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="h-5 w-5 text-[var(--color-orange)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] text-white font-bold px-6 py-3.5 rounded-md hover:bg-opacity-90 transition-colors duration-200 text-sm shadow-sm"
                >
                  Request Sample / Price Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Products ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="More from our catalog" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to request a sample or bulk quotation?" />
    </>
  );
}
