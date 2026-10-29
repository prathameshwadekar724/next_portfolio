"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Terminal,
  Trophy,
  Calendar,
  Building2,
  ExternalLink,
  Eye,
} from "lucide-react";

const categoryStyles = {
  Internships: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: Briefcase,
    accent: "text-blue-600",
  },
  Certifications: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: Award,
    accent: "text-emerald-600",
  },
  "Technical Training": {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    icon: Terminal,
    accent: "text-violet-600",
  },
  "Research & Achievements": {
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    icon: Trophy,
    accent: "text-amber-600",
  },
};

function isImageFile(path) {
  if (!path || typeof path !== "string") return false;
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(path);
}

export default function CredentialCard({ credential, onOpenImage }) {
  const style = categoryStyles[credential.category] || categoryStyles["Certifications"];
  const CategoryIcon = style.icon;

  const certificateTarget = credential.certificateUrl || credential.certificateFile;
  const hasCertificate = Boolean(certificateTarget);
  const isImage = credential.certificateFile && isImageFile(credential.certificateFile);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div>
        {/* TOP ROW: CATEGORY BADGE & DATE */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-xs ${style.badge}`}
          >
            <CategoryIcon size={13} />
            <span>{credential.category}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar size={13} className="text-slate-400" />
            <span>{credential.date}</span>
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
          {credential.title}
        </h3>

        {/* ISSUING ORGANIZATION */}
        <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700 mb-4">
          <Building2 size={16} className={`shrink-0 mt-0.5 ${style.accent}`} />
          <span>{credential.organization}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {credential.description}
        </p>

        {/* SKILLS TAGS */}
        {credential.skills && credential.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {credential.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER ACTIONS: VIEW CERTIFICATE (HIDDEN WHEN NOT YET CONFIGURED) */}
      {hasCertificate && (
        <div className="pt-4 border-t border-slate-100">
          {isImage ? (
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: credential.title,
                  file: credential.certificateFile,
                  organization: credential.organization,
                })
              }
              aria-label={`View certificate for ${credential.title}`}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all duration-300 shadow-sm shadow-blue-500/20 hover:scale-105"
            >
              <Eye size={14} /> View Certificate
            </button>
          ) : (
            <a
              href={certificateTarget}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open certificate for ${credential.title} in a new tab`}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all duration-300 shadow-sm shadow-blue-500/20 hover:scale-105"
            >
              <span>View Certificate</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
