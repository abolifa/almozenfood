import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  scrolled?: boolean;
}

export function LanguageToggle({ scrolled }: LanguageToggleProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(savedLang);
    document.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-[#b8911a]/30 text-[#1a1a1a] hover:bg-[#b8911a]/10"
              : "border-white/30 text-white hover:bg-white/10"
          }`}
        >
          <Globe className="w-4 h-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={6}
        collisionPadding={12}
        className="w-44 rounded-lg shadow-lg border bg-white"
      >
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          <span>🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
          <span>🇸🇦</span> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
