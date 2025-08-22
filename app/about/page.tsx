"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaptopCode, FaCloudUploadAlt, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Who We Are 🚀
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 text-lg leading-relaxed text-gray-300 text-center"
        >
          At <span className="font-semibold text-purple-300">CoMagTech</span>, we are not 
          just developers — we are creators of digital experiences. Our passion lies in 
          transforming complex ideas into elegant, functional, and visually stunning 
          solutions that people love to use. Whether it’s a startup dreaming big or an 
          established business seeking innovation, we help brands step boldly into the 
          future of the web. 
        </motion.p>

        {/* Skills & Icons */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FaReact size={40} className="text-cyan-400" />,
              title: "Frontend Development",
              desc: "Building sleek, responsive, and interactive user interfaces using React.js, Next.js, and Tailwind CSS."
            },
            {
              icon: <FaNodeJs size={40} className="text-green-400" />,
              title: "Backend & APIs",
              desc: "Crafting secure and scalable APIs with Node.js and MongoDB, ensuring smooth communication and efficiency."
            },
            {
              icon: <FaLaptopCode size={40} className="text-yellow-400" />,
              title: "Optimization",
              desc: "Delivering blazing-fast websites with responsive design, performance tuning, and SEO-friendly structures."
            },
            {
              icon: <FaCloudUploadAlt size={40} className="text-blue-400" />,
              title: "Deployment",
              desc: "Seamless hosting and deployment on Vercel, Netlify, Hostinger, and cloud platforms with CI/CD integrations."
            },
            {
              icon: <FaRocket size={40} className="text-pink-400" />,
              title: "Innovation",
              desc: "Pushing the limits with 3D experiences, animations, and immersive digital storytelling that captivate audiences."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="rounded-2xl bg-gray-800/50 p-6 shadow-lg hover:shadow-2xl hover:bg-gray-800/80 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-semibold text-fuchsia-400">Our Mission 🌍</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our goal is simple: to help brands and businesses thrive in the digital 
            landscape. We aim to craft functional, beautiful, and fast web experiences 
            that don’t just look good but deliver measurable impact. Every pixel and 
            every line of code matters to us — because your growth is our success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
