"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
        >
            {children}
        </button>
    );
}
