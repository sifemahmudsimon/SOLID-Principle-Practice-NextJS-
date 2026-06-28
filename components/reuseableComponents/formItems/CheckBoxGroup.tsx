import React from "react";
import Checkbox from "./Checkbox";

type Option = {
    label: string;
    value: string;
};

type CheckboxGroupProps = {
    options: Option[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    error?: string;
};

/**
 * Renders a group of checkboxes allowing multiple selections.
 *
 * @param options - Array of options to display
 * @param selectedValues - Array of currently selected values
 * @param onChange - Callback fired when selection changes
 * @param error - Optional error message
 *
 * @example
 * const fruits = [
 *   { label: "Apple", value: "apple" },
 *   { label: "Banana", value: "banana" },
 * ];
 * const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);
 *
 * <CheckboxGroup
 *   options={fruits}
 *   selectedValues={selectedFruits}
 *   onChange={setSelectedFruits}
 *   error={selectedFruits.length === 0 ? "Select at least one fruit" : ""}
 * />
 */

export default function CheckboxGroup({
                                          options,
                                          selectedValues,
                                          onChange,
                                          error,
                                      }: CheckboxGroupProps) {
    const handleToggle = (value: string) => {
        if (selectedValues.includes(value)) {
            // Remove from selection
            onChange(selectedValues.filter((v) => v !== value));
        } else {
            // Add to selection
            onChange([...selectedValues, value]);
        }
    };

    return (
        <div className="flex flex-col mb-4">
            {options.map((option) => (
                <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                />
            ))}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
