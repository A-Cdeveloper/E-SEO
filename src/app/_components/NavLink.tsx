"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const linkClassName = pathname === href ? "text-orange-normal" : "";

  console.log(href, pathname);

  return (
    <li className="w-full border-b border-white/10">
      <Link
        href={href}
        className={`p-2 block text-2xl uppercase hover:text-orange-normal transition-colors duration-500 ${linkClassName}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
