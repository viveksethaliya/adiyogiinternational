"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const StatCounter = ({ value, label, icon }: StatCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="text-center py-8 px-4"
    >
      {icon && (
        <div className="flex justify-center mb-3 text-[var(--color-orange)]">{icon}</div>
      )}
      <div className="text-4xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-1 leading-none">
        {value}
      </div>
      <div className="text-slate-600 font-medium tracking-wide uppercase text-xs mt-2">
        {label}
      </div>
    </motion.div>
  );
};
