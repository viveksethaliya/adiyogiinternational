import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-[var(--color-orange)] flex items-center transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-[var(--color-navy)] font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="hover:text-[var(--color-orange)] transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
