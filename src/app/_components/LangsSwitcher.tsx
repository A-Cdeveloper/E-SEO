"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const LangLink = ({ locale }: { locale: string }) => {
  const activeLang = useLocale();
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const active = locale === activeLang;

  const onSwitchLang = (locale: string) => {
    // Replace the language code in the pathname (assumes it's the first segment)
    const newPathname = pathname.replace(/^\/\w{2}\b/, `/${locale}`);
    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return (
    <span
      className={`cursor-pointer border border-white/30 px-[8px] py-[0px] hover:bg-orange-normal ${
        active ? "bg-orange-normal" : ""
      }`}
      onClick={() => onSwitchLang(locale)}
    >
      {locale.toUpperCase()}
    </span>
  );
};

const LangsSwitcher = () => {
  return (
    <div className="absolute right-0 top-0 flex mt-1">
      <LangLink locale="en" />
      <LangLink locale="rs" />
    </div>
  );
};

export default LangsSwitcher;
