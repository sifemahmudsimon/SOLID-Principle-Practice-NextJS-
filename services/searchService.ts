import { Suggestion } from "@/typings/search";

export async function getSearchSuggestions(
  query: string,
  signal?: AbortSignal
): Promise<Suggestion[]> {
  const response = await fetch(
    `/api/search-suggestions?q=${encodeURIComponent(query)}`,
    { signal }
  );

  const data = await response.json();

  return data[1].map((phrase: string) => ({ phrase }));
}
