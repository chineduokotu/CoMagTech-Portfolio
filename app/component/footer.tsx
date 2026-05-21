import { Github, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/chinedu-okotu-5630a533b", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/ChineduOkotu", label: "GitHub", icon: Github },
  { href: "https://x.com/chineduoko54093?s=21", label: "X", icon: Twitter },
  { href: "https://wa.link/s8pfjy", label: "WhatsApp", icon: MessageCircle },
  { href: "https://www.instagram.com/okotuchinedu", label: "Instagram", icon: Instagram },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell border-t px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <a href="#hero" className="text-2xl font-black text-primary">
            CoMagTech
          </a>
          <p className="mt-4 max-w-sm leading-7 text-muted">
            Full-stack websites, product interfaces, and immersive web experiences by Chinedu Okotu.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em]">Quick links</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm transition hover-text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em]">Socials</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm">
        Copyright (c) {year} CoMagTech. All rights reserved.
      </div>
    </footer>
  );
}
