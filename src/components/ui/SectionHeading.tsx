import React from 'react';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeading = ({
  title,
  eyebrow,
  description,
  centered = false,
  className = '',
  dark = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block font-bold uppercase tracking-widest text-xs mb-3 text-[var(--color-orange)] bg-[var(--color-orange)]/10 px-3 py-1 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          dark ? 'text-white' : 'text-[var(--color-navy)]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''} ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
