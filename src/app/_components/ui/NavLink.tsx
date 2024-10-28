"use client";

import { Link, usePathname } from "@/i18n/routing";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const linkClassName = pathname === href ? "text-orange-normal" : "";

  return (
    <li className="w-full border-b border-white/10">
      <Link
        href={href}
        className={`p-2 block text-2xl uppercase hover:text-orange-normal transition-colors duration-500 ${linkClassName} no-underline`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
