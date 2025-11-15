"use client";

import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full min-h-dvh py-24 md:py-32 bg-[#f8f8f8] overflow-hidden"
    >
      <motion.div
        className="absolute top-10 left-10 text-green-600 opacity-30"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          },
        }}
      >
        <Leaf size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 text-yellow-500 opacity-30"
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Wheat size={70} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 w-24 h-24 rounded-full bg-white shadow-xl opacity-50"
        animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            {t("about.title")}
          </h2>

          <p className="text-gray-700 text-lg leading-[1.9] mb-6 text-justify">
            {t("about.p1_part1")}{" "}
            <span className="font-bold text-gray-900">
              {t("about.p1_name")}
            </span>{" "}
            {t("about.p1_part2")}{" "}
            <span className="font-bold">{t("about.p1_highlight")}</span>{" "}
            {t("about.p1_part3")}
          </p>

          <p className="text-gray-700 text-lg leading-[1.9] text-justify">
            {t("about.p2")}
          </p>

          <motion.a
            href="#products"
            className="inline-block mt-8 px-10 py-4 rounded-full font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("about.cta")}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[360px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/about.jpg"
              alt={t("about.img_alt")}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.img
        src="/shapes/flower-one.png"
        alt={t("about.shape1_alt")}
        className="absolute bottom-0 w-40 h-auto z-200 left-0 pointer-events-none select-none"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
        }}
        viewport={{ once: true }}
      />

      <motion.img
        src="/shapes/flower-two.png"
        alt={t("about.shape2_alt")}
        className="absolute top-5 hidden sm:block w-32 h-auto right-0 pointer-events-none select-none"
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1.2, delay: 0.3, ease: [0.42, 0, 0.58, 1] },
        }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default About;
