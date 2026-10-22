// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  ['01', 'Idea', 'We talk goals, audience and scope.', '💡'],
  ['02', 'Design', 'You see the look and flow before any code.', '🎨'],
  ['03', 'Build', 'Fast, responsive, clean code with regular updates.', '⚙️'],
  ['04', 'Launch', 'Go live, then I stay for fixes and growth.', '🚀'],
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f7f7f7] px-5 py-16 text-gray-900 sm:px-6 md:px-12 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ff2a2a] sm:tracking-[.25em]">How I work</p>
          <h2 className="mb-8 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:mb-10 md:text-5xl">
            Idea → Design → Build → <span className="text-[#ff2a2a]">Launch.</span>
          </h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, x, icon], idx) => (
            <motion.article
              key={n}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(255,42,42,0.15)' }}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 transition-all duration-300 hover:border-red-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-widest text-[#ff2a2a]">{n}</span>
                <span className="text-2xl">{icon}</span>
              </div>
              <h3 className="mt-4 text-2xl font-black">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{x}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
