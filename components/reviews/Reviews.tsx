"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getApprovedReviews } from "@/firebase/reviews";
import type { Review } from "@/types/review";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const approvedReviews = await getApprovedReviews();
        setReviews(approvedReviews);
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, []);

  return (
    <section
      id="client-reviews"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-100/30 blur-[120px]"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-6xl">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            Client reviews
          </span>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            What clients say.
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7 lg:text-base">
            Real feedback from clients I&apos;ve had the opportunity to work
            with.
          </p>
        </motion.div>

        {/* ===================================================
            REVIEWS
        ==================================================== */}

        {isLoading ? (
          <LoadingState />
        ) : reviews.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-7">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={index}
              />
            ))}
          </div>
        )}

        {/* ===================================================
            TRUST LINE
        ==================================================== */}

        {!isLoading && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:mt-12 sm:text-[11px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            Verified client feedback

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            Real project experience
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   REVIEW CARD
========================================================= */

type ReviewCardProps = {
  review: Review;
  index: number;
};

function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:p-7 lg:p-8"
    >
      {/* Card glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-100/40 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-100/30 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative">
        {/* =================================================
            TOP ROW
        ================================================== */}

        <div className="flex items-start justify-between gap-4">
          {/* Client avatar */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-base font-bold text-blue-600 sm:h-14 sm:w-14 sm:text-lg">
            {getInitial(review.email)}
          </div>

          {/* Verified badge */}

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-600 sm:text-[10px]">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white">
              ✓
            </span>

            Verified
          </div>
        </div>

        {/* =================================================
            RATING
        ================================================== */}

        <div className="mt-6 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <span
              key={starIndex}
              className={
                starIndex < review.rating
                  ? "text-amber-400"
                  : "text-slate-200"
              }
            >
              ★
            </span>
          ))}

          <span className="ml-2 text-xs font-semibold text-slate-400 sm:text-[13px]">
            {review.rating}.0
          </span>
        </div>

        {/* =================================================
            REVIEW
        ================================================== */}

        <div className="mt-5">
          <span
            aria-hidden="true"
            className="text-4xl font-serif leading-none text-blue-100"
          >
            &ldquo;
          </span>

          <p className="mt-1 text-base font-medium leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
            {review.review}
          </p>
        </div>

        {/* =================================================
            CLIENT INFO
        ================================================== */}

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <div>
            <p className="text-sm font-bold text-slate-900 sm:text-[15px]">
              Verified Client
            </p>

            <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
              {maskEmail(review.email)}
            </p>
          </div>

          {/* Date */}

          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 sm:text-[11px]">
            {formatDate(review.createdAt)}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   LOADING STATE
========================================================= */

function LoadingState() {
  return (
    <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2">
      {[1, 2].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8"
        >
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 sm:h-14 sm:w-14" />

            <div className="h-7 w-20 rounded-full bg-slate-100" />
          </div>

          <div className="mt-6 h-5 w-28 rounded bg-slate-100" />

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full rounded bg-slate-100" />
            <div className="h-4 w-5/6 rounded bg-slate-100" />
            <div className="h-4 w-2/3 rounded bg-slate-100" />
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <div className="h-4 w-28 rounded bg-slate-100" />
            <div className="mt-2 h-3 w-36 rounded bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center sm:mt-14 sm:px-8"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
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
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-slate-900 sm:text-2xl">
        No reviews yet.
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 sm:text-[15px]">
        Client feedback will appear here once the first review has been
        approved.
      </p>
    </motion.div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getInitial(email: string): string {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return "C";
  }

  return trimmedEmail.charAt(0).toUpperCase();
}

function maskEmail(email: string): string {
  const trimmedEmail = email.trim();

  const [username, domain] = trimmedEmail.split("@");

  if (!username || !domain) {
    return "Verified client";
  }

  if (username.length <= 2) {
    return `${username.charAt(0)}***@${domain}`;
  }

  return `${username.charAt(0)}${"*".repeat(
    Math.min(username.length - 2, 4)
  )}${username.charAt(username.length - 1)}@${domain}`;
}

function formatDate(createdAt: unknown): string {
  if (!createdAt) {
    return "Recently";
  }

  try {
    // Firebase Timestamp
    if (
      typeof createdAt === "object" &&
      createdAt !== null &&
      "toDate" in createdAt &&
      typeof (createdAt as { toDate?: unknown }).toDate === "function"
    ) {
      const date = (
        createdAt as { toDate: () => Date }
      ).toDate();

      return date.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      });
    }

    // JavaScript Date
    if (createdAt instanceof Date) {
      return createdAt.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      });
    }

    return "Recently";
  } catch {
    return "Recently";
  }
}