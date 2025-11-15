"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  desc: string;
  image: string;
  reversed?: boolean;
  icon: LucideIcon;
}

export default function ServiceItem({ srv }: { srv: Service }) {
  const ref = useRef(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xParallax = useTransform(
    scrollYProgress,
    [0, 1],
    srv.reversed ? [50, 0] : [-50, 0]
  );

  return (
    <section
      ref={ref}
      className={`w-full min-h-[70vh] flex flex-col md:flex-row items-center px-6 md:px-10 py-16 ${
        srv.reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <motion.div
        style={{ x: xParallax }}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="relative z-20 w-full md:w-1/2 h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={srv.image}
          alt={srv.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        style={{ x: xParallax }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="relative z-20 w-full md:w-1/2 mt-10 md:mt-0 px-2 md:px-10 text-right"
      >
        <div className="max-w-lg space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 shadow"
          >
            <srv.icon className="w-5 h-5" />
            <span className="font-semibold">{srv.title}</span>
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-emerald-800">{srv.title}</h3>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">{srv.desc}</p>

          <div className="h-1 w-24 rounded-full bg-linear-to-r from-emerald-600 to-emerald-800" />
        </div>
      </motion.div>
    </section>
  );
}
