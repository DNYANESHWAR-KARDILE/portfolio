import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dnyaneshwar Kardile | Full Stack Developer",
  description:
    "Portfolio of Dnyaneshwar Kardile, Computer Engineering student at Savitribai Phule Pune University (SPPU) and Full Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
  icons: {
    icon: "/images/profile/dnyaneshwar.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
