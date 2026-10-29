"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";
import { Code2, Layout, Server, Database, Smartphone, Terminal } from "lucide-react";

const categoryIcons = {
  "Programming Languages": Code2,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "Mobile Development": Smartphone,
  "Tools & Environments": Terminal,
};

export default function Skills() {
  return (
    <section className="relative section-padding" id="skills">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-to-tr from-violet-300/25 via-indigo-200/20 to-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading id="skills" label="Technical Skills" title="Technologies & Frameworks" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                className="group rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 group-hover:scale-110 transition duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-xs font-mono text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-xs"
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
