import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/resume/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Dnyaneshwar_Kardile_Resume.pdf"',
          },
        ],
      },
      {
        source: "/Dnyaneshwar_Kardile_Resume.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Dnyaneshwar_Kardile_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
