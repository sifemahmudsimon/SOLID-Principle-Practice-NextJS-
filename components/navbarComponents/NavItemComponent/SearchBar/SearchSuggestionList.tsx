import { Suggestion } from "@/typings/search";

interface Props {
  suggestions: Suggestion[];
  onSelect: (phrase: string) => void;
}

function SearchSuggestionList({ suggestions, onSelect }: Props) {
  if (!suggestions.length) return null;

  return (
    <ul className="absolute top-full left-1/2 -translate-x-1/2 right-0 mt-1 rounded border bg-white shadow-lg z-50 w-full max-w-150">
      {suggestions.map((item) => (
        <li
          key={item.phrase}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
          onMouseDown={() => onSelect(item.phrase)}
        >
          {item.phrase}
        </li>
      ))}
    </ul>
  );
}

export default SearchSuggestionList;
