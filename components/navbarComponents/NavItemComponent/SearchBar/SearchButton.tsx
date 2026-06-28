import Image from "next/image";
import React from "react";
import SearchIcon from "@/public/icons/searchicon.svg";

type Props = {
  onClick: () => void;
};

function SearchButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <Image src={SearchIcon} width={24} height={24} alt="Search icon" />
    </button>
  );
}

export default SearchButton;
