export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 py-6">
      <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Prathamesh Wadekar • 2026 B.Tech Computer Engineering Graduate.
        </p>
        <p className="text-xs text-slate-500">
          Built with <span className="text-blue-600 font-medium">Next.js</span>, <span className="text-violet-600 font-medium">Tailwind CSS</span> & <span className="text-indigo-600 font-medium">Framer Motion</span>.
        </p>
      </div>
    </footer>
  );
}
