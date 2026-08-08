import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Leaf,
  Wheat,
  FlaskConical,
  Heart,
  Package,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTABanner } from '@/components/shared/CTABanner';

export default function AnugrahChakkiAttaPage() {
  const features = [
    {
      icon: Leaf,
      title: '100% Pure & Natural',
      desc: 'Zero maida, zero chemicals, zero additives. Only clean whole wheat stone-ground the traditional way.',
    },
    {
      icon: Wheat,
      title: 'Traditional Stone Milled',
      desc: 'Chakki stone grinding preserves wheat germ and bran, delivering softer rotis with full nutrition intact.',
    },
    {
      icon: FlaskConical,
      title: 'Hygienic Processing',
      desc: 'Milled at our GIDC Godhra facility under strict FSSAI-compliant hygienic standards for every batch.',
    },
    {
      icon: Heart,
      title: 'Farmer Supported',
      desc: 'Direct ethical sourcing from Gujarat wheat farmers — fair pricing, sustainable practices.',
    },
  ];

  const packs = [
    { size: '5 kg', price: '₹170', gst: 'Incl. GST', type: 'Consumer', highlight: false },
    { size: '10 kg', price: '₹340', gst: 'Incl. GST', type: 'Consumer', highlight: false },
    { size: '30 kg', price: '₹990', gst: 'No GST', type: 'Commercial', highlight: true },
    { size: '50 kg', price: '₹1,650', gst: 'No GST', type: 'Commercial', highlight: true },
  ];

  const b2bTerms = [
    { label: 'MOQ', value: '5 Metric Tons' },
    { label: 'Payment Terms', value: '30% Advance, 70% at Dispatch' },
    { label: 'Shipping', value: 'Buyer Paid Freight (Ex-Godhra)' },
    { label: 'Customization', value: 'Private Labeling & OEM Bags Available' },
    { label: 'Lead Time', value: '5–10 Working Days' },
    { label: 'Incoterms', value: 'FOB / CFR / CIF (Negotiable)' },
  ];

  return (
    <>
      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: 'Anugrah Chakki Fresh Atta', href: '/products/anugrah-chakki-fresh-atta' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Anugrah 100% Whole Wheat Chakki Fresh Atta</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Naturally Pure, Gracefully Delivered</p>
        </div>
      </div>

      {/* ── 1. Product Hero ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image + Trust Badges */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200">
                <Image
                  src="/products/1/product.png"
                  alt="Anugrah 100% Whole Wheat Chakki Fresh Atta bags"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                  priority
                />
              </div>
              {/* Trust badge row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'FSSAI Certified' },
                  { label: '100% Natural' },
                  { label: 'Lab Tested' },
                  { label: 'Made in India' },
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
                  <p className="text-sm font-bold text-[var(--color-navy)] font-mono">2072504600221</p>
                </div>
              </div>

              {/* Quick Specs */}
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-4">Product Specifications</h3>
                <ul className="space-y-3">
                  {[
                    'Traditional Chakki Stone Ground — preserves wheat germ & bran',
                    'Zero Maida — 100% whole wheat, no blending or adulterants',
                    'High Fiber & Protein — naturally nutritious for daily consumption',
                    'No Preservatives, No Chemicals — pure as nature intended',
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
                  Request Bulk Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/products/1/ANUGRAH-ATTA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-bold px-6 py-3.5 rounded-md hover:bg-slate-50 transition-colors duration-200 text-sm shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  Download Spec Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Feature Cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Crafted with tradition, delivered with trust."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="p-7 flex flex-col h-full">
                <f.icon className="h-9 w-9 text-[var(--color-orange)] mb-5" />
                <h3 className="font-bold text-[var(--color-navy)] text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Packaging & Pricing Matrix ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Flexible pack sizes for every buyer."
            description="Available for retail consumers, distributors, and bulk commercial buyers."
          />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[var(--color-navy)] text-white border-b border-slate-200">
                  <th className="px-6 py-4 font-semibold">Pack Size</th>
                  <th className="px-6 py-4 font-semibold">Price (MRP)</th>
                  <th className="px-6 py-4 font-semibold">GST Status</th>
                  <th className="px-6 py-4 font-semibold">Buyer Type</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {packs.map((p, i) => (
                  <tr
                    key={p.size}
                    className={`transition-colors hover:bg-slate-50 ${p.highlight ? 'bg-[var(--color-orange)]/5' : ''}`}
                  >
                    <td className="px-6 py-4 font-bold text-[var(--color-navy)]">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-[var(--color-orange)] shrink-0" />
                        {p.size}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-[var(--color-navy)] text-base">{p.price}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {p.gst}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {p.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-[var(--color-orange)] hover:underline inline-flex items-center gap-1"
                      >
                        Inquire <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Commercial pack prices are ex-factory (Godhra, Gujarat). Freight costs are borne by the buyer.
          </p>
        </div>
      </section>

      {/* ── 4. B2B Commercial Terms ── */}
      <section className="py-20 bg-[var(--color-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Commercial Terms"
            description="Built for serious bulk buyers."
            dark
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bTerms.map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-[var(--color-orange)] text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
                <p className="font-semibold text-base leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Manufacturer Info ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                title="Manufacturer Details"
                description="A trusted flour milling unit operating under full FSSAI compliance from Godhra, Gujarat."
              />
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <MapPin className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Factory Address</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      67, GIDC Industrial Estate,<br />Godhra, Gujarat — 389220, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <Phone className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Phone / WhatsApp</p>
                    <p className="text-slate-600 text-sm">
                      +91 9664803557 &nbsp;|&nbsp; +91 7567010097
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <Mail className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Business Email</p>
                    <a href="mailto:anugrahflour@gmail.com" className="text-[var(--color-orange)] text-sm font-medium hover:underline">
                      anugrahflour@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <SectionHeading
                title="Quality Assurance"
              />
              <ul className="space-y-4">
                {[
                  'FSSAI License No. 2072504600221 — active & verified',
                  'Batch-level traceability from farm to dispatch',
                  'Moisture-controlled storage to maintain freshness',
                  'Custom moisture % and protein content on request',
                  'SGS / third-party lab inspection available for exports',
                  'Phytosanitary certificate provided for international orders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-5 w-5 text-[var(--color-orange)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to stock India's finest chakki atta?" />
    </>
  );
}
