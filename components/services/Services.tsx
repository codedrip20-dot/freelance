"use client";

import { motion, type Variants } from "framer-motion";

import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('/images/backgrounds/services-fluid.png')",
        }}
      />

      {/* Soft wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-slate-50/92"
      />

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-blue-200/15 blur-[130px]"
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
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-[11px]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_9px_rgba(37,99,235,0.45)]"
              />
              What we build
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[52px] lg:text-[64px]"
          >
            From simple websites to{" "}
            <span className="relative inline-block text-blue-600">
              complete software.
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-blue-600/20"
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-slate-500 sm:text-[16px] sm:leading-7"
          >
            Choose the level that fits your business. From polished websites
            to custom digital products, we build around what you actually
            need.
          </motion.p>
        </motion.div>

        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="relative mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10 xl:gap-12"
        >
          {/* Subtle connecting line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] right-[6%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
          />

          {services.map((service) => (
            <div
              key={service.id}
              className="relative z-10 min-w-0"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>

        {/* =================================================
            CUSTOM PROJECT CTA
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.45,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/65 px-6 py-6 shadow-[0_12px_38px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-500 hover:border-blue-200/80 hover:shadow-[0_16px_48px_rgba(37,99,235,0.07)] sm:px-8 sm:py-7">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />

            <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
              {/* Left */}
              <div className="flex items-center gap-4 text-center sm:text-left">
                {/* Icon */}
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-blue-100 bg-blue-50 text-lg text-blue-600 sm:flex">
                  ✦
                </div>

                <div>
                  <h3 className="text-[17px] font-bold tracking-tight text-slate-950 sm:text-[19px]">
                    Have something different in mind?
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-5 text-slate-500 sm:text-[13px]">
                    Tell me what you&apos;re trying to build and we&apos;ll
                    figure out the right solution.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-[11px] bg-slate-950 px-5 py-3 text-[12px] font-bold text-white shadow-md shadow-slate-950/10 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/20 sm:px-6 sm:py-3.5 sm:text-[13px]"
              >
                Let&apos;s discuss

                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  className="text-[16px]"
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            TRUST LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-9 flex items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:gap-5 sm:text-[11px]"
        >
          <span>Responsive</span>

          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-blue-300"
          />

          <span>Modern stack</span>

          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-blue-300"
          />

          <span>Business focused</span>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/30 to-transparent"
      />
    </section>
  );
}