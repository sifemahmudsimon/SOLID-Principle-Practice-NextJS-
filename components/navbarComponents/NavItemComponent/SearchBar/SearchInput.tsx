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
  className?: string;
}

/**
 * SearchInput
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is responsible only for rendering a controlled search input.
 * - It delegates state management and input change handling to its parent component.
 *
 * OCP - Open/Closed Principle (OCP)
 * - The component is open for extension through props.
 * - Additional HTML input attributes can be passed via the inherited
 *   InputHTMLAttributes without modifying the component.
 *
 * DIP - Dependency Inversion Principle (Partially)
 * - This component depends on the onChange callback abstraction instead of
 *   implementing input state management itself.
 *
 * LSP - Liskov Substitution Principle
 * - subtype elements are easily swappable for the same element type from the supertype element”.
 *
 * ISP - Interface Segregation Principle (ISP)
 * - SearchInputProps exposes only the properties required by this component
 *   while inheriting standard HTML input attributes.
 */
function SearchInput({
  value,
  onChange,
  className = "",
  ...rest
}: SearchInputProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bg-white h-10.5 w-full top-2 flex justify-center">
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

export default SearchInput;
