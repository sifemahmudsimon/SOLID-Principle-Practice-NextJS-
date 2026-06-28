import React from "react";
import NavLinks from "../NavLink";
import LanguageChanger from "../LanguageChanger";

/**
 * LeftSection
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for composing the left section of the navigation bar.
 * - It delegates navigation and language-switching behavior to child components.
 */
function LeftSection() {
  return (
    <div className="flex gap-4">
      <NavLinks href="/personal" label="Personal" />
      <LanguageChanger />
    </div>
  );
}

export default LeftSection;
