import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav
      className="flex items-center flex-wrap gap-y-1 text-sm text-slate-300 mb-6"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="hover:text-[var(--color-orange)] flex items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-orange)] rounded"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-slate-500 flex-shrink-0" />
          {index === items.length - 1 ? (
            <span className="text-white font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-[var(--color-orange)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-orange)] rounded"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
