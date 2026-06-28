"use client";
import { useEffect, useState } from "react";
import navstyles from "../navstyles.module.scss";
import useLanguage from "@/hooks/useLanguage";
import Skeleton from "react-loading-skeleton";

function LanguageChanger() {
  const [mounted, setMounted] = useState(false);
  const { currentLanguageLabel, toggleLanguage } = useLanguage();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton width={66} height={22} />;
  }

  return (
    <button onClick={toggleLanguage} className={navstyles.navItems}>
      {currentLanguageLabel}
    </button>
  );
}

export default LanguageChanger;
