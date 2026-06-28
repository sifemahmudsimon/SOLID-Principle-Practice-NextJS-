import Image from "next/image";
import React from "react";
import SearchIcon from "@/public/icons/searchicon.svg";

type Props = {
  onClick: () => void;
};

/**
 * SearchButton
 *
 * Renders a reusable search button.
 *
 * SOLID Principles:
 *
 * SRP - Single Responsibility Principle
 * - Responsible only for rendering the search button.
 * - Delegates click handling to the parent component via the `onClick` callback.
 *
 * OCP - Open/Closed Principle
 * - Can be extended by changing the passed callback or replacing the icon
 *   without modifying the component's responsibility.
 * 
 * ISP - Interface Segregation Principle
 * - Follows interface segregation by exposing only the single prop
 *   (`onClick`) required for its behavior.
 *
 * DIP - Dependency Inversion Principle
 * - Depends on an abstract callback (`onClick`) rather than a concrete
 *   implementation of the click behavior.
 */
function SearchButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <Image src={SearchIcon} width={24} height={24} alt="Search icon" />
    </button>
  );
}

export default SearchButton;
