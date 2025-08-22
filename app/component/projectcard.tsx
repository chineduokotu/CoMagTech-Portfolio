
"use client"
import Image from "next/image";
import { motion } from "framer-motion";


export default function ProjectCard({ title, href, img }: { title: string; href: string; img: string }) {
return (
<motion.a
href={href}
target={href.startsWith("http") ? "_blank" : undefined}
rel="noopener noreferrer"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="group relative overflow-hidden rounded-2xl border border-white/10"
>
<div className="relative aspect-[4/3]">
<Image src={img} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
<div className="absolute bottom-0 left-0 right-0 p-4">
<h3 className="text-lg font-semibold text-white">{title}</h3>
</div>
</motion.a>
);
}