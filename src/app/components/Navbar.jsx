'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="text-sky-400">&lt;</span>
          Prathamesh
          <span className="text-sky-400">/&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-sky-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/5"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95">
          <ul className="flex flex-col px-4 py-3 gap-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-slate-200 hover:text-sky-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
