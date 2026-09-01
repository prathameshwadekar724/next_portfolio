"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ id, label, title }) {
  return (
    <motion.div
      id={id}
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-xs">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
    </motion.div>
  );
}
