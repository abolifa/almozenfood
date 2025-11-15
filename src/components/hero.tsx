"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const mediaSequence = [
  { type: "video", src: "/videos/video-2.mp4", duration: 10 },
  { type: "image", src: "/images/hero-2.jpg", duration: 8 },
];

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((p) => (p + 1) % mediaSequence.length),
      mediaSequence[index].duration * 1000
    );
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = mediaSequence[index];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        {current.type === "video" ? (
          <motion.video
            key={current.src}
            src={current.src}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key={current.src}
            style={{ backgroundImage: `url(${current.src})` }}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-black/40" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ delay: 1.2, duration: 2 }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.img
          src="/meta/logo-icon.png"
          alt={t("hero.logo_alt")}
          className="mx-auto w-44 md:w-56 h-auto mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />

        <motion.h1
          className="text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          className="mt-4 text-md md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block mt-7 px-12 py-4 rounded-full font-semibold text-white bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          <div className="flex items-center gap-2">
            <span>{t("hero.cta")}</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.a>
      </div>

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="scroll-indicator"
            className="absolute bottom-10 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-7 h-12 rounded-full border-2 border-white/70 flex justify-center items-start"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div
                className="absolute top-2 w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
