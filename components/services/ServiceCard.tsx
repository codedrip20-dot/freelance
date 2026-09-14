"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ContactModal from "@/components/contact/ContactModal";

import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const isPopular = service.popular;

  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => {
    setIsContactOpen(true);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        whileHover={{ y: -4 }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-white p-6 sm:p-7 ${
          isPopular
            ? "border-blue-200 shadow-[0_14px_40px_rgba(37,99,235,0.09)]"
            : "border-slate-200/80 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
        }`}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-all duration-500 ${
            isPopular
              ? "bg-blue-300/20 opacity-100 group-hover:scale-125"
              : "bg-blue-200/0 opacity-0 group-hover:bg-blue-200/15 group-hover:opacity-100"
          }`}
        />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-[10px] border text-[11px] font-bold ${
              isPopular
                ? "border-blue-100 bg-blue-50 text-blue-600"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            0{service.level}
          </div>

          {isPopular ? (
            <span className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Popular
            </span>
          ) : (
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              {service.shortName}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="relative z-10 mt-6">
          <h3 className="text-[26px] font-bold leading-tight tracking-[-0.035em] text-slate-950">
            {service.name}
          </h3>

          <p className="mt-3 text-[14px] leading-[1.6] text-slate-500">
            {service.description}
          </p>
        </div>

        {/* Price */}
        <div
          className={`relative z-10 mt-6 rounded-[15px] border px-5 py-4 ${
            isPopular
              ? "border-blue-100 bg-blue-50/35"
              : "border-slate-100 bg-slate-50/60"
          }`}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Starting from
          </p>

          <p className="mt-1 text-[27px] font-bold tracking-tight text-slate-950">
            {service.price}
          </p>
        </div>

        {/* Ideal For */}
        <div className="relative z-10 mt-6">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Ideal for
            </span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="flex flex-wrap gap-2">
            {service.idealFor.map((item) => (
              <span
                key={item}
                className="rounded-[7px] border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="relative z-10 mt-6">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Included
            </span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[11px] leading-[1.5] text-slate-600"
              >
                <span
                  className={`mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${
                    isPopular
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative z-10 mt-auto pt-7">
          <motion.button
            type="button"
            onClick={openContact}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`flex w-full items-center justify-center gap-2 rounded-[12px] px-4 py-3.5 text-[14px] font-bold transition-all duration-300 ${
              isPopular
                ? "bg-blue-600 text-white shadow-[0_6px_18px_rgba(37,99,235,0.16)] hover:bg-blue-700"
                : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <span>{service.cta}</span>

            <motion.span
              whileHover={{ x: 2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 16,
              }}
              className="text-[17px]"
            >
              →
            </motion.span>
          </motion.button>
        </div>

        {/* Bottom accent */}
        <div
          aria-hidden="true"
          className={`absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full ${
            isPopular ? "bg-blue-600" : "bg-slate-300"
          }`}
        />
      </motion.article>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}