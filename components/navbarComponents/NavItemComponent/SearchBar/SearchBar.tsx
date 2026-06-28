"use client";

import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import useSearchSuggestions from "@/hooks/useSearchSuggestions";
import SearchSuggestionList from "./SearchSuggestionList";
import { useRouter } from "next/navigation";

/**
 * RightSection
 *
 * Renders the right-side actions of the navigation bar by composing
 * reusable navigation-related components.
 *
 * SOLID Principles:
 *
 * SRP – Single Responsibility Principle
 * - Responsible only for composing and rendering the right section of the
 *   navigation bar.
 * - Delegates navigation, search, and icon rendering to child components.
 *
 * OCP – Open/Closed Principle (Partially)
 * - New navigation items can be added by composing additional `NavLinks`
 *   or other reusable components without changing existing child components.
 *
 * DIP – Dependency Inversion Principle (Partially)
 * - Depends on abstractions exposed by child React components (`NavLinks`
 *   and `SearchBar`) rather than their internal implementations.
 * - Still directly imports concrete components, which is acceptable for
 *   an application-level composition component.
 */
export default function SearchBar() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  const { suggestions } = useSearchSuggestions(searchQuery);

  const handleSuggestionSelect = (phrase: string) => {
    router.push(`/search?query=${encodeURIComponent(phrase)}`);
  };

  return (
    <div className="flex">
      {showInput && (
        <>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            autoFocus
            onBlur={() => setShowInput(false)}
            placeholder="Search for products, brands and more"
          />
          <SearchSuggestionList
            suggestions={suggestions}
            onSelect={handleSuggestionSelect}
          />
        </>
      )}

      <SearchButton onClick={() => setShowInput((v) => !v)} />
    </div>
  );
}
