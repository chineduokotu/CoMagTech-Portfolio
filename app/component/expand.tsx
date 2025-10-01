"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Expand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0615] to-black py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* === Left Image === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/tec.jpg"
            alt="Explore"
            width={800}
            height={800}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* === Right Text === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Animated Gradient Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight 
              bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 
              bg-clip-text text-transparent animate-gradient"
          >
            Expand your horizons, explore ours.<br /> It’s all here.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-300 leading-relaxed"
          >
            Discover a world of possibilities with{" "}
            <span className="text-cyan-400 font-semibold">CoMagTech</span>.  
            We create seamless, high-performance digital experiences tailored to modern needs.  
            We don’t just build websites — <span className="text-fuchsia-400">we build experiences</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
