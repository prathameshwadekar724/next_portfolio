"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ id, label, title }) {
  return (
    <motion.div
      id={id}
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
        {label}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold">{title}</h2>
    </motion.div>
  );
}
