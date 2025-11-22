"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section-padding bg-slate-900/40" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="about" label="About" title="About Me" />

        <motion.div
          className="text-slate-300 text-sm md:text-base leading-relaxed space-y-4 bg-slate-900/60 border border-white/5 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p>
            I’m a passionate <span className="text-sky-300 font-medium">Full Stack Developer</span>,
            <span className="text-sky-300 font-medium">Android Developer</span> who loves building 
            clean, intuitive, and high-performance applications. I enjoy working across the entire 
            stack — from crafting responsive UIs to developing efficient backend systems.
          </p>

          <p>
            With experience in both design and development, I bridge the gap between aesthetics
            and functionality. I love taking ideas, refining them, and turning them into 
            real-world, production-ready applications using technologies like 
            <span className="text-sky-300 font-medium"> MERN, Next.js, Node.js, and Android (Java/Flutter)</span>.
          </p>

          <p>
            I’m always excited to explore new technologies, solve challenging problems, and
            continuously improve my skills. Currently, I’m working on projects like a
            <span className="font-semibold"> Student Attendance Management System</span>, a modern
            <span className="font-semibold"> Weather Dashboard</span>, and a prototype of a
            <span className="font-semibold"> Real-time Indian Sign Language Interpreter</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
