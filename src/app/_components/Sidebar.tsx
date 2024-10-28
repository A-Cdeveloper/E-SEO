"use client";

import { usePathname } from "@/i18n/routing";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const t = useTranslations("website");

  return (
    <div
      className={`w-full lg:w-auto max-w-full lg:max-w-[350px] h-auto lg:h-screen flex flex-col pr-0 lg:pr-10 ${
        isHomePage ? "justify-center pt-10 lg:pt-0" : "justify-start pt-8"
      }`}
    >
      <Logo isHomePage={isHomePage} />
      <div className="px-4 mt-3 text-center lg:text-start">
        <p className="whitespace-pre-line text-sm">{t("intro")}</p>
      </div>
      {!isHomePage && <Navigation />}
    </div>
  );
};

export default Sidebar;
