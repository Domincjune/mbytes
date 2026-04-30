'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0f]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#F472B6] bg-clip-text text-transparent">
                MBYTES
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-slate-300 hover:text-cyan-200 transition-colors">
              Work
            </a>
            <a href="#services" className="text-sm text-slate-300 hover:text-cyan-200 transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm text-slate-300 hover:text-cyan-200 transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-cyan-200 transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#F472B6] px-4 py-2 text-sm font-semibold text-[#0b0a12] shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.header>
  );
}