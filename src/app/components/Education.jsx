"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section className="relative section-padding overflow-hidden" id="education">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-to-r from-blue-300/25 via-sky-200/20 to-indigo-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading id="education" label="Academic Journey" title="Education & Qualifications" />

        <motion.div
          className="relative group rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-8 md:p-10 shadow-xl shadow-slate-300/30 hover:border-blue-500/50 transition duration-300"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-2">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-base font-semibold text-blue-600 mt-0.5">
                  Computer Engineering
                </p>
                <p className="text-slate-600 text-sm mt-1 flex items-center gap-1.5">
                  <MapPin size={15} className="text-slate-400" />
                  Shah and Anchor Kutchhi Engineering College, Mumbai
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <Calendar size={14} className="text-slate-500" />
                <span>Class of 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold shadow-xs">
                <Award size={16} className="text-emerald-600" />
                <span>CGPA: 8.62 / 10.0</span>
              </div>
            </div>
          </div>

          {/* KEY DETAILS & RELEVANT COURSEWORK */}
          <div className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 shrink-0 mt-0.5">
                <BookOpen size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1.5">
                  Core Engineering Coursework & Fundamentals
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL / NoSQL), Operating Systems, Computer Networks, and Software Engineering Principles.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                Data Structures & Algorithms
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                OOP (Java)
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                DBMS & SQL
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                REST APIs
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                Operating Systems
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                Computer Networks
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
