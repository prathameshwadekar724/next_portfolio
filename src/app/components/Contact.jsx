"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading id="contact" label="Contact" title="Get In Touch" />

        <motion.div
          className="bg-slate-900/70 border border-white/5 rounded-2xl p-6 md:p-8 text-sm text-slate-300 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p>
            I&apos;m open to{" "}
            <span className="font-semibold text-sky-300">
              internships, full-time roles, and project collaborations
            </span>
            . If you think I&apos;m a good fit or just want to say hi, feel free to
            reach out.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-sky-400" />
              <a
                href="mailto:prathameshwadekar13@gmail.com"
                className="hover:text-sky-300 transition"
              >
                prathameshwadekar13@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-sky-400" />
              <span>Thane, Maharashtra, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
