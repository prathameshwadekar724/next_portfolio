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
  Maximize2,
  FileCheck,
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

  const handleCardImageClick = () => {
    if (isImage) {
      onOpenImage({
        title: credential.title,
        file: credential.certificateFile,
        organization: credential.organization,
      });
    } else if (certificateTarget) {
      window.open(certificateTarget, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
    >
      <div>
        {/* VISUAL CERTIFICATE PREVIEW CONTAINER AT TOP OF CARD */}
        {hasCertificate && (
          <div
            onClick={handleCardImageClick}
            className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-5 group/img cursor-pointer shadow-sm hover:border-blue-400 transition-all duration-300"
            title="Click to expand certificate"
          >
            {isImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={credential.certificateFile}
                alt={credential.title}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/40 p-4 text-center">
                <FileCheck size={36} className="text-blue-600 mb-2" />
                <span className="text-xs font-semibold text-slate-800">Official Document</span>
                <span className="text-[11px] text-slate-500 mt-1">Click to view in new tab</span>
              </div>
            )}

            {/* HOVER OVERLAY WITH EXPAND BADGE */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-md">
                <Maximize2 size={13} className="text-blue-600" /> Click to Expand
              </span>
              <span className="text-[11px] font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded-md">
                Verified
              </span>
            </div>
          </div>
        )}

        {/* TOP ROW: CATEGORY BADGE & DATE */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
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
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
          {credential.title}
        </h3>

        {/* ISSUING ORGANIZATION */}
        <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700 mb-3.5">
          <Building2 size={16} className={`shrink-0 mt-0.5 ${style.accent}`} />
          <span>{credential.organization}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
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

      {/* FOOTER ACTIONS */}
      {hasCertificate && (
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={handleCardImageClick}
            aria-label={`View certificate for ${credential.title}`}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white text-slate-700 transition-all duration-300 shadow-xs hover:scale-105"
          >
            <Maximize2 size={13} />
            <span>{isImage ? "Full Certificate" : "View Document"}</span>
          </button>

          {isImage && (
            <a
              href={credential.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-blue-600 inline-flex items-center gap-1 transition-colors"
            >
              <span>Open tab</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
