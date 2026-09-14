"use client";

import { motion } from "framer-motion";

const PHONE_NUMBER = "+918945950843";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Business Websites",
  "Web Applications",
  "Full-Stack Development",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[650px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]"
      />

      {/* Subtle Grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}

        <div className="grid gap-10 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.6fr_0.8fr] lg:gap-16 lg:py-18">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {/* Logo */}

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <motion.span
                whileHover={{
                  rotate: -3,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[15px] font-black text-slate-950 shadow-md shadow-black/10 sm:h-12 sm:w-12 sm:text-[16px]"
              >
                C
              </motion.span>

              <span className="text-[18px] font-black tracking-[-0.03em] sm:text-[19px]">
                CodeDrip
              </span>
            </a>

            {/* Description */}

            <p className="mt-5 max-w-md text-[13px] leading-6 text-white/35 sm:text-[14px] sm:leading-6">
              Independent web development focused on modern websites, web
              applications, and digital experiences that work.
            </p>

            {/* Availability + Call */}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[11px] font-medium text-white/35 sm:text-[12px]">
                  Available for new projects
                </span>
              </div>

              <span className="h-4 w-px bg-white/10" />

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-[11px] font-semibold text-blue-400 transition-colors hover:text-blue-300 sm:text-[12px]"
              >
                Call me →
              </a>
            </div>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 sm:text-[11px]">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-[13px] font-medium text-white/40 transition-colors duration-300 hover:text-white sm:text-[14px]"
                >
                  <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />

                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.16,
              ease: "easeOut",
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 sm:text-[11px]">
              What I build
            </p>

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-[13px] font-medium text-white/40 sm:text-[14px]"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/25 sm:text-[12px]">
            © {new Date().getFullYear()} CodeDrip. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-white/20 sm:text-[12px]">
            <span>Designed & built with</span>

            <span className="font-semibold text-white/35">
              CodeDrip
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}