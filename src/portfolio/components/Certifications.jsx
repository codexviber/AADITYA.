// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { icon: '↗', title: 'Fast Delivery', text: 'Clear milestones and practical planning to keep work moving forward.' },
  { icon: '◇', title: 'Quality Code', text: 'Responsive layouts, maintainable components, and care for the details.' },
  { icon: '✦', title: 'Creative Ideas', text: 'A visual direction tailored to each client instead of one generic template.' },
  { icon: '∞', title: 'Long-Term Support', text: 'Help with updates, maintenance, improvements, and the next phase of your product.' },
];

export default function Certifications() {
  return (
    <section id="values" className="bg-white px-5 py-16 sm:px-6 md:px-12 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-rose-600 sm:tracking-[.25em]">The CodeXViber approach</p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Small details. <span className="bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent">Real impact.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">I aim to make technology approachable, useful, and visually memorable.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, idx) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -10, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 transition-all duration-300 hover:border-red-300 hover:shadow-xl"
            >
              <motion.span
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 text-2xl font-black text-white"
              >
                {v.icon}
              </motion.span>
              <h3 className="mt-5 text-xl font-black text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
