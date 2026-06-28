"use client";

import React, { useState, ReactNode } from "react";

type AccordionProps = {
    title: string;
    children: ReactNode;
};

/**
 * @param title
 * @param children
 * @constructor
 *
 * @example
 * <Accordion title="Click me">
 *   <p>This is hidden content!</p>
 * </Accordion>
 */
export default function Accordion({ title, children }: AccordionProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border rounded mb-2">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
                <span>{title}</span>
                <span>{open ? "▲" : "▼"}</span>
            </button>
            {open && <div className="px-4 py-2">{children}</div>}
        </div>
    );
}
