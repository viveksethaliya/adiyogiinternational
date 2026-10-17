'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { GalleryItem } from '@/data/powders';

export const ProductGallery = ({ items, alt }: { items: GalleryItem[]; alt: string }) => {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200">
        {current.type === 'video' ? (
          <video
            key={current.src}
            src={current.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover bg-black"
          />
        ) : (
          <Image
            key={current.src}
            src={current.src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
          />
        )}
      </div>
      {items.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {items.map((item, idx) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={item.type === 'video' ? `Play ${alt} video` : `Show ${alt} photo`}
              aria-pressed={active === idx}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border transition-all flex items-center justify-center group ${
                active === idx
                  ? 'border-[var(--color-orange)] ring-2 ring-[var(--color-orange)]/50 opacity-100'
                  : 'border-slate-200 hover:border-[var(--color-orange)] hover:opacity-100 opacity-70'
              }`}
            >
              {item.type === 'video' ? (
                <>
                  <video src={`${item.src}#t=0.1`} preload="metadata" className="w-full h-full object-cover" muted playsInline />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 text-white shadow-sm transition-transform group-hover:scale-110">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </span>
                </>
              ) : (
                <Image src={item.src} alt="" fill sizes="25vw" className="object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
