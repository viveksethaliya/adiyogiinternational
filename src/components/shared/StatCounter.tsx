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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      {icon && <div className="flex justify-center mb-4 text-[var(--color-orange)]">{icon}</div>}
      <div className="text-4xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-2">
        {value}
      </div>
      <div className="text-gray-600 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </motion.div>
  );
};
