"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReviewCodeStep from "./ReviewCodeStep";
import ReviewForm from "./ReviewForm";
import ReviewSuccess from "./ReviewSuccess";

type ReviewStep = "code" | "review" | "success";

export default function CollectReviews() {
  const [step, setStep] = useState<ReviewStep>("code");
  const [projectCode, setProjectCode] = useState("");

  const handleCodeVerified = (code: string) => {
    setProjectCode(code);
    setStep("review");
  };

  const handleReviewSubmitted = () => {
    setStep("success");
  };

  const handleBackToCode = () => {
    setProjectCode("");
    setStep("code");
  };

  const handleDone = () => {
    setProjectCode("");
    setStep("code");
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-[110px]"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Client feedback
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            Share your experience.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7 lg:text-base">
            Completed a project with CodeDrip? Use your project code to leave
            a verified review.
          </p>
        </motion.div>

        {/* Step indicator */}
        {step !== "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-8 flex max-w-md items-center justify-center"
          >
            <StepIndicator
              number="01"
              label="Verify"
              active={step === "code"}
              completed={step === "review"}
            />

            <div
              className={`h-px w-12 sm:w-20 ${
                step === "review" ? "bg-blue-200" : "bg-slate-200"
              }`}
            />

            <StepIndicator
              number="02"
              label="Review"
              active={step === "review"}
              completed={false}
            />
          </motion.div>
        )}

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === "code" && (
            <motion.div
              key="code"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
            >
              <ReviewCodeStep onVerified={handleCodeVerified} />
            </motion.div>
          )}

          {step === "review" && (
            <motion.div
              key="review"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <ReviewForm
                projectCode={projectCode}
                onSubmitted={handleReviewSubmitted}
                onBack={handleBackToCode}
              />
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <ReviewSuccess onDone={handleDone} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* -------------------------------------------------
   Step Indicator
------------------------------------------------- */

type StepIndicatorProps = {
  number: string;
  label: string;
  active: boolean;
  completed: boolean;
};

function StepIndicator({
  number,
  label,
  active,
  completed,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl border text-[10px] font-bold transition-all duration-300 sm:h-10 sm:w-10 sm:text-[11px] ${
          active
            ? "border-blue-200 bg-blue-600 text-white shadow-[0_6px_20px_rgba(37,99,235,0.2)]"
            : completed
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : "border-slate-200 bg-white text-slate-400"
        }`}
      >
        {completed ? "✓" : number}
      </div>

      <span
        className={`text-[10px] font-bold uppercase tracking-[0.12em] sm:text-[11px] ${
          active
            ? "text-slate-900"
            : completed
              ? "text-emerald-600"
              : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}