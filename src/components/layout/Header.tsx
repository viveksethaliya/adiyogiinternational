"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Ship } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Network', href: '/network' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[var(--color-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Ship className="h-8 w-8 text-[var(--color-orange)]" />
              <span className="font-display font-bold text-2xl text-[var(--color-navy)] tracking-tight">
                GLOBAL LOGISTICS
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-steel)] hover:text-[var(--color-orange)] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="/contact" variant="primary">Request a Quote</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-navy)] hover:text-[var(--color-orange)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[var(--color-light)] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-[var(--color-steel)] hover:text-[var(--color-orange)] hover:bg-[var(--color-light)] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3 pb-3">
              <Button href="/contact" variant="primary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
