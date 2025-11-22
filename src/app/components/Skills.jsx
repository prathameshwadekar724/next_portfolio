"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="section-padding" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading id="skills" label="Skills" title="Tech Stack & Skills" />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/5 bg-slate-900/70 px-3 py-2.5 text-sm text-center text-slate-200 hover:border-sky-400/70 hover:-translate-y-0.5 transition"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
