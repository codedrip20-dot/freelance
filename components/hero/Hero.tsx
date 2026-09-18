"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/918945950843";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-slate-950"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/backgrounds/hero-gradient-mesh.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-slate-950/55"
      />

      {/* Atmospheric blue light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_42%,rgba(37,99,235,0.18),transparent_38%)]"
      />

      {/* Foreground glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[48%] top-[42%] -z-10 hidden h-[340px] w-[580px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[130px] sm:block"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="relative max-w-3xl">
            {/* Glass panel */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-7 -inset-y-8 -z-10 rounded-[30px] border border-white/[0.10] bg-slate-950/[0.28] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-[3px] sm:-inset-x-9 sm:-inset-y-9"
            />

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="relative z-10"
            >
              {/* =================================================
                  BRAND BADGE
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/65 shadow-lg shadow-black/10 backdrop-blur-xl sm:text-[12px]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                </span>

                CodeDrip · Technology
              </motion.div>

              {/* =================================================
                  HEADING
              ================================================== */}

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.14,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="max-w-2xl text-[44px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[58px] lg:text-[72px]"
              >
                {/* First line */}

                <span className="relative inline-block text-white">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 hidden blur-[20px] opacity-20 sm:block"
                  >
                    We build digital
                  </span>

                  <span className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
                    We build digital
                  </span>
                </span>

                {/* Second line */}

                <span className="relative mt-1 block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent blur-[16px] opacity-25 sm:block"
                  >
                    experiences that work.
                  </span>

                  <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
                    experiences that work.
                  </span>
                </span>
              </motion.h1>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.24,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                className="mt-7 max-w-xl text-[15px] leading-7 text-white/55 sm:text-[16px] sm:leading-7 lg:text-[18px] lg:leading-8"
              >
                From modern business websites to powerful web applications
                and custom software, we turn ideas into fast, scalable
                digital products.
              </motion.p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.34,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                {/* Primary CTA */}

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 text-[14px] font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.22)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.32)] lg:h-13 lg:px-7 lg:text-[15px]"
                >
                  Start a Project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>

                {/* WhatsApp */}

                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.07] px-6 text-[14px] font-bold text-white/85 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.11] lg:h-13 lg:px-7 lg:text-[15px]"
                >
                  <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    W
                  </span>

                  WhatsApp Us

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </motion.a>
              </motion.div>

              {/* =================================================
                  TRUST LINE
              ================================================== */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.52,
                  duration: 0.45,
                }}
                className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium text-white/30 sm:text-[13px]"
              >
                <span>Responsive websites</span>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-white/20"
                />

                <span>Web applications</span>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-white/20"
                />

                <span>Custom software</span>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — PROFILE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 14 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.65,
              ease: "easeOut",
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Atmospheric glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[-95px] rounded-full bg-blue-500/[0.07] blur-[90px]"
              />

              {/* =================================================
                  OUTER RING
              ================================================== */}

              <div
                aria-hidden="true"
                className="hero-orbit hero-orbit-slow absolute inset-[-24px] rounded-full border border-blue-400/10 border-t-blue-400/40 border-r-cyan-400/20"
              />

              {/* =================================================
                  SECOND RING
              ================================================== */}

              <div
                aria-hidden="true"
                className="hero-orbit hero-orbit-reverse absolute inset-[-42px] rounded-full border border-white/[0.04] border-b-blue-400/20"
              />

              {/* =================================================
                  ORBITAL DOT
              ================================================== */}

              <div
                aria-hidden="true"
                className="hero-orbit-dot absolute inset-[-24px] z-20"
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
              </div>

              {/* =================================================
                  PROFILE FRAME
              ================================================== */}

              <div className="relative rounded-full border border-white/15 bg-white/[0.05] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full border border-white/10 bg-slate-900 sm:h-[290px] sm:w-[290px] lg:h-[340px] lg:w-[340px]">
                  <Image
                    src="/images/backgrounds/dp.PNG"
                    alt="Utsav Karki"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 230px, (max-width: 1024px) 290px, 340px"
                    className="object-cover"
                  />

                  {/* Cinematic lighting */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-950/30"
                  />

                  {/* Bottom shadow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/35 to-transparent"
                  />
                </div>
              </div>

              {/* =================================================
                  IDENTITY CARD
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-3.5 text-center shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <p className="text-[15px] font-bold tracking-[-0.02em] text-white sm:text-[16px]">
                  Utsav Karki
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-[11px]">
                  Developer from Sikkim
                </p>
              </motion.div>

              {/* =================================================
                  FLOATING TECH LABEL
              ================================================== */}

              <div className="hero-float absolute -right-7 top-10 hidden rounded-xl border border-white/10 bg-slate-950/70 px-5 py-3 shadow-xl backdrop-blur-xl sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Code
                </p>

                <p className="mt-1 text-[12px] font-semibold text-blue-300">
                  Build · Ship · Scale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent"
      />

      {/* Bottom edge */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* =========================================================
          LIGHTWEIGHT CSS ANIMATIONS
      ========================================================== */}

      <style jsx>{`
        .hero-orbit {
          transform: translateZ(0);
          will-change: transform;
        }

        .hero-orbit-slow {
          animation: hero-spin 28s linear infinite;
        }

        .hero-orbit-reverse {
          animation: hero-spin-reverse 38s linear infinite;
        }

        .hero-orbit-dot {
          transform: translateZ(0);
          will-change: transform;
          animation: hero-spin 8s linear infinite;
        }

        .hero-float {
          transform: translateZ(0);
          will-change: transform;
          animation: hero-float 4s ease-in-out infinite;
        }

        @keyframes hero-spin {
          from {
            transform: rotate(0deg) translateZ(0);
          }

          to {
            transform: rotate(360deg) translateZ(0);
          }
        }

        @keyframes hero-spin-reverse {
          from {
            transform: rotate(0deg) translateZ(0);
          }

          to {
            transform: rotate(-360deg) translateZ(0);
          }
        }

        @keyframes hero-float {
          0%,
          100% {
            transform: translateY(0) translateZ(0);
          }

          50% {
            transform: translateY(-6px) translateZ(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orbit,
          .hero-orbit-dot,
          .hero-float {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .hero-orbit-reverse {
            display: none;
          }

          .hero-orbit-slow {
            animation-duration: 36s;
          }

          .hero-orbit-dot {
            animation-duration: 10s;
          }
        }
      `}</style>
    </section>
  );
}