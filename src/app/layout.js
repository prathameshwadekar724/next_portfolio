import "./globals.css";

export const metadata = {
  title: "Prathamesh Wadekar | Aspiring Software Engineer | Java & Full Stack Developer",
  icons: {
    icon: "/pic.ico",
    shortcut: "/pic.ico",
    apple: "/pic.ico",
  },
  description: "Portfolio of Prathamesh Wadekar, 2026 B.Tech Computer Engineering graduate seeking fresher Software Engineer, Java Backend, Full Stack, and Android Developer roles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
