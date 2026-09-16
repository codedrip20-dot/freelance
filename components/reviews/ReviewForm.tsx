"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import StarRating from "./StarRating";
import { submitReview } from "@/firebase/reviews";

type ReviewFormProps = {
  projectCode: string;
  onSubmitted: () => void;
  onBack?: () => void;
};

export default function ReviewForm({
  projectCode,
  onSubmitted,
  onBack,
}: ReviewFormProps) {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const trimmedEmail = email.trim();
    const trimmedReview = review.trim();

    /* =====================================================
       VALIDATION
    ====================================================== */

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (rating === 0) {
      setError("Please select a rating.");
      return;
    }

    if (!trimmedReview) {
      setError("Please tell us about your experience.");
      return;
    }

    if (trimmedReview.length < 10) {
      setError("Your review should be at least 10 characters long.");
      return;
    }

    if (trimmedReview.length > 1000) {
      setError("Your review cannot exceed 1000 characters.");
      return;
    }

    /* =====================================================
       SUBMIT
    ====================================================== */

    setIsSubmitting(true);

    try {
      await submitReview({
        email: trimmedEmail,
        rating,
        review: trimmedReview,
        projectCode,
      });

      onSubmitted();
    } catch (error) {
      console.error("Review submission failed:", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Something went wrong while submitting your review. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
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
      className="relative mx-auto w-full max-w-2xl"
    >
      {/* =====================================================
          MAIN CARD
      ====================================================== */}

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        {/* Ambient glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-[90px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-cyan-100/40 blur-[90px]"
        />

        <div className="relative">
          {/* =================================================
              VERIFIED HEADER
          ================================================== */}

          <div className="flex flex-col items-center text-center">
            {/* Verified icon */}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-500 shadow-sm sm:h-16 sm:w-16"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </motion.div>

            {/* Badge */}

            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-600 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Project verified
            </span>

            {/* Heading */}

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-[34px]">
              Share your experience
            </h2>

            {/* Description */}

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              Your feedback helps future clients understand what it&apos;s
              like working with CodeDrip.
            </p>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6 sm:mt-9"
          >
            {/* =================================================
                EMAIL
            ================================================== */}

            <div>
              <label
                htmlFor="review-email"
                className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
              >
                Your email
              </label>

              <input
                id="review-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={200}
                disabled={isSubmitting}
                className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/70 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:px-5 sm:text-[15px]"
              />

              <p className="mt-2 text-[11px] leading-4 text-slate-400 sm:text-xs">
                Your email is used to verify your client review.
              </p>
            </div>

            {/* =================================================
                RATING
            ================================================== */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                  Your rating
                </label>

                {rating > 0 && (
                  <motion.span
                    key={rating}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs font-semibold text-blue-600 sm:text-sm"
                  >
                    {rating}/5
                  </motion.span>
                )}
              </div>

              <StarRating
                value={rating}
                onChange={(value) => {
                  setRating(value);
                  setError("");
                }}
                disabled={isSubmitting}
              />
            </div>

            {/* =================================================
                REVIEW
            ================================================== */}

            <div>
              <div className="mb-2.5 flex items-center justify-between">
                <label
                  htmlFor="review-message"
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
                >
                  Your experience
                </label>

                <span className="text-[10px] text-slate-300 sm:text-xs">
                  {review.length}/1000
                </span>
              </div>

              <textarea
                id="review-message"
                value={review}
                onChange={(event) => {
                  setReview(event.target.value);
                  setError("");
                }}
                placeholder="Tell us about your experience working with CodeDrip..."
                maxLength={1000}
                rows={6}
                disabled={isSubmitting}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-300 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/70 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4 sm:text-[15px] sm:leading-7"
              />
            </div>

            {/* =================================================
                ERROR
            ================================================== */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[9px] font-bold">
                      !
                    </span>

                    <span>{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Back */}

              {onBack ? (
                <button
                  type="button"
                  onClick={onBack}
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50 sm:h-13"
                >
                  ← Change code
                </button>
              ) : (
                <div />
              )}

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { y: -2 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.28)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-13 sm:px-7 sm:text-[15px]"
              >
                {isSubmitting ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    />

                    Submitting...
                  </>
                ) : (
                  <>
                    Submit review

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* =================================================
              FOOTNOTE
          ================================================== */}

          <div className="mt-7 border-t border-slate-100 pt-5 text-center">
            <p className="text-[11px] leading-5 text-slate-400 sm:text-xs">
              Thank you for taking the time to share your experience with
              CodeDrip.
            </p>
          </div>
        </div>
      </div>

      {/* Trust indicator */}

      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        Verified client review

        <span className="h-1 w-1 rounded-full bg-slate-300" />

        Code required
      </div>
    </motion.div>
  );
}