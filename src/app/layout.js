import "./globals.css";

export const metadata = {
  title: "Prathamesh | Portfolio",
  icons:{
    icon:"/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description: "Portfolio of Prathamesh Wadekar – Full Stack / MERN / Next.js Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
