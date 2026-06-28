import React from "react";
import NavLinks from "../NavLink";
import SearchBar from "../SearchBar/SearchBar";
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

/**
 * RightSection
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for composing the left section of the navigation bar.
 * - It delegates navigation and language-switching behavior to child components.
 */
function RightSection() {
  return (
    <div className="flex gap-4">
      <NavLinks href="/get-mygp" label="Get MyGp" />
      <NavLinks href="/track-gp-shop-order" label="Track Gp Shop Order" />
      <SearchBar />
      <NavLinks
        href="/support"
        label="Support"
        icon={<BiSupport size={24} />}
      />
      <NavLinks href="/login" label="login" icon={<CgProfile size={24} />} />
    </div>
  );
}

export default RightSection;
