"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Linkedin, Github, FileText, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative section-padding" id="contact">
      {/* SOFT BACKGROUND MESH */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-t from-blue-300/35 via-violet-300/25 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="contact" label="Get In Touch" title="Let's Connect" />

        <motion.div
          className="relative group rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-8 md:p-12 text-slate-700 space-y-8 shadow-2xl shadow-slate-300/40 overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* DECORATIVE GLOW */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200/40 rounded-full blur-2xl pointer-events-none" />

          <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-normal">
            I&apos;m looking for entry-level software development opportunities where I can contribute to real-world projects, strengthen my technical skills, and grow as a software engineer.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-inner">
            <div className="flex items-center gap-3.5 text-base text-slate-800">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                <Mail size={20} />
              </div>
              <a
                href="mailto:prathameshwadekar13@gmail.com"
                className="hover:text-blue-600 transition font-medium"
              >
                prathameshwadekar13@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3.5 text-sm text-slate-600">
              <div className="p-2 rounded-lg bg-violet-100 text-violet-600 shrink-0">
                <MapPin size={20} />
              </div>
              <span>Mumbai / Thane, Maharashtra, India (Open to Relocation & Remote Roles)</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="mailto:prathameshwadekar13@gmail.com?subject=Job%20Opportunity%20-%20Software%20Developer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-105"
            >
              <Send size={18} /> Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/prathamesh-wadekar13/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={18} className="text-blue-600" /> LinkedIn
            </a>
            <a
              href="https://github.com/prathameshwadekar724"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="/Prathamesh_Wadekar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FileText size={18} className="text-blue-600" /> View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
