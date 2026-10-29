"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="relative section-padding" id="projects">
      {/* SOFT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 -right-28 w-[42rem] h-[42rem] bg-gradient-to-l from-violet-300/30 via-indigo-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-28 w-[36rem] h-[36rem] bg-gradient-to-r from-blue-300/25 via-cyan-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading id="projects" label="Engineering Work" title="Featured Projects" />

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
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
