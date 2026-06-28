"use client";

import React, { useState, useRef, useEffect } from "react";

type AutocompleteProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
};

/**
 * A text input with autocomplete suggestions.
 *
 * Filters options based on what the user types and allows selection from the list.
 *
 * @param options - Array of selectable options
 * @param value - Current input value
 * @param onChange - Callback fired when value changes or an option is selected
 * @param label - Optional label displayed above the input
 * @param placeholder - Optional placeholder text
 *
 * @example
 * // Basic usage
 * const fruits = ["Apple", "Banana", "Orange", "Mango"];
 * const [fruit, setFruit] = React.useState("");
 *
 * <Autocomplete
 *   label="Select a fruit"
 *   options={fruits}
 *   value={fruit}
 *   onChange={setFruit}
 *   placeholder="Type to search..."
 * />
 *
 * @example
 * // Controlled input with form integration
 * const [formData, setFormData] = React.useState({ fruit: "" });
 * const fruits = ["Apple", "Banana", "Orange", "Mango"];
 *
 * <Autocomplete
 *   label="Favorite fruit"
 *   options={fruits}
 *   value={formData.fruit}
 *   onChange={(value) => setFormData({ ...formData, fruit: value })}
 *   placeholder="Type a fruit"
 * />
 */

export default function Autocomplete({
                                         options,
                                         value,
                                         onChange,
                                         label,
                                         placeholder,
                                     }: AutocompleteProps) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
    );

    // close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col mb-4 relative" ref={containerRef}>
            {label && <label className="mb-1 font-medium">{label}</label>}

            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {open && filtered.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-md max-h-40 overflow-y-auto z-50">
                    {filtered.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
