export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/90">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Prathamesh Wadekar. All rights reserved.
        </p>
        <p className="text-[11px]">
          Built with <span className="text-sky-400 font-semibold">Next.js</span>{" "}
          & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
