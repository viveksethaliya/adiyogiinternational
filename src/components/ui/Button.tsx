import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md select-none';

    const variants = {
      primary:
        'bg-[var(--color-orange)] text-white hover:bg-[#e5762a] active:bg-[#cc691f] focus-visible:ring-[var(--color-orange)] shadow-sm hover:shadow-md',
      secondary:
        'bg-[var(--color-navy)] text-white hover:bg-[#002f47] active:bg-[#001420] focus-visible:ring-[var(--color-navy)] shadow-sm hover:shadow-md',
      outline:
        'border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white active:bg-[#001420] focus-visible:ring-[var(--color-navy)]',
      ghost:
        'hover:bg-slate-100 text-[var(--color-navy)] active:bg-slate-200 focus-visible:ring-[var(--color-navy)]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
