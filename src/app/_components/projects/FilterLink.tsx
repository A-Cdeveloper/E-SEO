"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const FilterLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const isActive = href === searchParams.get("filter");

  if (href === "portfolio") {
    return (
      <Link
        href={pathname}
        className={`no-underline ${
          !searchParams.get("filter") ? "text-orange-normal" : ""
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={pathname + "?" + createQueryString("filter", href)}
      className={`no-underline ${isActive ? "text-orange-normal" : ""}`}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
