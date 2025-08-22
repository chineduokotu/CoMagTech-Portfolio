"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
//import ThreeDText from "./3d";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* === Brand / Logo === */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
            CoMagTech
          </span>
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative transition-colors ${
                pathname === l.href
                  ? "text-purple-300"
                  : "text-gray-300 hover:text-purple-300"
              }`}
            >
              {l.label}
              {/* underline effect */}
              {pathname === l.href && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* === Mobile Toggle === */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-purple-300"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors ${
                  pathname === l.href
                    ? "text-purple-300 font-semibold"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
