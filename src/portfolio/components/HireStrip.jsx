// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

export default function HireStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t-4 border-red-600 bg-[#14141a] px-5 py-5 text-white sm:px-6 md:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400"
          ></motion.span>
          Available for new projects
        </p>
      </div>
    </motion.div>
  );
}
