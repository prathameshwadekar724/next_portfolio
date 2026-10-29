"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CredentialCard from "./CredentialCard";
import { credentials, credentialCategories } from "../data/credentials";
import { X, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function CredentialsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Close image modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const filteredCredentials =
    activeFilter === "All"
      ? credentials
      : credentials.filter((item) => item.category === activeFilter);

  return (
    <section className="relative section-padding" id="certifications">
      {/* SOFT AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-l from-indigo-300/25 via-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-10 w-[32rem] h-[32rem] bg-gradient-to-r from-violet-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          id="certifications"
          label="Credentials & Recognition"
          title="Certifications & Achievements"
          subtitle="Continuous learning, technical exploration, and professional growth through certifications, virtual internships, technical training, and research."
        />

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {credentialCategories.map((cat) => {
            const count =
              cat === "All"
                ? credentials.length
                : credentials.filter((c) => c.category === cat).length;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-white/90 hover:bg-slate-100/90 text-slate-700 border border-slate-200/90 hover:border-blue-400"
                }`}
                aria-pressed={isActive}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* CREDENTIALS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((credential) => (
              <CredentialCard
                key={credential.id}
                credential={credential}
                onOpenImage={(imgData) => setSelectedImage(imgData)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL FOR CERTIFICATE IMAGES */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate Preview: ${selectedImage.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* MODAL HEADER */}
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100 mb-3">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {selectedImage.organization}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {selectedImage.file && (
                    <a
                      href={selectedImage.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                      title="Open full resolution in new tab"
                    >
                      <span>New Tab</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close certificate preview"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* IMAGE DISPLAY */}
              <div className="relative flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900/5 p-1">
                {selectedImage.file ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedImage.file}
                    alt={`Certificate for ${selectedImage.title}`}
                    className="w-full max-h-[75vh] object-contain rounded-xl shadow-md"
                  />
                ) : (
                  <div className="py-16 flex flex-col items-center gap-2 text-slate-400">
                    <ImageIcon size={36} />
                    <span className="text-sm">Image preview unavailable</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
