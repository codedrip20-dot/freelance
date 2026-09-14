"use client";

import Image from "next/image";

import { motion, type Variants } from "framer-motion";

const featuredProject = {
  title: "Pasupati Infrastructure",
  category: "Featured Client Work",
  description:
    "A modern corporate website built for a construction and infrastructure company, transforming their business requirements into a polished digital presence.",
  image: "/images/backgrounds/pasupati-industrial.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  link: "https://pasupatiinfrastructure.com/",
};

const secondaryProjects = [
  {
    title: "Rentz",
    category: "Property SaaS",
    description:
      "A full-stack property management platform connecting property owners, tenants, rentals, and marketplace workflows.",
    technologies: ["Next.js", "React", "Firebase", "Google Maps"],
    link: "https://rentzv2.netlify.app/",
  },
  {
    title: "Rentz Intelligence",
    category: "Technical Expertise",
    description:
      "An AI-powered property intelligence platform showcasing semantic search, vector search, hybrid ranking, REST APIs, and backend engineering.",
    technologies: [
      "Next.js",
      ".NET 10",
      "PostgreSQL",
      "pgvector",
      "Gemini",
    ],
    link: "https://rentz-intelligence.vercel.app/",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_40%)]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm sm:px-5 sm:py-2.5 sm:text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>

              Selected Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[52px] lg:text-[64px]"
          >
            Work that speaks{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              for itself.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-slate-500 sm:text-[16px] sm:leading-7"
          >
            A focused selection of client work, products, and technical
            projects built by CodeDrip.
          </motion.p>
        </motion.div>

        {/* =================================================
            FEATURED PROJECT
        ================================================== */}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 lg:mt-16"
        >
          <div className="group relative overflow-hidden rounded-[24px] border border-slate-800 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
              {/* Featured Content */}
              <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-blue-600/15 blur-[90px]"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-[80px]"
                />

                <div className="relative">
                  {/* Category */}
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-300 sm:text-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      {featuredProject.category}
                    </span>

                    <span className="hidden text-[9px] font-semibold uppercase tracking-[0.15em] text-white/25 sm:block">
                      01 / 03
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[30px] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
                    {featuredProject.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xl text-[14px] leading-[1.65] text-white/55 sm:text-[15px]">
                    {featuredProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium text-white/55 backdrop-blur-sm sm:text-[11px]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/link mt-7 inline-flex w-fit items-center gap-2.5 rounded-[11px] border border-white/10 bg-white/[0.06] px-4 py-3 text-[12px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 sm:px-5 sm:py-3.5 sm:text-[13px]"
                  >
                    View live project

                    <span className="text-[16px] text-blue-400 transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Featured Visual */}
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${featuredProject.title}`}
                className="relative min-h-[300px] overflow-hidden border-t border-white/10 lg:min-h-[480px] lg:border-l lg:border-t-0"
              >
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} project preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/45 via-transparent to-blue-500/10" />

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[14px] border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:px-5 sm:py-3.5">
                  <span className="text-[11px] font-medium text-white/65 sm:text-[12px]">
                    Client website
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[14px] text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SECONDARY PROJECTS
        ================================================== */}

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-shadow duration-500 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:p-8"
            >
              {/* Hover Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
              />

              <div className="relative">
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 1 ? "bg-blue-500" : "bg-slate-400"
                      }`}
                    />

                    {project.category}
                  </span>

                  <span className="text-[11px] font-semibold text-slate-300">
                    0{index + 2}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[26px] font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[30px]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-xl text-[14px] leading-[1.6] text-slate-500 sm:text-[15px]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-[7px] border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/50 sm:text-[11px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold text-slate-950 transition-colors duration-300 hover:text-blue-600 sm:text-[13px]"
                >
                  View live project

                  <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* =================================================
            CLOSING MESSAGE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-slate-200 sm:w-12" />

          <p className="text-[11px] font-medium text-slate-400 sm:text-[12px]">
            A small portfolio. Serious work.
          </p>

          <span className="h-px w-8 bg-slate-200 sm:w-12" />
        </motion.div>
      </div>
    </section>
  );
}