import { ExternalLink, Github, Target, Cpu, TrendingUp } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-all">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 mb-6 text-sm text-slate-600">
          {project.challenge && (
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 shrink-0 mt-0.5">
                <Target size={16} />
              </div>
              <div>
                <span className="font-semibold text-slate-900">The Business Challenge: </span>
                <span className="text-slate-600 leading-relaxed">{project.challenge}</span>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 shrink-0 mt-0.5">
                <Cpu size={16} />
              </div>
              <div>
                <span className="font-semibold text-slate-900">The Technical Solution: </span>
                <span className="text-slate-600 leading-relaxed">{project.solution}</span>
              </div>
            </div>
          )}

          {project.impact && (
            <div className="flex items-start gap-3 bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-3.5 shadow-xs">
              <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <TrendingUp size={16} />
              </div>
              <div>
                <span className="font-semibold text-emerald-900">The Quantifiable Impact: </span>
                <span className="text-slate-800 leading-relaxed">{project.impact}</span>
              </div>
            </div>
          )}
        </div>

        {/* TECH BADGES */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ACTION CTAS */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all duration-300 shadow-sm shadow-blue-500/20 hover:scale-105"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Github size={14} /> Architecture & Code
          </a>
        )}
      </div>
    </div>
  );
}
