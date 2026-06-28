"use client";

import React, { InputHTMLAttributes } from "react";

type FileInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    onChangeFiles?: (files: FileList | null) => void;
    error?: string;
};

/**
 * A reusable file input component with optional error handling.
 *
 * Supports all standard HTML <input type="file"> props
 * such as `accept`, `multiple`, `disabled`, `required`, etc.
 *
 * @param label - Optional label displayed above the input
 * @param onChangeFiles - Callback fired when file selection changes
 * @param error - Optional error message displayed below the input
 * @param props - All other standard file input attributes
 *
 * @example
 * const [file, setFile] = React.useState<File | null>(null);
 *
 * <FileInput
 *   label="Upload Resume"
 *   accept=".pdf"
 *   error={!file ? "Resume is required" : ""}
 *   onChangeFiles={(files) => {
 *     setFile(files?.[0] ?? null);
 *   }}
 * />
 */
export default function FileInput({
                                      label,
                                      onChangeFiles,
                                      error,
                                      ...props
                                  }: FileInputProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}

            <input
                type="file"
                {...props}
                onChange={(e) => onChangeFiles?.(e.target.files)}
                className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
