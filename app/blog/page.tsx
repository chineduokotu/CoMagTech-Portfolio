"use client";
import { motion } from "framer-motion";
import BlogCard from "../component/blogcard";

export default function BlogPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      {/* === Background Glow === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0d0d1a] to-black opacity-95" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      {/* === Blog Header === */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="mb-6 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-text">
          CoMagTech Blog
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to the{" "}
          <span className="font-semibold text-red-400">CoMagTech Blog</span> — 
          your hub for fresh ideas, expert insights, and inspiring stories in the digital world.  
          Dive into <strong>web development, design, entrepreneurship, and technology</strong>.  
          Whether you’re a business owner, a budding developer, or a tech enthusiast,  
          this space empowers you with knowledge that sparks innovation and growth. 🌍✨
        </p>
      </motion.div>

      {/* === Blog Cards === */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
        className="grid gap-10 md:grid-cols-3"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <BlogCard
            img="/images/dim.jpg"
            title="Why Every Business Needs a Website in 2025"
            subtitle="The Digital Shift"
            des="In today’s hyper-connected world, having a website is no longer optional — 
            it’s the foundation of every serious business. A website builds trust, gives 
            24/7 presence, and opens doors to global markets. Discover why a well-structured 
            site in 2025 isn’t just visibility — it’s survival."
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <BlogCard
            img="/images/web.jpg"
            title="From Idea to Website: My Process"
            subtitle="Turning Visions into Reality"
            des="Every great website begins with a vision. My process — Discovery, Design, 
            Development, and Launch — ensures websites that not only look amazing but 
            perform seamlessly, setting you apart in a competitive digital landscape."
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <BlogCard
            img="/images/react.jpg"
            title="Why React.js is My Go-To"
            subtitle="Power of React"
            des="React.js is my framework of choice for fast, scalable, and user-friendly 
            apps. With its component-driven structure, seamless integration with Next.js, 
            and a massive global community, it guarantees performance and future-proof 
            solutions for clients."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
