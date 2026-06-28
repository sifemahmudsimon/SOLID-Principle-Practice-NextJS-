"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Props for IconButton.
 *
 * @property {ReactNode} icon - Icon element to render inside button.
 * @property {string} [label] - Optional accessible label for screen readers.
 *
 * @example
 * <IconButton icon={<span>🔍</span>} label="Search" onClick={() => alert("Clicked")} />
 */
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    label?: string;
};

export default function IconButton({ icon, label, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            aria-label={label}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {icon}
        </button>
    );
}
