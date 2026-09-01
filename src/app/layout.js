import "./globals.css";

export const metadata = {
  title: "Prathamesh Wadekar | Full-Stack & Mobile Engineer",
  icons: {
    icon: "/pic.ico",
    shortcut: "/pic.ico",
    apple: "/pic.ico",
  },
  description: "High-performance Web & Mobile Engineer specializing in MERN, Next.js, Android, and AI automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
