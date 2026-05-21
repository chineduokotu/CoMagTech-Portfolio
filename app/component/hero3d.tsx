"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";

function Big3DObject() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      {/* Giant Torus Knot */}
    
      <torusKnotGeometry args={[3.5, 1, 300, 32]} />
      <meshStandardMaterial
        color={"#a855f7"}
        emissive={"#9333ea"}
        emissiveIntensity={1.2}
        metalness={2}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (<div className="des">
    <section className="relative grid min-h-[100vh] place-items-center overflow-hidden">
      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={2} color={"#ff00ff"} />
          <pointLight position={[-5, -5, -5]} intensity={1.5} color={"#00ffff"} />

          {/* Big Animated Torus Knot */}
          <Big3DObject />

          {/* Stars for space vibe */}
          <Stars radius={100} depth={50} count={1000} factor={4} fade />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* TEXT LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight md:text-7xl text-white"
          >
            We Build {" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Future-Ready Websites
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-xl text-xl text-gray-300"
          >
            Not just websites — but immersive experiences powered by React,
            Next.js, 3D motion, and cutting-edge design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/project"
              className="rounded-2xl px-6 py-3 font-semibold text-black bg-white hover:bg-gray-200 transition"
            >
              Explore Projects
            </a>
            <a
              href="/contact"
              className="rounded-2xl px-6 py-3 font-semibold border border-white/40 text-white hover:border-white/80"
            >
              Let’s Work Together
            </a>
          </motion.div>
        </div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative mx-auto aspect-square w-64 md:w-80"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#a855f7,#22d3ee,transparent)] blur-3xl animate-spin-slow" />
          <Image
            src="/pro.png"
            alt="Chinedu"
            fill
            className="rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
     </div>
  );
}
