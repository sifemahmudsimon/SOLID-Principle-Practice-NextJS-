"use client";

import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};


/**
 * Props for the Input component.
 *
 * @property {string} [label] - Optional label text displayed above the input.
 *
 * Supports all standard HTML input props: type, value, onChange, placeholder, required, disabled, autoFocus, etc.
 *
 * @example
 * ```tsx
 *  /*
 *  For Usage Example
 *  <Input label="Email" type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} autoFocu/>
 *   */

export default function Input({ label, error, ...props }: InputProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}
            <input
                {...props}
                className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? "border-red-500" : ""
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
