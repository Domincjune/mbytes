'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function FadeIn({ children, delay = 0, direction = 'up', duration = 0.5 }: FadeInProps) {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export function GlowHover({ children }: { children: ReactNode }) {
  return (
    <div className="transition-transform duration-300 hover:scale-[1.01]">{children}</div>
  );
}
