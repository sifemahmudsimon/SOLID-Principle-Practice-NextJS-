"use client";

import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { getSearchSuggestions } from "@/services/searchService";
import { Suggestion } from "@/typings/search";

export default function useSearchSuggestions(query: string) {
  const debouncedQuery = useDebounce(query, 300);

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);

        const data = await getSearchSuggestions(
          debouncedQuery,
          controller.signal
        );

        setSuggestions(data);
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [debouncedQuery]);

  return {
    suggestions,
    loading,
  };
}
