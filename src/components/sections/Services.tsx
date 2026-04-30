'use client';

import { motion } from 'framer-motion';
import { FadeIn, GlowHover } from '@/components/Motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <GlowHover>
        <motion.div
          className="group relative glass rounded-2xl p-8 h-full cursor-pointer"
          whileHover={{
            borderColor: 'rgba(34, 211, 238, 0.5)',
          }}
        >
          {/* Gradient border on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-indigo opacity-0 group-hover:opacity-50 rounded-2xl blur transition-opacity duration-300 -z-10" />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1), transparent)',
            }}
          />

          <div className="relative z-10 space-y-4">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {description}
            </p>
            <motion.div
              className="pt-4 inline-block"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-neon-cyan text-sm font-semibold">Learn more →</span>
            </motion.div>
          </div>
        </motion.div>
      </GlowHover>
    </FadeIn>
  );
};

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Product Development',
      description: 'End-to-end product strategy, design, and execution. From concept to market, we build products that matter.',
    },
    {
      icon: '🤖',
      title: 'Agentic AI Integration',
      description: 'Seamlessly integrate intelligent agents into your existing applications. AI that works for your business.',
    },
    {
      icon: '⚙️',
      title: 'Tech Stack Modernization',
      description: 'Upgrade legacy systems with modern architectures. Future-proof your infrastructure.',
    },
    {
      icon: '🎯',
      title: 'Product Strategy',
      description: 'Data-driven strategy and roadmapping. We align technology with business goals.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeIn direction="up" duration={0.8}>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Services Built for </span>
              <span className="gradient-text">Next-Gen Companies</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              We specialize in the intersections of product, AI, and technology
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
