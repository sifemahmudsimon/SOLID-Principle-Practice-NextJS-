"use client";

import React, { InputHTMLAttributes } from "react";


type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

/**
 * Props for the Checkbox component.
 *
 * @property {string} [label] - Label displayed next to the checkbox.
 * @property {boolean} [error] - Optional error message.
 *
 * Supports all standard HTML input props for type="checkbox".
 * Ex. for single checkbox
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={agreed}
 *   onChange={(e) => setAgreed(e.target.checked)}
 *   error={!agreed ? "You must agree to continue" : ""}
 * />
 */
export default function Checkbox({ label, error, ...props }: CheckboxProps) {
    return (
        <div className="flex items-center mb-4">
            <input
                type="checkbox"
                {...props}
                className={`mr-2 w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500`}
            />
            {label && <span>{label}</span>}
            {error && <p className="text-red-500 text-sm ml-6">{error}</p>}
        </div>
    );
}
