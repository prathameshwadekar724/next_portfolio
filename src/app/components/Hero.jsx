"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* TOP LINE */}
          <p className="text-sm text-sky-400 mb-2">Hi, I&apos;m Prathamesh 👋</p>

          {/* TITLE YOU PROVIDED */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Full Stack Developer <span className="text-sky-400">|</span>{" "}
            Android Developer
          </h1>

          {/* NEW ABOUT CONTENT YOU PROVIDED */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
            I&apos;m a passionate developer with a love for creating beautiful,
            intuitive, and high-performance applications. With experience in both
            design and development, I bridge the gap between aesthetics and
            functionality. I&apos;m always eager to learn new technologies and take
            on challenging projects.
          </p>

          {/* OLD TEXT (OPTIONAL) — KEEP OR REMOVE */}
          <p className="text-slate-400 text-sm md:text-base mb-6">
            Currently working with MERN, Next.js, and Android development,
            while exploring real-world systems like Attendance Management,
            Weather Dashboard, and a prototype of an ISL Interpreter.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-sm font-medium transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-sky-500/60 text-sky-300 text-sm hover:bg-sky-500/10 transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-xs uppercase tracking-[0.25em]">Connect</span>

            <a
              href="https://github.com/prathameshwadekar724"
              target="_blank"
              className="p-2 rounded-full border border-white/10 hover:border-sky-400 hover:text-sky-400 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.comlinkedin.com/in/prathamesh-wadekar-a3402125b"
              target="_blank"
              className="p-2 rounded-full border border-white/10 hover:border-sky-400 hover:text-sky-400 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:prathameshwadekar13@gmail.com"
              className="p-2 rounded-full border border-white/10 hover:border-sky-400 hover:text-sky-400 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE LOGO BOX */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl shadow-lg shadow-sky-500/40 overflow-hidden bg-slate-800">
            <Image
              src="/profile.png"   // <--- your image from public folder
              alt="Prathamesh Wadekar"
              width={1000}
              height={1000}
              className="object-cover"
              priority
            />
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
