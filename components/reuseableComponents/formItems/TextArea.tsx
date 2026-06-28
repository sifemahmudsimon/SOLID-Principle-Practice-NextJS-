"use client";

import React, { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

/**
 * Props for the Textarea component.
 *
 * @property {string} [label] - Optional label text displayed above the textarea.
 * @property {string} [error] - Optional error message.
 *
 * Supports all standard HTML textarea props.
 * Ex.
 * <Textarea label="Your Message" error="Message is required"  placeholder="Type here..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)}/>
 */
export default function Textarea({ label, error, ...props }: TextareaProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}
            <textarea
                {...props}
                className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? "border-red-500" : ""
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
