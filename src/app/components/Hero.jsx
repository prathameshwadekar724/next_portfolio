"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileText, Sparkles, FolderGit2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative section-padding flex items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden"
    >
      {/* SOFT AMBIENT LIGHT BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-300/35 via-violet-300/25 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.6fr,1.1fr] gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* STATUS PILL BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span>2026 B.Tech Graduate • Seeking Entry-Level Opportunities</span>
            <Sparkles size={14} className="text-violet-600 ml-1" />
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3 text-slate-900">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600">
              Prathamesh Wadekar
            </span>
          </h1>

          {/* ROLE SUBTITLE */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-6 flex flex-wrap items-center gap-2">
            <span>Aspiring Software Engineer</span>
            <span className="text-blue-500 hidden sm:inline">•</span>
            <span>Java Backend Developer</span>
            <span className="text-blue-500 hidden sm:inline">•</span>
            <span>Full Stack Developer</span>
          </h2>

          {/* CANDIDATE INTRODUCTION */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            I&apos;m a 2026 B.Tech Computer Engineering graduate passionate about building practical web applications, backend systems, and mobile apps. I enjoy solving problems, learning new technologies, and turning ideas into working software through hands-on projects.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              <FolderGit2 size={17} /> View My Projects
            </a>
            <a
              href="/Prathamesh_Wadekar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200/90 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium hover:scale-[1.02] transition-all duration-300 shadow-sm"
            >
              <FileText size={17} className="text-blue-600" /> View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-medium hover:scale-[1.02] transition-all duration-300 shadow-sm"
            >
              Contact Me <ArrowRight size={16} />
            </a>
          </div>

          {/* DIRECT CONNECT */}
          <div className="flex items-center gap-4 text-slate-500 pt-2">
            <span className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Direct Connect</span>
            <div className="h-4 w-px bg-slate-300" />

            <a
              href="https://github.com/prathameshwadekar724"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/prathamesh-wadekar-a3402125b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:prathameshwadekar13@gmail.com"
              className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE PROFILE CONTAINER */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* AMBIENT GLOW BEHIND CARD */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-violet-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
            
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] rounded-3xl bg-white p-2.5 border border-slate-200/90 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/profile.jpeg"
                  alt="Prathamesh Wadekar - Aspiring Software Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
