"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { useCallback } from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex justify-between items-start border-b border-t border-white/30 py-2 px-2 my-3">
      <span>
        <span>
          <Link href="/portfolio">All</Link>
        </span>
      </span>
      <span>
        <Link
          href={
            // <pathname>?sort=desc
            pathname + "?" + createQueryString("filter", "wordpress")
          }
        >
          Wordpress
        </Link>
      </span>
      <span>
        {" "}
        <Link
          href={
            // <pathname>?sort=desc
            pathname + "?" + createQueryString("filter", "woocommerce")
          }
        >
          Woocommerce
        </Link>
      </span>

      <span>
        {" "}
        <Link
          href={
            // <pathname>?sort=desc
            pathname + "?" + createQueryString("filter", "phpMysql")
          }
        >
          PhpMysql
        </Link>
      </span>
      <span>
        {" "}
        <Link
          href={
            // <pathname>?sort=desc
            pathname + "?" + createQueryString("filter", "nextreact")
          }
        >
          Next/React
        </Link>
      </span>
    </div>
  );
};

export default Filter;
