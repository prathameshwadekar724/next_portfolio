"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="relative section-padding bg-slate-100/50" id="projects">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading id="projects" label="Impact Case Studies" title="Selected Engineering Projects" />

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
