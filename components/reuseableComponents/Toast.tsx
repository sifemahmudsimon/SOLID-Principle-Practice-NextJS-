"use client";

import React, { useEffect } from "react";

type ToastProps = {
    message: string;
    type?: "success" | "error" | "info";
    duration?: number; // ms
    onClose: () => void;
};


/**
 * @param message
 * @param type
 * @param duration
 * @param onClose
 * @constructor
 *
 * @example
 * {showToast && (
 *   <Toast
 *     message="Saved successfully!"
 *     type="success"
 *     onClose={() => setShowToast(false)}
 *   />
 * )}
 */
export default function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const bg = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";

    return (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow text-white ${bg}`}>
            {message}
        </div>
    );
}
