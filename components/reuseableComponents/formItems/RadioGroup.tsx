"use client";

import React, { ReactNode } from "react";


type RadioGroupProps = {
    label?: string;
    options: string[];
    value: string;
    error?: string;
    onChange: (value: string) => void;
};

/**
 * A group of radio buttons allowing the user to select **one option**.
 * @example
 * const colors = ["Red", "Green", "Blue"];
 * const [selectedColor, setSelectedColor] = React.useState("Red");
 *
 * <RadioGroup
 *   label="Choose a color"
 *   options={colors}
 *   value={selectedColor}
 *   onChange={setSelectedColor}
 *   error={!selectedColor ? "Please select a color" : ""}
 * />
 */
export default function RadioGroup({ label, options, value,error, onChange }: RadioGroupProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <span className="mb-2 font-medium">{label}</span>}
            <div className="flex flex-col space-y-1">
                {options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name={label}
                            value={option}
                            checked={value === option}
                            onChange={() => onChange(option)}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
