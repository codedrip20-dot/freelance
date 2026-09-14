"use client";

import Image from "next/image";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, goals, audience, and what needs to be built.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape the experience, visual direction, and technical structure.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop, integrate, test, and refine your product with clean code.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploy everything production-ready and get your product moving.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/backgrounds/projects-depth.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-slate-950/88"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.045] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl sm:px-5 sm:py-2.5 sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_9px_rgba(96,165,250,0.7)]" />
              How it works
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[64px]"
          >
            From idea to{" "}
            <span className="relative inline-block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              launch.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-white/45 sm:text-[16px] sm:leading-7"
          >
            A simple, transparent process designed to keep your project
            moving without the usual development headaches.
          </motion.p>
        </motion.div>

        {/* =================================================
            PROCESS TIMELINE
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto mt-14 max-w-[1250px] lg:mt-20"
        >
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[23px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent lg:block"
          />

          {/* Steps */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative"
              >
                {/* Step marker */}
                <div className="relative z-10 flex lg:justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="relative flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-white/[0.10] bg-white/[0.055] text-[11px] font-bold text-blue-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.10]"
                  >
                    {/* Inner glow */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-1.5 rounded-[11px] bg-gradient-to-br from-blue-400/[0.08] to-transparent"
                    />

                    <span className="relative">{step.number}</span>
                  </motion.div>
                </div>

                {/* Step content */}
                <div className="mt-5 lg:text-center">
                  <div className="flex items-center gap-2.5 lg:justify-center">
                    <h3 className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
                      {step.title}
                    </h3>

                    {/* Tiny active indicator */}
                    {index === 1 && (
                      <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.08] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-blue-300">
                        Core
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 text-[13px] leading-[1.6] text-white/40 sm:text-[14px]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[23px] top-[48px] h-10 w-px bg-gradient-to-b from-blue-400/25 to-transparent sm:hidden"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM TRUST LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: 0.15,
          }}
          className="mx-auto mt-14 max-w-4xl lg:mt-16"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-t border-white/[0.07] pt-7 text-center sm:flex-row sm:gap-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25 sm:text-[11px]">
              Clear communication
            </span>

            <span
              aria-hidden="true"
              className="hidden h-1.5 w-1.5 rounded-full bg-blue-400/50 sm:block"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25 sm:text-[11px]">
              Regular progress
            </span>

            <span
              aria-hidden="true"
              className="hidden h-1.5 w-1.5 rounded-full bg-blue-400/50 sm:block"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25 sm:text-[11px]">
              No disappearing developers
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent"
      />
    </section>
  );
}