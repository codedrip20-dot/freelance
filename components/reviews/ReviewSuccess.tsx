"use client";

import { motion } from "framer-motion";

type ReviewSuccessProps = {
  onDone?: () => void;
};

export default function ReviewSuccess({ onDone }: ReviewSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-2xl"
    >
      {/* =====================================================
          SUCCESS CARD
      ====================================================== */}

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
        {/* Ambient glows */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-[90px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-20 h-56 w-56 rounded-full bg-cyan-100/40 blur-[90px]"
        />

        <div className="relative">
          {/* =================================================
              SUCCESS ICON
          ================================================== */}

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-emerald-200 bg-emerald-50 text-emerald-500 shadow-sm sm:h-24 sm:w-24"
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="sm:h-11 sm:w-11"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </motion.div>

          {/* =================================================
              BADGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.15,
            }}
            className="mt-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Review submitted
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.2,
            }}
            className="mt-5 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[42px]"
          >
            Thank you for your feedback.
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.25,
            }}
            className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7"
          >
            Your review has been received successfully. I really appreciate
            you taking the time to share your experience working with
            CodeDrip.
          </motion.p>

          {/* =================================================
              REVIEW STATUS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.3,
            }}
            className="mx-auto mt-7 max-w-md rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 sm:px-6 sm:py-5"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-blue-600" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 sm:text-[13px]">
                Review received
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
              Your feedback will be reviewed before being displayed publicly.
            </p>
          </motion.div>

          {/* =================================================
              DONE BUTTON
          ================================================== */}

          {onDone && (
            <motion.button
              type="button"
              onClick={onDone}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.35,
              }}
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 text-sm font-bold text-white shadow-[0_8px_25px_rgba(15,23,42,0.15)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] sm:h-13 sm:px-8 sm:text-[15px]"
            >
              Back to CodeDrip
              <span
                aria-hidden="true"
                className="transition-transform duration-300"
              >
                →
              </span>
            </motion.button>
          )}
        </div>
      </div>

      {/* =====================================================
          FOOTNOTE
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Thank you for working with CodeDrip
      </motion.div>
    </motion.div>
  );
}