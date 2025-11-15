"use client";

import { motion } from "framer-motion";
import { Apple, Milk, Wheat, Soup, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("products.categories.fruits"),
      icon: Apple,
      image: "/products/1.jpg",
    },
    {
      title: t("products.categories.canned"),
      icon: Soup,
      image: "/products/2.jpg",
    },
    {
      title: t("products.categories.grains"),
      icon: Wheat,
      image: "/products/3.webp",
    },
    {
      title: t("products.categories.dairy"),
      icon: Milk,
      image: "/products/4.jpg",
    },
    {
      title: t("products.categories.flour"),
      icon: Wheat,
      image: "/products/5.jpg",
    },
    {
      title: t("products.categories.oils"),
      icon: Droplets,
      image: "/products/6.cms",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15 },
    }),
  };

  return (
    <section
      id="products"
      className="relative w-full py-24 md:py-32 bg-white overflow-hidden"
    >
      <svg
        className="absolute top-0 left-0 w-full opacity-[0.15] pointer-events-none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#10b981"
          d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,106.7C672,85,768,75,864,96C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z"
        ></path>
      </svg>

      <motion.img
        src="/shapes/leaf.png"
        className="absolute top-20 right-10 w-16 opacity-40 blur-[1px]"
        animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.img
        src="/shapes/leaf.png"
        className="absolute bottom-20 left-10 w-20 opacity-40 blur-[1px]"
        animate={{ y: [0, 20, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="text-center relative z-10 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-emerald-800"
        >
          {t("products.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {t("products.subtitle")}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: t("products.line"),
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="h-1 bg-emerald-600 mx-auto mt-6 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10">
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 cursor-default transform-gpu"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-6 text-center space-y-3">
                <div className="flex justify-center">
                  <Icon className="w-8 h-8 text-emerald-700" />
                </div>

                <h3 className="text-xl font-bold text-emerald-800">
                  {cat.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("products.category_desc")}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
