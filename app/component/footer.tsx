import Link from "next/link";

const socials = [
  { href: "https://www.facebook.com/share/1A4pH4bF1F/?mibextid=wwXIfr", label: "Facebook", icon: "/facebook.png" },
  { href: "https://wa.link/s8pfjy", label: "WhatsApp", icon: "/whatsapp.png" },
  { href: "https://x.com/chineduoko54093?s=21", label: "X", icon: "/twitter.png" },
  { href: "https://www.instagram.com/okotuchinedu", label: "Instagram", icon: "/instagram.png" },
  { href: "https://youtube.com/@chitech_coding", label: "YouTube", icon: "/youtube.png" },
  { href: "https://www.tiktok.com/@script.guru6", label: "TikTok", icon: "/tiktok.png" },
  { href: "https://www.linkedin.com/in/chinedu-okotu-5630a533b", label: "LinkedIn", icon: "/linkedin.png" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        
    
        {/* Socials */}
        <div className="flex flex-wrap items-center gap-6">
          {socials.map((s) => (
            <Link 
              key={s.href} 
              href={s.href} 
              target="_blank" 
              className="flex items-center gap-2 group"
            >
              <img 
                src={s.icon} 
                alt={s.label} 
                className="h-7 w-7 rounded-full border border-gray-700 p-1 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500"
              />
              <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {s.label}
              </span>
            </Link>
          ))}
        </div>
            {/* Copyright */}
        <p className="text-sm text-gray-500" id='foot'>
          © {year} <span className="font-semibold text-red-600">CoMagTech</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
