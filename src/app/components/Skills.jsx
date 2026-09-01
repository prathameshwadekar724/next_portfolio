"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";
import { Code2, Smartphone, Bot } from "lucide-react";

const icons = [Code2, Smartphone, Bot];

export default function Skills() {
  return (
    <section className="relative section-padding bg-slate-100/50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading id="skills" label="Capabilities" title="Technical Stack & Expertise" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={category.title}
                className="group rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 group-hover:scale-110 transition duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-100/80 px-3 py-1.5 text-xs font-mono text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
