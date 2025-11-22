"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section-padding bg-slate-900/40" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading id="projects" label="Projects" title="Selected Projects" />

        <motion.div
          className="grid md:grid-cols-2 gap-5 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
