
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const spaceGrotesk = Space_Grotesk({
subsets: ["latin"],
display: "swap",
variable: "--font-space-grotesk",
});

import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://co-mag-tech-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chinedu Okotu | Full-Stack Developer & Creative Engineer",
  description: "Professional portfolio for Chinedu Okotu, a full-stack developer building immersive web experiences with Next.js, React, Node.js, and Three.js.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Three.js", "Portfolio", "Chinedu Okotu", "CoMagTech", "Web Development"],
  openGraph: {
    title: "Chinedu Okotu | Full-Stack Developer & Creative Engineer",
    description: "Professional portfolio for Chinedu Okotu, a full-stack developer building immersive web experiences with Next.js, React, Node.js, and Three.js.",
    url: siteUrl,
    siteName: "Chinedu Okotu Portfolio",
    images: [
      {
        url: "/pro.png", 
        width: 800,
        height: 600,
        alt: "Chinedu Okotu - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinedu Okotu | Full-Stack Developer",
    description: "Building immersive web experiences with Next.js, React, Node.js, and Three.js.",
    images: ["/pro.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const setThemeScript = `
(function(){
  var storedTheme = window.localStorage.getItem('theme');
  var theme = storedTheme || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
