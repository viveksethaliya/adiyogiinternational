import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Settings,
  Package,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  ClipboardList
} from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTABanner } from '@/components/shared/CTABanner';

export default function KabutarMasalaPage() {
  const customFeatures = [
    {
      icon: Settings,
      title: 'Custom Recipe Matching',
      desc: 'We match your specific requirements for aroma, pungency, and color to recreate your exact signature flavor profile.',
    },
    {
      icon: ClipboardList,
      title: 'Custom Grinding',
      desc: 'Available in fine powder, khandelu (coarse), or dandi cut to suit your specific culinary applications.',
    },
    {
      icon: Package,
      title: 'Private Labeling',
      desc: 'Complete OEM packaging solutions ranging from 50g retail pouches to 50kg commercial bulk bags.',
    },
    {
      icon: Award,
      title: 'Food Service Ready',
      desc: 'Ideal for HoReCa, caterers, snack manufacturers, and retail brands demanding consistent quality.',
    },
  ];

  const catalog = [
    { name: 'Special Rajwadi Masala', type: 'Special Masala', price: '₹420', bulkPrice: 'Contact Us' },
    { name: 'Kashmiri Chilli Powder', type: 'Chilli Powder', price: '₹380', bulkPrice: 'Contact Us' },
    { name: 'Selam Turmeric Powder', type: 'Turmeric', price: '₹180', bulkPrice: 'Contact Us' },
    { name: 'Dhanajeera Powder', type: 'Turmeric & Dhana', price: '₹220', bulkPrice: 'Contact Us' },
    { name: 'Premium Hing', type: 'Special Masala', price: '₹850', bulkPrice: 'Contact Us' },
    { name: 'Reshampatti Chilli', type: 'Chilli Powder', price: '₹320', bulkPrice: 'Contact Us' },
  ];

  return (
    <>
      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: 'SLB Kabutar Masala', href: '/products/kabutar-masala' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">SLB Kabutar Masala</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Pure Spices & Custom Spice Blends</p>
        </div>
      </div>

      {/* ── 1. Product Hero ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image + Trust Badges */}
            <div className="space-y-6">
              <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200">
                <Image
                  src="/products/2/slb-kabutar-masala-brand-banner.jpg"
                  alt="SLB Kabutar Masala brand banner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                  priority
                />
              </div>
              {/* Trust badge row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'FSSAI Certified' },
                  { label: '100% Pure' },
                  { label: 'Custom Blends' },
                ].map(({ label }) => (
                  <div key={label} className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs font-bold text-slate-700">
                    <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[var(--color-orange)]" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-8">
              {/* FSSAI License */}
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <BadgeCheck className="h-6 w-6 text-[var(--color-orange)] shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">FSSAI License No.</p>
                  <p className="text-sm font-bold text-[var(--color-navy)] font-mono">10712026003126</p>
                </div>
              </div>

              {/* Quick Specs */}
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-4">Product Highlights</h3>
                <ul className="space-y-3">
                  {[
                    '100% Pure & Authentic Indian Spices',
                    'Custom heat ratios and pungency profiles available',
                    'Flexible pack sizes from 50g retail pouches to 50kg bulk',
                    'Manufacturer & Wholesaler directly from Ahmedabad',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="h-5 w-5 text-[var(--color-orange)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] text-white font-bold px-6 py-3.5 rounded-md hover:bg-opacity-90 transition-colors duration-200 text-sm shadow-sm"
                >
                  Order Standard Spices <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-bold px-6 py-3.5 rounded-md hover:bg-slate-50 transition-colors duration-200 text-sm shadow-sm"
                >
                  Request Custom Blend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Range Gallery ── */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Product Range"
            description="Explore our standard 1kg commercial packs, sealed for freshness and aroma."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: 'slb-rajwadi-masala-1kg-pack.jpg', name: 'Rajwadi Masala' },
              { src: 'slb-kashmiri-chilli-powder-1kg-pack.jpg', name: 'Kashmiri Chilli' },
              { src: 'slb-selam-turmeric-haldi-powder-1kg-pack.jpg', name: 'Selam Turmeric' },
              { src: 'slb-coriander-cumin-dhanajeera-powder-1kg-pack.jpg', name: 'Dhanajeera' },
            ].map((pack) => (
              <div key={pack.src} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="relative w-full aspect-[3/4] mb-4">
                  <Image
                    src={`/products/2/${pack.src}`}
                    alt={pack.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-[var(--color-navy)] text-sm text-center">{pack.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Custom Formulation Banner ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Need a Custom Spice Blend or Private Label Formula?"
            description="We specialize in contract blending and custom spice formulations for commercial applications."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customFeatures.map((f) => (
              <Card key={f.title} className="p-7 flex flex-col h-full">
                <f.icon className="h-9 w-9 text-[var(--color-orange)] mb-5" />
                <h3 className="font-bold text-[var(--color-navy)] text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Product Catalog Table & Documents ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Standard Product Catalog & Pricing"
            description="Our primary range of whole and ground spices available for immediate wholesale dispatch."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-[var(--color-navy)] text-white border-b border-slate-200">
                    <th className="px-6 py-4 font-semibold">Item Name</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Base Wholesale Price (₹/kg)</th>
                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {catalog.map((p, i) => (
                    <tr key={p.name} className="transition-colors hover:bg-slate-50">
                      <td className="px-6 py-4 font-bold text-[var(--color-navy)]">
                        {p.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {p.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-[var(--color-navy)]">{p.price}</td>
                      <td className="px-6 py-4">
                        <Link
                          href="/contact"
                          className="text-xs font-bold text-[var(--color-orange)] hover:underline inline-flex items-center gap-1"
                        >
                          Inquire Bulk <ArrowRight className="h-3 w-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-6">
              <a href="/products/2/slb-kabutar-masala-product-catalog-list.jpg" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <Image src="/products/2/slb-kabutar-masala-product-catalog-list.jpg" alt="Product Catalog" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-[var(--color-navy)] px-4 py-2 rounded-md font-bold text-sm">View Full Catalog</span>
                  </div>
                </div>
              </a>
              <a href="/products/2/slb-kabutar-masala-wholesale-price-list.jpg" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <Image src="/products/2/slb-kabutar-masala-wholesale-price-list.jpg" alt="Wholesale Price List" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-[var(--color-navy)] px-4 py-2 rounded-md font-bold text-sm">View Price List</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Prices are indicative and subject to change based on market rates and total order volume.
          </p>
        </div>
      </section>

      <CTABanner title="Ready to partner with SLB Kabutar Masala?" />
    </>
  );
}
