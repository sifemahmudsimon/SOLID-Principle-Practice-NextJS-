import React from "react";
import NavLinks from "../NavLink";
import SearchBar from "../SearchBar/SearchBar";

function RightSection() {
  return (
    <div className="flex gap-4">
      <NavLinks />
      <SearchBar />
    </div>
  );
}

export default RightSection;
