"use client";

import { motion } from "framer-motion";

type StarRatingProps = {
  value: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
};

export default function StarRating({
  value,
  onChange,
  disabled = false,
}: StarRatingProps) {
  return (
    <div
      className="flex items-center gap-1.5 sm:gap-2"
      role="radiogroup"
      aria-label="Rating"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value;

        return (
          <motion.button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} out of 5 stars`}
            disabled={disabled}
            onClick={() => onChange(star)}
            whileHover={!disabled ? { scale: 1.12, y: -2 } : undefined}
            whileTap={!disabled ? { scale: 0.92 } : undefined}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 18,
            }}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 sm:h-11 sm:w-11 ${
              isActive
                ? "border-blue-400/30 bg-blue-500/10 shadow-[0_6px_20px_rgba(37,99,235,0.12)]"
                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50"
            } ${
              disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            {/* Soft glow behind active star */}
            {isActive && (
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-1 rounded-lg bg-blue-400/10 blur-md"
                aria-hidden="true"
              />
            )}

            {/* Star */}
            <motion.span
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 20,
              }}
              className={`relative z-10 text-[22px] leading-none transition-colors duration-300 sm:text-[24px] ${
                isActive
                  ? "text-blue-500"
                  : "text-slate-300 group-hover:text-blue-400"
              }`}
            >
              ★
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
}