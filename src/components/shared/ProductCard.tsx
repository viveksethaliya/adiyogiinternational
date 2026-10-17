import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { coverImage, type PowderProduct } from '@/data/powders';

export const ProductCard = ({ product }: { product: PowderProduct }) => {
  const cover = coverImage(product);

  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] bg-white border-b border-slate-100 overflow-hidden">
        {cover && (
          <Image
            src={cover}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{product.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">{tag}</span>
          ))}
        </div>
        <Button href={`/products/${product.slug}`} variant="outline" className="mt-auto w-full group-hover:bg-[var(--color-orange)] group-hover:text-white group-hover:border-[var(--color-orange)] transition-colors">
          View Details
        </Button>
      </div>
    </Card>
  );
};
