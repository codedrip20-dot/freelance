"use client";

import { motion, type Variants } from "framer-motion";

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
    y: 16,
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

const strengths = [
  {
    number: "01",
    title: "Client-focused",
    description:
      "I build around your goals, requirements, and users — not just the code.",
  },
  {
    number: "02",
    title: "Built to perform",
    description:
      "Responsive interfaces, clean architecture, and practical technology choices.",
  },
  {
    number: "03",
    title: "Full-stack capable",
    description:
      "From polished frontend experiences to APIs, databases, auth, and deployment.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-28 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06),transparent_42%)]"
      />

      {/* Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300 sm:px-5 sm:py-2.5 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About CodeDrip
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[64px]"
          >
            More than just{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              writing code.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-[14px] leading-6 text-white/45 sm:text-[16px] sm:leading-7"
          >
            CodeDrip is my independent development brand, focused on turning
            ideas and business requirements into modern, reliable digital
            experiences.
          </motion.p>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-7">
          {/* =================================================
              STORY
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9 lg:p-10"
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px]"
            />

            <div className="relative">
              {/* Label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-400 sm:text-[11px]">
                The developer behind CodeDrip
              </p>

              {/* Story Heading */}
              <h3 className="mt-5 max-w-2xl text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-white sm:text-[30px] lg:text-[32px]">
                I care about the experience as much as the implementation.
              </h3>

              {/* Story Body */}
              <div className="mt-6 max-w-2xl space-y-5 text-[14px] leading-[1.7] text-white/45 sm:text-[15px] sm:leading-7">
                <p>
                  I&apos;m a developer who enjoys building products from the
                  ground up — from the initial idea and interface to the
                  functionality and final deployment.
                </p>

                <p>
                  My approach is simple: understand what needs to be built,
                  communicate clearly, and deliver something professional and
                  reliable across devices.
                </p>

                <p>
                  CodeDrip represents that approach — thoughtful development
                  without unnecessary complexity.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500/50 sm:w-12" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25 sm:text-[10px]">
                  Design • Develop • Deliver
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              STRENGTHS
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5"
          >
            {strengths.map((strength) => (
              <motion.div
                key={strength.number}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group relative min-h-[150px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.045] sm:min-h-[160px] sm:p-7"
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start gap-4">
                  {/* Number */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] text-[11px] font-bold text-blue-400 sm:h-12 sm:w-12 sm:text-[12px]">
                    {strength.number}
                  </span>

                  {/* Content */}
                  <div className="pt-0.5">
                    <h3 className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
                      {strength.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-[13px] leading-[1.6] text-white/40 sm:text-[14px] sm:leading-6">
                      {strength.description}
                    </p>
                  </div>
                </div>

                {/* Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-7"
        >
          <div className="flex flex-col gap-5 rounded-[22px] border border-blue-400/10 bg-blue-500/[0.045] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
            <div>
              <p className="text-[15px] font-bold text-white sm:text-[17px]">
                Have an idea worth building?
              </p>

              <p className="mt-1 text-[12px] text-white/35 sm:text-[13px]">
                Let&apos;s turn it into something real.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-blue-600 px-5 py-3 text-[12px] font-bold text-white shadow-md shadow-blue-600/15 transition-colors duration-300 hover:bg-blue-500 sm:px-6 sm:py-3.5 sm:text-[13px]"
            >
              Let&apos;s work together

              <span className="text-[16px]">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}