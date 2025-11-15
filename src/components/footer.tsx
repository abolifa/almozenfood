"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t("footer.links.home"), href: "#hero" },
    { label: t("footer.links.about"), href: "#about" },
    { label: t("footer.links.services"), href: "#services" },
    { label: t("footer.links.products"), href: "#products" },
    { label: t("footer.links.contact"), href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="absolute bottom-0 left-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img
            src="/meta/logo-icon.png"
            alt="Logo"
            className="w-28 mb-4 opacity-95"
          />
          <p className="text-gray-300 leading-relaxed text-sm text-justify">
            {t("footer.about_text")}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-emerald-400">
            {t("footer.quick_links")}
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {links.map((link) => (
              <li key={link.href} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-emerald-400">
            {t("footer.contact_title")}
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-emerald-400 w-5 h-5" />
              {t("footer.address")}
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-emerald-400 w-5 h-5" />
              <a
                dir="ltr"
                href={`tel:${t("footer.phone")}`}
                className="underline"
              >
                {t("footer.phone")}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-emerald-400 w-5 h-5" />
              <a href={`mailto:${t("footer.email")}`} className="underline">
                {t("footer.email")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-center text-emerald-400">
            {t("footer.follow_us")}
          </h3>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 transition"
            >
              <Globe2 size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-6">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
}
