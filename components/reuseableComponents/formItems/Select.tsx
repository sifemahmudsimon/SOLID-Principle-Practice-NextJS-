"use client";

import React, { SelectHTMLAttributes } from "react";


type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: string;
};

/**
 * Props for the Select component.
 *
 * @property {string} [label] - Optional label text displayed above the select.
 * @property {string} [error] - Optional error message.
 *
 * Supports all standard HTML select props.
 * Ex.
 * <Select
 *   label="Choose your fruit"
 *   error={selected ? "" : "Please select one"}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * >
 *   <option value="">Select</option>
 *   <option value="apple">Apple</option>
 *   <option value="banana">Banana</option>
 *   <option value="orange">Orange</option>
 * </Select>
 */
export default function Select({ label, error, children, ...props }: SelectProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}
            <select
                {...props}
                className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? "border-red-500" : ""
                }`}
            >
                {children}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
