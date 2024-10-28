import NavLink from "./ui/NavLink";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("website");

  return (
    <nav className="mt-3 lg:mt-10 px-3">
      <ul className="flex flex-wrap">
        <NavLink href="/">{t("navigation.home")}</NavLink>
        <NavLink href="/about-us">{t("navigation.about")}</NavLink>
        <NavLink href="/portfolio">{t("navigation.portfolio")}</NavLink>
        <NavLink href="/contact">{t("navigation.contact")}</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
