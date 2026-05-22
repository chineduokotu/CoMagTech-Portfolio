"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#blog", label: "Blog", id: "blog" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme
      ? (storedTheme as "light" | "dark")
      : "dark";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleClick() {
    setOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <nav className="nav-shell fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#hero"
          onClick={handleClick}
          className="group text-lg font-black tracking-wide md:text-2xl"
        >
          <span className="text-primary">CoMagTech</span>
          <span className="ml-2 hidden text-xs font-bold uppercase tracking-[0.35em] text-muted sm:inline">
            Chinedu
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition nav-link ${
                active === link.id ? "nav-link-active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle hidden h-10 w-10 items-center justify-center rounded-full border lg:inline-flex"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full button-primary px-5 py-2.5 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface bg-surface-strong text-primary lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t mobile-menu-shell px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className={`rounded-2xl px-4 py-3 text-base font-semibold mobile-nav-link ${
                  active === link.id ? "mobile-nav-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleClick}
              className="mt-2 rounded-2xl button-primary px-4 py-3 text-base font-black"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                handleClick();
              }}
              className="mt-2 rounded-2xl border border-surface bg-surface px-4 py-3 text-base font-semibold text-primary"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
