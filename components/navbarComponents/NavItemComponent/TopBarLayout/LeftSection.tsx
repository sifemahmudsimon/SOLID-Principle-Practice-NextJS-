import React from "react";
import NavLinks from "../NavLink";
import LanguageChanger from "../LanguageChanger";
function LeftSection() {
  return (
    <div className="flex gap-4">
      <NavLinks />
      <LanguageChanger />
    </div>
  );
}

export default LeftSection;
