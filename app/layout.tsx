
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const spaceGrotesk = Space_Grotesk({
subsets: ["latin"],
display: "swap",
variable: "--font-space-grotesk",
});

export const metadata = {
title: "Chinedu Okotu | Full-Stack Developer & Creative Engineer",
description: "Professional portfolio for Chinedu Okotu, a full-stack developer building immersive web experiences with Next.js, React, Node.js, and Three.js.",
};


const setThemeScript = `
(function(){
  var storedTheme = window.localStorage.getItem('theme');
  var theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
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
