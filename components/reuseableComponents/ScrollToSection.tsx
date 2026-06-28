"use client";

import React from "react";

type ScrollToSectionProps = {
    targetId: string;
    children: React.ReactNode;
    offset?: number; // optional offset for fixed headers
    smooth?: boolean;
};

/**
 * @param targetId
 * @param children
 * @param offset
 * @param smooth
 * @constructor
 *
 * @example
 * <ScrollToSection targetId="about" offset={80}>
 *   Go to About Section
 * </ScrollToSection>
 *
 * <section id="about" className="h-screen">
 *   <h2>About Us</h2>
 * </section>
 */
export default function ScrollToSection({
                                            targetId,
                                            children,
                                            offset = 0,
                                            smooth = true,
                                        }: ScrollToSectionProps) {
    const handleClick = () => {
        const el = document.getElementById(targetId);
        if (!el) return;

        const top =
            el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: smooth ? "smooth" : "auto",
        });
    };

    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>
    );
}
