"use client";
import { useEffect, useState } from "react";
import navstyles from "../navstyles.module.scss";
import useLanguage from "@/hooks/useLanguage";
import Skeleton from "react-loading-skeleton";

/**
 * LanguageChanger
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for displaying the active language
 *   and triggering the language toggle action.
 * - Language state management is delegated to the custom useLanguage hook.
 * - Loading placeholder rendering is handled locally until the component mounts.
 *
 * OCP - Open/Closed Principle (Partially)
 * - The component is open to extension through the useLanguage hook.
 * - New language-related behavior can be added by extending the hook
 *   without modifying this component's rendering logic.
 *
 * DIP - Dependency Inversion Principle (Partially)
 * - This component depends on the abstraction provided by the useLanguage hook
 *   rather than implementing language management itself.
 * - The hook encapsulates the underlying language storage and update mechanism.
 */
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
