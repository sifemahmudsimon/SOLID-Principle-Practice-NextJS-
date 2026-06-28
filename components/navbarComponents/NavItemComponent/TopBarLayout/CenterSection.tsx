import Image from "next/image";
import Link from "next/link";
import React from "react";

function CenterSection() {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={42}
        height={44}
        className="absolute top-2 left-1/2 transform -translate-x-1/2 "
      />
    </Link>
  );
}

export default CenterSection;
