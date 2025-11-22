import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-slate-900/70 p-5 flex flex-col justify-between hover:border-sky-500/60 hover:-translate-y-1 transition">
      <div>
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full bg-slate-800 text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-2">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-sky-500/90 hover:bg-sky-600 transition"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-white/15 hover:border-sky-400 text-slate-200 transition"
          >
            <Github size={14} /> Code
          </a>
        )}
      </div>
    </div>
  );
}
