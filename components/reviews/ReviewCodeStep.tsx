"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { verifyReviewCode } from "@/firebase/reviews";

type ReviewCodeStepProps = {
  onVerified: (code: string) => void;
};

export default function ReviewCodeStep({
  onVerified,
}: ReviewCodeStepProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedCode = code.trim();

    if (!normalizedCode) {
      setError("Please enter your project verification code.");
      return;
    }

    setError("");
    setIsVerifying(true);

    try {
      const isValid = await verifyReviewCode(normalizedCode);

      if (!isValid) {
        setError(
          "That code could not be verified. Please check the code and try again."
        );
        return;
      }

      onVerified(normalizedCode);
    } catch (error) {
      console.error("Review code verification failed:", error);

      setError(
        "Something went wrong while verifying your code. Please try again."
      );
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-xl"
    >
      {/* =====================================================
          CARD
      ====================================================== */}

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        {/* Ambient glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-100/60 blur-[80px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-48 w-48 rounded-full bg-cyan-100/40 blur-[80px]"
        />

        <div className="relative">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="text-center">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm sm:text-[10px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>

              Client verification
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-[34px]">
              Leave a review
            </h2>

            {/* Description */}

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              Enter the project completion code you received after your
              project was completed.
            </p>
          </div>

          {/* =================================================
              VERIFICATION FORM
          ================================================== */}

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Label */}

            <label
              htmlFor="review-code"
              className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
            >
              Project verification code
            </label>

            {/* Input */}

            <div className="relative">
              <input
                id="review-code"
                type="text"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setError("");
                }}
                placeholder="Enter your code"
                autoComplete="off"
                disabled={isVerifying}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "review-code-error" : undefined}
                className={`h-13 w-full rounded-xl border bg-slate-50 px-4 text-base font-semibold uppercase tracking-[0.12em] text-slate-950 outline-none transition-all duration-300 placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-300 focus:bg-white focus:ring-4 sm:h-14 sm:px-5 sm:text-[17px] ${
                  error
                    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-400 focus:ring-blue-100/70"
                }`}
              />
            </div>

            {/* Error */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  id="review-code-error"
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-3 text-sm text-red-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[9px] font-bold">
                      !
                    </span>

                    <span>{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                SUBMIT BUTTON
            ================================================== */}

            <motion.button
              type="submit"
              disabled={isVerifying}
              whileHover={!isVerifying ? { y: -2 } : undefined}
              whileTap={!isVerifying ? { scale: 0.98 } : undefined}
              className="group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.28)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-13 sm:text-[15px]"
            >
              {isVerifying ? (
                <>
                  {/* Loading spinner */}

                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                  />

                  Verifying code...
                </>
              ) : (
                <>
                  Verify project

                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 16,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </>
              )}
            </motion.button>
          </form>

          {/* =================================================
              HELPER NOTE
          ================================================== */}

          <div className="mt-6 border-t border-slate-100 pt-5 text-center">
            <p className="text-xs leading-5 text-slate-400 sm:text-[13px]">
              Your verification code is provided after your project has
              been completed.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECURITY / TRUST INDICATOR
      ====================================================== */}

      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        Verified client access

        <span className="h-1 w-1 rounded-full bg-slate-300" />

        Code required
      </div>
    </motion.div>
  );
}