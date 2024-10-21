"use client";
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <div
      className={`w-full md:w-auto max-w-full md:max-w-[350px] h-auto md:h-screen flex flex-col pr-0 md:pr-10 ${
        isHomePage
          ? "justify-center pt-10 md:pt-0"
          : "justify-start pt-10 md:pt-40"
      }`}
    >
      <Logo isHomePage={isHomePage} />
      <div className="px-4 mt-3 text-center md:text-start">
        <p className="whitespace-pre-line text-sm">
          More than fifteen years of experience in programming and optimization
          websites/apps
        </p>
      </div>
      {!isHomePage && <Navigation />}
    </div>
  );
};

export default Sidebar;
