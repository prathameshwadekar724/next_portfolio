import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CredentialsSection from "./components/CredentialsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-slate-900 bg-slate-100/60 selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      {/* GLOBAL DYNAMIC ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle developer grid texture */}
        <div className="absolute inset-0 bg-grid-slate opacity-75 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

        {/* Hero glow: Electric Blue & Violet ambient orb */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[50rem] h-[35rem] bg-gradient-to-tr from-blue-400/30 via-indigo-400/25 to-violet-500/25 rounded-full blur-[110px]" />

        {/* Mid-left glow: Cyan / Sky ambient orb behind Education & Skills */}
        <div className="absolute top-[26%] -left-48 w-[38rem] h-[38rem] bg-gradient-to-br from-blue-400/20 via-sky-300/25 to-indigo-300/15 rounded-full blur-[105px]" />

        {/* Mid-right glow: Violet / Purple ambient orb behind Projects */}
        <div className="absolute top-[52%] -right-48 w-[42rem] h-[42rem] bg-gradient-to-bl from-violet-400/25 via-purple-300/20 to-indigo-400/20 rounded-full blur-[120px]" />

        {/* Bottom-center glow: Indigo & Blue convergence behind Contact */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[48rem] h-[36rem] bg-gradient-to-t from-blue-400/25 via-indigo-300/20 to-violet-400/20 rounded-full blur-[115px]" />
      </div>

      <Navbar />
      <main className="relative z-10 overflow-x-hidden w-full">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CredentialsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
