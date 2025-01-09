"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center relative nav-link">
      <Link href={href} className="c-text text-sm hover:text-primary transition-colors ease-in-out duration-100">
        {children}
      </Link>
      {pathname === href && (
        <div className="w-3 h-[3px] rounded-full bg-primary absolute -bottom-1" />
      )}
    </div>
  );
};

export default NavLink;
