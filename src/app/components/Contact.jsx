"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative section-padding" id="contact">
      {/* SOFT BACKGROUND MESH */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-t from-blue-200/30 via-violet-200/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="contact" label="Start a Project" title="Let's Scope Your Application" />

        <motion.div
          className="relative group rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 p-8 md:p-12 text-slate-700 space-y-8 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* DECORATIVE GLOW */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200/40 rounded-full blur-2xl pointer-events-none" />

          <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-normal">
            Have an application or SaaS concept you want to bring to life? Let&apos;s map out its architecture and scope. Contact me at{" "}
            <a
              href="mailto:prathameshwadekar13@gmail.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-semibold underline underline-offset-4 hover:opacity-80 transition"
            >
              prathameshwadekar13@gmail.com
            </a>.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-inner">
            <div className="flex items-center gap-3.5 text-base text-slate-800">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
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
              <div className="p-2 rounded-lg bg-violet-100 text-violet-600">
                <MapPin size={20} />
              </div>
              <span>Thane, Maharashtra, India (Available Worldwide Remote)</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="mailto:prathameshwadekar13@gmail.com?subject=Freelance%20Project%20Inquiry"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-105"
            >
              <Calendar size={18} /> Book a Technical Scoping Call
            </a>
            <a
              href="https://linkedin.com/in/prathamesh-wadekar-a3402125b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Connect on LinkedIn <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
