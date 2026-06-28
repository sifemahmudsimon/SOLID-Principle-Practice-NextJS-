"use client";

import Link from "next/link";
import React from "react";

type BreadcrumbItem = {
    label: string;
    href?: string; // if undefined, it's the current page
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

/**
 * @param items
 * @constructor
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Products", href: "/products" },
 *     { label: "Shoes" }, // current page
 *   ]}
 * />
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="text-gray-600 text-sm flex space-x-1" aria-label="Breadcrumb">
            {items.map((item, idx) => (
                <span key={idx} className="flex items-center">
          {item.href ? (
              <Link href={item.href} className="hover:underline">
                  {item.label}
              </Link>
          ) : (
              <span className="font-semibold">{item.label}</span>
          )}
                    {idx < items.length - 1 && <span className="mx-1">/</span>}
        </span>
            ))}
        </nav>
    );
}
