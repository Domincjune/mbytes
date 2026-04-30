'use client';

import { motion } from 'framer-motion';

const brandLogos = [
  { name: 'Oracle', src: 'https://logo.clearbit.com/oracle.com' },
  { name: 'Yahoo', src: 'https://logo.clearbit.com/yahoo.com' },
  { name: 'AOL', src: 'https://logo.clearbit.com/aol.com' },
  { name: 'Verizon', src: 'https://logo.clearbit.com/verizon.com' },
  { name: 'Dell', src: 'https://logo.clearbit.com/dell.com' },
];

const services = [
  {
    title: 'Product Development',
    description: 'From concept to launch, we build AI-native products that move fast and scale reliably.',
    accent: 'cyan',
  },
  {
    title: 'Agentic AI Integration',
    description: 'Embed intelligent agents into legacy systems and modern platforms with minimal friction.',
    accent: 'magenta',
  },
  {
    title: 'Tech Stack Modernization',
    description: 'Future-proof your infrastructure with cloud-first architectures and performance-first tooling.',
    accent: 'indigo',
  },
  {
    title: 'Product Strategy',
    description: 'Align product execution with market signals, growth levers, and global scale planning.',
    accent: 'acid',
  },
];

const processItems = ['Discover', 'Design', 'Build', 'Scale'];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#0d0d0f] text-slate-100 pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.18),_transparent_40%)] blur-3xl" />
        <div className="absolute right-0 top-[30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(244,114,182,0.18),_transparent_40%)] blur-3xl" />
        <div className="absolute left-[10%] bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.14),_transparent_36%)] blur-3xl" />
      </div>

      <section id="hero" className="relative pt-20 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-12 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              AI consulting for product teams with 50+ years built across Oracle, Yahoo, AOL, Verizon & Dell.
            </span>
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
                Engineering the Future with Agentic AI
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                MBYTES blends product engineering, AI-native agents, and strategic modernization to launch differentiated platforms for global teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#F472B6] px-7 py-3 text-sm font-semibold text-[#0b0a12] shadow-[0_0_40px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(244,114,182,0.3)]"
              >
                Begin the conversation
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                Explore SHIPIQ case study
              </a>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121217]/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-x-4 top-6 h-56 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_80%_50%,_rgba(244,114,182,0.18),_transparent_28%)] blur-3xl opacity-70" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0f]/80 px-4 py-2 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_24px_rgba(34,211,238,0.35)]" />
                  Strategic AI + product engineering
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Why MBYTES</p>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    A premium delivery engine for AI-first products.
                  </h2>
                  <p className="max-w-xl text-slate-300">
                    We move beyond advisory: MBYTES ships product-grade systems, injects agentic workflows, and modernizes stack architecture for enterprise-scale launches.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Global reach</p>
                    <p className="mt-3 text-lg font-semibold text-white">UK, Ireland, Singapore & San Francisco</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Experience</p>
                    <p className="mt-3 text-lg font-semibold text-white">50+ years across Oracle, Yahoo, AOL, Verizon & Dell</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative rounded-[2rem] border border-white/10 bg-[#15151d]/70 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(244,114,182,0.1),rgba(99,102,241,0.08))]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-[1.75rem] bg-[#0c0c11]/85 p-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.04)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Abstract AI system</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Fluid intelligence that feels alive.</h3>
                  <p className="mt-4 text-slate-300">
                    Soft gradients, depth motion, and layered glow combine to create a distinctive agentic platform preview.
                  </p>
                </div>
                <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c11]/80 p-6">
                  <div className="absolute -left-12 -top-14 h-36 w-36 rounded-full bg-[#22D3EE]/20 blur-3xl" />
                  <div className="absolute right-8 bottom-8 h-32 w-32 rounded-full bg-[#F472B6]/20 blur-3xl" />
                  <div className="relative z-10 grid gap-4">
                    <div className="flex items-center justify-between gap-3 text-slate-300">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">SHIPIQ</span>
                      <span className="text-sm text-cyan-200/90">Operational AI pipeline</span>
                    </div>
                    <div className="relative rounded-[1.75rem] border border-white/10 bg-[#10101a]/90 p-6">
                      <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.14),_transparent_30%)] opacity-80" />
                      <div className="relative z-10 grid gap-4">
                        <div className="h-52 rounded-[1.5rem] bg-[#11121b] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                          <div className="flex h-full items-center justify-center text-center text-sm text-slate-300">
                            <span>Interactive network visualization with intelligent task routing, load-aware inference, and soft orbital motion.</span>
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {['Agent routing', 'Smart ingestion', 'Realtime sync'].map((item) => (
                            <div key={item} className="rounded-3xl border border-white/10 bg-[#121217]/85 px-4 py-3 text-sm text-slate-300">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="logos" className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Trusted by global teams</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The brands shaping the future of enterprise systems.
            </h2>
          </motion.div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11121b]/75 px-4 py-8 sm:px-6 sm:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0d0d0f] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d0f] to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.06),_transparent_30%)]" />
            <div className="relative space-y-8">
              <div className="overflow-hidden rounded-[1.75rem] bg-[#0c0c11]/90 px-3 py-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.04)] sm:px-5">
                <div className="flex min-w-[1200px] gap-8 animate-marquee will-change-transform">
                  {brandLogos.map((brand) => (
                    <div key={brand.name} className="flex h-16 w-48 items-center justify-center rounded-3xl bg-white/5 p-3 grayscale transition duration-500 group-hover:grayscale-0 hover:scale-[1.02] hover:bg-white/10">
                      <img src={brand.src} alt={brand.name} className="h-10 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] bg-[#0c0c11]/90 px-3 py-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.04)] sm:px-5">
                <div className="flex min-w-[1200px] gap-8 animate-marquee-reverse will-change-transform">
                  {brandLogos.slice().reverse().map((brand) => (
                    <div key={brand.name} className="flex h-16 w-48 items-center justify-center rounded-3xl bg-white/5 p-3 grayscale transition duration-500 group-hover:grayscale-0 hover:scale-[1.02] hover:bg-white/10">
                      <img src={brand.src} alt={brand.name} className="h-10 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Services</p>
              <h2 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
                Deep consulting, engineered to feel modern and distinctly powerful.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                MBYTES brings product craft, AI orchestration, and technical depth into a single delivery team. Every engagement is tailored to be code-first, data-savvy, and future-ready.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="group rounded-[2rem] border border-white/10 bg-[#121217]/80 p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-sm font-semibold text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                      {service.title.slice(0, 1)}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                    <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#F472B6] opacity-0 transition duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121217]/60 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.12),_transparent)]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0b0f]/90 p-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.04)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Design system</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">A living environment for modern teams.</h3>
                  <p className="mt-4 text-slate-300">
                    Animated surface layers, gradient motion, and a restrained glass system create depth without distraction.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] bg-[#11131b]/90 p-5">
                    <h4 className="text-lg font-semibold text-white">Glass depth</h4>
                    <p className="mt-3 text-sm text-slate-300">Soft translucency, layered blur, and subtle highlight edges.</p>
                  </div>
                  <div className="rounded-[1.8rem] bg-[#11131b]/90 p-5">
                    <h4 className="text-lg font-semibold text-white">Ambient motion</h4>
                    <p className="mt-3 text-sm text-slate-300">Slow drifting gradients and hover glow keep the experience premium.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              SHIPIQ — an AI delivery platform built for operational clarity.
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300">
                SHIPIQ brings automated route intelligence, product telemetry, and agentic orchestration together in a polished operational layer.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  'Dynamic agent workflows',
                  'Intelligent pipeline monitoring',
                  'Adaptive service orchestration',
                  'Cloud-native observability',
                ].map((item) => (
                  <div key={item} className="rounded-[1.8rem] border border-white/10 bg-[#0f1118]/90 p-5 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Feature</p>
                    <p className="mt-3 text-base font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/10 px-6 py-3 text-sm font-semibold text-[#d5ffff] transition duration-300 hover:bg-[#22d3ee]/20"
              >
                See how SHIPIQ scales
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11121b]/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,_rgba(34,211,238,0.14),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(244,114,182,0.12),_transparent_26%),radial-gradient(circle_at_50%_70%,_rgba(99,102,241,0.1),_transparent_25%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-[1.8rem] bg-[#0c0c11]/90 p-6 text-slate-300 shadow-[inset_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="mb-4 inline-flex items-center rounded-full bg-[#16161d]/80 px-3 py-1 text-xs uppercase tracking-[0.32em] text-slate-400">
                    Case study
                  </div>
                  <h3 className="text-3xl font-semibold text-white">A product visualization shaped by motion.</h3>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0f]/95 p-6">
                  <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#22d3ee]/20 blur-3xl" />
                  <div className="absolute right-6 bottom-8 h-44 w-44 rounded-full bg-[#f472b6]/20 blur-3xl" />
                  <div className="relative z-10 flex h-[320px] items-center justify-center">
                    <div className="relative flex h-[240px] w-[240px] items-center justify-center rounded-full bg-[#121217]/80 shadow-[0_0_80px_rgba(34,211,238,0.16)]">
                      <div className="absolute inset-0 rounded-full border border-white/10" />
                      <div className="absolute left-4 top-4 h-28 w-28 rounded-full bg-[#22d3ee]/20 blur-2xl" />
                      <div className="absolute right-6 bottom-6 h-28 w-28 rounded-full bg-[#f472b6]/20 blur-2xl" />
                      <div className="absolute h-40 w-40 rounded-full bg-[#6366f1]/20 blur-2xl" />
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#0a0a0f]/95 border border-white/10 text-center text-sm text-slate-300">
                        SHIPIQ
                        <span className="block text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">AI workflow core</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="process" className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A lean, agentic process built for speed and clarity.
            </h2>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11121b]/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_35%,rgba(244,114,182,0.06))]" />
            <div className="relative z-10 grid gap-8">
              <div className="hidden lg:block">
                <div className="relative h-1 bg-white/5">
                  <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(34,211,238,0.35),rgba(244,114,182,0.3),rgba(99,102,241,0.3))] opacity-70" />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {processItems.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="group rounded-[1.8rem] border border-white/10 bg-[#0d0d10]/85 p-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#22D3EE]/20 via-[#6366F1]/15 to-[#F472B6]/20 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{step === 'Discover' ? 'Map opportunity, users, and technical surface.' : step === 'Design' ? 'Craft product systems and agent flows.' : step === 'Build' ? 'Ship resilient, scalable code and APIs.' : 'Scale orchestration and product velocity.'}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b0b10]/80 via-[#121216]/80 to-[#11121b]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.14),_transparent_28%)] opacity-80" />
            <div className="relative z-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/80">Ready to build the next wave of AI-enabled products?</p>
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Partner with MBYTES for product, AI, and strategic modernization.</h2>
                <p className="max-w-2xl text-slate-300">From agentic integration to full-stack product launches, we help ambitious teams move faster and launch with confidence.</p>
              </div>
              <div className="space-y-4 rounded-[1.8rem] border border-white/10 bg-[#0c0c12]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Let's connect</p>
                  <p className="text-xl font-semibold text-white">mb@bytes.ai</p>
                </div>
                <a
                  href="mailto:hello@mbbytes.ai"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#F472B6] px-6 py-3 text-sm font-semibold text-[#0b0a12] shadow-[0_0_40px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5"
                >
                  Start a project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
