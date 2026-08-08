import React from 'react';

export const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
