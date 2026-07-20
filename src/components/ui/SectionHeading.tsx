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
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className={`block font-semibold uppercase tracking-wider text-sm mb-2 ${dark ? 'text-[var(--color-orange)]' : 'text-[var(--color-orange)]'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-[var(--color-navy)]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
