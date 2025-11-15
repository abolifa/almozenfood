"use client";

import { motion } from "framer-motion";
import { Package, Snowflake, Globe2, Boxes } from "lucide-react";
import ServiceItem from "./service-item";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "import",
      title: t("services.items.import.title"),
      desc: t("services.items.import.desc"),
      icon: Package,
      image: "/services/service-1.jpg",
    },
    {
      id: "bulk",
      title: t("services.items.bulk.title"),
      desc: t("services.items.bulk.desc"),
      icon: Boxes,
      image: "/services/service-2.jpg",
      reversed: true,
    },
    {
      id: "storage",
      title: t("services.items.storage.title"),
      desc: t("services.items.storage.desc"),
      icon: Snowflake,
      image: "/services/service-3.jpg",
    },
    {
      id: "partners",
      title: t("services.items.partners.title"),
      desc: t("services.items.partners.desc"),
      icon: Globe2,
      image: "/services/service-4.webp",
      reversed: true,
    },
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    },
    viewport: { once: true, margin: "-100px" },
  });

  return (
    <section
      id="services"
      className="relative w-full bg-white pt-24 md:pt-32 pb-10 overflow-hidden"
    >
      <motion.div {...fadeUp()} className="text-center mb-20 relative z-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800">
          {t("services.title")}
        </h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          {t("services.subtitle")}
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: t("services.line"),
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="h-1 bg-emerald-600 mx-auto mt-6 rounded-full"
        />
      </motion.div>

      <div className="relative">
        {services.map((srv) => (
          <ServiceItem key={srv.id} srv={srv} />
        ))}
      </div>
    </section>
  );
}
