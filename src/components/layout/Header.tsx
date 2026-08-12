"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Ship } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'All Products', href: '/products' },
        { name: 'SLB Kabutar Masala', href: '/products/kabutar-masala' },
        { name: 'Natural Keshari Gold', href: '/products/natural-keshari-gold' },
        { name: 'Anugrah Chakki Atta', href: '/products/anugrah-chakki-fresh-atta' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] rounded-md"
            >
              <Ship className="h-7 w-7 text-[var(--color-orange)]" />
              <span className="font-display font-bold text-lg text-[var(--color-navy)] tracking-tight leading-none">
                ADIYOGI<br />
                <span className="text-[var(--color-orange)] text-sm font-semibold tracking-widest">INTERNATIONAL</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 flex items-center gap-1 ${
                        isActive
                          ? 'text-[var(--color-orange)] bg-[var(--color-orange)]/10'
                          : 'text-slate-700 hover:text-[var(--color-navy)] hover:bg-slate-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.name}
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    <div className="absolute left-0 top-full pt-1.5 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                        {link.dropdown.map(dropItem => (
                          <Link 
                            key={dropItem.name} 
                            href={dropItem.href}
                            className={`block px-4 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-[var(--color-orange)] transition-colors ${pathname === dropItem.href ? 'text-[var(--color-orange)] bg-slate-50' : 'text-slate-700'}`}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 flex items-center ${
                    isActive
                      ? 'text-[var(--color-orange)] bg-[var(--color-orange)]/10'
                      : 'text-slate-700 hover:text-[var(--color-navy)] hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Button href="/contact" variant="primary" size="sm">
              Request a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[var(--color-navy)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="px-4 pt-3 pb-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[var(--color-orange)] bg-[var(--color-orange)]/10'
                        : 'text-slate-700 hover:text-[var(--color-navy)] hover:bg-slate-100'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 pb-2 pt-1 space-y-1">
                      {link.dropdown.map(dropItem => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                            pathname === dropItem.href
                              ? 'text-[var(--color-orange)] bg-[var(--color-orange)]/5'
                              : 'text-slate-600 hover:text-[var(--color-navy)] hover:bg-slate-50'
                          }`}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-3 border-t border-slate-200">
              <Button href="/contact" variant="primary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
