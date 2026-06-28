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

/**
 * NavLink
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for rendering a navigation link.
 * - It determines whether the link is active and displays optional icon and label.
 * - Navigation routing is delegated to Next.js Link.
 *
 * OCP - Open/Closed Principle (OCP)
 * - The component is open for extension through its props.
 * - Different links, labels, and icons can be provided without modifying
 *   the component's implementation.
 *
 * DIP - Dependency Inversion Principle (Partially)
 * - This component depends on the abstraction provided by Next.js routing
 *   (Link and usePathname) instead of implementing navigation logic itself.
 * 
 * ISP - Interface Segregation Principle
 * - The NavLinkProps interface exposes only the properties required by
 *   this component (href, label, and optional icon), avoiding unnecessary
 *   dependencies.
 */
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
