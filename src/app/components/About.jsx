"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="relative section-padding" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="about" label="Engineering Philosophy" title="Delivering Measurable Business Value" />

        <motion.div
          className="text-slate-700 text-base leading-relaxed space-y-6 bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-8 md:p-10 shadow-lg hover:border-blue-500/40 transition duration-300"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            As a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-semibold">Full-Stack Freelance Engineer</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold">Mobile Application Developer</span>, I specialize in building custom, high-converting digital products for startups, SMBs, and product teams.
          </p>

          <p>
            Whether engineering rapid SaaS MVPs using <span className="text-blue-700 font-semibold">MERN & Next.js</span>, deploying cross-platform mobile apps with <span className="text-blue-700 font-semibold">Android & Flutter</span>, or automating operations via <span className="text-blue-700 font-semibold">Python & LLM APIs</span>, my core focus is combining sleek visual design with bulletproof backend architecture.
          </p>

          <p>
            I collaborate directly with clients to turn complex business requirements into clean, production-ready systems — built for speed, conversion, and long-term scalability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
