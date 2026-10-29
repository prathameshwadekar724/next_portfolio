"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="relative section-padding" id="about">
      {/* SOFT AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-gradient-to-r from-blue-300/25 via-indigo-200/20 to-violet-300/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="about" label="Candidate Profile" title="About Me" />

        <motion.div
          className="text-slate-700 text-base leading-relaxed space-y-6 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-300/30 hover:border-blue-500/50 transition duration-300"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* QUICK HIGHLIGHT CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-2">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Degree</span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">B.Tech Comp Eng</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">College</span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">SAKEC, Mumbai</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">Graduation</span>
              <span className="text-sm font-bold text-blue-600 mt-1 block">2026</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-center">
              <span className="text-xs uppercase tracking-wider text-emerald-700 block font-semibold">CGPA</span>
              <span className="text-sm font-bold text-emerald-800 mt-1 block">8.62 / 10</span>
            </div>
          </div>

          <p>
            I am a final-year Computer Engineering undergraduate at{" "}
            <span className="text-slate-900 font-semibold">
              Shah and Anchor Kutchhi Engineering College, Mumbai
            </span>{" "}
            (Class of 2026, <span className="text-blue-700 font-semibold">8.62 CGPA</span>), actively seeking fresher opportunities in software engineering, Java backend systems, full stack web development, and mobile app development.
          </p>

          <p>
            My engineering foundation is built on hands-on development. I enjoy writing clean, modular code across the entire stack—from architecting robust backends and REST APIs using{" "}
            <span className="text-blue-700 font-semibold">Java, Spring Boot, and Node.js</span>, to designing responsive, accessible web interfaces with{" "}
            <span className="text-blue-700 font-semibold">React, Next.js, and Tailwind CSS</span>, and crafting native & cross-platform applications with{" "}
            <span className="text-blue-700 font-semibold">Android and Flutter</span>.
          </p>

          <p>
            I bring a strong problem-solving orientation, an eagerness to learn modern architectures, and a proven track record of shipping end-to-end academic and personal projects. I am eager to join a forward-thinking engineering team where I can contribute to high-impact software, learn from experienced mentors, and grow as a software engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
