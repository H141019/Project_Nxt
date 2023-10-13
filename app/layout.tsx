import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next Js Project",
  description: "Create My Own Next JS",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "linkedin:image":
      "https://png.pngtree.com/element_our/png/20181011/linkedin-social-media-icon-design-template-vector-png_127013.jpg",
    "linkedin:card": "summary_large_image",
    "og:url": "project-nxt",
    "og:image":
      "https://png.pngtree.com/element_our/png/20181011/linkedin-social-media-icon-design-template-vector-png_127013.jpg",

    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
