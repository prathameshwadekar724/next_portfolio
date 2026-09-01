# Obsidian Slate Light Design System & UI Mapping Guide (Stitch MCP Integration)

This design system guide maps visual parameters, color palettes, layout tokens, and UI component architectures generated via Stitch MCP into a modern, crisp light-mode theme for high-converting freelance client acquisition.

---

## 1. Design DNA & Visual Tokens (Light Mode Theme)

### Color Palette
- **Crisp Light Slate Background**: `#F8FAFC` (`bg-slate-50`)
- **Card Surface & Containers (Glassmorphism)**: `rgba(255, 255, 255, 0.90)` (`bg-white/90` with `backdrop-blur-xl` and `border border-slate-200/90`)
- **Primary Electric Blue Accent**: `#2563EB` (`from-blue-600` / `to-violet-600` / `text-blue-600`)
- **Secondary Neon Violet Gradient**: `#7C3AED` (`from-blue-600 via-violet-600 to-indigo-600`)
- **Headline Text**: `#0F172A` (`text-slate-900 font-extrabold`)
- **Body Text**: `#475569` (`text-slate-600 font-normal leading-relaxed`)
- **Metric Success Emerald**: `#059669` (`text-emerald-700` / `bg-emerald-50` / `border-emerald-200`)
- **Challenge Rose Accent**: `#E11D48` (`text-rose-600` / `bg-rose-50`)

### Typography
- **Headlines & Display**: Plus Jakarta Sans (`font-sans font-extrabold tracking-tight`)
- **Body & Controls**: Inter (`text-slate-600 font-normal leading-relaxed`)
- **Code & Tech Tags**: Space Mono / JetBrains Mono (`font-mono text-xs uppercase tracking-wider`)

### Corner Radii & Shadows
- **Cards & Containers**: `12px` (`rounded-xl` / `rounded-2xl` / `rounded-3xl`)
- **Pill Badges**: `rounded-full`
- **Glow & Shadow Effects**: `shadow-md hover:shadow-xl shadow-blue-500/10`

---

## 2. Component Implementation Architecture

### A. Hero Section (`Hero.jsx`)
- **Layout**: 2-column asymmetric desktop grid with soft ambient background glows (`from-blue-200/50 via-violet-200/30 to-transparent`).
- **Elements**:
  - Live availability pill badge with pulsing blue beacon (`bg-white/90 border border-blue-200 text-blue-700`).
  - Gradient headline text (*"Engineering Scalable Systems that Drive Revenue"*).
  - High-ticket CTA buttons (*"Book a Technical Scoping Call"*, *"Explore Services"*).
  - Clean white frame profile image card (`bg-white shadow-2xl border border-slate-200/90 rounded-3xl`).

### B. Client-Facing Services Section (`Services.jsx`)
- **Layout**: 3-column responsive grid featuring glassmorphism white container cards (`bg-white/90 backdrop-blur-xl border border-slate-200/90 hover:border-blue-500/50`).
- **Elements**:
  - Dual-tone gradient icon badges (`bg-gradient-to-br from-blue-600 to-violet-600`).
  - Service tech stack pills (`MERN / Next.js`, `Android / Flutter`, `Python / LLM APIs`).
  - Feature lists with emerald checkmarks.

### C. Impact Case Studies Section (`ProjectCard.jsx` & `Projects.jsx`)
- **Layout**: 2-column wide grid featuring challenge-solution-impact containers.
- **Elements**:
  - Structured Challenge block with Target rose icon (`bg-rose-50 border border-rose-200`).
  - Technical Solution block with Cpu blue icon (`bg-blue-50 border border-blue-200`).
  - Highlighted Quantifiable Impact container (`bg-emerald-50 border border-emerald-200 text-emerald-950`).

### D. Scoping Call Contact Section (`Contact.jsx`)
- **Layout**: Glassmorphic white lead intake container with clear scheduling CTAs and remote availability badge.

---

## 3. Stitch MCP Asset Reference

- **Project ID**: `3044911615480022994`
- **Design System Asset**: `assets/2016850673775354094`
- **Theme**: Crisp Light Obsidian/Slate
