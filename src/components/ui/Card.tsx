import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-white border border-[var(--color-light)] shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
