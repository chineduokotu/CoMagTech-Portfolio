"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";

const items = [
  { 
    title: "Frontend\nDevelopment", 
    gradient: "from-purple-500 to-fuchsia-500", 
    icon: <FaLaptopCode className="text-6xl text-purple-300 drop-shadow-lg" /> 
  },
  { 
    title: "Backend\nDevelopment", 
    gradient: "from-cyan-400 to-sky-500", 
    icon: <FaServer className="text-6xl text-cyan-300 drop-shadow-lg" /> 
  },
  { 
    title: "Mobile App\nDevelopment", 
    gradient: "from-amber-400 to-rose-500", 
    icon: <FaMobileAlt className="text-6xl text-amber-300 drop-shadow-lg" /> 
  },
];

export default function Design() {
  return ( 
    <section className="mx-auto max-w-7xl px-6 py-28">
      {/* ✨ Section Header */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20 text-center text-3xl md:text-5xl font-extrabold 
                   bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 
                   bg-clip-text text-transparent drop-shadow-xl"
      >
        🚀 Our Creative Services
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {items.map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.08, 
              rotateX: 8, 
              rotateY: -8, 
              boxShadow: "0px 25px 40px rgba(0,0,0,0.5)" 
            }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 
                        bg-gradient-to-br ${box.gradient} p-[2px]`}
          >
            <div className="flex flex-col items-center justify-center h-64 rounded-3xl 
                            bg-black/90 p-8 text-center space-y-6 transition-transform 
                            duration-500 group-hover:scale-105">
              {box.icon}
              <span className="whitespace-pre-line text-2xl font-extrabold leading-tight text-white">
                {box.title}
              </span>
            </div>

            {/* ✨ Glow effect */}
            <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 blur-3xl 
                            transition-opacity duration-500 group-hover:opacity-70" />
          </motion.div>
        ))}
      </div>
    </section>
   
  );
}
