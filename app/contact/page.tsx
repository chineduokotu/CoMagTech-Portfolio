"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// === 3D Rotating Sphere ===
function RotatingSphere() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <sphereGeometry args={[2, 200, 64]} />
      <meshStandardMaterial color="#edb5edff" wireframe />
    </mesh>
  );
}

// === Stagger Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000); // reset after 4s
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* === 3D Background === */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <RotatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* === Contact Form === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-2xl rounded-2xl bg-black/70 p-10 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h1>
        <p className="mt-2 text-center text-white/70">
          Let’s build something amazing together 🚀
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {/* Full Name */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-pink-400/40 transition"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaUser className="text-red-400" />
            </motion.div>
            <input
              className="w-full bg-transparent outline-none placeholder-gray-400"
              placeholder="Full Name"
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-green-400/40 transition"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaPhoneAlt className="text-green-400" />
            </motion.div>
            <input
              className="w-full bg-transparent outline-none placeholder-gray-400"
              placeholder="Phone Number"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-blue-400/40 transition"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaEnvelope className="text-blue-400" />
            </motion.div>
            <input
              type="email"
              className="w-full bg-transparent outline-none placeholder-gray-400"
              placeholder="Email Address"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.textarea
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder-gray-400 focus:border-cyan-400/40 transition"
            placeholder="Message"
            required
          />

          {/* Submit Button */}
          <motion.button
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileTap={{ scale: 0.92 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.6)",
            }}
            type="submit"
            className={`w-full rounded-xl px-6 py-3 font-semibold text-white transition 
              ${
                sent
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : "bg-gradient-to-r from-pink-500 to-purple-600"
              }`}
          >
            {sent ? "✅ Sent Successfully!" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
