"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const projectTypes = [
  "Business Website",
  "Web Application",
  "Custom Software",
  "SaaS Product",
  "Other",
];

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  // Close with Escape + prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const handleClose = () => {
    if (status === "loading") return;

    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}

          <motion.button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 cursor-default bg-slate-950/75 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/[0.12] bg-slate-950/95 shadow-2xl shadow-blue-950/30"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* Modal glow */}

            <div className="pointer-events-none absolute -top-36 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Header */}

            <div className="relative border-b border-white/[0.08] px-6 py-6 sm:px-8 sm:py-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  {/* Brand */}

                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-[12px]">
                      CodeDrip
                    </span>
                  </div>

                  {/* Heading */}

                  <h2
                    id="contact-modal-title"
                    className="text-2xl font-semibold tracking-tight text-white sm:text-[30px]"
                  >
                    Let&apos;s build something.
                  </h2>

                  {/* Description */}

                  <p className="mt-2 text-[13px] leading-5 text-slate-400 sm:text-[15px] sm:leading-6">
                    Tell me a little about your project and I&apos;ll get back
                    to you.
                  </p>
                </div>

                {/* Close button */}

                <button
                  type="button"
                  onClick={handleClose}
                  disabled={status === "loading"}
                  aria-label="Close"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="relative px-6 py-14 text-center sm:px-8 sm:py-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Success icon */}

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[18px] border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 sm:h-20 sm:w-20">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white sm:text-[28px]">
                    Message sent.
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-[14px] leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
                    Thanks for reaching out. I&apos;ll review your project and
                    get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-8 rounded-xl bg-blue-500 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-blue-400"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="relative space-y-5 px-6 py-6 sm:px-8 sm:py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Honeypot */}

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[12px] font-medium text-slate-300"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        maxLength={100}
                        className="w-full rounded-[13px] border border-white/[0.09] bg-white/[0.04] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.06]"
                      />
                    </div>

                    {/* Email */}

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[12px] font-medium text-slate-300"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        maxLength={200}
                        className="w-full rounded-[13px] border border-white/[0.09] bg-white/[0.04] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.06]"
                      />
                    </div>
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-[12px] font-medium text-slate-300"
                    >
                      Phone
                      <span className="ml-1 text-slate-600">
                        (a number we can call you on)
                      </span>
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      maxLength={20}
                      autoComplete="tel"
                      className="w-full rounded-[13px] border border-white/[0.09] bg-white/[0.04] px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {/* Project Type */}

                  <div>
                    <label
                      htmlFor="project-type"
                      className="mb-2 block text-[12px] font-medium text-slate-300"
                    >
                      What are you looking to build?
                    </label>

                    <select
                      id="project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[13px] border border-white/[0.09] bg-slate-900 px-4 py-3.5 text-[15px] text-white outline-none transition focus:border-blue-400/50"
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[12px] font-medium text-slate-300"
                    >
                      Project details
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, timeline, or anything else..."
                      required
                      maxLength={5000}
                      rows={6}
                      className="w-full resize-none rounded-[13px] border border-white/[0.09] bg-white/[0.04] px-4 py-3.5 text-[15px] leading-6 text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {/* Error */}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-[13px] border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-[13px] text-red-300"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-2.5 rounded-[13px] bg-blue-500 px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message

                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Privacy note */}

                  <p className="text-center text-[11px] leading-5 text-slate-600">
                    Your information is only used to respond to your project
                    inquiry.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}