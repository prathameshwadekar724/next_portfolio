export const skillCategories = [
  {
    title: "Web App Development",
    description: "High-performance SaaS MVPs, conversion landing pages & enterprise web systems.",
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "RESTful API Design",
      "TailwindCSS",
      "State Management",
    ],
  },
  {
    title: "Native & Cross-Platform Mobile Apps",
    description: "Production-ready Android and cross-platform apps tailored for user engagement.",
    skills: [
      "Android (Java / XML)",
      "Flutter & Dart",
      "Firebase Integration",
      "Mobile UI/UX Optimization",
      "Offline Sync & DBs",
    ],
  },
  {
    title: "Workflow Automation & AI Integrations",
    description: "Intelligent AI pipelines, LLM API integrations, and business process automation.",
    skills: [
      "Python (Automation & ML)",
      "Gemini & OpenAI APIs",
      "OAuth & JWT Security",
      "Git & GitHub Actions",
      "Vercel / Render / Netlify Deployment",
    ],
  },
];

export const skills = skillCategories.flatMap((cat) => cat.skills);
