"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormStatus = "idle" | "loading" | "success" | "error";

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

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);

  const projectTypeRef = useRef<HTMLDivElement>(null);

  /*
   * Lock background scrolling while the modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /*
   * Close custom project dropdown when clicking outside.
   */
  useEffect(() => {
    if (!isProjectTypeOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectTypeRef.current &&
        !projectTypeRef.current.contains(event.target as Node)
      ) {
        setIsProjectTypeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectTypeOpen]);

  /*
   * Handle regular inputs.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  /*
   * Handle project type selection.
   */
  const handleProjectTypeSelect = (type: string) => {
    setFormData((previous) => ({
      ...previous,
      projectType: type,
    }));

    setIsProjectTypeOpen(false);

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  /*
   * Submit contact form.
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");
    setIsProjectTypeOpen(false);

    try {
      /*
       * IMPORTANT:
       * We are now using the same-origin Next.js API route.
       *
       * Old CDmon setup:
       * https://codedriptech.netlify.app/api/contact
       *
       * New setup:
       * /api/contact
       */
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

  /*
   * Close modal.
   */
  const handleClose = () => {
    if (status === "loading") return;

    setStatus("idle");
    setErrorMessage("");
    setIsProjectTypeOpen(false);

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-2 sm:items-center sm:p-5 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ============================================================
              BACKDROP
          ============================================================ */}

          <motion.button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 cursor-default bg-slate-950/80 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* ============================================================
              MODAL
          ============================================================ */}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="
              relative
              z-10
              flex
              w-full
              max-w-3xl
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.10]
              bg-slate-950/98
              shadow-2xl
              shadow-blue-950/40
              max-h-[calc(100dvh-1rem)]
              sm:max-h-[calc(100dvh-2.5rem)]
              sm:rounded-[28px]
            "
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* ==========================================================
                GLOW
            ========================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -top-40
                left-1/2
                h-80
                w-80
                -translate-x-1/2
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            {/* ==========================================================
                HEADER
            ========================================================== */}

            <div
              className="
                relative
                shrink-0
                border-b
                border-white/[0.08]
                px-5
                py-5
                sm:px-8
                sm:py-7
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  {/* Brand */}

                  <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                    <span
                      className="
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_12px_rgba(96,165,250,0.9)]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-blue-300
                        sm:text-[11px]
                      "
                    >
                      CodeDrip
                    </span>
                  </div>

                  {/* Heading */}

                  <h2
                    id="contact-modal-title"
                    className="
                      text-[25px]
                      font-semibold
                      leading-tight
                      tracking-[-0.02em]
                      text-white
                      sm:text-[32px]
                    "
                  >
                    Let&apos;s build something.
                  </h2>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-xl
                      text-[13px]
                      leading-5
                      text-slate-400
                      sm:mt-2.5
                      sm:text-[15px]
                      sm:leading-6
                    "
                  >
                    Tell us a little about your project and we&apos;ll get
                    back to you.
                  </p>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={handleClose}
                  disabled={status === "loading"}
                  aria-label="Close contact form"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    text-slate-400
                    transition-all
                    duration-200
                    hover:border-white/[0.16]
                    hover:bg-white/[0.08]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    sm:h-11
                    sm:w-11
                  "
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

            {/* ==========================================================
                CONTENT
            ========================================================== */}

            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ========================================================
                   SUCCESS STATE
                ======================================================== */

                <motion.div
                  key="success"
                  className="
                    relative
                    flex
                    min-h-[360px]
                    flex-1
                    flex-col
                    items-center
                    justify-center
                    overflow-y-auto
                    px-6
                    py-12
                    text-center
                    sm:px-8
                    sm:py-16
                  "
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                >
                  {/* Success icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-[20px]
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      text-emerald-400
                      shadow-lg
                      shadow-emerald-950/20
                      sm:h-20
                      sm:w-20
                    "
                  >
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

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      sm:text-[28px]
                    "
                  >
                    Message sent.
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-md
                      text-[14px]
                      leading-6
                      text-slate-400
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    Thanks for reaching out. We&apos;ll review your project
                    and get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="
                      mt-8
                      rounded-xl
                      bg-blue-500
                      px-6
                      py-3
                      text-[13px]
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                      transition-all
                      duration-200
                      hover:bg-blue-400
                      hover:shadow-blue-500/30
                    "
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                /* ========================================================
                   FORM
                ======================================================== */

                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="
                    relative
                    flex
                    min-h-0
                    flex-1
                    flex-col
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  {/* ====================================================
                      SCROLLABLE FORM CONTENT
                  ==================================================== */}

                  <div
                    className="
                      min-h-0
                      flex-1
                      overflow-y-auto
                      overscroll-contain
                      px-5
                      py-5
                      sm:px-8
                      sm:py-7
                    "
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

                    {/* ==================================================
                        NAME + EMAIL
                    ================================================== */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}

                      <div>
                        <label
                          htmlFor="contact-name"
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-slate-300
                            sm:text-[13px]
                          "
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
                          autoComplete="name"
                          className="
                            h-[52px]
                            w-full
                            rounded-[14px]
                            border
                            border-white/[0.09]
                            bg-white/[0.04]
                            px-4
                            text-[15px]
                            text-white
                            outline-none
                            placeholder:text-slate-600
                            transition-all
                            duration-200
                            focus:border-blue-400/50
                            focus:bg-white/[0.06]
                            focus:ring-2
                            focus:ring-blue-400/10
                            sm:h-[54px]
                          "
                        />
                      </div>

                      {/* Email */}

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-slate-300
                            sm:text-[13px]
                          "
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
                          autoComplete="email"
                          className="
                            h-[52px]
                            w-full
                            rounded-[14px]
                            border
                            border-white/[0.09]
                            bg-white/[0.04]
                            px-4
                            text-[15px]
                            text-white
                            outline-none
                            placeholder:text-slate-600
                            transition-all
                            duration-200
                            focus:border-blue-400/50
                            focus:bg-white/[0.06]
                            focus:ring-2
                            focus:ring-blue-400/10
                            sm:h-[54px]
                          "
                        />
                      </div>
                    </div>

                    {/* ==================================================
                        PHONE + PROJECT TYPE
                    ================================================== */}

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      {/* Phone */}

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-slate-300
                            sm:text-[13px]
                          "
                        >
                          Phone
                          <span className="ml-1 text-slate-600">
                            (optional)
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
                          className="
                            h-[52px]
                            w-full
                            rounded-[14px]
                            border
                            border-white/[0.09]
                            bg-white/[0.04]
                            px-4
                            text-[15px]
                            text-white
                            outline-none
                            placeholder:text-slate-600
                            transition-all
                            duration-200
                            focus:border-blue-400/50
                            focus:bg-white/[0.06]
                            focus:ring-2
                            focus:ring-blue-400/10
                            sm:h-[54px]
                          "
                        />
                      </div>

                      {/* Project Type */}

                      <div ref={projectTypeRef} className="relative">
                        <label
                          htmlFor="project-type"
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-slate-300
                            sm:text-[13px]
                          "
                        >
                          What are you looking to build?
                        </label>

                        {/* Custom selector */}

                        <button
                          id="project-type"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded={isProjectTypeOpen}
                          onClick={() =>
                            setIsProjectTypeOpen((previous) => !previous)
                          }
                          className={`
                            flex
                            h-[52px]
                            w-full
                            items-center
                            justify-between
                            rounded-[14px]
                            border
                            px-4
                            text-left
                            text-[15px]
                            outline-none
                            transition-all
                            duration-200
                            sm:h-[54px]
                            ${
                              isProjectTypeOpen
                                ? "border-blue-400/50 bg-white/[0.06] ring-2 ring-blue-400/10"
                                : "border-white/[0.09] bg-white/[0.04] hover:border-white/[0.14] hover:bg-white/[0.055]"
                            }
                          `}
                        >
                          <span
                            className={
                              formData.projectType
                                ? "text-white"
                                : "text-slate-600"
                            }
                          >
                            {formData.projectType ||
                              "Select a project type"}
                          </span>

                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`
                              shrink-0
                              text-slate-500
                              transition-transform
                              duration-200
                              ${
                                isProjectTypeOpen
                                  ? "rotate-180 text-blue-300"
                                  : ""
                              }
                            `}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        {/* Dropdown */}

                        <AnimatePresence>
                          {isProjectTypeOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -5,
                                scale: 0.98,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                                scale: 0.98,
                              }}
                              transition={{
                                duration: 0.15,
                              }}
                              className="
                                absolute
                                left-0
                                right-0
                                top-[calc(100%+8px)]
                                z-30
                                overflow-hidden
                                rounded-[14px]
                                border
                                border-white/[0.10]
                                bg-slate-900
                                p-1.5
                                shadow-2xl
                                shadow-black/40
                              "
                              role="listbox"
                            >
                              {projectTypes.map((type) => {
                                const isSelected =
                                  formData.projectType === type;

                                return (
                                  <button
                                    key={type}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() =>
                                      handleProjectTypeSelect(type)
                                    }
                                    className={`
                                      flex
                                      w-full
                                      items-center
                                      justify-between
                                      rounded-[10px]
                                      px-3
                                      py-3
                                      text-left
                                      text-[14px]
                                      transition-colors
                                      duration-150
                                      ${
                                        isSelected
                                          ? "bg-blue-500/10 text-blue-300"
                                          : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                                      }
                                    `}
                                  >
                                    {type}

                                    {isSelected && (
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="m5 12 4 4L19 6" />
                                      </svg>
                                    )}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Hidden native input for form semantics */}

                        <input
                          type="hidden"
                          name="projectType"
                          value={formData.projectType}
                          required
                        />
                      </div>
                    </div>

                    {/* ==================================================
                        MESSAGE
                    ================================================== */}

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <label
                          htmlFor="contact-message"
                          className="
                            block
                            text-[12px]
                            font-medium
                            text-slate-300
                            sm:text-[13px]
                          "
                        >
                          Project details
                        </label>

                        <span className="text-[10px] text-slate-600">
                          {formData.message.length}/5000
                        </span>
                      </div>

                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, timeline, budget, or anything else..."
                        required
                        maxLength={5000}
                        rows={5}
                        className="
                          min-h-[140px]
                          w-full
                          resize-y
                          rounded-[14px]
                          border
                          border-white/[0.09]
                          bg-white/[0.04]
                          px-4
                          py-3.5
                          text-[15px]
                          leading-6
                          text-white
                          outline-none
                          placeholder:text-slate-600
                          transition-all
                          duration-200
                          focus:border-blue-400/50
                          focus:bg-white/[0.06]
                          focus:ring-2
                          focus:ring-blue-400/10
                          sm:min-h-[150px]
                        "
                      />
                    </div>

                    {/* ==================================================
                        ERROR
                    ================================================== */}

                    <AnimatePresence>
                      {status === "error" && (
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
                          className="
                            mt-5
                            overflow-hidden
                            rounded-[14px]
                            border
                            border-red-400/20
                            bg-red-400/[0.06]
                            px-4
                            py-3
                            text-[13px]
                            leading-5
                            text-red-300
                          "
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ====================================================
                      STICKY SUBMIT FOOTER
                  ==================================================== */}

                  <div
                    className="
                      relative
                      shrink-0
                      border-t
                      border-white/[0.08]
                      bg-slate-950/95
                      px-5
                      py-4
                      backdrop-blur-xl
                      sm:px-8
                      sm:py-5
                    "
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                      {/* Privacy */}

                      <p
                        className="
                          order-2
                          text-center
                          text-[10px]
                          leading-4
                          text-slate-600
                          sm:order-1
                          sm:text-left
                          sm:text-[11px]
                        "
                      >
                        Your information is only used to respond to your
                        inquiry.
                      </p>

                      {/* Submit */}

                      <button
                        type="submit"
                        disabled={
                          status === "loading" ||
                          !formData.name ||
                          !formData.email ||
                          !formData.projectType ||
                          !formData.message
                        }
                        className="
                          group
                          order-1
                          flex
                          min-h-[50px]
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-[14px]
                          bg-blue-500
                          px-6
                          text-[14px]
                          font-semibold
                          text-white
                          shadow-lg
                          shadow-blue-500/20
                          transition-all
                          duration-200
                          hover:bg-blue-400
                          hover:shadow-blue-500/30
                          active:scale-[0.99]
                          disabled:cursor-not-allowed
                          disabled:bg-slate-800
                          disabled:text-slate-500
                          disabled:shadow-none
                          sm:order-2
                          sm:w-auto
                          sm:min-w-[170px]
                        "
                      >
                        {status === "loading" ? (
                          <>
                            <span
                              className="
                                h-4
                                w-4
                                animate-spin
                                rounded-full
                                border-2
                                border-white/30
                                border-t-white
                              "
                            />

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
                              className="
                                transition-transform
                                duration-200
                                group-hover:translate-x-0.5
                              "
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}