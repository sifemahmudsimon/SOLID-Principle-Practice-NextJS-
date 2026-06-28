"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import navstyles from "../navstyles.module.scss";

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

function NavLink({ href, label, icon }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-1 transition-colors hover:text-[#0078CF] ${
          isActive ? "border-b-2 border-[#0078CF] text-[#0078CF] font-bold" : ""
        }`}
      >
        <span>{icon}</span>
        <span className={navstyles.navItems}>{label}</span>
      </div>
    </Link>
  );
}

export default NavLink;
