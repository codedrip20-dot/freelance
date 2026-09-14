"use client";

import { motion, type Variants } from "framer-motion";

const PHONE_NUMBER = "+918945950843";

const EMAIL = "utsavkarki0215@gmail.com";

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

const contactOptions = [
  {
    label: "Call me",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    label: "Email me at",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-150px] -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/35 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] right-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/25 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_42%)]"
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
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}

          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>

              Start a project
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-[44px] font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[54px] lg:text-[68px]"
          >
            Have something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              in mind?
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-slate-500 sm:text-[16px] sm:leading-7"
          >
            Tell me what you&apos;re building, what you need, or simply the
            idea you&apos;re exploring. We can figure out the next step
            together.
          </motion.p>
        </motion.div>

        {/* =================================================
            MAIN CONTACT CARD
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-12 max-w-[1100px] overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.14)] lg:mt-16"
        >
          {/* Card Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-cyan-500/8 blur-[100px]"
          />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                LEFT
            ================================================== */}

            <div className="p-8 sm:p-10 lg:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-400 sm:text-[11px]">
                Let&apos;s build
              </span>

              <h3 className="mt-5 max-w-2xl text-[28px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[38px]">
                From idea to a website people actually want to use.
              </h3>

              <p className="mt-5 max-w-2xl text-[14px] leading-6 text-white/45 sm:text-[16px] sm:leading-7">
                Whether you need a business website, a web application, or
                help bringing an existing idea to life, I&apos;m always open
                to discussing new projects.
              </p>

              {/* Availability */}

              <div className="mt-7 flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[12px] font-medium text-white/40 sm:text-[13px]">
                  Available for new projects
                </span>
              </div>

              {/* CTA */}

              <motion.a
                href="#contact"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-[10px] bg-blue-600 px-5 py-3 text-[12px] font-bold text-white shadow-md shadow-blue-600/15 transition-colors duration-300 hover:bg-blue-500 sm:px-6 sm:py-3.5 sm:text-[13px]"
              >
                Start a project

                <span className="text-[16px]">→</span>
              </motion.a>
            </div>

            {/* =================================================
                RIGHT
            ================================================== */}

            <div className="border-t border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 sm:text-[11px]">
                Contact directly
              </p>

              <div className="mt-6 space-y-3">
                {contactOptions.map((option) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    className="group flex min-h-[70px] items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.025] px-4 py-3.5 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.05] sm:min-h-[76px] sm:px-5"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-white/30 sm:text-[11px]">
                        {option.label}
                      </p>

                      <p className="mt-1 truncate text-[13px] font-bold text-white sm:text-[14px]">
                        {option.value}
                      </p>
                    </div>

                    <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-white/30 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-blue-400">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Response Note */}

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-[11px] leading-5 text-white/25 sm:text-[12px] sm:leading-5">
                  Prefer email or a quick call? Reach out directly and
                  let&apos;s discuss your project.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-10 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
            CodeDrip · Websites · Web Apps · Digital Products
          </p>
        </motion.div>
      </div>
    </section>
  );
}