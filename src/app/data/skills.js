export const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages used for building backend systems, web logic, and mobile applications.",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend Development",
    description: "Modern web interfaces, responsive styling, and dynamic component-based architectures.",
    skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Server-side architectures, RESTful API design, microservices, and backend frameworks.",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Relational and NoSQL data modeling, document storage, and in-memory test databases.",
    skills: ["MySQL", "MongoDB", "Firebase", "H2"],
  },
  {
    title: "Mobile Development",
    description: "Native Android and cross-platform mobile application engineering.",
    skills: ["Android Development", "Java", "Flutter", "Dart", "XML"],
  },
  {
    title: "Tools & Environments",
    description: "Version control, IDEs, debugging tools, and collaborative engineering environments.",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Android Studio", "Postman"],
  },
];

export const skills = skillCategories.flatMap((cat) => cat.skills);
