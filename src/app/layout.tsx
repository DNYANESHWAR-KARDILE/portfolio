import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dnyaneshwar-kardile.vercel.app"),

  title: {
    default: "Dnyaneshwar Kardile | Full Stack Developer",
    template: "%s | Dnyaneshwar Kardile",
  },

  description:
    "Portfolio of Dnyaneshwar Kardile, a Computer Engineering Student at Savitribai Phule Pune University (SPPU) and Full Stack Developer based in Pune, India. Specializing in modern web applications using React, Next.js, Node.js, PostgreSQL, and MongoDB.",

  keywords: [
    "Dnyaneshwar Kardile",
    "Dnyaneshwar Kardile developer",
    "Dnyaneshwar Kardile portfolio",
    "Dnyaneshwar Kardile Full Stack Developer",
    "Dnyaneshwar Kardile React Developer",
    "Dnyaneshwar Kardile Next.js Developer",
    "Dnyaneshwar Kardile Pune",
    "Full Stack Developer Pune",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL",
    "MongoDB",
    "Computer Engineering SPPU",
  ],

  authors: [
    {
      name: "Dnyaneshwar Kardile",
      url: "https://dnyaneshwar-kardile.vercel.app",
    },
  ],

  creator: "Dnyaneshwar Kardile",
  publisher: "Dnyaneshwar Kardile",

  alternates: {
    canonical: "https://dnyaneshwar-kardile.vercel.app",
  },

  verification: {
    google: "-LZsotRVRdCPHibx3k1hl4cEwypKWREVtLzUkg3RXgs",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dnyaneshwar-kardile.vercel.app",
    siteName: "Dnyaneshwar Kardile Portfolio",
    title: "Dnyaneshwar Kardile | Full Stack Developer",
    description:
      "Portfolio of Dnyaneshwar Kardile, a Computer Engineering Student at SPPU and Full Stack Developer based in Pune, India. Specializing in modern web applications using React, Next.js, Node.js, PostgreSQL, and MongoDB.",

    images: [
      {
        url: "/images/profile/dnyaneshwar.jpeg",
        width: 800,
        height: 1000,
        alt: "Dnyaneshwar Kardile - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dnyaneshwar Kardile | Full Stack Developer",
    description:
      "Portfolio of Dnyaneshwar Kardile, a Computer Engineering Student at SPPU and Full Stack Developer based in Pune, India. Specializing in modern web applications using React, Next.js, Node.js, PostgreSQL, and MongoDB.",

    images: ["/images/profile/dnyaneshwar.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/profile/dnyaneshwar.jpeg",
    apple: "/images/profile/dnyaneshwar.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person structured data (JSON-LD)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Dnyaneshwar Kardile",
    givenName: "Dnyaneshwar",
    familyName: "Kardile",

    jobTitle: "Full Stack Developer",

    description:
      "Full Stack Developer and Computer Engineering student at Savitribai Phule Pune University (SPPU) based in Pune, India, specializing in React, Next.js, Node.js, PostgreSQL, and MongoDB.",

    url: "https://dnyaneshwar-kardile.vercel.app",

    image:
      "https://dnyaneshwar-kardile.vercel.app/images/profile/dnyaneshwar.jpeg",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Savitribai Phule Pune University (SPPU)",
    },

    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Full Stack Development",
    ],

    sameAs: [
      "https://github.com/DNYANESHWAR-KARDILE",
      "https://www.linkedin.com/in/dnyaneshwar-u-kardile-9644bb379",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body className="antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}