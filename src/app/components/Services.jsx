"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Layers, Smartphone, Bot, CheckCircle2, ArrowRight } from "lucide-react";

export const services = [
  {
    id: "saas-engineering",
    title: "Full-Stack SaaS MVP Engineering",
    tech: "MERN / Next.js",
    icon: Layers,
    description:
      "Rapid end-to-end development of scalable SaaS products and custom web platforms designed for speed, user acquisition, and seamless business operations.",
    features: [
      "Custom Next.js & React Frontend Engineering",
      "Robust Node.js & Express RESTful API Architectures",
      "Database Schema Design (MongoDB & PostgreSQL)",
      "Secure Auth (OAuth, JWT) & Payment Integrations",
    ],
    cta: "Request SaaS Scope",
  },
  {
    id: "mobile-development",
    title: "Native & Cross-Platform Mobile Apps",
    tech: "Android / Flutter",
    icon: Smartphone,
    description:
      "High-performance native Android and cross-platform Flutter applications engineered for smooth UI, offline synchronization, and maximum user engagement.",
    features: [
      "Native Android (Java/XML) & Flutter App Development",
      "Real-Time Firebase Sync & Cloud Infrastructure",
      "Intuitive Mobile UI/UX & Responsive Layouts",
      "App Store & Play Store Deployment Support",
    ],
    cta: "Discuss Mobile App",
  },
  {
    id: "ai-automation",
    title: "Tailored Business Automation & AI",
    tech: "Python / LLM APIs",
    icon: Bot,
    description:
      "Custom automation scripts and intelligent AI integrations that eliminate repetitive manual workflows, extract actionable data, and enhance customer interaction.",
    features: [
      "LLM API Integrations (Google Gemini, OpenAI, Claude)",
      "Automated Business Process & Data Extraction Pipelines",
      "Python Microservices & Custom Webhook Architecture",
      "Real-Time Analytics & Operations Dashboards",
    ],
    cta: "Automate Workflows",
  },
];

export default function Services() {
  return (
    <section className="relative section-padding bg-slate-100/50" id="services">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          id="services"
          label="Services Offered"
          title="Client-Facing Freelance Solutions"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="relative group rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* ICON BADGE */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-6 group-hover:scale-110 transition duration-300">
                    <Icon size={24} />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3">
                    {service.tech}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 text-xs text-slate-600 border-t border-slate-100 pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:border-transparent font-medium text-xs transition-all duration-300 shadow-xs"
                >
                  <span>{service.cta}</span>
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
