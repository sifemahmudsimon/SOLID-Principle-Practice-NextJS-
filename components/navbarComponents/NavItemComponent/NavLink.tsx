import Link from "next/link";
import React from "react";
import navstyles from "../navstyles.module.scss";
function NavLink() {
  return (
    <Link href="/personal">
      <p className={`${navstyles.navItems} border-b border-[#0078CF]`}>
        Personal
      </p>
    </Link>
  );
}

export default NavLink;
