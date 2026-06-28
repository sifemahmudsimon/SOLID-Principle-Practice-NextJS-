"use client";

import React from "react";

type Suggestion = {
  phrase: string;
};

interface SearchInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  value: string;
  onChange: (value: string) => void;
  suggestions?: Suggestion[];
  className?: string;
}

function SearchInput({
  value,
  onChange,
  suggestions = [],
  className = "",
  ...rest
}: SearchInputProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bg-white h-10.5 w-full top-0 flex justify-center">
      <div className="relative w-full max-w-150">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`border rounded px-4 py-1 w-full ${className}`}
          placeholder="Search..."
          {...rest}
        />
      </div>
    </div>
  );
}

interface Props {
  suggestions: Suggestion[];
  onSelect: (value: string) => void;
}
function SearchSuggestionList({ suggestions, onSelect }: Props) {
  if (!suggestions.length) return null;

  return (
    <ul className="absolute top-full left-0 right-0 mt-1 rounded border bg-white shadow-lg z-50">
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

export default SearchInput;
