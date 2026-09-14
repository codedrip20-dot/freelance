"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "@/components/contact/ContactModal";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openContact = () => {
    closeMenu();
    setIsContactOpen(true);
  };

  return (
    /*
     * IMPORTANT:
     * absolute = navbar belongs to the Hero visually.
     * It will NOT follow the user while scrolling.
     */
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
      <nav className="mx-auto w-full max-w-7xl">
        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}
        <div className="group relative flex h-[72px] items-center justify-between overflow-hidden rounded-[20px] border border-white/[0.12] bg-slate-950/65 px-5 shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:h-[78px] sm:px-6">
          {/* Subtle top light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
          />

          {/* Left atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-blue-500/[0.07] blur-3xl"
          />

          {/* Right atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/[0.045] blur-3xl"
          />

          {/* =================================================
              LOGO
          ================================================== */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group/logo relative z-10 flex items-center gap-3.5"
          >
            {/* Logo mark */}
            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[13px] border border-white/[0.12] bg-white/[0.07] shadow-[0_8px_28px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:h-[50px] sm:w-[50px]"
            >
              {/* Logo glow */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-blue-500/25 blur-md"
              />

              {/* Inner blue gradient */}
              <span
                aria-hidden="true"
                className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10"
              />

              <span className="relative text-[18px] font-black tracking-tight text-white drop-shadow-[0_0_9px_rgba(255,255,255,0.25)] sm:text-[20px]">
                C
              </span>
            </motion.div>

            {/* Online indicator */}
            <span className="absolute bottom-0.5 left-[36px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-slate-950 sm:left-[42px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.9)]" />
            </span>

            {/* Brand */}
            <div className="leading-none">
              <span className="block text-[18px] font-black tracking-[-0.025em] text-white sm:text-[20px]">
                CodeDrip
              </span>

              <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[0.2em] text-blue-200/40 sm:text-[9px]">
                Digital Development
              </span>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-[14px] border border-white/[0.07] bg-black/[0.16] p-1.5 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group/nav relative rounded-[10px] px-5 py-2.5 text-[14px] font-semibold text-white/50 transition-all duration-300 hover:text-white lg:px-5.5 lg:text-[15px]"
              >
                {/* Hover surface */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 scale-90 rounded-[10px] bg-white/[0.07] opacity-0 shadow-[0_0_22px_rgba(59,130,246,0.08)] transition-all duration-300 group-hover/nav:scale-100 group-hover/nav:opacity-100"
                />

                {/* Tiny blue indicator */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 transition-all duration-300 group-hover/nav:w-5 group-hover/nav:opacity-100"
                />

                {item.label}
              </a>
            ))}
          </div>

          {/* =================================================
              DESKTOP CONTACT CTA
          ================================================== */}
          <motion.button
            type="button"
            onClick={() => setIsContactOpen(true)}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group/cta relative hidden items-center gap-2.5 overflow-hidden rounded-[13px] border border-blue-400/20 bg-blue-600 px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_28px_rgba(37,99,235,0.24)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_34px_rgba(37,99,235,0.35)] sm:flex sm:text-[15px]"
          >
            {/* Shine */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-8 w-6 rotate-12 bg-white/20 blur-md transition-transform duration-700 group-hover/cta:translate-x-[140px]"
            />

            <span className="relative">Let&apos;s talk</span>

            <span className="relative text-[17px] text-blue-200 transition-transform duration-300 group-hover/cta:translate-x-0.5">
              ↗
            </span>
          </motion.button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/[0.10] bg-white/[0.05] text-white/70 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.09] md:hidden"
          >
            <span className="relative flex h-6 w-6 flex-col items-center justify-center">
              {/* Top */}
              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: 45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: -5,
                      }
                }
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute h-[2px] w-6 rounded-full bg-current"
              />

              {/* Middle */}
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="absolute h-[2px] w-6 rounded-full bg-current"
              />

              {/* Bottom */}
              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: -45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: 5,
                      }
                }
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute h-[2px] w-6 rounded-full bg-current"
              />
            </span>
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="relative mt-2.5 overflow-hidden rounded-[20px] border border-white/[0.11] bg-slate-950/90 p-3 shadow-[0_28px_75px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden"
            >
              {/* Menu glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/[0.08] blur-3xl"
              />

              {/* Menu header */}
              <div className="relative flex items-center justify-between border-b border-white/[0.07] px-4 py-4">
                <div>
                  <p className="text-[15px] font-bold text-white">
                    Navigation
                  </p>

                  <p className="mt-1.5 text-[10px] text-white/30">
                    Explore CodeDrip
                  </p>
                </div>

                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.8)]" />
                  Available
                </span>
              </div>

              {/* Links */}
              <div className="relative py-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.035,
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    className="group flex items-center justify-between rounded-[13px] px-4.5 py-4 text-[15px] font-semibold text-white/55 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{item.label}</span>

                    <span className="text-[17px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile contact CTA */}
              <motion.button
                type="button"
                onClick={openContact}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative mt-2 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-[13px] bg-blue-600 px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-500"
              >
                <span>Let&apos;s talk</span>

                <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================================================
            CONTACT MODAL
        ==================================================== */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </nav>
    </header>
  );
}