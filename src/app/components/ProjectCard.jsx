import { ExternalLink, Github, Target, Cpu, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
  const hasGithubUrl = project.githubUrl && project.githubUrl !== "#";

  return (
    <div className="group rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-all">
            {project.title}
          </h3>
          {project.tag && (
            <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200/80 self-start sm:self-auto shrink-0">
              {project.tag}
            </span>
          )}
        </div>

        <div className="space-y-4 mb-6 text-sm text-slate-600">
          {project.problem && (
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 shrink-0 mt-0.5">
                <Target size={16} />
              </div>
              <div>
                <span className="font-semibold text-slate-900">Problem Statement: </span>
                <span className="text-slate-600 leading-relaxed">{project.problem}</span>
              </div>
            </div>
          )}

          {project.features && (
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 shrink-0 mt-0.5">
                <Cpu size={16} />
              </div>
              <div>
                <span className="font-semibold text-slate-900">Key Features & Architecture: </span>
                <span className="text-slate-600 leading-relaxed">{project.features}</span>
              </div>
            </div>
          )}

          {project.status && (
            <div className="flex items-start gap-3 bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-3.5 shadow-xs">
              <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <span className="font-semibold text-emerald-950">Implementation Status: </span>
                <span className="text-slate-800 leading-relaxed">{project.status}</span>
              </div>
            </div>
          )}
        </div>

        {/* TECH BADGES */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ACTION CTAS */}
      {(hasLiveUrl || hasGithubUrl) && (
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all duration-300 shadow-sm shadow-blue-500/20 hover:scale-105"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-800 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              <Github size={14} /> Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
