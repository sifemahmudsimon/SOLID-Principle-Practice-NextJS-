"use client";

import React from "react";

type SpinnerProps = {
    size?: number;
    color?: string;
    className?: string;
};

/**
 * A simple spinning loader / spinner component.
 *
 * @param size - Diameter of the spinner in pixels
 * @param color - Color of the spinning segment (Tailwind class)
 * @param className - Additional classes for styling
 *
 * @example
 * <Spinner />
 *
 * @example
 * <Spinner size={48} color="red-500" className="mx-auto" />
 */
export default function Spinner({
                                    size = 40,
                                    color = "blue-500",
                                    className = "",
                                }: SpinnerProps) {
    return (
        <div
            className={`animate-spin rounded-full border-4 border-t-${color} border-gray-200 ${className}`}
            style={{ width: size, height: size }}
        />
    );
}
