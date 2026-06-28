"use client";

import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import useSearchSuggestions from "@/hooks/useSearchSuggestions";
import SearchSuggestionList from "./SearchSuggestionList";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  const { suggestions } = useSearchSuggestions(query);

  return (
    <div className="flex">
      {showInput && (
        <>
          <SearchInput
            value={query}
            onChange={setQuery}
            suggestions={suggestions}
            autoFocus
            onBlur={() => setShowInput(false)}
          />
          <SearchSuggestionList
            suggestions={suggestions}
            onSelect={(phrase) =>
              router.push(`/search?query=${encodeURIComponent(phrase)}`)
            }
          />
        </>
      )}

      <SearchButton onClick={() => setShowInput((v) => !v)} />
    </div>
  );
}
