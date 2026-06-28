import { Suggestion } from "@/typings/search";

interface Props {
  suggestions: Suggestion[];
  onSelect: (phrase: string) => void;
}

/**
 * SearchSuggestionList
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for rendering search suggestions
 *   and notifying the parent when a suggestion is selected.
 * - It does not manage search state, filtering, or navigation logic.
 *
 * OCP - Open/Closed Principle (OCP)
 * - The component is open for extension through its props.
 * - Different suggestion data and selection behaviors can be provided
 *   without modifying the component.
 *
 * DIP - Dependency Inversion Principle (Partially)
 * - This component depends on the onSelect callback abstraction instead
 *   of implementing selection behavior or navigation logic itself.
 * 
 * ISP - Interface Segregation Principle (ISP)
 * - The Props interface contains only the data and callback required
 *   by this component.
 */
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
