import { useEffect, useRef, useState } from "react";
import { CookieUtils } from "@/utils/CookieUtils";
import CookiesName from "@/constants/CookiesName";
import LanguageNames from "@/constants/LanguageNames";

/**
 * Custom hook for managing the application's language.
 *
 * Responsibilities:
 * - Reads the current language from cookies.
 * - Keeps the language in React state.
 * - Persists language changes to cookies.
 * - Returns the current language object.
 * - Provides methods to change to a specific language or cycle to the next one.
 *
 * @returns {{
 *   languageCode: string;
 *   currentLanguageLabel: string;
 *   changeLanguage: (newLanguage: string) => void;
 *   toggleLanguage: () => void;
 *   languageList: { code: string; label: string }[];
 * }}
 */
export default function useLanguage() {
  const [languageCode, setLanguageCode] = useState(
    CookieUtils.get(CookiesName.Language) ?? "en"
  );

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const changeLanguage = (newLanguage: string) => {
    CookieUtils.set(CookiesName.Language, newLanguage);
    setLanguageCode(newLanguage);
  };

  const currentLanguageLabel =
    LanguageNames.find((item) => item.code === languageCode)?.label ??
    LanguageNames[0].label;

  const toggleLanguage = () => {
    const currentIndex = LanguageNames.findIndex(
      (item) => item.code === languageCode
    );

    const nextLanguage =
      LanguageNames[(currentIndex + 1) % LanguageNames.length].code;

    changeLanguage(nextLanguage);
  };

  return {
    /** Current language code. */
    languageCode,

    /** Current language object (label). */
    currentLanguageLabel,

    /** Changes to a specific language. */
    changeLanguage,

    /** Cycles to the next available language. */
    toggleLanguage,

    /** List of all supported languages. */
    languageList: LanguageNames,
  };
}
