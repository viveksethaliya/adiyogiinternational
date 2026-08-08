'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Download,
  ArrowRight,
  Phone,
  MapPin,
  BadgeCheck,
  Droplet,
  ShieldCheck,
  TestTube,
  Cake,
  Coffee,
  Package
} from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTABanner } from '@/components/shared/CTABanner';

export default function NaturalKeshariGoldPage() {
  const galleryMedia = [
    { type: 'video', src: '/products/3/video.mp4' },
    { type: 'image', src: '/products/3/natural-keshari-gold-1l-bottle-product-view.jpg' },
    { type: 'image', src: '/products/3/natural-keshari-gold-batch-processing-tank.jpg' },
    { type: 'image', src: '/products/3/natural-keshari-gold-bulk-packaging-stacks.jpg' }
  ];
  const [activeMedia, setActiveMedia] = useState(0);

  const coaData = [
    { param: 'Color Ingredients', spec: 'Curcumin & Paprika', result: 'Permitted Natural', method: 'IS:1695-1994' },
    { param: 'Synthetic Dye', spec: 'Absent', result: 'Absent (0%)', method: 'IS:1695-1994' },
    { param: 'Lead (Pb)', spec: 'Max 10 ppm', result: '0.12 mg/kg', method: 'AOAC' },
    { param: 'Heavy Metals', spec: 'Max 40 ppm', result: '1.20 mg/kg', method: 'AOAC' },
    { param: 'Arsenic (As)', spec: 'Max 3.0 ppm', result: 'Absent / N.D.', method: 'AOAC' },
  ];

  const applications = [
    {
      icon: Cake,
      title: 'Sweets & Mithai',
      desc: 'Perfect for Kesar Peda, Jalebi, Motichoor Ladoo, Kaju Katli, Rajbhog, and Rabri.',
    },
    {
      icon: Droplet,
      title: 'Bakery & Dairy',
      desc: 'Ideal for cakes, icings, ice creams, custards, and flavored milk formulations.',
    },
    {
      icon: Coffee,
      title: 'Beverages & Syrups',
      desc: 'Formulated for Kesar syrups, sharbats, energy drinks, and squash concentrates.',
    },
    {
      icon: ShieldCheck,
      title: 'Preserves & Stuffing',
      desc: 'Use alongside Message Pudding Pro for enhanced shelf stability in stuffing material.',
    },
  ];

  return (
    <>
      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[var(--color-navy)] pt-28 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: 'Natural Keshari Gold (G-03)', href: '/products/natural-keshari-gold' },
            ]}
          />
          <span className="inline-block bg-[var(--color-orange)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Maxon Synthesis | Mecols R Series
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Natural Keshari Gold (G-03) Liquid Extract</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Concentrated Plant-Derived Natural Saffron-Yellow Color (Curcumin & Paprika)</p>
        </div>
      </div>

      {/* ── 1. Product Hero ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Interactive/Grid Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 transition-opacity duration-300">
                {galleryMedia[activeMedia].type === 'video' ? (
                  <video
                    src={galleryMedia[activeMedia].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <Image
                    src={galleryMedia[activeMedia].src}
                    alt="Natural Keshari Gold"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`p-4 transition-all duration-300 ${activeMedia === 1 ? 'object-contain' : 'object-cover'}`}
                    priority
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {galleryMedia.map((media, idx) => (
                  <button
                    key={media.src}
                    onClick={() => setActiveMedia(idx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border transition-all flex items-center justify-center group ${activeMedia === idx
                        ? 'border-[var(--color-orange)] ring-2 ring-[var(--color-orange)]/50 opacity-100'
                        : 'border-slate-200 hover:border-[var(--color-orange)] hover:opacity-100 opacity-70'
                      }`}
                  >
                    {media.type === 'video' ? (
                      <>
                        <video src={media.src} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" muted playsInline />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 text-white shadow-sm transition-transform group-hover:scale-110">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Image src={media.src} alt={`Thumbnail ${idx}`} fill className={`p-1 sm:p-2 ${idx === 1 ? 'object-contain' : 'object-cover'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4">100% Permitted Natural Color</h2>
                <p className="text-slate-600 leading-relaxed">
                  Extracted from natural Curcumin (Turmeric) and Paprika, it provides an authentic visual appeal without relying on synthetic coal-tar dyes or chemical colorants. Designed for high-heat processing and long-shelf-life food applications.
                </p>
              </div>

              {/* Quick Specs */}
              <div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-4">Product Highlights</h3>
                <ul className="space-y-3">
                  {[
                    '100% Synthetic-Free (Zero Artificial Colors)',
                    'FSSAI Compliant & Lab Certified',
                    'Heavy Metal Safe (< 1.2 ppm)',
                    'Standard 1 Liter HDPE leak-proof bottles',
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
                  Request Sample / Price Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/products/3/Natural-Keshar-Gold _G-03_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-bold px-6 py-3.5 rounded-md hover:bg-slate-50 transition-colors duration-200 text-sm shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  Download COA (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Process & Inventory (Split Cards) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex flex-col group">
              <div className="relative aspect-video">
                <Image src="/products/3/natural-keshari-gold-industrial-mixing-kettle.jpg" alt="Industrial Mixing Kettle" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <TestTube className="h-8 w-8 text-[var(--color-orange)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Precision Batch Manufacturing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Engineered in large-scale stainless steel jacketed kettles to ensure perfect blending, consistency, and absolute safety for industrial applications.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex flex-col group">
              <div className="relative aspect-video">
                <Image src="/products/3/natural-keshari-gold-1l-bottles-warehouse-rack.jpg" alt="Warehouse Rack Inventory" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <Package className="h-8 w-8 text-[var(--color-orange)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Ready Industrial Inventory</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our robust supply chain guarantees available wholesale inventory stacked in optimal warehouse conditions, ready for prompt dispatch to meet commercial demands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COA Table ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technical Specifications (COA)"
            description="Certified Lab Analysis and safety testing results for Natural Keshari Gold (G-03)."
            centered
          />
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white max-w-5xl mx-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[var(--color-navy)] text-white border-b border-slate-200">
                  <th className="px-6 py-4 font-semibold">Parameter / Test</th>
                  <th className="px-6 py-4 font-semibold">Standard Specification</th>
                  <th className="px-6 py-4 font-semibold">Test Result</th>
                  <th className="px-6 py-4 font-semibold">Testing Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {coaData.map((row) => (
                  <tr key={row.param} className="transition-colors hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-[var(--color-navy)]">{row.param}</td>
                    <td className="px-6 py-4 text-slate-600">{row.spec}</td>
                    <td className="px-6 py-4 font-bold text-[var(--color-navy)]">{row.result}</td>
                    <td className="px-6 py-4 text-slate-500 text-xs">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ── 4. Applications ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Recommended Applications & Usage"
            description="Versatile and heat-stable coloring solutions for the food and beverage industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <Card key={app.title} className="p-7 flex flex-col h-full">
                <app.icon className="h-9 w-9 text-[var(--color-orange)] mb-5" />
                <h3 className="font-bold text-[var(--color-navy)] text-base mb-2">{app.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{app.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Packaging & Handling ── */}
      <section className="py-20 bg-[var(--color-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Packaging & Storage"
            description="Ensuring maximum shelf life and product stability."
            dark
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[var(--color-orange)] text-xs font-bold uppercase tracking-widest mb-2">Standard Packaging</p>
              <p className="font-semibold text-base leading-snug">1 Liter HDPE screw-cap leak-proof bottles. Bulk commercial drums available.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[var(--color-orange)] text-xs font-bold uppercase tracking-widest mb-2">Shelf Life</p>
              <p className="font-semibold text-base leading-snug">Stable for 12 months under recommended storage conditions.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[var(--color-orange)] text-xs font-bold uppercase tracking-widest mb-2">Storage Instructions</p>
              <p className="font-semibold text-base leading-snug">Store in a cool, dry place between 25°C and 30°C. Avoid direct sunlight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Manufacturer Info ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Manufacturer Credentials"
            description="Message Food Services / Maxon Synthesis"
            centered
          />
          <div className="inline-block text-left bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <MapPin className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Factory Address</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Fareni Road, Village: Mota Gundala,<br />Ta. Jetpur - 360370, Dist: Rajkot, Gujarat
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <MapPin className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Corporate Office</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Heera Panna Complex, Post Office Road,<br />Dhoraji - 360410, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-slate-50 p-3 rounded-full shrink-0 border border-slate-100">
                    <Phone className="h-5 w-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-navy)] text-sm mb-1">Phone / Toll-Free</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      +91 2824 223921<br />1-800-233-3421
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to request a sample or bulk quotation?" />
    </>
  );
}
