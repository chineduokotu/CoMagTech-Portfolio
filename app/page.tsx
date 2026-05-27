"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Box,
  Code2,
  Cloud,
  Cpu,
  Database,
  Download,
  GitBranch,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Package,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Type,
  Twitter,
  WandSparkles,
  Wind,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "10+", label: "Client Collaborations" },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Layers3 },
      { name: "JavaScript", icon: TerminalSquare },
      { name: "Bootstrap", icon: Package },
      { name: "Material UI", icon: Box },
      { name: "Three.js", icon: Box },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: TerminalSquare },
      { name: "Express", icon: Server },
      { name: "PHP", icon: Code2 },
      { name: "Laravel", icon: Layers3 },
      { name: "Authentication", icon: ShieldCheck },
      { name: "API Architecture", icon: Cloud },
    ],
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    skills: [
      { name: "TypeScript", icon: Type },
      { name: "Git", icon: GitBranch },
      { name: "REST APIs", icon: Cloud },
      { name: "Deployment", icon: Rocket },
      { name: "Python", icon: Cpu },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQLite", icon: Database },
    ],
  },
  {
    title: "Mobile App",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "React Native", icon: Smartphone },
      { name: "Java", icon: Code2 },
      { name: "Swift", icon: Code2 },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Package },
      { name: "Kubernetes", icon: Layers3 },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
      { name: "Jenkins", icon: Rocket },
      { name: "Python", icon: TerminalSquare },
    ],
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "High-converting interfaces, dashboards, landing pages, and web apps built with React, Next.js, and Tailwind CSS.",
    icon: Braces,
  },
  {
    title: "Backend Development",
    description:
      "Secure API layers, authentication flows, integrations, and data-driven services that make the product dependable.",
    icon: Database,
  },
  {
    title: "Mobile App Development",
    description:
      "Responsive product experiences and mobile-first interfaces designed for speed, clarity, and repeated daily use.",
    icon: Smartphone,
  },
  {
    title: "3D & Motion Web",
    description:
      "Immersive Three.js scenes, product motion, animated sections, and interactive details that make brands memorable.",
    icon: WandSparkles,
  },
  {
    title: "AI Automation",
    description:
      "Integrating intelligent workflows, AI models, and automated operational logic to reduce manual tasks and scale efficiency.",
    icon: Cpu,
  },
  {
    title: "SEO & Deployment",
    description:
      "Search-optimized technical structure, performance auditing, smooth CI/CD pipelines, and secure cloud hosting setups.",
    icon: Rocket,
  },
];

const clients = [
  "Startups",
  "SMEs",
  "Creators",
  "Founders",
  "Agencies",
  "Product Teams",
  "Local Brands",
  "Remote Teams",
];

const filters = ["All", "Frontend", "Full-Stack", "Creative", "Tools"];

const projects = [
  {
    title: "Havital Properties",
    description:
      "A comprehensive real estate and property management platform offering land sales, home buying services, and investment opportunities.",
    category: "Full-Stack",
    tech: ["Next.js", "Tailwind CSS", "Real Estate"],
    live: "https://havitalproperties.com/",
    github: "https://github.com/ChineduOkotu",
    img: "/images/image-copy.png",
  },
  {
    title: "Simbi Props & Gadgets",
    description:
      "Nigeria's favourite gadget and content creation store, built for a seamless shopping experience.",
    category: "Full-Stack",
    tech: ["Next.js", "Tailwind CSS", "Ecommerce"],
    live: "https://simbiprops.com",
    github: "https://github.com/ChineduOkotu",
    img: "/images/image.png",
  },
  {
    title: "Document to Speech Converter",
    description:
      "Accessible text and document reader with a clean conversion workflow for students and professionals.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "APIs"],
    live: "https://document-text-to-speech-converter-7.onrender.com",
    github: "https://github.com/ChineduOkotu",
    img: "/images/speech.png",
  },
  {
    title: "Auth Experience",
    description:
      "Responsive login and signup flow built for polished onboarding and clean user validation.",
    category: "Frontend",
    tech: ["Next.js", "React", "CSS"],
    live: "https://login-signup-beta-mauve.vercel.app",
    github: "https://github.com/ChineduOkotu",
    img: "/images/login.jpg",
  },
  {
    title: "The Builders Hubb",
    description:
      "A premium engineering and electrical solutions platform offering professional services, equipment sales, and project management for modern infrastructure.",
    category: "Full-Stack",
    tech: ["Next.js", "Tailwind CSS", "Ecommerce"],
    live: "https://thebuildershubb.com/",
    github: "https://github.com/ChineduOkotu",
    img: "/images/builders.png",
  },
  {
    title: "Movie Discovery App",
    description:
      "Media browsing experience with rich imagery, category scanning, and an entertainment-first interface.",
    category: "Creative",
    tech: ["JavaScript", "CSS", "UX"],
    live: "/project/frontapp/ref.html",
    github: "https://github.com/ChineduOkotu",
    img: "/images/movie.jpg",
  },
];

const workTimeline = [
  {
    period: "2024 - Present",
    title: "Freelance Full-Stack Developer",
    detail:
      "Building responsive websites, dashboards, API-backed products, and interactive web experiences for businesses and creators.",
  },
  {
    period: "2023 - 2024",
    title: "Frontend Developer",
    detail:
      "Delivered React interfaces, landing pages, authentication flows, and performance-focused UI systems.",
  },
];

const educationTimeline = [
  {
    period: "Ongoing",
    title: "Modern Web Engineering",
    detail:
      "Deepening practical skill in React, Next.js, Node.js, TypeScript, Three.js, product design, and deployment workflows.",
  },
  {
    period: "Foundation",
    title: "Engineering and Software Development",
    detail:
      "A problem-solving foundation across systems thinking, web development, and modern JavaScript tooling.",
  },
];

const articles = [
  {
    title: "Why Every Business Needs a Website",
    summary:
      "Credibility, visibility, and why a website is still the center of a serious digital brand.",
    img: "/images/dim.jpg",
  },
  {
    title: "From Idea to Website",
    summary:
      "The discovery, design, development, and launch process we use to move ideas into production.",
    img: "/images/web.jpg",
  },
  {
    title: "Why React Is Our Go-To",
    summary:
      "How component architecture helps us build fast, scalable, and maintainable client work.",
    img: "/images/react.jpg",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinedu-okotu-5630a533b",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/ChineduOkotu", icon: Github },
  { label: "X", href: "https://x.com/chineduoko54093?s=21", icon: Twitter },
  { label: "WhatsApp", href: "https://wa.link/s8pfjy", icon: MessageCircle },
  {
    label: "Instagram",
    href: "https://www.instagram.com/okotuchinedu",
    icon: Instagram,
  },
];

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 5]} intensity={2.4} color="#00f5ff" />
      <pointLight position={[-5, -3, 3]} intensity={2} color="#a855f7" />
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh rotation={[0.45, 0.4, 0]}>
          <icosahedronGeometry args={[2.8, 2]} />
          <MeshDistortMaterial
            color="#5b21b6"
            emissive="#00f5ff"
            emissiveIntensity={0.35}
            metalness={0.8}
            roughness={0.18}
            distort={0.34}
            speed={1.6}
            wireframe
          />
        </mesh>
      </Float>
      <Stars
        radius={90}
        depth={48}
        count={1300}
        factor={3.2}
        saturation={0}
        fade
        speed={0.8}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.85}
      />
    </Canvas>
  );
}

function OrbitalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00f5ff" />
      <pointLight position={[-3, -2, 4]} intensity={1.4} color="#a855f7" />
      <Float speed={2.1} rotationIntensity={1.4} floatIntensity={1.4}>
        <mesh>
          <torusKnotGeometry args={[1.45, 0.36, 180, 18]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#a855f7"
            emissiveIntensity={0.72}
            metalness={0.7}
            roughness={0.2}
            wireframe
          />
        </mesh>
      </Float>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.4}
      />
    </Canvas>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sent, setSent] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3500);
  }

  return (
    <div className="overflow-hidden page-shell">
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
      >
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,15,0.96)_0%,rgba(10,10,15,0.78)_46%,rgba(10,10,15,0.36)_100%),linear-gradient(180deg,transparent_0%,#0a0a0f_94%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 inline-flex border-l border-current pl-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              CoMagTech / Lead Engineer
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight hero-title md:text-7xl xl:text-8xl">
              Full-stack web experiences with depth, speed, and intent.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 hero-copy md:text-xl">
              As a dedicated Website Developer in Benin City, Nigeria, we build polished websites, full-stack products, and immersive
              Three.js interfaces for businesses globally that need credibility, clarity,
              and execution.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-surface py-5 text-sm hero-copy">
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Three.js</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">
                View Work
                <ArrowUpRight size={18} />
              </a>
              <a href="https://wa.link/s8pfjy" target="_blank" rel="noreferrer" className="button-secondary bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/60 border-emerald-500/30">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a href="/cv.pdf" download className="button-secondary hidden sm:flex">
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto flex min-h-[520px] w-full max-w-md items-center justify-center"
          >
            <div className="absolute h-80 w-80 rounded-full border border-cyan-300/20 md:h-96 md:w-96" />
            <div className="absolute h-[19rem] w-[19rem] rounded-full border border-surface md:h-[25rem] md:w-[25rem]" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border hero-image-shell shadow-[0_32px_90px_rgba(0,0,0,0.45)] md:h-96 md:w-96">
              <Image
                src="/pro.png"
                alt="Lead Engineer Chinedu Okotu"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center text-sm uppercase tracking-[0.24em] text-muted">
              Lead Engineer
            </div>
          </motion.div>
        </div>
      </section>

      <LogoMarquee />

      <section id="about" className="section-shell">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel icon={<BriefcaseBusiness size={16} />} text="About" />
            <h2 className="section-title">
              We turn ideas into interfaces that can be trusted.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              At CoMagTech, our Lead Engineer Chinedu Okotu (a premier Website Developer in Nigeria) focuses on practical
              product outcomes: fast pages, clean flows, dependable APIs, and
              interfaces that make people confident enough to take action locally and internationally.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              Our strongest work sits at the intersection of engineering and
              presentation: polished frontends, useful backends, and selective
              3D details that add presence without distracting from the message.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="border-t border-surface pt-5"
                >
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[500px] overflow-hidden"
          >
            <div className="absolute inset-0">
              <OrbitalScene />
            </div>
            <div className="absolute bottom-8 left-1/2 h-px w-80 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section-shell section-band">
        <div className="mx-auto max-w-7xl">
          <SectionLabel icon={<Cpu size={16} />} text="Skills & Tech Stack" />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="section-title">
              A focused stack for building complete web products.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              We use the tools that keep projects maintainable after launch:
              component systems, server logic, clean APIs, version control, and
              performance-minded deployment.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, skills }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card group p-6 transition hover-border-accent"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-surface bg-surface text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-bold text-primary">{title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map(({ name, icon: SkillIcon }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-surface bg-surface-strong2 px-4 py-2 text-sm text-muted transition hover-border-accent"
                    >
                      <SkillIcon size={14} className="text-accent" />
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionLabel icon={<Layers3 size={16} />} text="Services" />
              <h2 className="section-title">
                How we help products move forward.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              From a focused marketing site to a full product interface, we
              support the build across design translation, frontend delivery,
              backend wiring, and launch polish.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card min-h-72 p-6 transition hover:border-cyan-300/35"
              >
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-surface bg-surface text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="mt-4 leading-7 text-muted">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Available for serious builds"
        title="Bring the brief. We will help turn it into a product people understand."
        action="Start a Conversation"
        href="#contact"
      />

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <SectionLabel icon={<Rocket size={16} />} text="Case Studies" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title max-w-3xl">Selected work</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                A focused set of product interfaces, business websites, and
                utility builds.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-button ${activeFilter === filter ? "filter-button-active" : ""}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                className="group glass-card overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs text-accent backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-surface bg-surface-strong2 px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <a
                      href={project.live}
                      target={
                        project.live.startsWith("http") ? "_blank" : undefined
                      }
                      className="project-link"
                    >
                      Live <ArrowUpRight size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub <Github size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#contact" className="button-secondary">
              View All Projects
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Testimonial />

      <section id="resume" className="section-shell section-band">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel icon={<Download size={16} />} text="Resume" />
              <h2 className="section-title">Experience and education</h2>
            </div>
            <a href="/cv.pdf" download className="button-primary w-fit">
              <Download size={18} />
              Download Full CV
            </a>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <Timeline title="Work Experience" items={workTimeline} />
            <Timeline title="Education" items={educationTimeline} />
          </div>
        </div>
      </section>

      <section id="blog" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <SectionLabel icon={<Globe2 size={16} />} text="Blog" />
          <h2 className="section-title max-w-3xl">
            Notes from the build process
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Brief, practical writing on web strategy, product craft, and
            development decisions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{article.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{article.summary}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent hover-text-accent"
                  >
                    Read insight <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell section-band">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel icon={<Mail size={16} />} text="Contact" />
            <h2 className="section-title">
              Let&apos;s build something worth showing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Tell us what you are trying to launch, fix, or improve. We will
              help shape the interface, build the product, and keep the
              execution clean.
            </p>
            <div className="mt-8 inline-flex border-l border-emerald-500 pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 dark:text-emerald-400">
              Open to selected projects
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="field"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="field"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="field mt-4 min-h-44 resize-none"
              name="message"
              placeholder="Message"
              required
            />
            <button
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
              type="submit"
            >
              {sent ? "Message ready to send" : "Send Message"}
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

function LogoMarquee() {
  const repeated = [...clients, ...clients];

  return (
    <section className="border-y border-surface bg-surface-strong2 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-muted">
          Built for teams like
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {repeated.map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex h-16 min-w-44 items-center justify-center rounded-xl border border-surface bg-surface-strong2 px-6 text-sm font-bold uppercase tracking-[0.2em] text-muted"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CtaBand({
  eyebrow,
  title,
  action,
  href,
}: {
  eyebrow: string;
  title: string;
  action: string;
  href: string;
}) {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border panel-surface p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
        </div>
        <a href={href} className="button-primary w-fit">
          {action}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <SectionLabel icon={<MessageCircle size={16} />} text="Testimonial" />
          <h2 className="section-title">
            Clear communication, clean delivery.
          </h2>
        </div>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-2xl font-medium leading-10 text-primary md:text-3xl">
            &ldquo;Chinedu brings strong attention to detail, responds quickly,
            and turns rough ideas into interfaces that look professional and
            feel easy to use.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-surface bg-surface-strong2">
              <Image
                src="/images/chine.jpg"
                alt="Client profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-primary">Project Collaborator</p>
              <p className="text-sm text-muted">Founder, digital business</p>
            </div>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: { period: string; title: string; detail: string }[];
}) {
  return (
    <div className="glass-card p-6 md:p-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="relative mt-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-surface">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8"
          >
            <span className="absolute left-0 top-2 h-4 w-4 rounded-full border border-accent bg-surface" />
            <div className="text-sm font-semibold text-accent">
              {item.period}
            </div>
            <h4 className="mt-2 text-xl font-bold text-primary">
              {item.title}
            </h4>
            <p className="mt-3 leading-7 text-muted">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 border-l border-current pl-4 text-sm font-semibold uppercase tracking-[0.22em] section-label">
      {icon}
      {text}
    </div>
  );
}
