"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#f8f8f8] overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-emerald-200/40 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300/40 blur-2xl rounded-full"
        animate={{ y: [0, 15, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-emerald-800"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
        >
          {t("contact.subtitle")}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: t("contact.line"),
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="h-1 bg-emerald-600 mx-auto mt-6 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 relative z-10 bg-green-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">
            {t("contact.info_title")}
          </h3>
          <div className="flex items-start gap-4">
            <MapPin className="text-emerald-700 w-6 h-6" />
            <p className="text-gray-700 leading-relaxed">
              {t("contact.address")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-emerald-700 w-6 h-6" />
            <p dir="ltr" className="text-gray-700">
              {t("contact.phone")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-emerald-700 w-6 h-6" />
            <p className="text-gray-700">{t("contact.email")}</p>
          </div>
          <iframe
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1334.461!2d15.07676712077252!3d32.37067411405995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sly!4v0000000000000"
          ></iframe>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const data = new FormData(form);

            const res = await fetch(
              "https://almozenfood.com/contact-mail.php",
              {
                method: "POST",
                body: data,
              }
            );

            const result = await res.json();

            if (result.success) {
              alert("✔️ تم الإرسال بنجاح");
              form.reset();
            } else {
              alert("❌ خطأ أثناء الإرسال");
            }
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.email")}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.phone")}
            </label>
            <input
              name="phone"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.message")}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 bg-emerald-600 text-white rounded-xl font-semibold shadow-md hover:bg-emerald-700 transition"
            type="submit"
          >
            {t("contact.form.submit")}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
